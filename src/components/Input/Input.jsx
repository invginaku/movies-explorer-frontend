import React from 'react';

import './Input.css';

function Input() {
    function Input({
                       inputType = 'text',
                       inputName,
                       inputLabel,
                       inputValue,
                       inputPlaceholder = '',
                       inputMinLength = 0,
                       inputMaxLength = 140,
                       inputValidityState,
                       onValueChange,
                       onInputValidityChange,
                   }) {
        const [errorMessage, setErrorMessage] = React.useState('');

        function handleChange(evt) {
            onValueChange(evt);
            onInputValidityChange(evt.target.validity.valid);
            setErrorMessage(evt.target.validationMessage);
        }

        return (
            <>
                <p className="form__label">{inputLabel}</p>
                <input
                    className={`form__input input ${!inputValidityState ? 'form__input_invalid input_invalid' : ''}`}
                    type={inputType}
                    required
                    name={inputName}
                    value={inputValue}
                    placeholder={inputPlaceholder}
                    minLength={inputMinLength}
                    maxLength={inputMaxLength}
                    onChange={handleChange}
                />
                {!inputValidityState && (<p className="form__error">{errorMessage}</p>)}
            </>
        );
    }
}

export default Input;

