import { Component, OnInit } from '@angular/core';
import { listMovie } from '../model/movie.model';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-pparent',
  templateUrl: './pparent.component.html',
  styleUrls: ['./pparent.component.css']
})
export class PparentComponent implements OnInit {
  books:any[] = [{ bookReviews:15}]
  public listmovie:listMovie | undefined;
 
  message : string = "Input";
  showMessage:string = '';

  NameMovie: string = '';
  TypeMovie: string = '';
  MoviePrice: number =0;
  Movieid: string='';
  form : any ;

  constructor(
    private movieService: MovieService,
    private formMovie: FormBuilder,
    ) { 
   
  }
  
  ngOnInit(): void {
    this.form = this.formMovie.group({movie: ['']});
  }
  
  onNotifyClicked(message : string) : void {
    this.showMessage = message;
  }

  //Workshop
  submitForm(){
    this.Movieid = this.form.get('movie') ?.value;
  }

  onClicked(movie :listMovie) : void {
    this.listmovie = movie;
  }
  //Workshop
}
