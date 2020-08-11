import { Component, OnInit } from "@angular/core";

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
// import { AlertService, AuthenticationService } from "@/_services";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
	ngOnInit() {}
}
