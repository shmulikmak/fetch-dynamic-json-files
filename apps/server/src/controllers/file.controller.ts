import { NextFunction, Request, Response } from 'express';

import { FileService } from '../services/file.service';
import { Table } from '../interfaces/file.interface';

const fileService = new FileService();

export const getFileList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files: string[] = fileService.getFileList();
    res.json(files);
  } catch (error) {
    next(error);
  }
};

export const getTableList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fileName: string = req.params.file;
    const tables: string[] = fileService.getTableList(fileName);
    res.json(tables);
  } catch (error) {
    next(error);
  }
};

export const getTableData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fileName: string = req.params.file;
    const tableName: string = req.params.table;
    const table: Table | undefined = fileService.getTableData(
      fileName,
      tableName
    );
    if (table) {
      res.json(table);
    } else {
      res.status(404).json({ error: 'Table not found' });
    }
  } catch (error) {
    next(error);
  }
};
