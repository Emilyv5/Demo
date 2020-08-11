import { Component, OnInit } from "@angular/core";

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
// import { AlertService, AuthenticationService } from "@/_services";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
	ngOnInit() {}
}
