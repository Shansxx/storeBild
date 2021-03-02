import React, { Component } from 'react'

export default class Defaul extends Component {
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title
                    text-uppercase pt-5'>
                        <h1 className='display-3'>404</h1>
                        <h1>Ошибка</h1>
                        <h2>Страница не найдена</h2>
                        <h3> этот адрес URL <span className='text-danger'>
                            {this.props.location.pathname} </span>
                            {""}
                            не найдено </h3>
                    </div>
                </div>
            </div>
        )
    }
}
