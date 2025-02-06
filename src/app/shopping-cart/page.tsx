"use client"

import { useState } from 'react'
import { Minus, Plus, Star, X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

import { Loader2 } from "lucide-react"
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import Link from 'next/link'

interface Product {
  _id: string
  name: string
  rating?: number
  price: number
  image: {
    asset: {
      _ref: string
    }
  }
  category: string
}

export default function ShoppingCart2() {
  const router = useRouter()
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [couponCode, setCouponCode] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStatus, setProcessingStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')

  const subtotal = cart.reduce((sum, product) => 
    sum + product.price * product.quantity, 0
  )
  const shippingCharge = 50.00
  const total = subtotal + shippingCharge

  const handleProceedToCheckout = () => {
    setIsProcessing(true)
    setProcessingStatus('processing')
    router.push('/CheckOut')

    Promise.resolve()
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() < 0.9) {  
              resolve('Order processed successfully')
            } else {
              reject(new Error('Order processing failed'))
            }
          }, 2000)
        })
      })
      .then((result) => {
        console.log(result)
        setProcessingStatus('success')
      })
      .catch((error) => {
        console.error('Checkout error:', error)
        setProcessingStatus('error')
      })
      .finally(() => {
        setIsProcessing(false)
      })
  }

  const handleContinueShopping = () => {
    router.push('/shop')
  }

  const handleCloseProcessingModal = () => {
    setProcessingStatus('idle')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {cart.length === 0 ? (
        <div className="text-center bg-white shadow-lg rounded-lg p-12">
          <ShoppingCart className="mx-auto h-32 w-32 text-blue-500 mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Explore our delicious menu and add some items to get started!
          </p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div>
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
                  <tr key={product._id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={product.image?.asset?._ref ? urlFor(product.image.asset._ref) : '/placeholder.svg'}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                          {product.rating !== undefined && (
                            <div className="flex gap-0.5 mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < (product.rating ?? 0)
                                      ? 'fill-primary text-primary'
                                      : 'fill-muted text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
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
                          className="h-8 w-8"
                          onClick={() => updateQuantity(product._id, product.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">
                          {product.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
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
                        variant="ghost"
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

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  Apply a coupon code to get additional discounts on your order.
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                  />
                  <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                    Apply
                  </Button>
                </div>

                <Link href={"/shop"}>
                <Button variant="default" className='mt-10 bg-orange-500 hover:bg-orange-600'>
                  Continue shopping
                </Button>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Total Bill</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cart Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Charge</span>
                    <span>${shippingCharge.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-orange-500 hover:bg-orange-600 rounded"
                      onClick={handleProceedToCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Proceed to Checkout'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog open={processingStatus !== 'idle'} onOpenChange={handleCloseProcessingModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {processingStatus === 'processing' && 'Processing Order'}
              {processingStatus === 'success' && 'Order Successful'}
              {processingStatus === 'error' && 'Order Failed'}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            {processingStatus === 'processing' && (
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
                <p>Your order is being processed...</p>
              </div>
            )}
            {processingStatus === 'success' && (
              <div className="flex flex-col items-center text-green-600">
                <Star className="h-12 w-12 mb-4" />
                <p>Your order has been successfully placed!</p>
              </div>
            )}
            {processingStatus === 'error' && (
              <div className="flex flex-col items-center text-red-600">
                <X className="h-12 w-12 mb-4" />
                <p>Order processing failed. Please try again.</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button 
              variant="default" 
              onClick={handleCloseProcessingModal}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
