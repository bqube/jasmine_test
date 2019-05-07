import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	Validators,
	FormBuilder
} from "@angular/forms";
import { LoginService } from '../login.service';

export interface loggedInUser {
	customer_token?: any;
	email: string;
	live_customer_token?: any;
	feedback_count: number;
	all_order_not_verified: boolean;
	first_name: string;
	verification_code: string;
	default_source?: any;
	access_token: string;
	phone_number: string;
	is_facebook_user: boolean;
	first_scan: boolean;
	is_google_user: boolean;
	store_specific_parameters: any;
	email_status: string;
	facebook_token?: any;
	c_id: number;
	is_guest_user: boolean;
	live_source?: any;
	opt_in?: any;
	last_name: string;
	user_metadata: any;
	guest_user_email?: any;
	source?: any;
	cus_id: string;
	is_email_verified: boolean;
	user: number;
}


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

	loginUser: loggedInUser;
	form: FormGroup;
	constructor(private fb: FormBuilder, private loginService: LoginService) { }

	ngOnInit() {
		this.form = this.fb.group({
			email: ['', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")]],
			password: ['', [
				Validators.required,
				Validators.minLength(8)]],
		});
	}

	login() {
		if (this.form.valid) {
			let loginData = new FormData();
			loginData.append('email', this.form.get('email').value);
			loginData.append('password', this.form.get('password').value);
			this.loginService.login(loginData).subscribe((resp: any) => {
				this.loginUser = resp.result;
				console.log(this.loginUser);
			});
		}

	}

}
