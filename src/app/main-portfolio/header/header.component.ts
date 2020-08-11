import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name: any = 'Dipta Dhar';
  position: any = 'DevOps Engineer';
  organization: any = 'Kloud Ltd.';
  email: any = 'rebornbd@yahoo.com';
  phone: any = '+880 17714-28757';

  linkedinLink: any = 'https://www.linkedin.com/in/diptadhar';
  githubLink: any = 'https://github.com/dipta-dhar';
  uvaLink: any = 'https://uhunt.onlinejudge.org/id/599514';

  skypeID: any = 'd.dipta.cse';

}
