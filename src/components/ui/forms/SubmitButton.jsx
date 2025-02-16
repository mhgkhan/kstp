import React from 'react'

const SubmitButton = ({text, loadingText, loading, disable}) => {
  return (
    <button disabled={disable||loading} className=" disabled:bg-cyan-400 p-3 text-lg text-white font-bold bg-cyan-950 w-full my-3 rounded-md hover:bg-cyan-700">{loading?loadingText:text}</button>
  )
}

export default SubmitButton
