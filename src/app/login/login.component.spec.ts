import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent, loggedInUser } from "./login.component";

describe('Component: Login', () => {

	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(() => {

		// refine the test module by declaring the test component
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FormsModule,
				HttpModule,
				FormsModule,
				HttpClientModule,
			],
			declarations: [LoginComponent]
		});

		// create component and test fixture
		fixture = TestBed.createComponent(LoginComponent);

		// get test component from the fixture
		component = fixture.componentInstance;
		component.ngOnInit();
		fixture.detectChanges();
	});

	it('emailform invalid when empty', () => {
		expect(component.form.valid).toBeFalsy();
	});


	it('email field validity', () => {
		let errors = {};
		let email = component.form.controls['email'];
		expect(email.valid).toBeFalsy();

		// Email field is required
		errors = email.errors || {};
		expect(errors['required']).toBeTruthy();

		// Set email to something
		email.setValue("test");
		errors = email.errors || {};
		expect(errors['required']).toBeFalsy();
		expect(errors['pattern']).toBeTruthy();

		// Set email to something correct
		email.setValue("amitbhusi@gmail.com");
		errors = email.errors || {};
		expect(errors['required']).toBeFalsy();
		expect(errors['pattern']).toBeFalsy();
	});

	it('password field validity', () => {
		let errors = {};
		let password = component.form.controls['password'];

		// Email field is required
		errors = password.errors || {};
		expect(errors['required']).toBeTruthy();

		// Set email to something correct
		password.setValue("password@123");
		errors = password.errors || {};
		expect(errors['required']).toBeFalsy();
		expect(errors['minlength']).toBeFalsy();
	});

	it('submitting a form emits a user', () => {
		expect(component.form.valid).toBeFalsy();
		component.form.controls['email'].setValue("amitbhusi@gmail.com");
		component.form.controls['password'].setValue("password@123");
		expect(component.form.valid).toBeTruthy();
	});
});
