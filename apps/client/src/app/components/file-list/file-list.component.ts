import { Component, OnInit } from '@angular/core';

import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  files: string[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.getFileList();
  }

  getFileList() {
    this.fileService.getFileList().subscribe({
      next: (files: string[]) => {
        this.files = files;
      },
      error: (error) => {
        console.error('Error fetching file list:', error);
      }
    });
  }
}
