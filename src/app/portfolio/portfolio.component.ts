import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IntroComponent } from "./intro/intro.component";
import { HeaderComponent } from "./header/header.component";
import { TechStackComponent } from "./tech-stack/tech-stack.component";
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from "./footer/footer.component";
import { CodeExamplesComponent } from "./code-examples/code-examples.component";

@Component({
  selector: 'app-portfolio',
  imports: [IntroComponent, HeaderComponent, TechStackComponent, ProjectsComponent, FooterComponent, CodeExamplesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

}
