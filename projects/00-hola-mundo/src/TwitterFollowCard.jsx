import React from 'react';
import { useState } from 'react';

const App = ({ userName, name, intialFollowing }) => {

    const [isFollowing, setIsFollowing] = useState(intialFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img  className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="midudev" srcset="" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
                <aside>
                    <button className={buttonClassName} onClick={ () => {
                        setIsFollowing(!isFollowing);
                    }}>
                    <span className='tw-followCard-button-text'>{text}</span>
                    <span className='tw-followCard-button-stopFollowing'>Dejar de seguir</span>
                    </button>
                </aside>
            </header>
        </article>
    );

};

export default App;