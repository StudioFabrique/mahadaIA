import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email:  ['test@yahoo.com',[
      Validators.required,
      Validators.email,
      // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]],
    pass:   ['123456',[Validators.required, 
      Validators.minLength(6) 
  ]],
  });

  constructor ( private fb: FormBuilder, private router:Router, private authService: AuthService ) { }


  login() {

    const { email, pass } = this.myForm.value;

    this.authService.login( email, pass )
      .subscribe( ok => {
        console.log(ok);
        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        }else{
          //mostrar mensaje de error
          swal.fire('error', ok, 'error')
        }
        
      })
    // this.router.navigateByUrl('/dashboard')
  }


}
