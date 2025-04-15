import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExamplesComponent } from './code-examples.component';

describe('CodeExamplesComponent', () => {
  let component: CodeExamplesComponent;
  let fixture: ComponentFixture<CodeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
