import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from "../persona/persona.component";
import { FormsModule } from '@angular/forms';// Two way binding
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-personas',
    standalone: true,
    imports: [RouterOutlet, PersonaComponent, FormsModule, NgIf],//importa forms para poder usar  Two way binding
    templateUrl: './personas.component.html',
    styleUrls:['./personas.component.css']
})

export class PersonasComponent {
     deshabilitar = false;
     mensaje = '';
     titulo= '';
     mostrar=false;

     agregarPersona(){
      this.mostrar = true;
        this.mensaje  = 'persona agregada'
     }

    
  }
  
/*//se captura el evento para modidicar
  modificarTitulo(event: Event){
   this.titulo = (<HTMLInputElement>event.target).value;
}*/