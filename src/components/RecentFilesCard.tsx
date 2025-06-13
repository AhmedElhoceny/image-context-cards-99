
import React from 'react';

interface FileEntry {
  name: string;
  type: string;
  date: string;
  time: string;
  status: 'success' | 'warning' | 'error';
  total: number;
  exceptions: number;
}

const RecentFilesCard = () => {
  const recentFiles: FileEntry[] = [
    {
      name: 'Research Data Entry Log',
      type: 'ABC',
      date: '05/30/2025',
      time: '10:52 AM',
      status: 'success',
      total: 1,
      exceptions: 0
    },
    {
      name: 'CP2_ABC_20250521_PK',
      type: 'ABC',
      date: '05/30/2025',
      time: '9:41 AM',
      status: 'warning',
      total: 28,
      exceptions: 28
    },
    {
      name: 'Sample Data Entry Log',
      type: 'ABC',
      date: '05/30/2025',
      time: '3:36 AM',
      status: 'success',
      total: 1,
      exceptions: 0
    },
    {
      name: 'General Data Entry Log',
      type: 'ABC',
      date: '05/30/2025',
      time: '3:35 AM',
      status: 'success',
      total: 1,
      exceptions: 0
    },
    {
      name: 'Ownership Data Entry Log',
      type: 'ABC',
      date: '05/23/2025',
      time: '10:42 AM',
      status: 'success',
      total: 0,
      exceptions: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-health-success';
      case 'warning': return 'bg-health-warning';
      case 'error': return 'bg-health-danger';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Most Recent Files Uploaded</h3>
        <button className="text-primary text-sm font-medium hover:text-primary-600 transition-colors">
          Show more
        </button>
      </div>
      
      <div className="space-y-4">
        {recentFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`w-1 h-12 rounded-full ${getStatusColor(file.status)}`} />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                    {file.type}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 mt-1">{file.name}</h4>
                <p className="text-sm text-gray-600">Total: {file.total}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{file.date} {file.time}</p>
              <p className={`text-xs mt-1 ${file.exceptions > 0 ? 'text-health-warning' : 'text-health-success'}`}>
                Exception: {file.exceptions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFilesCard;
