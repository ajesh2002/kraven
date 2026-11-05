import logoMark from '../assets/logo-mark.svg'
import mailIcon from '../assets/icon-mail.svg'
import heartIcon from '../assets/icon-heart.svg'
import bellIcon from '../assets/icon-bell.svg'

type Props = {
  notificationCount: number
}

export default function AppHeader({ notificationCount }: Props) {
  return (
    <header className="header">
      <a className="logo" href="/" aria-label="KRAVEN home">
        <img src={logoMark} alt="" width={21.38} height={27} />
        <span className="logo__text">KRAVEN</span>
      </a>
      <div className="header__actions">
        <button type="button" className="contact">
          <img src={mailIcon} alt="" width={14} height={14} />
          Contact Us
        </button>
        <button type="button" className="icon-button" aria-label="Favorites">
          <img src={heartIcon} alt="" width={24} height={24} />
        </button>
        <button type="button" className="icon-button" aria-label={`Notifications (${notificationCount})`}>
          <img src={bellIcon} alt="" width={24} height={24} />
          {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
        </button>
      </div>
    </header>
  )
}
