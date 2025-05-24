(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~3ea47f77"],
  {
    "44ae": function (t, a, i) {},
    "76dd": function (t, a, i) {},
    "7d1a": function (t, a, i) {
      "use strict";
      var e = i("76dd"),
        n = i.n(e);
      n.a;
    },
    8687: function (t, a, i) {
      "use strict";
      i.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i(
            "div",
            [
              i("div", { staticClass: "pack_box" }, [
                i(
                  "div",
                  {
                    staticStyle: {
                      position: "absolute",
                      right: "5%",
                      "z-index": "99999",
                    },
                  },
                  [
                    i(
                      "v-chip",
                      {
                        attrs: {
                          color: "transparent",
                          label: "",
                          "x-large": "",
                        },
                        on: {
                          click: function (a) {
                            t.informationBox = !0;
                          },
                        },
                      },
                      [
                        i(
                          "v-icon",
                          {
                            staticStyle: { width: "26px" },
                            attrs: { "x-large": "", left: "", color: "white" },
                          },
                          [
                            t._v(
                              "\n            mdi-information-outline\n          "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i("span", { staticClass: "countdown count_down_timer" }, [
                  t._v(t._s(t.end_date)),
                ]),
                i("div", { staticClass: "clock_panel" }, [
                  i("ul", { attrs: { id: "example" } }, [
                    i("p", { attrs: { id: "lucktext" } }, [
                      t._v(t._s(t.$t("label.tryurluck"))),
                    ]),
                    t._m(0),
                    i("li", { staticClass: "seperator" }, [t._v(":")]),
                    t._m(1),
                    i("li", { staticClass: "seperator" }, [t._v(":")]),
                    t._m(2),
                    i("li", { staticClass: "seperator" }, [t._v(":")]),
                    t._m(3),
                    i("p", { staticClass: "grab_now" }, [t._v("Grab now")]),
                  ]),
                  i("div", { staticClass: "circular_effect" }),
                ]),
                i(
                  "div",
                  { staticClass: "scroll-text", attrs: { id: "demo" } },
                  [
                    i(
                      "ul",
                      t._l(t.coinLogs, function (a, e) {
                        return i(
                          "li",
                          {
                            key: e,
                            staticClass: "d-flex justify-start align-center",
                          },
                          [
                            i("div", { staticClass: "numbering" }, [
                              t._v(t._s(parseInt(e) + 1)),
                            ]),
                            i("span", { staticClass: "mxb-2 player_name" }, [
                              t._v(t._s(t.GetMaskMember(a.member_code))),
                            ]),
                            i("span", { staticClass: "mxb-2 player_coin" }, [
                              t._v(t._s(a.point_rewarded) + " coins"),
                            ]),
                            i("span", { staticClass: "mxb-2 player_date" }, [
                              t._v(t._s(t._f("shortDate")(a.created_at))),
                            ]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                t._m(4),
                i("ul", { staticClass: "redpack_box" }),
              ]),
              i(
                "v-dialog",
                {
                  staticClass: "pop_box",
                  attrs: { "max-width": "500px", transition: "top" },
                  model: {
                    value: t.isWinPrize,
                    callback: function (a) {
                      t.isWinPrize = a;
                    },
                    expression: "isWinPrize",
                  },
                },
                [
                  i(
                    "v-card",
                    {
                      attrs: {
                        color: "white",
                        "min-height": "200",
                        "max-width": "500px",
                      },
                    },
                    [
                      i(
                        "v-card-title",
                        { staticClass: "primary white--text" },
                        [t._v("\n          " + t._s(t.title) + "\n        ")]
                      ),
                      i("div", { staticClass: "pop_con pa-5" }, [
                        t.prize > 0 && "miss" != t.prize
                          ? i("h3", [
                              t._v(
                                "Congratulations, " +
                                  t._s(t.prize) +
                                  " coins has been credited to your coin\n            wallet."
                              ),
                            ])
                          : "" != t.error
                          ? i("h3", [t._v(t._s(t.error))])
                          : i("h3", [
                              t._v("Ops, sorry please try again next time"),
                            ]),
                      ]),
                      i(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end" },
                        [
                          i(
                            "v-btn",
                            {
                              attrs: {
                                ripple: "",
                                outlined: "",
                                color: "primary",
                              },
                              on: {
                                click: function (a) {
                                  t.isWinPrize = !1;
                                },
                              },
                            },
                            [t._v("OK")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              i(
                "v-dialog",
                {
                  staticClass: "pop_box",
                  attrs: { "max-width": "500px" },
                  model: {
                    value: t.informationBox,
                    callback: function (a) {
                      t.informationBox = a;
                    },
                    expression: "informationBox",
                  },
                },
                [
                  i(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      staticStyle: { "overflow-y": "auto" },
                      attrs: {
                        color: "white",
                        "min-height": "200",
                        "max-height": "450",
                        "max-width": "500",
                      },
                    },
                    [
                      i(
                        "v-card-title",
                        { staticClass: "primary white--text" },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.$t("label.termsAndConditions")) +
                              "\n        "
                          ),
                        ]
                      ),
                      i("div", { staticClass: "pop_con pa-5" }, [
                        i("ol", [
                          i("li", [t._v(t._s(t.getCoinMessage()))]),
                          t.is_recurring_chance
                            ? i("li", [
                                t._v(
                                  "\n              " +
                                    t._s(t.getChanceMessage()) +
                                    "\n            "
                                ),
                              ])
                            : i("li", [
                                t._v(
                                  "\n              " +
                                    t._s(t.$t("label.is_not_recurring")) +
                                    "\n            "
                                ),
                              ]),
                          i("li", [t._v(" " + t._s(t.$t("label.not_carry")))]),
                          i("li", [
                            t._v(
                              " " + t._s(t.$t("label.first_come_first_serve"))
                            ),
                          ]),
                          i("li", [
                            t._v(" " + t._s(t.$t("label.redemp_coin"))),
                          ]),
                          i("li", [
                            t._v(" " + t._s(t.$t("label.t&c_applied"))),
                          ]),
                        ]),
                      ]),
                      i(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end" },
                        [
                          i(
                            "v-btn",
                            {
                              attrs: {
                                ripple: "",
                                outlined: "",
                                color: "primary",
                              },
                              on: {
                                click: function (a) {
                                  t.informationBox = !1;
                                },
                              },
                            },
                            [t._v("Close")]
                          ),
                        ],
                        1
                      ),
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
        n = [
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("li", [
              i("span", { staticClass: "days" }, [t._v("00")]),
              i("p", { staticStyle: { color: "white", "margin-top": "0" } }, [
                t._v("d"),
              ]),
            ]);
          },
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("li", [
              i("span", { staticClass: "hours" }, [t._v("00")]),
              i("p", { staticStyle: { color: "white", "margin-top": "0" } }, [
                t._v("hr"),
              ]),
            ]);
          },
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("li", [
              i("span", { staticClass: "minutes" }, [t._v("00")]),
              i("p", { staticStyle: { color: "white", "margin-top": "0" } }, [
                t._v("min"),
              ]),
            ]);
          },
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("li", [
              i("span", { staticClass: "seconds" }, [t._v("00")]),
              i("p", { staticStyle: { color: "white", "margin-top": "0" } }, [
                t._v("sec"),
              ]),
            ]);
          },
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("div", { staticClass: "start_box" }, [i("span")]);
          },
        ],
        s =
          (i("99af"),
          i("0d03"),
          i("e25e"),
          i("ac1f"),
          i("5319"),
          i("1276"),
          i("4795"),
          i("96cf"),
          i("1da1")),
        r = (i("bb72"), i("cdc9")),
        c = i("e6fd"),
        o = i("4260"),
        l = i("4f27"),
        d = i("1157"),
        _ = i.n(d),
        m = {
          name: "GrabCoin",
          data: function () {
            return {
              max_chances_per_day: 1,
              informationBox: !1,
              end_date: "",
              API_URL: c["a"].BASE_URL,
              image_two: "",
              image_one: "",
              prize: 0,
              isWinPrize: !1,
              error: "",
              title: "",
              min_deposit: 0,
              is_recurring_chance: !1,
            };
          },
          mounted: function () {
            var t = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function a() {
                var i, e, n, s, r, c, l, d;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (d = function () {
                          var t = r(1, 2),
                            a = r(50, 150),
                            e = r(0, l),
                            n = r(-45, 45);
                          c++;
                          var s = i.image_one;
                          2 == t && (s = i.image_two);
                          var o =
                            "<li style='list-style-type: none' class='li" +
                            c +
                            "'><a href='javascript: void(0);'><img src='" +
                            s +
                            "'></a></li>";
                          _()(".redpack_box").append(o),
                            _()(".li" + c).css("left", e),
                            _()(".li" + c + " img").css({
                              width: a + "px",
                              transform: "rotate(" + n + "deg)",
                              "-ms-transform": "rotate(" + n + "deg)",
                              "-moz-transform": "rotate(" + n + "deg)",
                              "-webkit-transform": "rotate(" + n + "deg)",
                              "-o-transform": "rotate(" + n + "deg)",
                            }),
                            _()(".li" + c).animate(
                              { top: _()(document).height() + 20 },
                              5e3,
                              function () {
                                _()(this).remove();
                              }
                            ),
                            _()(".li" + c).click(function () {
                              i.isLoggedIn
                                ? i.randomPrize()
                                : i.$parent.openLoginDialog();
                            }),
                            setTimeout(d, 700);
                        }),
                          (r = function (t, a) {
                            return parseInt(Math.random() * (a + 1 - t) + t);
                          }),
                          (s = function () {
                            var t = 4,
                              a = function a() {
                                t--,
                                  t > 0
                                    ? _()(".start_box span").html(t)
                                    : _()(".start_box").remove(),
                                  setTimeout(a, 1e3);
                              };
                            a();
                          }),
                          (n = function () {
                            _()(".start_box").css(
                              "height",
                              _()("html").height()
                            ),
                              _()(".redpack_box").css(
                                "height",
                                _()("html").height()
                              );
                          }),
                          (e = function () {
                            var t = o["f"].getCurrency();
                            return _.a.get(
                              i.API_URL + "/reward/grab-coin?currency=" + t,
                              function (t) {
                                (i.image_one = t.data.icon_one),
                                  (i.image_two = t.data.icon_two),
                                  (i.end_date = t.data.end_date),
                                  (i.title = t.data.grab_name),
                                  (i.min_deposit = t.data.min_deposit),
                                  (i.max_chances_per_day =
                                    t.data.max_chances_per_day),
                                  (i.is_recurring_chance =
                                    t.data.is_recurring_chance);
                              }
                            );
                          }),
                          (i = t),
                          _()(document).ready(function () {
                            _.a.when(e()).done(function (t) {
                              _()(".countdown").length &&
                                _.a.each(_()(".countdown"), function (t, a) {
                                  var i = _()(a).text(),
                                    e = _()(a),
                                    n = i.split(/[- :]/),
                                    s = new Date(
                                      n[0],
                                      n[1] - 1,
                                      n[2],
                                      n[3],
                                      n[4],
                                      n[5]
                                    ),
                                    r = new Date(s).getTime(),
                                    c = function t() {
                                      var a = new Date().getTime(),
                                        i = r - a,
                                        n = Math.floor(i / 864e5),
                                        s = Math.floor((i % 864e5) / 36e5),
                                        c = Math.floor((i % 36e5) / 6e4),
                                        l = Math.floor((i % 6e4) / 1e3);
                                      return (
                                        e.text(
                                          n + " : " + s + " : " + c + " : " + l
                                        ),
                                        _()(".days").text(n),
                                        _()(".hours").text(s),
                                        _()(".minutes").text(c),
                                        _()(".seconds").text(l),
                                        i < 0 &&
                                          (clearInterval(o), e.text("EXPIRED")),
                                        t
                                      );
                                    },
                                    o = setInterval(c(), 1e3);
                                });
                            }),
                              n(),
                              s(),
                              setTimeout(d, 3e3);
                          }),
                          (c = 0),
                          (l = parseInt(_()(".redpack_box").width()) - 60),
                          _()(".pop_con a").click(function () {
                            _()(".pop_box").css("display", "none");
                          }),
                          _()("#demo").scrollbox();
                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          created: function () {
            this.metaTag(), this.getGrabCoinSetting(), this.getCoinLogs();
          },
          methods: {
            metaTag: function () {
              var t = window.location.href;
              o["f"].setCanonical(t);
              var a = t.split("/")[2],
                i = a.replace(/(^\w+:|^)\/\//, ""),
                e = window.location.pathname,
                n = e.replace(/\/(en-BD|bn-BD)/i, ""),
                s = "https://".concat(i).concat(n),
                r = "https://".concat(i, "/en-BD").concat(n),
                c = "https://".concat(i, "/bn-BD").concat(n);
              o["f"].setHreflangLinks(s),
                o["f"].setHreflangLinksen(r),
                o["f"].setHreflangLinksbd(c);
            },
            getChanceMessage: function () {
              return o["e"].getMessage("label.is_recurring", [
                Object(l["a"])(this.min_deposit),
                this.max_chances_per_day,
              ]);
            },
            getCoinMessage: function () {
              return o["e"].getMessage("label.deposit_requirement", [
                Object(l["a"])(this.min_deposit),
              ]);
            },
            randomPrize: function () {
              this.$store.dispatch("".concat(r["m"]));
            },
            GetMaskMember: function (t) {
              var a = t.length,
                i = t.substr(0, 3) + "***" + t.substr(6, a);
              return i;
            },
            getCoinLogs: function () {
              var t = { currency: "BDT" };
              this.$store.dispatch("".concat(r["w"]), { filter: t });
            },
            getGrabCoinSetting: function () {
              var t = { currency: "BDT" };
              this.$store.dispatch("".concat(r["n"]), { filter: t });
            },
            showRequirement: function () {
              this.informationBox = !0;
            },
          },
          computed: {
            grabCoinResult: function () {
              return this.$store.state.bonus.grabCoin.complete;
            },
            coinLogs: function () {
              return this.$store.state.bonus.rewardCoinsLog;
            },
            grabCoin: function () {
              var t = this.$store.state.bonus.grabCoinSettings;
              return (this.end_date = t.end_date), t;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
          },
          watch: {
            grabCoinResult: function () {
              this.$store.state.bonus.grabCoin.complete &&
                ((this.prize = this.$store.state.bonus.grabCoin.data),
                (this.error = this.$store.state.bonus.grabCoin.success
                  ? ""
                  : this.$store.state.bonus.grabCoin.error),
                (this.isWinPrize = !0),
                this.getCoinLogs(),
                this.$store.dispatch("".concat(r["v"])));
            },
            coinLogs: function () {
              return this.$store.state.bonus.rewardCoinsLog;
            },
            grabCoin: function () {
              var t = this.$store.state.bonus.grabCoinSettings;
              return (this.end_date = t.end_date), t;
            },
          },
        },
        p = m,
        u = (i("90a9"), i("2877")),
        h = i("6544"),
        g = i.n(h),
        f = i("8336"),
        v = i("b0af"),
        b = i("99d9"),
        C = i("cc20"),
        x = i("169a"),
        w = i("132d"),
        y = Object(u["a"])(p, e, n, !1, null, null, null);
      a["default"] = y.exports;
      g()(y, {
        VBtn: f["a"],
        VCard: v["a"],
        VCardActions: b["a"],
        VCardTitle: b["d"],
        VChip: C["a"],
        VDialog: x["a"],
        VIcon: w["a"],
      });
    },
    "90a9": function (t, a, i) {
      "use strict";
      var e = i("44ae"),
        n = i.n(e);
      n.a;
    },
    fe25: function (t, a, i) {
      "use strict";
      i.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i(
            "div",
            { staticClass: "card-mania-bg" },
            [
              i("div", { staticClass: "pack-box" }, [
                i("div", { staticClass: "prize-container" }, [
                  i("div", { staticClass: "chances-box" }, [
                    i("p", [
                      i("b", [t._v(t._s(t.play_chances))]),
                      t._v("\n          chances\n        "),
                    ]),
                  ]),
                  i("div", [
                    i("span", { staticClass: "slogan" }, [
                      t._v(t._s(t.$t("label.card_mania_title"))),
                    ]),
                  ]),
                  i("div", { staticClass: "prizes" }, [
                    i("div", { staticClass: "prizes-content" }, [
                      i("div", { staticClass: "prize-header" }, [
                        i("img", {
                          attrs: {
                            src: "/static/image/cardMania/giftBox.png",
                            alt: "giftBox",
                          },
                        }),
                        i("div", { staticClass: "txt-clr-title txt-upper" }, [
                          t._v(t._s(t.$t("label.card_mania_prize_header"))),
                        ]),
                      ]),
                      i("p", [
                        t._v(t._s(t.$t("label.card_mania_prize_content"))),
                      ]),
                      i("hr"),
                      i("div", { staticClass: "prize-example" }, [
                        i("div", { staticClass: "txt-clr-title" }, [
                          t._v(t._s(t.$t("label.card_mania_grand_prizes"))),
                        ]),
                        i("p", [
                          t._v(
                            t._s(t.$t("label.card_mania_grand_prizes_list"))
                          ),
                        ]),
                      ]),
                      i("div", { staticClass: "prize-example" }, [
                        i("div", { staticClass: "txt-clr-title" }, [
                          t._v(
                            t._s(t.$t("label.card_mania_consolation_prizes"))
                          ),
                        ]),
                        i("p", [
                          t._v(
                            t._s(
                              t.$t("label.card_mania_consolation_prizes_list")
                            )
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._m(0),
                ]),
                i("div", { staticClass: "game-container" }, [
                  i("div", { staticClass: "title-container" }, [
                    i("img", {
                      staticClass: "title",
                      attrs: {
                        src: "/static/image/cardMania/title.png",
                        alt: "title",
                      },
                    }),
                    i("img", {
                      staticClass: "icon-coin",
                      attrs: {
                        src: "/static/image/cardMania/icon-coin-2.png",
                        alt: "coin",
                      },
                    }),
                    i("img", {
                      staticClass: "mobile-icon-gift",
                      attrs: {
                        src: "/static/image/cardMania/icon-gift.png",
                        alt: "gift",
                      },
                    }),
                    i(
                      "div",
                      { staticClass: "mobile-chip-card-mania" },
                      [
                        i(
                          "v-chip",
                          {
                            staticStyle: { float: "right" },
                            attrs: {
                              color: "transparent",
                              label: "",
                              "x-large": "",
                            },
                            on: {
                              click: function (a) {
                                t.informationBox = !0;
                              },
                            },
                          },
                          [
                            i(
                              "v-icon",
                              {
                                staticStyle: { width: "26px" },
                                attrs: {
                                  "x-large": "",
                                  left: "",
                                  color: "white",
                                },
                              },
                              [
                                t._v(
                                  "\n              mdi-information-outline\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  i("div", { staticClass: "mobile-slogan" }, [
                    i("div", { staticClass: "chances-box" }, [
                      i("p", [
                        i("b", [t._v(t._s(t.play_chances))]),
                        t._v("\n            chances\n          "),
                      ]),
                    ]),
                    i("span", [t._v(t._s(t.$t("label.card_mania_title")))]),
                    i("img", {
                      staticClass: "mobile-icon-coin-1",
                      attrs: {
                        src: "/static/image/cardMania/icon-coin-1.png",
                        alt: "coin1",
                      },
                    }),
                    i("img", {
                      staticClass: "mobile-icon-coin-2",
                      attrs: {
                        src: "/static/image/cardMania/icon-coin-2.png",
                        alt: "coin2",
                      },
                    }),
                  ]),
                  i(
                    "div",
                    { staticClass: "game-frame" },
                    [
                      0 == t.isStartGame
                        ? i(
                            "div",
                            { staticClass: "game-start-frame" },
                            [
                              i(
                                "v-btn",
                                {
                                  staticClass: "white--text",
                                  attrs: { ripple: "" },
                                  on: {
                                    click: function (a) {
                                      return t.startGame();
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("label.play_now")))]
                              ),
                              i("span", [
                                t._v(
                                  t._s(
                                    t.$t("label.card_mania_play_chance", [
                                      t.play_chances,
                                    ])
                                  )
                                ),
                              ]),
                            ],
                            1
                          )
                        : t._e(),
                      t._l(t.cards, function (a, e) {
                        return i(
                          "div",
                          {
                            key: e,
                            staticClass: "card",
                            class: { open: a.open },
                            on: {
                              click: function (a) {
                                return t.flipCard(e);
                              },
                            },
                          },
                          [
                            i("div", { staticClass: "card-inner" }, [
                              i("div", { staticClass: "card-front" }),
                              i("div", { staticClass: "card-back" }, [
                                i("img", {
                                  attrs: { src: a.image, alt: a.image },
                                }),
                              ]),
                            ]),
                          ]
                        );
                      }),
                    ],
                    2
                  ),
                ]),
                i("div", { staticClass: "mobile-prize-container" }, [
                  i("div", { staticClass: "prizes" }, [
                    i("div", { staticClass: "prize-box" }, [
                      t._m(1),
                      i("div", { staticClass: "prize-header" }, [
                        i("div", { staticClass: "txt-clr-title txt-upper" }, [
                          t._v(t._s(t.$t("label.card_mania_prize_header"))),
                        ]),
                        i("p", [
                          t._v(t._s(t.$t("label.card_mania_prize_content"))),
                        ]),
                        i("hr"),
                        i("div", { staticClass: "prize-example" }, [
                          i("div", { staticClass: "txt-clr-title" }, [
                            t._v(t._s(t.$t("label.card_mania_grand_prizes"))),
                          ]),
                          i("p", [
                            t._v(
                              t._s(t.$t("label.card_mania_grand_prizes_list"))
                            ),
                          ]),
                        ]),
                        i("div", { staticClass: "prize-example" }, [
                          i("div", { staticClass: "txt-clr-title" }, [
                            t._v(
                              t._s(t.$t("label.card_mania_consolation_prizes"))
                            ),
                          ]),
                          i("p", [
                            t._v(
                              t._s(
                                t.$t("label.card_mania_consolation_prizes_list")
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                i("div", { staticClass: "winner-container" }, [
                  i(
                    "div",
                    { staticClass: "chip-card-mania" },
                    [
                      i(
                        "v-chip",
                        {
                          staticStyle: { float: "right" },
                          attrs: {
                            color: "transparent",
                            label: "",
                            "x-large": "",
                          },
                          on: {
                            click: function (a) {
                              t.informationBox = !0;
                            },
                          },
                        },
                        [
                          i(
                            "v-icon",
                            {
                              staticStyle: { width: "26px" },
                              attrs: {
                                "x-large": "",
                                left: "",
                                color: "white",
                              },
                            },
                            [
                              t._v(
                                "\n            mdi-information-outline\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i("div", { staticClass: "winner" }, [
                    i("div", { staticClass: "winner-content" }, [
                      i(
                        "div",
                        { staticClass: "winner-tab" },
                        [
                          i(
                            "v-tabs",
                            {
                              attrs: {
                                "fixed-tabs": "",
                                centered: "",
                                "hide-slider": !0,
                              },
                              model: {
                                value: t.tab,
                                callback: function (a) {
                                  t.tab = a;
                                },
                                expression: "tab",
                              },
                            },
                            [
                              i("v-tab", { attrs: { href: "#list" } }, [
                                t._v("Winner's list"),
                              ]),
                              i("v-tab", { attrs: { href: "#record" } }, [
                                t._v("Wining record"),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-window",
                            {
                              model: {
                                value: t.tab,
                                callback: function (a) {
                                  t.tab = a;
                                },
                                expression: "tab",
                              },
                            },
                            [
                              i("v-window-item", { attrs: { value: "list" } }, [
                                i(
                                  "ul",
                                  { staticClass: "pl-3 pr-3 winner-list-ul" },
                                  t._l(t.cardManiaLogs, function (a, e) {
                                    return i(
                                      "li",
                                      {
                                        key: e,
                                        staticClass:
                                          "winner-list d-flex align-center",
                                      },
                                      [
                                        i(
                                          "span",
                                          { staticClass: "mx-1 winner-date" },
                                          [
                                            t._v(
                                              t._s(
                                                t._f("shortDate")(a.created_at)
                                              )
                                            ),
                                          ]
                                        ),
                                        i(
                                          "span",
                                          { staticClass: "mx-1 winner-name" },
                                          [
                                            t._v(
                                              t._s(
                                                t.GetMaskMember(a.member_code)
                                              )
                                            ),
                                          ]
                                        ),
                                        i(
                                          "span",
                                          {
                                            staticClass:
                                              "mxb-2 winner-rewarded",
                                          },
                                          [t._v(t._s(a.reward))]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                              ]),
                              i(
                                "v-window-item",
                                { attrs: { value: "record" } },
                                [
                                  i(
                                    "ul",
                                    { staticClass: "pl-3 pr-3 winner-list-ul" },
                                    t._l(t.cardManiaLogs, function (a, e) {
                                      return null != t.memberCode &&
                                        a.member_code == t.memberCode
                                        ? i(
                                            "li",
                                            {
                                              key: e,
                                              staticClass:
                                                "winner-list d-flex align-center",
                                            },
                                            [
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "mx-1 winner-date",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t._f("shortDate")(
                                                        a.created_at
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "mx-1 winner-name",
                                                },
                                                [t._v(t._s(a.member_code))]
                                              ),
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "mxb-2 winner-rewarded",
                                                },
                                                [t._v(t._s(a.reward))]
                                              ),
                                            ]
                                          )
                                        : t._e();
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
              i(
                "v-dialog",
                {
                  attrs: { "max-width": "500px", transition: "top" },
                  model: {
                    value: t.isWinPrize,
                    callback: function (a) {
                      t.isWinPrize = a;
                    },
                    expression: "isWinPrize",
                  },
                },
                [
                  i(
                    "v-card",
                    {
                      attrs: {
                        color: "white",
                        "min-height": "200",
                        "max-width": "500px",
                      },
                    },
                    [
                      i(
                        "v-card-title",
                        { staticClass: "primary white--text" },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("label.card_mania_rewards")) +
                              "\n      "
                          ),
                        ]
                      ),
                      i("div", { staticClass: "card-mania-pop-box pa-5" }, [
                        "" != t.prize_name && "miss" != t.prize_name
                          ? i("div", [
                              i("div", [
                                i("img", {
                                  attrs: { src: t.prize_img, alt: "winning" },
                                }),
                              ]),
                              i("h3", [
                                t._v(
                                  t._s(t.$t("label.card_mania_congratulations"))
                                ),
                              ]),
                              i("span", [
                                t._v(
                                  t._s(
                                    t.$t("label.card_mania_win_prizes", [
                                      t.prize_name,
                                    ])
                                  )
                                ),
                              ]),
                            ])
                          : "" != t.error
                          ? i("div", [i("h3", [t._v(t._s(t.error))])])
                          : i("div", [
                              i("h3", [
                                t._v("Ops, sorry please try again next time"),
                              ]),
                            ]),
                      ]),
                      i(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end" },
                        [
                          i(
                            "v-btn",
                            {
                              staticClass: "primary white--text",
                              staticStyle: { "min-width": "100%" },
                              attrs: { ripple: "", outlined: "" },
                              on: {
                                click: function (a) {
                                  return t.resetGame();
                                },
                              },
                            },
                            [t._v("OK")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              i(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
                  model: {
                    value: t.informationBox,
                    callback: function (a) {
                      t.informationBox = a;
                    },
                    expression: "informationBox",
                  },
                },
                [
                  i(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      staticStyle: { "overflow-y": "auto" },
                      attrs: {
                        color: "white",
                        "min-height": "200",
                        "max-height": "450",
                        "max-width": "500",
                      },
                    },
                    [
                      i(
                        "v-card-title",
                        { staticClass: "primary white--text" },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("label.howToStart")) +
                              "\n      "
                          ),
                        ]
                      ),
                      i("div", { staticClass: "pa-5" }, [
                        i("ol", [
                          i("li", [t._v(t._s(t.getCoinMessage()))]),
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_how_to_start_1"))),
                          ]),
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_how_to_start_2"))),
                          ]),
                        ]),
                        i("b", [
                          i("br"),
                          t._v(
                            "\n          " +
                              t._s(t.$t("label.card_mania_tnc")) +
                              "\n          "
                          ),
                          i("br"),
                          i("br"),
                        ]),
                        i("ol", [
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_tnc_content_1"))),
                          ]),
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_tnc_content_2"))),
                          ]),
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_tnc_content_3"))),
                          ]),
                          i("li", [
                            t._v(t._s(t.$t("label.card_mania_tnc_content_4"))),
                          ]),
                        ]),
                      ]),
                      i(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end" },
                        [
                          i(
                            "v-btn",
                            {
                              staticClass: "primary white--text",
                              staticStyle: { "min-width": "100%" },
                              attrs: { ripple: "", outlined: "" },
                              on: {
                                click: function (a) {
                                  t.informationBox = !1;
                                },
                              },
                            },
                            [t._v("Close")]
                          ),
                        ],
                        1
                      ),
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
        n = [
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("div", [
              i("img", {
                staticClass: "icon-coin",
                attrs: {
                  src: "/static/image/cardMania/icon-coin-1.png",
                  alt: "coin",
                },
              }),
            ]);
          },
          function () {
            var t = this,
              a = t.$createElement,
              i = t._self._c || a;
            return i("div", { staticClass: "prize-img" }, [
              i("img", {
                attrs: {
                  src: "/static/image/cardMania/giftBox.png",
                  alt: "giftBox",
                },
              }),
            ]);
          },
        ],
        s =
          (i("99af"),
          i("4de4"),
          i("4160"),
          i("4e827"),
          i("ac1f"),
          i("5319"),
          i("1276"),
          i("159b"),
          i("4795"),
          i("4260")),
        r = i("4f27"),
        c = i("e6fd"),
        o = i("cdc9"),
        l = {
          name: "CardMania",
          components: {},
          data: function () {
            return {
              memberCode: localStorage.getItem(c["f"].USERNAME),
              play_chances: 0,
              play_chances_msg: "",
              min_deposit: 0,
              max_chances_per_day: 1,
              informationBox: !1,
              isWinPrize: !1,
              isStartGame: !1,
              prize_name: "",
              prize_img: "",
              card_index: -1,
              error: "",
              prize_probability: [],
              cards: [
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
                { image: "", open: !1 },
              ],
              winner_list: [],
              tab: 0,
            };
          },
          created: function () {
            this.metaTag(),
              this.getCardManiaSetting(),
              this.getCardManiaLogs(),
              this.getCardManiaUserInfo();
          },
          methods: {
            metaTag: function () {
              var t = window.location.href;
              s["f"].setCanonical(t);
              var a = t.split("/")[2],
                i = a.replace(/(^\w+:|^)\/\//, ""),
                e = window.location.pathname,
                n = e.replace(/\/(en-BD|bn-BD)/i, ""),
                r = "https://".concat(i).concat(n),
                c = "https://".concat(i, "/en-BD").concat(n),
                o = "https://".concat(i, "/bn-BD").concat(n);
              s["f"].setHreflangLinks(r),
                s["f"].setHreflangLinksen(c),
                s["f"].setHreflangLinksbd(o);
            },
            flipCard: function (t) {
              var a = this;
              a.isLoggedIn
                ? ((a.card_index = t), a.randomPrize())
                : a.$parent.openLoginDialog();
            },
            getCoinMessage: function () {
              return s["e"].getMessage("label.card_mania_deposit_requirement", [
                Object(r["a"])(this.min_deposit, "bdt"),
                this.max_chances_per_day,
              ]);
            },
            randomPrize: function () {
              this.$store.dispatch("".concat(o["l"]));
            },
            getCardManiaLogs: function () {
              var t = { currency: "BDT" };
              this.$store.dispatch("".concat(o["g"]), { filter: t });
            },
            getCardManiaSetting: function () {
              var t = { currency: "BDT" };
              this.$store.dispatch("".concat(o["h"]), { filter: t });
            },
            getCardManiaUserInfo: function () {
              if (this.isLoggedIn) {
                var t = { currency: "BDT" };
                this.$store.dispatch("".concat(o["i"]), { filter: t });
              }
            },
            GetMaskMember: function (t) {
              var a = t.length,
                i = t.substr(0, 3) + "***" + t.substr(a - 3, a);
              return i;
            },
            startGame: function () {
              var t = this;
              t.isLoggedIn
                ? t.play_chances <= 0
                  ? ((t.error = t.play_chances_msg), (t.isWinPrize = !0))
                  : (t.isStartGame = !0)
                : t.$parent.openLoginDialog();
            },
            resetGame: function () {
              var t = this;
              (t.isWinPrize = !1),
                (t.prize_name = ""),
                (t.prize_img = ""),
                (t.card_index = -1),
                t.cards.forEach(function (t) {
                  t.open = !1;
                }),
                setTimeout(function () {
                  t.cards.forEach(function (t) {
                    t.image = "";
                  });
                }, 500);
            },
          },
          computed: {
            cardManiaResult: function () {
              return this.$store.state.bonus.cardMania.complete;
            },
            cardManiaLogs: function () {
              return this.$store.state.bonus.cardManiaLog;
            },
            cardMania: function () {
              var t = this.$store.state.bonus.cardManiaSettings;
              return (this.end_date = t.end_date), t;
            },
            cardManiaUserInfo: function () {
              return this.$store.state.bonus.cardManiaUserInfo;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
          },
          watch: {
            cardManiaResult: function () {
              var t = this;
              if (this.$store.state.bonus.cardMania.complete) {
                var a = this;
                if (
                  ((this.prize_name = this.$store.state.bonus.cardMania.data),
                  (this.error = this.$store.state.bonus.cardMania.success
                    ? ""
                    : s["c"].getErrorCodeDesc(
                        this.$store.state.bonus.cardMania.code,
                        Object(r["a"])(this.min_deposit, "bdt")
                      )),
                  "" != this.error)
                )
                  a.isWinPrize = !0;
                else {
                  var i = this.prize_probability.filter(function (a) {
                      return a.reward_name == t.prize_name;
                    }),
                    e = this.prize_probability.filter(function (a) {
                      return a.reward_name !== t.prize_name;
                    });
                  e.sort(function () {
                    return Math.random() - 0.5;
                  });
                  var n = this.cards[this.card_index];
                  if (!n.open) {
                    n.image = i[0].selected_image_url;
                    var c = 0;
                    a.cards.forEach(function (t) {
                      "" == t.image &&
                        ((t.image = e[c].unselected_image_url), c++);
                    }),
                      (a.prize_name = i[0].reward_name),
                      (a.prize_img = i[0].notice_image_url),
                      setTimeout(function () {
                        (n.open = !0),
                          setTimeout(function () {
                            a.cards.forEach(function (t) {
                              t.open || (t.open = !0);
                            }),
                              setTimeout(function () {
                                (a.isWinPrize = !0), (a.isStartGame = !1);
                              }, 1e3);
                          }, 1500);
                      }, 1e3);
                  }
                }
                this.getCardManiaLogs(),
                  this.getCardManiaUserInfo(),
                  this.$store.dispatch("".concat(o["s"]));
              }
            },
            cardManiaLogs: function () {
              return (
                (this.memberCode = localStorage.getItem(c["f"].USERNAME)),
                this.$store.state.bonus.cardManiaLog
              );
            },
            cardMania: function () {
              var t = this.$store.state.bonus.cardManiaSettings;
              return (
                (this.min_deposit = t.min_deposit),
                (this.max_chances_per_day = t.max_chances_per_day),
                (this.end_date = t.end_date),
                (this.prize_probability = t.prize_probability),
                (this.informationBox = !0),
                t
              );
            },
            cardManiaUserInfo: function () {
              var t = this.$store.state.bonus.cardManiaUserInfo;
              return (
                (this.play_chances = t.play_chances || 0),
                (this.play_chances_msg = s["c"].getErrorCodeDesc(
                  t.msg,
                  Object(r["a"])(this.min_deposit, "bdt")
                )),
                t
              );
            },
          },
        },
        d = l,
        _ = (i("7d1a"), i("2877")),
        m = i("6544"),
        p = i.n(m),
        u = i("8336"),
        h = i("b0af"),
        g = i("99d9"),
        f = i("cc20"),
        v = i("169a"),
        b = i("132d"),
        C = i("71a3"),
        x = i("fe57"),
        w = i("f665"),
        y = i("1e6c"),
        $ = Object(_["a"])(d, e, n, !1, null, null, null);
      a["default"] = $.exports;
      p()($, {
        VBtn: u["a"],
        VCard: h["a"],
        VCardActions: g["a"],
        VCardTitle: g["d"],
        VChip: f["a"],
        VDialog: v["a"],
        VIcon: b["a"],
        VTab: C["a"],
        VTabs: x["a"],
        VWindow: w["a"],
        VWindowItem: y["a"],
      });
    },
  },
]);
//# sourceMappingURL=app~3ea47f77.f0888fe5.js.map
