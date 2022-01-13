import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './views/shared/top-bar/top-bar.component';
import { FeedComponent } from './views/pages/feed/feed.component';
import { PostComponent } from './views/shared/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
