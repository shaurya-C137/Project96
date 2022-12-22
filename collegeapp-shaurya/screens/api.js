import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import axios from 'axios'

class UserForm extends Component {
    componentDidMount(){
        this.renderCollegeList('Middle')
    }
    renderCollegeList=async (name)=>{
        const response = await axios.get(`http://universities.hipolabs.com/search`, {
        params: { name }
      })
      console.log(response)
      {this.props.college(response.data)}
    }
    renderInput(formProps) {
        return (
            <div>
                <label>{formProps.label}</label>
                <input {...formProps.input} type={formProps.type} max={formProps.max} autoComplete='off'
                    label={formProps.label} id={formProps.id}
                    checked={formProps.input.value} />
                {formProps.meta.touched &&
                    (formProps.meta.error && <span>{formProps.meta.error}</span>)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log('formValues', formValues)
        this.props.onSubmit(formValues)
    }


    render() {
        const { handleSubmit } = this.props
        const current = new Date().toISOString().split("T")[0]
        return (
            <div className='container'>
                <div className='row'>
                    <form onSubmit={handleSubmit(this.onSubmit)}
                        className='form'>
                        <div className='row mb-3'>
                            <label className='col-sm-2 col-form-label'>FullName</label>

                            <div className='col-sm-10'>
                                <Field name='fullname' component={this.renderInput}
                                    type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='row mb-3'>

                            <label className='col-sm-2 col-form-label'>Address</label>

                            <div className='col-sm-10'>
                                <Field name='address' component={this.renderInput}
                                    type='text' />
                            </div>
                        </div>
                        <div className='row mb-3'>

                            <label className='col-sm-2 col-form-label'>BirthDate</label>

                            <div className='col-sm-10'>
                                <Field name='birthdate' component={this.renderInput}
                                    type='date'
                                    max={current} />
                            </div>
                        </div>
                        <div className='row mb-3'>

                            <label className='col-sm-2 col-form-label'>Select Your Gender</label>

                            <div className='col-sm-10'>
                                <div className='form-check'>
                                    <label className='form-check-label'>Male</label>
                                    <Field name='gender' component='input' type='radio' value='male'
                                    />{' '}
                                </div>
                                <div className='form-check'>
                                    <label className='form-check-label'>Female</label>
                                    <Field name='gender' component='input' type='radio' value='female'
                                    />{' '}
                                </div>
                                <div className='form-check'>
                                    <label className='form-check-label'>Other</label>
                                    <Field name='gender' component='input' type='radio' value='other'
                                    />{' '}
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='form-check-label'>Select Your Hobbies</label>

                            <div className='col-sm-10'>
                                <div className='form-check'>
                                    <Field name='travelling' component={this.renderInput} type='checkbox' value='travelling'
                                        label='Travelling' />
                                </div>
                                <div className='form-check'>
                                    <Field name='reading' component={this.renderInput} type='checkbox' value='reading'
                                        label='Reading' />
                                </div>
                                <div className='form-check'>
                                    <Field name='gaming' component={this.renderInput} type='checkbox' value='gaming'
                                        label='Gaming' />
                                </div>
                                <div className='form-check'>
                                    <Field name='doodling' component={this.renderInput} type='checkbox' value='doodling'
                                        label='Doodling' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 col-sm-4'>
                                <label>Select College</label>
                                <div className='col-8 col-sm-8'>
                                    <Field name='college' component='select'>
                                        <option value="">Select a college</option>
                                        {this.props.college.map(collegeOption => (
                                            <option value={collegeOption} key={collegeOption}>
                                                {collegeOption}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.fullname) {
        errors.fullname = 'You must enter a fullname'
    }
    if (!formValues.address) {
        errors.address = 'You must enter the address'
    }
    if (!formValues.birthdate) {
        errors.birthdate = 'Please select your date of birth'
    }
    if (!formValues.gender) {
        errors.gender = 'Please select your gender'
    }
    return errors
}

const mapStateToProps=(state)=>{
    return {college:state.users}
}

const formWrapped=reduxForm({
    form: 'userform',
    validate: validate
})(UserForm)

export default UserForm


