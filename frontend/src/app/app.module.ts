import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormModalComponent } from "./form-modal/form-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditFormModalComponent } from "./edit-form-modal/edit-form-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormModalComponent,
    EditFormModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
