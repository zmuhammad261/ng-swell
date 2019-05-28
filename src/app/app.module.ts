import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './app-routing.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SpecialComponent } from './special/special.component';
import { BlogComponent } from './blog/blog.component';
import { AlbumComponent } from './album/album.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    FeaturedComponent,
    HomeComponent,
    ProductsComponent,
    SpecialComponent,
    BlogComponent,
    AlbumComponent,
    SubscribeComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
