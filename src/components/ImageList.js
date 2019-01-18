import React from 'react';

class ImageList extends React.Component {

    render() {
        const images = this.props.images.map((image) => {
            return <img key={image.id} alt={image.description} src={image.urls.regular} />
        })
        return (
            <div>{images}</div>
        )
    }
}

export default ImageList;