import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MailService } from './mail.service';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MailService]
})
export class AppComponent { 
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/tickets');
   	var i = af.database.object('/tickets', { preserveSnapshot: true });
   	i.subscribe(snapshot => {
   		console.log(snapshot.val());
  	});
  }
}