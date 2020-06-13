import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRouterModule } from './orders-router.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [
    CommonModule,
    OrdersRouterModule,
    SharedModule
  ]
})
export class OrdersModule { }
