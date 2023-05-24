import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-circle.component.html',
  styleUrls: ['./user-circle.component.css'],
})
export class UserCircleComponent {
  @Input() username: string = '';
}
