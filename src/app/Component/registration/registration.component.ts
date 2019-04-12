import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm = new FormGroup({
    name : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private route:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit() {
    this.route.navigate(['/'])
  }

}
