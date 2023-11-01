import React, { useEffect, useState } from 'react'
import { getProducts } from './Apis/Apis';
import { useNavigate } from 'react-router';
import { useHistory } from 'react-router-dom';
export default function Main() {
    const [results, setResults] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);


    const navigator = useNavigate();

    const navigateToAlternatives = () => {
        debugger
        console.log("Asdads", selectedProduct)
        navigator("/alternatives", { state: selectedProduct });
        // history.push({pathname:"/alternatives",state:results});

    }
    useEffect(() => {
        getProducts().then((data) => {
            setResults(data.data.results);
            console.log('data:', data);
        })
    }, []);

    return (
        <div className='container d-flex  justify-content-center'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Alternatives</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{item.name}</td>
                                    <td>{item.category.name}</td>
                                    <td>
                                        <button onClick={() => {
                                            debugger
                                            console.log(item)
                                            setSelectedProduct(item.alternatives);
                                            navigateToAlternatives()
                                        }} type="button" class="btn btn-primary">Show</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
