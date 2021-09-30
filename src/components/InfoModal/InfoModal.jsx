import './InfoModal.css';

function InfoModal({ state, onClose }) {
    function handleRefresh() {
        onClose();
        window.location.reload();
    }

    return(
        <div className={`root__modal modal ${!state.open ? 'modal_hidden' : ''}`}>
            <button className="modal__close" type="button" onClick={onClose} />
            <h1 className="modal__title">{state.title}</h1>
            <p className="modal__text">{state.message}</p>
            <p className="modal__advice">
                Попробуйте <button
                    className="modal__refresh"
                    type="button"
                    onClick={handleRefresh}
                >
                    обновить
            </button> страницу.
            </p>
        </div>
    );
}

export default InfoModal;
