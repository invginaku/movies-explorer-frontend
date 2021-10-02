import './AboutMe.css';

import photo from '../../images/photo.jpg';

function AboutMe() {
    return(
        <section className="author">
            <h2 className="author__title section-title">Студент</h2>
            <div className="author__content">
                <div className="author__main">
                    <address className="author__name">
                        <a className="author__contact" href="https://t.me/benimmolate">Никита Ивочкин</a>
                    </address>
                    <p className="author__subtitle">Фронтенд-разработчик, 27 лет</p>
                    <p className="author__biography">Я живу в городе Пенза, закончил факультет экономики ПГУ. Я люблю катать на скейте и играть в баскетбол. С 2016 года открыл свое ИП и работаю с сфере ремонта мобильных устройств.
                        Пару лет учусь кодить, сейчас заканчиваю Яндекс.Практикум и собираюсь сменить свою работу и устроиться фронтэнд-разработчиком.
                    </p>
                    <ul className="author__list">
                        <li className="author__list-item">
                            <a className="author__link  author__link_type_social" href="https://vk.com/invginaku">VK</a>
                        </li>
                        <li className="author__list-item">
                            <a className="author__link  author__link_type_social" href="https://github.com/invginaku">GitHub</a>
                        </li>
                    </ul>
                </div>
                <img
                    className="author__photo"
                    src={photo}
                    alt="Фотография автора"
                />
            </div>
        </section>
    );
}

export default AboutMe;
