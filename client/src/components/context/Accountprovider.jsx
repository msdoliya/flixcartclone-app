import React, { useState, createContext } from 'react'


export const Accountcontext = createContext(null);

const Accountprovider = ({children}) => {
const [name, setname] = useState('')
const [loged, setloged] = useState(false)

  return (
<Accountcontext.Provider value={{
name,
setname,
loged,
setloged
}}>

    {children}
</Accountcontext.Provider>
  )
}

export default Accountprovider
