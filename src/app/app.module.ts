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
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent} from './modal-form/login/login.component';
import { ModalLoginComponent } from './modal-form/modal-login/modal-login.component';


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
    MatCheckboxModule
  ],
  entryComponents: [ModalLoginComponent, LoginComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent, SuperHeroListInStarWarComponent, ParentComponent]
})
export class AppModule { }
