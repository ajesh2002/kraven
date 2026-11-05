import type { CSSProperties } from 'react'
import type { Layer } from '../data/categories'

type Props = {
  layer: Layer
  designWidth: number
  designHeight: number
}

// Positions a decorative layer against the card's right edge, sized in
// container-height units so the artwork grows and shrinks with the card height.
export default function ArtLayer({ layer, designWidth, designHeight }: Props) {
  const unit = (px: number) => `${(px / designHeight) * 100}cqh`
  const box: CSSProperties = {
    right: unit(designWidth - layer.x - layer.w),
    top: unit(layer.y),
    width: unit(layer.w),
    height: unit(layer.h),
  }

  if (!layer.crop) {
    return <img className="art" style={box} src={layer.src} alt="" />
  }

  const { left, top, width, height } = layer.crop
  return (
    <span className="art art--crop" style={box}>
      <img
        src={layer.src}
        alt=""
        style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
      />
    </span>
  )
}
