import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SystemLogoComponent } from '../systemLogo/system-logo.component';
import { UserCircleComponent } from '../user/user-circle.component';

@Component({
  selector: 'app-layout-system',
  standalone: true,
  imports: [CommonModule, UserCircleComponent, SystemLogoComponent],
  templateUrl: './layout-system.component.html',
  styleUrls: ['./layout-system.component.css'],
})
export class LayoutSystemComponent implements OnInit {
  open = true;
  menuSelected = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuSelected = this.router.url.split('/')[2];

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuSelected = this.router.url.split('/')[2];
      });
  }

  toggleMenu() {
    this.open = !this.open;
  }

  toggleMenuSelection(menu: string): void {
    this.menuSelected = menu;
    this.router.navigate([`user/${menu}`]);
  }
}
