import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  disabled = false,
  required = false,
  helper,
  icon,
  iconPosition = 'left',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'form-input transition-all duration-200';

  const stateClasses = {
    default: 'border-gray-300 focus:border-primary-light focus:ring-primary-light',
    error: 'border-error focus:border-error focus:ring-error',
    disabled: 'bg-gray-100 border-gray-200 cursor-not-allowed'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };

  const inputState = disabled ? 'disabled' : error ? 'error' : 'default';
  const classes = [
    baseClasses,
    stateClasses[inputState],
    sizeClasses[size],
    icon && iconPosition === 'left' ? 'pl-12' : '',
    icon && iconPosition === 'right' ? 'pr-12' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          ref={ref}
          type={type}
          className={classes}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          {...props}
        />

        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>

      {(error || helper) && (
        <div className={`mt-2 text-sm ${error ? 'text-error' : 'text-gray-500'}`}>
          {error || helper}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  helper: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Input;