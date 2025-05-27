import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
// import { AllCart } from "../../apiCalls/CartCall";

const { persistAtom } = recoilPersist()



export const authAtom = atom({
  key: "authAtom",
  default: {
    token: "",
    user: {}
  },
  effects_UNSTABLE: [persistAtom]
})
