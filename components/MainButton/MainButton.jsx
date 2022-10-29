import Link from "next/link";

import styles from "./MainButton.module.scss";

const MainButton = ({ children, link = "#" }) => {
  return (
    <Link href={link}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
};

export default MainButton;
