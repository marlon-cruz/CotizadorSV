import './listCaracteristicas.css'

function ListCaracteristicas({
    product = null
}){
  const iterableProduct = Object.entries(product)
  console.log(product)

    return(
        <>
            <div>
                {iterableProduct.map((items, index) =>
                <>
                   <li className='listCaracteristicas' key={index}> <strong>{items[0] }</strong>: { items[1].toString()}</li>
                </>                
                )}    
                 
            </div>            
        </>
    )
}

export default ListCaracteristicas