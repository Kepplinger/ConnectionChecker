import { Component } from '@angular/core';

@Component({
  selector: 'cc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private brandImgPath = '../../../../resources/brand_icon.gif';

  constructor() {
    //document.getElementById('settings_serverURL').textContent = ;
  }

}
