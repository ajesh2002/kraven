import homeIcon from '../assets/tab-home.svg'
import walletIcon from '../assets/tab-wallet.svg'
import cartIcon from '../assets/tab-cart.svg'
import ordersIcon from '../assets/tab-orders.svg'
import accountIcon from '../assets/tab-account.svg'

const TABS = [
  { id: 'home', label: 'Home', icon: homeIcon },
  { id: 'wallet', label: 'Wallet', icon: walletIcon },
  { id: 'cart', label: 'Cart', icon: cartIcon },
  { id: 'orders', label: 'Orders', icon: ordersIcon },
  { id: 'account', label: 'Account', icon: accountIcon },
] as const

export type TabId = (typeof TABS)[number]['id']

type Props = {
  active: TabId
  onChange: (tab: TabId) => void
}

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="tabbar" aria-label="Main">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`tab ${tab.id === active ? 'tab--active' : ''}`}
          aria-current={tab.id === active ? 'page' : undefined}
          onClick={() => onChange(tab.id)}
        >
          <img src={tab.icon} alt="" width={18} height={18} />
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
