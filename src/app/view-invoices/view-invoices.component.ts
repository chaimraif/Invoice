import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItblInvoice } from '../itbl-invoice';
import { RestApiServiceService } from '../rest-api-service.service';

@Component({
  selector: 'app-view-invoices',
  templateUrl: './view-invoices.component.html',
  styleUrls: ['./view-invoices.component.css']
})
export class ViewInvoicesComponent implements OnInit  {
  @Output() selected:EventEmitter<ItblInvoice> = new EventEmitter<ItblInvoice>();
  constructor() { 
  }
 @Input() Invoices:ItblInvoice[] =[]
  ngOnInit(): void {
}

  ViewDetails(obg:ItblInvoice){
    this.selected.emit(obg)
  }
}

