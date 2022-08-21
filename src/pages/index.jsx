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
            Graduado em Sistemas de Informação, tenho experiência em
            desenvolvimento Web (React, Asp, JS e outros), mobile e criação de
            conteúdo para o YouTube.
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

