import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ItblInvoice } from '../itbl-invoice';
import { RestApiServiceService } from '../rest-api-service.service';
import { formatDate } from '@angular/common' 

@Component({
  selector: 'app-upsert-invoices',
  templateUrl: './upsert-invoices.component.html',
  styleUrls: ['./upsert-invoices.component.css']
})
export class UpsertInvoicesComponent implements OnInit ,OnDestroy{
  constructor(private FormBuilder:FormBuilder,private ApiServ:RestApiServiceService) { }
  Sub1:Subscription;
  Sub2:Subscription;
  Upsert_Form:FormGroup;
  SelectedItem:ItblInvoice;
  Show:boolean = false;
  Invoices:ItblInvoice[]=[];
  ngOnInit(): void {
    this.GetAllInvoices();
    this.BulidForm();
  }
  GetAllInvoices(){
    this.Sub1 = this.ApiServ.Get().subscribe((x:ItblInvoice[])=>{
      this.Invoices = x;
  });
}
  ngOnDestroy(){
    this.Sub1.unsubscribe();
    this.Sub2.unsubscribe();
  }
  BulidForm(){
    this.Upsert_Form = this.FormBuilder.group({
      InvoiceID:[null],
      Status:[null,Validators.required],
      AddedDate:[null],
      LastUpdateDate:[null],
      Amount:[null,[Validators.required,Validators.pattern('[0-9]+')]]
    });
  }
  Upsert(){
    let newInvoice:ItblInvoice= this.Upsert_Form.value;
    this.Sub2 = this.ApiServ.Post(newInvoice).subscribe((x:any) =>{
      if(x > 0)
        this.GetAllInvoices();
        this.Show = false;
    });
  }

  GetSelectedItem(obg:ItblInvoice){
    this.Show = true;
    if(obg?.InvoiceID > 0){
      this.SelectedItem = obg;
      this.SetValue();   
    }
    else{
      this.Upsert_Form.reset();
      this.Upsert_Form.controls['AddedDate'].setValue(formatDate(Date.now(),'dd-MM-yyyy','en'));

    }
  }
  SetValue(){
    this.Upsert_Form.reset();
    let Control = this.Upsert_Form.controls;
    Control['InvoiceID'].setValue(this.SelectedItem.InvoiceID);
    Control['Status'].setValue(this.SelectedItem.Status);
    Control['AddedDate'].setValue(formatDate(this.SelectedItem.AddedDate,'dd-MM-yyyy','en'));
    Control['LastUpdateDate'].setValue(this.SelectedItem.LastUpdateDate ?formatDate(this.SelectedItem.LastUpdateDate,'dd-MM-yyyy','en'): null);
    Control['Amount'].setValue(this.SelectedItem.Amount);
  }
}
