import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {
    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
        this.setHeight(180);
    }

    @Input('pkmnBorderCard') borderolor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderolor || '#008000') // vert
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5') //gris
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}