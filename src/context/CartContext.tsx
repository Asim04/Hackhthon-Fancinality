'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

export interface CartItem {
  _id: string
  name: string
  price: number
  image: {
    asset: {
      _ref: string
    }
  }
  quantity: number
  totalPrice: number
  category: string
  rating?: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initialize cart from localStorage on first render
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem._id === item._id)
      
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart]
        const newQuantity = updatedCart[existingItemIndex].quantity + item.quantity
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: newQuantity,
          totalPrice: item.price * newQuantity,
          rating: item.rating
        }
        return updatedCart
      }
      
      return [...prevCart, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item._id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item._id === id ? { ...item, quantity: Math.max(1, quantity), totalPrice: item.price * quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
