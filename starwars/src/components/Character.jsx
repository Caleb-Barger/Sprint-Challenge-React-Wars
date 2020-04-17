// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const Character = props => {
    const {characterInfo} = props
    return(
        <Card style={{width:'20%', margin: '20px'}}>
            <CardImg top width="100%" src={characterInfo.image} alt={characterInfo.name}/>
            <CardBody>
                <CardTitle>{characterInfo.name}</CardTitle>
                <CardText>{`STATUS : ${characterInfo.status}`}</CardText>
                <CardText>{`SPECIES : ${characterInfo.species}`}</CardText>
            </CardBody>
        </Card>
    )
}

export default Character