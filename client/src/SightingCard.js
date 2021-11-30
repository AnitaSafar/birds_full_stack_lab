import { deleteSighting } from "./SightingService"
import UpdateForm from "./UpdateForm";
import addSighting from "./App";

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button>Update</button>
            <UpdateForm addSighting={addSighting} sighting={sighting}/>
            <hr></hr>
        </>
    )
}

export default SightingCard;