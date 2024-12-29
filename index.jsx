import data from "./data";
import { useState } from "react";
import'./styles.css';
export default function Accordian(){
    const [selectedItems,setSelectedItems]=useState([]);
    const [multiSelectionEnabled,setIsMultiselectionEnabled]=useState(false);
    function handleSelection(getCurrentId){
        if(multiSelectionEnabled){
        if(selectedItems.includes(getCurrentId)){
        setSelectedItems(selectedItems.filter(id=>id!==getCurrentId));
        }
        else{
            setSelectedItems([...selectedItems, getCurrentId])
        }
    }
    else{
        setSelectedItems(getCurrentId==selectedItems? []:getCurrentId)
    }
}
    return <div className="wrapper">
        <button onClick={()=>{
            setIsMultiselectionEnabled(!multiSelectionEnabled);
        setSelectedItems([])
        }}>{multiSelectionEnabled ? "Disable Multiple Selection" : "Enable Multiple Selection"}</button>
        <div className="accordian">
            {
                data && data.length>0?(
                    data.map((dataItem)=>(
<div className="item">
<div onClick={()=>handleSelection(dataItem.id)} className="title">
    <h2>{dataItem.question}</h2>
    <span>{selectedItems.includes(dataItem.id)? "-":"+"}</span>
    </div>
    <div className="content">{
    selectedItems.includes(dataItem.id)?
        dataItem.answer:null}
    </div>
    </div>
                    )
                )
            ):(
                <div>
                    no data found
                    </div>
            )

            }
        </div>
    </div>
    
}