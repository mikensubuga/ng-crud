import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashAlt, faEdit, faPlusCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import { CrudService } from './services/crud-service.service';

import { AppComponent } from './app.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouteComponent } from './pages/route/route.component';

const appRoutes: Routes = [
  {path:'route', component: RouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    AddItemComponent,
    ModalComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faPlusCircle, faTrashAlt, faBars);
  }
}
