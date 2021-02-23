import React,{useContext} from 'react'
import { CrudContext } from './CrudContext'

function Crud({data}) {
    const{removeInfo,findItem}=useContext(CrudContext)

    return (
        <li className='list-item'>
        <div>
            <span>{data.accNo}    </span>
            <span>{data.accName    }</span>
            {/* <span>{data.ifsc_code}</span> */}
            <span>  {   data.type}</span>
            <span></span>
            <button onClick={()=>findItem(data.id)}className='btn btn-success mt-3 ml-3'>Edit</button>
            <button onClick={()=>removeInfo(data.id)}className='btn btn-danger  mt-3 ml-3'>Delete</button>
     </div>
        </li>   





        // <table  className='table table-striped'>
        //     <tbody>
        // <tr>
        //     <td>{data.accNo} </td>
        //     <td>{data.accName}</td>
        //     <td><button onClick={()=>findItem(data.id)}className='btn btn-success mt-3 ml-3'>Edit</button></td>
        //     <td><button onClick={()=>removeInfo(data.id)}className='btn btn-danger  mt-3 ml-3'>Delete</button></td>

        // </tr>
        // </tbody>
        // </table> 
         
    )
}

export default Crud
