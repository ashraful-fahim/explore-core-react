// export default function ToDo ({task, isDone}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function Todo({ task, isDone, time=0}) {
//     if (isDone) {
//         return (
//             <li>Done: {task}, Duration: {time}</li>
//         )
//     }
//     return <li>Pending: {task}</li>
// }

//conditional rendering: 3 ternary

// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone ? <li>Done: {task}, time:{time}</li>: <li>Not Done: {task}, time: N/A</li>
// }

//conditional rendering: 4 &&

export default function Todo({ task, isDone, time = 0 }) {
    return isDone && <li>Done: {task}, time: {time}</li>
}