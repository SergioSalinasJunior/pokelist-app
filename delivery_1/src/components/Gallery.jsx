import React from 'react';
import "../styles/Gallery.css";
let listOfImages =[];
let images = [];

function importAll2(r) {
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

class Gallery extends React.Component{
    importAll(context) {
        return context.keys().map(context);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
        console.log(listOfImages);
        //images = importAll2(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        //console.log(images);
    }
    render(){
        return(
            <div className='gallery-container'>
                {
                    listOfImages.map(
                        (image, index) =>
                        <div key={index} className='card'>
                            <img  src={image} alt='pokemon card'></img>
                            <p className='card-text'>pokemon name</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

//Solution based on the link below:
//https://stackoverflow.com/questions/56347783/how-to-display-every-image-inside-an-image-folder-in-react
//https://stackoverflow.com/questions/66654151/react-i-want-to-create-an-array-with-the-names-of-the-files-of-the-images-in-the

export default Gallery;
