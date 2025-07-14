import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: any;
}
