import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { listMovie } from '../model/movie.model';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-cchild',
  templateUrl: './cchild.component.html',
  styleUrls: ['./cchild.component.css']
})
export class CchildComponent implements OnInit {
  @Input() reviews:string| undefined;
  @Output() notify: EventEmitter<string> = new  EventEmitter <string>();

  @Input() movie:string| undefined;
  @Output() movieData: EventEmitter<listMovie> = new  EventEmitter <listMovie>();
  public listmovie:listMovie | undefined;
 
  constructor(private movieService: MovieService,) { }

  ngOnInit() {
  }
  
  onClick(){
    this.notify.emit('Message fron child');
  }

  // Workshop
  showMovie(){
    if(this.movie){
    this.movieService.getMovieById(this.movie).subscribe(res => {
      this.listmovie=res; 
      this.movieData.emit(this.listmovie);  
    });
   }
  }
  //Workshop 
}
