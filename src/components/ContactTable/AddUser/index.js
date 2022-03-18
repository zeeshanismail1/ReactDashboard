import React, {useState} from 'react'
import Roles from '../../DropDown'
import { FormButton, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, FormElements, Element, PasswordField } from './SigninStyles'
import {BiShow} from 'react-icons/bi'


const AddUser = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
    return (
            <FormWrap >
                <FormContent>
                    <Form action='#'>
                        <FormH1>Create New User</FormH1>
                        <FormElements>
                            <Element>
                                <FormLabel htmlFor='for'>First Name</FormLabel>
                                <FormInput type='FirstName' placeholder='First Name' required />
                            </Element>
                            <Element>
                                <FormLabel htmlFor='for'>Last Name</FormLabel>
                                <FormInput type='LastName' placeholder='Last Name'  required />
                            </Element>
                        </FormElements>
                        <FormElements>
                            <Element>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' placeholder='......@...'  required />
                            </Element>
                            <Element>
                                <FormLabel htmlFor='for'>Role</FormLabel>
                                <Roles />
                            </Element>
                        </FormElements>
                        <FormElements>
                            <Element>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <PasswordField>
                                    <input type={passwordShown ? "text" : "password"} required />
                                    <BiShow onClick={togglePassword} />
                                </PasswordField>
                            </Element>
                            <Element>
                                <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                                <PasswordField>
                                    <input type={passwordShown ? "text" : "password"} required />
                                    <BiShow onClick={togglePassword} />
                                </PasswordField>
                            </Element>
                        </FormElements>
                        <FormButton to='/' type='submit'>Add User</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
    )
}

export default AddUser



// <FormWrap >
// <FormContent>
//     <Form action='#'>
//         <FormH1>Create New User</FormH1>
//         <FormLabel htmlFor='for'>First Name</FormLabel>
//         <FormInput type='FirstName' required />
//         <FormLabel htmlFor='for'>Last Name</FormLabel>
//         <FormInput type='LastName' required />
//         <FormLabel htmlFor='for'>Email</FormLabel>
//         <FormInput type='email' required />
//         <FormLabel htmlFor='for'>Role</FormLabel>
//         <FormInput type='role' required />
//         <FormLabel htmlFor='for'>Password</FormLabel>
//         <FormInput type={passwordShown ? "text" : "password"} required />
//         <FormButton to='/' type='submit'>Add User</FormButton>
//     </Form>
// </FormContent>
// </FormWrap>