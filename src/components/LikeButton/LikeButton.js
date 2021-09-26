import React from 'react';

import './LikeButton.css';

function LikeButton(props) {
    const [isLoading, setIsLoading] = React.useState(false);

    let className;

    if (isLoading) {
        className = 'like like_loading';
    } else if (props.isLiked) {
        className = 'like like_active';
    } else {
        className = 'like';
    }

    return(
        <button className={className} />
    );
}

export default LikeButton;
