import Link from "next/link";
import Logo from "./logo";
import SearchBtn from "./search-btn";
import { Button } from "../ui/button";

type Props = {};

interface LinkType {
  name: string;
  href: string;
}

const links: LinkType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/",
  },
  {
    name: "Articles",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

const Header = (props: Props) => {
  return (
    <header>
      <div className="bg-primary w-full h-14"></div>
      <div className="flex justify-between items-center py-5 px-10 border-b">
        <div>
          <figure className="w-[50px]">
            <Logo />
          </figure>
        </div>
        <nav>
          <ul className="flex">
            {links.map((link: LinkType, i: number) => (
              <li key={i}>
                <Link className="px-3 text-lg hover:underline" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <SearchBtn />
          <Button>Enquiry</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
