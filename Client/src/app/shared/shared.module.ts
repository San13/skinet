import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BusketSummaryComponent } from './components/busket-summary/busket-summary.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalsComponent, TextInputComponent, StepperComponent, BusketSummaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot() ,
    BsDropdownModule.forRoot(),
    CdkStepperModule,
    RouterModule
  ],
  exports: [
             PaginationModule,
             PagingHeaderComponent,
             PagerComponent,
             OrderTotalsComponent,
             ReactiveFormsModule,
             CarouselModule,
             BsDropdownModule,
             TextInputComponent,
             CdkStepperModule,
             StepperComponent,
             BusketSummaryComponent
           ]
})
export class SharedModule { }
