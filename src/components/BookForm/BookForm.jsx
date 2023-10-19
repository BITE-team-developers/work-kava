import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { HoursSelector } from './HoursSelector';
import { BookType, GetBookPrice } from 'utils/commonUtils';

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

export const BookForm = ({ action, bookType }) => {
  let title = '';

  switch (bookType) {
    case BookType.Workplace:
      title = 'Book a workplace';
      break;
    case BookType.MeetingRoom:
      title = 'Book a meeting room';
      break;
    case BookType.BigHall:
      title = 'Book a big hall';
      break;
    default:
      throw new Error('Not supported book type');
  }

  const defaultPrice = GetBookPrice(bookType);
  const [price, setPrice] = useState(defaultPrice);
  console.log(defaultPrice);

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
        <Svg w={36} h={36} icon="close" />
      </CloseButton>
      <Form
        onSubmit={handleSubmit(data => {
          console.log({ ...data, price });
          action();
        })}
        autoComplete="off"
      >
        <FormTitle>{title}</FormTitle>
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
          <HoursSelector
            bookType={BookType.MeetingRoom}
            onHoursChanges={updatePrice}
          />
        </ContentWrapper>
        <PriceText>Price: {price} ₴</PriceText>

        <FormButton type="submit">Book now</FormButton>
      </Form>
    </ModalContent>
  );
};
