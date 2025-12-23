import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusComponent } from './search-bus/search-bus.component';

const routes: Routes = [
  { path: 'search-bus', component: SearchBusComponent },
  { path: '', redirectTo: '/search-bus', pathMatch: 'full' },
  { path: '**', redirectTo: '/search-bus' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }
