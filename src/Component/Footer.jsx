import React from 'react'

const Footer = () => {
  return (
    <div>

<footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
            <img src="data:image/jpeg;base64,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" alt="" />
         {/* <svg xmlns="data:image/jpeg;base64,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" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>  */}
          <span class="fs-5">Brandy Landing pages</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
          <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
          <li class="mb-2">Currently v5.3.2.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/">Home</a></li>
          <li class="mb-2"><a href="/docs/5.3/">Docs</a></li>
          <li class="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
          <li class="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
          <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
          <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
          <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank" rel="noopener">Swag Store</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Guides</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
          <li class="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Projects</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
          <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
          <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
          <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer