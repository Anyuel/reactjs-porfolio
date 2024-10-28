import React from 'react'
import { Card, Button } from 'react-bootstrap'

const InformationCard = ({ img, header, title, text, btn, isWhiteHeader }) => {
    return (
        <Card className='bg-dark border border-secondary'>
            { img && <Card.Img src={img} variant='top'/> }
            { header && <Card.Header className={`border-secondary ${isWhiteHeader ? 'text-white' : 'text-secondary'}`}>{header}</Card.Header> }
            <Card.Body>
                { title && <Card.Title className='text-white'>{title}</Card.Title> }
                { text && <Card.Text className='text-secondary' style={{ whiteSpace: 'pre-line' }}>{text}</Card.Text> }
                { btn && <Button variant='outline-primary' className='text-white'>{btn}</Button> }
            </Card.Body>
        </Card>
    )
}

export default InformationCard