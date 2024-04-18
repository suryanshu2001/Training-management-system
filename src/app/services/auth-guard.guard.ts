import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('loggedIn') === 'true') {
      return true;
    } else {
      alert('You must login first!');
      this.router.navigate(['/']); // Redirect to login page
      return false;
    }
  }
}
