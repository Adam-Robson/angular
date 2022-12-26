import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button>{{ value }}</button>
  `,
  styles: ['button { height: 200px; width: 200px; font-size: 1.3em; }']
})
export class SquareComponent {
  @Input() value!: 'x' | 'o';
}
