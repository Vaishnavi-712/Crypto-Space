import React from 'react'
import {Blocks} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', height: '100vh' }}>
                <Blocks
            height="120"
            width="120"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            />

    </div>
  )
}

export default Loader
