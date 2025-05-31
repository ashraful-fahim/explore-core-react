// export default function ToDo ({task, isDone}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

export default function Todo({ task, isDone, time=0}) {
    if (isDone) {
        return (
            <li>Done: {task}, Duration: {time}</li>
        )
    }
    return <li>Pending: {task}</li>
}