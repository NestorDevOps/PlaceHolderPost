import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../config/http-error-handler.service';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map, switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Post } from '../model/post';
import { User } from '../model/user';
import { Cards } from '../model/cards';
import { Card } from '../model/card';


const headers = new HttpHeaders()
    .append('Content-Type', 'application/json; charset=UTF-8')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Origin', '*')
    .append('Access-Control-Allow-Credentials', 'false');

@Injectable({
    providedIn: 'root'
})

/**
 * this service has diferent function 
 * and control with connet to api rest placeholder
 */
export class CardsService {
    listCard: Card[] = [];
    //url='/api/'; // URL to api Sensor
    //private handleError!: HandleError;
    url = 'https://jsonplaceholder.typicode.com/';

    constructor(private http: HttpClient) { }

    /**
     * this methed return list of all post
     * @returns post array bean 
     */
    findAllPosts(): Observable<Post[]> {
        const path = 'posts/';
        headers.append('Access-Control-Allow-Methods', 'GET')
        return this.http.get<Post[]>(encodeURI(this.url + path), { headers });
    }
    
    /** get post  by number id */
    findPostById(id: number): Observable<Post> {
        const path = 'posts/';
        headers.append('Access-Control-Allow-Methods', 'GET')
        return this.http.get<Post>(encodeURI(this.url + path + id), { headers })
            .pipe(
                //catchError(this.handleError<Sensor[]>('searchSensor', []))
            );
    }

    /** get user acccount by number id */
    findUserById(id: number): Observable<User> {
        const path = 'users/';
        headers.append('Access-Control-Allow-Methods', 'GET')
        return this.http.get<User>(encodeURI(this.url + path + id), { headers })
            .pipe(
                //catchError(this.handleError<Sensor[]>('searchSensor', []))
            );
    }

    /** method Post to new card with post information */
    createPost(post:Post): Observable<Post> {
        const path = 'posts/';
        return this.http.post<Post>(encodeURI(this.url + path), post , { headers });
    }

    /** method Put to update card with post information */
    updatePost(post:Post): Observable<Post> {
        const path = 'posts/';
        return this.http.put<Post>(encodeURI(this.url + path + post.id), post, { headers });
    }

    /**
     * this methed return list of all post with consolidate user
     * @returns Card array bean 
     * */
    getAllCard(): Observable<Card[]> {
        return this.findAllPosts()
            .pipe(
                switchMap((Post) => {
                        const listCard = [];
                        for (const post of Post) {
                            const user$ = this.findUserById(post.userId)
                            .pipe(
                                switchMap((User) => of(
                                    new Cards(User, post)
                                ))
                            )
                            listCard.push(user$);
                        }
                        return forkJoin(listCard);
                    })
            );
    }


}
