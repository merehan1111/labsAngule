import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userRegisterForm:FormGroup;
  constructor(private fb:FormBuilder){
    // this.userRegisterForm=new FormGroup({
    //   name: new FormControl('',[Validators.required , Validators.pattern('^[a-z-A-Z]{3,15}$')]),
    //   email:new FormControl(''),
    //   password:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl('')
    //   }),
    //   phoneNumber:new FormArray([new FormControl('')])

    // })
    this.userRegisterForm=fb.group({
      name: ['',[Validators.required , Validators.pattern('^[a-z-A-Z]{3,15}$')]],
      email:[''],
      password:[''],
      address:fb.group({
        city:[''],
        street:['']
      }),
      phoneNumber:fb.array([['',[Validators.required]]])

    })
  }
  name(){
    return this.userRegisterForm.get('name')
  }
  get phones(){
    return this.userRegisterForm.get('phoneNumber') as FormArray;
  }
  addnewPhone(){
    this.phones.push(new FormControl())
  }

  ngOnInit(): void {
    //get user id >> id in url
    this.userRegisterForm.setValue({
      name:"merehan",
      email:'merehan@.com',
      password:12345,
      address:{
        city:'minia',
        street:'Taha hessin'
      }
      

    })
  }





}import { CommonModule, JsonPipe } from '@angular/common';

