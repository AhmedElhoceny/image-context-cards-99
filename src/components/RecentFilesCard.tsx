
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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

  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const selectedFile = recentFiles[selectedFileIndex];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-health-success';
      case 'warning': return 'bg-health-warning';
      case 'error': return 'bg-health-danger';
      default: return 'bg-gray-400';
    }
  };

  const getPieChartData = (file: FileEntry) => {
    const productionRecords = Math.max(0, file.total - file.exceptions);
    
    if (file.total === 0) {
      return [
        { name: 'No Records', value: 1, color: '#E5E7EB' }
      ];
    }

    const data = [];
    
    if (productionRecords > 0) {
      data.push({
        name: 'Production Records',
        value: productionRecords,
        color: '#10B981'
      });
    }
    
    if (file.exceptions > 0) {
      data.push({
        name: 'Exceptions',
        value: file.exceptions,
        color: '#F59E0B'
      });
    }

    return data;
  };

  const chartData = getPieChartData(selectedFile);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-600">
            Count: <span className="font-medium">{data.value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Most Recent Files Uploaded</h3>
        <button className="text-primary text-sm font-medium hover:text-primary-600 transition-colors">
          Show more
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">{selectedFile.name}</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            <p>Total Records: <span className="font-medium">{selectedFile.total}</span></p>
            <p>Production: <span className="font-medium text-health-success">{Math.max(0, selectedFile.total - selectedFile.exceptions)}</span></p>
            <p>Exceptions: <span className="font-medium text-health-warning">{selectedFile.exceptions}</span></p>
          </div>
        </div>

        {/* Files List */}
        <div className="space-y-3">
          {recentFiles.map((file, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border ${
                selectedFileIndex === index 
                  ? 'border-primary bg-primary-50' 
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedFileIndex(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-1 h-10 rounded-full ${getStatusColor(file.status)}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                        {file.type}
                      </span>
                    </div>
                    <h5 className="font-medium text-gray-900 mt-1 text-sm">{file.name}</h5>
                    <p className="text-xs text-gray-600">Total: {file.total}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-gray-900">{file.date} {file.time}</p>
                  <p className={`text-xs mt-1 ${file.exceptions > 0 ? 'text-health-warning' : 'text-health-success'}`}>
                    Exception: {file.exceptions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentFilesCard;
