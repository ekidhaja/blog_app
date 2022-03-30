import { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    //fetch categories
    useEffect(() => {
        getCategories().then((newCategories) => {
        setCategories(newCategories);
        });
    }, []);

    return ( 
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                {/*show app name / logo */}
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            Blog App
                        </span>
                    </Link>
                </div>

                {/*show nav links */}
                <div className="hidden md:float-left md:contents">
                {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}
 
export default Header;