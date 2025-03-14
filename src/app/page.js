import Grid from "../components/Grid"
import Landing from "../components/Landing"
import Product from "../components/Product"
import Card from "../components/Card"
import Services from "../components/Services"
import Deal from "../components/Deal"
import Testimony from "../components/Testimony"
import Testcard from "../components/TestCard"
import product from "./product.json"
import Popup from "../components/Popup"
export default function Page(){
    return(
        <>
            <Landing description="100% FRESH & ORGANIC FOODS" bgImage= "url(bgImage.png)"/>
            <Services />
            <Grid />
            <Product />
            <Card items={product} />
            <Deal />
            <Testimony />
            <Testcard />
        </>
    )
}