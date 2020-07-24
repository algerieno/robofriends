import React from 'react'
import Card from './card';

const CardList = ({robots}) => {
    return (
        robots.map(robot => <Card name = {robot.first_name} 
                                  slogan = {robot.slogan} 
                                  key = {robot.id}
                                  id = {robot.id}></Card>)
    );
}

export default CardList;