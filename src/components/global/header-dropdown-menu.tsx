"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode, useState } from "react";
import links from "@/data/links/menu-links.json";
import Link from "next/link";

export default function HeaderDropDownMenu({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 p-5 mt-5">
        <DropdownMenuGroup>
          {links.map((link, i) => (
            <DropdownMenuSub key={i}>
              <DropdownMenuSubTrigger>
                <span>{link.title}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {link.submenu?.map((submenu, i) => (
                    <DropdownMenuItem onClick={() => setIsOpen(false)} key={i}>
                      <Link href={"/p/" + submenu.slug}>{submenu.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
