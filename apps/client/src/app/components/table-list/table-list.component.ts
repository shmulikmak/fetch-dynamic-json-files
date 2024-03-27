import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  selectedFile = '';
  tables: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedFile = params.get('file') || '';
      this.getTableList();
    });
  }

  getTableList() {
    this.fileService.getTableList(this.selectedFile).subscribe({
      next: (tables: string[]) => {
        this.tables = tables;
      },
      error: (error) => {
        console.error('Error fetching table list:', error);
      }
    });
  }
}
