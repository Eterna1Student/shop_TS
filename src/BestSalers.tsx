import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router";

export type ProductType ={
    _id: string
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    createdAt: string
    updatedAt: string
    __v: number
}

export const BestSellers = () => {

    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products")
            .then((res) => {
                const products = res.data;
                setProducts(products)
            });
    }, []);

    return (
        <div className='cards'>
            {
                products.map((card) => {
                    return (
                        <div className="card" key={card.id}>
                            <img src={card.image} alt="img"/>
                            <h4>{card.title}</h4>
                            <p className="price">${card.price}</p>
                            {/*<button>Show more</button>*/}
                            <Link to={`/product/${card.id}`}>Show more</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
