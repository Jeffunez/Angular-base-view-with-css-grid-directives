import {Directive, ElementRef, Input, OnChanges, OnDestroy} from '@angular/core';

@Directive({
  selector: '[css-g]'
})
export class GridContainerDirective implements OnChanges, OnDestroy {
 
 private _display = 'grid';
 
 public get display(): string {
   return this._display;
 }
 
 @Input('css-g')
 public set display(value: string) {
   this._display = value || 'grid';
 }
 
 @Input('css-g-areas')
 public areas: string;
 
 @Input('css-g-cols')
 public cols: string;
 
 @Input('css-g-rows')
 public rows: string;
 
 constructor(private el: ElementRef) {
 }
 
 public ngOnChanges() {
   const nativeElement = this.el.nativeElement;
   this.clearStyles(nativeElement);
 
   if (this.display) {
     nativeElement.style.setProperty('display', this.display);
   }
 
   if (this.areas) {
     nativeElement.style.setProperty('grid-template-areas', this.areas);
   }
 
   if (this.cols) {
     nativeElement.style.setProperty('grid-template-columns', this.cols);
   }
 
   if (this.rows) {
     nativeElement.style.setProperty('grid-template-rows', this.rows);
   }
 }
 
 public ngOnDestroy() {
   this.clearStyles(this.el.nativeElement);
 }
 
 private clearStyles(el) {
   el.style.removeProperty('display');
   el.style.removeProperty('grid-template-areas');
   el.style.removeProperty('grid-template-cols');
   el.style.removeProperty('grid-template-rows');
 }
}