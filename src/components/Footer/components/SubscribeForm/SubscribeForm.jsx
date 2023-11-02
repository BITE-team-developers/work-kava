import { useForm } from 'react-hook-form';
import { EmailRegex } from 'utils/GlobalUtils';
import { FooterButton } from 'styles/buttonStyles';
import { FormInput, FormBox, FormTitle} from './SubscribeForm.styled';
import { ErrorText } from 'components/BookForm/BookForm.styled';
import { Confirm } from 'notiflix';

export const SubscribeForm = ({ action }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data.email);
        reset()

        Confirm.show(
            'Subscription Successful!', 
            'Thank you for subscribing.',
            'Ok',
        );
    };
    
    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>Subscribe to the newsletter</FormTitle>
                <FormBox>
                    <FormInput type="text"
                        {...register('email', {
                        required: {
                            value: true,
                            message: 'Please enter your email address',
                        },
                        pattern: {
                            value: EmailRegex,
                            message: 'Invalid email address',
                        },
                        })}
                        placeholder="Enter your e-mail"
                    />
                    {errors.email?.message && 
                        (
                            <ErrorText> {errors.email?.message} </ErrorText>
                        )
                    }
                    <FooterButton type="submit" action={action} title={'Subscribe'} >Subscribe</FooterButton>
                </FormBox>
            </form>     
        
    );
    
};