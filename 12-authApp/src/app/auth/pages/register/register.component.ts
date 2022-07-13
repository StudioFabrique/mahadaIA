import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name:   ['pedro',[Validators.required, 
      Validators.minLength(5) 
  ]],
    email:  ['test1@yahoo.com',[
      Validators.required,
      Validators.email,
      // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]],
    pass:   ['123456',[Validators.required, 
      Validators.minLength(6) 
  ]],
  });


  constructor( private fb: FormBuilder, private router:Router, private authService: AuthService ) { }


  register() {

    const { name, email, pass } = this.myForm.value;

    this.authService.registro( name, email, pass )
      .subscribe( ok => {
        console.log(ok);
        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        }else{
          //mostrar mensaje de error
          swal.fire('error', ok, 'error')
        }
        
      })
    
  }
}
