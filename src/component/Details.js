import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Detalis extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                const {id,
                     img,
                     name,
                     company,
                     price,
                     inCart,
                     description} =
                value.detailProduct;
                return(
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-10 mx-auto text-center text-standard
                            my-5'>
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 mx-auto col-md-6 ny-3
                            text-catitalize'>
                                <img src={img} alt='product' className='img-fluid
                                ' ></img>
                            </div>
                            <div className='col-10 mx-auto col-md-6 ny-3
                            text-capitalize'>
                            <h2>изделие: {name} </h2>
                            <h4 className='text-title text-upercase text-muted
                             mt-3 mb-2'>
                                 Производитель: <span className=' text-upercase'>{company}</span>
                            </h4>
                            <h4><strong>
                                Цена: <span>{price}p. </span></strong> </h4>
                                <p className=' font-weight-bold
                                mt-3 mb-0'> Информация о продукте:</p>
                                <p className='text-muted lead'>{description} </p>
                                <div >
                                    <Link to='/'>
                                        <ButtonContainer>
                                            В магазин
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                     disabled={inCart?true:false}
                                    onClick={() =>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? 'inCart': 'В Корзину'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
            }}
            </ProductConsumer>
        );    
    }
}
