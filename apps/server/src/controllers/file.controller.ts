import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const getFileList = (req: Request, res: Response) => {
  const dataDir = path.join(__dirname, 'assets', 'data');
  const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));
  console.log(files);
  
  res.json(files);
};

export const getTableList = (req: Request, res: Response) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, 'assets', 'data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  const tables = data.tables.map(table => table.title);

  res.json(tables);
};

export const getTableData = (req: Request, res: Response) => {
  const fileName = req.params.file;
  const tableName = req.params.table;
  const filePath = path.join(__dirname, 'assets', 'data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  const table = data.tables.find(table => table.title === tableName);

  res.json(table);
};