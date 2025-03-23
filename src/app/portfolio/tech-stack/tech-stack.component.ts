import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechStackComponent {
  public readonly path = '/assets/images/iconsTechStack/';
  public readonly techStack = [
    {
      icon: 'html5.svg',
      title: 'HTML5',
      desc: 'The foundation of modern web development.',
    },
    {
      icon: 'scss.svg',
      title: 'SCSS',
      desc: 'Advanced styling with Sass and SCSS.',
    },
    {
      icon: 'typescript.svg',
      title: 'TypeScript',
      desc: 'Enhancing JavaScript with strong typing and scalability.',
    },
    {
      icon: 'angular.svg',
      title: 'Angular',
      desc: 'Building scalable and dynamic frontend applications.',
    },
    {
      icon: 'rxjs.svg',
      title: 'RxJS',
      desc: 'Reactive programming and event-driven architecture.',
    },
    {
      icon: 'ngrx.svg',
      title: 'State Managers',
      desc: 'Efficient state handling for scalable Angular applications, including NgRx, NgXs.',
    },
    {
      icon: 'primeng.svg',
      title: 'UI Libraries',
      desc: 'Pre-built UI components for fast development. Angular Material, PrimeNG, Angular CDK.',
    },
    {
      icon: 'nodejs.svg',
      title: 'Node.js',
      desc: 'Creating robust backend solutions with Express and APIs.',
    },
    {
      icon: 'firebase.svg',
      title: 'Firebase',
      desc: 'Authentication, database, and hosting services.',
    },
    {
      icon: 'docker.svg',
      title: 'Docker',
      desc: 'Containerization for scalable applications.',
    },
    {
      icon: 'git.svg',
      title: 'Git',
      desc: 'Version control for efficient collaboration.',
    },
    {
      icon: 'performance.svg',
      title: 'Performance Optimization',
      desc: 'Techniques to enhance speed and efficiency.',
    },
  ]
}
