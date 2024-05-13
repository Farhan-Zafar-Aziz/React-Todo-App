"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderedTask = <h1 className="text-xl">No task availble.....</h1>;

  if(mainTask.length>0) {
    renderedTask = mainTask.map((t, i) => {
      return ( <>
        <div className="flex justify-between items-center">
      </div>
        <li key={i} className="flex items-center justify-between mb-4 mt-4">
        <div className="flex justify-between w-2/3">
          <h5 className="text-xl font-medium">
            <span className="mt-4 text-base text-gray-400">Task Name</span> <br />
          {t.title}</h5>
          <h6 className="text-lg">
          <span className="mb-4 text-gray-400">Task Time</span> <br />
          {t.desc}</h6>
        </div>
        <div className="flex justify-between items-center">
        <button className="flex justify-between items-center bg-transparent text-gray-300 px-4 py-2 border-2 rounded-lg"
        onClick={()=>{
          deleteHandler(i)
        }}
        
        >
      Delete<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg></button></div>
        </li>
        <hr />
        </>
      );
    });
  }
 
  return (
    <>
    <div className="flex items-center flex-col bg-zinc-700 w-full h-screen overflow-scroll m-0 p-0">
      <h1 className="flex justify-around items-center w-96 bg-transparent border-2 rounded-lg text-4xl p-5 m-10 text-bold text-center text-white">
        To Do List <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

 
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-2 rounded-lg border-white bg-transparent text-white px-4 py-3 m-4"
          placeholder="Enter task name..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-xl border-2 rounded-lg border-white bg-transparent text-white px-4 py-3 m-8"
          placeholder="Enter task time..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-transparent text-white px-4 py-3 border-2 rounded-lg">
          Add Task
        </button>
      </form>

      <div className="w-2/4 bg-transparent border-2 rounded-xl text-white mt-5 p-5">{renderedTask}</div><hr />
           </div>
    </>
  );
};

export default Page;
