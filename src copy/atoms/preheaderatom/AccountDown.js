import { atom, selector } from "recoil";


export const AccountDropDown = atom({
    key: 'accountDropdownatom',
    default: false
})

export const addMyAccountDropDown = selector({
    key: 'addMyAccountDropDown',
    get: ({get}) => get(AccountDropDown),
    set: ({set})=> {
        set(AccountDropDown, true)
    }
})

export const removeMyAccountDropDown = selector({
    key: 'removeMyAccountDropDown',
    get: ({get})=> get(AccountDropDown),
    set: ({set}) =>{
        set(AccountDropDown, false)
    }
})