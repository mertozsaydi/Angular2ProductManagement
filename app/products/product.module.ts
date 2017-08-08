import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData }  from './product-data';

import { ProductListComponent }  from './product-list.component';
import { ProductDetailGuard, ProductEditGuard  }  from './product-guard.service';
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
        InMemoryWebApiModule.forRoot(ProductData),
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { 
                path: 'products/:id',
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent
            },
            {
                path: 'products/:id/edit',
                canDeactivate: [ ProductEditGuard ],
                component: ProductEditComponent
            }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard,
        ProductEditGuard
    ]
})

export class ProductModule {

}