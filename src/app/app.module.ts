import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPostsComponent } from './card-posts/card-posts.component';
import { CardsService } from './service/cards.service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEditPostComponent } from './card-edit-post/card-edit-post.component';
import { CardCreatePostComponent } from './card-create-post/card-create-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardPostsComponent,
    FilterPipe,
    CardEditPostComponent,
    CardCreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [HttpClient, CardsService,
    {
      provide: MAT_DIALOG_DATA, useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CardEditPostComponent, CardCreatePostComponent]
})
export class AppModule { }
