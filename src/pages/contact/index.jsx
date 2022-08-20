import React from "react";
import { Container, Content } from "../../../styles/styleContact";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import ItemContact from "../../../components/ItemContact";

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact='https://www.linkedin.com/in/nilton-escame/'
        />
        <ItemContact
          IconFa={FaFacebook}
          LinkContact='https://www.facebook.com/profile.php?id=100005693945352'
        />

        <ItemContact IconFa={FaEnvelope} LinkContact='nfescam@gmail.com' />
      </Content>
    </Container>
  );
}
