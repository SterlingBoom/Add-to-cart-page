import { createContext, useState } from 'react'

export const AppContext = createContext()

function AppProvider(props) {
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState((125.0).toFixed(2))
  const [addCart, setAddCart] = useState(false)

  return (
    <AppContext.Provider
      value={{ quantity, setQuantity, price, setPrice, addCart, setAddCart }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
