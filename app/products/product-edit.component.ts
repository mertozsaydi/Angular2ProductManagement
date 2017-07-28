import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    pageTitle: string = `Product Edit`;
    product : IProduct;
    errorMessage: string;
    private sub: Subscription;



    constructor(private _route: ActivatedRoute,
                private _productService: ProductService){

    }
    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

     getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}