"use client";

import React, { useState, useEffect } from 'react';
import { Heading, Text, Flex, Button, Grid, Icon } from '@/once-ui/components';
import Link from 'next/link';
import Validators from "../components/Validators";

export default function Home() {
  const fullText =
    "Blockchain technology is reshaping financial systems while offering a vision of independence empowered by digital innovation. As a professional validator in this sector, I take pride in ensuring the reliability of networks and contributing to the growth of the ecosystem.";
  const [displayText, setDisplayText] = useState('');

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
        background: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Flex
        as="header"
        fillWidth
        justifyContent="flex-end"
        paddingX="l"
        paddingY="s"
        gap="12"
      >
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

      <div style={{ minHeight: '150px', textAlign: 'center', marginBottom: '20px' }}>
        <Heading
          wrap="balance"
          variant="display-strong-xs"
          style={{
            textAlign: 'center',
            fontFamily: 'monospace',
            color: '#FFFFFF',
            fontSize: '1.5rem',
            lineHeight: '2rem',
          }}
        >
          {displayText}
        </Heading>
      </div>

      <Validators />
    </Flex>
  );
}
