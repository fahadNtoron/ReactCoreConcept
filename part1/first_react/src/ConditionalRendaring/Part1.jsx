import React from 'react';

const Part1 = ({isDone, task , name}) => {
    
    return (
        <div>
            <li>{isDone ? 'Finished': 'work on'}: {task} </li>  {/* ternary operator */}

            <li>{task} {isDone && ':kop mama kop'} </li>

            <li> {task} {isDone || ':bolo keno emon hoy'} </li>


            <li> {name} </li>
        </div>
    );
};

export default Part1;