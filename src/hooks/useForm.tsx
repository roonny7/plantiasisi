import { useState } from 'react';

export const useForm = (initialValues = {}) => {
  const [valores, setValores] = useState(initialValues);

  const handleInputChange = ({ target }:any) => {
    const { name, value } = target;
    setValores({
      ...valores,
      [name]: value
    });
  };

  const reset = () => setValores(initialValues);

  return {
    valores,
    handleInputChange,
    reset,
    ...valores // Opcional: esparcir valores para acceso directo
  };
};