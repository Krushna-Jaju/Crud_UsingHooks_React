import React,{useState,useEffect, useContext} from 'react'
import { CrudContext } from './CrudContext'

const CrudForm=() =>
{
const {addInfo,clearData,editInfo,editItem}=useContext(CrudContext)
const [accName, setAccName] = useState('')
const [accNo, setAccNo] = useState('')
// const [ifsc_Code, setIfsc_Code] = useState('')
const [type, setType] = useState('')


useEffect(()=>{
    if(editItem){
        return setAccNo(editItem.accNo), 
        setAccName(editItem.accName),
        // setIfsc_Code(editItem.ifsc_Code),
        setType(editItem.type)
    }
    else{
     setAccNo('')
    setAccName('')
    // setIfsc_Code('')
    setType('')
    }
},[editItem])

const handleSubmit=(e)=>{
    e.preventDefault()
    if(!editItem){
        addInfo(accNo,accName,type)
        setAccNo('')
        setAccName('')
        // setIfsc_Code('')
        setType('')
    }
else{
editInfo(accNo,accName,type,editItem.id)
setAccNo('')
setAccName('')
// setIfsc_Code('')
setType('')
}
} 

const handleNumber=(e)=>{
    // setAccName(e.target.value)
    setAccNo(e.target.value)

}
const handleName=(e)=>{
    setAccName(e.target.value)
}

const handleType=e=>{
    setType(e.target.value)
}

// const handleCode=e=>{
//     setIfsc_Code(e.target.value)
// }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label>Account Number:</label>
                    <input type='number' value={accNo} onChange={handleNumber} className='form-control'/>
             </div>
             {/* <div className="form-group row">
                    <label>IFSC Code:</label>
                    <input type='number' value={ifsc_Code} onChange={handleCode}className='form-control'/>
             </div> */}
             <div className="form-group row">
                    <label>Account Holder Name:</label>
                    <input type='text'  value={accName} onChange={handleName} className='form-control'/>
             </div>
             <div className="form-group row">
                    <label>Account Type:</label>
                    <input type='text'   value={type} onChange={handleType}className='form-control'/>
             </div>

            <div>
                 <button type='submit' className='btn btn-primary ml-5'>{editItem ? 'UpdateInfo' : 'AddInfo'}</button>
                 <button type='reset' className='btn btn-success ml-3' onClick={clearData}>Clear Info</button>
             </div>
            </form> 
        </div>
    )
}

export default CrudForm
