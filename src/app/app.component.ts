import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
this.myForm = this.fb.group({
  firstName: [null, [Validators.required, Validators.minLength(10)]],
  lastName: [null, [Validators.required, Validators.minLength(10)]],
  email: [null, [Validators.required, Validators.email]],
  password: [null, Validators.required],
});
  }
}
