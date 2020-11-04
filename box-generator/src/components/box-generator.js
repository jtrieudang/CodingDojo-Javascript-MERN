import React, {useState} from 'react';
// import App from '../App';
import styles from './Box.module.css'


const Box= ()=>{
    const [boxList, setBoxList] = useState([]);
    const [newColor, setNewColor]=useState("");

    // const onChange

    const onSubmit=(e)=>{
        e.preventDefault();

        setBoxList([
            ...boxList,
            newColor
        ]);

        setNewColor("");

    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="boxColor">Color</label>
                <input onChange={ (e)=> setNewColor(e.target.value)} value={newColor}type="text" name="boxColor"/>
                <button>Submit</button>
                
            </form>
            <div>
                {boxList.map((box, i)=>{
                return(
                    <div key={i} style={{background: box}} className={styles.box}>
                        {box}
                    </div>
                )
                })}
            </div>
        </>
    );



};

export default Box;