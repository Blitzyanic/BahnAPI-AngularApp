import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ApiService} from "../../services/api-service/api.service";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() rows: string[][] = [];

  @ViewChild('invalidAlert') alert_box!: ElementRef;

  constructor(protected apiService: ApiService) {
    this.apiService.isInvalidKey.subscribe((_value: boolean) => {
      this.apiService.isLoading = false;

      if (this.alert_box.nativeElement.classList.contains('hidden')) {
        this.alert_box.nativeElement.classList.remove('hidden');
      }

      this.apiService.stations = [];
      this.apiService.elevators = [];

    });
  }
}
