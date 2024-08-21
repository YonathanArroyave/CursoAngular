import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from "../persona/persona.component";

@Component({
    selector: 'app-personas',
    standalone: true,
    imports: [RouterOutlet, PersonaComponent],
    templateUrl: './personas.component.html',
})

export class PersonasComponent {
    title2 = 'primerAppxxxxxxxxxxxxx';
    salud2 = 'Hablame desde personas';
  }
  
 