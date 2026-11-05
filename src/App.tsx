import { useState } from 'react'
import AppHeader from './components/AppHeader'
import BottomNav, { type TabId } from './components/BottomNav'
import CategoryCard from './components/CategoryCard'
import {
  CARD_DESIGN_HEIGHT,
  CARD_DESIGN_WIDTH,
  LOYALTY_DESIGN_HEIGHT,
  LOYALTY_DESIGN_WIDTH,
  categories,
  loyalty,
} from './data/categories'

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')

  return (
    <div className="screen">
      <AppHeader notificationCount={12} />

      <main className="dashboard">
        <h1 className="dashboard__title">Browse Categories</h1>
        <div className="grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
              designWidth={CARD_DESIGN_WIDTH}
              designHeight={CARD_DESIGN_HEIGHT}
            />
          ))}
          <CategoryCard
            {...loyalty}
            className="card--wide"
            designWidth={LOYALTY_DESIGN_WIDTH}
            designHeight={LOYALTY_DESIGN_HEIGHT}
          />
        </div>
      </main>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
