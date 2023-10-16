import React, {ReactNode} from 'react'

const Container = ({children}: {children: ReactNode}) => {
const style = {
     maxWidth: '1440px',
     margin: '0 auto',
     border: '1px solid red'
}

  return (
    <div style={style} >{children}</div>
  )
}

export default Container