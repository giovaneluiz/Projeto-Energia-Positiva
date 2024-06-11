export type CardType = {
  tag: string
  title: string
  description: string
}
export const Card = ({ tag, title, description }: CardType) => {
  return (
    <div className="card">
      <span>{tag}</span>
      <h3>{title}</h3>
      <a href="#" className="btn-card">{description} </a>
    </div>
  )
}