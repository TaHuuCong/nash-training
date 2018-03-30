import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './hero-thc/heroes/heroes.component';
import { SuperHeroListInStarWarComponent } from './hero-thc/super-hero-list-in-star-war/super-hero-list-in-star-war.component';
import { HeroDetailComponent } from './hero-thc/hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './hero-thc/page-not-found/page-not-found.component';
import { TestHeroComponent } from './hero-thc/test-hero/test-hero.component';


// bình thường thì khi load trang nó sẽ đến /heroes do đây là route gốc
// nhưng khi 1 route nào đó dùng data: reload thì nó sẽ load cái đó trước
const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'super-hero', component: SuperHeroListInStarWarComponent },
  // {
  //   path: 'test-hero',
  //   loadChildren: 'app/hero-thc/test-hero/test-hero.module#TestHeroModule'
  // },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule {

}
