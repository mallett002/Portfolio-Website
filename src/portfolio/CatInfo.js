import React from 'react'

const CatInfo = ({ title, info }) => (
    <div className='cat-info'>
        <h2 className='project-title'>{title}</h2>
        <p className='cat-info-p'>{info}</p>
    </div>
)

export default CatInfo