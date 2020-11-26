import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {first, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cc01e16e3ffe86afb1439e66e219b640';
 
  private readonly forcastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cc01e16e3ffe86afb1439e66e219b640';
  private readonly appID = environment.appID;

  constructor(public http: HttpClient) {
  }

  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.forcastURL}${city}&units=${metric}&APPID=${this.appID}`)
      .pipe(first(), map((weather) => weather['list']));
  }

  // [0].main
  // getWeatherState
  //
  // getCurrentTemp
  // Math.round(Number(weather.main.temp))
  //
  //
  // getCurrentHum
  // weather.main.humidity
  //
  //
  // getCurrentWind
  // Math.round(Math.round(weather.wind.speed))


}
