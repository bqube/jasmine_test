import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [
			HttpModule,
			HttpClientModule,
		],
	}));

	it('should be created', () => {
		const service: LoginService = TestBed.get(LoginService);
		expect(service).toBeTruthy();
	});
});
