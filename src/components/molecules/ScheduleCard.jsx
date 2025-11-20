import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ScheduleCard = ({
  title,
  scheme,
  date,
  time,
  location,
  status = 'available',
  price,
  capacity,
  registered,
  onRegister,
  className = '',
  ...props
}) => {
  const statusConfig = {
    available: {
      color: 'text-success',
      bgColor: 'bg-success',
      text: 'Tersedia'
    },
    full: {
      color: 'text-error',
      bgColor: 'bg-error',
      text: 'Penuh'
    },
    closed: {
      color: 'text-gray-500',
      bgColor: 'bg-gray-500',
      text: 'Ditutup'
    }
  };

  const currentStatus = statusConfig[status] || statusConfig.available;
  const isAvailable = status === 'available';
  const isFull = capacity && registered >= capacity;

  return (
    <Card
      hover={isAvailable}
      className={`schedule-card ${className}`}
      {...props}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${currentStatus.bgColor} text-white`}>
            {currentStatus.text}
          </span>
        </div>
        <p className="text-sm text-gray-600">{scheme}</p>
      </div>

      {/* Schedule Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-gray-600">{date}</span>
        </div>

        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-600">{time}</span>
        </div>

        <div className="flex items-center text-sm">
          <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600">{location}</span>
        </div>
      </div>

      {/* Capacity Info */}
      {capacity && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Kuota</span>
            <span className={`font-medium ${isFull ? 'text-error' : 'text-gray-900'}`}>
              {registered}/{capacity}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isFull ? 'bg-error' : 'bg-success'
              }`}
              style={{ width: `${Math.min((registered / capacity) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Price */}
      {price && (
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Biaya</span>
            <span className="text-lg font-semibold text-primary">
              Rp {new Intl.NumberFormat('id-ID').format(price)}
            </span>
          </div>
        </div>
      )}

      {/* Action Button */}
      {onRegister && (
        <button
          onClick={onRegister}
          disabled={!isAvailable || isFull}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            isAvailable && !isFull
              ? 'bg-primary text-white hover:bg-primary-hover'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isFull ? 'Kuota Penuh' : !isAvailable ? 'Tidak Tersedia' : 'Daftar Sekarang'}
        </button>
      )}
    </Card>
  );
};

ScheduleCard.propTypes = {
  title: PropTypes.string.isRequired,
  scheme: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['available', 'full', 'closed']),
  price: PropTypes.number,
  capacity: PropTypes.number,
  registered: PropTypes.number,
  onRegister: PropTypes.func,
  className: PropTypes.string
};

export default ScheduleCard;