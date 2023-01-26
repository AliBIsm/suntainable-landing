import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, TextArea, Address, ContactusContainer, ContactusWrapper, ContactusTitleWrapper, ContactusTitle, AddressTitle, MultilineInput, BtnSubmit } from './contactusElements';

const Contactus = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }
    return (
        <ContactusContainer>
            <ContactusWrapper>
                <ContactusTitleWrapper>
                    <ContactusTitle>How to reach us</ContactusTitle>
                </ContactusTitleWrapper>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <MultilineInput
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <BtnSubmit type="submit">Submit</BtnSubmit>
                    </FormGroup>
                    <TextArea>

                        <Address>
                            <AddressTitle>Address</AddressTitle>
                            <AddressTitle>123, Solar-Drive
                                L-9123 Solar-City
                                Luxembourg</AddressTitle>
                        </Address>

                        <Address>
                            <AddressTitle>Working hours</AddressTitle>
                            <AddressTitle>Monday-Friday
                                8:00-17:00</AddressTitle>
                            <AddressTitle>Closed on public holidays</AddressTitle>

                        </Address>
                    </TextArea>

                </Form>
            </ContactusWrapper>

        </ContactusContainer>
    )
}

export default Contactus