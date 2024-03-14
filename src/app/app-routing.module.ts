import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaCitaComponent } from './idea-cita/idea-cita.component';

const routes: Routes = [
  {
    path : 'ideacita',
    component: IdeaCitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
