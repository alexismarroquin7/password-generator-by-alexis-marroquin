import styles from "./AdvancedMenu.module.css"

export const AdvancedMenu = ({passwordConfig}) => {
  return (
    <div
      className={`${styles.menu} ${passwordConfig.setting !== "advanced" && styles.menu_hidden}`}
    >
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Lowercase
          <input 
            type="checkbox"
          />
        </label>
        <p>abcdefghijklmnopqrstuvwxyz</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Uppercase
          <input 
            type="checkbox"
          />
        </label>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Digits
          <input 
            type="checkbox"
          />
        </label>
        <p>1234567890</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Special
          <input 
            type="checkbox"
          />
        </label>
        <p>!@#$%^&*-_=+?.</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
        >
          Grouping
          <input 
            type="checkbox"
          />
        </label>
        <p>{'(){}[]'}</p>
      </div>
      

    </div>
  )
}