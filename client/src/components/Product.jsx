import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'
import p4 from '../assets/4.png'
const Product = () => {
    return (
        <>
            <div className="flex flex-row justify-center h-20 mt-7" id='product'>
                <div className="flex">
                    <h2 className="text-center text-4xl font-bold">Our Products</h2>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-10 md:px-10 flex flex-col md:flex-row justify gap-7 items-center text-sm md:text-base">

                <div className="flex flex-col justify-center">
                    <img src={p1} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Agarbathi</h2>
                    <p className='text-center'> Rs. 250</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p2} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Kalash</h2>
                    <p className='text-center'> Rs. 400</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p3} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Diyas</h2>
                    <p className='text-center'> Rs. 100</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p4} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Idols</h2>
                    <p className='text-center'> Rs. 500</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

            </div>
             <div className="max-w-7xl mx-auto px-4 mb-10 md:px-10 flex flex-col md:flex-row justify gap-7 items-center text-sm md:text-base">

                <div className="flex flex-col justify-center">
                    <img src={p1} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Panchapatra </h2>
                    <p className='text-center'> Rs. 800</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p2} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Camphors</h2>
                    <p className='text-center'> Rs. 70</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p3} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Turmeric</h2>
                    <p className='text-center'> Rs. 85</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

                <div className="flex flex-col justify-center">
                    <img src={p4} alt="" width={300} height={150} />
                    <h2 className='text-center font-bold'>Bell </h2>
                    <p className='text-center'> Rs. 350</p>
                    <button className='bg-red-600 text-white p-1 rounded'>Order Now</button>
                </div>

            </div>

        </>
    )
}
export default Product