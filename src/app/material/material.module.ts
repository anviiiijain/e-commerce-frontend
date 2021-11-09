import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from "@angular/material/snack-bar"

const MaterialComponents = [
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatSnackBarModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
