export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav role="navigation" className="">
      <ul className="flex gap-x-3">{children}</ul>
    </nav>
  );
}
