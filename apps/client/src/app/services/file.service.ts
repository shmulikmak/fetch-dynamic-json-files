import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { File } from '../models/file.model';
import { Table } from '../models/table.model';

import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFileList(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/files`);
  }

  getTableList(fileName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/files/${fileName}/tables`);
  }

  getTableData(fileName: string, tableName: string): Observable<Table> {
    return this.http.get<Table>(`${this.apiUrl}/files/${fileName}/tables/${tableName}`);
  }
}