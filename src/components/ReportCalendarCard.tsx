
import React from 'react';

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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Report Calendar</h3>
        <button className="text-primary text-sm font-medium hover:text-primary-600 transition-colors">
          Show more
        </button>
      </div>

      <div className="space-y-4">
        {upcomingReports.map((report, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`w-1 h-12 rounded-full ${getPriorityColor(report.priority)}`} />
              <div>
                <h4 className="font-medium text-gray-900">{report.title}</h4>
                <p className="text-sm text-gray-600">{report.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-lg font-bold ${getPriorityTextColor(report.priority)}`}>
                {report.daysLeft} Days Left
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Due: {report.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportCalendarCard;
