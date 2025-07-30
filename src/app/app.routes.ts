import { Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { ContactPageComponent } from "./pages/login-page/login-page.component";
export const routes: Routes = [

  {
    path: "contacts",
    component: ContactPageComponent,
  },


  { path: "**", redirectTo: "contacts" },
];
