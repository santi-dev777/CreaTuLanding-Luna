function ItemListContainer({text}) {
    return (
        <div className="flex justify-center items-center bg-gray-300 h-64 rounded-3xl ">
            <h2 className="text-2xl text-black">{text}</h2>
        </div>
    )
}

export default ItemListContainer