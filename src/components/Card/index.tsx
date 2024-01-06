import CircleMeter from './components/CircleMeter'

export default function Card({
  title,
  img,
  releaseDate
}: {
  title: string
  img: string
  releaseDate?: string
}) {
  return (
    <article className="first:ml-4">
      <a href="" title={title}>
        <img
          src={img}
          alt="Trulli"
          width="150px"
          height="225px"
          className="max-w-37 rounded-lg"
        />
      </a>
      <CircleMeter percentage={50} />
      {title && <h3>{title}</h3>}
      {releaseDate && <p>{releaseDate}</p>}
    </article>
  )
}
