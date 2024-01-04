import styles from "./SimpleMenu.module.css"

export const SimpleMenu = ({ passwordConfig, updatePasswordConfig }) => {
  
  const handleChange = (e) => {
    const { id } = e.target;
    switch(id) {
      
      case "lessSecure":
        updatePasswordConfig({
          lowercase: true,
          uppercase: true,
          digits: false,
          special: false,
          grouping: false
        })
        break;
      
      case "somewhatSecure":
        updatePasswordConfig({
          lowercase: true,
          uppercase: true,
          digits: true,
          special: false,
          grouping: false
        })
        break;

      case "secure":
        updatePasswordConfig({
          lowercase: true,
          uppercase: true,
          digits: true,
          special: true,
          grouping: false
        })
        break;
      
      case "moreSecure":
        updatePasswordConfig({
          lowercase: true,
          uppercase: true,
          digits: true,
          special: true,
          grouping: true
        })
        break;
        
        default:
          throw Error(`unkown id: ${id}`)
    }
  }

  return (
    <div
      className={`${styles.menu} ${passwordConfig.setting !== "simple" && styles.menu_hidden}`}
    >
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="lessSecure"
        >
          Less Secure
          <input
            type="radio"
            id="lessSecure"
            onChange={handleChange}
            checked={
              passwordConfig.lowercase === true &&
              passwordConfig.uppercase === true &&
              passwordConfig.digits === false &&
              passwordConfig.special === false &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>Only Letters</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="somewhatSecure"
        >
          Somewhat Secure
          <input
            type="radio"
            id="somewhatSecure"
            onChange={handleChange}
            checked={
              passwordConfig.lowercase === true &&
              passwordConfig.uppercase === true &&
              passwordConfig.digits === true &&
              passwordConfig.special === false &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>Letters & digits</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="secure"
        >
          Secure
          <input
            type="radio"
            id="secure"
            onChange={handleChange}
            checked={
              passwordConfig.lowercase === true &&
              passwordConfig.uppercase === true &&
              passwordConfig.digits === true &&
              passwordConfig.special === true &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>Letters, digits, & special</p>
      </div>
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="moreSecure"
        >
          More Secure
          <input
            type="radio"
            id="moreSecure"
            onChange={handleChange}
            checked={
              passwordConfig.lowercase === true &&
              passwordConfig.uppercase === true &&
              passwordConfig.digits === true &&
              passwordConfig.special === true &&
              passwordConfig.grouping === true
            }
          />
        </label>
        <p>Letters, digits, special, & groupings</p>
      </div>

    </div>
  )
}