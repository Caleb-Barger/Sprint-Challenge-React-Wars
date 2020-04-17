// Write your Character component here
import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button 
    } from 'reactstrap'


const Character = props => {
    const {characterInfo} = props
    return(
        <div>
            <Card>
                <CardImg top width="100%" src={characterInfo.image} alt={characterInfo.name}/>
                <CardBody>
                    <CardTitle>{characterInfo.name}</CardTitle>
                    <CardSubtitle>Subtitle Placeholder</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Character