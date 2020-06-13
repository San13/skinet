import { Component, OnInit } from '@angular/core';
import { OrdersService } from './order.service';
import { IOrder } from '../shared/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      this.orders = orders;
      // console.log();
    }, error => {
      console.log(error);
    });
  }
}
