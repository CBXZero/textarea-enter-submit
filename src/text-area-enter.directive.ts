import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: 'textAreaEnter',
})
export class TextAreaEnterDirective {
    @Output() onEnterKeypress = new EventEmitter();

    @HostListener('keydown') onEnter(event: KeyboardEvent) {
        if(event.keyCode == 13) {
            if(event.shiftKey) {
                return;
            } else {
                event.preventDefault();
                this.onEnterKeypress.emit(this.el.nativeElement.value);
                this.el.nativeElement.value = "";
            }
        }
    }

    getCaret(el) {
        if(el.selectionStart) {
            return el.selectionStart
        } else if (document.getSelection()) {
            el.focus
        }
    }

    constructor(public el: ElementRef) {

    }
}