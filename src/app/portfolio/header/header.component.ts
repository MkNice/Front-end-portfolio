import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-header',
  imports: [CapitalizePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly links: Readonly<string[]> = ['home', 'pages', 'projects', 'blog', 'about', 'contact'];
}
