
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
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Client Access Overview</h3>
        <div className="flex items-center space-x-4">
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>ABC</option>
          </select>
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>2025</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(accessData).map(([clientName, data]) => (
          <div key={clientName} className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-gray-900 mb-3">{clientName}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-primary">{data.noOfRecords}</p>
                <p className="text-xs text-gray-600 mt-1">No. of Records</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-health-success">{data.production}</p>
                <p className="text-xs text-gray-600 mt-1">Production</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-600">{data.ruleValidation}</p>
                <p className="text-xs text-gray-600 mt-1">Rule Validation</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-600">{data.manualMatch}</p>
                <p className="text-xs text-gray-600 mt-1">Manual Match</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientAccessCard;
