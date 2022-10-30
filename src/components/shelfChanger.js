import React, {useState} from 'react'

const ShelfChanger = ({ handleCategory, book}) => {
    const getInitialState = () => {
        const value = "";
        return value;
      };


      
    const [value, setValue] = useState(getInitialState);
    const handleChange = (e) => {
        setValue(e);
      };
    return (
        <div>
            <select  value={value}  onClick={(e) => handleCategory(book, e.target.value)} onChange={(e)=>handleChange(e.target.value)}>
                <option value={''} >
                    Move to...
                </option>
                <option value="currentlyReading" >
                    Currently Reading
                </option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger