function Counter ({count, handleAdd, handleSubtract}) {
    return (
        <div className="flex gap-2 items-center">
            <button 
                className="bg-blue-300 px-2 py-1 rounded hover:bg-blue-400 cursor-pointer max-w-[150px] self-center"
                onClick={handleSubtract}>-</button>
            <p className="text-gray-600">{count}</p>
            <button 
                className="bg-blue-300 px-2 py-1 rounded hover:bg-blue-400 cursor-pointer max-w-[150px] self-center"
                onClick={handleAdd}>+</button>
        </div>
    )
}

export default Counter