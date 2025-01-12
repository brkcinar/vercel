"use client";

import React, { useState, useEffect } from "react";
import { Heading, Flex, Button, Grid, Icon } from "@/once-ui/components";
import Link from "next/link";
import Validators from "../components/Validators";

export default function Home() {
  const links = [
    { href: "http://explorer.hibunode.com", title: "Explorer", description: "" },
    { href: "http://www.hibunode.com/", title: "Services", description: "" },
    { href: "http://www.hibunode.com/", title: "Introductions", description: "" },
  ];

  const fullText =
    "Blockchain technology is reshaping financial systems while offering a vision of independence empowered by digital innovation. As a professional validator in this sector, I take pride in ensuring the reliability of networks and contributing to the growth of the ecosystem.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
      style={{
        background: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Sosyal medya butonları */}
      <Flex as="header" fillWidth justifyContent="flex-end" paddingX="l" paddingY="s" gap="12">
        <Button href="https://github.com/brkcinar" prefixIcon="github" size="l" variant="tertiary">
          GitHub
        </Button>
        <Button href="https://x.com/brkkcinar" prefixIcon="twitter" size="l" variant="tertiary">
          Twitter
        </Button>
        <Button href="https://www.t.me/brkcinar" prefixIcon="telegram" size="l" variant="tertiary">
          Telegram
        </Button>
      </Flex>

      {/* Ana içerik */}
      <Flex
        as="section"
        fillWidth
        maxWidth={68}
        direction="column"
        alignItems="flex-start" // Sola hizalama
        flex={1}
        gap="24"
        style={{ marginTop: "30px" }}
      >
        {/* Yazı */}
        <Heading
          wrap="balance"
          variant="display-strong-xs"
          style={{
            textAlign: "left", // Sol hizalama
            fontFamily: "monospace",
            color: "#FFFFFF",
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          {displayText}
        </Heading>
      </Flex>

      {/* Validators bileşenini ekleme */}
      <Flex fillWidth direction="column" alignItems="center" style={{ marginTop: "40px", padding: "20px" }}>
        <Validators />
      </Flex>

      <Flex
        as="footer"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
        style={{ marginTop: "24px" }}
      >
        <Grid
          radius="l"
          border="neutral-medium"
          borderStyle="solid-1"
          columns="repeat(3, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          fillWidth
        >
          {links.map((link) => (
            <Link target="_blank" style={{ padding: "var(--responsive-space-l)" }} key={link.href} href={link.href}>
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
              </Flex>
            </Link>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
