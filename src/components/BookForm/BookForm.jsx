import { useForm } from 'react-hook-form';
import { useState } from 'react';

import {
  Accent,
  ContentWrapper,
  ErrorText,
  Form,
  FormHolder,
  FormTitle,
  Input
} from './BookForm.styled';
import { HoursSelector } from './HoursSelector';

export const BookForm = ({ action }) => {
  const defaultPrice = 50;
  const [price, setPrice] = useState(defaultPrice);

  const updatePrice = hours => {
    setPrice(hours * defaultPrice);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    // <FormHolder>
    <Form
      onSubmit={handleSubmit(data => {
        console.log({ ...data, price });
        // action();
      })}
    >
      <FormTitle>Book a workplace</FormTitle>
      <ContentWrapper>
        <Input
          type="text"
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter your name'
            }
          })}
          placeholder="Enter your name"
        />

        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}

        <Input
          type="text"
          {...register('phone', {
            required: {
              value: true,
              message: 'Please enter correct phone'
            }
          })}
          placeholder="+38 (___) ___ - __ - __"
        />
        {errors.phone?.message && (
          <ErrorText>{errors.phone?.message}</ErrorText>
        )}
        <HoursSelector onHoursChanges={updatePrice} />
        <p>Price: {price} ₴</p>
      </ContentWrapper>
      <button type="submit">Book now</button>
    </Form>
    // </FormHolder>
  );
};
