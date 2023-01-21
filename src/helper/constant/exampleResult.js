const exampleResult = {
    draggableId: "task-1",
    type: "TYPE",
    reason: "DROP",
    source: {
        droppableId: "column-1",
        index: 1,
    },
    destination: {
        droppableId: "column-1",
        index: 0
    }
}

// snapshot variables view
const draggableSnapshot = {
    isDragging: true,
    draggingOver: 'column-1'
}
const droppableSnapshot = {
    isDraggingOver: true,
    draggingOverWith: 'column-1'
}