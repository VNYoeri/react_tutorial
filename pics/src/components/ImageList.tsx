import './ImageList.css'
import ImageShow from "./ImageShow";

interface ImageListProps {
    images ?: any[]
}

function ImageList({images}: ImageListProps) {
    const renderedImages = images?.map(image => <ImageShow key={image.id} image={image} />);

    return (
        <div className="image-list">{renderedImages}</div>
    )
}

export default ImageList