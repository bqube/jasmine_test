import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	Validators,
	FormBuilder
} from "@angular/forms";
import { LoginService } from '../login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

	loginUser: any;
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
