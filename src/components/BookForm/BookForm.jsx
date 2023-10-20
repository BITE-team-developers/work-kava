import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import sprite from 'images/sprite.svg';
import { HoursSelector } from './HoursSelector';
import { BookType, GetBookingInfo } from 'utils/commonUtils';

import {
  CloseButton,
  ContentWrapper,
  ErrorText,
  Form,
  FormTitle,
  Input,
  InputWrapper,
  PriceText,
  UserIcon
} from './BookForm.styled';

import { ModalContent } from 'components/Modal/Modal.styled';
import { FormButton } from 'styles/buttonStyles';

export const BookForm = ({ action, bookType }) => {
  const { price, title } = GetBookingInfo(bookType);

  const [bookingPrice, setBookingPrice] = useState(price);
  console.log(price);

  const updatePrice = hours => {
    setBookingPrice(hours * price);
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
          console.log({ ...data, bookingPrice });
          action();
        })}
        autoComplete="off"
      >
        <FormTitle>{title}</FormTitle>
        <ContentWrapper>
          <InputWrapper>
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
            <UserIcon
              width={28}
              height={28}
              aria-hidden="true"
              role="presentation"
            >
              <use href={`${sprite}#icon-user`} />
            </UserIcon>
          </InputWrapper>

          {errors.name?.message && (
            <ErrorText>{errors.name?.message}</ErrorText>
          )}
          <InputWrapper>
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
            <UserIcon
              width={28}
              height={28}
              aria-hidden="true"
              role="presentation"
            >
              <use href={`${sprite}#icon-phone`} />
            </UserIcon>
          </InputWrapper>
          {errors.phone?.message && (
            <ErrorText>{errors.phone?.message}</ErrorText>
          )}
          <HoursSelector
            bookType={BookType.MeetingRoom}
            onHoursChanges={updatePrice}
          />
        </ContentWrapper>
        <PriceText>Price: {bookingPrice} ₴</PriceText>

        <FormButton type="submit">Book now</FormButton>
      </Form>
    </ModalContent>
  );
};
