import { Component, OnInit } from '@angular/core';

import { FileService } from '../../services/file.service';

import { File } from '../../models/file.model';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  files: File[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.getFileList();
  }

  getFileList() {
    this.fileService.getFileList().subscribe({
      next: (files: File[]) => {
        this.files = files;
      },
      error: (error) => {
        console.error('Error fetching file list:', error);
      },
    });
  }
}
