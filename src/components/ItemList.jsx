import Item from "./Item"

function ItemList({items}) {
    return (
        <>

        <div className="grid grid-cols-4 gap-3">
            {items.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}

export default ItemList
