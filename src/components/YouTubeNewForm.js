import React from 'react'
import  '../form.css'
import Button from './Button'
import { Formik ,Field ,ErrorMessage,Form,FieldArray,FastField} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues= {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumber:['',''],
    phNumbers:['']
}

const onSubmit=values=>{
    console.log('form values :' ,values)
}
/**
 * 
 * @param {*} values 
 * Field Level Error
 */

const validateComments=value=>{
    let error
    if(!value)
    {
        error='!!!!Required'
    }
    return error;
}

/**
 * Field Level Error Ends
 */
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
    if(!values.address){
        errors.address='Required';
    }

    return errors
}

function YouTubeNewForm() {
  // const formik=useFormik({
    //     initialValues,
    //     onSubmit,
    //     //Commenting Validate for using Yup
    //     validate
    //   // validateSchema
    // })
   
    return (
        <Formik initialValues={initialValues} 
        validate={validate} onSubmit={onSubmit} 

        //On Required Ment use this 
        // validateOnChange={false}
        // validateOnBlur={false}
        
        >
        <div className='formCenter'>
            <Form>
            <label htmlFor='name'>Name:</label>
            <Field type='text' name='name' id='name' 
    
            //Commenting all these and using a single refactering methode 
            // onChange={formik.handleChange} 
            // onBlur={formik.handleBlur} 
            // value={formik.values.name}
            
            //This is the single Refactering method
    
           
            
            />
            
            {/* {(formik.errors.name && formik.touched.name) 
            && <div className='erros'>{formik.errors.name}</div>} */}       
            <ErrorMessage name='name'>
            {errorMsg=><div className='erros'>{errorMsg}</div>}
            </ErrorMessage>
            <br></br>
            <label htmlFor='email'>Email:</label>
            <Field type='email' name='email' id='email'  
            // onChange={formik.handleChange}
            //  onBlur={formik.handleBlur}
            // value={formik.values.email}
            />
             {/* {(formik.errors.email && formik.touched.email) && 
             <div className='erros'>{formik.errors.email}</div>} */}
             <ErrorMessage name='email'>
             {errorMsg=><div className='erros'>{errorMsg}</div>}
             </ErrorMessage>
            <br></br>
            <label htmlFor='channel'>channel:</label>
            <Field type='text' name='channel' id='channel' 
            //  onChange={formik.handleChange} 
            //  onBlur={formik.handleBlur}
            // value={formik.values.channel}            
            />
             {/* {(formik.errors.channel && formik.touched.channel ) && 
              <div className='erros'>{formik.errors.channel}</div>} */}
              <ErrorMessage name='channel'>
                {errorMsg=><div className='erros'>{errorMsg}</div>}
              </ErrorMessage>
            <br></br>
           
            <label htmlFor='comments'>comments:</label>
            <br></br>
            <Field  as='textarea' id='comments' name='comments' validate={validateComments}/>
            <ErrorMessage name='comments' component={TextError}/>
            <br></br>
            <label htmlFor='address'>Address:</label>
            <FastField name='address'>
                {props=>{
                   
                    const{form,field,meta}=props
                    console.log(props);
                    return (
                        <div>
                            <input type='text' name='address' {...field} />
                            <ErrorMessage name='address'>
                                hiiiiiii
                            {meta.touched && meta.error ? <div>{meta.error}</div>: null}
                            </ErrorMessage>
                        </div>
                    )
                }}
            </FastField>
            <br></br>
            <label htmlFor='channel'>facebook:</label>
            <Field type='text' name='social.facebook' id='facebook'/>
            <ErrorMessage name='social'/>
            <br></br>
            <label htmlFor='twitter'>twitter:</label>
            <Field type='text' name='social.twitter' id='twitter'/>
            <br></br>
            <label htmlFor='primaryPh'>Primary PhoneNumber :</label>
            <Field type='text' name='phoneNumber[0]' id='channel' />
            <br></br>
            <label htmlFor='secondaryPh'>Secondary PhoneNumber :</label>
            <Field type='text' name='phoneNumber[1]' id='channel' />
            <br></br>
            <label htmlFor='secondaryPh'>List of PhoneNumber :</label>
            <FieldArray>
                {
                        fieldArrayProps=>{
                          
                           const{push,remove,form}=fieldArrayProps;
                           const{values}=form;
                           const{phNumbers}=values
                           return (
                            <div>
                                {
                                    phNumbers.map((phNumber,index)=>{
                                        <div key={index}>
                                            <Field name={phNumbers[index]}/>
                                        </div>
                                    })
                                }
                             </div>  
                           )
                }
            }
            </FieldArray>
            <br></br>
            <Button primary>Submit</Button>
            </Form>
        </div>
        </Formik>
    )
}

export default YouTubeNewForm