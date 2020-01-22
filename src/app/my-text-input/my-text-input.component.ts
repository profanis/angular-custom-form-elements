import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
  field: string;

  id = Math.random();

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

}
