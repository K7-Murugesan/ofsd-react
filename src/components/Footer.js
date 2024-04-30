import React from 'react'

// let props = {
//   title : "Js"
// }

// let {title} = props

export const Footer = ({ title, course, children }) => {

 let date = new Date()

  return (
    <footer className='footer'>
        <h6> &copy; CopyRights { date.getFullYear() }  </h6>
        <h1> {title } {course.id } </h1>
        <div>
            {children}
        </div>     
    </footer>
  )
}

Footer.defaultProps = {
  title : "Javascript",
  course : {
     id : "UNIQ123"
  }
}
