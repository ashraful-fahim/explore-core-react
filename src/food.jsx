export default function Food({ task, isDone, time = 0 }) {
    if (isDone) {
        return (
            <li>Done Eating: {task}, time:{time}</li>
        )
    }
    return <li>Pending: {task} time:{time}</li>
}