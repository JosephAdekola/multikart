
import { atom } from 'recoil'
import product2 from '../../assets/images/products/2.jpg'
import product6 from '../../assets/images/products/6.jpg'
import product7 from '../../assets/images/products/7.jpg'
import product8 from '../../assets/images/products/8.jpg'

export const TopProductsAtom = atom({
    key: 'TopProductsAtom',
    default: [
        { image: product2, subImage1: product6, subImage2: product7, name: 'waist dress', price: 184.00, strike: 230 },
        { image: product6, subImage1: product7, subImage2: product2, name: 'waist dress', price: 184.00, strike: 230 },
        { image: product7, subImage1: product8, subImage2: product6, name: 'waist dress', price: 184.00, strike: 230 },
        { image: product8, subImage1: product2, subImage2: product8, name: 'waist dress', price: 184.00, strike: 230 }
    ]
})

export const TranslateTopProducts = atom({
    key: 'TranslateTopProducts',
    default: true
})

export const HoldTopProducts = atom({
    key: 'HoldTopProducts',
    default: false
})
