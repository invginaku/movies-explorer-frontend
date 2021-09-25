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
                    <p className="author__biography">Я родился и живу, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
                        «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
                        постоянной работы.
                    </p>
                    <ul className="author__list">
                        <li className="author__list-item">
                            <a className="author__link" href="https://vk.com/invginaku">VK</a>
                        </li>
                        <li className="author__list-item">
                            <a className="author__link" href="https://github.com/invginaku">GitHub</a>
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
