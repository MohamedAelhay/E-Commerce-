import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private fb : FormBuilder, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit() {
    this.route.navigate(['/'])
  }

  // get name(){
  //   return this.loginForm.get('name')
  // }
}
