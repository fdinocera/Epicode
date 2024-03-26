import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  constructor(private target: ElementRef, private renderer: Renderer2) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    var color = "rgb(" + r + "," + g + "," + b + ")";    

    this.renderer.setStyle(this.target.nativeElement, 'backgroundColor', color)
  }
}