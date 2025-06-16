import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';
import { RecentFilesCardComponent } from '../recent-files-card/recent-files-card.component';

Chart.register(...registerables);

interface AccessData {
  noOfRecords: number;
  production: number;
  ruleValidation: number;
  manualMatch: number;
}

@Component({
  selector: 'app-client-access-card',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, RecentFilesCardComponent],
  template: `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <!-- Header with inline summary stats -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-8">
          <h3 class="text-lg font-semibold text-gray-900">Client Access Overview</h3>
          
          <!-- Horizontal Summary Stats -->
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-gradient-to-r from-primary to-primary-600 rounded-full"></div>
              <span class="text-sm text-gray-600">Total:</span>
              <span class="text-lg font-bold text-primary">{{ totalRecords }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-gradient-to-r from-health-success to-green-600 rounded-full"></div>
              <span class="text-sm text-gray-600">Production:</span>
              <span class="text-lg font-bold text-health-success">{{ totalProduction }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-gradient-to-r from-health-warning to-yellow-600 rounded-full"></div>
              <span class="text-sm text-gray-600">Pending:</span>
              <span class="text-lg font-bold text-health-warning">{{ totalPending }}</span>
            </div>
          </div>
        </div>
        
        <div class="flex items-center space-x-3">
          <select class="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>ABC</option>
          </select>
          <select class="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>2025</option>
          </select>
        </div>
      </div>

      <!-- Main content flex layout -->
      <div class="flex gap-6">
        <!-- Left side - Chart and Cards (60% width) -->
        <div class="w-[60%] space-y-6">
          <!-- Chart Section -->
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 mb-3">Records Status by Client</h4>
            <div class="h-64">
              <canvas 
                baseChart
                [data]="chartData"
                [options]="chartOptions"
                [type]="chartType">
              </canvas>
            </div>
          </div>

          <!-- Client Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              *ngFor="let client of clientData | keyvalue" 
              class="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
            >
              <div class="border-l-4 border-primary pl-3 mb-3">
                <h4 class="font-semibold text-gray-900 text-sm">{{ client.key }}</h4>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-600">Records</span>
                  <span class="text-lg font-bold text-primary">{{ client.value.noOfRecords }}</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-600">Production</span>
                  <span class="text-lg font-bold text-health-success">{{ client.value.production }}</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-600">Rule Valid.</span>
                  <span class="text-sm font-semibold text-health-warning">{{ client.value.ruleValidation }}</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-600">Manual</span>
                  <span class="text-sm font-semibold text-gray-600">{{ client.value.manualMatch }}</span>
                </div>
              </div>

              <!-- Progress bar -->
              <div class="mt-3 pt-3 border-t border-gray-100">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs text-gray-500">Completion</span>
                  <span class="text-xs font-medium text-gray-700">
                    {{ getCompletionPercentage(client.value) }}%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    class="bg-gradient-to-r from-primary to-health-success h-1.5 rounded-full transition-all duration-300"
                    [style.width.%]="getCompletionPercentage(client.value)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Rep Activities (40% width) -->
        <div class="w-[40%]">
          <app-recent-files-card></app-recent-files-card>
        </div>
      </div>
    </div>
  `
})
export class ClientAccessCardComponent implements OnInit {
  clientData: { [key: string]: AccessData } = {
    'GenPay': {
      noOfRecords: 11,
      production: 11,
      ruleValidation: 0,
      manualMatch: 0
    },
    'Research': {
      noOfRecords: 5,
      production: 5,
      ruleValidation: 0,
      manualMatch: 0
    },
    'Sample': {
      noOfRecords: 8,
      production: 7,
      ruleValidation: 1,
      manualMatch: 0
    },
    'Ownership': {
      noOfRecords: 12,
      production: 10,
      ruleValidation: 2,
      manualMatch: 0
    },
    'Call DTL': {
      noOfRecords: 6,
      production: 6,
      ruleValidation: 0,
      manualMatch: 0
    }
  };

  chartType: ChartType = 'bar';
  chartData!: ChartData<'bar'>;
  chartOptions!: ChartConfiguration<'bar'>['options'];

  totalRecords = 0;
  totalProduction = 0;
  totalPending = 0;

  ngOnInit() {
    this.calculateTotals();
    this.setupChart();
  }

  calculateTotals() {
    const values = Object.values(this.clientData);
    this.totalRecords = values.reduce((sum, data) => sum + data.noOfRecords, 0);
    this.totalProduction = values.reduce((sum, data) => sum + data.production, 0);
    this.totalPending = values.reduce((sum, data) => sum + data.ruleValidation + data.manualMatch, 0);
  }

  setupChart() {
    const labels = Object.keys(this.clientData);
    const productionData = labels.map(key => this.clientData[key].production);
    const ruleValidationData = labels.map(key => this.clientData[key].ruleValidation);
    const manualMatchData = labels.map(key => this.clientData[key].manualMatch);

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Production',
          data: productionData,
          backgroundColor: '#10B981',
          borderRadius: 2
        },
        {
          label: 'Rule Validation',
          data: ruleValidationData,
          backgroundColor: '#F59E0B',
          borderRadius: 2
        },
        {
          label: 'Manual Match',
          data: manualMatchData,
          backgroundColor: '#6B7280',
          borderRadius: 2
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            maxRotation: 45,
            minRotation: 45
          }
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    };
  }

  getCompletionPercentage(data: AccessData): number {
    return Math.round((data.production / data.noOfRecords) * 100);
  }
}