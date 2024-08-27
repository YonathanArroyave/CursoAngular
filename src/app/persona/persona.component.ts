import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
  //styles:['h1{color: blue;}'],
})
export class PersonaComponent {
    nombre: string = 'Yonathan';
    apellido: string = 'Arroyave';
    edad:number = 28;
  


/*Asi se envia un elemento privado
    private edad:number = 28;
    getEdad():number{
      return this.edad;
    }
*/    
    
}
