import { useState } from "react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import GlobalStyle, { Wrapper } from './styles';

import task_icon from './assets/task.svg';
import plus_icon from './assets/plus.svg';

export function App() {

    const tasks = [
        {
            id: 1,
            content: 'Do the dishes'
        },
        {
            id: 2,
            content: 'Take the dog for a walk'
        }
    ];

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Wrapper>
                <form action="">
                    <input type="text" placeholder="add a new task" />
                    <button type="submit">Add <img src={plus_icon} alt="" /> </button>
                </form>

                <div className="summary">
                    <div className="tasks-created">tasks created <span>{tasks.length}</span></div>

                    <div className="completed">completed <span>0</span></div>
                </div>

                {tasks.length > 0 ?
                    <>
                        {tasks.map((task)=> (
                            <Task id={task.id} content={task.content}/>
                        ))}
                    </>
                :                
                    <div className="no-tasks">
                        <img src={task_icon} alt="" />
                        <p><strong>You don't have any task created yet</strong></p>
                        <p>Create tasks and organise your items</p>
                    </div>
                }
                

            </Wrapper>
        </>
    );
}
