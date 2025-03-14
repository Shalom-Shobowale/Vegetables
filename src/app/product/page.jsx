import Circles from "../../components/Circles";
import Filter from "../../components/Filter";
import Landing2 from "../../components/Landing2";

export default function Product(){
    return(
       <>
        <Landing2 image="url(about.png)"  name="Home Products" title="PRODUCTS"/>
        <Filter />
        <Circles />
       </>
    )
}