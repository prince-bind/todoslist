import React from 'react'

const Task = ({ title, desc, removeTask, index}) => {

  return (
    <div className="flex justify-between items-center bg-white my-5 px-5 rounded-md py-2">
      <div>
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>
      <div onClick={() => removeTask(index)} className="bg-red-600 text-white font-bold text-2xl px-3 pb-1 rounded-full cursor-pointer">
        -
      </div>
    </div>
  )
}

export default Task