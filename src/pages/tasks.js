import React, {useEffect, useState} from 'react';
import {initialData} from "@/helper/constant/data";
import {Container} from "@mui/material";
import Column from "@/components/Tasks/Column";
import {DragDropContext} from "react-beautiful-dnd";

const Tasks = () => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, [])

    const handleOnDragStart = () => {
        console.log("start")
    }
    const handleOnDragEnd = (result) => {
        // Todo: reorder our column
        console.log("end", result)
    }
    const handleOnDragUpdate = () => {
        console.log("update")
    }

    console.log("=== Render ===")


    if(!isBrowser) return undefined;
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Container maxWidth={'md'} style={{padding: "24px"}}>
                {initialData.columnOrder.map(columnId => {
                    const column = initialData.columns[columnId];
                    const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])
                    return (
                        <Column key={columnId} column={column} tasks={tasks}/>
                    )
                })}
            </Container>
        </DragDropContext>
    );
};

export default Tasks;
