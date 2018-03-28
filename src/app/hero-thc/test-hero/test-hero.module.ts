import { NgModule } from '@angular/core';

import { TestHeroComponent } from './test-hero.component';
import { TestHeroChildOneComponent } from './test-hero-child-one.component';
import { TestHeroChildTwoComponent } from './test-hero-child-two.component';

import { TestHeroRoutingModule } from './test-hero-routing.module';

@NgModule({
  imports: [
    TestHeroRoutingModule,
  ],
  declarations: [
    TestHeroComponent,
    TestHeroChildOneComponent,
    TestHeroChildTwoComponent,
  ],
  providers: []
})

export class TestHeroModule { }
