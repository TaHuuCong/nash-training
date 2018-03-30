import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { TestHeroModule } from './hero-thc/test-hero/test-hero.module';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { SuperHeroListInStarWarComponent } from './hero-thc/super-hero-list-in-star-war/super-hero-list-in-star-war.component';
import { HeroesComponent } from './hero-thc/heroes/heroes.component';
import { HeroDetailComponent } from './hero-thc/hero-detail/hero-detail.component';
import { SwitchesComponent } from './demo-tp/switches/switches.component';
import { ContactListComponent } from './demo-tp/contact-list/contact-list.component';
import { ContactImageDetailComponent } from './demo-tp/contact-image-detail/contact-image-detail.component';
import { ParentComponent } from './student/parent/parent.component';
import { ChildoneComponent } from './student/childone/childone.component';
import { ChildtwoComponent } from './student/childtwo/childtwo.component';
import { ChildthreeComponent } from './student/childthree/childthree.component';
import { LoginComponent } from './modal-form/login/login.component';
import { ModalLoginComponent } from './modal-form/modal-login/modal-login.component';
import { ContactFormComponent } from './form/contact-form/contact-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './hero-thc/page-not-found/page-not-found.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { FirstServiceComponent } from './service/first-service/first-service.component';
import { SecondServiceComponent } from './service/second-service/second-service.component';
import { MovieManageComponent } from './movie-management/movie-add/movie-manage.component';
import { HeroService } from './hero-thc/hero.service';
import { NumberService } from './service/number.service';
import { MovieService } from './movie-management/movie.service';
import { MovieListComponent } from './movie-management/movie-list/movie-list.component';
import { MovieEditComponent } from './movie-management/movie-edit/movie-edit.component';

@NgModule({
  // Các component, directive và pipe sử dụng
  declarations: [
    AppComponent,
    SuperHeroListInStarWarComponent,
    HeroesComponent,
    HeroDetailComponent,
    SwitchesComponent,
    ContactListComponent,
    ContactImageDetailComponent,
    ParentComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    LoginComponent,
    ModalLoginComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    LifecycleHookComponent,
    FirstServiceComponent,
    SecondServiceComponent,
    MovieListComponent,
    MovieManageComponent,
    MovieEditComponent,
  ],

  // Các module sử dụng
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    TestHeroModule,
    AppRoutingModule, // thằng module cha này phải ở cuối
  ],

  // các component được sử dụng trong view của AppComponent (dạng popup/modal-box)
  entryComponents: [ModalLoginComponent, LoginComponent],

  // các service sử dụng
  providers: [
    HeroService,
    NumberService,
    MovieService,
  ],

  // chương trình bắt đầu từ AppComponent (thằng này là gốc)
  bootstrap: [AppComponent]
})
export class AppModule { }
