import styles from './Footer.module.scss'
import iconVk from '../../../assets/img/vk-icon.png'
import iconGitHub from '../../../assets/img/github-icon.svg'
import iconTg from '../../../assets/img/telegram-icon.svg'


const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <span>{"<"}</span>&copy; 2022-2023 <span>Zaambik</span> <span>{"/>"}</span>
        </div>
        <div className={styles.links}>
          <a href="https://vk.com/zaambik" target="_blank"><img src={iconVk} width="55px"/></a>
          <a href="#" target="_blank"><img src={iconGitHub} width="40px"/></a>
          <a href="#" target="_blank"><img src={iconTg} width="40px"/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer