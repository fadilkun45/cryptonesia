import React from 'react'
import { CubeSpinner } from 'react-spinners-kit'

const Loading = () => {
  return (
    <div className="w-full h-screen relative z-50 flex justify-center items-center">
        <CubeSpinner  />
    </div>
  )
}

export default Loading