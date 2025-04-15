import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from "../../shared/UI/section/section.component";

@Component({
  selector: 'app-faq',
  imports: [CommonModule, SectionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  public faqList = [
    {
      question: 'What technologies do you use?',
      answer: 'I primarily work with Angular, TypeScript, SCSS, and Node.js. I also enjoy experimenting with tools like Tailwind and Firebase.',
    },
    {
      question: 'Do you build responsive applications?',
      answer: 'Yes. Every project I build is mobile-first and optimized for all screen sizes.',
    },
    {
      question: 'Can I contact you for freelance work?',
      answer: 'Yes, I’m open to offers — feel free to reach me through the contact section.',
    },
    {
      question: 'What was your most challenging project?',
      answer: 'A multi-language dynamic form builder with live validation, drag-and-drop UI and PDF export.',
    },
  ];

  public activeIndex: number | null = null;

  public toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
