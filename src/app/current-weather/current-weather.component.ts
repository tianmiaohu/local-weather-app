import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  //template: `<p>current-weather works!</p>`,
  templateUrl: './current-weather.component.html',
  styles: ['']
  //styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Bethesda', 'US')
    .subscribe((data) => {
      this.current = data;
    })
  }
}
