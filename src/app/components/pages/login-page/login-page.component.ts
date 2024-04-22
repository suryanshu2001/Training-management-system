import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DataModelModule } from 'src/app/data-model/data-model.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers:[DataModelModule]
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  hide = true;
  isButtonDisabled: boolean = true;
  checked!:false;
  email!: string
  password!: string

  constructor(private fb: FormBuilder, dataModel: DataModelModule,private route: Router,private toast: ToastrService) {
    this.email = dataModel.email;
    this.password = dataModel.password;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  login(): void {
    console.log('login')
    if (this.loginForm.valid && this.loginForm.value.email == 'a@b.com' && this.loginForm.value.password == '1234') {
      localStorage.setItem('loggedIn','true')
      this.route.navigate(['dashboard']);
      console.log(this.loginForm.value);
    }
    else{
      this.toast.error('Wrong Credentials','dxfcgvjhbj',{
        closeButton:true
      });
      localStorage.setItem('loggedIn','false')
    }
  }
}
