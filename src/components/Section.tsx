import {ReactNode} from 'react'



type SectionProps = {
    children:ReactNode
    title?:string,
}




const Section=({title='defaulTitlePropValue',children}:SectionProps) => {
  return (
      <section>
          <h2>{title}</h2> 
          <p>{children}</p>
    </section>
  )
}

export default Section