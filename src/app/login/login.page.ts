import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}
  usuario : String = '';
  senha : String= '';
  mensagemErro : String ='';
  mensagemSucesso : String ='';
  login() {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      // console.log('Login bem-sucedido!');
      this.mensagemSucesso = 'Login bem-sucedido!';
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['./tabs/tab1']);
    } else { 
      this.mensagemErro = 'Usuário ou senha inválidos';
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }
  }

  ngOnInit() {
  }

}
