import React, {useState} from 'react';
import { updateSighting } from './SightingService';

const UpdateForm = function({addSighting, sighting}) {
    const [updateData, setUpdateData] = useState({sighting});

    const onChange = (event) => {
        updateData[event.target.id] = event.target.value;
        console.log(updateData)
        setUpdateData(updateData);
        console.log(updateData)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        updateSighting(updateData, sighting._id)
       
        .then(data => addSighting(data));
    };

    return(
        <form onSubmit={onSubmit} id="sightings-form" >
            <h2>Update a Sighting</h2>
            <div>
                <input type="hidden" id="_id" value={sighting._id}/>
            </div>
            <div className="formWrap">
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species" defaultValue={sighting.species}/>
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location" defaultValue={sighting.location} />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date" defaultValue={sighting.date} />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
    )
};

export default UpdateForm;