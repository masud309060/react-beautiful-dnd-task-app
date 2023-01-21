import React, {useEffect, useState} from 'react';
import {initialData} from "@/helper/constant/data";
import {Box, Container, styled} from "@mui/material";
import Column from "@/components/Tasks/Column";
import {DragDropContext} from "react-beautiful-dnd";
import {orange} from "@mui/material/colors";


const WrapperTasks = styled(Box)(({theme}) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}))

const Tasks = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [state, setState] = useState(initialData)

    useEffect(() => {
        setIsBrowser(true);
    }, [])


    const handleOnDragEnd = (result) => {
        // document.body.style.color = "inherit";
        // document.body.style.backgroundColor = "inherit";
        // document.body.style.transition = "color 0.2s ease";

        // Todo: reorder our column
        console.log("end:: ", result);
        const {draggableId, source, destination} = result || {};
        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const startColumn = state.columns[source.droppableId];
        const finishColumn = state.columns[destination.droppableId];

        console.log({startColumn, finishColumn})

        if (startColumn?.id === finishColumn?.id) {
            const newTaskIds = Array.from(startColumn.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds
            }
            const newState = {
                ...state, columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn
                }
            }
            setState(newState)
            return;
        }

        // handle moving one list to another
        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStartColumn = {
            ...startColumn,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
            ...finishColumn,
            taskIds: finishTaskIds
        }


        const newState = {
            ...state, columns: {
                ...state.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn,
            }
        }

        setState({...newState, homeIndex: null});
    }

    const handleOnDragStart = (result) => {
        // console.log("start", result)
        // document.body.style.color = "orange";
        // document.body.style.transition = "color 0.2s ease";

        const homeIndex = state.columnOrder.indexOf(result.source.droppableId);
        setState({...state, homeIndex: homeIndex});
    }
    const handleOnDragUpdate = (result) => {
        // console.log("update", result)
        // const {destination} = result;
        // const opacity = destination ? destination.index / Object.keys(state.tasks).length : 0;
        // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    if (!isBrowser) return undefined;
    return (
        <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart} onDragUpdate={handleOnDragUpdate}>
            <Container maxWidth={'md'} style={{padding: "24px"}}>
                <WrapperTasks>
                    {state.columnOrder.map((columnId, index) => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                        const isDropDisabled = index < state.homeIndex;
                        return (
                            <Column key={columnId} column={column} tasks={tasks} isDropDisabled={isDropDisabled}/>
                        )
                    })}
                </WrapperTasks>
            </Container>
        </DragDropContext>
    );
};

export default Tasks;
