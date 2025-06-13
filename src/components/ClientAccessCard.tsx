
import React from 'react';

const ClientAccessCard = () => {
  const accessData = {
    GenPay: {
      noOfRecords: 11,
      production: 11,
      ruleValidation: 0,
      manualMatch: 0
    },
    Research: {
      noOfRecords: 5,
      production: 5,
      ruleValidation: 0,
      manualMatch: 0
    },
    Sample: {
      noOfRecords: 8,
      production: 7,
      ruleValidation: 1,
      manualMatch: 0
    },
    Ownership: {
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Client Access Overview</h3>
        <div className="flex items-center space-x-3">
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>ABC</option>
          </select>
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>2025</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(accessData).map(([clientName, data]) => (
          <div key={clientName} className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200">
            <div className="border-l-4 border-primary pl-3 mb-3">
              <h4 className="font-semibold text-gray-900 text-sm">{clientName}</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Records</span>
                <span className="text-lg font-bold text-primary">{data.noOfRecords}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Production</span>
                <span className="text-lg font-bold text-health-success">{data.production}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Rule Valid.</span>
                <span className="text-sm font-semibold text-health-warning">{data.ruleValidation}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Manual</span>
                <span className="text-sm font-semibold text-gray-600">{data.manualMatch}</span>
              </div>
            </div>

            {/* Progress bar for completion rate */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">Completion</span>
                <span className="text-xs font-medium text-gray-700">
                  {Math.round((data.production / data.noOfRecords) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-primary to-health-success h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(data.production / data.noOfRecords) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientAccessCard;
