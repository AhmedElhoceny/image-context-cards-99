
import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G&M</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">G&M HEALTH</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            <button className="text-primary font-medium">Home</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Import / DE</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Reports</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Search</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Suggestions & Alerts</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Admin</button>
            <button className="text-gray-600 hover:text-primary transition-colors">HCP</button>
            <button className="text-gray-600 hover:text-primary transition-colors">Help</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Welcome Mohamed</span>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">M</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
