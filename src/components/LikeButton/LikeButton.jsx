import React from 'react';

import './LikeButton.css';

function LikeButton({ type }) {

    const [isLoading, setIsLoading] = React.useState(false);

    const [isLiked, setIsLiked] = React.useState(false);

    const baseClassName = type === 'remove' ? 'like like_type_remove' : 'like';

    let className;

    if (isLoading) {
        className = `${baseClassName} like_loading`
    } else if ((type === 'like') && isLiked) {
        className = 'like like_active';
    } else {
        className = baseClassName;
    }

    function handleLikeClick() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLiked(!isLiked);
            setIsLoading(false);
        }, 300);
    }

    return(
        <button className={className} onClick={handleLikeClick} />
    );
}

export default LikeButton;
