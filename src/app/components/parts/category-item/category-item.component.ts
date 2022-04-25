import { Component, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: Category

  constructor() { }

  ngOnInit(): void {
  }

}
