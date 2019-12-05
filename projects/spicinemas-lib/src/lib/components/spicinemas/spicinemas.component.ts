import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SpicinemasService} from '../../services/spicinemas.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {combineLatest, interval, merge, Observable, pipe, Subscription, timer} from 'rxjs';
import {first, flatMap, map, switchMap, take, takeWhile, tap} from 'rxjs/operators';
import {TerminalMovie} from '../../models/terminal_movie';

@Component({
  selector: 'lib-spicinemas',
  templateUrl: './spicinemas.component.html',
  styleUrls: ['./spicinemas.component.scss']
})
export class SpicinemasComponent implements OnInit, OnDestroy {
  timer = 10;
  movies: string[];
  movieStatus: TerminalMovie = null;
  movieForm = new FormGroup({
    movie: new FormControl('', Validators.required)
  });
  isActive: boolean;
  @ViewChild('progress', {static: false}) progress: ElementRef<HTMLElement>;
  source$ = timer(0, 60000);
  source2$ = timer(0, 1000);
  private movieSubscription$: Subscription;
  private timerSubscription$: Subscription;
  private apiSubscription$: Subscription;

  constructor(private service: SpicinemasService) {
    this.isActive = false;
  }

  ngOnInit() {
    this.movieSubscription$ = this.service.getAllComingSoonMovies().subscribe(res => {
      const response: any = res;
      this.movies = response.movies;
    });

  }

  getStatus() {
    this.isActive = true;
    this.apiSubscription$ = this.source$.pipe(
      switchMap(() => {
        const counter$ = this.source2$.pipe(
          tap((timer: number) => {
            this.timer = 60 - timer;
            this.progress.nativeElement.style.width = (timer / 60) * 100 + '%';
          })
        );
        const status$ = this.service.checkStatus(this.movieForm.value.movie).pipe(
          first(),
          tap((response: any) => {
            if (!response.status) {
              this.movieStatus = {
                movie: this.movieForm.value.movie,
                status: response.status,
                message: 'Booking not yet opened!'
              };
            } else {
              this.movieStatus = {
                movie: this.movieForm.value.movie,
                status: response.status,
                message: 'Booking opened!'
              };
              this.playAudio();
              this.apiSubscription$.unsubscribe();
            }
          })
        );
        return combineLatest(counter$, status$);
      }),
  ).subscribe();
  }

  stop() {
    this.isActive = false;
    this.apiSubscription$.unsubscribe();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/audio/alert.mp3';
    audio.load();
    setInterval(() => audio.play(), 1000);
  }

  ngOnDestroy(): void {
    this.movieSubscription$.unsubscribe();
    this.timerSubscription$.unsubscribe();
    this.apiSubscription$.unsubscribe();
  }
}
