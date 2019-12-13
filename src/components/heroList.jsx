import React from 'react'
import {data} from './data'
import { Hero } from './hero';

const HeroList = (props) => {

    return(
        data.map(x => <Hero hero={x}/>)
    )        
}
export {HeroList}