type LinkType = {
  url: string;
  label: string;
};

type NavItemType = {
  links: LinkType[];
  label: string;
};

export default function NavItem({ links, label }: NavItemType) {
  return (
    <li className="group relative">
      <button className="text-white font-semibold p-2">
        {label || "Label"}
      </button>
      <div
        className={`absolute hidden bg-white border border-gray-300 rounded-md w-60 max-h-96 py-2 group-hover:block`}
      >
        <ul
          role="menu"
          data-role="popup"
          aria-hidden="false"
          className="leading-6 w-full"
        >
          {links?.map((item, key) => (
            <li role="menuitem" key={key} className="w-full">
              <a href={item.url} className="k-link k-menu-link w-full">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
