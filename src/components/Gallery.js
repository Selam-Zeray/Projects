import getPhotoUrl from 'get-photo-url';
import { useLiveQuery } from 'dexie-react-hooks';
import {db} from './dexie';


const Gallery = () =>{

    const itemPhoto = useLiveQuery(()=> db.gallery.toArray(), [])

    const updatedItems = async() => {
    db.gallery.add({
        url: await getPhotoUrl('#addPhotoInput'),    
    })
    }

    const deletephoto = (id)=> {
        db.gallery.delete(id)
    }

    return(
       <div>
            <input type="file" name="photo" id='addPhotoInput'/>
                <label htmlFor="addPhotoInput" onClick={updatedItems}>
                    <i className="add-photo-button fas fa-plus-square"/>
                </label>
            
            <section className="gallery">
                { itemPhoto?.map((photo) => (
                    <div className="item" key={photo.id}>
                        <img src={photo.url} className = "item-image"  alt="img1"/>
                        <button className="delete-button" onClick={()=> deletephoto(photo.id)}> 
                        delete 
                        </button>
                    </div>    
                ))}   
            </section>
        </div>
)

};

export default Gallery;