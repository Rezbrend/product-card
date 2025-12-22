export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.#initClose()
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button')
    closeButton.addEventListener('click', this.closeButtonHandler)

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.overlayHandler)
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button')
    closeButton.removeEventListener('click', this.closeButtonHandler)

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.overlayHandler)
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

  #initClose() {
    this.closeButtonHandler = () => this.close();
    this.overlayHandler = () => this.close();
  }
}