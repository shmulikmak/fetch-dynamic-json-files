import express from 'express';
import { getFileList, getTableList, getTableData } from '../controllers/file.controller';

const router = express.Router();

router.get('/files', getFileList);
router.get('/files/:file/tables', getTableList);
router.get('/files/:file/tables/:table', getTableData);

export default router;