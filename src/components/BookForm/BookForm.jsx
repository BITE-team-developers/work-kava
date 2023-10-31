import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
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
import { BlueButton } from 'styles/buttonStyles';

export const BookForm = ({ action, bookType }) => {
  const { price, title } = GetBookingInfo(bookType);

  const [phoneNumber, setphoneNumber] = useState('');

  const [bookingPrice, setBookingPrice] = useState(price);

  const updatePrice = hours => {
    setBookingPrice(hours * price);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  return (
    <ModalContent>
      <CloseButton type="button" aria-label="close" onClick={action}>
        <Svg w={36} h={36} icon="close" />
      </CloseButton>
      <Form
        onSubmit={handleSubmit(data => {
          console.log({ ...data, bookType, bookingPrice });
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
            <Controller
              control={control}
              name="phone"
              rules={{
                validate: value => {
                  return value?.length === 19;
                }
              }}
              render={({ field: { ref, ...field } }) => (
                <Input
                  as={IMaskInput}
                  {...field}
                  mask={'+{38} (000) 000-00-00'}
                  placeholder="+38 (___) ___ - __ - __"
                  value={phoneNumber}
                  onAccept={(value, mask) => setphoneNumber(value)}
                />
              )}
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
          {errors.phone && <ErrorText>Please enter correct phone</ErrorText>}
          <HoursSelector
            bookType={BookType.MeetingRoom}
            onHoursChanges={updatePrice}
          />
        </ContentWrapper>
        <PriceText>Price: {bookingPrice} ₴</PriceText>

        <BlueButton type="submit">Book now</BlueButton>
      </Form>
    </ModalContent>
  );
};
