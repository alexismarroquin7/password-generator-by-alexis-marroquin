import styles from "./ActionArea.module.css";

export const ActionArea = ({handleCopyToClipboard, generate}) => {
  return (
    <div
      className={styles.root}
    >
      <button
        onClick={handleCopyToClipboard}
      >Copy</button>
      <button
        onClick={generate}
      >Generate</button>
    </div>
  )
}