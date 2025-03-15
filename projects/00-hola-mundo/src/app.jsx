import React from 'react';
import TwitterFollowCard from './TwitterFollowCard';
import './App.css';

const App = () => {

    const users = [
        { name: "Gustavo Reyes", userName: "gure", isFollowing: true },
        { name: "Karla Mellado", userName: "karlame", isFollowing: false },
        { name: "Daemon", userName: "daemon.pet", isFollowing: false },
        { name: "chikiko mellado", userName: "chikiki", isFollowing: true },
        { name: "Dana mellado", userName: "nana.pet", isFollowing: false }
    ];

    return (
    <section>
        {users.map(user => (
                <TwitterFollowCard key={user.userName} userName={user.userName} name={user.name} intialFollowing={user.isFollowing}/>
            ))}
    </section>
    );
};

export default App;