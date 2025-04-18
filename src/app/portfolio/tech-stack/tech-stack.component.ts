import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { SectionComponent } from "../../shared/UI/section/section.component";
import { ISectionData  } from '../../shared/interfaces/section';

@Component({
  selector: 'app-tech-stack',
  imports: [ScrollRevealDirective, SectionComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackComponent {
  public readonly path: string = '/assets/images/iconsTechStack/';
  public readonly techStackSection: ISectionData  = {
    title: 'My Tech Stack',
    description: `The core technologies I use to build scalable and high-performance web applications.`,
    items: [
      { icon: 'html5.svg', title: 'HTML5', description: 'The foundation of modern web development.' },
      { icon: 'scss.svg', title: 'SCSS', description: 'Advanced styling with Sass and SCSS.' },
      { icon: 'typescript.svg', title: 'TypeScript', description: 'Enhancing JavaScript with strong typing and scalability.' },
      { icon: 'angular.svg', title: 'Angular', description: 'Building scalable and dynamic frontend applications.' },
      { icon: 'rxjs.svg', title: 'RxJS', description: 'Reactive programming and event-driven architecture.' },
      { icon: 'ngrx.svg', title: 'State Managers', description: 'Efficient state handling for scalable Angular applications.' },
      { icon: 'primeng.svg', title: 'UI Libraries', description: 'Pre-built UI components for fast development like PrimeNG.' },
      { icon: 'nodejs.svg', title: 'Node.js', description: 'Creating robust backend solutions with Express and APIs.' },
      { icon: 'firebase.svg', title: 'Firebase', description: 'Authentication, database, and hosting services.' },
      { icon: 'docker.svg', title: 'Docker', description: 'Containerization for scalable applications.' },
      { icon: 'git.svg', title: 'Git', description: 'Version control for efficient collaboration.' },
      { icon: 'performance.svg', title: 'Performance Optimization', description: 'Techniques to enhance speed and efficiency.' },
    ]
  };

}
