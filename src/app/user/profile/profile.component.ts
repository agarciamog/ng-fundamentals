import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['/events']);
    }

  }

  cancel() {
    this.router.navigate(['/events']);
  }

  isError(control: FormControl): string {
    if (control.invalid && control.touched) {
      return 'error';
    }
    return;
  }

  isPatternError(control: FormControl): boolean {
    return control.errors.pattern;
  }

  isRequiredError(control: FormControl): boolean {
    return control.errors.required;
  }
}
