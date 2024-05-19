import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { DashboardWelcomeComponent } from './pages/dashboard-welcome/dashboard-welcome.component';
import { OperatorListComponent } from './pages/operator-list/operator-list.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SmsComponent } from './pages/sms/sms.component';
import { ProfileComponent } from './pages/profile/profile.component';



const routes: Routes = [
  {
    
    path: '',
    component: DashboardComponent,
    children: [ 
      { path: 'nfts', component: NftComponent },
      { path: 'welcome', component: DashboardWelcomeComponent },
      { path: 'operators', component: OperatorListComponent },
      { path: 'client', component: ClientDetailsComponent },
      { path: 'sms', component: SmsComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
