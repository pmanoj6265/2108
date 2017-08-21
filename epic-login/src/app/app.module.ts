import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './auth/auth.service';
import {DataStorageService} from './auth/data-storage.service';
import { ServersComponent } from './servers/servers.component';
import { ResultComponent } from './result/result.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './shared/image.service';
import { AmazonComponent } from './amazon/amazon.component';
import { AzureComponent } from './azure/azure.component';
import { OpenStackComponent } from './open-stack/open-stack.component';
import { RackSpaceComponent } from './rack-space/rack-space.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'signup', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: SignupComponent},
  {path: 'Signin', component: LoginComponent},
  {path: 'Servers', component: GalleryComponent},
  {path: 'result', component: ResultComponent},
  {path: 'image/:1', component: AmazonComponent},
  {path: 'image/:2', component: AzureComponent},
  {path: 'image/:3', component: OpenStackComponent},
  {path: 'image/:4', component: RackSpaceComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    AuthComponent,
    ServersComponent,
    ResultComponent,
    GalleryComponent,
    AmazonComponent,
    AzureComponent,
    OpenStackComponent,
    RackSpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, DataStorageService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
