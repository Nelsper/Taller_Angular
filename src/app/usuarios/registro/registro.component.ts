import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    reigistroForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.reigistroForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellidos: ['', [Validators.required, Validators.minLength(3)]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    };

    onSubmit(){
      if(this.reigistroForm.valid){
        console.log(this.reigistroForm.value); 
      }
    };
}
