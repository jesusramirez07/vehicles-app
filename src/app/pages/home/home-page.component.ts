import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {

}
