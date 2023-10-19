import { ContactsList, ContactsItem, Box, ContactsLink } from "./Contacts.styled"

export const Contacts = () => {
    
    return (
        <Box>
            <ContactsList>
                <ContactsItem>
                    <ContactsLink href="https://maps.app.goo.gl/JiVWbY7LrwSrAAdD7" target="_blank" rel="noopener nofollow">Kryvyi Rih, st. Nova, 1</ContactsLink>
                </ContactsItem>
                <ContactsItem>
                    <ContactsLink href="mailto:info@workkava.com" rel="noopener nofollow">info@workkava.com</ContactsLink>
                </ContactsItem>
                <ContactsItem>
                    <ContactsLink href="tel:+380970000000" rel="noopener nofollow">+38 (097) 000 00 00</ContactsLink>
                </ContactsItem>
            </ContactsList>
        </Box>
    )
}