import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/dashboard/home-page/home-page.component';
import { ExamsPageComponent } from './components/pages/dashboard/exams-page/exams-page.component';
import { AssignmentsPageComponent } from './components/pages/dashboard/assignments-page/assignments-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { AuthGuard } from './services/auth-guard.guard';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'exams', component: ExamsPageComponent },
      { path: 'assignments', component: AssignmentsPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
