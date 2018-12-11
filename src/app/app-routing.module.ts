import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { UsersComponent } from './users.component';
import { DepartmentsComponent } from './departments.component';
import { AdminMenuComponent } from './admin-menu.component';
import { NoAuthorizationComponent } from './no-authorization.component';

const noAuthRedirectTo = {
  navigationCommands: ['/no-authorization'],
  navigationExtras: { skipLocationChange: true }
};
const createPermissionParam = (only) => {
  return {
    only: only,
    redirectTo: noAuthRedirectTo,
  };
}
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'no-authorization', component: NoAuthorizationComponent },
  { path: 'users', component: UsersComponent },
  { path: 'departments', component: DepartmentsComponent, canActivate: [NgxPermissionsGuard],
    data: { permissions: createPermissionParam(['ADMIN', 'POWER']), }
  },
  { path: 'admin-menu', component: AdminMenuComponent, canActivate: [NgxPermissionsGuard],
    data: { permissions: createPermissionParam(['ADMIN']), }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
