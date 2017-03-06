import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MaillistComponent } from './maillist/maillist.component';
// import { ChatoptionComponent } from './chatoption/chatoption.component';
// import { ChatlayoutsComponent } from './chatlayouts/chatlayouts.component';

const appRoutes: Routes = [
	{ path: 'maillist', component: MaillistComponent, pathMatch: 'full' },
	// { path: 'chatoption', component: ChatoptionComponent, pathMatch: 'full' },
	// { path: 'chatlayouts', component: ChatlayoutsComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/maillist', pathMatch: 'full' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}