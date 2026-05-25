"use client";

import Link from "next/link";
import { Anchor, AnchorProps, Button, ButtonProps } from "@mantine/core";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren<
  ButtonProps & {
    href: string;
  }
>;

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button component={Link} href={href} {...props}>
      {children}
    </Button>
  );
}

type LinkAnchorProps = PropsWithChildren<
  AnchorProps & {
    href: string;
  }
>;

export function LinkAnchor({ href, children, ...props }: LinkAnchorProps) {
  return (
    <Anchor component={Link} href={href} {...props}>
      {children}
    </Anchor>
  );
}
