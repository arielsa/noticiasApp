import { Component } from '@angular/core';
import { NoticiaService } from './service/noticia.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listNoticias: any [] = [];

  loading = false;

  constructor (private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros:any){
    this.loading = true;
    this.listNoticias = [];

    console.log('soy el padre')
    console.log(parametros)

    this._noticiaService.getNoticias(parametros).subscribe(data => {console.log(data);
    this.loading = false;
    this.listNoticias = data.articles;

    })
  }

  
}
