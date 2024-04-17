import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentPageComponent } from './components/pages/assignment-page/assignment-page.component';
import { ExamsPageComponent } from './components/pages/exams-page/exams-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ReportsPageComponent } from './components/pages/reports-page/reports-page.component';
import { DataHeaderComponent } from './components/shared-components/data-header/data-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentPageComponent,
    ExamsPageComponent,
    HomePageComponent,
    ReportsPageComponent,
    DataHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
