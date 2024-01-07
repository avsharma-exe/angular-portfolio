import { Component } from '@angular/core';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  toggleNavbar = true;

}
