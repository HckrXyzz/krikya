(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~1133870d"],
  {
    "236d": function (e, t, s) {
      "use strict";
      var i = s("494f"),
        a = s.n(i);
      a.a;
    },
    "494f": function (e, t, s) {},
    7058: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "roulette" },
            [
              s("div", { staticClass: "roulette_wrap", class: e.activeBtn }, [
                s(
                  "div",
                  { staticClass: "roulette_main", class: e.activeBtn },
                  [
                    s(
                      "v-btn",
                      {
                        staticClass: "btnleft",
                        staticStyle: {
                          "background-color": "transparent",
                          "z-index": "4",
                        },
                        attrs: { id: "leftright" },
                        on: { click: e.showPreviousWheel },
                      },
                      [
                        s("img", {
                          staticStyle: {
                            transform: "scaleX(-1)",
                            "background-color": "transparent",
                          },
                          attrs: {
                            src: "/static/svg/wheel/RightBtn.png",
                            width: "30",
                            height: "40",
                          },
                        }),
                      ]
                    ),
                    s(
                      "v-btn",
                      {
                        staticClass: "btnright",
                        staticStyle: {
                          "background-color": "transparent",
                          "z-index": "4",
                        },
                        attrs: { id: "leftright" },
                        on: { click: e.showNextWheel },
                      },
                      [
                        s("img", {
                          staticStyle: { "background-color": "transparent" },
                          attrs: {
                            src: "/static/svg/wheel/RightBtn.png",
                            width: "30",
                            height: "40",
                          },
                        }),
                      ]
                    ),
                    s("div", { staticClass: "roulette-period" }),
                    s(
                      "div",
                      { staticClass: "roulette_main_numberTimes_left" },
                      [
                        s("div", [
                          s("div", [
                            s(
                              "span",
                              { staticClass: "font-weight-bold title" },
                              [
                                e._v(
                                  e._s(
                                    e.selectedwheel.event_setting.coin_required
                                  )
                                ),
                              ]
                            ),
                            s("span", [e._v("coins")]),
                            s("br"),
                            e._v("\n            /spin\n          "),
                          ]),
                        ]),
                      ]
                    ),
                    s(
                      "div",
                      {
                        staticClass: "roulette_main_wrap roulette_P8_N8",
                        class: e.activeBtn,
                      },
                      [
                        s(
                          "ul",
                          {
                            staticClass:
                              "roulette_main_part roulette_main_part-8",
                            class: e.activeBtn,
                          },
                          e._l(e.selectedwheel.event_rewards, function (t, i) {
                            return s(
                              "li",
                              { staticClass: "roulette_main_part_list" },
                              [
                                s("div", {
                                  staticClass: "roulette_main_part_color",
                                }),
                                s(
                                  "span",
                                  { staticClass: "roulette_main_part_award" },
                                  [
                                    e._v(
                                      e._s(
                                        t.min_amount > 0 ? e.currencySymbol : ""
                                      ) + e._s(t.name)
                                    ),
                                  ]
                                ),
                              ]
                            );
                          }),
                          0
                        ),
                        s("div", {
                          staticClass: "roulette_main_btn",
                          class: [e.activeBtn],
                        }),
                        s("div", { staticClass: "roulette_main_numberTimes" }, [
                          s("div", [
                            s("div", [
                              s("span", [
                                e._v(
                                  e._s(
                                    e.memberInfo.rewardBalance
                                      ? e.memberInfo.rewardBalance
                                      : 0
                                  )
                                ),
                              ]),
                              s("span", [e._v("coins")]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    e._m(0),
                  ],
                  1
                ),
                s(
                  "div",
                  {
                    staticStyle: {
                      "justify-content": "center",
                      display: "flex",
                      "align-items": "center",
                    },
                  },
                  [
                    e._l(e.btnNames, function (t) {
                      return s("v-btn", {
                        key: t,
                        class: [
                          e.activeBtn === t ? t + "btn active" : t + "btn",
                        ],
                        style: [
                          e.activeBtn === t ? { transform: "scale(1.1)" } : {},
                        ],
                        on: {
                          click: function (s) {
                            return e.selectBtn(t);
                          },
                        },
                      });
                    }),
                  ],
                  2
                ),
                s(
                  "div",
                  {
                    staticClass: "roulette_minor",
                    staticStyle: { "margin-top": "10px" },
                  },
                  [
                    s("ul", { staticClass: "rouletteMain_head" }, [
                      s("div", { staticClass: "rouletteName" }, [
                        e._v(e._s(e.wheelDisplayName)),
                      ]),
                    ]),
                    s(
                      "ul",
                      { staticClass: "roulette_awards" },
                      e._l(e.selectedwheel.event_rewards, function (e, t) {
                        return s(
                          "li",
                          { staticClass: "roulette_awards_item" },
                          [
                            s(
                              "div",
                              { staticStyle: { "border-radius": "18px" } },
                              [
                                s("div", {
                                  staticClass: "roulette_awards_medals",
                                }),
                                s(
                                  "div",
                                  { staticClass: "roulette_awards_prize" },
                                  [
                                    s("v-img", {
                                      attrs: {
                                        "aspect-ratio": 4,
                                        width: 180,
                                        src: "" + e.rewardspot_image_url,
                                        contain: "",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    s("div", { staticClass: "roulette_winner" }, [
                      s("div", { staticClass: "roulette_winner_wrap" }, [
                        s(
                          "div",
                          { staticClass: "roulette_winner_head winnerList" },
                          [
                            s(
                              "div",
                              {
                                staticClass: "roulette_winner_headItem",
                                class: [e.winList ? "whiteTxt" : "orgText"],
                                on: {
                                  click: function (t) {
                                    return e.showWinnerList();
                                  },
                                },
                              },
                              [e._v("Winner's list")]
                            ),
                            s(
                              "div",
                              {
                                staticClass:
                                  "roulette_winner_headItem winning_record",
                                class: [e.winList ? "orgText" : "whiteTxt"],
                                on: {
                                  click: function (t) {
                                    return e.showRecordList();
                                  },
                                },
                              },
                              [e._v("Winning record")]
                            ),
                            s("div", {
                              class: [
                                "roulette_winner_headCursor",
                                e.winList ? "leftMost" : "fiftyLeft",
                              ],
                            }),
                          ]
                        ),
                        s("div", { staticClass: "roulette_winner_slider" }, [
                          s(
                            "ul",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.winList,
                                  expression: "winList",
                                },
                              ],
                              staticClass: "roulette_winner_list",
                            },
                            e._l(e.wheelLogs, function (t, i) {
                              return s(
                                "li",
                                { staticClass: "roulette_winner_listItem" },
                                [
                                  s(
                                    "span",
                                    { staticClass: "roulette_winner_date" },
                                    [e._v(e._s(e._f("shortDate")(t.draw_date)))]
                                  ),
                                  s(
                                    "span",
                                    {
                                      staticClass: "roulette_winner_membercode",
                                    },
                                    [e._v(e._s(t.membercode))]
                                  ),
                                  s(
                                    "span",
                                    { staticClass: "roulette_winner_prize" },
                                    [
                                      e._v(
                                        e._s(
                                          parseFloat(t.win_amount).toFixed(2)
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                          s(
                            "ul",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.recordList,
                                  expression: "recordList",
                                },
                              ],
                              staticClass: "roulette_winner_list",
                            },
                            e._l(e.wheelMyLogs, function (t, i) {
                              return s(
                                "li",
                                { staticClass: "roulette_winner_listItem" },
                                [
                                  s(
                                    "span",
                                    { staticClass: "roulette_winner_date" },
                                    [e._v(e._s(e._f("shortDate")(t.draw_date)))]
                                  ),
                                  s("span", [e._v(e._s(t.membercode))]),
                                  s(
                                    "span",
                                    { staticClass: "roulette_winner_prize" },
                                    [
                                      e._v(
                                        e._s(
                                          parseFloat(t.win_amount).toFixed(2)
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ]),
                      ]),
                    ]),
                    s("h3", { staticStyle: { "padding-left": "20px" } }, [
                      e._v(e._s(e.$t("luckyWheel.getMoreCoins"))),
                    ]),
                    s(
                      "div",
                      {
                        staticClass: "center",
                        staticStyle: { display: "contents" },
                      },
                      [
                        s("div", { staticClass: "roulette_getmorecoins" }, [
                          e._m(1),
                          s(
                            "div",
                            { staticClass: "column" },
                            [
                              s(
                                "h5",
                                {
                                  staticStyle: {
                                    padding: "10px",
                                    "padding-left": "15px",
                                  },
                                },
                                [
                                  e._v(
                                    e._s(e.$t("luckyWheel.depositNfreecoins"))
                                  ),
                                ]
                              ),
                              s("v-spacer"),
                              s(
                                "div",
                                {
                                  staticStyle: { "padding-left": "5px" },
                                  on: {
                                    click: function (t) {
                                      return e.navigateToCoinPage();
                                    },
                                  },
                                },
                                [
                                  s("button", { staticClass: "getmorecoins" }, [
                                    e._v(e._s(e.$t("luckyWheel.claimNow"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                        s("div", { staticClass: "roulette_getmorecoins" }, [
                          e._m(2),
                          s(
                            "div",
                            { staticClass: "column" },
                            [
                              s(
                                "h5",
                                {
                                  staticStyle: {
                                    padding: "10px",
                                    "padding-left": "15px",
                                  },
                                },
                                [e._v(e._s(e.$t("luckyWheel.dailycheckin")))]
                              ),
                              s("v-spacer"),
                              s(
                                "div",
                                {
                                  staticStyle: { "padding-left": "5px" },
                                  on: {
                                    click: function (t) {
                                      return e.navigateToDailyCheckIn();
                                    },
                                  },
                                },
                                [
                                  s("button", { staticClass: "getmorecoins" }, [
                                    e._v(e._s(e.$t("luckyWheel.checkInNow"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                    s("div", { staticClass: "rouletteRule" }),
                    s("div", { staticClass: "center" }, [
                      s(
                        "div",
                        {
                          staticClass: "tncbutton",
                          on: {
                            click: function (t) {
                              return e.setShowtnc();
                            },
                          },
                        },
                        [e._v(e._s(e.$t("label.termsAndConditions")))]
                      ),
                    ]),
                    e.showtnc
                      ? s("div", [
                          s("div", { staticClass: "message-box" }, [
                            s("p", { staticClass: "tnc_header" }, [
                              e._v(
                                "\n            Terms & Conditions\n            "
                              ),
                              s(
                                "button",
                                {
                                  staticClass: "btn-close btn-close-white",
                                  staticStyle: { float: "right" },
                                  attrs: {
                                    type: "button",
                                    "aria-label": "Close",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.setShowtnc();
                                    },
                                  },
                                },
                                [e._v("X")]
                              ),
                            ]),
                            s("div", { staticStyle: { padding: "20px" } }, [
                              s(
                                "p",
                                { staticStyle: { "font-weight": "bold" } },
                                [e._v(e._s(e.$t("luckyWheel.title")))]
                              ),
                              s("p", [e._v(e._s(e.$t("luckyWheel.subtitle")))]),
                              s("br"),
                              s(
                                "p",
                                { staticStyle: { "font-weight": "bold" } },
                                [e._v(e._s(e.$t("luckyWheel.howCollect")))]
                              ),
                              s("p", [
                                e._v(e._s(e.$t("luckyWheel.ptsCollect"))),
                              ]),
                              s("br"),
                              s("p", [
                                e._v(e._s(e.$t("luckyWheel.ptsCollect2"))),
                              ]),
                              s("br"),
                              s(
                                "p",
                                { staticStyle: { "font-weight": "bold" } },
                                [e._v(e._s(e.$t("luckyWheel.requiredCoin")))]
                              ),
                              s("table", { staticClass: "coins_table" }, [
                                s("tr", [
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo1"))
                                    ),
                                  ]),
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo2"))
                                    ),
                                  ]),
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo3"))
                                    ),
                                  ]),
                                ]),
                                s("tr", [
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo4"))
                                    ),
                                  ]),
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo5"))
                                    ),
                                  ]),
                                  s("td", [
                                    e._v(
                                      e._s(e.$t("luckyWheel.nspintableinfo6"))
                                    ),
                                  ]),
                                ]),
                              ]),
                              s("br"),
                              s("br"),
                              s(
                                "p",
                                { staticStyle: { "font-weight": "bold" } },
                                [e._v(e._s(e.$t("luckyWheel.t&c")))]
                              ),
                              e._v(
                                "\n            1. " +
                                  e._s(e.$t("luckyWheel.ulOne")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            2. " +
                                  e._s(e.$t("luckyWheel.ulTwo")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            3. " +
                                  e._s(e.$t("luckyWheel.ulThree")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            4. " +
                                  e._s(e.$t("luckyWheel.ulFour")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            5. " +
                                  e._s(e.$t("luckyWheel.ulFive")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            6. " +
                                  e._s(e.$t("luckyWheel.ulSix")) +
                                  "\n            "
                              ),
                              s("br"),
                              e._v(
                                "\n            7. " +
                                  e._s(e.$t("luckyWheel.ulSeven")) +
                                  "\n            "
                              ),
                              s("br"),
                            ]),
                          ]),
                        ])
                      : e._e(),
                  ]
                ),
              ]),
              e._m(3),
              e._m(4),
              s(
                "v-dialog",
                {
                  attrs: {
                    value: e.noCoinDialogShow,
                    "max-width": "500",
                    "content-class": "box_instant",
                  },
                },
                [
                  s(
                    "v-card",
                    { staticClass: "dialog-card" },
                    [
                      s(
                        "v-row",
                        {
                          class:
                            (e.$vuetify.breakpoint.mdAndDown, "dialog-header"),
                          attrs: { "no-gutters": "", justify: "space-between" },
                        },
                        [
                          s(
                            "v-col",
                            {
                              staticClass: "d-flex flex-column pl-6 py-4",
                              attrs: { cols: "10" },
                            },
                            [
                              s(
                                "label",
                                {
                                  staticClass:
                                    "dialog-title text-capitalize d-block full-width noCoinSpinTitle",
                                },
                                [e._v("\n            Notice\n          ")]
                              ),
                            ]
                          ),
                          s(
                            "v-col",
                            {
                              staticClass:
                                "d-flex justify-content-center align-content-center",
                              attrs: { cols: "2" },
                            },
                            [
                              null != e.closeNoCoinDialog
                                ? s(
                                    "v-icon",
                                    {
                                      staticClass: "full-width",
                                      class: ["white--text dialog-close-icon"],
                                      on: { click: e.closeNoCoinDialog },
                                    },
                                    [
                                      e._v(
                                        "\n            mdi-close\n          "
                                      ),
                                    ]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      e.noCoinDialogShow
                        ? s(
                            "v-row",
                            {
                              staticClass: "dialog-row",
                              class: e.noCoinContent,
                              attrs: { "no-gutters": "" },
                            },
                            [
                              s("v-row", { staticClass: "noCoinTextContent" }, [
                                s("p", { staticClass: "noCoinSpinSubTitle" }, [
                                  e._v("No enough coin to spin ?"),
                                ]),
                                s("br"),
                                s("p", { staticClass: "noCoinSpinDesc" }, [
                                  e._v(
                                    "You can choose below option to get extra coin and continue your spin."
                                  ),
                                ]),
                              ]),
                              s(
                                "v-row",
                                [
                                  s("v-col", { attrs: { cols: "6" } }, [
                                    e._v("1st box"),
                                  ]),
                                  s("v-col", { attrs: { cols: "6" } }, [
                                    e._v("2nd box"),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "roulette_main_coin" }, [
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_1",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/1.png",
                  },
                }),
              ]),
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_2",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/2.png",
                  },
                }),
              ]),
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_3",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/3.png",
                  },
                }),
              ]),
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_4",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/4.png",
                  },
                }),
              ]),
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_5",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/5.png",
                  },
                }),
              ]),
              s("span", { staticClass: "roulette_main_coinWrap" }, [
                s("img", {
                  staticClass: "roulette_main_coin_6",
                  attrs: {
                    src: "https://jiliwin.9terawolf.com/images/wof/KKMultiple/6.png",
                    alt: "nagad88-exchange",
                  },
                }),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "column" }, [
              s("img", {
                attrs: {
                  src: "/static/svg/wheel/DepositCoin.png",
                  height: "120px",
                  width: "150px",
                },
              }),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "column" }, [
              s("img", {
                attrs: {
                  src: "/static/svg/wheel/DailyCheckin.png",
                  height: "120px",
                  width: "150px",
                },
              }),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "roulette_nav" }, [
              s("ul", { staticClass: "roulette_nav_wrap" }, [
                s("li", { staticClass: "roulette_nav_item" }, [
                  s("a", { staticClass: "active", attrs: { href: "/" } }, [
                    e._v("Home"),
                  ]),
                ]),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("div", { staticClass: "roulette_popup" }, [
              s("div", { staticClass: "roulette_popup_wrap" }, [
                s("div", { staticClass: "roulette_popup_box" }, [
                  s("p", [e._v("Congratulations go to")]),
                  s("h3"),
                  s("img", {
                    attrs: {
                      src: "https://csi.20icipp.comundefined",
                      alt: "nagad88-exchange",
                    },
                  }),
                  s("div", { staticClass: "roulette_popup_btnWrap" }, [
                    s("div", { staticClass: "roulette_popup_btn disabled" }, [
                      e._v("Roll again"),
                    ]),
                  ]),
                  s("div", { staticClass: "roulette_popup_btn" }, [e._v("OK")]),
                  s("div", { staticClass: "roulette_popup_close" }, [s("div")]),
                ]),
              ]),
            ]);
          },
        ],
        n =
          (s("99af"),
          s("7db0"),
          s("c975"),
          s("d81d"),
          s("b0c0"),
          s("ac1f"),
          s("5319"),
          s("1276"),
          s("4795"),
          s("96cf"),
          s("1da1")),
        l = s("4260"),
        r = s("ac8b"),
        o = (s("e6fd"), s("bb72")),
        c = s("1157"),
        h = s.n(c),
        u = s("d724"),
        d = s.n(u),
        _ = s("15a4"),
        p = s("d991"),
        w = {
          name: "MobileWheelOfFortune",
          data: function () {
            return {
              isLoggedIn: l["f"].isAuthenticated(),
              noCoinDialogShow: !1,
              btnNames: ["funwheel", "happywheel", "crazywheel"],
              wheelName: "Fun Wheel",
              wheelDisplayName: "Wealth Wheel",
              selectedwheel: null,
              activeBtn: "funwheel",
              normalClass: "",
              activeClass: "enlarge",
              backgroundColor: "",
              is_spinning: !1,
              wheel_id: 0,
              currencySymbolMapp: d.a,
              language: l["f"].getLanguage(),
              currentCurrency: l["f"].getCurrency(),
              winList: !0,
              recordList: !1,
              prizeList: [],
              win_amount: 0,
              reward_id: 0,
              degree: 0,
              arrDegree: [0, -45, -90, -135, 180, 135, 90, 45],
              stopDegree: 0,
              isWinPrize: !0,
              error: "",
              showtnc: !1,
            };
          },
          created: function () {
            this.metaTag(),
              (this.selectedwheel = {
                id: 0,
                name: "",
                start_date: "",
                end_date: "",
                event_setting: {
                  event_id: 0,
                  coin_required: 0,
                  no_of_rewards: 0,
                  main_image_url: "",
                  frame_image_url: "",
                  start_button_image_url: "",
                  home_gif_url: "",
                },
                event_rewards: [],
              }),
              this.getMemberDetails(),
              this.getMultipleWheel();
          },
          computed: {
            currencySymbol: function () {
              return d()(this.currentCurrency);
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
            wheelInfo: function () {
              return this.$store.state.wheel.multipleWheel;
            },
            memberInfo: function () {
              return this.$store.state.member.info;
            },
            chances: function () {
              return this.$store.state.wheel.wheelChances.chances;
            },
            wheelLogs: function () {
              return this.$store.state.wheel.wheelLogs;
            },
            wheelMyLogs: function () {
              return this.$store.state.wheel.wheelMyLogs;
            },
            spinResult: function () {
              return this.$store.state.wheel.wheelSpin.complete;
            },
          },
          watch: {
            memberInfo: function () {
              return this.$store.state.member.info;
            },
            isLoggedIn: function () {
              this.$store.state.member.isLoggedIn &&
                (this.getWheel(), this.getMultipleWheel());
            },
            spinResult: function () {
              if (this.$store.state.wheel.wheelSpin.complete)
                if (this.$store.state.wheel.wheelSpin.success) {
                  (this.win_amount =
                    this.$store.state.wheel.wheelSpin.win_amount),
                    (this.reward_id =
                      this.$store.state.wheel.wheelSpin.reward_id);
                  var e = this.prizeList.indexOf(this.reward_id);
                  (this.degree = this.arrDegree[e]),
                    (this.stopDegree = this.degree + 1800),
                    this.rotate();
                } else
                  (this.error = this.$store.state.wheel.wheelSpin.error),
                    this.openWinPopup();
            },
            wheelInfo: function () {
              this.prizeList = [];
              var e = this.$store.state.wheel.multipleWheel[1];
              (this.selectedwheel = e),
                (this.wheel_id = e.id),
                (this.prizeList = e.event_rewards.map(function (e) {
                  return e.id;
                })),
                this.getWheelLogs(e),
                this.getWheelChances(e),
                this.getWheelMyLogs(e);
            },
            wheelLogs: function () {
              return this.$store.state.wheel.wheelLogs;
            },
            wheelMyLogs: function () {
              return this.$store.state.wheel.wheelMyLogs;
            },
            chances: function () {
              return this.$store.state.wheel.wheelChances.chances;
            },
          },
          methods: {
            closeNoCoinDialog: function () {
              this.noCoinDialogShow = !1;
            },
            metaTag: function () {
              var e = window.location.href;
              l["f"].setCanonical(e);
              var t = e.split("/")[2],
                s = t.replace(/(^\w+:|^)\/\//, ""),
                i = window.location.pathname,
                a = i.replace(/\/(en-BD|bn-BD)/i, ""),
                n = "https://".concat(s).concat(a),
                r = "https://".concat(s, "/en-BD").concat(a),
                o = "https://".concat(s, "/bn-BD").concat(a);
              l["f"].setMetaTag("url", n),
                l["f"].setMetaTag("og:url", n),
                l["f"].setHreflangLinks(n),
                l["f"].setHreflangLinksen(r),
                l["f"].setHreflangLinksbd(o);
            },
            selectBtn: function (e) {
              var t = this;
              switch (((this.activeBtn = e), e)) {
                case "funwheel":
                  (this.wheelName = "Fun Wheel"),
                    (this.wheelDisplayName = "Wheel OF Wealth");
                  break;
                case "happywheel":
                  (this.wheelName = "Happy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Prosperity");
                  break;
                case "crazywheel":
                  (this.wheelName = "Crazy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Fortune");
                  break;
                default:
                  this.wheelName = "Wheel";
                  break;
              }
              (this.selectedwheel = this.$store.state.wheel.multipleWheel.find(
                function (e) {
                  return e.name === t.wheelName;
                }
              )),
                (this.prizeList = this.selectedwheel.event_rewards.map(
                  function (e) {
                    return e.id;
                  }
                )),
                this.getWheelLogs(this.selectedwheel);
            },
            showNextWheel: function () {
              var e = this,
                t = this.btnNames.indexOf(this.activeBtn),
                s = (t + 1) % this.btnNames.length;
              switch (((this.activeBtn = this.btnNames[s]), this.activeBtn)) {
                case "funwheel":
                  (this.wheelName = "Fun Wheel"),
                    (this.wheelDisplayName = "Wheel OF Wealth");
                  break;
                case "happywheel":
                  (this.wheelName = "Happy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Prosperity");
                  break;
                case "crazywheel":
                  (this.wheelName = "Crazy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Fortune");
                  break;
                default:
                  this.wheelName = "Wheel";
                  break;
              }
              (this.selectedwheel = this.$store.state.wheel.multipleWheel.find(
                function (t) {
                  return t.name === e.wheelName;
                }
              )),
                (this.prizeList = this.selectedwheel.event_rewards.map(
                  function (e) {
                    return e.id;
                  }
                )),
                this.getWheelLogs(this.selectedwheel);
            },
            showPreviousWheel: function () {
              var e = this,
                t = this.btnNames.indexOf(this.activeBtn),
                s = (t - 1 + this.btnNames.length) % this.btnNames.length;
              switch (((this.activeBtn = this.btnNames[s]), this.activeBtn)) {
                case "funwheel":
                  (this.wheelName = "Fun Wheel"),
                    (this.wheelDisplayName = "Wheel OF Wealth");
                  break;
                case "happywheel":
                  (this.wheelName = "Happy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Prosperity");
                  break;
                case "crazywheel":
                  (this.wheelName = "Crazy Wheel"),
                    (this.wheelDisplayName = "Wheel OF Fortune");
                  break;
                default:
                  this.wheelName = "Wheel";
                  break;
              }
              (this.selectedwheel = this.$store.state.wheel.multipleWheel.find(
                function (t) {
                  return t.name === e.wheelName;
                }
              )),
                (this.prizeList = this.selectedwheel.event_rewards.map(
                  function (e) {
                    return e.id;
                  }
                )),
                this.getWheelLogs(this.selectedwheel);
            },
            setShowtnc: function () {
              !this.active && this.showtnc
                ? ((this.active = !0), (this.showtnc = !0))
                : ((this.active = !this.active),
                  (this.showtnc = !this.showtnc));
            },
            getMemberDetails: function () {
              this.$store.dispatch("".concat(o["g"]));
            },
            closeWinDialog: function () {
              this.$parent.closePageDialog(),
                this.resetWheel(),
                (this.is_spinning = !1);
            },
            openWinPopup: function () {
              var e = this,
                t = this.$parent.initializePageDialogProperty();
              (t.title = l["e"].getMessage("label.wofv3")),
                "" != this.error
                  ? (t.message.push(this.error),
                    t.button.push({
                      title: l["e"].getMessage("label.back"),
                      action: function () {
                        e.closeWinDialog();
                      },
                    }))
                  : 0 == this.win_amount
                  ? (t.message.push(
                      l["e"].getMessage("message.congratsZero", [
                        this.$options.filters.currency(this.win_amount, "BDT"),
                      ])
                    ),
                    t.button.push({
                      title: l["e"].getMessage("label.ok"),
                      action: function () {
                        e.closeWinDialog();
                      },
                    }))
                  : (t.message.push(
                      l["e"].getMessage("message.congrats", [
                        this.$options.filters.currency(this.win_amount, "BDT"),
                      ])
                    ),
                    t.button.push({
                      title: l["e"].getMessage("label.ok"),
                      action: function () {
                        e.closeWinDialog();
                      },
                    })),
                (t.dialogXButton = null),
                this.$parent.openPageDialog(t);
            },
            rotate: function () {
              h()(".roulette_main_part").css("transition", "all 0.5s ease;"),
                h()(".roulette_main_part").css(
                  "transform",
                  "rotate(" + this.degree + "deg)"
                );
              var e = this,
                t = setTimeout(function () {
                  e.degree >= e.stopDegree
                    ? (window.clearTimeout(t),
                      setTimeout(function () {
                        e.openWinPopup();
                      }, 1e3))
                    : ((e.degree += 20),
                      window.requestAnimationFrame(function () {
                        e.rotate();
                      }));
                }, 1);
            },
            showWinnerList: function () {
              (this.winList = !0), (this.recordList = !1);
            },
            showRecordList: function () {
              (this.recordList = !0), (this.winList = !1);
            },
            resetWheel: function () {
              var e = { id: this.selectedwheel.id };
              this.$store.dispatch("".concat(r["b"]), { filter: e }),
                this.isLoggedIn &&
                  this.$store.dispatch("".concat(r["c"]), { filter: e }),
                this.getMemberDetails();
              var t = 0;
              h()(".roulette_main_part").css("transition", "all 0.5s ease;"),
                h()(".roulette_main_part").css(
                  "transform",
                  "rotate(" + t + "deg)"
                );
            },
            getWheelLogs: function (e) {
              var t = { id: e.id };
              this.$store.dispatch("".concat(r["e"]), { filter: t });
            },
            getWheelChances: function (e) {
              if (this.isLoggedIn) {
                var t = { id: e.id };
                this.$store.dispatch("".concat(r["c"]), { filter: t });
              }
            },
            getWheelMyLogs: function (e) {
              if (this.isLoggedIn) {
                var t = { id: e.id };
                this.$store.dispatch("".concat(r["d"]), { filter: t });
              }
            },
            getWheel: function () {
              var e = l["f"].getCurrency(),
                t = { currency: e };
              this.$store.dispatch("".concat(r["f"]), { filter: t });
            },
            getMultipleWheel: function () {
              var e = l["f"].getCurrency(),
                t = { currency: e };
              this.$store.dispatch("".concat(r["a"]), { filter: t });
            },
            spinWheel: function () {
              if (!this.is_spinning) {
                var e = { id: this.selectedwheel.id };
                this.$store.dispatch("".concat(r["g"]), { filter: e });
              }
            },
            navigateToCoinPage: function () {
              if (!this.isLoggedIn) return this.$parent.openLoginDialog();
              this.$router.push({ name: _["a"].FUNDS });
            },
            navigateToDailyCheckIn: function () {
              if (!this.isLoggedIn) return this.$parent.openLoginDialog();
              this.$router.push({ name: _["a"].DAILY_CHECKIN });
            },
            navigateWOFPage: function () {
              l["f"].getPlatform() == p["d"].DESKTOP
                ? this.$router.push({
                    name: _["a"].WOF,
                    params: { lang: this.$route.params.lang },
                  })
                : this.$router.push({
                    name: _["a"].MWOF,
                    params: { lang: this.$route.params.lang },
                  });
            },
          },
          mounted: function () {
            var e = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function t() {
                var s;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (s = e),
                          270,
                          [0, -45, -90, -135, 180, 135, 90, 45],
                          2430,
                          h()(document).ready(function () {
                            h()(".roulette_main_btn").on("click", function () {
                              s.isLoggedIn
                                ? s.spinWheel()
                                : s.$parent.openLoginDialog();
                            });
                          });
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        g = w,
        m = (s("236d"), s("2877")),
        f = s("6544"),
        v = s.n(f),
        C = s("8336"),
        b = s("b0af"),
        y = s("62ad"),
        W = s("169a"),
        $ = s("132d"),
        k = s("adda"),
        L = s("0fd9"),
        D = s("2fa4"),
        N = Object(m["a"])(g, i, a, !1, null, "7ff8b69a", null);
      t["default"] = N.exports;
      v()(N, {
        VBtn: C["a"],
        VCard: b["a"],
        VCol: y["a"],
        VDialog: W["a"],
        VIcon: $["a"],
        VImg: k["a"],
        VRow: L["a"],
        VSpacer: D["a"],
      });
    },
  },
]);
//# sourceMappingURL=app~1133870d.c0e7a2b2.js.map
