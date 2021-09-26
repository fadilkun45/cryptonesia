import React, { useEffect } from 'react'

const Title = (title) => {
    useEffect(() => {
        const maintitle = document.title
        document.title = title
        return () => {
          document.title = maintitle
        }
      })
}

export default Title
