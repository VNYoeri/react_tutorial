import React from 'react';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title"> Personal Digital Assistants</div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon and is ment for shopping"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was created by Microsoft"/></div>
                        <div className="column is-3">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was created by Apple"/>
                        </div>
                    </div>
                </section>
            </div>

            {/*TODO: find a way to use this, while handling async loading of the image ... */}
            {/*<ProfileCards cards={[*/}
            {/*    {title: "Alexa", handle: "@alexa99", image: {AlexaImage}, description: "Alexa was created by Amazon and is ment for shopping"},*/}
            {/*    {title: "Cortana", handle: "@cortana32", image: {CortanaImage}, description: "Cortana was created by Microsoft"},*/}
            {/*    {title: "Siri", handle: "@siri01", image: {SiriImage}, description: "Siri was created by Apple"}*/}

            {/*]}/>*/}
        </div>
    );
}

export default App;
