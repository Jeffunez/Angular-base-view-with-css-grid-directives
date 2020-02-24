import {Directive, ElementRef, Input, OnChanges, OnDestroy} from '@angular/core';

@Directive({
  selector: '[css-gi]'
})
export class GridItemDirective implements OnChanges, OnDestroy {
 
 @Input('css-gi-area')
 public area: string;
 
 @Input('css-gi-col')
 public col: string;
 
 @Input('css-gi-row')
 public row: string;
 
 constructor(private el: ElementRef) {
 }
 
 public ngOnChanges() {
   const nativeElement = this.el.nativeElement;
   this.clearStyles(nativeElement);
 
   if (this.area) {
     nativeElement.style.setProperty('grid-area', this.area);
   }
 
   if (this.row) {
     nativeElement.style.setProperty('grid-row', this.row);
   }
 
   if (this.col) {
     nativeElement.style.setProperty('grid-column', this.col);
   }
 }
 
 public ngOnDestroy() {
   this.clearStyles(this.el.nativeElement);
 }
 
 private clearStyles(el) {
   el.style.removeProperty('grid-area');
   el.style.removeProperty('grid-row');
   el.style.removeProperty('grid-column');
 }
}