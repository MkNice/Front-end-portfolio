import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CarouselComponent } from "../../shared/UI/carousel/carousel.component";
import { SectionComponent } from "../../shared/UI/section/section.component";
import { ISectionData } from '../../shared/interfaces/section';

@Component({
  selector: 'app-projects',
  imports: [CarouselComponent, SectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  public readonly path: string = './assets/images/projectsPreview/';
  public readonly projectSection: ISectionData = {
    title: 'Projects',
    description: `Take a look at some of my featured projects. Each preview gives a quick
  glance at what I’ve built — click on any project to explore it in more
  detail and see it in action.`,
    items: [
      {
        title: "Developer Resources",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources2",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources3",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources4",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources5",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources6",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources7",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      },
      {
        title: "Developer Resources8",
        description: "Access a wealth of resources to support your development journey with Enigma Code-ai.",
        icon: "project-for-example.png",
      }
    ]
  };

}