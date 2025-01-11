import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home',
  host: {
    class: "wrapper"
  },
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome = ""
  constructor(private config:ConfigService) {
    this.config.getContent().subscribe(
      (content) => {
        this.welcome = content.welcome
      }
    )
  }
}