import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  //template: `<p>current-weather works!</p>`,
  templateUrl: './current-weather.component.html',
  styles: ['']
  //styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: ICurrentWeather;

  constructor() { }

  ngOnInit(): void {
  }
}
