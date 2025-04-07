import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  public activeSlide = 0;
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
  public dots = Array.from({ length: Math.floor(this.projects.length / 2) }, (_, i) => i);

  public slideTransform: string = '';

  public ngOnInit(): void {
    this.updateSlideTransform();
  }

  private updateSlideTransform(): void {
    const offset = this.activeSlide * -101.7;
    this.slideTransform = `translateX(${offset}%)`;
  }

  public goToSlide(index: number): void {
    this.activeSlide = index;
  }

  public changeSlide(direction: 'next' | 'prev'): void {
    const halfLength = Math.floor(this.projects.length / 2) - 1;
    if (direction === 'next') {
      this.activeSlide = this.activeSlide < halfLength ? this.activeSlide + 1 : 0;
      return;
    }
    this.activeSlide = this.activeSlide > 0 ? this.activeSlide - 1 : halfLength;
  }

}
