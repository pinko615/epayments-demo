import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  showMore: boolean = false;
  showCategories: boolean = false;
  showBrands: boolean = false;
  showLanguages: boolean = false;
  currentLang: string = 'EN';

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
    this.showMore = false;
    this.showCategories = false;
    this.showBrands = false;
    this.showLanguages = false;
  };

  expandMore(type: string) {
    this.showMore = !this.showMore;
    switch (type) {
      case 'categories':
        this.showCategories = !this.showCategories;
        break;
      case 'brands':
        this.showBrands = !this.showBrands;
        break;
      case 'languages':
        this.showLanguages = !this.showLanguages;
        break;
    }
  }

  switchLang(lang: string) {
    this.onSidenavClose();
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
