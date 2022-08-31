import React from "react";
import { Item, Icon, Text } from "./style";

export default function ItemContact({ link, IconFa, LinkContact }) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={link}
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <Item>
        <Icon>
          <IconFa />
        </Icon>
        <Text>{LinkContact}</Text>
      </Item>
    </a>
  );
}
