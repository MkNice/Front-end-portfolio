import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-portfolio',
  imports: [IntroComponent, HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

}
