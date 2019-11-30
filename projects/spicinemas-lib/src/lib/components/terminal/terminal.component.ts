import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {TerminalMovie} from '../../models/terminal_movie';
import * as moment from 'moment';

@Component({
  selector: 'lib-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewInit, OnChanges {
  @Input() log: TerminalMovie;
  @ViewChild('terminal', {static: false}) terminal: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.log) {
      const log = this.log.movie + ' : ' + this.log.message;

      const terminalPrompt = this.renderer.createElement('div');
      this.renderer.addClass(terminalPrompt, 'Terminal__Prompt');

      const promptUser = this.renderer.createElement('span');
      this.renderer.addClass(promptUser, 'Prompt__user');
      const promptUserText = this.renderer.createText('varanjith@' + moment(new Date()).format('l_LTS').replace(' ', '') + ':');
      this.renderer.appendChild(promptUser, promptUserText);

      const promptLocation = this.renderer.createElement('span');
      this.renderer.addClass(promptLocation, 'Prompt__location');
      const promptLocationText = this.renderer.createText('~');
      this.renderer.appendChild(promptLocation, promptLocationText);

      const promptDollar = this.renderer.createElement('span');
      this.renderer.addClass(promptDollar, 'Prompt__dollar');
      const promptDollarText = this.renderer.createText('$');
      this.renderer.appendChild(promptDollar, promptDollarText);

      const promptLog = this.renderer.createElement('span');
      this.renderer.addClass(promptLog, 'Terminal__text');
      const promptText = this.renderer.createText(log);
      this.renderer.appendChild(promptLog, promptText);

      this.renderer.appendChild(terminalPrompt, promptUser);
      this.renderer.appendChild(terminalPrompt, promptLocation);
      this.renderer.appendChild(terminalPrompt, promptDollar);

      this.renderer.appendChild(terminalPrompt, promptLog);
      this.renderer.appendChild(this.terminal.nativeElement, terminalPrompt);
      this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
    }
  }

  ngAfterViewInit(): void {
    const terminalPrompt = this.renderer.createElement('div');
    this.renderer.addClass(terminalPrompt, 'Terminal__Prompt');

    const promptUser = this.renderer.createElement('span');
    this.renderer.addClass(promptUser, 'Prompt__user');
    const promptUserText = this.renderer.createText('varanjith@' + moment(new Date()).format('l_LTS').replace(' ', '') + ':');
    this.renderer.appendChild(promptUser, promptUserText);

    const promptLocation = this.renderer.createElement('span');
    this.renderer.addClass(promptLocation, 'Prompt__location');
    const promptLocationText = this.renderer.createText('~');
    this.renderer.appendChild(promptLocation, promptLocationText);

    const promptDollar = this.renderer.createElement('span');
    this.renderer.addClass(promptDollar, 'Prompt__dollar');
    const promptDollarText = this.renderer.createText('$');
    this.renderer.appendChild(promptDollar, promptDollarText);

    const promptLog = this.renderer.createElement('span');
    this.renderer.addClass(promptLog, 'Terminal__text');
    const promptText = this.renderer.createText('Let\' start hacking spicinemas!!');
    this.renderer.appendChild(promptLog, promptText);

    this.renderer.appendChild(terminalPrompt, promptUser);
    this.renderer.appendChild(terminalPrompt, promptLocation);
    this.renderer.appendChild(terminalPrompt, promptDollar);

    this.renderer.appendChild(terminalPrompt, promptLog);
    this.renderer.appendChild(this.terminal.nativeElement, terminalPrompt);
  }
}
