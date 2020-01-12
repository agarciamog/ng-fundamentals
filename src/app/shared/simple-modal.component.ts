import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '../services';

@Component({
  selector: 'simple-modal',
  templateUrl: 'simple-modal.component.html',
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
