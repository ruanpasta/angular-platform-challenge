import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent, SystemLogoComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SystemLogoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  breadcrumbItems: any[] = [{ label: 'Home', link: '/user/home' }];
}
