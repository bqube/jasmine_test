import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) {
	}

	login(logInData: FormData) {
		let url = 'https://app.mishipay.com/d/customer/signin?&store_id=a472977e-24ed-409a-a203-94565637dbc9&r_lat=19.0691956&r_long=73.0199817&network_type=&platform=Web&device_id=5b69be5dc3834b5a412e122b88011df4';

		if (logInData) {
			return this.http.post(url, logInData);
		}
	}
}
