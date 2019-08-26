import { Routes,RouterModule } from "@angular/router";
import { UserdisplayComponent } from './userdisplay.component';
import { SignupComponent } from './signup/signup.component';
import { EdituserComponent } from './edituser/edituser.component';

const arr : Routes=[
{path:'', children:[
  {path:'',component:UserdisplayComponent},
  {path:'signup',  component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent}
]}
];

export const userrouting=RouterModule.forChild(arr);
