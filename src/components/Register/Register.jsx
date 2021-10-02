import React from 'react';

import './Register.css';

import Logo from '../Logo/Logo.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import Input from '../Input/Input.jsx';
import LoginRedirect from '../LoginRedirect/LoginRedirect.jsx';

function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [formValidity, setFormValidity] = React.useState(false);
    const [nameValidity, setNameValidity] = React.useState(true);
    const [emailValidity, setEmailValidity] = React.useState(true);
    const [passwordValidity, setPasswordValidity] = React.useState(true);

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

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
        console.log(`Имя: ${name}`);
    }

    return(
        <section className="register">
            <div className="register__container">
                <Logo userForm={true} />
                <UserForm
                    place="register"
                    formValidityState={formValidity}
                    onFormValidityChange={setFormValidity}
                    onSubmit={handleSubmit}
                >
                    <Input
                        inputType="text"
                        inputName="name"
                        inputLabel="Имя"
                        inputValidityState={nameValidity}
                        onInputValidityChange={setNameValidity}
                        onValueChange={handleNameChange}
                    />
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
                <LoginRedirect place="register" />
            </div>
        </section>
    );
}

export default Register;
