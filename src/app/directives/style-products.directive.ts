import { Directive, ElementRef,HostListener, Input ,OnInit} from '@angular/core';

@Directive({
  selector: '[appStyleProducts]',
  standalone: true
})
export class StyleProductsDirective  implements OnInit {
  @Input() bgColor:string='#ffffff';

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.boxShadow="0 50px 50px 0 rgba(0,0,0,0.1)";


   }
   @HostListener('mouseover') onMouseEnter(){
    this.ele.nativeElement.style.transition='box-shadow 0.4s';
    this.ele.nativeElement.style.boxShadow='0 10px 18px  0 rgba(0,0,0,0.5)';
   }
   @HostListener('mouseout') onMouseLeave(){
    this.ele.nativeElement.style.boxShadow='0 8px 16px  0 rgba(0,0,0,0.1)';

   }
   ngOnInit(){
    this.ele.nativeElement.style.borderRadius="12px";
    this.ele.nativeElement.style.margin='11px';
    if(this.bgColor){
      this.ele.nativeElement.style.backgroundColor=this.bgColor
    }
  }

}
