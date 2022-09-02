import React from 'react'
import { StyledIngress } from "../styles/styledHeaderElements";

function ErrorPage() {
  return (
    <div className='IngressRamme'>
      <StyledIngress>
        <h2>ERROR</h2>
          <article>
            <p>Page not found</p>
          </article>
      </StyledIngress>
    </div>
  )
}

export default ErrorPage