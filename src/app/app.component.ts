import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-permissions-sample';
  constructor(
    private permissionsService: NgxPermissionsService
  ) {
  }
  
  ngOnInit() {
    this.setPermission();
  }
  ROLE = localStorage.ROLE ? localStorage.ROLE : "";
  setPermission() {
    // const perm = ["ADMIN", "POWER"];
    // const perm = ["POWER"];
    this.permissionsService.loadPermissions(
      [localStorage.ROLE]
    );
  }
  selectRole(role="") {
    if (role.length==0) return;
    localStorage.ROLE = role;
    this.ROLE = role;
    this.setPermission();
  }
}
