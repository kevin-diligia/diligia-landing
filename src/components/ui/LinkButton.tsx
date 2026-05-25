"use client";

import Link from "next/link";
import { Anchor, AnchorProps, Button, ButtonProps } from "@mantine/core";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren<
  ButtonProps & {
    href: string;
  }
>;

function isPrimaryButton(variant: ButtonProps["variant"]) {
  return !variant || variant === "filled" || variant === "gradient";
}

export function LinkButton({
  href,
  children,
  variant,
  className,
  ...props
}: LinkButtonProps) {
  const classes = [
    isPrimaryButton(variant) ? "glare-button" : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Button component={Link} href={href} variant={variant} className={classes || undefined} {...props}>
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
