import { Component, OnInit } from "@angular/core";

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
// import { AlertService, AuthenticationService } from "@/_services";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	ngOnInit() {}
}
