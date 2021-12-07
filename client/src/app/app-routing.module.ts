import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listings',
    loadChildren: () => import('./listings/listings.module').then( m => m.ListingsPageModule)
  },
  {
    path: 'login',
    redirectTo: '/home/login',
    pathMatch: 'full'
    //loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
  {
    path: 'my-properties',
    loadChildren: () => import('./my-properties/my-properties.module').then( m => m.MyPropertiesPageModule)
  },
  {
    path: 'my-properties/my-specific-listing/:id',
    loadChildren: () => import('./my-specific-listing/my-specific-listing.module').then( m => m.MySpecificListingPageModule)
  },
  {
    path: 'my-properties/create-new-listing/:id',
    loadChildren: () => import('./create-new-listing/create-new-listing.module').then( m => m.CreateNewListingPageModule)
  },
  {
    path: 'listings/specific-listing/:id',
    loadChildren: () => import('./specific-listing/specific-listing.module').then( m => m.SpecificListingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
