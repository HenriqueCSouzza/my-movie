type link = {
  url: string
  label: string
}
const ItemNav = ({ title, linkList }: { title: string; linkList: link[] }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg text-white font-semibold">{title}</h3>
      {linkList.map((item, key) => (
        <a key={key} className="text-base text-white" href={item.url}>
          {item.label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center bg-tmdbDarkBlue h-80 ">
      <div className="w-full flex items-center justify-center gap-5">
        <div className="h-full self-start">
          <img src="/images/blue_square_2.svg" width="130px" height="94px" />
        </div>
        <ItemNav
          title="O BÁSICO"
          linkList={[
            { label: 'Sobre o TMDB', url: '' },
            { label: 'Contate-nos', url: '' },
            { label: 'Suporte', url: '' },
            { label: 'API', url: '' },
            { label: 'Status do Sistema', url: '' }
          ]}
        />
        <ItemNav
          title="ENVOLVA-SE"
          linkList={[
            { label: 'Sobre o TMDB', url: '' },
            { label: 'Contate-nos', url: '' },
            { label: 'Suporte', url: '' },
            { label: 'API', url: '' },
            { label: 'Status do Sistema', url: '' }
          ]}
        />
        <ItemNav
          title="COMUNIDADE"
          linkList={[
            { label: 'Sobre o TMDB', url: '' },
            { label: 'Contate-nos', url: '' },
            { label: 'Suporte', url: '' },
            { label: 'API', url: '' },
            { label: 'Status do Sistema', url: '' }
          ]}
        />
        <ItemNav
          title="LEGALIDADE"
          linkList={[
            { label: 'Sobre o TMDB', url: '' },
            { label: 'Contate-nos', url: '' },
            { label: 'Suporte', url: '' },
            { label: 'API', url: '' },
            { label: 'Status do Sistema', url: '' }
          ]}
        />
      </div>
    </footer>
  )
}
