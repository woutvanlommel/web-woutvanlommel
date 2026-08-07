import { Component, output } from '@angular/core';
import { ProjectService } from '../../shared/project.service';
import { ProjectService as ProjectServiceType } from '../../models/project.model';

@Component({
  selector: 'app-zoekbalk',
  imports: [],
  template: `
    <div class="w-full flex flex-col md:flex-row gap-4">
      <input
        type="text"
        name="search"
        placeholder="Zoek projecten..."
        class="w-full md:w-2/3 py-2.5 px-4 border border-zinc-800 bg-zinc-900/50 text-fake-white text-sm rounded-lg focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors"
        (input)="onSearch($event)"
      />
      <select
        name="services"
        id="services"
        class="w-full md:w-1/3 py-2.5 px-4 border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
        (change)="onServiceChange($event)"
      >
        <option value="">Alle diensten</option>
        @for (service of services; track service) {
          <option [value]="service">{{ service }}</option>
        }
      </select>
    </div>
  `,
  styles: ``,
})
export class Zoekbalk {
  searchChange = output<string>();
  serviceChange = output<ProjectServiceType | ''>();

  services: ProjectServiceType[] = [];

  constructor(private projectService: ProjectService) {
    this.services = this.projectService.getUniqueServices();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  onServiceChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ProjectServiceType | '';
    this.serviceChange.emit(value);
  }
}
