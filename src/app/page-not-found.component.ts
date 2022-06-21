import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'page-not-found',
    template:  `<H1>La page que vous demandez n'existe pas !!!</H1>
    <a routerLink="pokemon/all">
    Retour à la HOME
    </a>`
})
export class PageNotFoundComponent implements OnInit {

    ngOnInit() {
        
    }
}