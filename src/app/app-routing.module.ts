import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ExamsPageComponent } from './components/pages/exams-page/exams-page.component';
import { AssignmentsPageComponent } from './components/pages/assignments-page/assignments-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'home',component:HomePageComponent},
  {path:'exams',component:ExamsPageComponent},
  {path:'assignments',component:AssignmentsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
