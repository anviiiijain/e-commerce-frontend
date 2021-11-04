import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MaterialComponents = [
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
