import { HttpClient } from '@angular/common/http';
import { Observable} from  'rxjs';
import { listMovie } from '../model/movie.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService{
    private url = 'https://638492184ce192ac605bc39a.mockapi.io/Movie/';
    constructor (
        private http:HttpClient
    ){}
    getMovieById(id:string):Observable<listMovie>{
        return this.http.get<listMovie>(`${this.url}/${id}`);
    }
}