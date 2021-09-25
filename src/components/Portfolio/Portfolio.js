import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/invginaku/how-to-learn">Статичный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/invginaku/russian-travel">Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://github.com/invginaku/react-mesto-auth">SPA-приложение</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
