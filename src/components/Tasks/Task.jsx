import React from 'react';
import {Box, styled} from "@mui/material";
import {Draggable} from "react-beautiful-dnd";

const Container = styled(Box)(({theme}) => ({
    border: "1px solid " + theme.palette.action.disabled,
    borderRadius: "8px",
    padding: "8px",
    marginBottom: "4px",
    background: theme.palette.action.active
}))

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {task?.content}
                </Container>
            )}
        </Draggable>

    );
};

export default Task;