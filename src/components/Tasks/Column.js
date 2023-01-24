import React from 'react';
import {Box, Divider, styled, Typography} from "@mui/material";
import Task from "@/components/Tasks/Task";
import {Droppable} from "react-beautiful-dnd";

const Container = styled(Box)(({theme}) => ({
    border: "1px solid " + theme.palette.action.disabled,
    borderRadius: "2px",
    width: "240px",
    margin: "8px",
    background: theme.palette.background.default,

    display: "flex",
    flexDirection: "column",
}))

const TaskList = styled(Box)(({theme, isDraggingOver}) => ({
    padding: "8px",
    transition: "background 0.2s ease",
    background: isDraggingOver ? theme.palette.secondary.main : theme.palette.background.default,

    flexGrow: 1,
    minHeight: "120px"
}))

const Column = ({column, tasks = [], isDropDisabled=false}) => {

    // ## isDropDisabled = can disable to move any task, where the type is same

    // ## react beautiful dnd allow to move draggable item
    // where droppable component type is equal or same.
    const allowType = column.id === "column-3" ? "done" : "active";
    return (
        <Container>
            <Typography variant={"h4"} sx={{p: 1}}>{column.title}</Typography>
            <Divider/>

            <Droppable droppableId={column.id} isDropDisabled={isDropDisabled} type={"TASK"}>
                {(provided, snapshot) => (
                    <TaskList isDraggingOver={snapshot.isDraggingOver} ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, i) => (
                            <Task key={task.id} task={task} index={i}/>
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}

            </Droppable>

        </Container>
    );
};

export default Column;