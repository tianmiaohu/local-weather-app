import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('Bethesda, US', [Validators.minLength(2)]);

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if (this.search.valid) {
        this.fetchWeatherData(searchValue);
      }
    });
    this.fetchWeatherData(this.search.value);
  }

  fetchWeatherData(searchValue: string): void {
    const userInput = searchValue.split(',').map(s => s.trim());
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => this.weatherService.currentWeather.next(data));
  }

}