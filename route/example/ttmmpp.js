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
                            "discountAmount": 300,
                            "price": 1000,
                            "subTotal": 1000
                        },
                        "quantity": 5,
                        "cartTotal": {
                            "total": 5000,
                            "subTotal": 5000,
                            "discount": 5000,
                            "tax": {
                                total: 5000,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 55,
                                        amount: 500
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 55,
                                        amount: 500
                                    }
                                ]
                            }
                        },
                        "productCount": 5
                    }
                });
            }
        }
    },
    {
        path: '/cart/coupon',
        method: ['DELETE'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Remove Applied Coupon",
                    "data": {
                        "productList": [
                            {
                                "id": "A1",
                                "size": "L",
                                "discountAmount": 0
                            },
                            {
                                "id": "A2",
                                "size": "XL",
                                "discountAmount": 0
                            }
                        ],
                        "cartTotal": {
                            "total": 9000,
                            "subTotal": 23030,
                            "discount": 0,
                            "tax": {
                                total: 2300,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            }
                        },
                        "productCount": 7
                    }
                });
            }
        }
    },
    {
        path: '/cart/coupon',
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
                                "id": "A1",
                                "size": "L",
                                "discountAmount": 150
                            },
                            {
                                "id": "A2",
                                "size": "XL",
                                "discountAmount": 60
                            }
                        ],
                        "cartTotal": {
                            "total": 9000,
                            "subTotal": 23030,
                            "discount": 210,
                            "tax": {
                                total: 2300,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            }
                        },
                        "productCount": 7
                    }
                });
            }
        }
    },
    {
        path: '/cart/{id}/{size}',
        method: ['DELETE'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.params);
                reply({
                    "status": true,
                    "message": "Successfully Remove From Cart",
                    "data": {
                        "product": {
                            "id": "A2",
                            "size": "XL"
                        },
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            "discount": 500,
                            "tax": {
                                total: 2300,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            },
                            "productCount": 7
                        }
                    }
                });
            }
        }
    },
    {
        path: '/api/v1/product',
        method: ['GET'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                        status: true,
                        message: 'Successfully Found',
                        data: {
                            name: "Jules 'AsIAm' Black Tee",
                            totalRating: 67,

                            "sizeGuideImageUrl": "http://google.com/img.jpg",
                            imageData: [
                                {
                                    url: "http://res.cloudinary.com/didijhb0z/image/upload/product/images/qa/151ASMTFSH03-RED/151ASMTFSH03-RED_1.jpg",
                                    type: "main"
                                }
                            ],
                            description: 'This graphic tee is perfect for transitioning into the new season. This crew neck tee features a signature graphic print at chest and made with 100% cotton jersey for a comfortable feel.',
                            originalPrice: 699,
                            discountPercentage: 0,
                            salePrice: 699,
                            couponCode: 'ASKKNS35',
                            specialPrice: 500,
                            sizes: [
                                {
                                    type: 'S',
                                    availability: 0
                                },
                                {
                                    type: 'M',
                                    availability: 0
                                },
                                {
                                    type: 'L',
                                    availability: 1
                                },
                                {
                                    type: 'XL',
                                    availability: 1
                                },
                                {
                                    type: 'XXL',
                                    availability: 0
                                }
                            ],
                            relatedProducts: [
                                {
                                    name: "abc",
                                    id: 2222,
                                    imageData: [
                                        {
                                            url: "http://res.cloudinary.com/didijhb0z/image/upload/product/images/qa/151ASMTFSH03-RED/151ASMTFSH03-RED_1.jpg",
                                            type: "main"
                                        }
                                    ]
                                },
                                {
                                    name: "",
                                    id: 3333,
                                    imageData: [
                                        {
                                            url: "http://res.cloudinary.com/didijhb0z/image/upload/product/images/qa/151ASMTFSH03-RED/151ASMTFSH03-RED_1.jpg",
                                            type: "main"
                                        }
                                    ]
                                }
                            ],
                            asStylingTips: 'Lounge In This Remarkably Comfy Polo! Wear It With Fleece Sweatpants When You Want To Snuggle Up In Bed Or With Ripped Jeans, A Sleeveless Quilted Jacket And Canvas Shoes When You Step Out!',
                            infoAndCare: 'productInformation',
                            breadCrumb: {
                                label: "MEN",
                                url: "/MEN-pl-26e8d018-bbb5-4d9b-91ad-b124aeac4667",
                                categoryId: "26e8d018-bbb5-4d9b-91ad-b124aeac4667",
                                children: [
                                    {
                                        label: "Topwear",
                                        url: "/topwear",
                                        categoryId: "7b34c055-4ba1-4bcc-9abb-91f5d14b05ef",
                                        children: [
                                            {
                                                label: "T-Shirts",
                                                url: null,
                                                categoryId: "10829dfc-5187-44cd-bf38-cc6a1a10b23c",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                );
            }
        }
    },
    {
        path: '/cart/voucher',
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
                            "total": 8900,
                            "subTotal": 23030,
                            "giftVoucher": 3000,
                            "tax": {
                                total: 63800,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            }
                        },
                        "productCount": 3
                    }
                });
            }
        }
    },
    {
        path: '/cart/voucher',
        method: ['DELETE'],
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
                            "total": 1000,
                            "subTotal": 23030,
                            "giftVoucher": 0,
                            "tax": {
                                total: 2300,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            }

                        },
                        "productCount": 3
                    }
                });
            }
        }
    },
    {
        path: '/cart/voucher/{code}/balance',
        method: ['GET'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Voucher  ‘abcde12345’ balance is 4000",
                    "data": {
                        "balance": 4000
                    }
                });
            }
        }
    },
    {
        path: '/bag/count',
        method: ['GET'],
        config: {
            description: 'Total Bag Count',
            notes: 'Total Bag Count',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                        "status": true,
                        "message": "Total product count in bag",
                        "data": {
                            "totalProductCount": 3
                        }
                    }
                );
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
                        "lineItems": [
                            {
                                "product": {
                                    "name": "A1",
                                    "id": "A1",
                                    "description": "151ORMTHPL20",
                                    "discountAmount": 0,
                                    "price": 1000,
                                    "subTotal": 1000,
                                    "size": "L",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 2
                            },
                            {
                                "product": {
                                    "name": "A2",
                                    "id": "A2",
                                    "description": "151ORMTHPL20",
                                    "discountAmount": 0,
                                    "price": 1000,
                                    "subTotal": 1000,
                                    "size": "XL",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 3
                            },
                            {
                                "product": {
                                    "name": "A3",
                                    "id": "A3",
                                    "description": "151ORMTHPL20",
                                    "discountAmount": 250,
                                    "price": 1000,
                                    "subTotal": 1000,
                                    "size": "XXL",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 4
                            }
                        ],
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            /*"discount": 500,*/
                            "tax": {
                                total: 2300,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 15,
                                        amount: 599
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 12.5,
                                        amount: 250
                                    }
                                ]
                            }
                        },
                        "productCount": 7
                    }
                };
                reply(obj);
            }
        }
    }
];