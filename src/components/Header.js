import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="top">
                <div className="wrap">
                    <div className="header-content">

                        <div className="header-rating">
                            <div className="header-rating">Рейтинг: </div>
                            <div className="header-rating">aaa</div>
                        </div>

                        <div className="header-divider"></div>
                        <h1 className="font-effect-fire-animation">Hot Burgers</h1>
                        <h3>
                            <span>
                             Быстрая доставка горячих
                             <span className="sub-header"></span>
                            </span>
                        </h3>
                    </div>
                </div>

            </header>
        )
    }
}
