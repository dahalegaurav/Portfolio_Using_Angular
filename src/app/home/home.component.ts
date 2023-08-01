import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const mobileNavToggle = this.elementRef.nativeElement.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', (e: Event) => {
        const navbar = this.elementRef.nativeElement.querySelector('#navbar');
        if (navbar) {
          navbar.classList.toggle('navbar-mobile');
        }

        (e.currentTarget as HTMLElement)?.classList.toggle('bi-list');
        (e.currentTarget as HTMLElement)?.classList.toggle('bi-x');
      });
    }

    document.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).matches('#navbar .nav-link')) {
        let section = this.elementRef.nativeElement.querySelector((e.target as HTMLAnchorElement).hash);
        if (section) {
          e.preventDefault();

          let header = this.elementRef.nativeElement.querySelector('#header');
          let sections = this.elementRef.nativeElement.querySelectorAll('section');
          let navlinks = this.elementRef.nativeElement.querySelectorAll('#navbar .nav-link');

          navlinks.forEach((item: HTMLElement) => {
            item.classList.remove('active');
          });

          (e.target as HTMLElement).classList.add('active');

          const navbar = this.elementRef.nativeElement.querySelector('#navbar');
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            mobileNavToggle.classList.toggle('bi-list');
            mobileNavToggle.classList.toggle('bi-x');
          }

          if ((e.target as HTMLAnchorElement).hash == '#header') {
            header.classList.remove('header-top');
            sections.forEach((item: HTMLElement) => {
              item.classList.remove('section-show');
            });
            return;
          }

          if (!header.classList.contains('header-top')) {
            header.classList.add('header-top');
            setTimeout(function () {
              sections.forEach((item: HTMLElement) => {
                item.classList.remove('section-show');
              });
              section.classList.add('section-show');
            }, 350);
          } else {
            sections.forEach((item: HTMLElement) => {
              item.classList.remove('section-show');
            });
            section.classList.add('section-show');
          }
        }
      }
    }, true);
  }

}
