"use client";

import React, { useState, useEffect } from "react";
import { Heading, Text, Flex, Button, Grid, Icon } from "@/once-ui/components";
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
        maxWidth="70%"
        direction="row"
        alignItems="center"
        flex={1}
        gap="24"
        style={{ position: "relative", marginTop: "30px" }}
      >
        {/* Logo */}
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          style={{
            position: "absolute",
            top: "10%",
            left: "7%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="/coconode.png"
            alt="My Logo"
            style={{
              width: "300px",
              height: "auto",
            }}
          />
        </Flex>

        {/* Yazı */}
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          style={{
            marginLeft: "25%",
            textAlign: "justify", // Yazının sol ve sağ hizasını sabitler
            height: "120px", // Yazının kapladığı alanı sabit tutmak için
            maxWidth: "70%", // Yazı genişliği sınırlandırıldı
            whiteSpace: "pre-wrap", // Satır sonu ve boşlukları korur
          }}
        >
          <Heading
            wrap="balance"
            variant="display-strong-xs"
            style={{
              fontFamily: "monospace",
              color: "#FFFFFF",
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
          >
            {displayText}
          </Heading>
        </Flex>
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
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    {link.title}
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                {link.description && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                )}
              </Flex>
            </Link>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
