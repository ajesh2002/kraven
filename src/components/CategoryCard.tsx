import ArtLayer from './ArtLayer'
import type { Layer } from '../data/categories'

type Props = {
  title: string
  description: string
  background: string
  layers: Layer[]
  designWidth: number
  designHeight: number
  className?: string
  onSelect?: () => void
}

export default function CategoryCard({
  title,
  description,
  background,
  layers,
  designWidth,
  designHeight,
  className = '',
  onSelect,
}: Props) {
  return (
    <button type="button" className={`card ${className}`} style={{ background }} onClick={onSelect}>
      {layers.map((layer, index) => (
        <ArtLayer key={index} layer={layer} designWidth={designWidth} designHeight={designHeight} />
      ))}
      <span className="card__text">
        <span className="card__title">{title}</span>
        <span className="card__description">{description}</span>
      </span>
    </button>
  )
}
