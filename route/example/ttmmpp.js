"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        path: '/cart',
        method: ['PUT'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Product successfully added",
                    "data": {
                        "totalProductCount": 5
                    }
                });
            }
        }
    },
    {
        path: '/cart/product/{id}/stock',
        method: ['PUT'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                log.cool('Request Param: ', request.params);
                reply({
                    "status": true,
                    "message": "Product Quantity updated successfully",
                    "data": {
                        "product": {
                            "discountAmount": 250,
                            "price": 1000,
                            "subTotal": 1000,
                            "quantity": 5
                        },
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            "discount": 500,
                            "cst": 231,
                            "vat": 22
                        },
                        "cartProductCount": 7
                    }
                });
            }
        }
    },
    {
        path: '/api/v1/cart/coupon',
        method: ['POST'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Promotional Coupon applied successfully",
                    "data": {
                        "productList": [
                            {
                                "discountAmount": 250
                            },
                            {
                                "discountAmount": 250
                            }
                        ],
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            "discount": 500,
                            "cst": 231,
                            "vat": 22
                        }
                    }
                });
            }
        }
    },
    {
        path: '/api/v1/cart/voucher',
        method: ['POST'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Voucher  ‘abcde12345’ is successfully applied",
                    "data": {
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            "discount": 500,
                            "cst": 231,
                            "vat": 22
                        }
                    }
                });
            }
        }
    },
    {
        path: '/cart',
        method: ['GET'],
        config: {
            description: 'BAG Get List',
            notes: 'BAG Get List',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('GET Request Payload: ', request.payload);
                var obj = {
                    "status": true,
                    "message": "Product Available Bag",
                    "data": {
                        "cart": [
                            {
                                "name": "151ORMTHPL20",
                                "id": "151ORMTHPL20-DZBL",
                                "description": "151ORMTHPL20",
                                "discountAmount": 250,
                                "price": 1000,
                                "subTotal": 1000,
                                "size": "XL",
                                "color": "RED",
                                "quantity": 1,
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                            },
                            {
                                "name": "151ORMTHPL20",
                                "id": "151ORMTHPL20-DZBL",
                                "description": "151ORMTHPL20",
                                "discountAmount": 250,
                                "price": 1000,
                                "subTotal": 1000,
                                "size": "XL",
                                "color": "RED",
                                "quantity": 1,
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                            },
                            {
                                "name": "151ORMTHPL20",
                                "id": "151ORMTHPL20-DZBL",
                                "description": "151ORMTHPL20",
                                "discountAmount": 250,
                                "price": 1000,
                                "subTotal": 1000,
                                "size": "XL",
                                "color": "RED",
                                "quantity": 1,
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                            }
                        ],
                        "total": 2330,
                        "subTotal": 2330,
                        "discount": 500,
                        "cst": 230,
                        "vat": 33
                    }
                };
                reply(obj);
            }
        }
    },
];