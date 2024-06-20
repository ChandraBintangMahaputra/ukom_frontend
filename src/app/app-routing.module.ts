import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PegawaiComponent } from './pegawai/pegawai.component';

const routes: Routes = [
  {path: 'pegawai', component: PegawaiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
