import './ProfileData.css';

function ProfileData({ userData }) {
    return(
        <div className="profile-data">
            {/* <h1 className="profile-data__title">{userData.name}</h1> */}
            <h1 className="profile-data__title">Привет, Виталий!</h1>
            <div className="profile-data__inputs">
                <div className="profile-data__input">
                    <p className="profile-data__label">Имя</p>
                    {/* <p className="profile-data__value">{userData.fullName}</p> */}
                    <p className="profile-data__value">Виталий</p>
                </div>
                <div className="profile-data__input">
                    <p className="profile-data__label">E-mail</p>
                    {/* <p className="profile-data__value">{userData.email}</p> */}
                    <p className="profile-data__value">pochta@yandex.ru</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileData;
