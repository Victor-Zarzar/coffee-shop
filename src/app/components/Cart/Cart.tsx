'use client'
import { useCartStore } from '@/app/store';
import React from 'react'
import { LuShoppingCart } from 'react-icons/lu';

export default function Cart() {

    const useStore = useCartStore();

    return (
        <div onClick={() => useStore.toggleCart()} className='container'>
            <div className='flex gap-2'>
                <LuShoppingCart className='h-6 w-6' />
                <span className='bg-stone-400 text-sm rounded-full h-5 w-5 flex items-center justify-center absolute left-5 bottom-3 text-white'>2</span>
            </div>
            {!useStore.isOpen && (
                <div className='fixed w-full h-screen bg-stone-400 lef-0 top-0 z-50'>
                    <div className='absolute bg-stone-400 w-1/3 h-screen p-6 overflow-y-scroll'>
                        <h1 className='right-0 top-0 text-white'>Meu Carrinho</h1>
                    </div>
                </div>
            )
            }
        </div>
    )
}
