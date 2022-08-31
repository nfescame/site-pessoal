import React from "react";
import { Container, Content } from "../../../styles/styleContact";
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import ItemContact from "../../../components/ItemContact";

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact='https://www.linkedin.com/in/nilton-escame/'
        />

        <ItemContact IconFa={FaEnvelope} LinkContact='nfescame@gmail.com' />
        <ItemContact IconFa={FaPhone} LinkContact='+55 (11)91591-0579' />
      </Content>
    </Container>
  );
}
