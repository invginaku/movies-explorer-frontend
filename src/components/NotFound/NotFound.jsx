import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
    return(
        <section class="not-found">
            <p class="not-found__code">404</p>
            <h1 class="not-found__title">Страница не найдена</h1>
            <Link class="not-found__link" to="/">Назад</Link>
        </section>
    );
}

export default NotFound;
