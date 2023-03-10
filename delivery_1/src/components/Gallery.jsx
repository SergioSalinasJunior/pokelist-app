import React from 'react';
import "../styles/Gallery.css";
let listOfImages = [];
class Gallery extends React.Component{
    importAll(context) {
        return context.keys().map(element => {
            return {
                name: element.replace('./', '').split('.')[0],
                image: context(element),

            }
        });
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
        console.log(listOfImages);
    }
    render(){
        return(
            <div className='gallery-container'>
                {
                    listOfImages.map(
                        ({ name, image }, index) =>
                        <div key={index} className='card'>
                            <img  src={image} alt='pokemon card'></img>
                            <p className='card-text'>{name}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}


export default Gallery;

//Solution based on the links below:
//https://stackoverflow.com/questions/56347783/how-to-display-every-image-inside-an-image-folder-in-react
//https://stackoverflow.com/questions/66654151/react-i-want-to-create-an-array-with-the-names-of-the-files-of-the-images-in-the
