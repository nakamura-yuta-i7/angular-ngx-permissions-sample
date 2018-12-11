import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <p>
      users works!
    </p>
    
    <section>
      <h2>全ユーザーアクセス可能セクション</h2>
      <div>
        コンテンツ
      </div>
    </section>
    
    <section *ngxPermissionsOnly="['ADMIN']">
      <h2>管理者専用セクション</h2>
      <div>
        コンテンツ
      </div>
    </section>
    
    <section *ngxPermissionsOnly="['POWER']">
      <h2>パワーユーザー専用セクション</h2>
      <div>
        コンテンツ
      </div>
    </section>
    
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
