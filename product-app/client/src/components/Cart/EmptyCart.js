import React from 'react';
import {Row} from '../Grid/index';

export default function EmptyCart() {
        return (
                <div className="container mt-5">
                <Row>
                    <div className="col-10 mx-auto text-center">
                    <h1>
                        Your Cart is currently empty
                        </h1>
                    </div>
                </Row>
                </div>

        );
    }