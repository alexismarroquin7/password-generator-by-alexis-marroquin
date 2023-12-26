import styles from "./SimpleMenu.module.css"

export const SimpleMenu = ({passwordConfig}) => {
  return (
    <div
      className={`${styles.menu} ${passwordConfig.setting !== "simple" && styles.menu_hidden}`}
    >
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Less Secure
          <input
            type="radio"
          />
        </label>
        <p>Only Letters</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Less Secure
          <input
            type="radio"
          />
        </label>
        <p>Only Letters</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Somewhat Secure
          <input
            type="radio"
          />
        </label>
        <p>Letters and digits</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          More Secure
          <input
            type="radio"
          />
        </label>
        <p>Letters, digits, special, groupings</p>
      </div>

    </div>
  )
}