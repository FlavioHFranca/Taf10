import { Component } from '@angular/core';
import { Router } from '@angular/router';         
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,             
})
export class Tab1Page {

  constructor(private router: Router) {}
  usuario : String = '';
  senha : String= '';
  mensagemErro : String ='';
  // login() {
  //   if (this.usuario === 'admin' && this.senha === 'admin') {
  //     // console.log('Login bem-sucedido!');
      
  //     this.router.navigate(['./login']);
  //   } else { 
  //     this.mensagemErro = 'Usuário ou senha inválidos';
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000);

  //   }
  // }

  Sair(){
    this.router.navigate(['./login']);
    console.log('Logout bem-sucedido!');
  }
}




