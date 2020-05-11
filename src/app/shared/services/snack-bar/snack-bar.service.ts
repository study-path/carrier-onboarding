import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(
    message: string,
    snackBarDuration: number = 5000): void {
    const config = {
      duration: snackBarDuration,
      panelClass: 'nt-snack-bar-success'
    };
    this.snackBar.open(message, null, config);
  }
}