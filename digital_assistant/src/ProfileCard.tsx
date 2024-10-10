import 'bulma/css/bulma.css';
import React from "react";

interface ProfileCard {
    title?: string
    handle?: string
    image?: string
    description?: string
}

function ProfileCard({handle, image, title, description}: ProfileCard) {
    const imageAlt = `PDA logo for ${title}`
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={imageAlt}/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

// FIXME: using this approach, the image don't render. Probably needs some sort of setState, due to the async-nature of fetching images?
interface ProfileCardsProps {
    cards?: ProfileCard[]
}

function ProfileCards(cardsProps: ProfileCardsProps) {

    return (<div className="container">
        <section className="section">
            <div className="columns">
                {cardsProps.cards?.map(card => (
                    <div className="column is-4" key={card.title}>
                        <ProfileCard title={card.title} handle={card.handle} image={card.image}/>
                    </div>
                ))}
            </div>
        </section>
    </div>)
}

export default ProfileCard