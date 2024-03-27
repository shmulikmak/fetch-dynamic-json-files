import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  selectedFile = '';
  selectedTable = '';
  tableData: any;

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
        next: (data: any) => {
          this.tableData = data;
        },
        error: (error: any) => {
          console.error('Error fetching table data:', error);
        }
      });
  }
}
