import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent, HeaderComponent } from '../../components';
import { CodeListComponent } from './codeList/code-list.component';

@Component({
  selector: 'app-menu1',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, CodeListComponent],
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css'],
})
export class Menu1Component {
  breadcrumbItems: any[] = [
    { label: 'Home', link: '/user/home' },
    { label: 'Menu 1', link: '/user/menu1' },
  ];
}
