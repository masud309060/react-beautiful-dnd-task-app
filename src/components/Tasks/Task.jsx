import React from 'react';
import {Box, styled} from "@mui/material";
import {Draggable} from "react-beautiful-dnd";

const Container = styled(Box)(({theme, isDragging, isDragDisabled}) => ({
    border: "4px solid " + theme.palette.action.disabled,
    borderRadius: "50%",
    padding: "8px",
    marginBottom: "4px",
    background: isDragDisabled ? theme.palette.action.disabled : isDragging ? theme.palette.primary.main : theme.palette.background.default,

    display: "flex",
    alignItems: "center",
    marginRight: "4px",
    "&:focus": {
        outline: "none",
        borderColor: "red"
    }
}))

const Handler = styled(Box)(({theme}) => ({
    height: "16px",
    width: "16px",
    background: theme.palette.warning.main,
    borderRadius: "4px",
    marginRight: "8px"
}))

const Task = ({task, index}) => {
    const isDragDisabled = task.id === "task-1";
    return (
        <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
            {(provided, snapshot) => (
                <Container isDragging={snapshot.isDragging} isDragDisabled={isDragDisabled}
                           ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <Handler/>
                    {task?.content}
                </Container>
            )}
        </Draggable>

    );
};

export default Task;