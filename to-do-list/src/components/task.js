import React from 'react';

const Task = (props) => {
    const { task, index, list, setList } = props;
        const onClick= () => {
            setList(()=> list.filter(task => list.indexOf(task) !== index));
        };

        const onChange= () => {
            list[index]. isComplete = !list[index].isComplete;
            setList([...list]);
        };
    return (
        <div>
            <h4>{task.name}</h4>
            <div>
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" checked={task.isComplete} />
                <button onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Task