import React from 'react'
import Card from './Card';




function Product(props) {
    return (
        <Card isVerified={props.isVerified} >

            <div>
                <img style={{ width: 200, height: 220 }}
                    src={props.img} />

                <p>{props.name}  </p>

            </div>
        </Card>


    );
}

export default Product