import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api/api.service"

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(private api: ApiService) { }
  htmlString: any;

  ngOnInit(): void {
    this.api.d().subscribe(x => {
      this.htmlString = x.data[0].content;
    }, err => {
      console.log(err);
    });
  }

}