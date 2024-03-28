import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  requests = [
    { name: 'List of Files', route: '/' },
    { name: 'List of Tables', route: '/files/:file/tables' },
    { name: 'Table Information', route: '/files/:file/tables/:table' }
  ];

  constructor(public router: Router) {}
}