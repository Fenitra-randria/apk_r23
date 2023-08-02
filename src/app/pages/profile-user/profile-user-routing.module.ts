import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUserPage } from './profile-user.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUserPage
  },
  {
    path: 'cooperative',
    loadChildren: () => import('./cooperative/cooperative.module').then( m => m.CooperativePageModule)
  },
  {
    path: 'gestion-vehicule',
    loadChildren: () => import('./gestion-vehicule/gestion-vehicule.module').then( m => m.GestionVehiculePageModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'disponibility',
    loadChildren: () => import('./disponibility/disponibility.module').then( m => m.DisponibilityPageModule)
  },
  {
    path: 'add-voiture',
    loadChildren: () => import('./add-voiture/add-voiture.module').then( m => m.AddVoiturePageModule)
  },
  {
    path: 'add-destination',
    loadChildren: () => import('./add-destination/add-destination.module').then( m => m.AddDestinationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserPageRoutingModule {}
