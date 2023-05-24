
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CardComponent } from '../card/card.component';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CardComponent, BreadcrumbComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() breadcrumbItems: BreadcrumbItem[] = [];
}
