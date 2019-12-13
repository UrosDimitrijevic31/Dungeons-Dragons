import React from 'react';

const Hero=(props) =>{
    let {hero} = props;
    let{
        first_name: fname,
        last_name: lname,
        age: a,
        gender: g,
        race: r,
        img: im,
        traits: {
            stamina: stam,
            strength: stre,
            dexterity: dext
          }
    } = hero;


    return(
        <div className={'main'}>
            <p>{`${fname} ${lname}`}</p>
            <p>{`Age: ${a}`}</p>
            <p>{`Gender: ${g}`}</p>
            <p>{`Race: ${r}`}</p>
            <img src={im}></img>
            <p className={"paragraph"}>stamina: {stam}</p>     
            <div className={"stamina"} >{stam}</div>   

            <p className={"paragraph"}>strength: {stre}</p> 
            <div className={"strenght"} >{stre}</div>   
            
            <p className={"paragraph"}>dexterity:{dext}</p>
            <div className={"dexterity"} >{dext}</div>
            
            
        </div>
    )
}
export{Hero}
