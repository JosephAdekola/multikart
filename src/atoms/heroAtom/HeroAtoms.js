import { atom } from 'recoil'
import heroImage1 from '../../assets/images/heroImages/heroImage1.jpg'
import heroImage2 from '../../assets/images/heroImages/heroImage2.jpg'


export const HeroImages = atom({
    key: 'HeroImages',
    default: [
        heroImage1,
        heroImage2
    ]
})

export const HeroImageIndex = atom({
    key: 'HeroImageIndex',
    default: 0
})

export const HeroAutoNavigate = atom({
    key: 'HeroAutoNavigate',
    default:false
})