import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
//import { AppRoutingModule } from './app-routing.module';
import { MaillistComponent } from './maillist/maillist.component';
import { MailreadComponent } from './mailread/mailread.component';
import { MailwriteComponent } from './mailwrite/mailwrite.component';
import { ChatoptionComponent } from './chatoption/chatoption.component';
import { ChatlayoutsComponent } from './chatlayouts/chatlayouts.component';

import { MailService } from './mail.service';

const appRoutes: Routes = [
  { path: 'maillist', component: MaillistComponent, pathMatch: 'full' },
  { path: 'mailread', component: MailreadComponent, pathMatch: 'full' },
  { path: 'mailwrite', component: MailwriteComponent, pathMatch: 'full' },
  { path: 'chatoption', component: ChatoptionComponent, pathMatch: 'full' },
  { path: 'chatlayouts', component: ChatlayoutsComponent, pathMatch: 'full' },
  { path: 'mail_read.html', redirectTo: '/mailread', pathMatch: 'full' },
  { path: 'mail_write.html', redirectTo: '/mailwrite', pathMatch: 'full' },
  { path: 'chat_options.html', redirectTo: '/chatoption', pathMatch: 'full' },
  { path: 'chat_layouts.html', redirectTo: '/chatlayouts', pathMatch: 'full' },   
  { path: '', redirectTo: '/maillist', pathMatch: 'full' },   
];

// Must export the config
export const firebaseConfig = {
  apiKey: "Your-ApiKey",
	authDomain: "Your-AuthDomain",
	databaseURL: "Your DatabaseURL",
	storageBucket: "Your-StorageBucket"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
    // AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    MaillistComponent, 
    MailreadComponent, 
    MailwriteComponent,
    ChatoptionComponent, 
    ChatlayoutsComponent
  ],
  providers: [
    MailService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
