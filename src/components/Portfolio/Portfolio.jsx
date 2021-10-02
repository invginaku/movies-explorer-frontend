import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://github.com/invginaku/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >Статичный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://github.com/invginaku/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://github.com/invginaku/react-mesto-auth"
                        target="_blank"
                        rel="noreferrer"
                    >SPA-приложение</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
