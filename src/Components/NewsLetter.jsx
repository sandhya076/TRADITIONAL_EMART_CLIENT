import {React , useRef  }from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import emailjs from '@emailjs/browser';

const Container = styled.div`
  height: 50vh;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 40px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(sendEmail)

    emailjs.sendForm('service_cveavvl', 'template_dn9wugh', form.current, 'user_c5KgfPjjuJcFrtnlT86xB')
      .then((result) => {
          alert("Message Sent Successfully.......")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button ref={form} onClick={(e)=>sendEmail(e)} >
          <SendIcon  />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
