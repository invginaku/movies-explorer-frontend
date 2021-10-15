import React from 'react';

import './Input.css';

function Input({
                   place,
                   inputType = 'text',
                   inputPattern = null,
                   inputName,
                   inputLabel,
                   inputValue,
                   inputDefaultValue,
                   inputPlaceholder = '',
                   inputMinLength = 0,
                   inputMaxLength = 140,
                   inputValidityState,
                   onValueChange,
                   onInputValidityChange,
               }) {
    const [errorMessage, setErrorMessage] = React.useState('');

    function handleChange(evt) {
        evt.target.setCustomValidity('');

        if (evt.target.name === 'email') {
            let hasError = evt.target.validity.patternMismatch;
            onInputValidityChange(!hasError);
            if (hasError) {
                evt.target.setCustomValidity('Неверное значение');
                setErrorMessage(evt.target.validationMessage);
            }
        }

        if (evt.target.value === inputDefaultValue) {
            evt.target.setCustomValidity('Нужно изменить значение по умолчанию');
            onInputValidityChange(false);
            setErrorMessage('Нужно изменить значение по умолчанию');
        }

        if (evt.target.name === 'name') {
            let hasError = evt.target.validity.patternMismatch;
            onInputValidityChange(!hasError);
            if (hasError) {
                evt.target.setCustomValidity('В имени допускаются буквы, цифры, _, - и пробел');
                onInputValidityChange(false);
                setErrorMessage('В имени допускаются буквы, цифры, _, - и пробел');
            }
        }

        if (evt.target.validationMessage) {
            onInputValidityChange(false);
            setErrorMessage(evt.target.validationMessage);
        }
        else {
            setErrorMessage('');
            onInputValidityChange(true);
        }

        onValueChange(evt.target.value);
    }

    const inputBaseClassname = 'form__input input';
    let inputClassname;

    if (place === 'profile') {
        inputClassname = inputBaseClassname + ' input_profile';
    } else {
        inputClassname = inputBaseClassname;
    }

    if (!inputValidityState) {
        inputClassname += ' form__input_invalid input_invalid';
    }

    return(
        <>
            <p
                className={`form__label ${place === 'profile' ? 'form__label_profile' : ''}`}
            >
                {inputLabel}
            </p>
            <input
                className={inputClassname}
                type={inputType}
                required
                pattern={inputPattern}
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

export default Input;
