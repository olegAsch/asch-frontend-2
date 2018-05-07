import { withParams } from 'vuelidate/lib/validators/common.js'
import Bip39 from 'bip39'

export const secondPwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
export const assetNameReg = /^[A-Z]{3,6}$/
export const addressReg = /^A\w{32,33}$/
export const nicknameReg = /^[a-z0-9_]{2,20}$/
export const proposalTitleReg = /^[A-Za-z0-9_\-+!@$% ]{10,100}$/
export const gatewayNameReg = /^[A-Za-z0-9]{3,16}$/
export const assetSymbolReg = /^[A-Z]{3,6}$/
// bip 39 validator
export const bip39 = () => {
  return withParams({ type: this.bip39 }, value => {
    return Bip39.validateMnemonic(value)
  })
}
export const assetName = () => {
  return withParams({ type: this.assetName }, value => {
    return assetNameReg.test(value)
  })
}

export const secondPwd = () => {
  return withParams({ type: this.secondPwd }, value => {
    return secondPwdReg.test(value)
  })
}
export const address = () => {
  return withParams({ type: this.address }, value => {
    return addressReg.test(value)
  })
}
