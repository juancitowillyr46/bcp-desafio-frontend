import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agencies',
    loadChildren: () => import('./presentation/views/agencies/agencies.module').then(mod => mod.AgenciesModule),
  },
  {
    path: '',
    redirectTo: 'agencies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
