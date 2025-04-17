import { atom, selector } from "recoil";


const ResponsiveMenuAtom = atom({
    key: 'ResponsiveMenuAtom',
    default: [
        {id:1, menu: 'HOME'},
        {id:2, menu: 'SHOP'},
        {id:3, menu: 'PRODUCTS'},
        {id:4, menu: 'FEATURES'},
        {id:5, menu: 'PAGES'},
        {id:6, menu: 'BLOGS'},
    ]
})

const ResponsiveMenuState = atom({
    key: 'ResponsiveMenuState',
    default: false
})

const setResponsiveMenuOn = selector({
    key: 'setRespnsiveMenuOn',
    get: ({get})=> get(ResponsiveMenuState),
    set: ({set})=> set(ResponsiveMenuState, true)
})

const setResponsiveMenuOff = selector({
    key: 'setRespnsiveMenuOff',
    get: ({get})=> get(ResponsiveMenuState),
    set: ({set})=> set(ResponsiveMenuState, false)
})

export {
    ResponsiveMenuAtom,
    ResponsiveMenuState,
    setResponsiveMenuOn,
    setResponsiveMenuOff
}