import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  made = ""
    constructor(private config:ConfigService) {
      this.config.getContent().subscribe(
        (content) => {
          this.made = content.made
        }
      )
    }
}