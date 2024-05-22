import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './modules/Admin/add-admin/add-admin.component';
import { AddOperatorComponent } from './modules/Admin/add-operator/add-operator.component';
import { OperatorCodeComponent } from './modules/Admin/operator-code/operator-code.component';
import { WelcomeComponent } from './modules/dashboard/pages/welcome/welcome.component';
import { UpdateAdminComponent } from './modules/Admin/update-admin/update-admin.component';
import { SignInComponent } from './modules/auth/pages/sign-in/sign-in.component';

const routes: Routes = [

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'acc', component: WelcomeComponent },
  
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'admin/add', component: AddAdminComponent },
  { path: 'admin/profil', component: UpdateAdminComponent },
  { path: 'operator/add', component: AddOperatorComponent },
  { path: 'operator/sendcode', component: OperatorCodeComponent },
  
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
