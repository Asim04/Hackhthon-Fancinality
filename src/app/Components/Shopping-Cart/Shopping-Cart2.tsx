'use client'

import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { urlFor } from '@/lib/sanityImageUrl'

interface Product {
  id: number
  name: string
  rating: number
  price: number
  image: {
    asset: {
      _ref: string
    }
  }
  quantity: number
}

export default function ShoppingCart2() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((sum, product) => 
    sum + product.price * product.quantity, 0
  )
  const shippingCharge = 50.00
  const total = subtotal + shippingCharge

  return (
    <div className="max-w-6xl mx-auto p-6">
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-medium">Product</th>
                  <th className="text-left py-4 px-4 font-medium">Price</th>
                  <th className="text-left py-4 px-4 font-medium">Quantity</th>
                  <th className="text-left py-4 px-4 font-medium">Total</th>
                  <th className="text-left py-4 px-4 font-medium">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product._id} className="border-b">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <Image 
                            src={urlFor(product.image) || '/placeholder.png'} 
                            alt={product.name} 
                            fill 
                            className="object-cover rounded" 
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQuantity(product._id, product.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span>{product.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQuantity(product._id, product.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => removeFromCart(product._id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
