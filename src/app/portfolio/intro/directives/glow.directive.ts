import { Directive, ElementRef, OnInit } from '@angular/core';
import { animate, keyframes, style, AnimationBuilder, AnimationFactory } from '@angular/animations';

@Directive({
  selector: '[appglow]'
})
export class GlowDirective implements OnInit {
  private animationFactory!: AnimationFactory;
  private animationDelay: string = '5s';
  private animationDuration: string = '2000ms';
  private animation = [
    animate(
      `${this.animationDelay} ${this.animationDuration} linear`,
      keyframes([
        style({
          textShadow: '0 0 50px rgba(255,255,255,0.5)',
          offset: 0.4
        }),
        style({
          textShadow:
            '0 0 150px rgba(255,255,255,0.9), 1px 1px 200px rgba(255,255,255,1), 0 0 100px rgba(255,255,255,0.9)',
          offset: 0.6
        }),
        style({
          textShadow:
            '1px 1px 10px rgba(255,255,255,0.8), 2px 2px 10px rgba(255,255,255,0.7), 3px 3px 10px rgba(255,255,255,0.6)',
          offset: 0.8
        }),
        style({
          textShadow: '3px 3px 10px rgba(255,255,255,0.8)',
          offset: 1
        })
      ])
    )
  ]
  public constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  public ngOnInit(): void {
    this.startAnimation();
  }

  private startAnimation(): void {
    this.animationFactory = this.animationBuilder.build(this.animation);
    const player = this.animationFactory.create(this.el.nativeElement);
    player.play();
  }
}