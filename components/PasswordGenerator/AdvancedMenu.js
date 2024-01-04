import styles from "./AdvancedMenu.module.css"

export const AdvancedMenu = ({passwordConfig, updatePasswordConfig}) => {

  const handleChange = (e) => {
    const { id, checked } = e.target;

    switch(id){
      case "lowercase":
        updatePasswordConfig({
          lowercase: checked
        })
        break;
      case "uppercase":
        updatePasswordConfig({
          uppercase: checked
        })
        break;
      case "digits":
        updatePasswordConfig({
          digits: checked
        })
        break;
      case "special":
        updatePasswordConfig({
          special: checked
        })
        break;
      case "grouping":
        updatePasswordConfig({
          grouping: checked
        })
        break;

      default:
        throw Error(`unkown id ${id}`)
    }

  }

  return (
    <div
      className={`${styles.menu} ${passwordConfig.setting !== "advanced" && styles.menu_hidden}`}
    >
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="lowercase"
        >
          Lowercase
          <input 
            type="checkbox"
            onChange={handleChange}
            id="lowercase"
            checked={passwordConfig.lowercase === true}
            disabled={
              passwordConfig.lowercase === true &&
              passwordConfig.uppercase === false &&
              passwordConfig.digits === false &&
              passwordConfig.special === false &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>abcdefghijklmnopqrstuvwxyz</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="uppercase"
        >
          Uppercase
          <input 
            type="checkbox"
            onChange={handleChange}
            id="uppercase"
            checked={passwordConfig.uppercase === true}
            disabled={
              passwordConfig.lowercase === false &&
              passwordConfig.uppercase === true &&
              passwordConfig.digits === false &&
              passwordConfig.special === false &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="digits"
        >
          Digits
          <input 
            type="checkbox"
            onChange={handleChange}
            id="digits"
            checked={passwordConfig.digits === true}
            disabled={
              passwordConfig.lowercase === false &&
              passwordConfig.uppercase === false &&
              passwordConfig.digits === true &&
              passwordConfig.special === false &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>1234567890</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="special"
        >
          Special
          <input 
            type="checkbox"
            onChange={handleChange}
            id="special"
            checked={passwordConfig.special === true}
            disabled={
              passwordConfig.lowercase === false &&
              passwordConfig.uppercase === false &&
              passwordConfig.digits === false &&
              passwordConfig.special === true &&
              passwordConfig.grouping === false
            }
          />
        </label>
        <p>!@#$%^&*-_=+?.</p>
      </div>
      
      <div
        className={styles.container}
      >
        <label
          className={styles.label}
          htmlFor="grouping"
        >
          Grouping
          <input 
            type="checkbox"
            onChange={handleChange}
            id="grouping"
            checked={passwordConfig.grouping === true}
            disabled={
              passwordConfig.lowercase === false &&
              passwordConfig.uppercase === false &&
              passwordConfig.digits === false &&
              passwordConfig.special === false &&
              passwordConfig.grouping === true
            }
          />
        </label>
        <p>{'(){}[]'}</p>
      </div>
      

    </div>
  )
}