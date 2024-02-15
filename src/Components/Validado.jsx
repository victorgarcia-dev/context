import { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const validateInput = (value) => {
    const regex = /^[A-Za-z]{2}\d{3}[A-Za-z]{2}$/;

    if (regex.test(value)) {
      setError('');
    } else {
      setError('El formato debe ser: dos letras, tres números y dos letras.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ejemplo: AB123CD"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MyForm;