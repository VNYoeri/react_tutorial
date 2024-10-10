interface ProfileCardProps {
    title?: string
    handle?: string
    image?: string
}

function ProfileCard({handle, image, title}: ProfileCardProps) {
    const imageAlt=`PDA logo for ${title}`
    return (
        <div>
            <img src={image} alt={imageAlt}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>{title}</div>
                <div>{handle}</div>
            </div>
        </div>
    );
}

export default ProfileCard