import React from "react";
import Image from "next/image";
import { HeaderWrapper, Title } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="/durable-icon.png"
        alt="Durable logo"
        width={50}
        height={50}
      />
      <Title>Durable</Title>
    </HeaderWrapper>
  );
};

export default Header;
