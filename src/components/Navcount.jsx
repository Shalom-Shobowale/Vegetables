import { IoCart } from "react-icons/io5";
export default function Navcount({ count }) {
  console.log('Navbar count:', count); 
    return(
        <li className="flex items-center">
            <IoCart /> <p className="text-xs">[{count}]</p> 
        </li>
    )
}