import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TableDataComponent } from './components/table-data/table-data.component';

import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileListComponent,
    TableListComponent,
    TableDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [FileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
