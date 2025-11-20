import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const StatusCard = ({
  title,
  value,
  subtitle,
  icon,
  color = 'primary',
  trend,
  change,
  size = 'normal',
  className = '',
  ...props
}) => {
  const colorConfig = {
    primary: {
      bg: 'bg-primary',
      text: 'text-white',
      light: 'bg-primary-light',
      iconBg: 'bg-primary-light'
    },
    success: {
      bg: 'bg-success',
      text: 'text-white',
      light: 'bg-success-light',
      iconBg: 'bg-success-light'
    },
    error: {
      bg: 'bg-error',
      text: 'text-white',
      light: 'bg-error-light',
      iconBg: 'bg-error-light'
    },
    warning: {
      bg: 'bg-warning',
      text: 'text-white',
      light: 'bg-warning-light',
      iconBg: 'bg-warning-light'
    }
  };

  const currentColor = colorConfig[color] || colorConfig.primary;
  const sizeClasses = {
    sm: 'p-4',
    normal: 'p-6',
    lg: 'p-8'
  };

  const isPositiveTrend = trend === 'up';
  const isNegativeTrend = trend === 'down';

  return (
    <Card
      padding={size}
      className={`status-card ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {subtitle && (
            <p className="text-sm text-gray-600 mb-1">{subtitle}</p>
          )}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {value}
          </h3>
          <p className="text-sm text-gray-600">{title}</p>

          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              isPositiveTrend ? 'text-success' : isNegativeTrend ? 'text-error' : 'text-gray-500'
            }`}>
              {trend && (
                <svg className={`w-4 h-4 mr-1 ${isNegativeTrend ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              )}
              <span>{change}</span>
            </div>
          )}
        </div>

        {icon && (
          <div className={`p-3 rounded-full ${currentColor.iconBg} ml-4`}>
            <div className={`w-6 h-6 ${currentColor.text}`}>
              {icon}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'success', 'error', 'warning']),
  trend: PropTypes.oneOf(['up', 'down']),
  change: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'normal', 'lg']),
  className: PropTypes.string
};

export default StatusCard;