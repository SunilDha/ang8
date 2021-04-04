import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { angularFireModule } from '@angular/fire';
import { angularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { angularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angularFireModule.initializeApp(environment,firebase),
    angularFireDatabaseModule,
    angularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
