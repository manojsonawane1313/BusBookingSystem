import { RouterModule, Routes } from "@angular/router";
import { AddbusComponent } from "./add-bus/add-bus.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'add-bus', component: AddbusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

