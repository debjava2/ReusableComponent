import React from 'react'
import  '../form.css'
import Button from './Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues= {
    name:'',
    email:'',
    channel:''
}

const onSubmit=values=>{
    console.log('form values :' ,values)
}

const validate=values=>{
    let errors={};
    if(!values.name){
        errors.name='Required';
    }
    if(!values.email){
        errors.email='Required';
    }
   else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    {
    errors.email='invalid email';
    }
    if(!values.channel){
        errors.channel='Required';
    }

    return errors
}

//The validation can also be used by using Yup
// const validateSchema=Yup.object({
//     name:Yup.string().required('Required !!'),
//     email:Yup.string().email('Invalid Email').required('Required !!'),
//     channel:Yup.string().required('Required !!')
// })

function FormOld() {
    const formik=useFormik({
        initialValues,
        onSubmit,
        //Commenting Validate for using Yup
        validate
      // validateSchema
    })
   
  return (
    <div className='formCenter'>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' id='name' 

        //Commenting all these and using a single refactering methode 
        // onChange={formik.handleChange} 
        // onBlur={formik.handleBlur} 
        // value={formik.values.name}
        
        //This is the single Refactering method

        {...formik.getFieldProps('name')}
        
        />
        {(formik.errors.name && formik.touched.name) && <div className='erros'>{formik.errors.name}</div>}
        <br></br>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email'  

        // onChange={formik.handleChange}
        //  onBlur={formik.handleBlur}
        // value={formik.values.email}
        {...formik.getFieldProps('email')}
        
        />
         {(formik.errors.email && formik.touched.email) && <div className='erros'>{formik.errors.email}</div>}
        <br></br>
        <label htmlFor='channel'>channel:</label>
        <input type='text' name='channel' id='channel' 
        
        //  onChange={formik.handleChange} 
        //  onBlur={formik.handleBlur}
        // value={formik.values.channel}

        {...formik.getFieldProps('channel')}
        
        />
         {(formik.errors.channel && formik.touched.channel ) &&  <div className='erros'>{formik.errors.channel}</div>}
        <br></br>
        <Button primary>Submit</Button>
        </form>
    </div>
  )
}

export default FormOld