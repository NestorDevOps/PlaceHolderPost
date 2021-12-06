import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../model/post';
import { CardsService } from '../service/cards.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-card-edit-post',
  templateUrl: './card-edit-post.component.html',
  styleUrls: ['./card-edit-post.component.css']
})

/**
 * this class componente is edit post.
 */
export class CardEditPostComponent implements OnInit {
  items!: Post;
  checkoutForm: any;
  postId: number = 0;
  errorMessage: any;

  constructor(
    private CardsService: CardsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CardEditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.checkoutForm = this.formBuilder.group({
      id: 1,
      title: '',
      body: '',
      userId: 1,
    });
    

  }

  ngOnInit() {
    // revisar que devuelve 
    console.info('data.id from prinpal page is ', this.data.id)
    const items = this.CardsService.findPostById(this.data.id);
    console.info('rest return' , items.subscribe( Post => console.info(Post)));

    items.forEach(Post => {
      this.checkoutForm = this.formBuilder.group({
        id: Post.id,
        title: Post.title,
        body: Post.body,
        userId: Post.userId,
      });
    });
  }

  /**
   * controler submit form form.
   * @param Data 
   */
  onSubmit(Data: any) {

    // Process checkout data here
    const items = this.CardsService.findPostById(this.data.id);
    //this.checkoutForm.reset();
    this.CardsService.updatePost(Data).subscribe({
      next: data => {
        this.postId = data.id;
        this.actionFunction();
        console.info('Your post id is update: ', this.postId);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
   
    console.warn('Your post has been submitted', Data);
  }

  /**
 *  action alert and close modal
 */
  actionFunction() {
    alert("You have update your post");
    this.closeModal();
  }

  /**
   * close singular modal
   */
  closeModal() {
    this.dialogRef.close();
  }
}

