import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { DashboardNavComponent } from '../../components/dashboard-nav/dashboard-nav.component';
import { ClientAccessCardComponent } from '../../components/client-access-card/client-access-card.component';
import { ReportCalendarCardComponent } from '../../components/report-calendar-card/report-calendar-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    DashboardNavComponent,
    ClientAccessCardComponent,
    ReportCalendarCardComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-dashboard-header></app-dashboard-header>
      <app-dashboard-nav></app-dashboard-nav>
      
      <main class="p-6 space-y-6">
        <!-- Quick Actions Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button class="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div class="text-left">
                <p class="font-medium text-gray-900">Upload New File</p>
                <p class="text-sm text-gray-600">Import data entries</p>
              </div>
            </button>
            
            <button class="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200">
              <div class="w-10 h-10 bg-health-warning rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <div class="text-left">
                <p class="font-medium text-gray-900">Search Records</p>
                <p class="text-sm text-gray-600">Find specific data</p>
              </div>
            </button>
          </div>
        </div>

        <!-- Client Access Overview -->
        <div class="w-full">
          <app-client-access-card></app-client-access-card>
        </div>

        <!-- Report Calendar -->
        <div class="w-full">
          <app-report-calendar-card></app-report-calendar-card>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-gray-200 px-6 py-4 mt-8">
        <div class="flex items-center justify-between text-sm text-gray-600">
          <p>G & M Health, LLC © 2025.</p>
          <p>Development</p>
        </div>
      </footer>
    </div>
  `
})
export class DashboardComponent {}