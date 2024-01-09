import { backgroundImages } from '@/mocks/images'

export default function Hero({ children }: { children: React.ReactNode }) {
  const random = Math.floor(Math.random() * backgroundImages.length)
  const imageBg = backgroundImages[random]
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 41, 47, 0.8) 0%, rgba(25, 41, 47, 0) 100%), url(${imageBg})`,
        minHeight: '300px'
      }}
      className="w-full max-w-maxPrimaryPageWidth flex h-full content-center items-center justify-center bg-50/50 bg-cover bg-no-repeat text-white max-h-82.5 h-calc-100-2.5"
    >
      <div className="w-full flex-wrap p-30-40">
        <div className="pb-7">
          <h2 className="text-5xl">Bem-Vindo(a).</h2>
          <h3 className="text-3xl">
            Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
          </h3>
        </div>
        <div className="pt-8">{children}</div>
      </div>
    </section>
  )
}
