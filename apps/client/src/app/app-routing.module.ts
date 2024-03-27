import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TableDataComponent } from './components/table-data/table-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: FileListComponent },
      { path: 'files/:file/tables', component: TableListComponent },
      { path: 'files/:file/tables/:table', component: TableDataComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
