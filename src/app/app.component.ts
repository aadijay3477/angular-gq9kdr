import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input value!: string;

  constructor() {}

  ngOnInit(): void {}
}
