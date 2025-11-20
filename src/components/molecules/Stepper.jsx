import React from 'react';
import PropTypes from 'prop-types';

const Stepper = ({
  steps,
  currentStep,
  onStepClick,
  className = '',
  size = 'md',
  orientation = 'horizontal',
  showLabels = true,
  ...props
}) => {
  const sizeClasses = {
    sm: {
      step: 'w-6 h-6 text-xs',
      line: 'h-0.5'
    },
    md: {
      step: 'w-8 h-8 text-sm',
      line: 'h-1'
    },
    lg: {
      step: 'w-10 h-10 text-base',
      line: 'h-1'
    }
  };

  const currentSize = sizeClasses[size];

  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'pending';
  };

  const getStepClasses = (status, isClickable) => {
    const baseClasses = `flex items-center justify-center rounded-full border-2 font-medium transition-all duration-200 ${currentSize.step}`;

    const statusClasses = {
      completed: 'bg-primary border-primary text-white',
      active: 'bg-primary-light border-primary-light text-white',
      pending: 'bg-white border-gray-300 text-gray-500'
    };

    const clickableClasses = isClickable ? 'cursor-pointer hover:border-primary-light hover:text-primary-light' : '';

    return [baseClasses, statusClasses[status], clickableClasses].filter(Boolean).join(' ');
  };

  const getLineClasses = (status) => {
    const baseClasses = `flex-1 ${currentSize.line} mx-2 transition-colors duration-200`;
    const statusClasses = {
      completed: 'bg-primary',
      active: 'bg-gray-300',
      pending: 'bg-gray-300'
    };
    return [baseClasses, statusClasses[status]].join(' ');
  };

  const isVertical = orientation === 'vertical';

  const renderStep = (step, index) => {
    const status = getStepStatus(index);
    const isClickable = onStepClick && index <= currentStep;
    const isLast = index === steps.length - 1;

    return (
      <div
        key={index}
        className={`flex items-center ${isVertical ? 'mb-6' : ''}`}
      >
        {/* Step Circle */}
        <div
          onClick={() => isClickable && onStepClick(index)}
          className={getStepClasses(status, isClickable)}
        >
          {status === 'completed' ? (
            <svg className="w-full h-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span>{index + 1}</span>
          )}
        </div>

        {/* Step Label */}
        {showLabels && (
          <div className={`ml-3 ${isVertical ? 'mt-1 ml-0' : ''}`}>
            <h4 className={`font-medium ${
              status === 'completed' ? 'text-primary' :
              status === 'active' ? 'text-primary-light font-semibold' : 'text-gray-500'
            }`}>
              {step.title}
            </h4>
            {step.description && (
              <p className={`text-sm mt-1 ${
                status === 'active' ? 'text-gray-700' : 'text-gray-500'
              }`}>
                {step.description}
              </p>
            )}
          </div>
        )}

        {/* Connecting Line */}
        {!isLast && !isVertical && (
          <div className={getLineClasses(status)} />
        )}
      </div>
    );
  };

  if (isVertical) {
    return (
      <div className={`stepper ${className}`} {...props}>
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center">
              {renderStep(step, index)}
              {/* Vertical connecting line */}
              {index < steps.length - 1 && (
                <div className={`w-0.5 bg-gray-300 mx-auto my-2 ${
                  getStepStatus(index) === 'completed' ? 'bg-primary' : ''
                }`} style={{ minHeight: '2rem' }} />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`stepper ${className}`} {...props}>
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => renderStep(step, index))}
      </div>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  showLabels: PropTypes.bool
};

export default Stepper;