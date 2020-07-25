import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { PetsComponent } from "./pets/pets.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { DisplayComponent } from "./display/display.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
	{
		path: "",
		component: LoginComponent,
	},
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "register",
		component: RegisterComponent,
	},
	{
		path: "pets",
		component: PetsComponent,
	},

	// { path: "register", component: RegisterComponent },

	{ path: "pets/new", component: NewComponent },
	{ path: "pets/:id", component: DisplayComponent },
	{ path: "pets/:id/edit", component: EditComponent },

	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
