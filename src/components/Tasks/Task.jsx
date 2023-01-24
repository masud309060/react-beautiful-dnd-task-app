import React from 'react';
import {Box, styled} from "@mui/material";
import {Draggable} from "react-beautiful-dnd";

const Container = styled(Box)(({theme, isDragging, isDragDisabled}) => ({
    border: "1px solid " + theme.palette.action.disabled,
    borderRadius: "4px",
    padding: "8px",
    marginBottom: "4px",
    background: isDragDisabled ? theme.palette.action.disabled : isDragging ? theme.palette.primary.main : theme.palette.background.default,

    display: "flex",
}))

const Handler = styled(Box)(({theme}) => ({
    height: "16px",
    width: "16px",
    background: theme.palette.warning.main,
    borderRadius: "4px",
    marginRight: "8px"
}))

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container isDragging={snapshot.isDragging} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <Handler/>
                    {task?.content}
                </Container>
            )}
        </Draggable>

    );
};

export default Task;