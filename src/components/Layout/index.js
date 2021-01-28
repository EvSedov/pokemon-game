import layoutStyle from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  let styleRoot = {};
  if (urlBg) {
    styleRoot = { backgroundImage: `url(../assets/${urlBg})` };
  } else if (colorBg) {
    styleRoot = { backgroundColor: colorBg}
  }
  return (
    <section className={layoutStyle.root} id={id} style={styleRoot}>
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
