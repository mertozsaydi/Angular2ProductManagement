import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent }  from './product-list.component';
import { ProductDetailGuard }  from './product-guard.service';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductFilterPipe }  from './product-filter.pipe';
import { ProductService} from './product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { 
                path: 'product/:id',
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent
            },
            {
                path: 'productEdit/:id',
                component: ProductEditComponent
            }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule {

}