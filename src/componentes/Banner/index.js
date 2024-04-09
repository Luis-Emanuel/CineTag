import styles from "./Banner.module.css";

function Banner({ imagem }) {
  return (
    <div className={styles.capa}
      style={{ background: `url('./imagens/banner-${imagem}.png'` }}
    >
    </div>
  )
}

export default Banner;