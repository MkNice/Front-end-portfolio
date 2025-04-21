import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from "../../shared/UI/section/section.component";
import { IBaseSection } from '../../shared/interfaces/section';

@Component({
  selector: 'app-code-examples',
  imports: [SectionComponent],
  templateUrl: './code-examples.component.html',
  styleUrl: './code-examples.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeExamplesComponent {
  public readonly sectionData: IBaseSection = {
    title: "Code Examples",
    description: "This section shows real code I’ve written — following best practices, performance thinking, and modern design patterns."
  }
  public readonly codePath = '/assets/images/code-examples/';
}
