import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) { }

  getFileList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/files`);
  }

  getTableList(fileName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/files/${fileName}/tables`);
  }

  getTableData(fileName: string, tableName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/${fileName}/tables/${tableName}`);
  }
}