import './Profile.css';

import Header from '../Header/Header.jsx';
import ProfileData from '../ProfileData/ProfileData.jsx';

function Profile({
                     loggedIn,
                     menuProps,
                     onEditProfile,
                     onSignOut
                 }) {
    return(
        <>
            <Header
                place="profile"
                loggedIn={loggedIn}
                {...menuProps}
            />
            <section className="profile">
                <ProfileData
                    onEditProfile={onEditProfile}
                    onSignOut={onSignOut}
                />
            </section>
        </>
    );
}

export default Profile;
