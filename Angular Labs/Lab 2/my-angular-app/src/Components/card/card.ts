import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() userName: string = '';
  @Input() userJob: string = '';
  @Input() userBio: string = '';

  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}
