import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertInvoicesComponent } from './upsert-invoices.component';

describe('UpsertInvoicesComponent', () => {
  let component: UpsertInvoicesComponent;
  let fixture: ComponentFixture<UpsertInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
