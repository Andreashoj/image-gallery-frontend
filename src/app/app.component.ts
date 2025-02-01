import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  async ngOnInit() {
    const res = await fetch('https://image-gallery-backend.azurewebsites.net/WeatherForecast')
    const result = await res.json();
    console.log(result)
  }
}
