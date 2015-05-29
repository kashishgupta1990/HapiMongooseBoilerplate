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
        path: '/cart/product/stock',
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
                            "discountPercentage": 2,
                            "price": 1000,
                            "subTotal": 1000
                        },
                        "quantity": 15,
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
                        "productCount": 4
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
                            "productId": "A2",
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
        path: '/cart/voucher/{code}',
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
        path: '/content/navigation',
        method: ['GET'],
        config: {
            description: 'BAG Here',
            notes: 'BAG',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "data": {
                        "topNavigation": [
                            {
                                "categoryId": "a7d27f82-edf2-4c52-94f2-04449cad0d1f",
                                "children": [],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "undefined",
                                "label": "NEW IN",
                                "url": "/new-in-pl-a7d27f82-edf2-4c52-94f2-04449cad0d1f"
                            },
                            {
                                "categoryId": "26e8d018-bbb5-4d9b-91ad-b124aeac4667",
                                "children": [
                                    {
                                        "categoryId": "976ce99b-2de1-4974-8ae2-33aa7b1c110a",
                                        "children": [
                                            {
                                                "categoryId": "59aae224-5920-477b-a3fe-815b5c09ecc9",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Winter Wear",
                                                "url": "/men/winter-wear-pl-59aae224-5920-477b-a3fe-815b5c09ecc9"
                                            },
                                            {
                                                "categoryId": "42c23cfc-277e-407b-8296-7b7c7a872f48",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Clearance",
                                                "url": "/clearance-sale-pl-42c23cfc-277e-407b-8296-7b7c7a872f48"
                                            }
                                        ],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "undefined",
                                        "label": "New arrivals",
                                        "url": "/men/new-arrivals-pl-976ce99b-2de1-4974-8ae2-33aa7b1c110a"
                                    },
                                    {
                                        "categoryId": "7b34c055-4ba1-4bcc-9abb-91f5d14b05ef",
                                        "children": [
                                            {
                                                "categoryId": "24651ea3-c1fb-47ae-9c33-5f076e0deac4",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Casual Shirts",
                                                "url": "/men/topwear/casual-shirts-pl-24651ea3-c1fb-47ae-9c33-5f076e0deac4"
                                            },
                                            {
                                                "categoryId": "10829dfc-5187-44cd-bf38-cc6a1a10b23c",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "T-Shirts",
                                                "url": "/men/topwear/t-shirts-pl-10829dfc-5187-44cd-bf38-cc6a1a10b23c"
                                            },
                                            {
                                                "categoryId": "3c1bead7-5e2a-4501-898d-cb0b7c7b9c09",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Polos",
                                                "url": "/men/topwear/polos-pl-3c1bead7-5e2a-4501-898d-cb0b7c7b9c09"
                                            },
                                            {
                                                "categoryId": "005044bd-287c-4937-90c9-b49bcfaded11",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Pullovers",
                                                "url": "/men/topwear/pullovers-pl-005044bd-287c-4937-90c9-b49bcfaded11"
                                            }
                                        ],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "undefined",
                                        "label": "Topwear",
                                        "url": "/men/top-wear-pl-7b34c055-4ba1-4bcc-9abb-91f5d14b05ef"
                                    },
                                    {
                                        "categoryId": "3a52e2e0-b539-45ef-bb03-5d9b9a5e708b",
                                        "children": [
                                            {
                                                "categoryId": "5effddfb-8d50-4611-a55b-64de68a19c09",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Track Pants",
                                                "url": "/men/track-pants-pl-5effddfb-8d50-4611-a55b-64de68a19c09"
                                            }
                                        ],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "undefined",
                                        "label": "Bottomwear",
                                        "url": "/men/bottomwear-pl-3a52e2e0-b539-45ef-bb03-5d9b9a5e708b"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "undefined",
                                "label": "MEN",
                                "url": "/men-pl-26e8d018-bbb5-4d9b-91ad-b124aeac4667"
                            },
                            {
                                "categoryId": "41d2c0e2-2485-42f7-8189-fbe8baead260",
                                "children": [
                                    {
                                        "categoryId": "ca6d3bf2-eeb6-4d27-a198-727e74fbae99",
                                        "children": [
                                            {
                                                "categoryId": "73fc0703-f74c-472d-ae87-6e87d624452a",
                                                "children": [],
                                                "fullParentPath": null,
                                                "isActive": "true",
                                                "isDeleted": "false",
                                                "isVisible": "undefined",
                                                "label": "Casual Shirts",
                                                "url": "/casual-shirts-pl-73fc0703-f74c-472d-ae87-6e87d624452a"
                                            }
                                        ],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "undefined",
                                        "label": "Topwear",
                                        "url": "/topwear-pl-ca6d3bf2-eeb6-4d27-a198-727e74fbae99"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "undefined",
                                "label": "WOMEN",
                                "url": "/ women-pl-41d2c0e2-2485-42f7-8189-fbe8baead260"
                            },
                            {
                                "categoryId": "38c43253-1277-48a3-9c05-9b33399879d3",
                                "children": [],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "undefined",
                                "label": "AS I AM",
                                "url": "/as-i-am-pl-38c43253-1277-48a3-9c05-9b33399879d3"
                            },
                            {
                                "categoryId": "",
                                "children": [
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test1",
                                        "url": "/"
                                    },
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test2",
                                        "url": "/"
                                    },
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test3",
                                        "url": "/"
                                    },
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test4",
                                        "url": "/"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "BLOG",
                                "url": "/blog"
                            },
                            {
                                "categoryId": "",
                                "children": [
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test",
                                        "url": "/test"
                                    },
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "test",
                                        "url": "/"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "MEDIA",
                                "url": "/media-coverage"
                            },
                            {
                                "categoryId": "aab3ea1a-b33e-4859-a2b1-aea841ca026f",
                                "children": [
                                    {
                                        "categoryId": "3d809f87-ef8b-4c8d-965c-0da4bae7223f",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "undefined",
                                        "label": "AS SALE",
                                        "url": "/as-sale-pl-3d809f87-ef8b-4c8d-965c-0da4bae7223f"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "undefined",
                                "label": "SALE",
                                "url": "/sale-pl-aab3ea1a-b33e-4859-a2b1-aea841ca026f"
                            }
                        ],
                        "footer": [
                            {
                                "categoryId": "",
                                "children": [
                                    {
                                        "categoryId": "",
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Our Story",
                                        "url": "/our-story"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Promoters",
                                        "url": "/the-promoters"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Media",
                                        "url": "/media-coverage"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "ABOUT US",
                                "url": "/"
                            },
                            {
                                "categoryId": null,
                                "children": [
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Cash On Delivery",
                                        "url": "/cash-on-delivery"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Easy Returns",
                                        "url": "/easy-returns"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Shipping Options",
                                        "url": "/shipping-options"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "WHY US",
                                "url": "/"
                            },
                            {
                                "categoryId": null,
                                "children": [
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Contact Us",
                                        "url": "/help-n-contact"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Return & Exchange",
                                        "url": "/return-segment"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Order Cancellation",
                                        "url": "/order-cancellation"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "FAQ",
                                        "url": "/faqs"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "HELP",
                                "url": "/"
                            },
                            {
                                "categoryId": null,
                                "children": [
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Track My Order",
                                        "url": "/sales/order/history"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Privacy Policy",
                                        "url": "/privacy-policy"
                                    },
                                    {
                                        "categoryId": null,
                                        "children": [],
                                        "fullParentPath": null,
                                        "isActive": "true",
                                        "isDeleted": "false",
                                        "isVisible": "true",
                                        "label": "Terms & Conditions",
                                        "url": "/terms-n-conditions"
                                    }
                                ],
                                "fullParentPath": null,
                                "isActive": "true",
                                "isDeleted": "false",
                                "isVisible": "true",
                                "label": "GENERAL",
                                "url": "/"
                            }
                        ]
                    },
                    "status": true,
                    "message": null
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
                                    "discountAmount": 100,
                                    "discountPercentage": 10,
                                    "price": 1000,
                                    "size": "L",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 2,
                                "subTotal": 1000
                            },
                            {
                                "product": {
                                    "name": "A2",
                                    "id": "A2",
                                    "description": "151ORMTHPL20",
                                    "discountAmount": 0,
                                    "discountPercentage": 0,
                                    "price": 1000,
                                    "size": "XL",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 3,
                                "subTotal": 1000
                            },
                            {
                                "product": {
                                    "name": "A3",
                                    "id": "A3",
                                    "description": "151ORMTHPL20",
                                    "discountAmount": 250,
                                    "discountPercentage": 0,
                                    "price": 1000,
                                    "size": "XXL",
                                    "color": "RED",
                                    "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1429247796/download_nhchd3.jpg"
                                },
                                "quantity": 4,
                                "subTotal": 1000
                            }
                        ],
                        "cartTotal": {
                            "total": 8000,
                            "subTotal": 23030,
                            /*"discount": 500,*/
                            /*"deliveryCharges":23,*/
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
    },
    {
        path: '/address',
        method: ['GET'],
        config: {
            description: 'Delivery Here',
            notes: 'Delivery Here',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Delivery Address Successfully Fetch",
                    "data": {
                        addresses: [
                            {
                                id: '123123123-123123-123123',
                                pinCode: 110063,
                                fullName: 'Kashish Gupta',
                                addressLine1: 'B4-82 Paschim Vihar',
                                addressLine2: 'New Delhi',
                                city: 'Delhi',
                                state: 'Delhi',
                                country: 'India',
                                phone: '9999749722'
                            },
                            {
                                id: '12312312-232-3-23-23',
                                pinCode: 110063,
                                fullName: 'Shubham Gupta',
                                addressLine1: 'B4-82 Paschim Vihar',
                                addressLine2: 'New Delhi',
                                city: 'Delhi',
                                state: 'Delhi',
                                country: 'India',
                                phone: '9999749722'
                            }
                        ]
                    }
                })
                    .state('yoyo', 'kashish')
                    .header("Access-Control-Allow-Credentials", "true");
            }
        }
    },
    {
        path: '/address',
        method: ['POST'],
        config: {
            description: 'Delivery Here',
            notes: 'Delivery Here',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Address Successfully Saved",
                    "data": {
                        id: '12312312-232-3-23-23'
                    }
                });
            }
        }
    },
    {
        path: '/address/{id}',
        method: ['DELETE'],
        config: {
            description: 'Delivery Here',
            notes: 'Delivery Here',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Address Successfully Removed",
                    "data": {
                        id: '12312312-232-3-23-23'
                    }
                });
            }
        }
    },
    {
        path: '/payment/provider',
        method: ['GET'],
        config: {
            description: 'Payment Provider',
            notes: 'Payment Provider',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "data": [
                        {
                            "provider": "Ccavenuepay Payment",
                            "payment": [
                                {
                                    "mode": "Credit/Debit Card",
                                    "methods": ["AMEX / Diners Club / Others", "VISA", "MasterCard"]
                                },
                                {
                                    "mode": "Net Banking",
                                    "methods": ["Net Banking"]
                                }
                            ]
                        },
                        {
                            "provider": "PAYTM",
                            "payment": [
                                {
                                    "mode": "Credit/Debit Card",
                                    "methods": ["AMEX / Diners Club / Others", "VISA", "MasterCard"]
                                },
                                {
                                    "mode": "Net Banking",
                                    "methods": ["Net Banking"]
                                }
                            ]

                        }
                    ],
                    "status": true,
                    "message": "Returning all Payment Providers."
                });
            }
        }
    },
    {
        path: '/address/pincode/{code}',
        method: ['GET'],
        config: {
            description: 'Delivery amount, Tax and COD available ',
            notes: 'Delivery amount, Tax and COD available ',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "data": {
                        "CODAvailable": true,
                        "cartTotal": {
                            "total": 2000,
                            "subTotal": 2000,
                            "deliveryCharges": 99,
                            "giftVoucher": 10,
                            "tax": {
                                total: 20,
                                details: [
                                    {
                                        label: "CST-Apparel",
                                        percentage: 5,
                                        amount: 5
                                    },
                                    {
                                        label: "VAT-Apparel",
                                        percentage: 18.5,
                                        amount: 5
                                    }
                                ]
                            }
                        },
                        "productCount": 4
                    },
                    "status": true,
                    "message": "Pin code successfully applied"
                });
            }
        }
    },
    {
        path: '/checkout/payment',
        method: ['GET'],
        config: {
            description: 'Delivery amount, Tax and COD available ',
            notes: 'Delivery amount, Tax and COD available ',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                var requestPayload = {
                    address: [
                        {
                            type: "billing",
                            pinCode: 110063,
                            fullName: 'Kashish Gupta',
                            addressLine1: 'B4-82 Paschim Vihar',
                            addressLine2: 'New Delhi',
                            city: 'Delhi',
                            state: 'Delhi',
                            country: 'India',
                            phoneNumber: '9999749722'
                        },
                        {
                            type: "delievry",
                            pinCode: 110063,
                            fullName: 'Kashish Gupta',
                            addressLine1: 'B4-82 Paschim Vihar',
                            addressLine2: 'New Delhi',
                            city: 'Delhi',
                            state: 'Delhi',
                            country: 'India',
                            phoneNumber: '9999749722'
                        }
                    ],
                    "emailId": "guest@intelligrape.com",
                    "provider": {
                        name: "PAYTM",
                        "payment": {
                            "mode": "Credit/Debit Card",
                            "methods": "MasterCard"
                        }
                    }
                }
                reply(request.payload);
            }
        }
    },
    {
        path: '/category/landingpage',
        method: ['GET'],
        config: {
            description: 'Landing Page',
            notes: 'Landing Page',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Landing Page Images successfully loaded.",
                    "data": {
                        "categoryId": "123123123-232-123123123",
                        "name": "Men",
                        "landingPageImages": [
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "1",
                                "redirectUrl": "/google-1"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "2",
                                "redirectUrl": "/google-2"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "3",
                                "redirectUrl": "/google-3"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "4",
                                "redirectUrl": "/google-4"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "5",
                                "redirectUrl": "/google-5"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "6",
                                "redirectUrl": "/google-6"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "7",
                                "redirectUrl": "/google-7"
                            },
                            {
                                "imageUrl": "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                "position": "8",
                                "redirectUrl": "/google-8"
                            }
                        ]
                    }
                });
            }
        }
    },
    {
        path: '/home',
        method: ['GET'],
        config: {
            description: 'Home Page',
            notes: 'Home Page',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "status": true,
                    "message": "Home Page Images successfully loaded.",
                    "data": {
                        "homePagePanels": [
                            {
                                "images": [
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/media/v3/home-page/The-Chic-List-home-slider-19may.jpg",
                                        redirectUrl: "/google-1-1"
                                    },
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/media/v3/home-page/high-on-color-polos-slider-19may1.jpg",
                                        redirectUrl: "/google-1-2"
                                    },
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/media/v3/home-page/The-Chic-List-home-slider-19may.jpg",
                                        redirectUrl: "/google-1-3"
                                    },
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/media/v3/home-page/high-on-color-polos-slider-19may1.jpg",
                                        redirectUrl: "/google-1-4"
                                    }
                                ],
                                "panel": 1
                            },
                            {
                                "images": [
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/skin/frontend/enterprise/lecom/images-v3/women-wearing-american-swan-floral-dress-home-page.jpg",
                                        redirectUrl: "2-----1",
                                        position: 1
                                    },
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/skin/frontend/enterprise/lecom/images-v3/men-wearing-americanswan-navy-trouusers.jpg",
                                        redirectUrl: "2-----2",
                                        position: 2
                                    }
                                ],
                                "panel": 2
                            },
                            {
                                "images": [
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/skin/frontend/enterprise/lecom/images-v3/americanswan-top-flight-tees-collection.jpg",
                                        redirectUrl: "/google-3"
                                    }
                                ],
                                "panel": 3
                            },
                            {
                                "images": [
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/skin/frontend/enterprise/lecom/images-v3/bling-bling-women-accessories-americanswan.jpg",
                                        redirectUrl: "/google-3",
                                        position: 1
                                    },
                                    {
                                        url: "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                        redirectUrl: "/google-3",
                                        position: 2
                                    }
                                ],
                                "panel": 4
                            },
                            {
                                "images": [
                                    {
                                        url: "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                        redirectUrl: "/google-3",
                                        position: 1
                                    },
                                    {
                                        url: "http://res.cloudinary.com/didijhb0z/image/upload/v1432021332/zqr2aqnqghcgkht46wo0.jpg",
                                        redirectUrl: "/google-3",
                                        position: 2
                                    }
                                ],
                                "panel": 5
                            }
                        ]
                    }
                });
            }
        }
    },
    {
        path: '/checkout/validate',
        method: ['POST'],
        config: {
            description: 'Total Bag Count',
            notes: 'Total Bag Count',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);

                reply({
                    status: true,
                    message: "Valid Email ID",
                    data: {
                        "emailId": "guest@intelligrape.com"
                    }
                });

                /* reply({
                 status: false,
                 message: "Valid Email ID",
                 data: {
                 "emailId": "guest@intelligrape.com"
                 }
                 });*/
            }
        }
    },
    {
        path: '/checkout/payment',
        method: ['POST'],
        config: {
            description: 'Checkout Payment',
            notes: 'Total Bag Count',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    status: true,
                    message: "To Be Decided"
                });
            }
        }
    },
    {
        path: '/banner',
        method: ['GET'],
        config: {
            description: 'Checkout Payment',
            notes: 'Total Bag Count',
            tags: ['api'],
            handler: function (request, reply) {
                log.cool('Request Payload: ', request.payload);
                reply({
                    "data": {
                        "max": 2,
                        "offset": 0,
                        "productCategory": {
                            "title": "Mens Sunglasses GOSF",
                            "name": "Mens Sunglasses GOSF",
                            "description": null,
                            "widget": {
                                "banners": [
                                    {
                                        "imageURL": "http://res.cloudinary.com/didijhb0z/image/upload/category/banners/dev/151ASWTHGT12-MEBL_abc.jpg",
                                        "description": "tr",
                                        "type": "Top-Banner",
                                        "link": "ert"
                                    },
                                    {
                                        "imageURL": "http://res.cloudinary.com/didijhb0z/image/upload/category/banners/dev/151ASWTHGT12-MEBL_abc.jpg",
                                        "description": "as",
                                        "type": "Banner-Strip",
                                        "link": "ds"
                                    },
                                    {
                                        "imageURL": "http://res.cloudinary.com/didijhb0z/image/upload/category/banners/dev/Screenshot from 2015-02-24 15:11:06.png",
                                        "description": "f",
                                        "type": "Banner-Strip",
                                        "link": "sa"
                                    }
                                ],
                                "showTicker": true,
                                "activationTimeStamp": 1451939400000,
                                "duration": 439800000
                            }
                        },
                        "totalProducts": 1,
                        "sortingOptions": [
                            "Discount",
                            "Arrival"
                        ],
                        "productList": [
                            {
                                "pageUrl": "http: //www.americanswan.com/whatcom-golden-glow-pullover.html",
                                "currencyType": "INR",
                                "currencySymbol": "Rs",
                                "oldPrice": 1799.0,
                                "discountPercentage": 0,
                                "specialPrice": 1799.0,
                                "name": "151ASMBKPT01",
                                "sizes": [],
                                "imageData": [
                                    {
                                        url: "http://res.cloudinary.com/didijhb0z/image/upload/product/images/qa/151ASMTFSH03-RED/151ASMTFSH03-RED_1.jpg",
                                        type: "main"
                                    },
                                    {
                                        url: "http://static.americanswan.com/Lecom_Magento/media/catalog/product/cache/1/hover_image/235x250/9df78eab33525d08d6e5fb8d27136e95/1/5/151ORMTHSH10-ORWH_hover__6_1.jpg",
                                        type: "hover"
                                    }
                                ]

                            }
                        ],
                        "leftNav": {
                            "categoryNavigation": {
                                "label": "ACCESSORIES",
                                "url": "",
                                "categoryId": "2b0d432c-a1d5-443e-bfcd-029d6b2fc119",
                                "isSelected": false,
                                "children": [
                                    {
                                        "label": "Mens Sunglasses GOSF",
                                        "url": null,
                                        "categoryId": "04252288-7fa9-4156-ad39-1be9a587e5c3",
                                        "isSelected": true,
                                        "children": []
                                    }
                                ]
                            },
                            "filterGroup": [
                                {
                                    "label": "price",
                                    "options": [
                                        {
                                            "code": null,
                                            "label": "Rs1500 - Rs2000",
                                            "isSelected": false,
                                            "productCount": 1
                                        }
                                    ]
                                },
                                {
                                    "label": "color",
                                    "options": [
                                        {
                                            "label": "Red",
                                            "isSelected": false,
                                            "productCount": 1
                                        }
                                    ]
                                },
                                {
                                    "label": "discount",
                                    "options": [
                                        {
                                            "code": null,
                                            "label": "No Discount",
                                            "isSelected": false,
                                            "productCount": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "status": 200,
                    "message": "Category found"
                });
            }
        }
    }
];