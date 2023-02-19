import React from 'react'

function ClientLayout(props) {
  return (
    <div>
      <div className={props.class}>{props.children}</div>
    </div>
  )
}

export default ClientLayout
