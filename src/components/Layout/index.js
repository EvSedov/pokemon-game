import layoutStyle from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const sectionStyle = {};
  if (urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    sectionStyle.backgroundColor = colorBg;
  }
  return (
    <section className={layoutStyle.root} id={id} style={sectionStyle}>
      <div className={layoutStyle.wrapper}>
        <article>
            <div className={layoutStyle.title}>
                {title && (<h3>{title}</h3>)}
                <span className={layoutStyle.separator}></span>
            </div>
            <div className={[layoutStyle.desc, layoutStyle.full]}>
                {children}
            </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
