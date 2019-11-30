import {Component, OnInit} from '@angular/core';
import {SpicinemasService} from '../../services/spicinemas.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {TerminalMovie} from '../../models/terminal_movie';

@Component({
  selector: 'lib-spicinemas',
  templateUrl: './spicinemas.component.html',
  styleUrls: ['./spicinemas.component.scss']
})
export class SpicinemasComponent implements OnInit {

  movies: string[];
  movieStatus: TerminalMovie = null;
  movieForm = new FormGroup({
    movie: new FormControl('', Validators.required)
  });
  apicall: Subscription;
  isActive: boolean;

  constructor(private service: SpicinemasService) {
    this.isActive = false;
  }

  ngOnInit() {
    this.service.getAllComingSoonMovies().subscribe(res => {
      const response: any = res;
      this.movies = response.movies;
    });
  }

  getStatus() {
    this.isActive = true;
    this.apicall = interval(10 * 60 * 1000)
      .pipe(
        flatMap(() => this.service.checkStatus(this.movieForm.value.movie))
      )
      .subscribe(res => {
        const response: any = res;
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
          this.apicall.unsubscribe();
        }
      });
  }

  stop() {
    this.isActive = false;
    this.apicall.unsubscribe();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/audio/alert.mp3';
    audio.load();
    setInterval(() => audio.play(), 1000);
  }
}
