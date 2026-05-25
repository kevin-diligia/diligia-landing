"use client";

import { MantineProvider } from "@mantine/core";
import { diligiaTheme } from "@/theme/theme";

export function DiligiaMantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={diligiaTheme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
}
