"use client";

import * as React from "react";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as" | "onClick" | "onMouseEnter" | "onTouchStart"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLinkComposed(props, ref) {
    const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } = props;

    // Only pass child if not already an anchor to avoid nested <a>
    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
        {...other}
        // If the component is Anchor, don't wrap in another anchor
      />
    );
  },
);

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href" | "legacyBehavior"> &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = "active",
    as,
    className: classNameProps,
    href,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    // eslint-disable-next-line unused-imports/no-unused-vars
    role, // Link don't have roles.
    scroll,
    shallow,
    sx,
    ...other
  } = props;

  const routerPathname = usePathname();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: ((pathname && pathname.length > 2) || routerPathname === pathname) && activeClassName,
  });

  const isExternal = typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  if (isExternal) {
    // External links should always use <a>
    return <Anchor className={className} href={href} ref={ref} sx={sx} {...other} />;
  }

  const linkAs = linkAsProp || as;
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };

  if (noLinkStyle) {
    // For internal links, use NextLink directly, passing all props
    return (
      <NextLink className={className} href={href} ref={ref} {...nextjsProps} {...other}>
        {props.children}
      </NextLink>
    );
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      className={className}
      ref={ref}
      sx={{ ...sx, "&:hover": { color: "primary.light" } }}
      underline="hover"
      {...nextjsProps}
      {...other}
    />
  );
});
