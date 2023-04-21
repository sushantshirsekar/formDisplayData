import React , {useState}from 'react'

const useInput = (validateInput) => {
    const [value, setValue] = useState("");
    const [valueTouched, setValueTouched] = useState(false);
    const isValid = validateInput(value);

    const valueInputHandler = (e) => {
        setValue(e.target.value);  
    }

    const blurHandler = (e) => {
        setValueTouched(true); 
    }

    const validity = !isValid && valueTouched; 
  return {
    validity, 
    value, 
    valueTouched, 
    inputHandler: valueInputHandler, 
    blurHandler, 
    isValid
  }
}

export default useInput
