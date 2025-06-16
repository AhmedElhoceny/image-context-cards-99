import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReportEntry {
  title: string;
  type: string;
  date: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
}

@Component({
  selector: 'app-report-calendar-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold text-gray-900">Report Calendar</h3>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2 text-sm">
            <div class="w-3 h-3 bg-health-danger rounded-full"></div>
            <span class="text-gray-600">Urgent</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <div class="w-3 h-3 bg-health-warning rounded-full"></div>
            <span class="text-gray-600">Medium</span>
          </div>
          <div class="flex items-center space-x-2 text-sm">
            <div class="w-3 h-3 bg-health-success rounded-full"></div>
            <span class="text-gray-600">Low</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Reports Timeline -->
        <div class="lg:col-span-2">
          <h4 class="font-medium text-gray-900 mb-4">Upcoming Reports Timeline</h4>
          
          <!-- High Priority -->
          <div *ngIf="getReportsByPriority('high').length > 0" class="bg-red-50 rounded-lg p-4 border-l-4 border-health-danger mb-4">
            <h5 class="font-semibold text-health-danger mb-3 flex items-center">
              <div class="w-2 h-2 bg-health-danger rounded-full mr-2"></div>
              Urgent Reports
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div *ngFor="let report of getReportsByPriority('high')" class="bg-white rounded-md p-3 shadow-sm">
                <h6 class="font-medium text-gray-900 text-sm">{{ report.title }}</h6>
                <p class="text-xs text-gray-600 mt-1">{{ report.date }}</p>
                <div class="mt-2 flex items-center justify-between">
                  <span class="text-xs font-bold text-health-danger">
                    {{ report.daysLeft }} days left
                  </span>
                  <div class="w-16 bg-gray-200 rounded-full h-1">
                    <div 
                      class="bg-health-danger h-1 rounded-full transition-all duration-300"
                      [style.width.%]="Math.max(10, 100 - (report.daysLeft / 30 * 100))"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Medium Priority -->
          <div *ngIf="getReportsByPriority('medium').length > 0" class="bg-yellow-50 rounded-lg p-4 border-l-4 border-health-warning mb-4">
            <h5 class="font-semibold text-health-warning mb-3 flex items-center">
              <div class="w-2 h-2 bg-health-warning rounded-full mr-2"></div>
              Medium Priority
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div *ngFor="let report of getReportsByPriority('medium')" class="bg-white rounded-md p-3 shadow-sm">
                <h6 class="font-medium text-gray-900 text-sm">{{ report.title }}</h6>
                <p class="text-xs text-gray-600 mt-1">{{ report.date }}</p>
                <div class="mt-2 flex items-center justify-between">
                  <span class="text-xs font-bold text-health-warning">
                    {{ report.daysLeft }} days left
                  </span>
                  <div class="w-16 bg-gray-200 rounded-full h-1">
                    <div 
                      class="bg-health-warning h-1 rounded-full transition-all duration-300"
                      [style.width.%]="Math.max(10, 100 - (report.daysLeft / 180 * 100))"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Low Priority -->
          <div *ngIf="getReportsByPriority('low').length > 0" class="bg-green-50 rounded-lg p-4 border-l-4 border-health-success">
            <h5 class="font-semibold text-health-success mb-3 flex items-center">
              <div class="w-2 h-2 bg-health-success rounded-full mr-2"></div>
              Low Priority
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div *ngFor="let report of getReportsByPriority('low')" class="bg-white rounded-md p-3 shadow-sm">
                <h6 class="font-medium text-gray-900 text-sm">{{ report.title }}</h6>
                <p class="text-xs text-gray-600 mt-1">{{ report.date }}</p>
                <div class="mt-2 flex items-center justify-between">
                  <span class="text-xs font-bold text-health-success">
                    {{ report.daysLeft }} days left
                  </span>
                  <div class="w-16 bg-gray-200 rounded-full h-1">
                    <div 
                      class="bg-health-success h-1 rounded-full transition-all duration-300"
                      [style.width.%]="Math.max(10, 100 - (report.daysLeft / 365 * 100))"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar Widget -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-medium text-gray-900 mb-3 text-center">Current Month</h4>
            <div class="calendar-widget">
              <!-- Simple calendar placeholder -->
              <div class="grid grid-cols-7 gap-1 text-center text-xs">
                <div class="font-medium text-gray-600 p-2">Sun</div>
                <div class="font-medium text-gray-600 p-2">Mon</div>
                <div class="font-medium text-gray-600 p-2">Tue</div>
                <div class="font-medium text-gray-600 p-2">Wed</div>
                <div class="font-medium text-gray-600 p-2">Thu</div>
                <div class="font-medium text-gray-600 p-2">Fri</div>
                <div class="font-medium text-gray-600 p-2">Sat</div>
                
                <!-- Calendar days -->
                <div *ngFor="let day of calendarDays" 
                     class="p-2 hover:bg-gray-200 rounded cursor-pointer"
                     [class]="day.isReportDue ? 'bg-health-danger text-white font-bold' : 'text-gray-700'"
                >
                  {{ day.number }}
                </div>
              </div>
            </div>
            <div class="mt-3 text-xs text-gray-600 text-center">
              <div class="flex items-center justify-center space-x-2">
                <div class="w-3 h-3 bg-health-danger rounded-full"></div>
                <span>Report Due Dates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReportCalendarCardComponent {
  Math = Math;

  upcomingReports: ReportEntry[] = [
    {
      title: 'Spend - CT',
      type: 'July 01',
      date: 'July 01',
      daysLeft: 18,
      priority: 'high'
    },
    {
      title: 'Spend - DC',
      type: 'July 01',
      date: 'July 01',
      daysLeft: 18,
      priority: 'high'
    },
    {
      title: 'Spend - MA',
      type: 'July 01',
      date: 'July 01',
      daysLeft: 18,
      priority: 'high'
    },
    {
      title: 'Sample - MN',
      type: 'October 24',
      date: 'October 24',
      daysLeft: 133,
      priority: 'medium'
    },
    {
      title: 'Spend & Sample - NV SpendAndSample',
      type: 'March 12',
      date: 'March 12',
      daysLeft: 272,
      priority: 'low'
    },
    {
      title: 'Spend - CMS',
      type: 'March 31',
      date: 'March 31',
      daysLeft: 291,
      priority: 'low'
    }
  ];

  calendarDays = this.generateCalendarDays();

  getReportsByPriority(priority: 'high' | 'medium' | 'low'): ReportEntry[] {
    return this.upcomingReports.filter(report => report.priority === priority);
  }

  generateCalendarDays() {
    const days = [];
    const reportDueDays = [1, 12, 24, 31]; // Sample due dates
    
    for (let i = 1; i <= 31; i++) {
      days.push({
        number: i,
        isReportDue: reportDueDays.includes(i)
      });
    }
    return days;
  }
}