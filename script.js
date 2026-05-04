//your JS code here. If required.
class Modal {
    constructor(checkboxId, openBtnId, closeBtnClass, backdropClass) {
        this.checkbox = document.getElementById(checkboxId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = document.querySelector(`.${closeBtnClass}`);
        this.backdrop = document.querySelector(`.${backdropClass}`);
        this.modal = document.querySelector('.modal');
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.openBtn.addEventListener('click', (e) => this.open(e));
        this.closeBtn.addEventListener('click', (e) => this.close(e));
        this.backdrop.addEventListener('click', (e) => this.close(e));
        document.addEventListener('keydown', (e) => this.handleEscape(e));
        this.modal.addEventListener('click', (e) => this.handleModalClick(e));
    }
    
    open(e) {
        e.preventDefault();
        this.checkbox.checked = true;
        console.log('Modal opened');
        this.triggerCallback('open');
    }
    
    close(e) {
        if (e) e.preventDefault();
        this.checkbox.checked = false;
        console.log('Modal closed');
        this.triggerCallback('close');
    }
    
    handleEscape(e) {
        if (e.key === 'Escape' && this.checkbox.checked) {
            this.close();
        }
    }
    
    handleModalClick(e) {
        // Only close if clicking outside modal-content
        if (e.target === this.modal) {
            this.close();
        }
    }
    
    triggerCallback(action) {
        // You can add custom callbacks here
        const event = new CustomEvent(`modal-${action}`, {
            detail: { modal: this }
        });
        document.dispatchEvent(event);
    }
    
    isOpen() {
        return this.checkbox.checked;
    }
}

// Initialize modal
const myModal = new Modal('a', 'openModal', 'close-modal', 'btn2');

// Listen for custom events
document.addEventListener('modal-open', (e) => {
    console.log('Custom event: Modal opened');
});

document.addEventListener('modal-close', (e) => {
    console.log('Custom event: Modal closed');
});