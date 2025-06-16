
import React, { useState } from 'react';

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

  const getLicenseColor = (licensed: boolean) => {
    return licensed ? 'bg-health-success' : 'bg-health-warning';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900">Rep Activities</h4>
        <button className="text-primary text-xs font-medium hover:text-primary-600 transition-colors">
          View All
        </button>
      </div>
      
      {/* Compact Rep List - Now takes remaining height */}
      <div className="space-y-2 flex-1 overflow-y-auto">
        {repActivities.map((rep, index) => (
          <div 
            key={index} 
            className={`cursor-pointer transition-all duration-200 p-3 rounded-md border text-xs ${
              selectedRepIndex === index 
                ? 'border-primary bg-primary-50' 
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
            onClick={() => setSelectedRepIndex(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-1 h-8 rounded-full ${getLicenseColor(rep.licensed)}`} />
                <div>
                  <h5 className="font-medium text-gray-900 text-xs">{rep.name}</h5>
                  <p className="text-xs text-gray-600">{rep.visitDays} days visits</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-xs font-medium text-primary bg-primary-50 px-1.5 py-0.5 rounded">
                      {rep.state}
                    </span>
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                      rep.licensed 
                        ? 'text-health-success bg-green-50' 
                        : 'text-health-warning bg-yellow-50'
                    }`}>
                      {rep.licensed ? 'Licensed' : 'Not Licensed'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-gray-900">{rep.totalVisits}</p>
                <p className="text-xs text-gray-600">Visits</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFilesCard;
