export class Modal {
  
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector('#modal-close-button');
    
  }
  
  closeButtonHandler = () => {
    this.close();
  };

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.closeButton.addEventListener('click', this.closeButtonHandler)

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeButtonHandler)
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.closeButtonHandler)

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeButtonHandler)
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }
}