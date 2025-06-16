
import React from 'react';
import { Calendar } from './ui/calendar';

interface ReportEntry {
  title: string;
  type: string;
  date: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
}

const ReportCalendarCard = () => {
  const upcomingReports: ReportEntry[] = [
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

  // Convert report dates to Date objects for calendar highlighting
  const reportDates = upcomingReports.map(report => {
    // Parse the date string (assuming current year 2025)
    const [month, day] = report.date.split(' ');
    const monthMap: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    return new Date(2025, monthMap[month], parseInt(day));
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-health-danger';
      case 'medium': return 'bg-health-warning';
      case 'low': return 'bg-health-success';
      default: return 'bg-gray-400';
    }
  };

  const getPriorityTextColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-health-danger';
      case 'medium': return 'text-health-warning';
      case 'low': return 'text-health-success';
      default: return 'text-gray-600';
    }
  };

  const getPriorityBgColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50';
      case 'medium': return 'bg-yellow-50';
      case 'low': return 'bg-green-50';
      default: return 'bg-gray-50';
    }
  };

  // Group reports by priority for visual layout
  const reportsByPriority = {
    high: upcomingReports.filter(r => r.priority === 'high'),
    medium: upcomingReports.filter(r => r.priority === 'medium'),
    low: upcomingReports.filter(r => r.priority === 'low')
  };

  // Custom modifiers for calendar dates
  const modifiers = {
    reportDue: reportDates
  };

  const modifiersStyles = {
    reportDue: {
      backgroundColor: '#EF4444',
      color: 'white',
      fontWeight: 'bold'
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Report Calendar</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-health-danger rounded-full"></div>
            <span className="text-gray-600">Urgent</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-health-warning rounded-full"></div>
            <span className="text-gray-600">Medium</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-health-success rounded-full"></div>
            <span className="text-gray-600">Low</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reports Timeline - Now on the left (2/3 width) */}
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 mb-4">Upcoming Reports Timeline</h4>
          
          {/* Priority Sections */}
          <div className="space-y-4">
            {/* High Priority */}
            {reportsByPriority.high.length > 0 && (
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-health-danger">
                <h5 className="font-semibold text-health-danger mb-3 flex items-center">
                  <div className="w-2 h-2 bg-health-danger rounded-full mr-2"></div>
                  Urgent Reports
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reportsByPriority.high.map((report, index) => (
                    <div key={index} className="bg-white rounded-md p-3 shadow-sm">
                      <h6 className="font-medium text-gray-900 text-sm">{report.title}</h6>
                      <p className="text-xs text-gray-600 mt-1">{report.date}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-health-danger">
                          {report.daysLeft} days left
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-health-danger h-1 rounded-full transition-all duration-300"
                            style={{ width: `${Math.max(10, 100 - (report.daysLeft / 30 * 100))}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Medium Priority */}
            {reportsByPriority.medium.length > 0 && (
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-health-warning">
                <h5 className="font-semibold text-health-warning mb-3 flex items-center">
                  <div className="w-2 h-2 bg-health-warning rounded-full mr-2"></div>
                  Medium Priority
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reportsByPriority.medium.map((report, index) => (
                    <div key={index} className="bg-white rounded-md p-3 shadow-sm">
                      <h6 className="font-medium text-gray-900 text-sm">{report.title}</h6>
                      <p className="text-xs text-gray-600 mt-1">{report.date}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-health-warning">
                          {report.daysLeft} days left
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-health-warning h-1 rounded-full transition-all duration-300"
                            style={{ width: `${Math.max(10, 100 - (report.daysLeft / 180 * 100))}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Low Priority */}
            {reportsByPriority.low.length > 0 && (
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-health-success">
                <h5 className="font-semibold text-health-success mb-3 flex items-center">
                  <div className="w-2 h-2 bg-health-success rounded-full mr-2"></div>
                  Low Priority
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reportsByPriority.low.map((report, index) => (
                    <div key={index} className="bg-white rounded-md p-3 shadow-sm">
                      <h6 className="font-medium text-gray-900 text-sm">{report.title}</h6>
                      <p className="text-xs text-gray-600 mt-1">{report.date}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-health-success">
                          {report.daysLeft} days left
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-health-success h-1 rounded-full transition-all duration-300"
                            style={{ width: `${Math.max(10, 100 - (report.daysLeft / 365 * 100))}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calendar Widget - Now on the right (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3 text-center">Current Month</h4>
            <Calendar
              mode="single"
              className="rounded-md border-0"
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
            />
            <div className="mt-3 text-xs text-gray-600 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-health-danger rounded-full"></div>
                <span>Report Due Dates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCalendarCard;
