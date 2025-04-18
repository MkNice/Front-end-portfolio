import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from "../../shared/UI/section/section.component";

@Component({
  selector: 'app-code-examples',
  imports: [SectionComponent],
  templateUrl: './code-examples.component.html',
  styleUrl: './code-examples.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeExamplesComponent {
  codePath = '/assets/images/code-examples/withSideEffect2.png';

}
