import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle.js";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Nilton Escame</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Certificado como desenvolvedor pela IROMHACK, tenho conhecimentos em
            desenvolvimento Web (React, Next, Adonis, Express, JS, CSS3,
            Bootstrap e outros) e mobile.
          </Intro>
          <Link href='projects'>
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src='/images/myAvatar.png' alt='logo' />
        </Logo>
      </Content>
    </Container>
  );
}

