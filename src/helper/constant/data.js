export const initialData = {
    tasks: {
        "task-1": {id: "task-1", content: "task one"},
        "task-2": {id: "task-2", content: "task two"},
        "task-3": {id: "task-3", content: "task three"},
        "task-4": {id: "task-4", content: "task four"},
        "task-5": {id: "task-5", content: "task five"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ['task-1', 'task-3', 'task-2', "task-4", 'task-5']
        },
        "column-2": {
            id: "column-2",
            title: "In Progress",
            taskIds: []
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: []
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
}