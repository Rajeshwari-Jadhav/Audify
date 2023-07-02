import React from 'react'
import styled from 'styled-components'
import InputField from './InputField'

const Head=styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100vw;
max-height:40%;
gap:700px;
padding:10px;
margin-bottom:150px;
`

const Header = (props) => {
  return (
    <Head>
        <InputField title="Untitled" type="text" name="filename"/>
        <img className="up" src={props.pic} alt="Up" />
    </Head>
  )
}

export default Header
