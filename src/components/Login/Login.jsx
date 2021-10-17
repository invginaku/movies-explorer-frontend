import React from 'react';

import './Login.css';

import Logo from '../Logo/Logo.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import Input from '../Input/Input.jsx';
import LoginRedirect from '../LoginRedirect/LoginRedirect.jsx';
import Preloader from '../Preloader/Preloader.jsx';

function Login({ onSignIn }) {
    const [isLoading, setIsLoading] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [formValidity, setFormValidity] = React.useState(false);
    const [emailValidity, setEmailValidity] = React.useState(true);
    const [passwordValidity, setPasswordValidity] = React.useState(true);

    function handleEmailChange(value) {
        setEmail(value);
    }

    function handlePasswordChange(value) {
        setPassword(value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        setIsLoading(true);

        onSignIn({ email, password })
            .finally(() => {
                if (isLoading) {
                    setIsLoading(false);
                }
            });
    }

    return(
        <section className="login">
            <div className="login__container">
                {!isLoading && (<>
                    <Logo userForm={true} />
                    <UserForm
                        place="login"
                        formValidityState={formValidity}
                        onFormValidityChange={setFormValidity}
                        onSubmit={handleSubmit}
                    >
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
                    <LoginRedirect place="login" />
                </>)}
                {isLoading && (<Preloader />)}
            </div>
        </section>
    );
}

export default Login;
