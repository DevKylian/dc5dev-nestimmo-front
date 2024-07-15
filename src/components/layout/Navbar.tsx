import Link from "next/link";
import DrawerPost from "../post/DrawerPost";
import NavigationMenuDemo from "@/components/globals/Navbar";

const Navbar = () => {
    return ( 
        <nav className="flex justify-between p-5">
            <NavigationMenuDemo/>
        </nav>
     );
}
 
export default Navbar;