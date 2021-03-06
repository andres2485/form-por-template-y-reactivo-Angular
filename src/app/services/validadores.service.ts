import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
//import { resolve } from 'dns';
import { Observable } from 'rxjs';


interface ErrorValidate{
  [s:string]:boolean

}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario(control:FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{


  //  if(!control.value){

    //  return Promise.resolve(null);
    //}
    
return new Promise((resolve,rejects)=>{

  setTimeout(()=>{

if( control.value === 'strider'){
resolve({existe:true})

}else{

  resolve(null);
}
  },3500);

});

  }

  noQuezada(control:FormControl):ErrorValidate{   // validacion que no permita este apellido


if(control.value?.toLowerCase()==='quezada2'){

  return{

    noQuezada:true
  }
}

   return null;


  }

  passwordsIguales(pass1Name:string, pass2Name:string){
return(formGroup:FormGroup)=>{
 const pass1Control= formGroup.controls[pass1Name];
 const pass2Control= formGroup.controls[pass2Name];


 if( pass1Control.value === pass2Control.value){
        
      pass2Control.setErrors(null);


 }else{

  pass2Control.setErrors({noEsIgual:true});
 }
      
}

  }
}
