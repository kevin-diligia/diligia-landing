"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Burger, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DiligiaLogo, DiligiaWordmark } from "@/components/brand/DiligiaLogo";
import { siteConfig } from "@/config/site";
import classes from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Box component="header" className={classes.header}>
        <Group justify="space-between" align="center" wrap="nowrap">
          <Link href="/" className={classes.logoLink} onClick={close}>
            <DiligiaLogo size={32} />
            <DiligiaWordmark />
          </Link>

          <Group gap={40} visibleFrom="md" className={classes.navLinks}>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${classes.navLink} ${
                  pathname === link.href ? classes.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            color="white"
            aria-label="Toggle navigation"
          />
        </Group>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="280px"
        hiddenFrom="md"
        styles={{
          content: {
            backgroundColor: siteConfig.colors.navy,
          },
          header: {
            backgroundColor: siteConfig.colors.navy,
          },
        }}
        title={<DiligiaWordmark size="sm" />}
      >
        <Stack gap="lg" mt="md">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${classes.navLink} ${
                pathname === link.href ? classes.active : ""
              }`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
