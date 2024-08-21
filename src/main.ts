import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PersonasComponent } from './app/personas/personas.component';
import { PersonaComponent } from './app/persona/persona.component';

bootstrapApplication(AppComponent,  appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(PersonasComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(PersonaComponent, appConfig)
  .catch((err) => console.error(err));