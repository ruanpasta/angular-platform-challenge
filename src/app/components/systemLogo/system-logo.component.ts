import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-system-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-logo.component.html',
  styleUrls: ['./system-logo.component.css'],
})
export class SystemLogoComponent {
  @Input() bigger = false;
}
