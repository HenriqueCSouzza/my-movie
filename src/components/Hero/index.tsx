import { backgroundImages } from "@/mocks/images";

export default function Hero({ children }: { children: React.ReactNode }) {
  const random = Math.floor(Math.random() * backgroundImages.length);
  const imageBg = backgroundImages[random];
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 41, 47, 0.8) 0%, rgba(25, 41, 47, 0) 100%), url(${imageBg})`,
        minHeight: "300px",
        height: "calc(100vh/2.5)",
        maxHeight: "360px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        color: "#fff",
      }}
      className="w-full max-w-maxPrimaryPageWidth flex h-full content-center items-center justify-center"
    >
      <div
        className="w-full flex-wrap"
        style={{
          padding: "30px 40px",
        }}
      >
        <div className="pb-7">
          <h2 className="text-5xl">Bem-Vindo(a).</h2>
          <h3 className="text-3xl">
            Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
          </h3>
        </div>
        <div className="pt-8">{children}</div>
      </div>
    </section>
  );
}
