import React from 'react'

export default function CartColumns() {
    return (
        <div className='container-fluid text-center d-nane
        d-lg-block'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Продукт</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Название</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Цена</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>количество</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Удалить</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase'>Всего</p>
                </div>
            </div>            
        </div>
    )
}