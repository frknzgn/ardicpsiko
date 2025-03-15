import React from 'react';
import styled from 'styled-components';
import { sanitizeInput } from '../../utils/validator';

// Styled components for form elements
const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? 'red' : props.theme.colors.tertiary};
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'red' : props.theme.colors.secondary};
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? 'red' : props.theme.colors.tertiary};
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'red' : props.theme.colors.secondary};
  }
`;

const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`;

/**
 * Güvenlikli Input bileşeni
 * XSS ve diğer saldırılara karşı input alanlarını korur
 */
export const SecureInput = React.forwardRef(({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false,
  disabled = false,
  ...rest 
}, ref) => {
  // Input değişikliğini güvenli şekilde ele al
  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    
    // Orjinal onChange handler'ı çağır
    if (onChange) {
      // Event nesnesini klonlayarak sanitize edilmiş değeri atamalıyız
      const updatedEvent = { ...e, target: { ...e.target, value: sanitizedValue } };
      onChange(updatedEvent);
    }
  };

  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label} {required && <span style={{ color: 'red' }}>*</span>}</InputLabel>}
      <StyledInput
        ref={ref}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        required={required}
        {...rest}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
});

/**
 * Güvenlikli Textarea bileşeni
 * XSS ve diğer saldırılara karşı textarea alanlarını korur
 */
export const SecureTextarea = React.forwardRef(({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false,
  disabled = false,
  rows = 5,
  ...rest 
}, ref) => {
  // Textarea değişikliğini güvenli şekilde ele al
  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    
    // Orjinal onChange handler'ı çağır
    if (onChange) {
      // Event nesnesini klonlayarak sanitize edilmiş değeri atamalıyız
      const updatedEvent = { ...e, target: { ...e.target, value: sanitizedValue } };
      onChange(updatedEvent);
    }
  };

  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={name}>{label} {required && <span style={{ color: 'red' }}>*</span>}</InputLabel>}
      <StyledTextarea
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        required={required}
        rows={rows}
        {...rest}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
});

// Bileşenlerin displayName özelliklerini ayarla (debugging için)
SecureInput.displayName = 'SecureInput';
SecureTextarea.displayName = 'SecureTextarea';