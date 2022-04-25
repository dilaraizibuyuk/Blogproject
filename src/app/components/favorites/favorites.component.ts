import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites:Blog[]=[]
  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }
  initialize(){
    if(localStorage.getItem("favorites")==null){
      var arr:Blog[]=[];
       localStorage.setItem("favorites",JSON.stringify(arr));
     }
     this.favorites=JSON.parse(localStorage.getItem("favorites"))
  }

}
