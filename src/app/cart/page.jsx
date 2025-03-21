import Landing2 from "../../components/Landing2";
import Cart from '../../components/Cart'

export default function CartPage(){
    return(
        <>
            <Landing2 image="url(about.png)" name="Home Cart" title="MY CART"/>
            <div className="w-[90%] mx-auto bg-background flex justify-end py-5 px-10 my-16">
                <div className="w-[58%] flex justify-between font-medium text-sm text-white">
                    <p>Product name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>
            <Cart />
        </>
    )
}