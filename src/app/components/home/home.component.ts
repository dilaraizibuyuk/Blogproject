import { Component, OnInit } from '@angular/core';
import { Blog, Category } from 'src/app/models/model';
import { BlogService } from 'src/app/services/blog.service';
import { MessagerService } from 'src/app/services/messager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:Category[]
  selectedCategory:Category={
    Id:"",
    Image:"",
    Title:""
  }
  blogs:Blog[]
  constructor(private blogService:BlogService,private messager:MessagerService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllBlogs();
  }
  getAllCategories(){
    this.blogService.getCategories().subscribe(
      result=>{
        if(result.HasError){
          this.messager.error(result.Message)
          return;
        }
        this.categories=result.Data
      }
    )
  }
  getAllBlogs(){
    this.blogService.getBlogs(this.selectedCategory.Id).subscribe(
      result=>{
        if(result.HasError){
          this.messager.error(result.Message)
          return;
        }
        this.blogs=result.Data
      }
    )
  }
  selectItem(category:Category){
    this.selectedCategory=category
    this.getAllBlogs();
  }

}
