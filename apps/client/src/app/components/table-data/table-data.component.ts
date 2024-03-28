import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FileService } from '../../services/file.service';

import { Table } from '../../models/table.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  selectedFile = '';
  selectedTable = '';
  tableData: Table | undefined;

  constructor(
    private route: ActivatedRoute,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedFile = params.get('file') || '';
      this.selectedTable = params.get('table') || '';
      this.getTableData();
    });
  }

  getTableData() {
    this.fileService
      .getTableData(this.selectedFile, this.selectedTable)
      .subscribe({
        next: (data: Table) => {
          this.tableData = data;
        },
        error: (error: Table) => {
          console.error('Error fetching table data:', error);
        }
      });
  }
}
