import { ElementRef, EventEmitter } from '@angular/core';
export declare class TextAreaEnterDirective {
    el: ElementRef;
    onEnterKeypress: EventEmitter<{}>;
    onEnter(event: KeyboardEvent): void;
    getCaret(el: any): any;
    constructor(el: ElementRef);
}
