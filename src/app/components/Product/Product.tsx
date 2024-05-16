import React from 'react'
import { ProductType } from '@/app/types/main';
import ProductImage from '../ProductImage/ProductImage';
import { formatPrice } from '@/app/lib/utils';
import { Panel, Button } from 'rsuite';

type ProductProps = {
    product: ProductType
}

export default function Product({ product }: ProductProps) {
    return (
        <>
            <div className='flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300 p-4'>
                <div className='relative max-h-60 flex-1'>
                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <ProductImage product={product} fill />
                        <Panel header="RSUITE">
                            <div className='flex mt-4 justify-between font-bold'>
                                <p className='w-40 text-white truncate'>{product.name}</p>
                                <p className='text-white text-lg'>{formatPrice(product.price)}</p>
                            </div>
                            <p>
                                <small>
                                    <Button className='w-full'>Add to Cart</Button>
                                </small>
                            </p>
                        </Panel>
                    </Panel>
                </div>
            </div>
        </>
    )
}
