import Link from "next/link";
import styles from '../styles/A.module.css';

const A = ({ text, href}) => {
  return (
    <div>
      <Link className={styles.link} href={href}>
        {text}
      </Link>
    </div>
  )
}

export default A