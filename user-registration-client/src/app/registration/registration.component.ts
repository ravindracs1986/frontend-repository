import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserRegistartionService } from '../user-registartion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserRegistartionService
    
) {}


  //user: User=new User("","",0,"");
  message:any;

  //constructor(private service:UserRegistartionService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
         name: ['', Validators.required],
         email: ['', Validators.required],
         experience: ['', Validators.required],
         domain: ['', [Validators.required]]
    });
}
  
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


  public registerNow(user :User){
   
    //console.log('user is', user.user.)
   // let resp=this.service.doRegistration(this.user);
   // resp.subscribe((data)=>this.message=data);
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
   // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    let resp= this.userService.doRegistration(this.registerForm.value);
    resp.subscribe((data)=>this.message="User registered succefully");


        // .pipe(first())
        // .subscribe(
        //     data => {
        //         this.alertService.success('Registration successful', true);
        //         this.router.navigate(['/login']);
        //     },
        //     error => {
        //         this.alertService.error(error);
        //         this.loading = false;
        //     });
}





}
