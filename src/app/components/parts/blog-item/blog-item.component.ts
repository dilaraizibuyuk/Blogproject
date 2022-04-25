import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/model';
import { BlogService } from 'src/app/services/blog.service';
import { MessagerService } from 'src/app/services/messager.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() blog:Blog
  favorite:boolean=false
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor(private blogService:BlogService,private messager:MessagerService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("favorites")==null){
     var arr:Blog[]=[];
      localStorage.setItem("favorites",JSON.stringify(arr));
    }
    var arr:Blog[]=JSON.parse(localStorage.getItem("favorites"))
    this.favorite=arr.filter(e=>e.Id==this.blog.Id).length>0
  }
  toggleFavorite(){
    this.favorite=!this.favorite;
    this.blogService.toggleFavorite(this.blog.Id).subscribe(result=>{
      if(result.HasError){
        this.favorite=!this.favorite;
        this.messager.error(result.Message)
        return;
      }
      if(this.favorite){
        var arr:Blog[]=JSON.parse(localStorage.getItem("favorites"))
        arr.push(this.blog)
        localStorage.setItem("favorites",JSON.stringify(arr))
      }
      else{
        var arr:Blog[]=JSON.parse(localStorage.getItem("favorites"))
        arr=arr.filter(e=>e.Id!=this.blog.Id)
        localStorage.setItem("favorites",JSON.stringify(arr))
      }
    },errorResult=>{
      this.favorite=!this.favorite;
      this.messager.error(errorResult)
    })
    setTimeout(() => {
      this.parentFun.emit();
    }, 300);
  }
  goToDetail(){
    localStorage.setItem("detail",JSON.stringify(this.blog));
    this.router.navigate(["blog-detail"])
  }
}
