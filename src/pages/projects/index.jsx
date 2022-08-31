import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Ul,
  Li,
  TitleProject,
  Url,
  Created_at,
} from "../../../styles/styleProjects";

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/nfescame/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          console.log(data);
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item) => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <a
                target='_blank'
                rel='noreferrer'
                href={item.html_url}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                URL: {item.url}
              </a>
              <Created_at>
                Data Criação:{" "}
                {Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
