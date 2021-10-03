class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }

        return res.json();
    }

    signUp(data) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            }),
        })
            .then(res => this._checkResponseData(res));
    }

    signIn(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then(res => this._checkResponseData(res));
    }

    signOut() {
        return fetch(`${this._baseUrl}/users/signout`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => this._checkResponseData(res));
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://invmovies.nomoredomains.club',
});

export default mainApi;
