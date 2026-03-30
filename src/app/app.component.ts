import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { PainPointsComponent } from "./components/pain-points/pain-points.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, PainPointsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consultoria-onepager';
}
