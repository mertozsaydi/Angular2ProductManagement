import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IProduct} from './product';

import {ProductService} from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit { 
    pageTitle: string = `Product List`;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    errorMessage: string;
    products: IProduct[];

    constructor (private _productService: ProductService,
                 private route: ActivatedRoute){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.showImage = this.route.snapshot.queryParams['showImage'] === 'true';
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error =>this.errorMessage =<any>error);
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
