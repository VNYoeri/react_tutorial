interface ImageProp {
    image ?: any
}
function ImageShow({image}: ImageProp) {
    return (<div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>)
}

export default ImageShow