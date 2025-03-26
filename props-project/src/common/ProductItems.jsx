import Button from "./Button"

function ProductItems({pdata}) {
    let {title, image, price} = pdata
    return (
        <div className='bg-white pb-4'>
            <img src={image} alt="" />
            <h3 className='font-bold text-center py-2'>
                {title}
            </h3>
            <h4 className='font-bold text-center py-2 text-blue-600'> Rs {price} </h4>
            <div className="text-center">
                <Button />
            </div>   
        </div>
    )
}
export {ProductItems}