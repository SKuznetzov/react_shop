import React, { Component } from 'react'

export default class Shipment extends Component {

    render() {
        const { total } = this.props
        const shipping = total > 0 && total < 500 ? 350 : 99
        const shippingNeon = shipping === 99  ? (
            <span className=" font-effect-neon total_wrap-cheap">
                {shipping} rub
            </span>
        ) : (
            <span>{shipping} rub</span>
        )
        return (
            <div className="total">
                <div className="total_wrap">
                    <div>
                        <div>Доставка: {total > 0 ? shippingNeon : null}</div>
                        <div className="total_wrap-free">
                            {total < 500 ? `Закажите ещё на ${500 - total} rub для доставки за 99 rub` : null}
                        </div>
                    </div>
                    <div className="total_wrap-final">Итого: {total} rub</div>
            </div>
        </div>
        )
    }
}
