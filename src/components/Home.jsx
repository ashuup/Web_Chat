import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-content">
                <h1>Live Chat</h1>
                <h2>Web Application</h2>
                <p>Reach your customers instantly via web, mobile, and social</p>
                <p>on live chat and messaging</p>
                <button>Chat Now!</button>
            </div>
            <div className="right-content">
                <img src="https://web-assets.zendesk.com/images/p-capabilities/messaging/hero-2x.jpg" alt="Messaging" />
            </div>
        </div>
    );
}

export default Home;
