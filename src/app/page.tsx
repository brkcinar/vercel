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
  const [lines, setLines] = useState([]); // Satırları tutacak
  const maxCharsPerLine = 50; // Bir satırda gösterilecek maksimum karakter sayısı

  useEffect(() => {
    let index = 0;
    let currentLine = "";

    const interval = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText[index];
        currentLine += char;

        if (currentLine.length >= maxCharsPerLine || index === fullText.length - 1) {
          // Satır tamamlandığında ekle
          setLines((prevLines) => [...prevLines, currentLine]);
          currentLine = ""; // Yeni satır için sıfırla
        }

        index++;
      } else {
        clearInterval(interval); // Animasyon tamamlandığında durdur
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
        direction="column"
        alignItems="flex-start" // Soldan başlama
        gap="12"
        style={{
          marginTop: "30px",
          textAlign: "left",
        }}
      >
        {/* Yazı */}
        {lines.map((line, index) => (
          <Heading
            key={index}
            wrap="balance"
            variant="display-strong-xs"
            style={{
              fontFamily: "monospace",
              color: "#FFFFFF",
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
          >
            {line}
          </Heading>
        ))}
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
