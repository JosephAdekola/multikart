import { atom, selector } from "recoil";


export const StaticDropDownStateAtom = atom({
    key: 'StaticDropDownStateAtom',
    default: false
})

export const staticDropDownMenus = atom({
    key: 'staticDropDownMenus',
    default: [
        { id: 1, menu: 'CLOTHING', hasArrowRight: true },
        { id: 2, menu: 'BAGS', hasArrowRight: true },
        { id: 3, menu: 'FOOTWEAR', hasArrowRight: true },
        { id: 4, menu: 'WATCHES', hasArrowRight: false },
        { id: 5, menu: 'ACCESSORIES', hasArrowRight: false }
    ]
})


export const setStaticBarOn = selector({
    key: 'setStaticBarOn',
    get: ({ get }) => get(StaticDropDownStateAtom),
    set: ({ set }) => {
        set(StaticDropDownStateAtom, true)
    }
})

export const setStaticBarOff = selector({
    key: 'setStaticBarOff',
    get: ({ get }) => get(StaticDropDownStateAtom),
    set: ({ set }) => {
        set(StaticDropDownStateAtom, false)
    }
})
