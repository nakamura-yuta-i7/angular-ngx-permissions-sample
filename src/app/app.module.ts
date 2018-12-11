import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users.component';
import { DepartmentsComponent } from './departments.component';
import { AdminMenuComponent } from './admin-menu.component';
import { NoAuthorizationComponent } from './no-authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DepartmentsComponent,
    AdminMenuComponent,
    NoAuthorizationComponent
  ],
  imports: [
    BrowserModule,
    NgxPermissionsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
