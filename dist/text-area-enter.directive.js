"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TextAreaEnterDirective = /** @class */ (function () {
    function TextAreaEnterDirective(el) {
        this.el = el;
        this.onEnterKeypress = new core_1.EventEmitter();
    }
    TextAreaEnterDirective.prototype.onEnter = function (event) {
        if (event.keyCode == 13) {
            if (event.shiftKey) {
                return;
            }
            else {
                event.preventDefault();
                this.onEnterKeypress.emit(this.el.nativeElement.value);
                this.el.nativeElement.value = "";
            }
        }
    };
    TextAreaEnterDirective.prototype.getCaret = function (el) {
        if (el.selectionStart) {
            return el.selectionStart;
        }
        else if (document.getSelection()) {
            el.focus;
        }
    };
    __decorate([
        core_1.Output()
    ], TextAreaEnterDirective.prototype, "onEnterKeypress", void 0);
    __decorate([
        core_1.HostListener('keydown')
    ], TextAreaEnterDirective.prototype, "onEnter", null);
    TextAreaEnterDirective = __decorate([
        core_1.Directive({
            selector: 'textAreaEnter',
        })
    ], TextAreaEnterDirective);
    return TextAreaEnterDirective;
}());
exports.TextAreaEnterDirective = TextAreaEnterDirective;
