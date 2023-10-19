import { useForm } from 'react-hook-form';
import { EmailRegex } from 'utils/GlobalUtils';
import { FooterButton } from 'styles/buttonStyles';
import { FormInput, FormBox, FormTitle} from './SubscribeForm.styled';

export const SubscribeForm = ({ action }) => {
    const {
        register,
        handleSubmit,
    } = useForm();

    return(
        <form onSubmit={handleSubmit(data => {
                console.log(data.email);
            })}>
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
                <FooterButton type='onSubmit' action={action}> Subscribe</FooterButton>
            </FormBox>
        </form>
    );
    
};