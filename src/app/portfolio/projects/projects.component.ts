import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
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
    }
  ];
  @ViewChild('carouselTrack', { static: true }) trackRef!: ElementRef;
  activeSlide = 0;
public dots = Array.from({ length: Math.floor(this.projects.length / 2) }, (_, i) => i);
  goToSlide(index: number) {
    this.activeSlide = index;
  }
  nextSlide() {
    if (this.activeSlide < Math.floor(this.projects.length / 2) - 1) {
      this.activeSlide++;
    }
  }
  
  prevSlide() {
    if (this.activeSlide > 0) {
      this.activeSlide--;
    }
  }
  
  scroll(direction: 'left' | 'right') {
    const el = this.trackRef.nativeElement as HTMLElement;
    const scrollAmount = 360;

    direction === 'left'
      ? el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      : el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
