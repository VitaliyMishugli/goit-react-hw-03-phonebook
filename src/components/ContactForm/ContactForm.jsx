import React from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormContainer, InputAndLabelContainer, InputsContainer, ErrorText } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{ message}</ErrorText>}
    />
  )
}
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  }

  contactId = nanoid();
  inputNameId = nanoid();
  inputNumberId = nanoid();

  render() {
    const initialValues = {
      name: '',
      number: ''
    }
    const handleSubmit = (values, { resetForm }) => {
      this.props.onSubmit(values);
      resetForm();
    }
    return (
      <FormContainer >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <InputsContainer>
              <InputAndLabelContainer>
                <label htmlFor={this.inputNameId}>Name</label>
                <Field
                  id={this.inputNameId}
                  autoComplete="off"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  // value={this.state.name}
                  // onChange={this.handleChange}
                  // required
                />
                <FormError name='name' />
              </InputAndLabelContainer>

              <InputAndLabelContainer>
                <label htmlFor={this.inputNumberId}>Number</label>
                <Field
                  id={this.inputNumberId}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  // value={this.state.number}
                  // onChange={this.handleChange}
                  // required
                />
                <FormError name='number' />
              </InputAndLabelContainer>
            </InputsContainer>
            <button type='submit'>Add contact</button>
          </Form>
        </Formik>
      </FormContainer>
    )
  }
}