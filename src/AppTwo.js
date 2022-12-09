import Button from "./Button";
import styles from "./AppTwo.module.css";

function AppTwo() {
  return (
    <div>
      <h1>Welcome back!!!</h1>
      <Button className={styles.title} text={"Continue"} />
    </div>
  );
}

export default AppTwo;
