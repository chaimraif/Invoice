import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewInvoicesComponent } from './view-invoices/view-invoices.component';
import { UpsertInvoicesComponent } from './upsert-invoices/upsert-invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewInvoicesComponent,
    UpsertInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
