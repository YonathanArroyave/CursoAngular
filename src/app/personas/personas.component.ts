import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from "../persona/persona.component";

@Component({
    selector: 'app-personas',
    standalone: true,
    imports: [RouterOutlet, PersonaComponent],
    templateUrl: './personas.component.html',
    styleUrls:['./personas.component.css']
})

export class PersonasComponent {
     deshabilitar = false;
     mensaje = 'Sin Persona'
     titulo= ''

     agregarPersona(){
        this.mensaje  = 'persona agregada'
     }

     modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
     }
  }
  

 