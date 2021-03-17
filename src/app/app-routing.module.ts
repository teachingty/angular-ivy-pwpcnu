import { HelloComponent } from "./hello.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HelloComponent } from "@hello.component";
// import{NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: HelloComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
