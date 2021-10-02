import React from 'react';

import './Login.css';

import Logo from '../Logo/Logo.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import Input from '../Input/Input.jsx';
import LoginRedirect from '../LoginRedirect/LoginRedirect.jsx';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [formValidity, setFormValidity] = React.useState(false);
    const [emailValidity, setEmailValidity] = React.useState(true);
    const [passwordValidity, setPasswordValidity] = React.useState(true);

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log('Отправлены данные:');
        console.log(`Пароль: ${password}`);
        console.log(`Email: ${email}`);
    }

    return(
        <section className="login">
            <div className="login__container">
                <Logo userForm={true} />
                <UserForm
                    place="login"
                    formValidityState={formValidity}
                    onFormValidityChange={setFormValidity}
                    onSubmit={handleSubmit}
                >
                    <Input
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
                        inputValidityState={passwordValidity}
                        onInputValidityChange={setPasswordValidity}
                        onValueChange={handlePasswordChange}
                    />
                </UserForm>
                <LoginRedirect place="login" />
            </div>
        </section>
    );
}

export default Login;
