import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from './service/movie.service';
import { listMovie } from './model/movie.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myName:string = 'Harry';
  isDisable:boolean=false;
  firstName:string='';
  confirm(){
    console.log(this.firstName)
  }
  showButton:boolean=true;
  switch(param:boolean) {
    this.showButton = param;
  }
  books: any[] =[ {title: "Mody Dick", author:"Herman Melville"},
                  {title: "War and Peace", author:"Leo Tolstoy"},
                  {title: "Ulysses", author:"Jame Joyce"},
                ]

  num:number=0;         
  
  //End 

  headerForm:any;
  public listMovie:listMovie[]=[];
  public constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
  ){
    this.headerForm = this.formBuilder.group({
        address:[{ value:null,disabled:false },[Validators.required]],
        tel: [{ value:null,disabled:false },[Validators.required]],
        fname: [{ value:null,disabled:false },[Validators.required]],
        zipcode: [{ value:null,disabled:false },[Validators.required]],
      });
  }

  fname:string='';
  lname:string='';

  movie:string="";  
  
  showMovie(){
      this.movieService.getMovieById(this.movie).subscribe(res => {
        this.listMovie=JSON.parse(JSON.stringify(res)); //แปลง json เป็น array
        console.log(this.listMovie)
      })

  }
}
