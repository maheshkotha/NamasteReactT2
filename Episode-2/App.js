import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

/* 
APP Layout
    Header
        Logo
        nav-list
    Body
        Search
        Restaurant Card
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.shutterstock.com/shutterstock/photos/1328492696/display_1500/stock-vector-food-finder-app-logo-design-vector-template-1328492696.jpg" alt="" />
            </div>
            <div className="nav-list">
                <ul>
                    <li>Name</li>
                    <li>About Uz</li>
                    <li>Contat Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {

    // const restaurantApi = 'https://croxyproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    useEffect(() => {
        // fetch(restaurantApi).then((res) => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

        fetch(targetUrl)
            .then(response => {
                console.log(response)
                return response.text()
            })
            .then(data => {
                try {
                    const jsonData = JSON.parse(data);
                    console.log(jsonData);
                } catch (e) {
                    console.error('Parsing error:', e);
                    console.log('Response text:', data);
                }
            })
            .catch(error => console.error('Error:', error));

    },[])

    

    return (
        <div className="body">
            <Search />
            <RestaurantCard />
        </div>
    )
}

const Search = () => {
    return (
        <div className="search">
            <input type="text" />
            <input type="button" value="Search" />
        </div>
    )
}

const RestaurantCard = (props) => {
    const {title, description, price} = props
    return (
        <div className="rest-card">
            <div className="rest-card__image">
                <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/04/Pictures/_ac5ac2aa-7679-11ea-a349-a18bc5ff339a.jpg" alt="" />
            </div>
            <div className="rest-card__details">
                <div className="item-title">{title}</div>
                <div className="item-desc">{description}</div>
                <div className="item-price">{price}</div>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}   

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<AppLayout />)