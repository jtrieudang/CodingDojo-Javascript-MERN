//usestate is a hook function
import React, { useState } from 'react';
//to use the import css module
import styles from './disappearingCircles.module.css';
import classes from './disappearingCircles.module.css';

//create a array of circle objects, attritube have a color value and a point value
const initialCircles = [
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'red',
        points: 10
    },
    {
        color: 'green',
        points: 20
    },
    {
        color: 'blue',
        points: 30
    },
]


function DisappearingCircles() {
    //destructing here V, setpoint a function,to use the function where the point starts at 0
    const [points, setPoints] = useState(0);
    // have an array of circles, and useState function passes in initialCircles which is the array of circle objects
    const [circles, setCircles] = useState(initialCircles);

//creating a function to give click feedback taking in the index
function removeCircle(idx){
    //update points
    setPoints(points + circles[idx].points);

    //a function to take in the circle and the index, _ means you're not using the parameter at all.
    function filterCallback(_, i) {
    return i != idx;
    }
    //make circle disappear, filter take the callback function that will have a reference to the circle and the index, filter create a bring new array and create a new array by illerating through the new circle and if it does not include the index of i, it will include it to the new array of i
    const newCircles = circles.filter((circle, i) => i != idx);
    setCircles(newCircles);
}

//a function to reset
function handleReset(){
    //creating a spread, where  all the value of the array been drop into a new array
    setCircles([...initialCircles]);
    //reset the point to 0
    setPoints(0);
    return
}

    return(
        <div>
        <p>Points: {points}</p>
        {/* to illerate through the circle and show them on page, and css to style in container */}
        <div className={classes.wrapper}>
        {circles.map((circle, i) => {
            return (
                //creating a key for index for react, created class to import the css, created a style with an object of the background of the circle value
            <div key={i}
            // add a onclick event with a callbackfunction calling removecircle from the map
            onClick={()=> removeCircle(i)}
            className={classes.circle} 
                style={{background: circle.color}}>{circle.points}</div>
            )
        })}
            </div>
            {/* create button to reset to 0 or reset everything */}
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}
//exporting the whole function
export default DisappearingCircles;