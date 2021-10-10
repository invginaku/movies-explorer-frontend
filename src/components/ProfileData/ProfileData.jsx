import React from 'react';

import './ProfileData.css';
import '../UserForm/UserForm.css';

import Input from '../Input/Input.jsx';
import Preloader from '../Preloader/Preloader.jsx';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function ProfileData({ onEditProfile, onSignOut }) {

    const currentUser = React.useContext(CurrentUserContext);

    const defaultName = currentUser.name;
    const defaultEmail = currentUser.email;
    const firstName = currentUser.name && currentUser.name.split(' ')[0];

    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);

    const [isLoading, setIsLoading] = React.useState(false);

    const [formValidity, setFormValidity] = React.useState(false);
    const [nameValidity, setNameValidity] = React.useState(true);
    const [emailValidity, setEmailValidity] = React.useState(true);

    function handleFormChange(evt) {
        setFormValidity(evt.currentTarget.checkValidity());
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        setIsLoading(true);

        onEditProfile({ name, email })
            .finally(() => setIsLoading(false));
    }

    function handleSignOut() {
        setIsLoading(true);

        onSignOut()
            .finally(() => {
                if (isLoading) {
                    setIsLoading(false);
                }
            });
    }

    return(
        <>
            {!isLoading && (<form
                    className="profile-data"
                    onChange={handleFormChange}
                    onSubmit={handleSubmit}
                >
                    <h1 className="profile-data__title">{`Привет, ${firstName}!`}</h1>
                    <div className="profile-data__inputs">
                        <div className="profile-data__input-wrapper">
                            <Input
                                place="profile"
                                inputPattern="^[a-zA-Zа-яА-ЯёЁ0-9\s_-]+$"
                                inputName="name"
                                inputLabel="Имя"
                                inputValue={name}
                                inputDefaultValue={defaultName}
                                inputMinLength={3}
                                inputMaxLength={30}
                                inputValidityState={nameValidity}
                                onValueChange={setName}
                                onInputValidityChange={setNameValidity}
                            />
                        </div>
                        <div className="profile-data__input-wrapper">
                            <Input
                                inputPattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                                place="profile"
                                inputType="email"
                                inputName="email"
                                inputLabel="E-mail"
                                inputValue={email}
                                inputDefaultValue={defaultEmail}
                                inputValidityState={emailValidity}
                                onValueChange={setEmail}
                                onInputValidityChange={setEmailValidity}
                            />
                        </div>
            </div>
                <div className="profile__buttons">
                    <button
                        className="profile__button profile__button_type_edit"
                        type="submit"
                        disabled={!formValidity}
                    >
                        Редактировать
                    </button>
                    <button
                        className="profile__button profile__button_type_signout"
                        type="button"
                        onClick={handleSignOut}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </form>)}
            {isLoading && (<Preloader />)}
        </>
    );
}

export default ProfileData;
