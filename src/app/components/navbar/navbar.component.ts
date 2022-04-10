import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  currentLang: string = 'EN';
  enFlag: string =
    'https://cdn.iconscout.com/icon/free/png-256/united-states-of-america-flag-country-nation-union-empire-33135.png';
  esFlag: string =
    'https://cdn.iconscout.com/icon/free/png-256/spain-flag-country-nation-union-empire-33105.png';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  switchLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
