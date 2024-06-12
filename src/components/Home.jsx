import { React, useState, useEffect } from 'react'
import Task from './Task'

const Home = () => {

    const initialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []

    const [tasks, setTasks] = useState(initialArr)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setTasks([...tasks, { title, desc }])

        setTitle("")
        setDesc("")
    }

    const removeTask = (index) => {
        const filteredArr = tasks.filter((val, i) => {
            return i !== index
        })

        setTasks(filteredArr)
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])


    return (
        <div className="max-w-4xl mx-auto min-h-screen bg-slate-100 p-5">
            <h1 className='text-center text-red-700 text-5xl font-bold'>Daily Goals</h1>
            <div className="my-10 px-5">
                <form className="flex flex-col gap-5 items-center" onSubmit={submitHandler}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-md w-full py-2 px-5 border border-slate-200" type="text" name="" id="" placeholder='Task' />
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="rounded-md w-full py-2 px-5 border border-slate-200" name="" id="" rows="4" placeholder='Description'></textarea>
                    <button className="bg-slate-700 text-white  py-2 px-5 font-bold rounded-md w-fit hover:bg-slate-800" type="submit">Add Task</button>
                </form>

                {
                    tasks.map((task, index) => (
                        <Task
                            key={index}
                            title={task.title}
                            desc={task.desc}
                            removeTask={removeTask}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home