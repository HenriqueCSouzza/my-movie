import CircleMeter from './components/CircleMeter'

export default function Card({
  title,
  img,
  releaseDate,
  url,
  voteAverage
}: {
  title: string
  img: string
  releaseDate?: string
  url: string
  voteAverage: number
}) {
  return (
    <article
      className="first:ml-6 relative last:mr-6"
      style={{ width: '150px' }}
    >
      <a href={url} title={title}>
        <img
          src={img}
          alt="Trulli"
          width="150px"
          height="225px"
          className="max-w-37 rounded-lg"
        />
      </a>
      <div className="relative -top-5">
        <div className="p-2">
          <CircleMeter percentage={Math.round(voteAverage * 10)} />
        </div>
      </div>
      <div className="p-2 -mt-3">
        {title && (
          <a href={url} title={title}>
            <h3 className="font-bold -mt-4">{title}</h3>
          </a>
        )}
        {releaseDate && <p className="text-black/[.6]">{releaseDate}</p>}
      </div>
    </article>
  )
}
