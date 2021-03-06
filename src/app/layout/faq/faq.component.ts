import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api/api.service"

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  htmlString: any;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.f().subscribe(x => {
      this.htmlString = x.data[0].content;
      // console.log(this.htmlString)
    }, err => {
      console.log(err);
    });
  }

}