import { Component } from '@angular/core';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yoshi\'s portfolio';
  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
}
