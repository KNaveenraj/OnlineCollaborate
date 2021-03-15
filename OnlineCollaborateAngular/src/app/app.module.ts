import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule } from 'angular-datatables';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { HomeComponent } from './home/home.component';
import { NavigationUserComponent } from './navigation-user/navigation-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DeactivateUserComponent } from './deactivate-user/deactivate-user.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { UpdateUserprofileComponent } from './update-userprofile/update-userprofile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogComponent } from './blog/blog.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UserListComponent,
    LoginUserComponent,
    NavigationComponent,
    UserProfileComponent,
    BlogListComponent,
    ActiveUserComponent,
    HomeComponent,
    NavigationUserComponent,
    AboutUsComponent,
    DeactivateUserComponent,
    AddPostComponent,
    UpdateUserprofileComponent,
    BlogComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    EditorModule, 
    MatProgressBarModule,
    DataTablesModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }