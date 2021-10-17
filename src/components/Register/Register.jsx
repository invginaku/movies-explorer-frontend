import React from 'react';

import './Register.css';

import Logo from '../Logo/Logo.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import Input from '../Input/Input.jsx';
import LoginRedirect from '../LoginRedirect/LoginRedirect.jsx';
import Preloader from '../Preloader/Preloader.jsx';

function Register({ onSignUp }) {
    const [isLoading, setIsLoading] = React.useState(false);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [formValidity, setFormValidity] = React.useState(false);
    const [nameValidity, setNameValidity] = React.useState(true);
    const [emailValidity, setEmailValidity] = React.useState(true);
    const [passwordValidity, setPasswordValidity] = React.useState(true);

    function handleNameChange(value) {
        setName(value);
    }

    function handleEmailChange(value) {
        setEmail(value);
    }

    function handlePasswordChange(value) {
        setPassword(value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        setIsLoading(true);

        onSignUp({ name, email, password })
            .finally(() => {
                if (isLoading) {
                    setIsLoading(false);
                }
            });
    }

    return(
        <section className="register">
            <div className="register__container">
                {!isLoading && (<>
                    <Logo userForm={true} />
                    <UserForm
                        place="register"
                        formValidityState={formValidity}
                        onFormValidityChange={setFormValidity}
                        onSubmit={handleSubmit}
                    >
                        <Input
                            inputPattern="^[a-zA-Zа-яА-ЯёЁ0-9\s_-]+$"
                            inputName="name"
                            inputLabel="Имя"
                            inputMinLength={3}
                            inputMaxLength={30}
                            inputValidityState={nameValidity}
                            onInputValidityChange={setNameValidity}
                            onValueChange={handleNameChange}
                        />
                        <Input
                            inputPattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                            inputType="email"
                            inputName="email"
                            inputLabel="E-mail"
                            inputValidityState={emailValidity}
                            onInputValidityChange={setEmailValidity}
                            onValueChange={handleEmailChange}
                        />
                        <Input
                            inputType="password"
                            inputName="password"
                            inputLabel="Пароль"
                            inputMinLength={6}
                            inputValidityState={passwordValidity}
                            onInputValidityChange={setPasswordValidity}
                            onValueChange={handlePasswordChange}
                        />
                    </UserForm>
                    <LoginRedirect place="register" />
                </>)}
                {isLoading && (<Preloader />)}
            </div>
        </section>
    );
}

export default Register;
