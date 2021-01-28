const Layout = () => {
  return (
    <section class="root" id="<-- ЗДЕСЬ props.id -->">
      <div class="wrapper">
        <article>
            <div class="title">
                <h3><-- ЗДЕСЬ props.title --></h3>
                <span class="separator"></span>
            </div>
            <div class="desc full">
                <p><-- ЗДЕСЬ props.desc --></p>
            </div>
        </article>
      </div>
    </section>
  )
}