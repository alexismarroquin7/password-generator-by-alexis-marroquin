"use client";

import { LengthInput } from "./LengthInput"
import { ActionArea } from "./ActionArea"
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
    passwordLengthDecrease,
    updatePasswordConfig,
    handleCopyToClipboard
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

    <ActionArea 
      handleCopyToClipboard={handleCopyToClipboard}
      generate={generate}
    />

    <LengthInput  
      passwordConfig={passwordConfig}
      onChange={handleChange}
      increase={passwordLengthIncrease}
      decrease={passwordLengthDecrease}
    />

    <div
      className={styles.settings_container}
    >
      <p
        className={styles.settings_container_title}
      >
        Settings:
      </p>
      <label
        htmlFor="simple"
        className={`${styles.fancy_label} ${passwordConfig.setting === "simple" ? styles.fancy_label_active : ""}`}
      >Simple
        <input
          type="radio"
          id="simple"
          name="setting"
          checked={passwordConfig.setting === "simple"}
          onChange={handleChange}
          className={styles.radio_input}
        />
      </label>
      <label
        htmlFor="advanced"
        className={`${styles.fancy_label} ${passwordConfig.setting === "advanced" ? styles.fancy_label_active : ""}`}
      >Advanced
        <input
          type="radio"
          id="advanced"
          name="setting"
          checked={passwordConfig.setting === "advanced"}
          onChange={handleChange}
          className={styles.radio_input}
        />
      </label>
    </div>

    <SimpleMenu 
      passwordConfig={passwordConfig}
      updatePasswordConfig={updatePasswordConfig}
    />
    <AdvancedMenu 
      passwordConfig={passwordConfig}
      updatePasswordConfig={updatePasswordConfig}
    />

  </div>
}