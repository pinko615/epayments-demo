import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  firstFormGroup!: FormGroup;
  isLoading: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  finishOperation() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}
