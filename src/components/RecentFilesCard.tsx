
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface RepActivity {
  name: string;
  visitDays: number;
  state: string;
  licensed: boolean;
  totalVisits: number;
  uniqueClients: number;
}

const RecentFilesCard = () => {
  const repActivities: RepActivity[] = [
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

  const [selectedRepIndex, setSelectedRepIndex] = useState(0);
  const selectedRep = repActivities[selectedRepIndex];

  const getLicenseColor = (licensed: boolean) => {
    return licensed ? 'bg-health-success' : 'bg-health-warning';
  };

  const getPieChartData = (rep: RepActivity) => {
    const visitedDays = rep.visitDays;
    const remainingDays = Math.max(0, 30 - visitedDays); // Assuming 30 days in a month
    
    return [
      {
        name: 'Active Days',
        value: visitedDays,
        color: '#10B981'
      },
      {
        name: 'Inactive Days',
        value: remainingDays,
        color: '#E5E7EB'
      }
    ];
  };

  const chartData = getPieChartData(selectedRep);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-600">
            Days: <span className="font-medium">{data.value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Rep Activities</h3>
        <button className="text-primary text-sm font-medium hover:text-primary-600 transition-colors">
          Show more
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">{selectedRep.name} - Activity Overview</h4>
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
            <p>Visit Days: <span className="font-medium text-health-success">{selectedRep.visitDays}</span></p>
            <p>Total Visits: <span className="font-medium">{selectedRep.totalVisits}</span></p>
            <p>Unique Clients: <span className="font-medium text-primary">{selectedRep.uniqueClients}</span></p>
          </div>
        </div>

        {/* Rep List */}
        <div className="space-y-3">
          {repActivities.map((rep, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border ${
                selectedRepIndex === index 
                  ? 'border-primary bg-primary-50' 
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedRepIndex(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-1 h-10 rounded-full ${getLicenseColor(rep.licensed)}`} />
                  <div>
                    <h5 className="font-medium text-gray-900 text-sm">{rep.name}</h5>
                    <p className="text-xs text-gray-600">{rep.visitDays} days of visits</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                        State: {rep.state}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        rep.licensed 
                          ? 'text-health-success bg-green-50' 
                          : 'text-health-warning bg-yellow-50'
                      }`}>
                        Licensed: {rep.licensed ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{rep.totalVisits}</p>
                  <p className="text-xs text-gray-600">Total Visits</p>
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
