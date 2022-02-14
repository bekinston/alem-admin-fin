import React from 'react'

import {MainCalc} from '../components/MainCalc'
import {MainHeader} from '../components/MainHeader'
import {MainImage} from '../components/MainImage'
import {MainInfo} from '../components/MainInfo'
import {MainFooter} from '../components/MainFooter'
import {MainCop} from '../components/MainCop'
import {Create} from '../components/Create'


export const AuthPage = () => {



  return (
    <div className="row">
      <MainHeader/>
      <MainImage/>
      <MainInfo/>
      <MainCalc/>
      <MainCop/>
      <MainFooter/>
    </div>
  )
}
