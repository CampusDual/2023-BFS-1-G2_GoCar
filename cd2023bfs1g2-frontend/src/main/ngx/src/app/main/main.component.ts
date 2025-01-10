import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
    @ViewChild('footer', { static: false }) footer: ElementRef;

    public user:string;

    ngOnInit(){
      const localStorageData = JSON.parse(localStorage.getItem('com.ontimize.web.ngx.jee.seed'));
    this.user = localStorageData.session.user;

    if (localStorageData && localStorageData.session && localStorageData.session.user) {
      this.user = localStorageData.session.user;
    }
    this.checkScroll();
    }

    checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const footerElement = document.querySelector('.footer');
  
    if (footerElement) {
      if (scrollPosition > 0) {
        footerElement.classList.add('active');
      } else {
        footerElement.classList.remove('active');
      }
    }
  }
}
