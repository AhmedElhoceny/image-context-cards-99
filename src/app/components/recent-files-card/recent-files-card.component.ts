import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RepActivity {
  name: string;
  visitDays: number;
  state: string;
  licensed: boolean;
  totalVisits: number;
  uniqueClients: number;
}

@Component({
  selector: 'app-recent-files-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 rounded-lg p-4 h-full flex flex-col">
      <div class="flex items-center justify-between mb-4">
        <h4 class="font-medium text-gray-900">Rep Activities</h4>
        <button class="text-primary text-xs font-medium hover:text-primary-600 transition-colors">
          View All
        </button>
      </div>
      
      <!-- Rep List -->
      <div class="space-y-2 flex-1 overflow-y-auto">
        <div 
          *ngFor="let rep of repActivities; let i = index" 
          class="cursor-pointer transition-all duration-200 p-3 rounded-md border text-xs"
          [class]="selectedRepIndex === i 
            ? 'border-primary bg-primary-50' 
            : 'border-gray-200 bg-white hover:bg-gray-50'"
          (click)="selectedRepIndex = i"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div 
                class="w-1 h-8 rounded-full"
                [class]="rep.licensed ? 'bg-health-success' : 'bg-health-warning'"
              ></div>
              <div>
                <h5 class="font-medium text-gray-900 text-xs">{{ rep.name }}</h5>
                <p class="text-xs text-gray-600">{{ rep.visitDays }} days visits</p>
                <div class="flex items-center space-x-1 mt-1">
                  <span class="text-xs font-medium text-primary bg-primary-50 px-1.5 py-0.5 rounded">
                    {{ rep.state }}
                  </span>
                  <span 
                    class="text-xs font-medium px-1.5 py-0.5 rounded"
                    [class]="rep.licensed 
                      ? 'text-health-success bg-green-50' 
                      : 'text-health-warning bg-yellow-50'"
                  >
                    {{ rep.licensed ? 'Licensed' : 'Not Licensed' }}
                  </span>
                </div>
              </div>
            </div>
            <div class="text-right">
              <p class="text-xs font-medium text-gray-900">{{ rep.totalVisits }}</p>
              <p class="text-xs text-gray-600">Visits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RecentFilesCardComponent {
  selectedRepIndex = 0;

  repActivities: RepActivity[] = [
    {
      name: 'Mohamed Hagrass',
      visitDays: 15,
      state: 'CT',
      licensed: true,
      totalVisits: 45,
      uniqueClients: 12
    },
    {
      name: 'Ahmed H',
      visitDays: 12,
      state: 'CT',
      licensed: false,
      totalVisits: 38,
      uniqueClients: 8
    },
    {
      name: 'Sarah Johnson',
      visitDays: 18,
      state: 'NY',
      licensed: true,
      totalVisits: 52,
      uniqueClients: 15
    },
    {
      name: 'David Miller',
      visitDays: 10,
      state: 'NJ',
      licensed: true,
      totalVisits: 28,
      uniqueClients: 7
    },
    {
      name: 'Lisa Chen',
      visitDays: 14,
      state: 'NY',
      licensed: false,
      totalVisits: 41,
      uniqueClients: 11
    }
  ];
}