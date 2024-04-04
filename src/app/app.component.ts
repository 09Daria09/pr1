import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Title";
  inputText: string = '';
  transformedText: string = '';
  enteredValues: string[] = []; 
  salary: number | null = null;
  transformText(value: string): void {
    this.transformedText = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  addValue(): void {
    if (this.transformedText.trim() !== '') {
      this.enteredValues.push(this.transformedText);
      this.inputText = ''; 
      this.transformedText = ''; 
    }
  }
  transform(value: number | null, currencyUnit: string = 'USD'): string {
    if (value === null) return '';
    return `${value.toFixed(2)} ${currencyUnit}`;
  }
}
