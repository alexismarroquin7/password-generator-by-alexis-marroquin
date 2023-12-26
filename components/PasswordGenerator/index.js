"use client";

import { LengthInput } from "./LengthInput"
import { SimpleMenu } from "./SimpleMenu"
import { AdvancedMenu } from "./AdvancedMenu"

import { usePasswordGenerator } from "../../hooks";

import styles from "./index.module.css"

export const PasswordGenerator = () => {

  const {
    password,
    passwordConfig,
    generate,
    handleChange,
    passwordLengthIncrease,
    passwordLengthDecrease
  } = usePasswordGenerator();

  

  return <div
    className={styles.root}
  >
    <p>Password Generator</p>

    <label
      className={styles.label}
    >
      Your new password:
      <input
        type="text"
        readOnly
        value={password}
      />
    </label>

    <div>
      <button>Copy</button>
      <button
        onClick={generate}
      >Generate</button>
    </div>

    <LengthInput  
      passwordConfig={passwordConfig}
      onChange={handleChange}
      increase={passwordLengthIncrease}
      decrease={passwordLengthDecrease}
    />

    <div>
      <p>
        Settings:
      </p>
      <label
        htmlFor="simple"
      >Simple
        <input
          type="radio"
          id="simple"
          name="setting"
          checked={passwordConfig.setting === "simple"}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="advanced"
      >Advanced
        <input
          type="radio"
          id="advanced"
          name="setting"
          checked={passwordConfig.setting === "advanced"}
          onChange={handleChange}
        />
      </label>
    </div>

    <SimpleMenu passwordConfig={passwordConfig}/>
    <AdvancedMenu passwordConfig={passwordConfig}/>

  </div>
}