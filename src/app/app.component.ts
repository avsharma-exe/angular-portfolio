import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./project/project.component";
import { HireMeComponent } from "./hire-me/hire-me.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, ProjectComponent, HireMeComponent]
})
export class AppComponent {
  title = 'one-simple-life';
}
