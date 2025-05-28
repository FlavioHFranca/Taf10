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
  Alunos(){
    this.router.navigate(['tabs/tab2']);
    console.log('Navegando para Alunos');

  }
  Turmas(){
    this.router.navigate(['tabs/tab3']);
    console.log('Navegando para turmas');

  }
  

  Sair(){
    this.router.navigate(['./login']);
    console.log('Logout bem-sucedido!');
  }
}




