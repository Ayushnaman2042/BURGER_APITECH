import React, { useEffect, useState } from 'react';

function Productlist({ product }) {
    const [PRODUCT, setPRODUCT] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [burgerCount, setBurgerCount] = useState(1);
    const fixedBurgerPrice = 5;

    useEffect(() => {
        setPRODUCT(product);
        calculateTotalPrice(product, burgerCount);
    }, [product, burgerCount]);

    const incrementQuantity = (index) => {
        const updatedProduct = [...PRODUCT];
        updatedProduct[index].quantity = (updatedProduct[index].quantity || 0) + 1;
        setPRODUCT(updatedProduct);
        calculateTotalPrice(updatedProduct, burgerCount);
    };

    const decrementQuantity = (index) => {
        const updatedProduct = [...PRODUCT];
        if (updatedProduct[index].quantity > 0) {
            updatedProduct[index].quantity -= 1;
            setPRODUCT(updatedProduct);
            calculateTotalPrice(updatedProduct, burgerCount);
        }
    };

    const calculateTotalPrice = (productList, count) => {
        const total = productList.reduce((sum, product) => {
            return sum + (product.price * (product.quantity || 0));
        }, 0) * count + fixedBurgerPrice * count;
        setTotalPrice(total);
    };

    const renderSlices = (type, color, quantity) => {
        const slices = [];
        for (let i = 0; i < quantity; i++) {
            slices.push(
                <div
                    key={i}
                    style={{
                        width: '100px',
                        height: '10px',
                        backgroundColor: color,
                        margin: '2px auto',
                        border: '1px solid #ccc',
                    }}
                />
            );
        }
        return slices;
    };
    

    return (
        <div className='bg-red-200 p-4'>
            <div className="mt-5 mb-5 text-center">
                <h3>Fixed Burger Price: $5</h3>
                <div
                    style={{
                        width: '100px',
                        height: '0',
                        borderBottom: '50px solid #C4A484',
                        borderLeft: '25px solid transparent',
                        borderRight: '25px solid transparent',
                        margin: '0 auto 10px 340px',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                >
                </div>
            </div>
            {PRODUCT.map((productItem, productIndex) => (
                <div key={productIndex} className='flex flex-wrap justify-evenly mt-5 items-center'>
                    <span className="capitalize w-1/4 text-center">{productItem.type}</span>
                    <div className="flex items-center w-3/4 justify-between">
                        <button 
                            className='bg-red-600 text-yellow-400 rounded-lg h-10 w-10' 
                            onClick={() => decrementQuantity(productIndex)}
                        >
                            -
                        </button>
                        <div>
                            {renderSlices(productItem.type, productItem.color, productItem.quantity || 0)}
                        </div>
                        <button 
                            className='bg-red-600 text-yellow-400 rounded-lg h-10 w-10' 
                            onClick={() => incrementQuantity(productIndex)}
                        >
                            +
                        </button>
                        <span className="w-1/4 text-center">${productItem.price.toFixed(2)}</span>
                        <span className="w-1/4 text-center">Quantity: {productItem.quantity || 0}</span>
                        <span className="w-1/4 text-center">Total: ${(productItem.price * (productItem.quantity || 0)).toFixed(2)}</span>
                    </div>
                </div>
            ))}
            <div
                style={{
                    width: '100px',
                    height: '0',
                    borderTop: '50px solid #C4A484',
                    borderLeft: '25px solid transparent',
                    borderRight: '25px solid transparent',
                    margin: '15px auto 0 340px',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
            </div>
            <div className="mt-5 text-center">
                <div className="flex justify-center items-center mb-5">
                    <button 
                        className='bg-blue-600 text-white rounded-lg h-10 w-10' 
                        onClick={() => setBurgerCount(burgerCount > 1 ? burgerCount - 1 : 1)}
                    >
                        -
                    </button>
                    <span className="mx-3 text-lg">Burgers: {burgerCount}</span>
                    <button 
                        className='bg-blue-600 text-white rounded-lg h-10 w-10' 
                        onClick={() => setBurgerCount(burgerCount + 1)}
                    >
                        +
                    </button>
                </div>
                <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Productlist;
