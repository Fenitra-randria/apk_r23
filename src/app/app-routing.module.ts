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
    path: 'menu-not-connect',
    loadChildren: () => import('./pages/menu-not-connect/menu-not-connect.module').then( m => m.MenuNotConnectPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'if-cooperative',
    loadChildren: () => import('./pages/register-etape-after-choice/if-cooperative/if-cooperative.module').then( m => m.IfCooperativePageModule)
  },
  {
    path: 'if-voyageur',
    loadChildren: () => import('./pages/register-etape-after-choice/if-voyageur/if-voyageur.module').then( m => m.IfVoyageurPageModule)
  },
  {
    path: 'if-proprietaire-vehicule',
    loadChildren: () => import('./pages/register-etape-after-choice/if-proprietaire-vehicule/if-proprietaire-vehicule.module').then( m => m.IfProprietaireVehiculePageModule)
  },
  {
    path: 'if-chauffeur',
    loadChildren: () => import('./pages/register-etape-after-choice/if-chauffeur/if-chauffeur.module').then( m => m.IfChauffeurPageModule)
  },
  {
    path: 'if-loueur-voiture',
    loadChildren: () => import('./pages/register-etape-after-choice/if-loueur-voiture/if-loueur-voiture.module').then( m => m.IfLoueurVoiturePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'popover-calendar',
    loadChildren: () => import('./pages/popover/popover-calendar/popover-calendar.module').then( m => m.PopoverCalendarPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'infocooperative',
    loadChildren: () => import('./pages/details-info-user/infocooperative/infocooperative.module').then( m => m.InfocooperativePageModule)
  },
  {
    path: 'list-discussion',
    loadChildren: () => import('./pages/chat/list-discussion/list-discussion.module').then( m => m.ListDiscussionPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./pages/components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'header-info-user',
    loadChildren: () => import('./pages/components/header-info-user/header-info-user.module').then( m => m.HeaderInfoUserPageModule)
  },
  {
    path: 'add-destination',
    loadChildren: () => import('./pages/profile-user/add-destination/add-destination.module').then( m => m.AddDestinationPageModule)
  },
  {
    path: 'add-voiture',
    loadChildren: () => import('./pages/profile-user/add-voiture/add-voiture.module').then( m => m.AddVoiturePageModule)
  },
  {
    path: 'cooperative',
    loadChildren: () => import('./pages/profile-user/cooperative/cooperative.module').then( m => m.CooperativePageModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./pages/profile-user/destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'disponibility',
    loadChildren: () => import('./pages/profile-user/disponibility/disponibility.module').then( m => m.DisponibilityPageModule)
  },
  {
    path: 'gestion-vehicule',
    loadChildren: () => import('./pages/profile-user/gestion-vehicule/gestion-vehicule.module').then( m => m.GestionVehiculePageModule)
  },
  {
    path: 'footer-menu',
    loadChildren: () => import('./pages/components/footer-menu/footer-menu.module').then( m => m.FooterMenuPageModule)
  },
  {
    path: 'invite-amis',
    loadChildren: () => import('./pages/invite-amis/invite-amis.module').then( m => m.InviteAmisPageModule)
  },
  {
    path: 'envoye-colis',
    loadChildren: () => import('./pages/envoye-colis/envoye-colis.module').then( m => m.EnvoyeColisPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'modify-profile',
    loadChildren: () => import('./pages/modify-profile/modify-profile.module').then( m => m.ModifyProfilePageModule)
  },
  {
    path: 'globale-modale',
    loadChildren: () => import('./pages/components/globale-modale/globale-modale.module').then( m => m.GlobaleModalePageModule)
  },
  {
    path: 'list-action-reservation',
    loadChildren: () => import('./pages/list-action-reservation/list-action-reservation.module').then( m => m.ListActionReservationPageModule)
  },
  {
    path: 'reservation-enlign',
    loadChildren: () => import('./pages/reservation-enlign/reservation-enlign.module').then( m => m.ReservationEnlignPageModule)
  },
  {
    path: 'form-envoye-colis',
    loadChildren: () => import('./pages/form-envoye-colis/form-envoye-colis.module').then( m => m.FormEnvoyeColisPageModule)
  },
  {
    path: 'tous-colis',
    loadChildren: () => import('./pages/tous-colis/tous-colis.module').then( m => m.TousColisPageModule)
  },
  {
    path: 'chaffeur',
    loadChildren: () => import('./pages/chaffeur/chaffeur.module').then( m => m.ChaffeurPageModule)
  },
  {
    path: 'lottie',
    loadChildren: () => import('./pages/components/lottie/lottie.module').then( m => m.LottiePageModule)
  },
  {
    path: 'revenu',
    loadChildren: () => import('./pages/revenu/revenu.module').then( m => m.RevenuPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./pages/parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'regle-confidentiality',
    loadChildren: () => import('./pages/regle-confidentiality/regle-confidentiality.module').then( m => m.RegleConfidentialityPageModule)
  },
  {
    path: 'condition-usage',
    loadChildren: () => import('./pages/condition-usage/condition-usage.module').then( m => m.ConditionUsagePageModule)
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./pages/bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'list-action-profile',
    loadChildren: () => import('./pages/list-action-profile/list-action-profile.module').then( m => m.ListActionProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'gestion-vehicule-personnelle',
    loadChildren: () => import('./pages/gestion-vehicule-personnelle/gestion-vehicule-personnelle.module').then( m => m.GestionVehiculePersonnellePageModule)
  },
  {
    path: 'info-voiture',
    loadChildren: () => import('./pages/info-voiture/info-voiture.module').then( m => m.InfoVoiturePageModule)
  },
  {
    path: 'list-voiture-dispo',
    loadChildren: () => import('./pages/list-voiture-dispo/list-voiture-dispo.module').then( m => m.ListVoitureDispoPageModule)
  },
  {
    path: 'list-chauffeur-proprietaire-vehicule',
    loadChildren: () => import('./pages/list-chauffeur-proprietaire-vehicule/list-chauffeur-proprietaire-vehicule.module').then( m => m.ListChauffeurProprietaireVehiculePageModule)
  },
  {
    path: 'tours-voiture',
    loadChildren: () => import('./pages/tours-voiture/tours-voiture.module').then( m => m.ToursVoiturePageModule)
  },
  {
    path: 'add-type-cooperative',
    loadChildren: () => import('./pages/add-type-cooperative/add-type-cooperative.module').then( m => m.AddTypeCooperativePageModule)
  },
  {
    path: 'menu-gestion-vehicule',
    loadChildren: () => import('./pages/menu-gestion-vehicule/menu-gestion-vehicule.module').then( m => m.MenuGestionVehiculePageModule)
  },
  {
    path: 'reservation-enligne-cooperative',
    loadChildren: () => import('./pages/reservation-enligne-cooperative/reservation-enligne-cooperative.module').then( m => m.ReservationEnligneCooperativePageModule)
  },
  {
    path: 'action-invitation',
    loadChildren: () => import('./pages/action-invitation/action-invitation.module').then( m => m.ActionInvitationPageModule)
  },
  {
    path: 'modify-vehicule',
    loadChildren: () => import('./pages/modify-vehicule/modify-vehicule.module').then( m => m.ModifyVehiculePageModule)
  },
  {
    path: 'product-zoom-page',
    loadChildren: () => import('./pages/components/product-zoom-page/product-zoom-page.module').then( m => m.ProductZoomPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
