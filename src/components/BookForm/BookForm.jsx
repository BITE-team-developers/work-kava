import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { HoursSelector } from './HoursSelector';

import {
  CloseButton,
  ContentWrapper,
  ErrorText,
  Form,
  FormTitle,
  Input,
  PriceText
} from './BookForm.styled';

import { ModalContent } from 'components/Modal/Modal.styled';
import { FormButton } from 'styles/buttonStyles';

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
    <ModalContent>
      <CloseButton type="button" onClick={action}>
        <Svg w={32} h={32} icon="close" />
      </CloseButton>
      <Form
        onSubmit={handleSubmit(data => {
          console.log({ ...data, price });
          action();
        })}
        autoComplete="off"
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

          {errors.name?.message && (
            <ErrorText>{errors.name?.message}</ErrorText>
          )}

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
        </ContentWrapper>
        <PriceText>Price: {price} ₴</PriceText>

        <FormButton type="submit">Book now</FormButton>
      </Form>
    </ModalContent>
  );
};
