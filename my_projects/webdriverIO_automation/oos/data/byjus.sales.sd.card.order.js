import { getRandomNum } from '../utils/function';
let randomVar = getRandomNum(4);
let current_date = new Date();
let current_iso_date = current_date.toISOString();
const actionDetails = {
    "createdAt": current_date,
    "createdBy": "system",
    "notConfirmedAt": current_date,
    "notConfirmedBy": "system",
    "confirmedAt": current_date,
    "confirmedBy": "system",
    "packagingInProgressAt": current_date,
    "packagingInProgressBy": "system",
    "shippedAt": current_date,
    "shippedBy": "system",
    "dispatchedAt": current_date,
    "dispatchedBy": "system",
    "deliveredAt": current_date,
    "deliveredBy": "system"
};

const byjusSalesOrderSdCard = {

    "draftOrderRefId": "628230196841e6001b6f0ef5",
    "draftOrderId": "DO-220516110601" + randomVar,
    "salesOrderId": "SO-220516110601" + randomVar,
    "orderType": "SPLIT",
    "courseType": "K10",
    "orgFormattedName": "byjus",
    "currency": "INR",
    "salesSubOrderIds": [
        "SSO1-220516110601" + randomVar,
        "SSO2-220516110601" + randomVar
    ],
    "customerDetails": {
        "customerId": "CX-2205030752467730",
        "name": "trina sixpa",
        "identifierDetails": [],
        "alternateName": "trina six",
        "mobileNo": "+91-2356723465",
        "alternateMobileNo": "+91-2356723465",
        "email": "trina.acharya+32@byjus.com",
        "alternateEmail": null,
        "type": null,
        "communicationPreferences": {},
        "isBooksOpted": false
    },
    "billingCustomerDetails": null,
    "lineItems": [
        {
            "basePrice": "20000",
            "board": null,
            "continousPrice": "15000",
            "course": "Maths/Science",
            "grade": "5",
            "name": "5th Class Maths+Science (SD Card-Byjus) May-2023",
            "productId": "1147295",
            "sku": "5th Class Maths+Science (SD Card-Byjus) May-2023",
            "validity": "MAY 2023",
            "productType": "course",
            "skuId": "SD05NA23",
            "skuName": "5th Grade SD Card May 2023",
            "itemType": "sd_card",
            "createdAt": "2019-09-03T07:17:23.680Z",
            "internationalBasePrice": {
                "United Arab Emirates": 2600,
                "Oman": 265,
                "Kuwait": 220,
                "Saudi Arabia": 2630,
                "Qatar": 2590
            },
            "internationalContinousPrice": {
                "United Arab Emirates": 800,
                "Oman": 80,
                "Kuwait": 70,
                "Saudi Arabia": 800,
                "Qatar": 800
            },
            "priceDetails": {
                "united_arab_emirates": {
                    "basePrice": 1050,
                    "continousPrice": 800
                },
                "oman": {
                    "basePrice": 110,
                    "continousPrice": 85
                },
                "qatar": {
                    "basePrice": 1050,
                    "continousPrice": 800
                },
                "saudi_arabia": {
                    "basePrice": 1050,
                    "continousPrice": 800
                },
                "kuwait": {
                    "basePrice": 90,
                    "continousPrice": 70
                }
            },
            "hsnCode": "85235100",
            "skuSubType": "SD Card",
            "skuType": "Product",
            "isValidSku": true,
            "remarks": null,
            "validatedAt": "2021-10-19T07:27:28.864Z",
            "programId": "BTLAKXAS0001",
            "financeCode": "SD05NA",
            "itemId": "0E1jOHwluwUXP0rBcNyD814c",
            "studentId": "trina six-1",
            "tabletId": "",
            "orgId": "byjus",
            "salesSubOrderId": "SSO1-220516110601" + randomVar,
            "itemStatus": "mapping_pending",
            "invoicePrice": "14000.00"
        },
        {
            "sku": "5th Grade BYJU'S Classes May 2023",
            "course": "Maths/Science",
            "grade": "5",
            "board": null,
            "productType": "course",
            "productId": "1817096",
            "name": "5th Grade BYJU'S Classes May 2023",
            "validity": "MAY 2023",
            "continousPrice": "10000",
            "basePrice": "15000",
            "type": "BYJUS_CLASSES_UPGRADE",
            "skuId": "UB05NA23",
            "skuName": "5th Grade BYJU'S Classes May 2023",
            "itemType": "byjus_premium",
            "createdAt": "2019-09-03T07:17:23.680Z",
            "skuSubType": "BYJU's Classes Upgrade",
            "skuType": "Service",
            "priceDetails": {
                "united_arab_emirates": {
                    "basePrice": 550,
                    "continousPrice": 300
                },
                "kuwait": {
                    "basePrice": 50,
                    "continousPrice": 25
                },
                "oman": {
                    "basePrice": 60,
                    "continousPrice": 35
                },
                "qatar": {
                    "basePrice": 550,
                    "continousPrice": 300
                },
                "saudi_arabia": {
                    "basePrice": 550,
                    "continousPrice": 300
                }
            },
            "isValidSku": true,
            "remarks": null,
            "validatedAt": "2021-10-19T06:33:29.005Z",
            "programId": "BCOPKXSY0002",
            "financeCode": "UB05NA",
            "itemId": "gdHzTC40bNnZp0ez7_QL1TV9",
            "studentId": "trina six-1",
            "tabletId": "",
            "pgItemId": 973629,
            "orgId": "byjus",
            "salesSubOrderId": "SSO2-220516110601" + randomVar,
            "itemStatus": "mapping_pending",
            "invoicePrice": "14000.00"
        }
    ],
    "shipmentLineItems": [
        {
            "properties": {
                "part": 1,
                "warehouse": [
                    "IBC"
                ],
                "combinations": [
                    "05-06"
                ],
                "board": "CBSE",
                "grade": "05-06",
                "appVersion": "NA",
                "sdCardVersion": "",
                "sdCardMemory": 16,
                "location": "",
                "noOfGrade": "",
                "apkRelease": current_iso_date,
                "contentRelease": current_iso_date,
                "inventoryRelease": current_iso_date,
                "comboDetails": [
                    {
                        "initialClass": 5,
                        "finalClass": 6,
                        "updatedBy": "divya.g@byjus.com"
                    }
                ],
                "programId": "UBEPTPSY0001",
                "scheme": "paper_cut"
            },
            "skuId": "S4JM0506",
            "skuName": "SD Card",
            "type": "sd_card",
            "activeGrades": [
                5
            ],
            "activeSalesItems": [
                "SD05NA23",
                "UB05NA23"
            ],
            "activeLineItemIds": [
                "0E1jOHwluwUXP0rBcNyD814c",
                "gdHzTC40bNnZp0ez7_QL1TV9"
            ],
            "studentId": "trina six-1",
            "tabletId": "undefined",
            "itemStatus": "mapping_pending",
            "pgShipmentLineItemId": 195665
        }
    ],
    "returnLineItems": [],
    "addonLineItems": [],
    "salesDetails": {
        "typeOfSales": "DS Sales",
        "directSalesBy": "sanjay.karkera@byjus.com",
        "directSalesByCampaign": "Livechat Calling",
        "salesAppointmentBy": null,
        "salesAppointmentByCampaign": "Hyderabad",
        "incentiveDate": current_iso_date,
        "salesAppointmentByRole": "bda",
        "directSalesByDept": "business_development",
        "salesAppointmentByDept": "",
        "salesIndex": 175
    },
    "addressDetails": {
        "billing": {
            "addressLine1": "test",
            "addressLine2": "test",
            "zipcode": "373888",
            "addressLine3": "dsad",
            "country": "India",
            "state": "Chandigarh",
            "city": "asasd",
            "address": "test\n test\n dsad"
        },
        "shipping": {
            "addressLine1": "test",
            "addressLine2": "test",
            "zipcode": "373888",
            "addressLine3": "dsad",
            "country": "India",
            "state": "Chandigarh",
            "city": "asasd",
            "address": "test\n test\n dsad"
        }
    },
    "paymentDetails": {
        "type": "NON_EMI",
        "totalAmount": 28000,
        "totalEmiAmount": 0,
        "totalPrepaidAmount": 28000,
        "totalPostpaidAmount": 0,
        "paymentMethod": "NGP",
        "payments": [
            {
                "isPrepaid": true,
                "provider": "CHEQUE",
                "referenceId": "16526997012272-12838687623",
                "amount": 28000,
                "additionalDetails": {
                    "bank": "axis"
                },
                "attachments": [
                    {
                        "name": "cheque",
                        "url": "https://orderhive-payments.s3.ap-southeast-1.amazonaws.com/development/628230196841e6001b6f0ef5/cheque/cheque-20220516_16446290.png"
                    }
                ],
                "type": "DOWN_PAYMENT",
                "currency": "",
                "isActive": true
            }
        ],
        "minDownPaymentDetails": {
            "isMatched": true,
            "minDownPaymentAmount": 0
        },
        "isRepunchedCase": false,
        "paymentMode": "CHEQUE",
        "paymentAmountSplit": "28000",
        "subscriptionDetails": {},
        "paymentStatus": "NOT_PAID"
    },
    "financeOrderId": "29ea8395bc614f488b20d1bf86967f33",
    "productDetails": {
        "productType": "single",
        "mentoringDetails": [
            null
        ],
        "bhlpCourseDetails": [
            {
                "id": 7102,
                "name": "FoT Batch New 32",
                "is_active": true,
                "time_zone": "IST",
                "batch_country": "India",
                "batch_start_date": "2022-04-06",
                "batch_end_date": "2022-05-26",
                "mandatory_sessions_count": 3,
                "optional_sessions_count": 0,
                "batch_type": "regular",
                "course_id": 4048,
                "course_name": "Test course for 5th grade",
                "course_fot_track_id": "cbse-5-1670-1700-lar",
                "course_proficiency_id": 2,
                "medium_of_instruction": "english",
                "course_batch": null,
                "cohort_id": 30,
                "course_type": "neo",
                "course_tag": "classroom",
                "slot_group_id": 4462,
                "tutor_language_enabled": true,
                "slot_group_name": "Tu-Th-Sa-4:30pm",
                "course_sub_tag": "Regular",
                "available_subjects": [
                    "Mathematics",
                    "Science"
                ],
                "slots": [
                    {
                        "id": 22222,
                        "day": "Tuesday",
                        "start_time": "16:30",
                        "end_time": "17:30",
                        "is_mandatory": true
                    },
                    {
                        "id": 22223,
                        "day": "Thursday",
                        "start_time": "16:30",
                        "end_time": "17:30",
                        "is_mandatory": true
                    },
                    {
                        "id": 22224,
                        "day": "Saturday",
                        "start_time": "16:30",
                        "end_time": "17:30",
                        "is_mandatory": true
                    }
                ]
            }
        ],
        "paymentType": "NON_EMI",
        "maxPrice": 35000,
        "minPrice": 28000,
        "discountedPrice": 0,
        "students": [
            {
                "studentProfileDetails": {
                    "isExistingProfile": false,
                    "existingPremiumId": "",
                    "existingFamilyId": ""
                },
                "hlpDetails": {
                    "courseDetails": [
                        {
                            "id": 7102,
                            "name": "FoT Batch New 32",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-06",
                            "batch_end_date": "2022-05-26",
                            "mandatory_sessions_count": 3,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4048,
                            "course_name": "Test course for 5th grade",
                            "course_fot_track_id": "cbse-5-1670-1700-lar",
                            "course_proficiency_id": 2,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "classroom",
                            "slot_group_id": 4462,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Tu-Th-Sa-4:30pm",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Mathematics",
                                "Science"
                            ],
                            "slots": [
                                {
                                    "id": 22222,
                                    "day": "Tuesday",
                                    "start_time": "16:30",
                                    "end_time": "17:30",
                                    "is_mandatory": true
                                },
                                {
                                    "id": 22223,
                                    "day": "Thursday",
                                    "start_time": "16:30",
                                    "end_time": "17:30",
                                    "is_mandatory": true
                                },
                                {
                                    "id": 22224,
                                    "day": "Saturday",
                                    "start_time": "16:30",
                                    "end_time": "17:30",
                                    "is_mandatory": true
                                }
                            ]
                        }
                    ],
                    "sessionDetails": [
                        {
                            "sessions": [
                                {
                                    "day": "Tuesday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                },
                                {
                                    "day": "Thursday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                },
                                {
                                    "day": "Saturday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                }
                            ],
                            "type": "neo"
                        }
                    ],
                    "initialClass": "5",
                    "initialValidity": "2023",
                    "batchCode": "Hlp_18-05-2022"
                },
                "courseType": [
                    "K10"
                ],
                "electiveDetails": [
                    {
                        "batch": {
                            "id": 7564,
                            "name": "English - Grade 05_6",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6285,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Thu-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Coding"
                            ],
                            "slots": [
                                {
                                    "id": 30141,
                                    "day": "Thursday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "Coding",
                        "slot": [
                            {
                                "id": 30141,
                                "day": "Thursday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    {
                        "batch": {
                            "id": 7563,
                            "name": "English - Grade 05_5",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6270,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Tue-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "English"
                            ],
                            "slots": [
                                {
                                    "id": 30126,
                                    "day": "Tuesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "English",
                        "slot": [
                            {
                                "id": 30126,
                                "day": "Tuesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    {
                        "batch": {
                            "id": 7566,
                            "name": "English - Grade 05_8",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6287,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Wed-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Social Studies"
                            ],
                            "slots": [
                                {
                                    "id": 30143,
                                    "day": "Wednesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "Social Studies",
                        "slot": [
                            {
                                "id": 30143,
                                "day": "Wednesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "doubtClassDetails": [
                    {
                        "id": 8344,
                        "name": "5th grade mon ",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-05-02",
                        "batch_end_date": "2022-06-24",
                        "mandatory_sessions_count": 1,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4335,
                        "course_name": "5th grade doubt clear class",
                        "course_fot_track_id": null,
                        "course_proficiency_id": 1,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "doubt_resolution",
                        "slot_group_id": 6773,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Mon 7:00",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Mathematics",
                            "Science"
                        ],
                        "slots": [
                            {
                                "id": 32257,
                                "day": "Monday",
                                "start_time": "19:00",
                                "end_time": "20:00",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "workshops": [],
                "items": [
                    {
                        "_id": "6103d707efa57b28dc84b11f",
                        "basePrice": "20000",
                        "board": null,
                        "city": null,
                        "continousPrice": "15000",
                        "course": "Maths/Science",
                        "grade": "5",
                        "name": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                        "productId": "1147295",
                        "sku": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                        "validity": "MAY 2023",
                        "cohort_id": 30,
                        "isMultipleProfilesSupported": true,
                        "updatedAt": "2021-05-10T10:42:25.382Z",
                        "isVerified": true,
                        "productType": "course",
                        "updatedBy": "finance_code_datafix_05-04-2022",
                        "skuId": "SD05NA23",
                        "skuName": "5th Grade SD Card May 2023",
                        "itemType": "course",
                        "createdAt": "2019-09-03T07:17:23.680Z",
                        "internationalBasePrice": {
                            "United Arab Emirates": 2600,
                            "Oman": 265,
                            "Kuwait": 220,
                            "Saudi Arabia": 2630,
                            "Qatar": 2590
                        },
                        "internationalContinousPrice": {
                            "United Arab Emirates": 800,
                            "Oman": 80,
                            "Kuwait": 70,
                            "Saudi Arabia": 800,
                            "Qatar": 800
                        },
                        "priceDetails": {
                            "united_arab_emirates": {
                                "basePrice": 1050,
                                "continousPrice": 800
                            },
                            "oman": {
                                "basePrice": 110,
                                "continousPrice": 85
                            },
                            "qatar": {
                                "basePrice": 1050,
                                "continousPrice": 800
                            },
                            "saudi_arabia": {
                                "basePrice": 1050,
                                "continousPrice": 800
                            },
                            "kuwait": {
                                "basePrice": 90,
                                "continousPrice": 70
                            }
                        },
                        "hsnCode": "85235100",
                        "skuSubType": "SD Card",
                        "skuType": "Product",
                        "isValidSku": true,
                        "remarks": null,
                        "validatedAt": "2021-10-19T07:27:28.864Z",
                        "programId": "BTLAKXAS0001",
                        "financeCode": "SD05NA",
                        "combinationType": "tlp",
                        "itemId": "0E1jOHwluwUXP0rBcNyD814c",
                        "studentId": "trina six-1",
                        "tabletId": "",
                        "orgId": "byjus"
                    },
                    {
                        "_id": "5f0d5d640b807b0012bf710b",
                        "sku": "5th Grade BYJU'S Classes May 2023",
                        "course": "Maths/Science",
                        "grade": "5",
                        "board": null,
                        "city": null,
                        "productType": "course",
                        "productId": "1817096",
                        "name": "5th Grade BYJU'S Classes May 2023",
                        "validity": "MAY 2023",
                        "continousPrice": "10000",
                        "basePrice": "15000",
                        "type": "BYJUS_CLASSES_UPGRADE",
                        "updatedBy": "price_update_datafix_06-04-2022",
                        "isVerified": true,
                        "skuId": "UB05NA23",
                        "skuName": "5th Grade BYJU'S Classes May 2023",
                        "itemType": "course",
                        "cohort_id": 30,
                        "createdAt": "2019-09-03T07:17:23.680Z",
                        "skuSubType": "BYJU's Classes Upgrade",
                        "skuType": "Service",
                        "updatedAt": "2021-05-10T10:42:25.571Z",
                        "priceDetails": {
                            "united_arab_emirates": {
                                "basePrice": 550,
                                "continousPrice": 300
                            },
                            "kuwait": {
                                "basePrice": 50,
                                "continousPrice": 25
                            },
                            "oman": {
                                "basePrice": 60,
                                "continousPrice": 35
                            },
                            "qatar": {
                                "basePrice": 550,
                                "continousPrice": 300
                            },
                            "saudi_arabia": {
                                "basePrice": 550,
                                "continousPrice": 300
                            }
                        },
                        "isValidSku": true,
                        "remarks": null,
                        "validatedAt": "2021-10-19T06:33:29.005Z",
                        "programId": "BCOPKXSY0002",
                        "financeCode": "UB05NA",
                        "combinationType": "byjus_classes_upgrade",
                        "itemId": "gdHzTC40bNnZp0ez7_QL1TV9",
                        "studentId": "trina six-1",
                        "tabletId": "",
                        "orgId": "byjus"
                    }
                ],
                "addOnItems": [],
                "mentoringDetails": [
                    {
                        "type": "neo",
                        "sessions": [
                            {
                                "day": "Tuesday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Thursday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Saturday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            }
                        ]
                    }
                ],
                "bhlpCourseDetails": [
                    {
                        "id": 7102,
                        "name": "FoT Batch New 32",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-06",
                        "batch_end_date": "2022-05-26",
                        "mandatory_sessions_count": 3,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4048,
                        "course_name": "Test course for 5th grade",
                        "course_fot_track_id": "cbse-5-1670-1700-lar",
                        "course_proficiency_id": 2,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "classroom",
                        "slot_group_id": 4462,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Tu-Th-Sa-4:30pm",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Mathematics",
                            "Science"
                        ],
                        "slots": [
                            {
                                "id": 22222,
                                "day": "Tuesday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22223,
                                "day": "Thursday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22224,
                                "day": "Saturday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "course": "K10/K12",
                "board": "CBSE",
                "validity": "2023",
                "tablet": "",
                "initialClass": "5",
                "formValues": {
                    "course": "K10/K12",
                    "board": "CBSE",
                    "subCourse": "",
                    "validity": 2023,
                    "tablet": "",
                    "userProfile": "newProfile",
                    "initialClass": "5",
                    "yearSelection": "2023",
                    "tabletId": "",
                    "mentoringDetails": [
                        {
                            "type": "neo",
                            "sessions": [
                                {
                                    "day": "Tuesday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                },
                                {
                                    "day": "Thursday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                },
                                {
                                    "day": "Saturday",
                                    "is_mandatory": true,
                                    "time": "16:30-17:30"
                                }
                            ]
                        }
                    ],
                    "bhlpCourseDetails": {
                        "id": 7102,
                        "name": "FoT Batch New 32",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-06",
                        "batch_end_date": "2022-05-26",
                        "mandatory_sessions_count": 3,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4048,
                        "course_name": "Test course for 5th grade",
                        "course_fot_track_id": "cbse-5-1670-1700-lar",
                        "course_proficiency_id": 2,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "classroom",
                        "slot_group_id": 4462,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Tu-Th-Sa-4:30pm",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Mathematics",
                            "Science"
                        ],
                        "slots": [
                            {
                                "id": 22222,
                                "day": "Tuesday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22223,
                                "day": "Thursday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22224,
                                "day": "Saturday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            }
                        ]
                    },
                    "mathPercent": "79",
                    "sciencePercent": "86",
                    "proficiency": "A2",
                    "schoolDetails": {
                        "schoolState": "Maharashtra",
                        "city": "Ahmednagar",
                        "schoolName": "other",
                        "otherSchoolName": "Ryan International School",
                        "schoolAddress": "3VGG+XG7, Friends Colony Kismat Nagar, Kurla West, Mumbai, Maharashtra 400070, India",
                        "schoolId": "",
                        "trackId": "cbse-5-1670-1700-lar"
                    },
                    "electiveDetails": [
                        {
                            "batch": {
                                "id": 7564,
                                "name": "English - Grade 05_6",
                                "is_active": true,
                                "time_zone": "IST",
                                "batch_country": "India",
                                "batch_start_date": "2022-04-25",
                                "batch_end_date": "2023-05-31",
                                "mandatory_sessions_count": 1,
                                "optional_sessions_count": 0,
                                "batch_type": "regular",
                                "course_id": 4073,
                                "course_name": "English - Grade 05",
                                "course_fot_track_id": null,
                                "course_proficiency_id": null,
                                "medium_of_instruction": "english",
                                "course_batch": null,
                                "cohort_id": 30,
                                "course_type": "neo",
                                "course_tag": "elective",
                                "slot_group_id": 6285,
                                "tutor_language_enabled": true,
                                "slot_group_name": "Thu-8:00PM",
                                "course_sub_tag": "Regular",
                                "available_subjects": [
                                    "Coding"
                                ],
                                "slots": [
                                    {
                                        "id": 30141,
                                        "day": "Thursday",
                                        "start_time": "20:00",
                                        "end_time": "21:00",
                                        "is_mandatory": true
                                    }
                                ]
                            },
                            "subject": "Coding",
                            "slot": [
                                {
                                    "id": 30141,
                                    "day": "Thursday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        {
                            "batch": {
                                "id": 7563,
                                "name": "English - Grade 05_5",
                                "is_active": true,
                                "time_zone": "IST",
                                "batch_country": "India",
                                "batch_start_date": "2022-04-25",
                                "batch_end_date": "2023-05-31",
                                "mandatory_sessions_count": 1,
                                "optional_sessions_count": 0,
                                "batch_type": "regular",
                                "course_id": 4073,
                                "course_name": "English - Grade 05",
                                "course_fot_track_id": null,
                                "course_proficiency_id": null,
                                "medium_of_instruction": "english",
                                "course_batch": null,
                                "cohort_id": 30,
                                "course_type": "neo",
                                "course_tag": "elective",
                                "slot_group_id": 6270,
                                "tutor_language_enabled": true,
                                "slot_group_name": "Tue-8:00PM",
                                "course_sub_tag": "Regular",
                                "available_subjects": [
                                    "English"
                                ],
                                "slots": [
                                    {
                                        "id": 30126,
                                        "day": "Tuesday",
                                        "start_time": "20:00",
                                        "end_time": "21:00",
                                        "is_mandatory": true
                                    }
                                ]
                            },
                            "subject": "English",
                            "slot": [
                                {
                                    "id": 30126,
                                    "day": "Tuesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        {
                            "batch": {
                                "id": 7566,
                                "name": "English - Grade 05_8",
                                "is_active": true,
                                "time_zone": "IST",
                                "batch_country": "India",
                                "batch_start_date": "2022-04-25",
                                "batch_end_date": "2023-05-31",
                                "mandatory_sessions_count": 1,
                                "optional_sessions_count": 0,
                                "batch_type": "regular",
                                "course_id": 4073,
                                "course_name": "English - Grade 05",
                                "course_fot_track_id": null,
                                "course_proficiency_id": null,
                                "medium_of_instruction": "english",
                                "course_batch": null,
                                "cohort_id": 30,
                                "course_type": "neo",
                                "course_tag": "elective",
                                "slot_group_id": 6287,
                                "tutor_language_enabled": true,
                                "slot_group_name": "Wed-8:00PM",
                                "course_sub_tag": "Regular",
                                "available_subjects": [
                                    "Social Studies"
                                ],
                                "slots": [
                                    {
                                        "id": 30143,
                                        "day": "Wednesday",
                                        "start_time": "20:00",
                                        "end_time": "21:00",
                                        "is_mandatory": true
                                    }
                                ]
                            },
                            "subject": "Social Studies",
                            "slot": [
                                {
                                    "id": 30143,
                                    "day": "Wednesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        }
                    ],
                    "doubtClassDetails": [
                        {
                            "id": 8344,
                            "name": "5th grade mon ",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-05-02",
                            "batch_end_date": "2022-06-24",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4335,
                            "course_name": "5th grade doubt clear class",
                            "course_fot_track_id": null,
                            "course_proficiency_id": 1,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "doubt_resolution",
                            "slot_group_id": 6773,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Mon 7:00",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Mathematics",
                                "Science"
                            ],
                            "slots": [
                                {
                                    "id": 32257,
                                    "day": "Monday",
                                    "start_time": "19:00",
                                    "end_time": "20:00",
                                    "is_mandatory": true
                                }
                            ]
                        }
                    ],
                    "languageOfInstruction": "english",
                    "languageOfInstructionId": 1
                },
                "productSelectionType": "byjus_classes",
                "studentName": "trina six",
                "studentId": "trina six-1",
                "academicDetails": {
                    "mathPercent": "79",
                    "sciencePercent": "86",
                    "fotTrackId": "cbse-5-1670-1700-lar",
                    "proficiency": "A2",
                    "schoolDetails": {
                        "id": "",
                        "name": "Ryan International School",
                        "city": "Ahmednagar",
                        "state": "Maharashtra",
                        "address": "3VGG+XG7, Friends Colony Kismat Nagar, Kurla West, Mumbai, Maharashtra 400070, India"
                    },
                    "languageOfInstruction": "english",
                    "languageOfInstructionId": 1
                }
            }
        ],
        "products": [
            {
                "_id": "6103d707efa57b28dc84b11f",
                "basePrice": "20000",
                "board": null,
                "city": null,
                "continousPrice": "15000",
                "course": "Maths/Science",
                "grade": "5",
                "name": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                "productId": "1147295",
                "sku": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                "validity": "MAY 2023",
                "cohort_id": 30,
                "isMultipleProfilesSupported": true,
                "updatedAt": "2021-05-10T10:42:25.382Z",
                "isVerified": true,
                "productType": "course",
                "updatedBy": "finance_code_datafix_05-04-2022",
                "skuId": "SD05NA23",
                "skuName": "5th Grade SD Card May 2023",
                "itemType": "course",
                "createdAt": "2019-09-03T07:17:23.680Z",
                "internationalBasePrice": {
                    "United Arab Emirates": 2600,
                    "Oman": 265,
                    "Kuwait": 220,
                    "Saudi Arabia": 2630,
                    "Qatar": 2590
                },
                "internationalContinousPrice": {
                    "United Arab Emirates": 800,
                    "Oman": 80,
                    "Kuwait": 70,
                    "Saudi Arabia": 800,
                    "Qatar": 800
                },
                "priceDetails": {
                    "united_arab_emirates": {
                        "basePrice": 1050,
                        "continousPrice": 800
                    },
                    "oman": {
                        "basePrice": 110,
                        "continousPrice": 85
                    },
                    "qatar": {
                        "basePrice": 1050,
                        "continousPrice": 800
                    },
                    "saudi_arabia": {
                        "basePrice": 1050,
                        "continousPrice": 800
                    },
                    "kuwait": {
                        "basePrice": 90,
                        "continousPrice": 70
                    }
                },
                "hsnCode": "85235100",
                "skuSubType": "SD Card",
                "skuType": "Product",
                "isValidSku": true,
                "remarks": null,
                "validatedAt": "2021-10-19T07:27:28.864Z",
                "programId": "BTLAKXAS0001",
                "financeCode": "SD05NA",
                "combinationType": "tlp",
                "itemId": "0E1jOHwluwUXP0rBcNyD814c",
                "studentId": "trina six-1",
                "tabletId": "",
                "orgId": "byjus"
            },
            {
                "_id": "5f0d5d640b807b0012bf710b",
                "sku": "5th Grade BYJU'S Classes May 2023",
                "course": "Maths/Science",
                "grade": "5",
                "board": null,
                "city": null,
                "productType": "course",
                "productId": "1817096",
                "name": "5th Grade BYJU'S Classes May 2023",
                "validity": "MAY 2023",
                "continousPrice": "10000",
                "basePrice": "15000",
                "type": "BYJUS_CLASSES_UPGRADE",
                "updatedBy": "price_update_datafix_06-04-2022",
                "isVerified": true,
                "skuId": "UB05NA23",
                "skuName": "5th Grade BYJU'S Classes May 2023",
                "itemType": "course",
                "cohort_id": 30,
                "createdAt": "2019-09-03T07:17:23.680Z",
                "skuSubType": "BYJU's Classes Upgrade",
                "skuType": "Service",
                "updatedAt": "2021-05-10T10:42:25.571Z",
                "priceDetails": {
                    "united_arab_emirates": {
                        "basePrice": 550,
                        "continousPrice": 300
                    },
                    "kuwait": {
                        "basePrice": 50,
                        "continousPrice": 25
                    },
                    "oman": {
                        "basePrice": 60,
                        "continousPrice": 35
                    },
                    "qatar": {
                        "basePrice": 550,
                        "continousPrice": 300
                    },
                    "saudi_arabia": {
                        "basePrice": 550,
                        "continousPrice": 300
                    }
                },
                "isValidSku": true,
                "remarks": null,
                "validatedAt": "2021-10-19T06:33:29.005Z",
                "programId": "BCOPKXSY0002",
                "financeCode": "UB05NA",
                "combinationType": "byjus_classes_upgrade",
                "itemId": "gdHzTC40bNnZp0ez7_QL1TV9",
                "studentId": "trina six-1",
                "tabletId": "",
                "orgId": "byjus"
            }
        ],
        "mentoring": {
            "count": 0,
            "items": [
                null
            ]
        },
        "finalPrice": 28000
    },
    "attachments": [
        {
            "name": "cheque",
            "url": "https://orderhive-payments.s3.ap-southeast-1.amazonaws.com/development/628230196841e6001b6f0ef5/cheque/cheque-20220516_16446290.png"
        }
    ],
    "cashbackDetails": {
        "unutilizedCashbacks": []
    },
    "comments": [
        {
            "category": "product",
            "type": "details",
            "comment": "Student Details :  Course Details : K10/K12 CBSE : 5 -  , Initial Validity : 2023 Sessions : \n                        Day : Tuesday \n                        Time : 16:30-17:30  Sessions : \n                        Day : Thursday \n                        Time : 16:30-17:30  Sessions : \n                        Day : Saturday \n                        Time : 16:30-17:30",
            "commentedBy": "system",
            "commentedAt": current_iso_date,
            "source": "kart_mock_data"
        },
        {
            "category": "price",
            "type": "range",
            "comment": "Price Range : 28000 - 35000\n Final Price : 28000",
            "commentedBy": "system",
            "commentedAt": current_iso_date,
            "source": "kart_mock_data"
        },
        {
            "category": "payment",
            "type": "refIds",
            "comment": "Payment Details : , Method:CHEQUE Amount: 28000 ReferenceId:16526997012272-12838687623",
            "commentedBy": "system",
            "commentedAt": current_iso_date,
            "source": "kart_mock_data"
        },
        {
            "comment": "praz@byjus.com opted to move this order to OMS. Reason - undefined",
            "commentedBy": "praz@byjus.com",
            "commentedAt": current_iso_date,
            "source": "kart_mock_data"
        }
    ],
    "orderPunchingType": "NORMAL_ORDER",
    "orderPunchingCategory": "byjus_classes",
    "orderBatchId": "",
    "status": "partial_confirmed",
    "leadDetails": {
        "prospectId": "SCRCHEckinotherdownpaymnets89111111111",
        "accountNo": "24692",
        "loggedInEmailId": "praz@byjus.com",
        "leadCreatedBy": "",
        "leadCreatedAt": null,
        "leadMobileNo": "+91-2356723465",
        "isLeadMobileUsed": true,
        "leadLink": "https://run.leadsquared.com/LeadManagement/LeadDetails?LeadID=SCRCHEckinotherdownpaymnets89111111111"
    },
    "contactDetails": {
        "orderPunchingContact": "2356723465",
        "cxProvidedContact": "2356723465",
        "leadContact": "2356723465",
        "gpContact": "",
        "ngpContact": "",
        "lpContact": ""
    },
    "createdAt": current_iso_date,
    "updatedAt": current_iso_date,
    "studentDetails": [
        {
            "studentProfileDetails": {
                "isExistingProfile": false,
                "existingPremiumId": "",
                "existingFamilyId": ""
            },
            "hlpDetails": {
                "courseDetails": [
                    {
                        "id": 7102,
                        "name": "FoT Batch New 32",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-06",
                        "batch_end_date": "2022-05-26",
                        "mandatory_sessions_count": 3,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4048,
                        "course_name": "Test course for 5th grade",
                        "course_fot_track_id": "cbse-5-1670-1700-lar",
                        "course_proficiency_id": 2,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "classroom",
                        "slot_group_id": 4462,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Tu-Th-Sa-4:30pm",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Mathematics",
                            "Science"
                        ],
                        "slots": [
                            {
                                "id": 22222,
                                "day": "Tuesday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22223,
                                "day": "Thursday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            },
                            {
                                "id": 22224,
                                "day": "Saturday",
                                "start_time": "16:30",
                                "end_time": "17:30",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "sessionDetails": [
                    {
                        "sessions": [
                            {
                                "day": "Tuesday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Thursday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Saturday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            }
                        ],
                        "type": "neo"
                    }
                ],
                "initialClass": "5",
                "initialValidity": "2023",
                "batchCode": "Hlp_18-05-2022"
            },
            "courseType": [
                "K10"
            ],
            "electiveDetails": [
                {
                    "batch": {
                        "id": 7564,
                        "name": "English - Grade 05_6",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-25",
                        "batch_end_date": "2023-05-31",
                        "mandatory_sessions_count": 1,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4073,
                        "course_name": "English - Grade 05",
                        "course_fot_track_id": null,
                        "course_proficiency_id": null,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "elective",
                        "slot_group_id": 6285,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Thu-8:00PM",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Coding"
                        ],
                        "slots": [
                            {
                                "id": 30141,
                                "day": "Thursday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    "subject": "Coding",
                    "slot": [
                        {
                            "id": 30141,
                            "day": "Thursday",
                            "start_time": "20:00",
                            "end_time": "21:00",
                            "is_mandatory": true
                        }
                    ]
                },
                {
                    "batch": {
                        "id": 7563,
                        "name": "English - Grade 05_5",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-25",
                        "batch_end_date": "2023-05-31",
                        "mandatory_sessions_count": 1,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4073,
                        "course_name": "English - Grade 05",
                        "course_fot_track_id": null,
                        "course_proficiency_id": null,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "elective",
                        "slot_group_id": 6270,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Tue-8:00PM",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "English"
                        ],
                        "slots": [
                            {
                                "id": 30126,
                                "day": "Tuesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    "subject": "English",
                    "slot": [
                        {
                            "id": 30126,
                            "day": "Tuesday",
                            "start_time": "20:00",
                            "end_time": "21:00",
                            "is_mandatory": true
                        }
                    ]
                },
                {
                    "batch": {
                        "id": 7566,
                        "name": "English - Grade 05_8",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-04-25",
                        "batch_end_date": "2023-05-31",
                        "mandatory_sessions_count": 1,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4073,
                        "course_name": "English - Grade 05",
                        "course_fot_track_id": null,
                        "course_proficiency_id": null,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "elective",
                        "slot_group_id": 6287,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Wed-8:00PM",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Social Studies"
                        ],
                        "slots": [
                            {
                                "id": 30143,
                                "day": "Wednesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    "subject": "Social Studies",
                    "slot": [
                        {
                            "id": 30143,
                            "day": "Wednesday",
                            "start_time": "20:00",
                            "end_time": "21:00",
                            "is_mandatory": true
                        }
                    ]
                }
            ],
            "doubtClassDetails": [
                {
                    "id": 8344,
                    "name": "5th grade mon ",
                    "is_active": true,
                    "time_zone": "IST",
                    "batch_country": "India",
                    "batch_start_date": "2022-05-02",
                    "batch_end_date": "2022-06-24",
                    "mandatory_sessions_count": 1,
                    "optional_sessions_count": 0,
                    "batch_type": "regular",
                    "course_id": 4335,
                    "course_name": "5th grade doubt clear class",
                    "course_fot_track_id": null,
                    "course_proficiency_id": 1,
                    "medium_of_instruction": "english",
                    "course_batch": null,
                    "cohort_id": 30,
                    "course_type": "neo",
                    "course_tag": "doubt_resolution",
                    "slot_group_id": 6773,
                    "tutor_language_enabled": true,
                    "slot_group_name": "Mon 7:00",
                    "course_sub_tag": "Regular",
                    "available_subjects": [
                        "Mathematics",
                        "Science"
                    ],
                    "slots": [
                        {
                            "id": 32257,
                            "day": "Monday",
                            "start_time": "19:00",
                            "end_time": "20:00",
                            "is_mandatory": true
                        }
                    ]
                }
            ],
            "workshops": [],
            "items": [
                {
                    "_id": "6103d707efa57b28dc84b11f",
                    "basePrice": "20000",
                    "board": null,
                    "city": null,
                    "continousPrice": "15000",
                    "course": "Maths/Science",
                    "grade": "5",
                    "name": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                    "productId": "1147295",
                    "sku": "5th Class Maths+Science (SD Card-Byjus) May-2023",
                    "validity": "MAY 2023",
                    "cohort_id": 30,
                    "isMultipleProfilesSupported": true,
                    "updatedAt": "2021-05-10T10:42:25.382Z",
                    "isVerified": true,
                    "productType": "course",
                    "updatedBy": "finance_code_datafix_05-04-2022",
                    "skuId": "SD05NA23",
                    "skuName": "5th Grade SD Card May 2023",
                    "itemType": "course",
                    "createdAt": "2019-09-03T07:17:23.680Z",
                    "internationalBasePrice": {
                        "United Arab Emirates": 2600,
                        "Oman": 265,
                        "Kuwait": 220,
                        "Saudi Arabia": 2630,
                        "Qatar": 2590
                    },
                    "internationalContinousPrice": {
                        "United Arab Emirates": 800,
                        "Oman": 80,
                        "Kuwait": 70,
                        "Saudi Arabia": 800,
                        "Qatar": 800
                    },
                    "priceDetails": {
                        "united_arab_emirates": {
                            "basePrice": 1050,
                            "continousPrice": 800
                        },
                        "oman": {
                            "basePrice": 110,
                            "continousPrice": 85
                        },
                        "qatar": {
                            "basePrice": 1050,
                            "continousPrice": 800
                        },
                        "saudi_arabia": {
                            "basePrice": 1050,
                            "continousPrice": 800
                        },
                        "kuwait": {
                            "basePrice": 90,
                            "continousPrice": 70
                        }
                    },
                    "hsnCode": "85235100",
                    "skuSubType": "SD Card",
                    "skuType": "Product",
                    "isValidSku": true,
                    "remarks": null,
                    "validatedAt": "2021-10-19T07:27:28.864Z",
                    "programId": "BTLAKXAS0001",
                    "financeCode": "SD05NA",
                    "combinationType": "tlp",
                    "itemId": "0E1jOHwluwUXP0rBcNyD814c",
                    "studentId": "trina six-1",
                    "tabletId": "",
                    "orgId": "byjus"
                },
                {
                    "_id": "5f0d5d640b807b0012bf710b",
                    "sku": "5th Grade BYJU'S Classes May 2023",
                    "course": "Maths/Science",
                    "grade": "5",
                    "board": null,
                    "city": null,
                    "productType": "course",
                    "productId": "1817096",
                    "name": "5th Grade BYJU'S Classes May 2023",
                    "validity": "MAY 2023",
                    "continousPrice": "10000",
                    "basePrice": "15000",
                    "type": "BYJUS_CLASSES_UPGRADE",
                    "updatedBy": "price_update_datafix_06-04-2022",
                    "isVerified": true,
                    "skuId": "UB05NA23",
                    "skuName": "5th Grade BYJU'S Classes May 2023",
                    "itemType": "course",
                    "cohort_id": 30,
                    "createdAt": "2019-09-03T07:17:23.680Z",
                    "skuSubType": "BYJU's Classes Upgrade",
                    "skuType": "Service",
                    "updatedAt": "2021-05-10T10:42:25.571Z",
                    "priceDetails": {
                        "united_arab_emirates": {
                            "basePrice": 550,
                            "continousPrice": 300
                        },
                        "kuwait": {
                            "basePrice": 50,
                            "continousPrice": 25
                        },
                        "oman": {
                            "basePrice": 60,
                            "continousPrice": 35
                        },
                        "qatar": {
                            "basePrice": 550,
                            "continousPrice": 300
                        },
                        "saudi_arabia": {
                            "basePrice": 550,
                            "continousPrice": 300
                        }
                    },
                    "isValidSku": true,
                    "remarks": null,
                    "validatedAt": "2021-10-19T06:33:29.005Z",
                    "programId": "BCOPKXSY0002",
                    "financeCode": "UB05NA",
                    "combinationType": "byjus_classes_upgrade",
                    "itemId": "gdHzTC40bNnZp0ez7_QL1TV9",
                    "studentId": "trina six-1",
                    "tabletId": "",
                    "orgId": "byjus"
                }
            ],
            "addOnItems": [],
            "mentoringDetails": [
                {
                    "type": "neo",
                    "sessions": [
                        {
                            "day": "Tuesday",
                            "is_mandatory": true,
                            "time": "16:30-17:30"
                        },
                        {
                            "day": "Thursday",
                            "is_mandatory": true,
                            "time": "16:30-17:30"
                        },
                        {
                            "day": "Saturday",
                            "is_mandatory": true,
                            "time": "16:30-17:30"
                        }
                    ]
                }
            ],
            "bhlpCourseDetails": [
                {
                    "id": 7102,
                    "name": "FoT Batch New 32",
                    "is_active": true,
                    "time_zone": "IST",
                    "batch_country": "India",
                    "batch_start_date": "2022-04-06",
                    "batch_end_date": "2022-05-26",
                    "mandatory_sessions_count": 3,
                    "optional_sessions_count": 0,
                    "batch_type": "regular",
                    "course_id": 4048,
                    "course_name": "Test course for 5th grade",
                    "course_fot_track_id": "cbse-5-1670-1700-lar",
                    "course_proficiency_id": 2,
                    "medium_of_instruction": "english",
                    "course_batch": null,
                    "cohort_id": 30,
                    "course_type": "neo",
                    "course_tag": "classroom",
                    "slot_group_id": 4462,
                    "tutor_language_enabled": true,
                    "slot_group_name": "Tu-Th-Sa-4:30pm",
                    "course_sub_tag": "Regular",
                    "available_subjects": [
                        "Mathematics",
                        "Science"
                    ],
                    "slots": [
                        {
                            "id": 22222,
                            "day": "Tuesday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        },
                        {
                            "id": 22223,
                            "day": "Thursday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        },
                        {
                            "id": 22224,
                            "day": "Saturday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        }
                    ]
                }
            ],
            "course": "K10/K12",
            "board": "CBSE",
            "validity": "2023",
            "tablet": "",
            "initialClass": "5",
            "formValues": {
                "course": "K10/K12",
                "board": "CBSE",
                "subCourse": "",
                "validity": 2023,
                "tablet": "",
                "userProfile": "newProfile",
                "initialClass": "5",
                "yearSelection": "2023",
                "tabletId": "",
                "mentoringDetails": [
                    {
                        "type": "neo",
                        "sessions": [
                            {
                                "day": "Tuesday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Thursday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            },
                            {
                                "day": "Saturday",
                                "is_mandatory": true,
                                "time": "16:30-17:30"
                            }
                        ]
                    }
                ],
                "bhlpCourseDetails": {
                    "id": 7102,
                    "name": "FoT Batch New 32",
                    "is_active": true,
                    "time_zone": "IST",
                    "batch_country": "India",
                    "batch_start_date": "2022-04-06",
                    "batch_end_date": "2022-05-26",
                    "mandatory_sessions_count": 3,
                    "optional_sessions_count": 0,
                    "batch_type": "regular",
                    "course_id": 4048,
                    "course_name": "Test course for 5th grade",
                    "course_fot_track_id": "cbse-5-1670-1700-lar",
                    "course_proficiency_id": 2,
                    "medium_of_instruction": "english",
                    "course_batch": null,
                    "cohort_id": 30,
                    "course_type": "neo",
                    "course_tag": "classroom",
                    "slot_group_id": 4462,
                    "tutor_language_enabled": true,
                    "slot_group_name": "Tu-Th-Sa-4:30pm",
                    "course_sub_tag": "Regular",
                    "available_subjects": [
                        "Mathematics",
                        "Science"
                    ],
                    "slots": [
                        {
                            "id": 22222,
                            "day": "Tuesday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        },
                        {
                            "id": 22223,
                            "day": "Thursday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        },
                        {
                            "id": 22224,
                            "day": "Saturday",
                            "start_time": "16:30",
                            "end_time": "17:30",
                            "is_mandatory": true
                        }
                    ]
                },
                "mathPercent": "79",
                "sciencePercent": "86",
                "proficiency": "A2",
                "schoolDetails": {
                    "schoolState": "Maharashtra",
                    "city": "Ahmednagar",
                    "schoolName": "other",
                    "otherSchoolName": "Ryan International School",
                    "schoolAddress": "3VGG+XG7, Friends Colony Kismat Nagar, Kurla West, Mumbai, Maharashtra 400070, India",
                    "schoolId": "",
                    "trackId": "cbse-5-1670-1700-lar"
                },
                "electiveDetails": [
                    {
                        "batch": {
                            "id": 7564,
                            "name": "English - Grade 05_6",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6285,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Thu-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Coding"
                            ],
                            "slots": [
                                {
                                    "id": 30141,
                                    "day": "Thursday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "Coding",
                        "slot": [
                            {
                                "id": 30141,
                                "day": "Thursday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    {
                        "batch": {
                            "id": 7563,
                            "name": "English - Grade 05_5",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6270,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Tue-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "English"
                            ],
                            "slots": [
                                {
                                    "id": 30126,
                                    "day": "Tuesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "English",
                        "slot": [
                            {
                                "id": 30126,
                                "day": "Tuesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    },
                    {
                        "batch": {
                            "id": 7566,
                            "name": "English - Grade 05_8",
                            "is_active": true,
                            "time_zone": "IST",
                            "batch_country": "India",
                            "batch_start_date": "2022-04-25",
                            "batch_end_date": "2023-05-31",
                            "mandatory_sessions_count": 1,
                            "optional_sessions_count": 0,
                            "batch_type": "regular",
                            "course_id": 4073,
                            "course_name": "English - Grade 05",
                            "course_fot_track_id": null,
                            "course_proficiency_id": null,
                            "medium_of_instruction": "english",
                            "course_batch": null,
                            "cohort_id": 30,
                            "course_type": "neo",
                            "course_tag": "elective",
                            "slot_group_id": 6287,
                            "tutor_language_enabled": true,
                            "slot_group_name": "Wed-8:00PM",
                            "course_sub_tag": "Regular",
                            "available_subjects": [
                                "Social Studies"
                            ],
                            "slots": [
                                {
                                    "id": 30143,
                                    "day": "Wednesday",
                                    "start_time": "20:00",
                                    "end_time": "21:00",
                                    "is_mandatory": true
                                }
                            ]
                        },
                        "subject": "Social Studies",
                        "slot": [
                            {
                                "id": 30143,
                                "day": "Wednesday",
                                "start_time": "20:00",
                                "end_time": "21:00",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "doubtClassDetails": [
                    {
                        "id": 8344,
                        "name": "5th grade mon ",
                        "is_active": true,
                        "time_zone": "IST",
                        "batch_country": "India",
                        "batch_start_date": "2022-05-02",
                        "batch_end_date": "2022-06-24",
                        "mandatory_sessions_count": 1,
                        "optional_sessions_count": 0,
                        "batch_type": "regular",
                        "course_id": 4335,
                        "course_name": "5th grade doubt clear class",
                        "course_fot_track_id": null,
                        "course_proficiency_id": 1,
                        "medium_of_instruction": "english",
                        "course_batch": null,
                        "cohort_id": 30,
                        "course_type": "neo",
                        "course_tag": "doubt_resolution",
                        "slot_group_id": 6773,
                        "tutor_language_enabled": true,
                        "slot_group_name": "Mon 7:00",
                        "course_sub_tag": "Regular",
                        "available_subjects": [
                            "Mathematics",
                            "Science"
                        ],
                        "slots": [
                            {
                                "id": 32257,
                                "day": "Monday",
                                "start_time": "19:00",
                                "end_time": "20:00",
                                "is_mandatory": true
                            }
                        ]
                    }
                ],
                "languageOfInstruction": "english",
                "languageOfInstructionId": 1
            },
            "productSelectionType": "byjus_classes",
            "studentName": "trina six",
            "studentId": "trina six-1",
            "academicDetails": {
                "mathPercent": "79",
                "sciencePercent": "86",
                "fotTrackId": "cbse-5-1670-1700-lar",
                "proficiency": "A2",
                "schoolDetails": {
                    "id": "",
                    "name": "Ryan International School",
                    "city": "Ahmednagar",
                    "state": "Maharashtra",
                    "address": "3VGG+XG7, Friends Colony Kismat Nagar, Kurla West, Mumbai, Maharashtra 400070, India"
                },
                "languageOfInstruction": "english",
                "languageOfInstructionId": 1
            },
            "premiumAccount": "1513858852"
        }
    ],
    "actionDetails": {
        "createdAt": current_iso_date,
        "createdBy": "praz@byjus.com",
        "notConfirmedAt": current_iso_date,
        "notConfirmedBy": "system",
        "partialConfirmedAt": current_iso_date,
        "partialConfirmedBy": "system"
    },
    "type": "product",
    "subType": "course",
    "timestamps": {
        "createdAt": current_iso_date
    },
    "sacCommand": "applicable",
    "poaCommand": "applicable",
    "revenueOrderValue": 28000,
    "orderValue": 28000,
    "voucherDetails": null,
    "sourceDetails": null,
    "assignmentCategory": "k5",
    "smsDetails": {
        "notConfirmedAt": current_iso_date,
        "notConfirmedBy": "system",
        "partialConfirmedAt": current_iso_date,
        "partialConfirmedBy": "system"
    }

}
export { byjusSalesOrderSdCard, actionDetails };
