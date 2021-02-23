import React,{useContext} from 'react'
import Crud from './Crud'
import { CrudContext } from './CrudContext'

const crudL=()=> {
    const{datas}=useContext(CrudContext)
    return (
        <div>
            {
                datas.length?(
                    <ul className='list'>
                        {
                            datas.map(data=>{
                                return <Crud data={data} key={data.id}/>
                            })
                        }
                    </ul>
                ):<h3>No Information to display</h3>
            }
        </div>
    )
}

export default crudL
