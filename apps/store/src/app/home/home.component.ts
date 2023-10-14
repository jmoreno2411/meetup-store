import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@meetup-store/shared';

@Component({
  selector: 'meetup-store-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  // imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {}
