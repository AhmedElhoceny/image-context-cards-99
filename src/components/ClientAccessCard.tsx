
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import RecentFilesCard from './RecentFilesCard';

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

  // Prepare chart data
  const chartData = Object.entries(accessData).map(([name, data]) => ({
    name,
    production: data.production,
    ruleValidation: data.ruleValidation,
    manualMatch: data.manualMatch,
    total: data.noOfRecords
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in">
      {/* Header with inline summary stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-8">
          <h3 className="text-lg font-semibold text-gray-900">Client Access Overview</h3>
          
          {/* Horizontal Summary Stats */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Total:</span>
              <span className="text-lg font-bold text-primary">
                {Object.values(accessData).reduce((sum, data) => sum + data.noOfRecords, 0)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-health-success to-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Production:</span>
              <span className="text-lg font-bold text-health-success">
                {Object.values(accessData).reduce((sum, data) => sum + data.production, 0)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-health-warning to-yellow-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Pending:</span>
              <span className="text-lg font-bold text-health-warning">
                {Object.values(accessData).reduce((sum, data) => sum + data.ruleValidation + data.manualMatch, 0)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>ABC</option>
          </select>
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>2025</option>
          </select>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left side - Chart and Cards (3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Chart Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Records Status by Client</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="production" fill="#10B981" name="Production" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="ruleValidation" fill="#F59E0B" name="Rule Validation" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="manualMatch" fill="#6B7280" name="Manual Match" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Client Cards - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Right side - Rep Activities (1 column) */}
        <div className="lg:col-span-1">
          <RecentFilesCard />
        </div>
      </div>
    </div>
  );
};

export default ClientAccessCard;
