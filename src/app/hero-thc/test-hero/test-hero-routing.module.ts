import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHeroComponent } from './test-hero.component';
import { TestHeroChildOneComponent } from './test-hero-child-one.component';
import { TestHeroChildTwoComponent } from './test-hero-child-two.component';


const testHeroRoutes: Routes = [
  {
    path: '',
    component: TestHeroComponent,
    children: [
      {
        path: 'child-one',
        component: TestHeroChildOneComponent,
      },
      {
        path: 'child-two',
        component: TestHeroChildTwoComponent,
      }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(testHeroRoutes),
  ],
  declarations: []
})

export class TestHeroRoutingModule {

}
