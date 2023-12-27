import "./style.css";
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-maxPrimaryPageWidth trending">
      {children}
    </section>
  );
}
