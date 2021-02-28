import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Strip from "../Strip/Strip";
import "./Page.scss";
import axios from "axios";

const Page = (props) => {

    const [popularPlaces, setPopularPlaces] = useState([]);
    const [featuredPlaces, setFeaturedPlaces] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // Fetch data for popular places
        (async () =>{
            const response = await axios.get("http://demo3136867.mockable.io/carousel").catch((error) => {
                console.log({message: "Error fetching popular places", error});
            });
            const popularData = response.data.data;
            setPopularPlaces(popularData);
        })();

        // Fetch data for fetured places
        (async () =>{
            const response = await axios.get("http://demo3136867.mockable.io/featured").catch((error) => {
                console.log({message: "Error fetching featured places", error});
            });
            const featuredData = response.data.data;
            setFeaturedPlaces(featuredData);
        })();
        
    }, []);

    const expression = new RegExp(searchText, "i");
    const searchResults = searchText ? popularPlaces.filter((places) => {
        const result = places.title.match(expression);

        return result && result.length && result.index > -1 ? true : false;
    }) : popularPlaces;

    const inputHandler = (event) => {
        if(event && event.target) {
            setSearchText(event.target.value)
        }
    };

    return (<>
            <article className="block-top">
                <div className={"search"}>
                    <input size="50" className="search__input" defaultValue={searchText} onKeyUp={inputHandler} placeholder="Search for..." type="text" />
                </div>
            </article>
            <article className="block-content">
                <div className="content">
                    <section>
                        <h2>Popular around you</h2>
                        <Carousel data={searchResults}/>
                    </section>
                    <section>
                        <h2>Featured</h2>
                        <Strip data={featuredPlaces}/>
                    </section>
                </div>
            </article>
    </>);
}

export default Page;