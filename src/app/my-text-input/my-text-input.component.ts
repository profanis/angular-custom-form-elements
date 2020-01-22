import { Component, forwardRef, Input, Self, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-text-input',
  templateUrl: './my-text-input.component.html',
  styleUrls: ['./my-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyTextInputComponent),
      multi: true,
    },
  ],
})
export class MyTextInputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder: string;
  @Input() control: FormControl;
  field: string;

  id = Math.random();
  errors = {
    minlength: 'Min length error',
    required: 'Field is required',
    email: 'Email is invalid'
  };


  // Function to call when change
  onChange = (value: any) => {}

  writeValue(obj: any): void {
    this.field = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  getErrors(): { type; message; }[] {

    if (!this.control.errors) {
      return;
    }

    return Object.keys(this.control.errors).map(errorType => {
        return {
          type: errorType,
          message: this.errors[errorType]
        };
      }
    );
  }

}
