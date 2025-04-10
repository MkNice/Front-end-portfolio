import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CarouselComponent } from "../../shared/UI/carousel/carousel.component";

@Component({
  selector: 'app-projects',
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  public projects = [
    {
      title: "Developer Resources",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources2",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources3",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources4",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources5",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources6",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    }, {
      title: "Developer Resources7",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
    {
      title: "Developer Resources8",
      description:
        "Access a wealth of resources to support your development journey with Enigma Code-ai.",
      image: "./assets/images/projectsPreview/project-for-example.png",
    },
  ];
}
