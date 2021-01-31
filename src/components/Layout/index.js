import layoutStyle from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
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
                {descr && (<p>{descr}</p>)}
            </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
