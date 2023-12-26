import styles from "./LengthInput.module.css"

export const LengthInput = ({passwordConfig, onChange, decrease, increase}) => {
  return (
  <div
    className={styles.root}
  >
    <label
      htmlFor="length"
    >
      Length:
    </label>

    <div
      className={styles.container}
    >
      <button
        disabled={passwordConfig.passwordLength === passwordConfig.passwordLengthMin}
        onClick={() => {
          decrease(1)
        }}
      >-</button>
      <input
        id="length"
        type="text"
        value={passwordConfig.passwordLength}
        readOnly
      />
      <button
        disabled={passwordConfig.passwordLength === passwordConfig.passwordLengthMax}
        onClick={() => {
          increase(1)
        }}
      >+</button>
    </div>

    <input 
      type="range"
      min={passwordConfig.passwordLengthMin}
      max={passwordConfig.passwordLengthMax}
      step={1}
      onChange={onChange}
      name="passwordLengthRange"
      value={passwordConfig.passwordLength}
    />
  </div>
  )
}