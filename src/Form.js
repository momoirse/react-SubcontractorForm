import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const SubcontractorForm = () => {
  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #F5F5F5;
    border-radius: 10px;
  `;

  const FormGroup = styled.div`
    margin-bottom: 15px;
    width: 100%;
  `;

  const FormLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  `;

  const FormInput = styled(Field)`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    &:focus {
      border-color: #8E44AD;
    }
  `;

  const FormError = styled(ErrorMessage)`
    font-size: 12px;
    color: red;
    margin-top: 5px;
  `;

  const FormButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #8E44AD;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #7B3F9D;
    }
  `;

  const validationSchema = Yup.object({
    companyName: Yup.string().required('Company name is required'),
    city: Yup.string().required('City is required'),
    municipality: Yup.string().required('Municipality is required'),
    registrationDate: Yup.date().required('Registration date is required'),
    areasOfExpertise: Yup.string().required('Areas of expertise is required'),
    companySize: Yup.string().required('Company size is required'),
    permitClass: Yup.string().required('Permit class is required'),
    maxCapacity: Yup.string().required('Maximum capacity is required'),
    contactName: Yup.string().required('Contact name is required'),
    contactAddress: Yup.string().required('Contact address is required'),
    contactPhone: Yup.string().required('Contact phone is required'),
    contactEmail: Yup.string()
      .email('Invalid email')
      .required('Contact email is required'),
    insurance: Yup.string().required('Insurance is required'),
    bonding: Yup.string().required('Bonding is required'),
    license: Yup.string().required('License is required'),
    references: Yup.string().required('References is required'),
    additionalInfo: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        companyName: '',
        city: '',
        municipality: '',
        registrationDate: '',
        areasOfExpertise: '',
        companySize: '',
        permitClass: '',
        maxCapacity: '',
        contactName: '',
        contactAddress: '',
        contactPhone: '',
        contactEmail: '',
        insurance: '',
        bonding: '',
        license: '',
        references: '',
        additionalInfo: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Send form data to server or do something with it
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <Form>
            <FormGroup>
              <FormLabel htmlFor="companyName">Company Name:</FormLabel>
              <FormInput type="text" name="companyName" />
              <FormError name="companyName" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="city">City:</FormLabel>
              <FormInput type="text" name="city" />
              <FormError name="city" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="municipality">Municipality:</FormLabel>
              <FormInput type="text" name="municipality" />
              <FormError name="municipality" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="registrationDate">
                Registration Date:
              </FormLabel>
              <FormInput type="date" name="registrationDate" />
              <FormError name="registrationDate" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="areasOfExpertise">
                Areas of Expertise:
              </FormLabel>
              <FormInput as="textarea" rows="4" name="areasOfExpertise" />
              <FormError name="areasOfExpertise" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="companySize">Company Size:</FormLabel>
              <FormInput type="text" name="companySize" />
              <FormError name="companySize" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="permitClass">Permit Class:</FormLabel>
              <FormInput type="text" name="permitClass" />
              <FormError name="permitClass" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="maxCapacity">Maximum Capacity:</FormLabel>
              <FormInput type="text" name="maxCapacity" />
              <FormError name="maxCapacity" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="contactName">Contact Name:</FormLabel>
              <FormInput type="text" name="contactName" />
              <FormError name="contactName" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="contactAddress">Contact Address:</FormLabel>
              <FormInput type="text" name="contactAddress" />
              <FormError name="contactAddress" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="contactPhone">Contact Phone:</FormLabel>
              <FormInput type="text" name="contactPhone" />
              <FormError name="contactPhone" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="contactEmail">Contact Email:</FormLabel>
              <FormInput type="email" name="contactEmail" />
              <FormError name="contactEmail" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="insurance">Insurance:</FormLabel>
              <FormInput type="text" name="insurance" />
              <FormError name="insurance" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="bonding">Bonding:</FormLabel>
              <FormInput type="text" name="bonding" />
              <FormError name="bonding" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="license">License:</FormLabel>
              <FormInput type="text" name="license" />
              <FormError name="license" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="references">References:</FormLabel>
              <FormInput as="textarea" rows="4" name="references" />
              <FormError name="references" component="div" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="additionalInfo">Additional Info:</FormLabel>
              <FormInput as="textarea" rows="4" name="additionalInfo" />
              <FormError name="additionalInfo" component="div" />
            </FormGroup>
            <FormButton type="submit" disabled={isSubmitting}>
              Submit
            </FormButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default SubcontractorForm;
