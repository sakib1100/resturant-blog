import React from "react";


// Component
import Hero from "../component/Hero"
import HeadlineCards from "../component/HeadlineCards"
import Food from "../component/Food"
import Categories from "../component/Categories"

function HomePage() {
    return(
        <>
            <Hero/>
            <HeadlineCards/>
            <Food/>
            <Categories/>
        </>
    )
}

export default HomePage;