import styles from "./index.module.css"

export const PasswordGenerator = () => {
  return <div
    className={styles.root}
  >
    <p>Password Generator</p>

    <label>
      Your new password:
      <input
        type="text"
      />
    </label>

    <div>
      <button>Copy</button>
      <button>Generate</button>
    </div>

    <label>
      Length:
      <button>-</button>
      <input
        type="text"
      />
      <button>+</button>
    
    </label>

    <input 
      type="range"
    />
  

    <div>
      <p>
        Settings:
      </p>
      <label>Simple
        <input
          type="radio"
        />
      </label>
      <label>Advanced
        <input
          type="radio"
        />
      </label>
    </div>

  </div>
}