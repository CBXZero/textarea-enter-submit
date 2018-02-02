import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaEnterDirective } from './text-area-enter.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TextAreaEnterDirective
    ],
    exports: [
        TextAreaEnterDirective
    ],
    providers: [],
    bootstrap: []
})
export class TextAreaEnterModule { }
