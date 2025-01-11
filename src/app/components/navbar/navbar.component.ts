import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems:any = []
  langItems:any = []
  actLang = "Magyar"
  name = ""
  langSelectorCollapse = true

  constructor(private config:ConfigService) {
    config.getContent().subscribe(
      (content) => {
        this.langItems = content.langItems
        this.menuItems = content.menu
        this.name = content.name
      }
    )
  }

  langChange(lang:any) {
    this.actLang = lang.text
    this.config.changeLanguage(lang.sign)
    this.langSelectorCollapse = true
  }
}