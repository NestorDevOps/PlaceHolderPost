import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CardCreatePostComponent } from '../card-create-post/card-create-post.component';
import { CardEditPostComponent } from '../card-edit-post/card-edit-post.component';
import { Card } from '../model/card';
import { Post } from '../model/post';
import { CardsService } from './../service/cards.service';

@Component({
  selector: 'app-cards-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.css']
})

/**
 * card posts component, it view all post 
 * and it have controler with edit and add new post
 *
 */
export class CardPostsComponent implements OnInit {
  filtercard = '';
  Post: Post[] = [];
  Card: Card[] = []
  
  constructor(private cardsService: CardsService, 
    public matDialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAll();
  }

  /** load all posts*/
  loadAll(): any {
    return this.cardsService
      .getAllCard()
      .subscribe((Card: any) => {
        this.Card = Card
      });
  }

  /**
   * create de modal view with components to edit post, 
   * is necesary Post param  'id'
   * @param id 
   * @returns 
   */
  openModalEditPost(id:any): Observable<any> {
    console.info("edit post id: ",id )
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    dialogConfig.data = {id: id};
    const modalDialog = this.matDialog.open(CardEditPostComponent, dialogConfig);
    return modalDialog.afterClosed();
  }

  /**
   * function to opden modal view, 
   * it contain form to create new post
   * @returns 
   */
  openModalCreatePost(): Observable<any>{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(CardCreatePostComponent, dialogConfig);
    return modalDialog.afterClosed();
  }
}
