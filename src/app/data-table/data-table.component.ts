import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['First Name', 'Last Name', 'Company', 'Email', 'Phone', 'Address'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  panelOpenState = false;

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  totalData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      company: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
    });
    this.dataSource.paginator = this.paginator;
    this.httpClient.get("assets/users.json").subscribe(data => {
      console.log(data);
      this.dataSource.data = data as PeriodicElement[];
      this.totalData = data;

    })
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    var obj = this.totalData
    var new_json = JSON.stringify(obj.push(this.loginForm.value));
    console.log(obj)
  }
}

export interface PeriodicElement {
  _id: string,
  index: number,
  firstName: string,
  lastName: string,
  company: string,
  email: string
  phone: string,
  address: string
}


