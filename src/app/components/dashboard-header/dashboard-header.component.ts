import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">G&M</span>
            </div>
            <h1 class="text-xl font-semibold text-gray-900">G&M HEALTH</h1>
          </div>
          <nav class="hidden md:flex items-center space-x-6 ml-8">
            <button class="text-primary font-medium">Home</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Import / DE</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Reports</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Search</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Suggestions & Alerts</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Admin</button>
            <button class="text-gray-600 hover:text-primary transition-colors">HCP</button>
            <button class="text-gray-600 hover:text-primary transition-colors">Help</button>
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Welcome Mohamed</span>
          <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span class="text-white text-sm font-medium">M</span>
          </div>
        </div>
      </div>
    </header>
  `
})
export class DashboardHeaderComponent {}