export default function Card({ image, title, description, ctaText, ctaHref }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a className="card-cta" href={ctaHref} target="_blank" rel="noopener noreferrer">
          {ctaText}
        </a>
      </div>
    </div>
  )
}
