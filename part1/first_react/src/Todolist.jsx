import React from 'react';

const Todolist = ({task , position, isDone}) => {
    let sabashi = ''

    if(isDone === true){
         sabashi = 'sabbash beta';
    }
    else{
         sabashi = 'jao tumi mara khao';
    }
    return (
        <div>
            <li>At {position} I have to do {task}</li>
            <h1>{sabashi}</h1>
        </div>
    );
};

export default Todolist;