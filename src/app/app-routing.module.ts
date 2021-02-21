import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: '',
    loadChildren: () => {
      return import('./tabs/tabs.module').then(m => m.TabsPageModule);
    }
  },
  {
    path: 'timer-app',
    loadChildren: () => import('./timer-app/timer-app.module').then( m => m.TimerAppPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'challenge-new',
    loadChildren: () => import('./challenge-new/challenge-new.module').then( m => m.ChallengeNewPageModule)
  },
  {
    path: 'challenge-lower',
    loadChildren: () => import('./challenge-lower/challenge-lower.module').then( m => m.ChallengeLowerPageModule)
  },
  {
    path: 'challenge-upper',
    loadChildren: () => import('./challenge-upper/challenge-upper.module').then( m => m.ChallengeUpperPageModule)
  },
  {
    path: 'challenge-cardio',
    loadChildren: () => import('./challenge-cardio/challenge-cardio.module').then( m => m.ChallengeCardioPageModule)
  },
  {
    path: 'challenge-stretch',
    loadChildren: () => import('./challenge-stretch/challenge-stretch.module').then( m => m.ChallengeStretchPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
 
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'testad',
    loadChildren: () => import('./testad/testad.module').then( m => m.TestadPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
