import './App.css'
import {Header} from "./Header.tsx";
import {BestSellers} from "./BestSalers.tsx";
import {Route, Routes} from "react-router";
import {Product} from "./Product.tsx";

function App() {
    return (
        <div className='appContainer'>
            <Header />
            <Routes>
                <Route path='/' element={<BestSellers />} />
                <Route path='/product/:productId' element={<Product />} />
            </Routes>
        </div>
    )
}

export default App
