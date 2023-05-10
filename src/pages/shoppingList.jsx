import { useState } from 'react';
import "./shoppingList.css";

const ShoppingList = ()=>{
    const [item, setItem] = useState({});
    const [allItems, setAllItems] = useState([]);

    const handleTextChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...item};
        copy[name] = value;
        setItem(copy);
    };

    const addItem = () =>{
        console.log(item);

        let copy = [...allItems];
        copy.push(item);
        setAllItems(copy);

    };

    return (
        <div className = "shopping-list">
            <h1> My Shopping List </h1>

            <div className="form">
                <input type="text" name="name" onBlur={handleTextChange} />
                <button className='btb btn-sm btn-outline-dark' onClick={addItem}> Add Item</button>
            </div>

            <div className = "list">
                {allItems.map(item => <h5 key={item.name}>{item.name} </h5>)}
            </div>



        </div>
    );

};

export default ShoppingList;