import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output () parametroSeleccionado = new EventEmitter <any> ()

  paisSeleccionado='Argentina';
  categoriaSeleccionada='General';

  categorias: any[]=[
    {value:'general', name:'General' },
    {value:'business', name:'Negocios'},
    {value:'sports', name:'Deportes'},
    {value:'entretaiment', name:'General' },
    {value:'health', name:'Negocios'},
    {value:'science', name:'Deportes'},
    {value:'tecnology', name:'General' },    
  ]

  paises: any[]=[
    {value:'ar', name:'Argentina' },
    {value:'br', name:'Brasil'},
    {value:'fr', name:'Francia'},
    {value:'hu', name:'Hungria' },
    {value:'mx', name:'Mexico'},
    {value:'gb', name:'Gran Bretaña'},
       
  ]

  buscarNoticia (){
   
    const PARAMETROS = {
      categoria : this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    } 
    
    this.parametroSeleccionado.emit(PARAMETROS)

  }

 


}
