import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    stockQuote: number;
    sub: Subscription;
    columns: number;
    rows: number;
    selectedTicker: string;

    constructor(private dataService: AppService) { }

    ngOnInit() {
        this.sub = this.dataService.getQuotes()
            .subscribe(quote => {
                this.stockQuote = quote;
                console.log(this.stockQuote);
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}