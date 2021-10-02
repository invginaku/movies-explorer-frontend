import './Profile.css';

import ProfileData from '../ProfileData/ProfileData.jsx';

function Profile({ onEmptyButtonClick }) {

    function handleEmptyButtonClick() {
        onEmptyButtonClick('Вы использовали функцию, которой ещё не существует :)')
    }

    return(
        <section className="profile">
            <ProfileData />
            <div className="profile__buttons">
                <button
                    className="profile__button profile__button_type_edit"
                    type="button"
                    onClick={handleEmptyButtonClick}
                >
                    Редактировать
                </button>
                <button
                    className="profile__button profile__button_type_signout"
                    type="button"
                    onClick={handleEmptyButtonClick}
                >
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    );
}

export default Profile;
