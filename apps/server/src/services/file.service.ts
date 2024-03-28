import fs from 'fs';
import path from 'path';

import { CustomError } from '../middleware/error-handler.middleware';
import { Table, FileData } from '../interfaces/file.interface';

export class FileService {
  private readonly dataDir = path.join(__dirname, 'assets', 'data');

  getFileList(): string[] {
    try {
      const files = fs
        .readdirSync(this.dataDir)
        .filter((file) => file.endsWith('.json'));

      return files;
    } catch (error) {
      throw new CustomError('Failed to fetch file list', 500);
    }
  }

  getTableList(fileName: string): string[] {
    try {
      const filePath = path.join(this.dataDir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data: FileData = JSON.parse(fileContent);
      const tables = data.tables.map((table) => table.title);

      return tables;
    } catch (error) {
      throw new CustomError('Failed to fetch table list', 500);
    }
  }

  getTableData(fileName: string, tableName: string): Table | undefined {
    try {
      const filePath = path.join(this.dataDir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data: FileData = JSON.parse(fileContent);
      const table = data.tables.find((table) => table.title === tableName);

      return table;
    } catch (error) {
      throw new CustomError('Failed to fetch table data', 500);
    }
  }
}
