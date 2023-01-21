import React from 'react';
import {Box, Divider, styled, Typography} from "@mui/material";
import Task from "@/components/Tasks/Task";
import {Droppable} from "react-beautiful-dnd";

const Container = styled(Box)(({theme}) => ({
    border: "1px solid " + theme.palette.action.disabled,
    borderRadius: "8px",
    margin: "8px",
    background: theme.palette.background.default
}))

const TaskList = styled(Box)(({}) => ({
    padding: "8px"
}))

const Column = ({column, tasks = []}) => {
    return (
        <Container>
            <Typography variant={"h4"} sx={{p: 1}}>{column.title}</Typography>
            <Divider/>

            <Droppable droppableId={column.id}>
                {(provided) => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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