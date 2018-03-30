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
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { SuperHeroListInStarWarComponent } from './hero-thc/super-hero-list-in-star-war/super-hero-list-in-star-war.component';
import { HeroesComponent } from './hero-thc/heroes/heroes.component';
import { HeroDetailComponent } from './hero-thc/hero-detail/hero-detail.component';
import { SwitchesComponent } from './demo-tp/switches/switches.component';
import { ContactListComponent } from './demo-tp/contact-list/contact-list.component';
import { ContactImageDetailComponent } from './demo-tp/contact-image-detail/contact-image-detail.component';
import { HeroService } from './hero-thc/hero.service';
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
import { TestHeroModule } from './hero-thc/test-hero/test-hero.module';

@NgModule({
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
  ],
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
  entryComponents: [ModalLoginComponent, LoginComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
