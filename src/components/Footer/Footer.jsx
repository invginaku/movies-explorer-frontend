import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__caption">Учебный проект «Яндекс.Практикум» x BeatFilm</p>
            <div className="footer__links">
                <address className="footer__copyright">© 2021 Никита Ивочкин</address>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a
                            className="footer__link"
                            href="https://praktikum.yandex.ru"
                            target="_blank"
                            rel="noreferrer"
                        >«Яндекс.Практикум»</a>
                    </li>
                    <li className="footer__list-item">
                        <a
                            className="footer__link"
                            href="https://github.com/invginaku"
                            target="_blank"
                            rel="noreferrer"
                        >GitHub</a>
                    </li>
                    <li className="footer__list-item">
                        <a
                            className="footer__link"
                            href="https://t.me/benimmolate"
                            target="_blank"
                            rel="noreferrer"
                        >Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
