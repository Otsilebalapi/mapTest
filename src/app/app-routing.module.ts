import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'map',
    children: [
      {
        path: '',
        loadChildren: () => import('./map/map.module').then(m => m.MapModule)
      }
    ]
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then( m => m.FacilitiesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
