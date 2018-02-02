import { NgModule } from '@angular/core';
import { TextAreaEnterDirective } from './text-area-enter.directive';

@NgModule({
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
