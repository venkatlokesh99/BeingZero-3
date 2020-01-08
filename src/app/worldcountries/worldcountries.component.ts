import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-worldcountries',
  templateUrl: './worldcountries.component.html',
  styleUrls: ['./worldcountries.component.css']
})
export class WorldcountriesComponent implements OnInit {
 flags;
tmp;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
  
    this.dataservice.getCountries().subscribe(d=>{
      this.flags=d;
      })
      this.tmp=this.flags[0];
      this.flags[0]=this.flags[104]
      this.flags[104]=this.tmp
  }

}
