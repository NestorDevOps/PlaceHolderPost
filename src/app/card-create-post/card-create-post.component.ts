import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardsService } from '../service/cards.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-create-post',
  templateUrl: './card-create-post.component.html',
  styleUrls: ['./card-create-post.component.css']
})

/**
 * this class is component to create new post
 */
export class CardCreatePostComponent implements OnInit {

  items: any;
  checkoutForm;
  
  postId: number = 0;
  errorMessage: any;

  constructor(
    private CardsService: CardsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CardCreatePostComponent>,
  ) {
    this.checkoutForm = this.formBuilder.group({
      title: '',
      body: '',
      userId: 1
    });
  }

  ngOnInit() {
    // revisar que devuelve
    this.items = this.CardsService.getAllCard();
  }

  /**
   * control submit from the form. 
   * @param Data 
   */
  onSubmit(Data: any) {
    // Process checkout data here
    this.items = this.CardsService.getAllCard();
    this.checkoutForm.reset();
    this.CardsService.createPost(Data).subscribe({
      next: data => {
          this.postId = data.id;
          console.info('Your post id: ', this.postId);
          this.actionFunction();
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  
    console.warn('Your post has been submitted', Data);
  }

  /**
   * action alert and close modal
   */
  actionFunction() {
    alert("create new post!");
    this.closeModal();
  }

  /**
   * close simple modal
   */
  closeModal() {
    this.dialogRef.close();
  }

}
