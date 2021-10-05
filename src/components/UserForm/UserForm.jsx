import './UserForm.css';

function UserForm({
                      place,
                      formValidityState,
                      onFormValidityChange,
                      onSubmit,
                      children
                  }) {
    const title = place === 'login' ? 'Рады видеть' : 'Добро пожаловать!';
    const submitText = place === 'login' ? 'Войти' : 'Зарегистрироваться';

    function handleChange(evt) {
        onFormValidityChange(evt.currentTarget.checkValidity());
    }

    return(
        <form
            className="form"
            onChange={handleChange}
            onSubmit={onSubmit}
            noValidate
        >
            <h1 className="form__title">{title}</h1>
            <fieldset className="form__fieldset">
                {children}
            </fieldset>
            <button
                className="form__submit"
                type="submit"
                onSubmit={onSubmit}
                disabled={!formValidityState}
            >
                {submitText}
            </button>
        </form>
    );
}

export default UserForm;
