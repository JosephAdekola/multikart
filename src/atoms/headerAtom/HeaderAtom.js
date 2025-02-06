import { atom, selector } from "recoil";


export const HeaderAtom = atom({
    key: 'HeaderAtom',
    default: [
        {id:1, menu:'HOME', hasArrowDown: true},
        {id:2, menu:'SHOP', hasArrowDown: true},
        {id:3, menu:'PRODUCTS', hasArrowDown: true},
        {id:4, menu:'FEATURES', hasArrowDown: true},
        {id:5, menu:'PAGES', hasArrowDown: true},
        {id:6, menu:'BLOGS', hasArrowDown: true},
    ]
})

export const HeaderSubMenuState = atom({
    key: 'HeaderSubMenuState',
    default: null
})

export const HeaderSubMenuUnderlineState = atom({
    key: 'HeaderSubMenuUnderlineState',
    default: null
})

export const SetHeaderSubMenuOn = selector({
    key: 'SetHeaderSubMenuOn',
    get: ({get})=> get(HeaderSubMenuState),
    set: ({set})=> {
        set(HeaderSubMenuState, true)
    }
})

export const SetHeaderSubMenuOff = selector({
    key: 'SetHeaderSubMenuOff',
    get: ({get})=> get(HeaderSubMenuState),
    set: ({set})=> {
        set(HeaderSubMenuState, false)
    }
})