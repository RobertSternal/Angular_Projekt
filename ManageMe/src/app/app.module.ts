import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogFunctionalitiesComponent } from './dashboard/dashboard-content/edit-dialog-functionalities/edit-dialog-functionalities.component';
import { AddDialogTasksComponent } from './dashboard/dashboard-content/add-dialog-tasks/add-dialog-tasks.component';
import { AddDialogFunctionalitiesComponent } from './dashboard/dashboard-content/add-dialog-functionalities/add-dialog-functionalities.component';
import { EditDialogTasksComponent } from './dashboard/dashboard-content/edit-dialog-tasks/edit-dialog-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardFooterComponent,
    DashboardNavbarComponent,
    DashboardContentComponent,
    EditDialogFunctionalitiesComponent,
    AddDialogTasksComponent,
    AddDialogFunctionalitiesComponent,
    EditDialogTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTreeModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
