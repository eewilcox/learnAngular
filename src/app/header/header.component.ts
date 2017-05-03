import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() selection = new EventEmitter<string>();

  onSelect(stringy: string) {
    this.selection.emit(stringy);
  }
}
