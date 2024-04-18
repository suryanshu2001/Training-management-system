import { ActiveClickDirective } from './../../../directives/active-click.directive';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  activeItem:string='home'
  constructor(private renderer: Renderer2) { }
  toggleItem(option:string) {
    if(option != this.activeItem){
      this.activeItem = option;
    }
  }
}
