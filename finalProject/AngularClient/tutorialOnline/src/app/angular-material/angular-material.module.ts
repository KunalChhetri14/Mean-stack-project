import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule,MatSelectModule,MatOptionModule} from '@angular/material';

const MaterialModule = [
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatSelectModule,
  MatOptionModule

];

@NgModule({
  imports: [MaterialModule],

  exports: [MaterialModule]
})
export class AngularMaterialModule {}
