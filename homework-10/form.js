export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) throw new Error(`Form #${formId} not found`);

    this.inputs = this.form.querySelectorAll('input, select, textarea');
    this.getValues = this.getValues.bind(this);
    this.isValid = this.isValid.bind(this);
    this.reset = this.reset.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  getValues() {
    const data = new FormData(this.form);
    return Object.fromEntries(data.entries());
  }

  isValid() {
    let valid = true;
    this.inputs.forEach(input => {
      if (!this.validateInput(input)) valid = false;
    });
    return valid;
  }

  reset() {
    this.form.reset();
  }

  validateInput(input) {
    if (input.hasAttribute('required') && !input.value.trim()) {
      this.setError(input, 'Поле обязательно');
      return false;
    }

    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(input.value)) {
        this.setError(input, 'Неверный email');
        return false;
      }
    }
    return true;
  }}