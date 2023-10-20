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
import { InputMask } from '@react-input/mask';

export const BookForm = ({ action, bookType }) => {
  const { price, title } = GetBookingInfo(bookType);

  const [bookingPrice, setBookingPrice] = useState(price);

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
                },
                pattern: {
                  value: /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+/gm,
                  message: 'The name must contain only letters and spaces'
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
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              as={InputMask}
              type="text"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Please enter correct phone'
                }
                // pattern: {
                //   value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                //   message: 'Please enter correct phone'
                // }
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
