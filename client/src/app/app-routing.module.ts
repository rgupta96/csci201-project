import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listings',
    loadChildren: () => import('./listings/listings.module').then( m => m.ListingsPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
