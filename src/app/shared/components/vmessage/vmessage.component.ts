import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-vmessage',
  templateUrl: './vmessagem.component.html'
})

export class VMessageComponent{

  @Input() text = '';
}
