import Nav, { NavItem } from "@/components/Nav";

const LeftItem = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <a href="/">
        <img src="/images/blue_short.svg" alt="logo" width="154" height={20} />
      </a>
      <Nav>
        <NavItem
          label="Filmes"
          links={[
            {
              url: "/movie",
              label: "Populares",
            },
            {
              url: "/movies",
              label: "Em cartaz",
            },
            {
              url: "/movies",
              label: "Proximas estreias",
            },
            {
              url: "/movies",
              label: "Mais bem avaliados",
            },
          ]}
        />
      </Nav>
    </div>
  );
};

export default function AppBar() {
  return (
    <header className="w-full flex items-center justify-center bg-tmdbDarkBlue h-16">
      <div className="w-full flex max-w-maxPrimaryPageWidth">
        <LeftItem />
      </div>
    </header>
  );
}
