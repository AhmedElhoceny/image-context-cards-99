
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  gradient?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon, 
  gradient = false 
}) => {
  return (
    <div className={`p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 animate-scale-in ${
      gradient ? 'bg-gradient-health text-white' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${gradient ? 'text-white/80' : 'text-gray-600'}`}>
            {title}
          </p>
          <p className={`text-2xl font-bold mt-1 ${gradient ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </p>
          {subtitle && (
            <p className={`text-sm mt-1 ${gradient ? 'text-white/70' : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${
              trend.isPositive 
                ? gradient ? 'text-white/90' : 'text-health-success' 
                : gradient ? 'text-white/90' : 'text-health-danger'
            }`}>
              <svg 
                className={`w-4 h-4 mr-1 ${trend.isPositive ? 'rotate-0' : 'rotate-180'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {trend.value}
            </div>
          )}
        </div>
        {icon && (
          <div className={`ml-4 ${gradient ? 'text-white/80' : 'text-primary'}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
