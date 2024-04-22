import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataModelModule {
    email!: string
    password!: string
    userLogedin!: boolean

    constructor() {
        this.email = ''
        this.password = ''
        this.userLogedin = false
    }
 }
