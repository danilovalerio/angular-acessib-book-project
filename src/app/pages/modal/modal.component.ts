import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';

import { Livro } from '../../models/interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, A11yModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() livro!: Livro;
  statusModal: boolean = true;
  @Output() mudouModal = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  //Escuta o evento no dom para fecharmos o modal também com o ESC
  @HostListener('document:keydown.escape') fecharModalAoPressionarEsc() {
    if (this.statusModal) {
      this.fecharModal();
    }
  }

  fecharModal() {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
    //exibir a barra de rolagem da tela principal ao fechar modal
    this.renderer.setStyle(
      this.element.nativeElement.ownerDocument.body,
      'overflow',
      'scroll'
    );
  }

  lerPrevia() {
    window.open(this.livro.previewLink, '_blank');
  }

  get thumbnailUrl() {
    return this.livro.thumbnail || 'assets/imagens/capa-indisponivel.png';
  }
}
