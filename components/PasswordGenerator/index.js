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

    <div>
      <div>
        <label>
          Less Secure
          <input
            type="radio"
          />
        </label>
        <p>Only Letters</p>
      </div>
      <div>
        <label>
          Less Secure
          <input
            type="radio"
          />
        </label>
        <p>Only Letters</p>
      </div>
      <div>
        <label>
          Somewhat Secure
          <input
            type="radio"
          />
        </label>
        <p>Letters and digits</p>
      </div>
      <div>
        <label>
          More Secure
          <input
            type="radio"
          />
        </label>
        <p>Letters, digits, special, groupings</p>
      </div>

    </div>

    <div>
      <div>
        <label>
          Lowercase
          <input 
            type="checkbox"
          />
        </label>
        <p>abcdefghijklmnopqrstuvwxyz</p>
      </div>
      
      <div>
        <label>
          Uppercase
          <input 
            type="checkbox"
          />
        </label>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      </div>
      
      <div>
        <label>
          Digits
          <input 
            type="checkbox"
          />
        </label>
        <p>1234567890</p>
      </div>
      
      <div>
        <label>
          Special
          <input 
            type="checkbox"
          />
        </label>
        <p>!@#$%^&*-_=+?.</p>
      </div>
      
      <div>
        <label>
          Grouping
          <input 
            type="checkbox"
          />
        </label>
        <p>{'(){}[]'}</p>
      </div>
      

    </div>

  </div>
}