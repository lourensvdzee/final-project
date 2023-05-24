import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper, Title } from "./HeaderStyles";

const Header = () => {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "black" }}>
      <HeaderWrapper>
        <Image
          src="/durable-icon.png"
          alt="Durable logo"
          width={50}
          height={50}
        />
        <Title className="link-text">Durable</Title>
      </HeaderWrapper>
    </Link>
  );
};

export default Header;
