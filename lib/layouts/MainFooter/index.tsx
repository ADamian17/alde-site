import React from 'react'
import Link from 'next/link';
import { ActionIcon, Anchor, Container, Group, Text } from '@mantine/core';
import { IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

import classes from './MainFooter.module.scss';

const MainFooter = () => (
  <footer className={classes.footer}>
    <Container className={classes.inner}>
      <Text c="dimmed" size="sm">
        &copy; {new Date().getFullYear()} All rights reserved | Made by <Anchor underline='always' component={Link} c="dimmed" href="https://adonismartin.com" target="_blank" rel="noopener noreferrer">Adonis D. Martin</Anchor>
      </Text>

      <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
        <Anchor underline='never' component={Link} c="dimmed" href="https://www.youtube.com/@aldenisgarcia-w9w" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
        </Anchor>

        <Anchor underline='never' component={Link} c="dimmed" href="https://www.instagram.com/denismdetailing" target="_blank" rel="noopener noreferrer">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Anchor>
      </Group>
    </Container>
  </footer>
);

export default MainFooter
