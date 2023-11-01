import React from 'react'
import { useLocation } from 'react-router';

export default function Alternatives() {
  const location = useLocation();
  const data = location.state;
  console.log("data:",data);
  return (
    <div className='container d-flex  justify-content-center'>
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
    
    </tr>
  </thead>
  <tbody>
   {
    data.map((item)=>{
        return(
            <tr>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.category.name}</td>
          </tr>
        );
    })
   }
  </tbody>
</table>
  </div>
  )
}
