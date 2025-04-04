import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlowDirective } from './directives/glow.directive';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [GlowDirective],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent { }
