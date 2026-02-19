import { Component, output } from '@angular/core';
import { ProjectService } from '../../shared/project.service';

@Component({
  selector: 'app-zoekbalk',
  imports: [],
  template: `
    <div class="w-full mx-auto px-4 md:px-8">
      <div class="w-full mx-auto flex flex-col md:flex-row gap-4 p-2 bg-black/50 rounded-md">
        <input
          type="text"
          name="search"
          placeholder="Zoek projecten..."
          class="w-full md:w-2/3 py-2 px-4 rounded-md border border-zinc-700 bg-black/50 text-fake-white focus:outline-none focus:border-primary"
          (input)="onSearch($event)"
        />
        <select
          name="services"
          id="services"
          class="w-full md:w-1/3 py-2 px-4 rounded-md border border-zinc-700 bg-black/50 text-fake-white focus:outline-none focus:border-primary"
          (change)="onServiceChange($event)"
        >
          <option value="">Alle diensten</option>
          @for (service of services; track service) {
            <option [value]="service">{{ service }}</option>
          }
        </select>
      </div>
    </div>
  `,
  styles: ``,
})
export class Zoekbalk {
  searchChange = output<string>();
  serviceChange = output<string>();

  services: string[] = [];

  constructor(private projectService: ProjectService) {
    this.services = this.projectService.getUniqueServices();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  onServiceChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.serviceChange.emit(value);
  }
}
