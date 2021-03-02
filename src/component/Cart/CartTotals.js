import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubTotal,cartTotal,clearCart} = value;
    return (
        <React.Fragment >
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-right text-capitalize '>
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase
                            mb-3 px-5' type='button'
                            onClick={() => clearCart()}>
                                очистить корзину
                            </button>
                        </Link>
                        <h5 className='text-title'>
                            цена : <span><strong> {cartSubTotal}p.</strong> </span>
                        </h5>
                        <h5 className='text-title'>
                            всего : <span><strong> {cartTotal}p.</strong> </span>
                        </h5>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
