let contents = []
let faciciltyConcat = []
msg._unify_bot.metadata.information.forEach(function(element) {
    faciciltyConcat = faciciltyConcat.concat(element.facility)
});
const dedupArray = (arr) => {
    const map = new Map();
    return arr.filter(item => {
        if (!map.has(item.facilityProjectCategoryId)) {
            map.set(item.facilityProjectCategoryId, true);
            return true;
        }
        return false;
    });
};

let faciciltyDedup = dedupArray(faciciltyConcat);
node.warn(faciciltyDedup);
let checkedFacility = []
msg._unify_bot.metadata.information.forEach(function (element, index) {
    let bubble = {
        "type": "bubble",
        "size": "giga",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "image",
                        "url": "https://assets.sansiri.com/o77site/siri-place-charan-pinklao-townhouse-portrait-810x890.jpg",
                        "aspectRatio": "1:1",
                        "size": "full",
                        "aspectMode": "cover"
                    }
                    ]
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "image",
                        "url": "https://assets.sansiri.com/o77site/thumbnail-image-Siri-Place-Don-Mueng-Songprapha-810x890.jpg",
                        "aspectRatio": "1:1",
                        "aspectMode": "cover",
                        "size": "full"
                    }
                    ]
                }
                ]
            },
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "สิริ เพลส จรัญฯ - ปิ่นเกล้า",
                        "size": "md",
                        "wrap": true,
                        "align": "center",
                        "weight": "bold"
                    }
                    ]
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "สิริ เพลส ดอนเมือง - สรงประภา",
                        "size": "md",
                        "wrap": true,
                        "align": "center",
                        "weight": "bold"
                    }
                    ]
                }
                ],
                "alignItems": "center",
                "justifyContent": "center",
                "paddingTop": "10px",
                "paddingBottom": "10px"
            },
            {
                "type": "separator"
            },
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "contents": [
                        {
                            "type": "span",
                            "text": "ราคาเริ่มต้น "
                        },
                        {
                            "type": "span",
                            "text": "3.59",
                            "weight": "bold",
                            "color": "#FB2676"
                        },
                        {
                            "type": "span",
                            "text": " ล้านบาท"
                        }
                        ]
                    }
                    ],
                    "margin": "none",
                    "paddingAll": "md",
                    "alignItems": "center",
                    "justifyContent": "center"
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "contents": [
                        {
                            "type": "span",
                            "text": "ราคาเริ่มต้น "
                        },
                        {
                            "type": "span",
                            "text": " 2.99",
                            "weight": "bold",
                            "color": "#FB2676"
                        },
                        {
                            "type": "span",
                            "text": " ล้านบาท"
                        }
                        ]
                    }
                    ],
                    "paddingAll": "md",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
                ],
                "borderColor": "#DBDBDB",
                "margin": "xs"
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "text",
                    "text": "ทำเลที่ตั้่ง",
                    "align": "center",
                    "color": "#FFFFFF"
                }
                ],
                "backgroundColor": "#FB2676",
                "paddingAll": "md"
            },
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "จรัญสนิทวงศ์",
                        "align": "center"
                    }
                    ],
                    "paddingAll": "md",
                    "borderWidth": "light"
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "สรงประภา",
                        "align": "center"
                    }
                    ],
                    "paddingAll": "md"
                }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "text",
                    "align": "center",
                    "text": "จำนวนยูนิต",
                    "color": "#FFFFFF"
                }
                ],
                "backgroundColor": "#FB2676",
                "paddingAll": "md"
            },
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "413 ยูนิต",
                        "align": "center"
                    }
                    ],
                    "paddingAll": "md"
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "text": "138 ยูนิต",
                        "align": "center"
                    }
                    ],
                    "paddingAll": "md"
                }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "text",
                    "align": "center",
                    "text": "สิ่งอํานวยความสะดวกภายในโครงการ",
                    "color": "#FFFFFF"
                }
                ],
                "backgroundColor": "#FB2676",
                "paddingAll": "md"
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                    {
                        "type": "text",
                        "align": "center",
                        "text": "1",
                        "color": "#6A6D75"
                    }
                    ],
                    "backgroundColor": "#F0F1F3",
                    "paddingAll": "md",
                    "borderColor": "#DBDBDB",
                    "borderWidth": "none"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                        {
                            "type": "text",
                            "text": " ",
                            "align": "center"
                        }
                        ],
                        "paddingAll": "md"
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                        {
                            "type": "text",
                            "text": "✔️",
                            "align": "center"
                        }
                        ],
                        "paddingAll": "md"
                    }
                    ],
                    "borderColor": "#DBDBDB",
                    "borderWidth": "none"
                }
                ]
            }
            ],
            "paddingAll": "0px"
        },
        "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "button",
                    "action": {
                    "type": "uri",
                    "label": "รายละเอียดเพิ่มเติม",
                    "uri": "http://linecorp.com/"
                    },
                    "color": "#FFFFFF"
                }
                ],
                "backgroundColor": "#FB2676"
            },
            {
                "type": "separator",
                "color": "#FFFFFF"
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                {
                    "type": "button",
                    "action": {
                    "type": "uri",
                    "label": "รายละเอียดเพิ่มเติม",
                    "uri": "http://linecorp.com/"
                    },
                    "color": "#FFFFFF"
                }
                ],
                "backgroundColor": "#FB2676"
            }
            ],
            "paddingAll": "0px"
        }
        }
    node.warn(bubble);
    // let lang = msg.payload.action.metadata.information.lang
    let even = ((index+1) % 2 === 0) ? true : false
    if (!even) {
        if((msg._unify_bot.metadata.information.length-1)==index){
            bubble = {
                "type": "bubble",
                "size": "giga",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "image",
                                            "url": "https://assets.sansiri.com/o77site/siri-place-charan-pinklao-townhouse-portrait-810x890.jpg",
                                            "size": "full",
                                            "aspectMode": "cover",
                                            "aspectRatio": "21:10.5"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "สิริ เพลส จรัญฯ - ปิ่นเกล้า",
                                            "size": "md",
                                            "wrap": true,
                                            "align": "center",
                                            "weight": "bold"
                                        }
                                    ],
                                    "alignItems": "center",
                                    "justifyContent": "center",
                                    "paddingTop": "10px",
                                    "paddingBottom": "10px"
                                }
                            ],
                            "margin": "none",
                            "borderColor": "#DBDBDB",
                            "borderWidth": "none"
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "contents": [
                                                {
                                                    "type": "span",
                                                    "text": "เริ่มต้น "
                                                },
                                                {
                                                    "type": "span",
                                                    "text": "3.59",
                                                    "weight": "bold",
                                                    "color": "#FB2676"
                                                },
                                                {
                                                    "type": "span",
                                                    "text": " ล้านบาท"
                                                }
                                            ],
                                            "align": "center"
                                        }
                                    ],
                                    "margin": "none",
                                    "paddingAll": "md"
                                }
                            ],
                            "borderColor": "#DBDBDB",
                            "margin": "xs"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ทำเลที่ตั้่ง",
                                    "align": "center",
                                    "color": "#FFFFFF"
                                }
                            ],
                            "backgroundColor": "#FB2676",
                            "paddingAll": "md"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "จรัญสนิทวงศ์",
                                            "align": "center"
                                        }
                                    ],
                                    "paddingAll": "md",
                                    "borderWidth": "light"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "align": "center",
                                    "text": "จำนวนยูนิต",
                                    "color": "#FFFFFF"
                                }
                            ],
                            "backgroundColor": "#FB2676",
                            "paddingAll": "md"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "413 ยูนิต",
                                            "align": "center"
                                        }
                                    ],
                                    "paddingAll": "md"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "align": "center",
                                    "text": "สิ่งอํานวยความสะดวกภายในโครงการ",
                                    "color": "#FFFFFF"
                                }
                            ],
                            "backgroundColor": "#FB2676",
                            "paddingAll": "md"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "align": "center",
                                            "text": "1",
                                            "color": "#6A6D75"
                                        }
                                    ],
                                    "backgroundColor": "#F0F1F3",
                                    "paddingAll": "sm",
                                    "borderColor": "#DBDBDB",
                                    "borderWidth": "none"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "✔️",
                                                    "align": "center"
                                                }
                                            ],
                                            "paddingAll": "md"
                                        }
                                    ],
                                    "borderColor": "#DBDBDB",
                                    "borderWidth": "none"
                                }
                            ]
                        }
                    ],
                    "paddingAll": "0px"
                },
                "footer": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "uri",
                                        "label": "รายละเอียดเพิ่มเติม",
                                        "uri": "http://linecorp.com/"
                                    },
                                    "color": "#FFFFFF"
                                }
                            ],
                            "backgroundColor": "#FB2676"
                        }
                    ],
                    "paddingAll": "0px"
                }
            }
        }
        checkedFacility = []
        faciciltyDedup.forEach(function(facicilty) {
            let boxFarName = {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "align": "center",
                  "text": "1",
                  "color": "#6A6D75"
                }
              ],
              "backgroundColor": "#F0F1F3",
              "paddingAll": "md",
              "borderColor": "#DBDBDB",
              "borderWidth": "none"
            }
            let boxCompare = {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": " ",
                      "align": "center"
                    }
                  ],
                  "paddingAll": "md"
                },
                {
                  "type": "separator"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "✔️",
                      "align": "center"
                    }
                  ],
                  "paddingAll": "md"
                }
              ],
              "borderColor": "#DBDBDB",
              "borderWidth": "none"
            }
            if((msg._unify_bot.metadata.information.length-1)==index){
                boxCompare = {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                        "type": "text",
                        "text": "✔️",
                        "align": "center"
                        }
                    ],
                    "paddingAll": "md"
                    }
                ],
                "borderColor": "#DBDBDB",
                "borderWidth": "none"
                }
            }
            boxFarName.contents[0].text = facicilty.facilityCategory
            checkedFacility.push(boxFarName)
            let someFind = element.facility.some(far => far.facilityProjectCategoryId == facicilty.facilityProjectCategoryId)
            // node.warn(someFind)
            if(someFind){
                boxCompare.contents[0].contents[0].text = "✔️"
            }else{
                boxCompare.contents[0].contents[0].text = " "
            }
            checkedFacility.push(boxCompare)
        });
        bubble.body.contents[0].contents[0].contents[0].url = element.image
        bubble.body.contents[1].contents[0].contents[0].text = element.projectFullName
        bubble.body.contents[3].contents[0].contents[0].contents[1].text = `${element.minPrice}`
        bubble.body.contents[5].contents[0].contents[0].text = `${element.location}`
        bubble.body.contents[7].contents[0].contents[0].text = `${element.totalUnit} ยูนิต`
        bubble.body.contents[9].contents = checkedFacility
        bubble.footer.contents[0].contents[0].action.uri = element.url
        contents.push(bubble)
    }else{
        bubble = contents[contents.length -1]
        bubble.body.contents[0].contents[1].contents[0].url = element.image
        bubble.body.contents[1].contents[1].contents[0].text = element.projectFullName
        bubble.body.contents[3].contents[2].contents[0].contents[1].text = `${element.minPrice}`
        bubble.body.contents[5].contents[2].contents[0].text = `${element.location}`
        bubble.body.contents[7].contents[2].contents[0].text = `${element.totalUnit} ยูนิต`
        bubble.footer.contents[2].contents[0].action.uri = element.url
        faciciltyDedup.forEach(function(facicilty,index) {
            let someFind = element.facility.some(far => far.facilityProjectCategoryId == facicilty.facilityProjectCategoryId)
            // node.warn(someFind)
            if(someFind){
                checkedFacility[((index + 1) * 2) - 1].contents[2].contents[0].text = "✔️"
            }else{
                checkedFacility[((index + 1) * 2) - 1].contents[2].contents[0].text = " "
            }
        });
    }
    // if (lang == "EN") {
    //   bubble.body.contents[2].contents[0].text = locale.en.projectDetails
    //   bubble.body.contents[2].contents[1].contents[0].contents[0].text = locale.en.floor1
    //   bubble.body.contents[2].contents[1].contents[1].contents[0].text = locale.en.floor2
    //   bubble.body.contents[3].contents[0].text = locale.en.usableArea
    //   bubble.body.contents[3].contents[1].text = `${element.size} ${locale.en.squareMeters}`
    //   bubble.body.contents[3].contents[2].contents[0].contents[0].text = locale.en.bedrooms
    //   bubble.body.contents[3].contents[3].contents[0].contents[0].text = locale.en.bathrooms
    //   bubble.body.contents[3].contents[4].contents[0].contents[0].text = locale.en.parking
    //   bubble.body.contents[3].contents[2].contents[1].contents[0].text = `${element.bedroom} ${locale.en.bedrooms}`
    //   bubble.body.contents[3].contents[3].contents[1].contents[0].text = `${element.bathroom} ${locale.en.bathrooms}`
    //   bubble.body.contents[3].contents[4].contents[1].contents[0].text = `${element.carPark.toString()} ${locale.en.vehicle}`
    //   bubble.footer.contents[0].action.label = `${locale.en.moreDetails}`
    //   bubble.footer.contents[0].action.uri = `${msg.payload.action.metadata.information.url}`
    // }
    // if (lang == "CN") {
    //   bubble.body.contents[2].contents[0].text = locale.cn.projectDetails
    //   bubble.body.contents[2].contents[1].contents[0].contents[0].text = locale.cn.floor1
    //   bubble.body.contents[2].contents[1].contents[1].contents[0].text = locale.cn.floor2
    //   bubble.body.contents[3].contents[0].text = locale.cn.usableArea
    //   bubble.body.contents[3].contents[1].text = `${element.size} ${locale.cn.squareMeters}`
    //   bubble.body.contents[3].contents[2].contents[0].contents[0].text = locale.cn.bedrooms
    //   bubble.body.contents[3].contents[3].contents[0].contents[0].text = locale.cn.bathrooms
    //   bubble.body.contents[3].contents[4].contents[0].contents[0].text = locale.cn.parking
    //   bubble.body.contents[3].contents[2].contents[1].contents[0].text = `${element.bedroom} ${locale.cn.bedrooms}`
    //   bubble.body.contents[3].contents[3].contents[1].contents[0].text = `${element.bathroom} ${locale.cn.bathrooms}`
    //   bubble.body.contents[3].contents[4].contents[1].contents[0].text = `${elememetadatant.carPark.toString()} ${locale.cn.vehicle}`
    //   bubble.footer.contents[0].action.label = `${locale.cn.moreDetails}`
    //   bubble.footer.contents[0].action.uri = `${msg.payload.action.metadata.information.url}`
    // }

});
msg.bubble = contents
return msg;