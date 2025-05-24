(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~8becc859"],
  {
    "002a": function (t, e, a) {},
    "0155": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              { staticClass: "container demo animated" },
              [
                a(
                  "v-row",
                  {
                    staticStyle: { width: "100%" },
                    attrs: { "no-gutters": "" },
                  },
                  [
                    a(
                      "v-col",
                      { attrs: { cols: "12" } },
                      [
                        a(
                          "v-row",
                          {
                            staticClass: "px-2 py-1",
                            attrs: {
                              "no-gutters": "",
                              justify: "space-between",
                            },
                          },
                          [
                            a(
                              "v-col",
                              {
                                staticClass: "d-flex align-center",
                                attrs: { cols: "8" },
                              },
                              [
                                a(
                                  "span",
                                  { staticClass: "title_color--text" },
                                  [t._v(t._s(t.$t("label.recentdeposit")))]
                                ),
                              ]
                            ),
                            t.isLogin
                              ? a(
                                  "v-col",
                                  {
                                    staticClass: "pt-2",
                                    attrs: { cols: "4", align: "end" },
                                  },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "ply_btn_z_index",
                                        attrs: {
                                          rounded: "",
                                          outlined: "",
                                          color: "title_color",
                                          small: "",
                                          to: { name: t.routeName.DEPOSIT },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.$t("label.depositNow")) +
                                            "\n                        "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          1
                        ),
                        t._l(t.deposit_member, function (e, s) {
                          return a(
                            "v-layout",
                            { staticClass: "px-2 my-1" },
                            [
                              a(
                                "v-card",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    color:
                                      s % 2 == 0 ? "odd_prime" : "even_prime",
                                  },
                                },
                                [
                                  a(
                                    "v-row",
                                    {
                                      class: t.$vuetify.breakpoint.mdAndUp
                                        ? "px-lg-6 px-sm-2"
                                        : "px-lg-6 px-sm-2 py-0 px-2",
                                      attrs: { "no-gutters": "" },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          a(
                                            "v-list-item",
                                            {
                                              class: [
                                                "grow",
                                                t.$vuetify.breakpoint.mdAndDown
                                                  ? "px-0"
                                                  : "",
                                              ],
                                            },
                                            [
                                              a(
                                                "v-list-item-avatar",
                                                {
                                                  attrs: {
                                                    color: "grey darken-3",
                                                  },
                                                },
                                                [
                                                  a("v-img", {
                                                    staticClass: "elevation-6",
                                                    attrs: {
                                                      src:
                                                        t.mediaUrl +
                                                        "/avatar_icons/" +
                                                        e.level +
                                                        ".svg",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-list-item-content",
                                                {
                                                  class: t.$vuetify.breakpoint
                                                    .mdAndUp
                                                    ? "pl-10"
                                                    : "pl-1",
                                                },
                                                [
                                                  a(
                                                    "v-list-item-title",
                                                    {
                                                      staticClass:
                                                        "text-lowercase font-weight-bold subtitle-2 text-left",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(e.username) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                  a(
                                                    "v-list-item-title",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold caption grey--text text-left",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(e.gateway) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                  "paynow" ==
                                                  e.gateway.toLowerCase()
                                                    ? a(
                                                        "v-list-item-title",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold caption grey--text text-left",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            " +
                                                              t._s(
                                                                t.$t(
                                                                  "label.duration"
                                                                )
                                                              ) +
                                                              " : " +
                                                              t._s(
                                                                "paynow" ==
                                                                  e.gateway.toLowerCase()
                                                                  ? e.duration
                                                                  : ""
                                                              ) +
                                                              "  " +
                                                              t._s(
                                                                t.$t(
                                                                  "label.sec"
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-row",
                                                {
                                                  staticClass: "px-2 col-6",
                                                  attrs: { "no-gutters": "" },
                                                },
                                                [
                                                  a(
                                                    "v-col",
                                                    {
                                                      staticClass: "pa-0",
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      a(
                                                        "v-row",
                                                        {
                                                          attrs: {
                                                            align: "center",
                                                            justify: "end",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "v-chip",
                                                            {
                                                              staticClass:
                                                                "my-0 chips-size",
                                                              attrs: {
                                                                color:
                                                                  "#262441",
                                                                "text-color":
                                                                  "white",
                                                              },
                                                            },
                                                            [
                                                              a(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "subheading",
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t._f(
                                                                        "currency"
                                                                      )(
                                                                        e.amount
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-col",
                                                    {
                                                      staticClass: "pa-0",
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      a(
                                                        "v-row",
                                                        {
                                                          attrs: {
                                                            align: "center",
                                                            justify: "end",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.getDateTime()
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ]
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
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        r = [],
        i = (a("0d03"), a("e6fd")),
        o = a("15a4"),
        n = a("7e04"),
        l = (a("955f"), a("166e")),
        c = {
          name: "RecentDeposit",
          components: {
            Hooper: n["a"],
            Slide: n["d"],
            HooperNavigation: n["b"],
          },
          props: { isLogin: { type: Boolean, default: !1 } },
          methods: {
            getDateTime: function () {
              var t = new Date();
              return (
                t.setMinutes(t.getMinutes() - this.getRandomInt(15)),
                t.setSeconds(t.getSeconds() - this.getRandomInt(60)),
                t.toLocaleString()
              );
            },
            makeid: function (t) {
              for (
                var e = "",
                  a =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  s = a.length,
                  r = 0;
                r < t;
                r++
              )
                e += a.charAt(Math.floor(Math.random() * s));
              return e;
            },
            getRandomInt: function (t) {
              return Math.floor(Math.random() * Math.floor(t));
            },
            getRandomMinMaxInt: function (t, e) {
              return (
                (t = Math.ceil(t)),
                (e = Math.floor(e)),
                Math.floor(Math.random() * (e - t + 1)) + t
              );
            },
          },
          created: function () {
            for (var t = 0; t < 5; t++)
              this.deposit_member.push({
                username: this.makeid(2) + "****" + this.makeid(2),
                amount:
                  this.depositFigure[
                    this.getRandomInt(this.depositFigure.length)
                  ],
                level: this.level[this.getRandomInt(this.level.length)],
                gateway: l["a"].getMessage(
                  "paymentMethod.".concat(
                    this.bank[this.getRandomInt(this.bank.length)]
                  )
                ),
                seconds: this.getRandomInt(61),
                duration: this.getRandomMinMaxInt(15, 40),
              });
          },
          data: function () {
            return {
              depositFigure: [
                "30",
                "50",
                "100",
                "150",
                "300",
                "600",
                "1000",
                "800",
                "620",
                "500",
                "80",
                "130",
                "90",
                "60",
                "70",
                "250",
                "320",
                "1200",
                "450",
              ],
              bank: ["lb", "pn"],
              level: ["level_1", "level_2", "level_3", "level_4", "level_5"],
              routeName: o["a"],
              mediaUrl: i["g"].MEDIA_SERVER_URL,
              settings: {
                dots: !1,
                infinite: !0,
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: !0,
                autoplay: !0,
                autoplaySpeed: 5e3,
                verticalSwiping: !0,
                arrows: !1,
              },
              deposit_member: [],
              colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4",
              ],
              slides: ["First", "Second", "Third", "Fourth", "Fifth"],
            };
          },
        },
        d = c,
        m = (a("b316"), a("2877")),
        p = a("6544"),
        u = a.n(p),
        g = a("8336"),
        v = a("b0af"),
        h = a("cc20"),
        f = a("62ad"),
        _ = a("adda"),
        b = a("a722"),
        C = a("da13"),
        y = a("8270"),
        w = a("5d23"),
        x = a("0fd9"),
        k = Object(m["a"])(d, s, r, !1, null, null, null);
      e["a"] = k.exports;
      u()(k, {
        VBtn: g["a"],
        VCard: v["a"],
        VChip: h["a"],
        VCol: f["a"],
        VImg: _["a"],
        VLayout: b["a"],
        VListItem: C["a"],
        VListItemAvatar: y["a"],
        VListItemContent: w["a"],
        VListItemTitle: w["b"],
        VRow: x["a"],
      });
    },
    "09e7": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-row",
            {
              staticStyle: { position: "relative", height: "470px" },
              attrs: { "no-gutters": "" },
            },
            [
              a(
                "v-col",
                { staticClass: "mx-auto", attrs: { cols: "12", lg: 10 } },
                [
                  a(
                    "v-row",
                    { attrs: { "no-gutters": "", justify: "space-between" } },
                    [
                      a("v-col", { attrs: { cols: "8" } }, [
                        a("span", { staticClass: "title_color--text" }, [
                          t._v(t._s(t.$t("label.recentWinner"))),
                        ]),
                      ]),
                      a(
                        "v-col",
                        {
                          staticClass: "pt-2",
                          attrs: { cols: "4", align: "end" },
                        },
                        [
                          a(
                            "v-btn",
                            {
                              staticClass: "ply_btn_z_index",
                              attrs: {
                                rounded: "",
                                outlined: "",
                                color: "title_color",
                                small: "",
                                to: { name: t.routeName.SLOT },
                              },
                            },
                            [t._v(t._s(t.$t("label.playNow")) + "\n        ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("div", { staticClass: "wrapper" }, [
                    a(
                      "div",
                      { staticClass: "carousel" },
                      t._l(t.gameWinnerList, function (e, s) {
                        return a(
                          "div",
                          { key: s, staticClass: "carousel__item" },
                          [
                            a("div", { staticClass: "carousel__item-head" }, [
                              a("div", { staticClass: "gameImageWrapper" }, [
                                a("div", { staticClass: "imageWrapper" }, [
                                  a("img", {
                                    staticClass:
                                      "gameImage swiper-lazy swiper-lazy-loaded",
                                    attrs: {
                                      src:
                                        t.mediaUrl +
                                        "/game_icons/en/" +
                                        e.provider +
                                        "/" +
                                        e.image +
                                        ".jpg",
                                      alt: "krikya-" + e.image,
                                    },
                                  }),
                                  a("div", { staticClass: "game_mask" }),
                                ]),
                              ]),
                            ]),
                            a(
                              "div",
                              { staticClass: "carousel__item-body" },
                              [
                                a(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    a("v-col", { attrs: { cols: "12" } }, [
                                      t.$vuetify.breakpoint.mdAndUp
                                        ? a(
                                            "p",
                                            { staticClass: "title my-0" },
                                            [t._v(t._s(e.winner_name))]
                                          )
                                        : a(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-size": "22px",
                                              },
                                            },
                                            [t._v(t._s(e.winner_name))]
                                          ),
                                    ]),
                                    a(
                                      "v-col",
                                      {
                                        staticClass: "py-0",
                                        attrs: { cols: "12" },
                                      },
                                      [
                                        t.$vuetify.breakpoint.mdAndUp
                                          ? a(
                                              "p",
                                              {
                                                staticClass: "body-1 my-0",
                                                staticStyle: {
                                                  "margin-top": "15px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t._f("currency")(e.amount)
                                                  )
                                                ),
                                              ]
                                            )
                                          : a(
                                              "span",
                                              {
                                                staticClass: "body-1",
                                                staticStyle: {
                                                  "margin-top": "15px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t._f("currency")(e.amount)
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  "p",
                                  { staticStyle: { "line-height": "10px" } },
                                  [
                                    a(
                                      "span",
                                      {
                                        class: [
                                          "font-weight-bold",
                                          t.$vuetify.breakpoint.mdAndDown
                                            ? "subtitle-2"
                                            : "title",
                                        ],
                                      },
                                      [t._v(t._s(e.gameName))]
                                    ),
                                    a("br"),
                                    a("span", [t._v(t._s(e.time))]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = a("15a4"),
        o = a("e6fd"),
        n = {
          created: function () {
            for (var t = 0; t < 9; t++) {
              var e = this.getRandomInt(this.gameObject.length);
              this.gameWinnerList.push({
                winner_name: this.makeid(1) + "****" + this.makeid(2),
                amount: this.genRand(300, 1e3, 2),
                gameName: this.gameObject[e]["gameName"],
                image: this.gameObject[e]["image"],
                provider: this.gameObject[e]["provider"],
                time: this.getRandomInt(180) + " sec ago",
              });
            }
          },
          methods: {
            makeid: function (t) {
              for (
                var e = "",
                  a =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  s = a.length,
                  r = 0;
                r < t;
                r++
              )
                e += a.charAt(Math.floor(Math.random() * s));
              return e;
            },
            genRand: function (t, e, a) {
              var s =
                  Math.random() < 0.5
                    ? (1 - Math.random()) * (e - t) + t
                    : Math.random() * (e - t) + t,
                r = Math.pow(10, a);
              return Math.floor(s * r) / r;
            },
            getRandomInt: function (t) {
              return Math.floor(Math.random() * Math.floor(t));
            },
            getRandomMinMaxInt: function (t, e) {
              return (
                (t = Math.ceil(t)),
                (e = Math.floor(e)),
                Math.floor(Math.random() * (e - t + 1)) + t
              );
            },
          },
          data: function () {
            return {
              routeName: i["a"],
              mediaUrl: o["g"].MEDIA_SERVER_URL,
              gameObject: [
                {
                  provider: "pp",
                  image: "vs20bonzgold_0",
                  gameName: "Bonanza Gold",
                },
                { provider: "pp", image: "vs25gldox_0", gameName: "Golden Ox" },
                {
                  provider: "pp",
                  image: "vs10wildtut_0",
                  gameName: "Mysterious Egypt™",
                },
                {
                  provider: "pp",
                  image: "vs5aztecgems_0",
                  gameName: "Aztec Gems",
                },
                {
                  provider: "pp",
                  image: "vs5joker_0",
                  gameName: "Joker's Jewels",
                },
                {
                  provider: "pp",
                  image: "vs10firestrike_0",
                  gameName: "Fire Strike",
                },
                {
                  provider: "pp",
                  image: "vs20fruitsw_0",
                  gameName: "Sweet Bonanza",
                },
                {
                  provider: "pp",
                  image: "vs9aztecgemsdx_0",
                  gameName: "Aztec Gems Deluxe",
                },
                {
                  provider: "pp",
                  image: "vs10cowgold_0",
                  gameName: "Cowboys Gold",
                },
                {
                  provider: "pp",
                  image: "vs20rhino_0",
                  gameName: "Great Rhino",
                },
                {
                  provider: "pp",
                  image: "vs20vegasmagic_0",
                  gameName: "Vegas Magic",
                },
                {
                  provider: "pp",
                  image: "vs20xmascarol_0",
                  gameName: "Christmas Carol Megaways",
                },
                {
                  gameName: "Panther Pays",
                  provider: "pt",
                  image: "gpas_panthpays_pop_0",
                },
                { gameName: "Bonus Bear", provider: "pt", image: "bob_0" },
                { gameName: "A Night Out", provider: "pt", image: "hb_0" },
                {
                  gameName: "Moon Princess",
                  provider: "png",
                  image: "moonprincess_334",
                },
                {
                  gameName: "Rise of Olympus",
                  provider: "png",
                  image: "riseofolympus_352",
                },
                {
                  gameName: "Tome of Madness",
                  provider: "png",
                  image: "tomeofmadness_365",
                },
                { gameName: "Gemix", provider: "png", image: "gemix_286" },
              ],
              gameWinnerList: [],
            };
          },
          name: "RecentWinner",
        },
        l = n,
        c = (a("e721"), a("2877")),
        d = a("6544"),
        m = a.n(d),
        p = a("8336"),
        u = a("62ad"),
        g = a("0fd9"),
        v = Object(c["a"])(l, s, r, !1, null, null, null);
      e["a"] = v.exports;
      m()(v, { VBtn: p["a"], VCol: u["a"], VRow: g["a"] });
    },
    "17ab": function (t, e, a) {
      "use strict";
      var s = a("6501"),
        r = a.n(s);
      r.a;
    },
    "1a38": function (t, e, a) {},
    "2a5a": function (t, e, a) {},
    "2cca": function (t, e, a) {},
    "2f5a": function (t, e, a) {
      "use strict";
      var s = a("e116"),
        r = a.n(s);
      r.a;
    },
    "3f0e": function (t, e, a) {
      "use strict";
      var s = a("1a38"),
        r = a.n(s);
      r.a;
    },
    4154: function (t, e, a) {
      "use strict";
      var s = a("756b"),
        r = a.n(s);
      r.a;
    },
    "48f1": function (t, e, a) {},
    "50b2": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "banner-content" }, [
            t.$vuetify.breakpoint.smAndDown
              ? a(
                  "div",
                  { staticClass: "mb-bg-color banner-height" },
                  [
                    a(
                      "flicking",
                      {
                        ref: "flicking1",
                        staticClass: "flicking flicking1 mt-3 mb-2",
                        attrs: {
                          options: {
                            circular: !0,
                            gap: 20,
                            resizeOnContentsReady: !0,
                            moveType: "snap",
                            iOSEdgeSwipeThreshold: 30,
                            preventClickOnDrag: !1,
                          },
                          plugins: this.plugins,
                        },
                      },
                      [
                        t._l(t.bannerContent, function (e, s) {
                          return a(
                            "div",
                            {
                              key: s,
                              staticClass: "mx-1 flicking-panel mob_banner",
                            },
                            [
                              a("img", {
                                staticClass: "krikya_panel",
                                attrs: {
                                  src: e.mobile_banner,
                                  width: "320",
                                  height: "150",
                                  alt: e.desc,
                                },
                                on: {
                                  click: function (a) {
                                    return t.callBannerAction(e);
                                  },
                                },
                              }),
                            ]
                          );
                        }),
                        a("div", {
                          staticClass: "flicking-pagination",
                          attrs: { slot: "viewport" },
                          slot: "viewport",
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                )
              : t._e(),
            t.$vuetify.breakpoint.mdAndUp
              ? a(
                  "div",
                  { staticClass: "banner-height" },
                  [
                    t.$vuetify.breakpoint.mdAndUp
                      ? a(
                          "v-carousel",
                          {
                            staticClass: "home-banner-carousel",
                            attrs: {
                              cycle: "",
                              height: "100%",
                              "hide-delimiter-background": "",
                              "hide-delimiters": !1,
                              "delimiter-icon": "mdi-minus",
                              "show-arrows": !1,
                              interval: "5000",
                            },
                          },
                          t._l(t.bannerContent, function (e, s) {
                            return a("v-carousel-item", { key: s }, [
                              a("img", {
                                staticClass: "desktop-banner",
                                attrs: {
                                  src: "" + e.desktop_banner,
                                  alt: e.desc,
                                },
                                on: {
                                  click: function (a) {
                                    return t.callBannerAction(e);
                                  },
                                },
                              }),
                            ]);
                          }),
                          1
                        )
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
            a("div", { staticClass: "marquee-row" }, [
              a("div", { staticClass: "marquee-wrapper" }, [
                t._m(0),
                a(
                  "div",
                  {
                    class: t.$vuetify.breakpoint.mdAndUp
                      ? "marqueeDesktop"
                      : "marqueeMobile",
                  },
                  [
                    a(
                      "div",
                      { staticClass: "marquee-content" },
                      [
                        t._l(t.filteredAnnouncement, function (e) {
                          return [
                            a("span", { key: e.id }, [
                              a(
                                "label",
                                {
                                  staticClass:
                                    "d-inline-block home-announcment-content",
                                },
                                [t._v(t._s(e.title))]
                              ),
                              a("label", {
                                staticClass:
                                  "d-inline-block home-announcment-content",
                                domProps: {
                                  innerHTML: t._s(
                                    e.message
                                      ? " :" +
                                          e.message.replace(/<[p>]*>/g, " ")
                                      : ""
                                  ),
                                },
                              }),
                            ]),
                          ];
                        }),
                      ],
                      2
                    ),
                  ]
                ),
              ]),
            ]),
          ]);
        },
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "marquee-icon" }, [
              a("img", {
                staticStyle: { "background-color": "#378f6a" },
                attrs: {
                  src: "/static/svg/announcement-icon.svg",
                  width: "25",
                  height: "25",
                },
              }),
            ]);
          },
        ],
        i = (a("4160"), a("159b"), a("41d4")),
        o = a("15a4"),
        n = a("e6fd"),
        l = a("4260"),
        c = a("d991"),
        d = a("bc3a"),
        m = a.n(d),
        p = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-col",
            { attrs: { cols: "12", lg: 3 } },
            [
              a(
                "v-row",
                {
                  staticClass: "hidden-md-and-down",
                  attrs: { "no-gutters": "" },
                },
                [
                  a(
                    "v-col",
                    { attrs: { lg: 12, cols: "6" } },
                    [
                      a(
                        "v-img",
                        {
                          attrs: {
                            src: "/static/image/banner/product_home_banner/sb_home.png",
                            "aspect-ratio": 574 / 790,
                          },
                        },
                        [
                          a(
                            "div",
                            { staticClass: "pa-6" },
                            [
                              a(
                                "v-row",
                                {
                                  staticClass: "pa-3",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "space-between",
                                    align: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    {
                                      class: ["py-0 title"],
                                      attrs: { cols: "auto" },
                                    },
                                    [
                                      t._v(
                                        "\n                                " +
                                          t._s(t.$t("label.sb")) +
                                          "\n                            "
                                      ),
                                    ]
                                  ),
                                  a("v-spacer"),
                                  a(
                                    "v-col",
                                    { attrs: { cols: "auto" } },
                                    [
                                      a(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "px-6 sb_ply_now title text-uppercase font-weight-bold",
                                          attrs: {
                                            outlined: "",
                                            rounded: "",
                                            large: "",
                                            color: "white",
                                            to: {
                                              name: t.routeName.SPORTSBOOK,
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                                    " +
                                              t._s(t.$t("label.playNow")) +
                                              "\n                                "
                                          ),
                                        ]
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
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              a(
                "v-row",
                { staticClass: "hidden-lg-and-up" },
                [
                  a(
                    "v-col",
                    { staticClass: "px-5 pt-0", attrs: { lg: 12, cols: "12" } },
                    [
                      a(
                        "v-img",
                        {
                          attrs: {
                            src: "/static/image/banner/product_home_banner/mobile_sport.png",
                            "aspect-ratio": 1,
                          },
                        },
                        [
                          a(
                            "div",
                            [
                              a(
                                "v-row",
                                {
                                  staticClass: "pa-5",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "space-between",
                                    align: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    {
                                      staticClass:
                                        "headline py-0 text-capitalize mt-0",
                                      attrs: { cols: "auto" },
                                    },
                                    [
                                      t._v(
                                        "\n                                " +
                                          t._s(t.$t("label.sb")) +
                                          "\n                            "
                                      ),
                                    ]
                                  ),
                                  a(
                                    "v-col",
                                    { attrs: { cols: "auto" } },
                                    [
                                      a(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "px-6 sb_ply_now title text-uppercase font-weight-bold mt-0",
                                          attrs: {
                                            outlined: "",
                                            rounded: "",
                                            small: "",
                                            color: "white",
                                            to: {
                                              name: t.routeName.SPORTSBOOK,
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                                    " +
                                              t._s(t.$t("label.playNow")) +
                                              "\n                                "
                                          ),
                                        ]
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
                        ]
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
        u = [],
        g = {
          name: "SportCasinoHolder",
          data: function () {
            return { routeName: o["a"] };
          },
        },
        v = g,
        h = (a("7c3d"), a("2877")),
        f = a("6544"),
        _ = a.n(f),
        b = a("8336"),
        C = a("62ad"),
        y = a("adda"),
        w = a("0fd9"),
        x = a("2fa4"),
        k = Object(h["a"])(v, p, u, !1, null, null, null),
        $ = k.exports;
      _()(k, {
        VBtn: b["a"],
        VCol: C["a"],
        VImg: y["a"],
        VRow: w["a"],
        VSpacer: x["a"],
      });
      var R = a("ff1d"),
        T = {
          name: "appHomeBanner",
          props: {
            filteredAnnouncement: { type: Array, required: !0, default: [] },
          },
          data: function () {
            return {
              plugins: [],
              routeName: o["a"],
              banners: [],
              mobilebanners: [],
              bannerIndex: 0,
              currentLanguage: l["f"].getLanguage(),
              mediaUrl: n["g"].MEDIA_SERVER_URL,
            };
          },
          components: { AppSportCasinoHolder: $ },
          mounted: function () {
            this.plugins = [
              new i["a"]({ duration: 3e3, direction: "NEXT", stopOnHover: !1 }),
              new i["b"]({
                type: "bullet",
                renderBullet: function () {
                  return '<span class="paging-bullet"><i></i><b></b></span>';
                },
              }),
              new i["c"]({
                type: "index",
                synchronizedFlickingOptions: [
                  {
                    flicking: this.$refs.flicking1,
                    isClickable: !0,
                    isSlidable: !0,
                    activeClass: "active",
                  },
                ],
              }),
            ];
          },
          computed: {
            bannerContent: function () {
              return this.$store.state.cms.bannerContent;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
          },
          created: function () {
            this.getCmsBanner();
          },
          methods: {
            callBannerAction: function (t) {
              try {
                var e = t.action.replaceAll("'", '"'),
                  a = JSON.parse(e);
                this.bannerAction({
                  action: a["action"],
                  action_url: t.action_url,
                  bonusId: "",
                });
              } catch (s) {
                this.bannerAction({ action: "promotionpage", bonusId: "" });
              }
            },
            getCmsBanner: function () {
              var t = { language: l["f"].getLanguage() };
              this.$store.dispatch("".concat(R["a"]), { obj: t });
            },
            generateDesktopBanner: function () {
              var t = this;
              m()({
                method: "GET",
                url: n["g"].DESKTOP_BANNER_JSON_URL,
                responseType: "json",
              }).then(function (e) {
                200 == e.status &&
                  e.data.forEach(function (e) {
                    t.banners.push({
                      src: e.src,
                      action: e.action,
                      bonusId: e.bonusId,
                    });
                  });
              });
            },
            generateMobileBanner: function () {
              var t = this;
              m()({
                method: "GET",
                url: n["g"].MOBILE_BANNER_JSON_URL,
                responseType: "json",
              }).then(function (e) {
                200 == e.status &&
                  e.data.forEach(function (e) {
                    t.mobilebanners.push({ src: e.src, action: e.action });
                  });
              });
            },
            bannerAction: function (t) {
              var e = t.action,
                a = t.action_url;
              t.bonusId;
              switch (e.toLowerCase()) {
                case "register":
                  this.isLoggedIn
                    ? this.$router.push({ name: o["a"].PROMOTION })
                    : this.$parent.openRegisterDialog();
                  break;
                case "livecasinopage":
                  this.$router.push({ name: o["a"].CASINO });
                  break;
                case "urlpage":
                  window.open(a, "_blank");
                  break;
                case "sportsbookpage":
                  this.$router.push({ name: o["a"].SPORTSBOOK });
                  break;
                case "paynowdeposit":
                  this.isLoggedIn
                    ? this.$router.push({ name: o["a"].DEPOSIT })
                    : this.$parent.openLoginDialog();
                  break;
                case "rewards":
                  this.$router.push({
                    name: o["a"].REWARDS_BY_TYPE,
                    params: { type: "luckyspin" },
                  });
                  break;
                case "promotionpage":
                  this.$router.push({ name: o["a"].PROMOTION });
                  break;
                case "slotpage":
                  this.$router.push({ name: o["a"].SLOT });
                  break;
                case "affiliatepage":
                  this.$router.push({ name: o["a"].AFFILIATE_HOME });
                  break;
                case "launchmjsgame":
                  if (this.isLoggedIn)
                    if (l["f"].getPlatform() == c["d"].MOBILE) {
                      var s = this.$router.resolve({
                        name: o["a"].LAUNCH_GAME_LOBBY,
                        params: { provider: "mjs", type: "sb" },
                        query: { demo: 0 },
                      });
                      l["f"].openNewTab(s.href, "Game Play Lobby", 1200, 900);
                    } else
                      this.$router.push({
                        name: o["a"].SPORTSBOOK_BY_PROVIDER,
                        params: { provider: "mjs" },
                      });
                  else this.$parent.openLoginDialog();
                  break;
                case "freecoin":
                  this.$parent.$parent.openCoinTipsDialog();
                  break;
              }
            },
          },
        },
        S = T,
        P = (a("4154"), a("5e66")),
        L = a("3e35"),
        M = Object(h["a"])(S, s, r, !1, null, null, null);
      e["a"] = M.exports;
      _()(M, { VCarousel: P["a"], VCarouselItem: L["a"] });
    },
    "52aa": function (t, e, a) {},
    "538f": function (t, e, a) {},
    "563d": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            t.$vuetify.breakpoint.mdAndUp
              ? a(
                  "div",
                  {
                    staticClass: "floating-right",
                    attrs: { tabindex: "0" },
                    on: {
                      click: function (e) {
                        return t.setShowContactUsPanel();
                      },
                      mouseleave: function (e) {
                        return t.hoverContactUsPanel();
                      },
                      focusout: function (e) {
                        return t.hideShowContactUsPanel();
                      },
                    },
                  },
                  [
                    a(
                      "div",
                      {
                        staticClass: "floating-button",
                        on: {
                          mouseenter: function (e) {
                            return t.hoverContactUsPanel();
                          },
                        },
                      },
                      [t._v(t._s(t.$t("label.contactUs")))]
                    ),
                    t.showRewardPanel
                      ? a(
                          "div",
                          {
                            staticClass:
                              "contactUs-panel d-flex flex-column align-center justify-center",
                          },
                          [
                            a(
                              "div",
                              {
                                staticClass:
                                  "contactUs-header d-flex justify-space-around align-center",
                              },
                              [
                                t._m(0),
                                a("div", [
                                  t._v(t._s(t.$t("floating.contactUsHeader"))),
                                ]),
                              ]
                            ),
                            a(
                              "a",
                              {
                                staticClass:
                                  "contactUs-item telegram-item d-flex align-center",
                                attrs: {
                                  href: "https://t.me/krikya88",
                                  rel: "nofollow",
                                },
                              },
                              [
                                a("img", {
                                  staticClass: "contactUs-icon",
                                  attrs: {
                                    src: "/static/svg/layout/telegram.svg",
                                    alt: "telegram support",
                                  },
                                }),
                                a("div", [t._v("krikya88")]),
                              ]
                            ),
                            a(
                              "a",
                              {
                                staticClass:
                                  "contactUs-item email-item d-flex align-center",
                                attrs: {
                                  href: "mailto:gamius88.com@gmail.com",
                                  rel: "nofollow",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  staticClass: "contactUs-icon",
                                  attrs: {
                                    src: "/static/svg/layout/email.svg",
                                    alt: "email support",
                                  },
                                }),
                                a("div", [t._v("support@krikya.com")]),
                              ]
                            ),
                            a(
                              "a",
                              {
                                staticClass:
                                  "contactUs-item livechat-item d-flex align-center",
                                attrs: {
                                  href: "javascript:void(0);",
                                  rel: "nofollow",
                                },
                                on: { click: t.showIntercomLC },
                              },
                              [
                                a("img", {
                                  staticClass: "contactUs-icon",
                                  attrs: {
                                    src: "/static/svg/layout/tr_livechat.svg",
                                    alt: "email support",
                                  },
                                }),
                                a("div", [t._v(t._s(t.$t("label.liveChat")))]),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                  ]
                )
              : t._e(),
          ]);
        },
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", [
              a("img", {
                staticClass: "contactUs-header-icon",
                attrs: {
                  src: "/static/svg/layout/customer-support.svg",
                  alt: "contactUs icon",
                },
              }),
            ]);
          },
        ],
        i = (a("4260"), a("d3a4")),
        o =
          (a("15a4"),
          a("d991"),
          {
            name: "floatingContactUs",
            props: {},
            data: function () {
              return {
                i18n: i["a"],
                showRewardPanel: !1,
                active: !1,
                moreContactUs: !1,
              };
            },
            methods: {
              showIntercomLC: function () {
                return Intercom("show"), !1;
              },
              hoverContactUsPanel: function () {
                this.active || (this.showRewardPanel = !this.showRewardPanel);
              },
              setShowContactUsPanel: function () {
                !this.active && this.showRewardPanel
                  ? ((this.active = !0), (this.showRewardPanel = !0))
                  : ((this.active = !this.active),
                    (this.showRewardPanel = !this.showRewardPanel));
              },
              hideShowContactUsPanel: function () {
                (this.active = !1), (this.showRewardPanel = !1);
              },
              setMoreContactUs: function () {
                this.moreContactUs = !this.moreContactUs;
              },
              openLiveChat: function () {
                this.$parent.openLiveChat();
              },
            },
            computed: {
              isLoggedIn: function () {
                return this.$store.state.member.isLoggedIn;
              },
            },
          }),
        n = o,
        l = (a("2f5a"), a("2877")),
        c = Object(l["a"])(n, s, r, !1, null, null, null);
      e["a"] = c.exports;
    },
    "58b6": function (t, e, a) {
      "use strict";
      var s = a("48f1"),
        r = a.n(s);
      r.a;
    },
    "61aa": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass:
                "highlight-container referral-home-banner-height px-4",
            },
            [
              a("div", { staticClass: "highlight-wrapper pt-4" }, [
                a("div", { staticClass: "third-row-container" }, [
                  a("div", [t._v(t._s(t.$t("label.referralProgram")))]),
                ]),
                t.isLoggedIn
                  ? a("div", [
                      t.$vuetify.breakpoint.smAndDown
                        ? a(
                            "div",
                            {
                              staticClass: "matches-box first_box_match",
                              staticStyle: { "overflow-x": "hidden" },
                            },
                            [
                              a(
                                "div",
                                {
                                  staticClass: "referral_mobile",
                                  style:
                                    "background-image: url('" +
                                    t.mediaUrl +
                                    "/referral/green_bg_mobile.jpg');background-position: center",
                                },
                                [
                                  a("img", {
                                    staticClass: "topRight-float",
                                    attrs: {
                                      src:
                                        t.mediaUrl +
                                        "/referral/referralIcon.png",
                                    },
                                  }),
                                  a("img", {
                                    staticClass: "bottomLeft-float",
                                    attrs: {
                                      src: t.mediaUrl + "/referral/tg_logo.png",
                                    },
                                  }),
                                  a(
                                    "v-row",
                                    {
                                      staticClass:
                                        "referral_mobile_row no-gutters",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass:
                                            "referral_msg_desc2 mb-5",
                                          attrs: { cols: "12" },
                                        },
                                        [
                                          a("span", {
                                            staticClass:
                                              "text-center text-uppercase",
                                            domProps: {
                                              innerHTML: t._s(
                                                t.$t(
                                                  "message.newReferralDesc1_mobile"
                                                )
                                              ),
                                            },
                                          }),
                                        ]
                                      ),
                                      a(
                                        "v-col",
                                        {
                                          staticStyle: { "z-index": "3" },
                                          attrs: { cols: "12" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "referral-code fill-height no-gutters",
                                            },
                                            [
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_code_col",
                                                  attrs: { cols: "4" },
                                                },
                                                [
                                                  t.overview.my_referral_code
                                                    ? a("vue-qr-code", {
                                                        staticClass:
                                                          "referralQRCode",
                                                        attrs: {
                                                          name: "asd",
                                                          text: t.share_url,
                                                          size: 85,
                                                        },
                                                      })
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_details_col",
                                                  attrs: { cols: "8" },
                                                },
                                                [
                                                  a("app-form-field", {
                                                    attrs: {
                                                      small: "",
                                                      readonly: "",
                                                      "enabled-label": !0,
                                                      label:
                                                        t.$t(
                                                          "field.referralCode"
                                                        ),
                                                    },
                                                    model: {
                                                      value:
                                                        t.overview
                                                          .my_referral_code,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.overview,
                                                          "my_referral_code",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "overview.my_referral_code",
                                                    },
                                                  }),
                                                  a("app-form-field", {
                                                    attrs: {
                                                      readonly: "",
                                                      "enabled-label": !0,
                                                      label: t.$t(
                                                        "label.todayCommission"
                                                      ),
                                                    },
                                                    model: {
                                                      value:
                                                        t.overview
                                                          .commission_balance,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.overview,
                                                          "commission_balance",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "overview.commission_balance",
                                                    },
                                                  }),
                                                  a(
                                                    "v-row",
                                                    {
                                                      attrs: {
                                                        "no-gutters": "",
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "6" },
                                                        },
                                                        [
                                                          a(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "dialog-button text-capitalize",
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.share();
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              a(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    "x-small":
                                                                      "",
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    "mdi-share-variant"
                                                                  ),
                                                                ]
                                                              ),
                                                              t._v(
                                                                "\n                            " +
                                                                  t._s(
                                                                    t.webShareApiSupported
                                                                      ? t.$t(
                                                                          "button.shareNow"
                                                                        )
                                                                      : t.$t(
                                                                          "button.copy_ref"
                                                                        )
                                                                  ) +
                                                                  "\n                          "
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "6" },
                                                        },
                                                        [
                                                          a(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "refeerral_report_btn",
                                                              on: {
                                                                click:
                                                                  t.routeToReferralReport,
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                            " +
                                                                  t._s(
                                                                    t.$t(
                                                                      "button.referralReport"
                                                                    )
                                                                  ) +
                                                                  "\n                          "
                                                              ),
                                                            ]
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
                            ]
                          )
                        : t._e(),
                      t.$vuetify.breakpoint.mdAndUp
                        ? a(
                            "div",
                            {
                              staticClass: "matches-box first_box_match",
                              staticStyle: { "overflow-x": "hidden" },
                            },
                            [
                              a(
                                "v-img",
                                {
                                  staticClass: "referral_desktop_img",
                                  attrs: {
                                    src:
                                      t.mediaUrl +
                                      "/referral/green_bg_desktop.png",
                                  },
                                },
                                [
                                  a(
                                    "v-row",
                                    {
                                      staticClass: "fill-height justify-center",
                                      attrs: { "no-gutters": "" },
                                    },
                                    [
                                      a("img", {
                                        staticClass: "bottomLeft-float",
                                        attrs: {
                                          src:
                                            t.mediaUrl +
                                            "/referral/tg_logo.png",
                                        },
                                      }),
                                      a("img", {
                                        staticClass: "megePhone_desktop",
                                        attrs: {
                                          src:
                                            t.mediaUrl +
                                            "/referral/megaPhone.png",
                                        },
                                      }),
                                      a("img", {
                                        staticClass: "topRight-IGFloat",
                                        attrs: {
                                          src: t.mediaUrl + "/referral/ig.png",
                                        },
                                      }),
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "referral_qr_desktop",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "referral-code fill-height no-gutters",
                                            },
                                            [
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_code_col",
                                                  attrs: { cols: "6" },
                                                },
                                                [
                                                  t.overview.my_referral_code
                                                    ? a("vue-qr-code", {
                                                        staticClass:
                                                          "referralQRCode",
                                                        attrs: {
                                                          name: "asd",
                                                          text: t.share_url,
                                                          size: 185,
                                                        },
                                                      })
                                                    : t._e(),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_details_col",
                                                  attrs: { cols: "6" },
                                                },
                                                [
                                                  a("app-form-field", {
                                                    attrs: {
                                                      readonly: "",
                                                      "enabled-label": !0,
                                                      label:
                                                        t.$t(
                                                          "field.referralCode"
                                                        ),
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "form-field-append",
                                                          fn: function () {
                                                            return [
                                                              a(
                                                                "v-fade-transition",
                                                                {
                                                                  attrs: {
                                                                    "leave-absolute":
                                                                      "",
                                                                  },
                                                                },
                                                                [
                                                                  a("img", {
                                                                    attrs: {
                                                                      width:
                                                                        "24",
                                                                      height:
                                                                        "24",
                                                                      src:
                                                                        t.mediaUrl +
                                                                        "/referral/copyBtn.png",
                                                                      alt: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.referralCodeCopy,
                                                                    },
                                                                  }),
                                                                ]
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                      ],
                                                      null,
                                                      !1,
                                                      3998102118
                                                    ),
                                                    model: {
                                                      value:
                                                        t.overview
                                                          .my_referral_code,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.overview,
                                                          "my_referral_code",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "overview.my_referral_code",
                                                    },
                                                  }),
                                                  a("app-form-field", {
                                                    attrs: {
                                                      readonly: "",
                                                      "enabled-label": !0,
                                                      label: t.$t(
                                                        "label.todayCommission"
                                                      ),
                                                    },
                                                    model: {
                                                      value:
                                                        t.overview
                                                          .commission_balance,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.overview,
                                                          "commission_balance",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "overview.commission_balance",
                                                    },
                                                  }),
                                                  a(
                                                    "v-btn",
                                                    {
                                                      staticClass:
                                                        "dialog-button subtitle-1 full-width text-capitalize pa-2 mb-2",
                                                      on: {
                                                        click: function (e) {
                                                          return t.share();
                                                        },
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "v-icon",
                                                        { staticClass: "mr-2" },
                                                        [
                                                          t._v(
                                                            "mdi-share-variant"
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(
                                                        "\n                      " +
                                                          t._s(
                                                            t.webShareApiSupported
                                                              ? t.$t(
                                                                  "button.shareNow"
                                                                )
                                                              : t.$t(
                                                                  "button.copy_ref"
                                                                )
                                                          ) +
                                                          "\n                    "
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-btn",
                                                    {
                                                      staticClass:
                                                        "full-width refeerral_report_btn",
                                                      on: {
                                                        click:
                                                          t.routeToReferralReport,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                      " +
                                                          t._s(
                                                            t.$t(
                                                              "button.referralReport"
                                                            )
                                                          ) +
                                                          "\n                    "
                                                      ),
                                                    ]
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
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "referral_desc_desktop",
                                          attrs: { cols: "5" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "referral_msg fill-height",
                                            },
                                            [
                                              a("img", {
                                                staticClass:
                                                  "bottomRight-float",
                                                attrs: {
                                                  src:
                                                    t.mediaUrl +
                                                    "/referral/fb.png",
                                                },
                                              }),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_msg_desc1 pb-0",
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  a("img", {
                                                    staticClass:
                                                      "topRight-float",
                                                    attrs: {
                                                      src:
                                                        t.mediaUrl +
                                                        "/referral/referralIcon.png",
                                                    },
                                                  }),
                                                  a(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "1.7rem",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "message.newReferralDesc1_desktop"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "pa-0 d-flex pl-3",
                                                  staticStyle: {
                                                    height: "60px",
                                                  },
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  a("img", {
                                                    staticClass:
                                                      "nineFigues-img",
                                                    attrs: {
                                                      loading: "lazy",
                                                      src:
                                                        t.mediaUrl +
                                                        "/referral/425_" +
                                                        t.language +
                                                        ".png",
                                                    },
                                                  }),
                                                  a(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "1.9rem",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.$t("message.upTo")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_msg_desc2 py-0",
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    {
                                                      staticStyle: {
                                                        "line-height": "1.3",
                                                      },
                                                      attrs: {
                                                        "no-gutters": "",
                                                      },
                                                    },
                                                    [
                                                      a("span", {
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            t.$t(
                                                              "message.newReferralTnc_desktop"
                                                            )
                                                          ),
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "referral_msg_desc2 py-0",
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  a("span", {
                                                    staticClass: "desc2-span",
                                                    domProps: {
                                                      innerHTML: t._s(
                                                        t.$t(
                                                          "message.newReferralDesc3_desktop"
                                                        )
                                                      ),
                                                    },
                                                  }),
                                                ]
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
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ])
                  : a("div", [
                      t.$vuetify.breakpoint.smAndDown
                        ? a(
                            "div",
                            {
                              staticClass: "matches-box first_box_match",
                              staticStyle: { "overflow-x": "hidden" },
                            },
                            [
                              a(
                                "router-link",
                                {
                                  staticStyle: { cursor: "pointer" },
                                  attrs: {
                                    to: { name: t.routeName.REFERRAL_SUMMARY },
                                  },
                                },
                                [
                                  a("img", {
                                    staticClass: "referral_img",
                                    attrs: {
                                      alt: "referral",
                                      src:
                                        t.mediaUrl +
                                        "/referral/" +
                                        t.language +
                                        "/refer_mobile.webp",
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t.$vuetify.breakpoint.mdAndUp
                        ? a(
                            "div",
                            {
                              staticClass: "matches-box first_box_match",
                              staticStyle: { "overflow-x": "hidden" },
                            },
                            [
                              a(
                                "router-link",
                                {
                                  staticStyle: { cursor: "pointer" },
                                  attrs: {
                                    to: { name: t.routeName.REFERRAL_SUMMARY },
                                  },
                                },
                                [
                                  a("img", {
                                    staticClass: "referral_img",
                                    attrs: {
                                      alt: "referral",
                                      src:
                                        t.mediaUrl +
                                        "/referral/" +
                                        t.language +
                                        "/refer_desktop_new.webp",
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
              ]),
            ]
          );
        },
        r = [],
        i = a("4260"),
        o = a("e6fd"),
        n = a("15a4"),
        l = a("1cfd"),
        c = a("dfcf"),
        d = {
          name: "ReferralHomeBanner",
          components: { VueQrCode: c["a"] },
          data: function () {
            return {
              mediaUrl: o["g"].MEDIA_SERVER_URL,
              language: i["f"].getLanguage(),
              routeName: n["a"],
              overview: {},
              share_url: "",
            };
          },
          created: function () {
            this.getMemberReferralOverview();
          },
          computed: {
            webShareApiSupported: function () {
              return navigator.share;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
            referralOverview: function () {
              return this.$store.state.referral.overview;
            },
          },
          watch: {
            isLoggedIn: function () {
              this.getMemberReferralOverview();
            },
            referralOverview: function () {
              (this.overview = this.$store.state.referral.overview),
                "16896kk332.com" === window.location.host.toLowerCase()
                  ? (this.share_url =
                      "?refer_code=" +
                      this.overview.my_referral_code)
                  : "ab8945621.com" === window.location.host.toLowerCase()
                  ? (this.share_url =
                      "?refer_code=" +
                      this.overview.my_referral_code)
                  : (this.share_url =
                      i["f"].getHostname() +
                      "?refer_code=" +
                      this.overview.my_referral_code);
            },
          },
          methods: {
            referralCodeCopy: function () {
              navigator.clipboard.writeText(this.overview.my_referral_code);
            },
            share: function () {
              var t = {
                title: "Refer a friend now and earn commission",
                text:
                  "Your referral code is " +
                  this.overview.my_referral_code +
                  ".Refer a friend now and earn commission now! ",
                url: this.share_url,
              };
              if (this.webShareApiSupported) navigator.share(t);
              else {
                var e = this;
                this.$copyText(this.share_url).then(function (t) {
                  (e.alertMessage = "Referral Link Copied!"),
                    (e.alertSuccess = !0),
                    (e.alertShow = !0);
                });
              }
            },
            getMemberReferralOverview: function () {
              this.isLoggedIn && this.$store.dispatch("".concat(l["c"]));
            },
            routeToReferralPage: function () {
              this.isLoggedIn
                ? this.$router.push({ name: n["a"].REFERRAL_SUMMARY })
                : this.$parent.openLoginDialog();
            },
            routeToReferralReport: function () {
              this.$router.push({ name: n["a"].REFERRAL_REPORT });
            },
          },
        },
        m = d,
        p = (a("58b6"), a("2877")),
        u = a("6544"),
        g = a.n(u),
        v = a("8336"),
        h = a("62ad"),
        f = a("0789"),
        _ = a("132d"),
        b = a("adda"),
        C = a("0fd9"),
        y = Object(p["a"])(m, s, r, !1, null, null, null);
      e["a"] = y.exports;
      g()(y, {
        VBtn: v["a"],
        VCol: h["a"],
        VFadeTransition: f["c"],
        VIcon: _["a"],
        VImg: b["a"],
        VRow: C["a"],
      });
    },
    6301: function (t, e, a) {
      "use strict";
      var s = a("897d"),
        r = a.n(s);
      r.a;
    },
    6501: function (t, e, a) {},
    "680c": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "play-box" },
            [
              a(
                "v-row",
                { staticClass: "play-row mx-0", attrs: { justify: "center" } },
                [
                  a(
                    "v-col",
                    { staticClass: "play-col px-0", attrs: { cols: "12" } },
                    [
                      a("div", { staticClass: "text-center play-title" }, [
                        a(
                          "p",
                          {
                            staticClass:
                              "text-center display-1 primary--text font-weight-bold",
                          },
                          [
                            a("label", { staticClass: "pb-1 play-desc" }, [
                              t._v(t._s(t.$t("message.whyPlayWithUs"))),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a(
                    "v-col",
                    {
                      staticClass: "play-now-progress-bar-box",
                      attrs: { cols: "7" },
                    },
                    [
                      a(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          a(
                            "v-col",
                            {
                              staticClass: "align",
                              attrs: { cols: "12", sm: "4" },
                            },
                            [
                              a(
                                "v-progress-circular",
                                {
                                  staticClass: "play-now-progress-bar",
                                  attrs: {
                                    rotate: "-90",
                                    size: "280",
                                    width: "25",
                                    value: "85",
                                    color: "primary",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      a(
                                        "v-card-text",
                                        {
                                          staticClass: "pa-0 font-weight-thin",
                                        },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "play-now-progress-bar-title primary--text",
                                            },
                                            [t._v("20")]
                                          ),
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "play-now-progress-bar-message text-lowercase",
                                            },
                                            [t._v(t._s(t.$t("label.sec")))]
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-card-text",
                                        { staticClass: "pa-0 text-center" },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "black--text font-weight-bold play-now-progress-bar-desc",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t("label.avgDepositTime")
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
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
                          a(
                            "v-col",
                            {
                              staticClass: "align",
                              attrs: { cols: "12", sm: "4" },
                            },
                            [
                              a(
                                "v-progress-circular",
                                {
                                  staticClass: "play-now-progress-bar",
                                  attrs: {
                                    rotate: "-90",
                                    size: "280",
                                    width: "25",
                                    value: "90",
                                    color: "primary_2",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      a(
                                        "v-card-text",
                                        {
                                          staticClass: "pa-0 font-weight-thin",
                                        },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "play-now-progress-bar-title primary_2--text",
                                            },
                                            [t._v("6")]
                                          ),
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "play-now-progress-bar-message text-lowercase",
                                            },
                                            [t._v(t._s(t.$t("label.sec")))]
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-card-text",
                                        { staticClass: "pa-0 text-center" },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "black--text font-weight-bold play-now-progress-bar-dsc",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t("label.avgPayoutTime")
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
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
                          a(
                            "v-col",
                            {
                              staticClass: "align",
                              attrs: { cols: "12", sm: "4" },
                            },
                            [
                              a(
                                "v-progress-circular",
                                {
                                  staticClass: "play-now-progress-bar",
                                  attrs: {
                                    rotate: "-90",
                                    size: "280",
                                    width: "25",
                                    value: "95",
                                    color: "primary_3",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      a(
                                        "v-card-text",
                                        {
                                          staticClass: "pa-0 font-weight-thin",
                                        },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "play-now-progress-bar-title secondary--text",
                                            },
                                            [t._v("98%")]
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-card-text",
                                        { staticClass: "pa-0 text-center" },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "black--text font-weight-bold play-now-progress-bar-desc",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "label.statisfiedPlayers"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
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
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-col",
                    {
                      staticClass: "play-now-description-box",
                      attrs: { cols: "4" },
                    },
                    [
                      a("div", [
                        a(
                          "p",
                          {
                            staticClass: "mb-0 font-weight-bold play-now-title",
                          },
                          [t._v(t._s(t.$t("label.securedTransactions")))]
                        ),
                        a("p", { staticClass: "play-now-desc" }, [
                          t._v(t._s(t.$t("message.securedTransactions"))),
                        ]),
                      ]),
                      a("div", [
                        a(
                          "p",
                          {
                            staticClass: "mb-0 font-weight-bold play-now-title",
                          },
                          [t._v(t._s(t.$t("label.liveChatSupport")))]
                        ),
                        a("p", { staticClass: "play-now-desc" }, [
                          t._v(t._s(t.$t("message.liveChatSupport"))),
                        ]),
                      ]),
                      a("div", [
                        a(
                          "p",
                          {
                            staticClass: "mb-0 font-weight-bold play-now-title",
                          },
                          [t._v(t._s(t.$t("label.gameSelection")))]
                        ),
                        a("p", { staticClass: "play-now-desc" }, [
                          t._v(t._s(t.$t("message.gameSelection"))),
                        ]),
                      ]),
                    ]
                  ),
                  a(
                    "v-col",
                    {
                      staticClass: "text-center play-with-us-button",
                      attrs: { cols: "12" },
                    },
                    [
                      a("app-button", {
                        attrs: {
                          title: t.buttonTitle,
                          maxWidth: 500,
                          action: t.buttonAction,
                        },
                      }),
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
        r = [],
        i = {
          name: "appPlayWithUs",
          props: {
            buttonAction: {
              type: Function,
              required: !0,
              default: function () {},
            },
            buttonTitle: { type: String, required: !0, default: "" },
          },
        },
        o = i,
        n = (a("fa7a"), a("2877")),
        l = a("6544"),
        c = a.n(l),
        d = a("b0af"),
        m = a("99d9"),
        p = a("62ad"),
        u = a("490a"),
        g = a("0fd9"),
        v = Object(n["a"])(o, s, r, !1, null, null, null);
      e["a"] = v.exports;
      c()(v, {
        VCard: d["a"],
        VCardText: m["c"],
        VCol: p["a"],
        VProgressCircular: u["a"],
        VRow: g["a"],
      });
    },
    "756b": function (t, e, a) {},
    "7c3d": function (t, e, a) {
      "use strict";
      var s = a("9e62"),
        r = a.n(s);
      r.a;
    },
    8517: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              { staticClass: "container demo animated" },
              [
                a(
                  "v-row",
                  {
                    staticStyle: { width: "100%" },
                    attrs: { "no-gutters": "" },
                  },
                  [
                    a(
                      "v-col",
                      { attrs: { cols: "12" } },
                      [
                        a(
                          "v-row",
                          {
                            staticClass: "px-2 py-1",
                            attrs: {
                              "no-gutters": "",
                              justify: "space-between",
                            },
                          },
                          [
                            a("v-col", { attrs: { cols: "12" } }, [
                              a("span", { staticClass: "title_color--text" }, [
                                t._v(t._s(t.$t("label.recentWithdrawal"))),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        t._l(t.withdrawal_member, function (e, s) {
                          return a(
                            "v-layout",
                            { staticClass: "px-2 my-1" },
                            [
                              a(
                                "v-card",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    color:
                                      s % 2 == 0 ? "odd_prime" : "even_prime",
                                  },
                                },
                                [
                                  a(
                                    "v-row",
                                    {
                                      class: t.$vuetify.breakpoint.mdAndUp
                                        ? "px-lg-6 px-sm-2"
                                        : "px-lg-6 px-sm-2 py-0 px-2",
                                      attrs: { "no-gutters": "" },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          a(
                                            "v-list-item",
                                            {
                                              class: [
                                                "grow",
                                                t.$vuetify.breakpoint.mdAndDown
                                                  ? "px-0"
                                                  : "",
                                              ],
                                            },
                                            [
                                              a(
                                                "v-list-item-avatar",
                                                {
                                                  attrs: {
                                                    color: "grey darken-3",
                                                  },
                                                },
                                                [
                                                  a("v-img", {
                                                    staticClass: "elevation-6",
                                                    attrs: {
                                                      src:
                                                        t.mediaUrl +
                                                        "/avatar_icons/withdrawal.svg",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-list-item-content",
                                                {
                                                  class: t.$vuetify.breakpoint
                                                    .mdAndUp
                                                    ? "pl-10"
                                                    : "pl-1",
                                                },
                                                [
                                                  a(
                                                    "v-list-item-title",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold subtitle-2 text-left text-lowercase",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(e.username) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                  a(
                                                    "v-list-item-title",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold caption grey--text text-left",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(e.gateway) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                  a(
                                                    "v-list-item-title",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold caption grey--text text-left",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                            " +
                                                          t._s(
                                                            t.$t(
                                                              "label.duration"
                                                            )
                                                          ) +
                                                          " : " +
                                                          t._s(e.duration) +
                                                          "  " +
                                                          t._s(
                                                            t.$t("label.min")
                                                          ) +
                                                          "\n                                        "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-row",
                                                {
                                                  staticClass: "px-2 col-6",
                                                  attrs: { "no-gutters": "" },
                                                },
                                                [
                                                  a(
                                                    "v-col",
                                                    {
                                                      staticClass: "pa-0",
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      a(
                                                        "v-row",
                                                        {
                                                          attrs: {
                                                            align: "center",
                                                            justify: "end",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "v-chip",
                                                            {
                                                              staticClass:
                                                                "my-0 chips-size",
                                                              attrs: {
                                                                color:
                                                                  "#262441",
                                                                "text-color":
                                                                  "white",
                                                              },
                                                            },
                                                            [
                                                              a(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "subheading",
                                                                },
                                                                [
                                                                  t._v(
                                                                    t._s(
                                                                      t._f(
                                                                        "currency"
                                                                      )(
                                                                        e.amount
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-col",
                                                    {
                                                      staticClass: "pa-0",
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      a(
                                                        "v-row",
                                                        {
                                                          attrs: {
                                                            align: "center",
                                                            justify: "end",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "caption",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.getDateTime()
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ]
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
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]);
        },
        r = [],
        i = (a("0d03"), a("e6fd")),
        o = a("7e04"),
        n = (a("955f"), a("166e")),
        l = {
          name: "RecentWithdrawal",
          components: { Hooper: o["a"], Slide: o["d"] },
          created: function () {
            for (var t = 0; t < 5; t++)
              this.withdrawal_member.push({
                username: this.makeid(2) + "****" + this.makeid(2),
                amount: this.genRand(50, 1e3, 2),
                level: this.level[this.getRandomInt(this.level.length)],
                gateway: n["a"].getMessage(
                  "paymentMethod.".concat(this.bank[0])
                ),
                seconds: this.getRandomInt(61),
                duration: this.getRandomMinMaxInt(3, 6),
              });
          },
          methods: {
            getRandomMinMaxInt: function (t, e) {
              return (
                (t = Math.ceil(t)),
                (e = Math.floor(e)),
                Math.floor(Math.random() * (e - t + 1)) + t
              );
            },
            getDateTime: function () {
              var t = new Date();
              return (
                t.setMinutes(t.getMinutes() - this.getRandomInt(15)),
                t.toLocaleString()
              );
            },
            makeid: function (t) {
              for (
                var e = "",
                  a =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                  s = a.length,
                  r = 0;
                r < t;
                r++
              )
                e += a.charAt(Math.floor(Math.random() * s));
              return e;
            },
            genRand: function (t, e, a) {
              var s =
                  Math.random() < 0.5
                    ? (1 - Math.random()) * (e - t) + t
                    : Math.random() * (e - t) + t,
                r = Math.pow(10, a);
              return Math.floor(s * r) / r;
            },
            getRandomInt: function (t) {
              return Math.floor(Math.random() * Math.floor(t));
            },
          },
          data: function () {
            return {
              bank: ["lb"],
              level: ["level_1", "level_2", "level_3", "level_4", "level_5"],
              mediaUrl: i["g"].MEDIA_SERVER_URL,
              settings: {
                dots: !1,
                infinite: !0,
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: !0,
                autoplay: !0,
                autoplaySpeed: 5e3,
                verticalSwiping: !0,
                arrows: !1,
              },
              withdrawal_member: [],
              colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4",
              ],
              slides: ["First", "Second", "Third", "Fourth", "Fifth"],
            };
          },
        },
        c = l,
        d = (a("17ab"), a("2877")),
        m = a("6544"),
        p = a.n(m),
        u = a("b0af"),
        g = a("cc20"),
        v = a("62ad"),
        h = a("adda"),
        f = a("a722"),
        _ = a("da13"),
        b = a("8270"),
        C = a("5d23"),
        y = a("0fd9"),
        w = Object(d["a"])(c, s, r, !1, null, null, null);
      e["a"] = w.exports;
      p()(w, {
        VCard: u["a"],
        VChip: g["a"],
        VCol: v["a"],
        VImg: h["a"],
        VLayout: f["a"],
        VListItem: _["a"],
        VListItemAvatar: b["a"],
        VListItemContent: C["a"],
        VListItemTitle: C["b"],
        VRow: y["a"],
      });
    },
    "897d": function (t, e, a) {},
    "8bba": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.pagesToHide.indexOf(this.$route.name) < 0
            ? a("div", { staticClass: "floating-left" }, [
                a(
                  "div",
                  {
                    staticClass: "floating-button",
                    on: {
                      click: function (e) {
                        return t.openCoinTipsDialog();
                      },
                    },
                  },
                  [
                    t._v(
                      "\n      " + t._s(t.$t("label.rewardFreeCoins")) + " "
                    ),
                    a("img", {
                      attrs: {
                        src: "/static/image/cardMania/winning-coin.png",
                        alt: "winning",
                      },
                    }),
                  ]
                ),
              ])
            : t._e();
        },
        r = [],
        i = a("15a4"),
        o = {
          name: "floatingReward",
          props: {},
          data: function () {
            return { pagesToHide: [i["a"].REGISTER, i["a"].FUNDS] };
          },
          created: function () {},
          methods: {
            openCoinTipsDialog: function () {
              this.$parent.coinTipsDialog = !0;
            },
          },
        },
        n = o,
        l = (a("d42a"), a("2877")),
        c = Object(l["a"])(n, s, r, !1, null, null, null);
      e["a"] = c.exports;
    },
    "9e62": function (t, e, a) {},
    a4ff: function (t, e, a) {},
    acd2: function (t, e, a) {
      "use strict";
      var s = a("52aa"),
        r = a.n(s);
      r.a;
    },
    b316: function (t, e, a) {
      "use strict";
      var s = a("2a5a"),
        r = a.n(s);
      r.a;
    },
    d42a: function (t, e, a) {
      "use strict";
      var s = a("538f"),
        r = a.n(s);
      r.a;
    },
    de92: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "highlight-container highlight-height px-4 py-6" },
            [
              a("div", { staticClass: "highlight-wrapper" }, [
                a(
                  "div",
                  { staticClass: "matches-box" },
                  t._l(t.matchesHighlights, function (e, s) {
                    return a("div", { key: s }, [
                      "Live" == t.matchUp(e)
                        ? a("div", { staticClass: "matchUp" }, [
                            a("div", [t._v("Live")]),
                            a("img", {
                              attrs: {
                                width: "70",
                                height: "20",
                                alt: "live match",
                                src: "/static/image/favourite/now.webp",
                              },
                            }),
                          ])
                        : "Pre-match" == t.matchUp(e)
                        ? a("div", { staticClass: "matchUp" }, [
                            a("div", [t._v("Pre-Match")]),
                          ])
                        : a("div", { staticClass: "matchUp" }, [
                            a("div", [t._v("Match Hot")]),
                            a("img", {
                              attrs: {
                                width: "70",
                                height: "20",
                                alt: "hot match",
                                src: "/static/image/favourite/hot.webp",
                              },
                            }),
                          ]),
                      a(
                        "a",
                        {
                          staticClass: "match-item",
                          class: t.$vuetify.breakpoint.mdAndUp
                            ? "mr-5"
                            : "mr-3",
                          attrs: { href: t.routeName.CRICKET },
                        },
                        [
                          a("div", { staticClass: "league-name" }, [
                            t._v(t._s(e.league_name)),
                          ]),
                          a("div", { staticClass: "match-team" }, [
                            a("div", { staticClass: "home-team" }, [
                              a("div", [
                                a("img", {
                                  staticClass: "country-logo",
                                  attrs: { src: e.home_logo },
                                }),
                              ]),
                              a("div", { staticClass: "team-name" }, [
                                t._v(t._s(e.home_team)),
                              ]),
                              a("div", { staticClass: "odds" }, [
                                t._v(t._s(parseFloat(e.home_odds).toFixed(2))),
                              ]),
                            ]),
                            t._m(0, !0),
                            a("div", { staticClass: "away-team" }, [
                              a("div", [
                                a("img", {
                                  staticClass: "country-logo",
                                  attrs: { src: e.away_logo },
                                }),
                              ]),
                              a("div", { staticClass: "team-name" }, [
                                t._v(t._s(e.away_team)),
                              ]),
                              a("div", { staticClass: "odds" }, [
                                t._v(t._s(parseFloat(e.away_odds).toFixed(2))),
                              ]),
                            ]),
                          ]),
                          a("div", { staticClass: "match-datetime-div" }, [
                            a("div", { staticClass: "match-date" }, [
                              t._v(t._s(e.matchDate)),
                            ]),
                            a("div", { staticClass: "match-time" }, [
                              t._v(t._s(e.matchTime)),
                            ]),
                          ]),
                        ]
                      ),
                    ]);
                  }),
                  0
                ),
              ]),
            ]
          );
        },
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "verDiv" }, [
              a("img", {
                staticClass: "versus",
                attrs: { src: "/static/image/favourite/versus.png" },
              }),
            ]);
          },
        ],
        i =
          (a("4de4"),
          a("c975"),
          a("d81d"),
          a("fb6a"),
          a("0d03"),
          a("ac1f"),
          a("1276"),
          a("c1df")),
        o = a.n(i),
        n = a("4260"),
        l = a("e6fd"),
        c = a("cd99"),
        d = a("15a4"),
        m = a("93c6"),
        p = a.n(m),
        u = a("5e9e"),
        g = a.n(u),
        v = {
          name: "appHomeHighlight",
          data: function () {
            return {
              highlights: null,
              routeName: d["a"],
              desktopHighlights_1: [],
              desktopHighlights_2: [],
              currentHightlight_1: 0,
              currentHightlight_2: 0,
              startTime: l["g"].DEFAULT_START_TIME,
              endTime: l["g"].DEFAULT_END_TIME,
            };
          },
          created: function () {
            this.getMatchesHighlights();
          },
          computed: {
            matchesHighlights: function () {
              var t = this,
                e = this.$store.state.game.matchesHighlights.filter(function (
                  e
                ) {
                  return e.match_date >= t.startTime;
                });
              (e = p()(e, ["match_date"], ["asc"])), (e = g()(e, 7));
              var a = Math.ceil(e.length / 2);
              return (
                (this.desktopHighlights_1 = e.slice(0, a)),
                (this.desktopHighlights_2 = e.slice(a)),
                (e = e.map(function (t) {
                  var e =
                      -1 != t.match_date.indexOf(" ")
                        ? t.match_date.split(" ")[1]
                        : t.match_date,
                    a =
                      -1 != t.match_date.indexOf(" ")
                        ? t.match_date.split(" ")[0]
                        : t.match_date;
                  return (
                    (t.matchTime = e.split(":")[0] + ":" + e.split(":")[1]),
                    (t.matchDate = a),
                    t
                  );
                })),
                e
              );
            },
          },
          methods: {
            next_1: function () {
              this.currentHightlight_1 += 1;
            },
            previous_1: function () {
              this.currentHightlight_1
                ? (this.currentHightlight_1 -= 1)
                : (this.currentHightlight_1 =
                    this.desktopHighlights_1.length - 1);
            },
            next_2: function () {
              this.currentHightlight_2 += 1;
            },
            previous_2: function () {
              this.currentHightlight_2
                ? (this.currentHightlight_2 -= 1)
                : (this.currentHightlight_2 =
                    this.desktopHighlights_2.length - 1);
            },
            changeLanguage: function (t) {
              this.$store.dispatch("".concat(l["g"].LOADING)),
                n["f"].removeCookie("language"),
                n["f"].setCookie("language", t),
                window.location.reload();
            },
            getMatchesHighlights: function () {
              this.$store.dispatch("".concat(c["g"]));
            },
            matchUp: function (t) {
              return o()(t.match_date).isSame(new Date(), "day")
                ? "Live"
                : o()(t.match_date).isAfter(new Date(), "day")
                ? "Pre-match"
                : "Hot";
            },
          },
        },
        h = v,
        f = (a("acd2"), a("2877")),
        _ = Object(f["a"])(h, s, r, !1, null, null, null);
      e["a"] = _.exports;
    },
    e103: function (t, e, a) {
      "use strict";
      var s = a("a4ff"),
        r = a.n(s);
      r.a;
    },
    e116: function (t, e, a) {},
    e38b: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-card",
                { attrs: { flat: "" } },
                [
                  a("v-card-title", [
                    a(
                      "label",
                      {
                        staticClass:
                          "primary--text px-5 font-weight-bold info-page-title ma-auto text-capitalize",
                      },
                      [t._v(t._s(t.$t("label.otherTopics")))]
                    ),
                  ]),
                ],
                1
              ),
              a(
                "v-card",
                { staticClass: "text-left" },
                t._l(t.infoLink, function (e) {
                  return a(
                    "div",
                    { key: e.text_key },
                    [
                      a(
                        "v-btn",
                        {
                          staticClass:
                            "text-left full-width info-navigation-button body-2",
                          attrs: {
                            link: "",
                            text: "",
                            to: { name: e.routeName },
                            ripple: !1,
                          },
                        },
                        [t._v(t._s(t.$t("label." + e.text_key)))]
                      ),
                      a("v-divider"),
                    ],
                    1
                  );
                }),
                0
              ),
            ],
            1
          );
        },
        r = [],
        i = a("15a4"),
        o = {
          name: "appInfoSideMenu",
          components: {},
          data: function () {
            return {
              infoLink: [
                { text_key: "faq", routeName: i["a"].FAQ },
                { text_key: "aboutUs", routeName: i["a"].ABOUT_US },
                { text_key: "contactUs", routeName: i["a"].CONTACT_US },
                { text_key: "tnc", routeName: i["a"].TNC },
              ],
            };
          },
        },
        n = o,
        l = (a("e103"), a("2877")),
        c = a("6544"),
        d = a.n(c),
        m = a("8336"),
        p = a("b0af"),
        u = a("99d9"),
        g = a("ce7e"),
        v = Object(l["a"])(n, s, r, !1, null, null, null);
      e["a"] = v.exports;
      d()(v, {
        VBtn: m["a"],
        VCard: p["a"],
        VCardTitle: u["d"],
        VDivider: g["a"],
      });
    },
    e721: function (t, e, a) {
      "use strict";
      var s = a("2cca"),
        r = a.n(s);
      r.a;
    },
    e9f6: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { class: t.$vuetify.breakpoint.mdAndDown ? "pt-0 pb-4" : "py-4" },
            [
              "all" == t.selectionNavigator || t.$vuetify.breakpoint.lgAndUp
                ? a(
                    "v-row",
                    {
                      staticClass: "px-8",
                      attrs: { "no-gutters": "", justify: "space-between" },
                    },
                    [
                      a(
                        "v-col",
                        {
                          staticStyle: { "align-items": "center" },
                          attrs: { cols: "6", lg: 2 },
                        },
                        [
                          a(
                            "v-row",
                            {
                              staticClass: "row_slots",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  "rng" == this.gameType
                                    ? a("nav-slot", {
                                        staticClass: "icon_gameCard",
                                      })
                                    : a("nav-casino", {
                                        staticClass: "icon_gameCard",
                                      }),
                                ],
                                1
                              ),
                              a("v-col", { attrs: { cols: "auto" } }, [
                                a(
                                  "span",
                                  {
                                    staticClass:
                                      "home_slot_text px-3 text-capitalize",
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t.$t(
                                          "label." + this.gameType + "_short"
                                        )
                                      )
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a("v-spacer"),
                      a(
                        "v-col",
                        {
                          staticClass: "text-right d-flex align-center",
                          attrs: { cols: "auto" },
                        },
                        [
                          a(
                            "v-btn",
                            {
                              staticClass: "text-lowercase",
                              attrs: {
                                outlined: "",
                                rounded: "",
                                color: "#9C9FF3",
                                small: "",
                                to: {
                                  name:
                                    "rng" == this.gameType
                                      ? t.routeName.SLOT
                                      : t.routeName.CASINO,
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("label.playNow")) +
                                  "\n      "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              "all" == t.selectionNavigator || t.$vuetify.breakpoint.lgAndUp
                ? a(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      a(
                        "v-col",
                        {
                          staticClass: "pa-0 px-8 mb-4",
                          attrs: { cols: "12" },
                        },
                        [a("v-divider")],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              a(
                "v-row",
                {
                  staticClass: "game-card-container mx-0",
                  attrs: { "no-gutters": "", justify: "center" },
                },
                [
                  a(
                    "v-col",
                    { staticClass: "px-0", attrs: { cols: "12", md: "12" } },
                    [
                      t._l(t.storageGameProviderType, function (e) {
                        return [
                          a(
                            "v-row",
                            {
                              key: e.type,
                              class:
                                t.selectedGameCard == e.type
                                  ? "px-8"
                                  : "card-hidden",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-col",
                                {
                                  staticClass: "pt-2 game-card-box-container",
                                  attrs: { cols: "12" },
                                },
                                [
                                  a(
                                    "div",
                                    { staticClass: "game-card-box" },
                                    t._l(e.providers, function (s) {
                                      return a(
                                        "div",
                                        {
                                          key: s.providerCode,
                                          staticClass: "game-card-box-item",
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              on: {
                                                click: function (a) {
                                                  t.isGameMaintenance(
                                                    e.type,
                                                    s.providerCode
                                                  ) ||
                                                    t.accessGame(
                                                      e.type,
                                                      s.providerCode
                                                    );
                                                },
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                { staticClass: "vendor-info" },
                                                [
                                                  t.isGameMaintenance(
                                                    e.type,
                                                    s.providerCode
                                                  )
                                                    ? a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "game-card-play-button text-uppercase",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "label.underMaintenance"
                                                              )
                                                            ) +
                                                              "\n                    "
                                                          ),
                                                        ]
                                                      )
                                                    : a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "game-card-play-button text-uppercase",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "label.playNow"
                                                              )
                                                            ) +
                                                              "\n                    "
                                                          ),
                                                        ]
                                                      ),
                                                ]
                                              ),
                                              a("v-img", {
                                                staticClass:
                                                  "game-card-image-avatar",
                                                attrs: {
                                                  "aspect-ratio": 311 / 234,
                                                  src:
                                                    t.mediaUrl +
                                                    "/menu/" +
                                                    e.type +
                                                    "/" +
                                                    s.providerCode +
                                                    ".webp",
                                                  alt: "",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ];
                      }),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = (a("99af"), a("7db0"), a("53ca")),
        o = a("4260"),
        n = a("e6fd"),
        l = a("15a4"),
        c = a("d991"),
        d = a("c490"),
        m = a("c94a"),
        p = {
          name: "appGameCard",
          props: {
            selectionNavigator: { type: String, required: !0, default: "all" },
            openLoginDialog: {
              type: Function,
              required: !0,
              default: function () {},
            },
            gameType: {
              type: String,
              required: !0,
              default: function () {
                return "";
              },
            },
          },
          components: { NavSlot: d["a"], NavCasino: m["a"] },
          data: function () {
            return {
              routeName: l["a"],
              mediaUrl: "/static/image/",
              storageGameProviderType: o["f"].getLocalStorage(
                ""
                  .concat(n["b"].GAME_PROVIDER_TYPE, "_")
                  .concat(o["f"].getPlatform(), "_")
                  .concat(o["f"].getCurrency())
              ),
              selectedGameCard: "",
            };
          },
          computed: {
            ProviderTypes: function () {
              return this.$store.state.game.ProviderTypes;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
          },
          watch: {
            ProviderTypes: function () {
              (this.storageGameProviderType =
                this.$store.state.game.ProviderTypes),
                this.initSelectedCard();
            },
          },
          created: function () {
            this.initSelectedCard();
          },
          methods: {
            isGameMaintenance: function (t, e) {
              return (
                null != this.storageGameProviderType &&
                void 0 !=
                  this.storageGameProviderType.find(function (e) {
                    return e.type == t;
                  }) &&
                void 0 !=
                  this.storageGameProviderType
                    .find(function (e) {
                      return e.type == t;
                    })
                    .providers.find(function (t) {
                      return t.providerCode == e;
                    }) &&
                this.storageGameProviderType
                  .find(function (e) {
                    return e.type == t;
                  })
                  .providers.find(function (t) {
                    return t.providerCode == e;
                  }).isMaintenance
              );
            },
            initSelectedCard: function () {
              null != this.storageGameProviderType &&
                void 0 != Object(i["a"])(this.storageGameProviderType[2]) &&
                (this.selectedGameCard = this.gameType);
            },
            accessGame: function (t, e) {
              var a = "";
              switch (t) {
                case "sb":
                  a = "Sportsbook";
                  break;
                case "fishing":
                  a = "Fishing";
                  break;
                case "ld":
                  a = "Casino";
                  break;
                case "special":
                  a = "Special";
                  break;
              }
              if (
                this.isLoggedIn ||
                o["f"].getPlatform() != c["d"].MOBILE ||
                "rng" == t ||
                "special" == t
              )
                if ("sb" == t)
                  if (this.isLoggedIn) {
                    try {
                      this.$ga.event(
                        "Game",
                        "Real Play",
                        "".concat(e.toUpperCase(), " - ").concat(a)
                      );
                    } catch (r) {
                      console.log(r);
                    }
                    this.$router.push({
                      name: l["a"].SPORTSBOOK_BY_PROVIDER,
                      params: { provider: e, lang: this.$route.params.lang },
                    });
                  } else this.openLoginDialog();
                else if ("rng" == t)
                  this.$router.push({
                    name: l["a"].SLOT_BY_PROVIDER,
                    params: { provider: e, lang: this.$route.params.lang },
                  });
                else if ("special" == t)
                  this.$router.push({
                    name: l["a"].SPECIAL_BY_PROVIDER,
                    params: { provider: e, lang: this.$route.params.lang },
                  });
                else if (this.isLoggedIn) {
                  var s = this.$router.resolve({
                    name: l["a"].LAUNCH_GAME_LOBBY,
                    params: {
                      provider: e,
                      type: t,
                      lang: this.$route.params.lang,
                    },
                    query: { demo: 0 },
                  });
                  try {
                    this.$ga.event(
                      "Game",
                      "Real Play",
                      "".concat(e.toUpperCase(), " - ").concat(a)
                    );
                  } catch (r) {
                    console.log(r);
                  }
                  o["f"].openNewTab(s.href, "Game Play Lobby", 1200, 900);
                } else this.openLoginDialog();
              else this.openLoginDialog();
            },
          },
        },
        u = p,
        g = (a("6301"), a("2877")),
        v = a("6544"),
        h = a.n(v),
        f = a("8336"),
        _ = a("62ad"),
        b = a("ce7e"),
        C = a("adda"),
        y = a("0fd9"),
        w = a("2fa4"),
        x = Object(g["a"])(u, s, r, !1, null, null, null);
      e["a"] = x.exports;
      h()(x, {
        VBtn: f["a"],
        VCol: _["a"],
        VDivider: b["a"],
        VImg: C["a"],
        VRow: y["a"],
        VSpacer: w["a"],
      });
    },
    f49c: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.$vuetify.breakpoint.smAndDown
            ? a("div", { staticClass: "game-menu" }, [
                a(
                  "div",
                  [
                    a(
                      "v-row",
                      { attrs: { "no-gutters": "", id: "game-menu" } },
                      [
                        a(
                          "v-row",
                          {
                            staticClass: "game-menu-wrapper",
                            staticStyle: { width: "100%" },
                            attrs: { "no-gutters": "", id: "game-menu-full" },
                          },
                          [
                            this.storageHomepageHotGames
                              ? a(
                                  "v-btn",
                                  {
                                    class: [
                                      "game-menu-content font-weight-bold",
                                      [
                                        t.$vuetify.breakpoint.mdAndDown
                                          ? "caption"
                                          : "subtitle-1",
                                      ],
                                      [
                                        "homepageHot" == t.dActiveGameType
                                          ? "selected"
                                          : "",
                                      ],
                                    ],
                                    attrs: {
                                      height: "auto",
                                      text: "",
                                      ripple: !1,
                                      depressed: "",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.selectGameType("", -1);
                                      },
                                    },
                                  },
                                  [
                                    a("div", {
                                      staticClass: "game-menu-image",
                                      style:
                                        "--src: url('/static/svg/mobileMenu/hotgame.png')",
                                    }),
                                    a(
                                      "div",
                                      { staticClass: "game-menu-title" },
                                      [t._v(t._s(t.$t("label.hotGames")))]
                                    ),
                                  ]
                                )
                              : t._e(),
                            t._l(t.storageGameProviderType, function (e, s) {
                              return a(
                                "v-btn",
                                {
                                  key: e.type,
                                  class: [
                                    "game-menu-content font-weight-bold",
                                    [
                                      t.$vuetify.breakpoint.mdAndDown
                                        ? "caption"
                                        : "subtitle-1",
                                    ],
                                    [
                                      t.dActiveGameType == e.type
                                        ? "selected"
                                        : "",
                                    ],
                                  ],
                                  attrs: {
                                    height: "auto",
                                    text: "",
                                    ripple: !1,
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (a) {
                                      return t.selectGameType(e, s);
                                    },
                                  },
                                },
                                [
                                  a("div", {
                                    staticClass: "game-menu-image",
                                    style:
                                      "--src: url('/static/svg/mobileMenu/" +
                                      e.type +
                                      ".svg')",
                                  }),
                                  a("div", { staticClass: "game-menu-title" }, [
                                    t._v(
                                      t._s(t.$t("label." + e.type + "_short"))
                                    ),
                                  ]),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    t.dActiveGameType == t.HomePageHotString
                      ? a(
                          "div",
                          {
                            staticClass:
                              "mt-0 hidden-md-and-up game-card-box px-4 py-2",
                          },
                          [
                            a(
                              "div",
                              { staticClass: "game-card-box-wrapper" },
                              t._l(
                                t.storageHomepageHotGames.slice(
                                  0,
                                  t.visibleGameCards
                                ),
                                function (e, s) {
                                  return a(
                                    "div",
                                    {
                                      key: e.code,
                                      staticClass: "game-card-box-item d-flex",
                                      class: "gT_" + t.HomePageHotString,
                                      on: {
                                        click: function (a) {
                                          t.isGameMaintenance(
                                            e.type,
                                            e.provider
                                          ) || t.launchGame(e, !1);
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "v-img",
                                        {
                                          staticClass:
                                            "banner-img d-flex justify-center align-center",
                                          attrs: {
                                            contain: "",
                                            alt: "" + e.locale[0].name,
                                          },
                                        },
                                        [
                                          a("img", {
                                            class: ["homepageHot_img"],
                                            attrs: {
                                              src:
                                                null == e.imageCdn
                                                  ? t.mediaUrl +
                                                    "/game_icons/en/" +
                                                    e.provider +
                                                    "/" +
                                                    e.code +
                                                    "_" +
                                                    e.id +
                                                    ".jpg"
                                                  : "" + e.imageCdn,
                                            },
                                            on: {
                                              error: function (t) {
                                                t.target.src =
                                                  "/static/image/icon/broken-image.png";
                                              },
                                            },
                                          }),
                                          t.isGameMaintenance(
                                            e.type,
                                            e.provider
                                          )
                                            ? a(
                                                "v-overlay",
                                                {
                                                  staticClass:
                                                    "gameMaintenanceOverlay",
                                                  attrs: {
                                                    absolute: "",
                                                    opacity: "0.8",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "text-uppercase font-weight-bold",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "label.underMaintenance"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          a("img", {
                                            staticClass:
                                              "img-hot-home pos_right_top",
                                            attrs: {
                                              src: "/static/image/icon/hot-icon.png",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      a(
                                        "span",
                                        { staticClass: "smallTextGameLocale" },
                                        [t._v(t._s(t.getGameName(e.locale)))]
                                      ),
                                    ],
                                    1
                                  );
                                }
                              ),
                              0
                            ),
                          ]
                        )
                      : a(
                          "div",
                          {
                            staticClass:
                              "mt-0 hidden-md-and-up game-card-box px-4 py-2",
                          },
                          [
                            a(
                              "div",
                              { staticClass: "game-card-box-wrapper" },
                              t._l(
                                t.gameContainer1.providers.slice(
                                  0,
                                  t.visibleProvider
                                ),
                                function (e) {
                                  return a(
                                    "div",
                                    {
                                      key: e.providerCode,
                                      staticClass: "game-card-box-item",
                                      class: "gT_" + t.dActiveGameType,
                                    },
                                    [
                                      a(
                                        "v-img",
                                        {
                                          staticClass:
                                            "game-card-image-avatar d-flex justify-center align-center",
                                          attrs: {
                                            contain: "",
                                            alt: e.providerCode,
                                          },
                                          on: {
                                            click: function (a) {
                                              t.isGameMaintenance(
                                                t.gameContainer1.type,
                                                e.providerCode
                                              ) ||
                                                t.accessGame(
                                                  t.gameContainer1.type,
                                                  e.providerCode
                                                );
                                            },
                                          },
                                        },
                                        [
                                          a("img", {
                                            staticClass: "homepageHot_img",
                                            staticStyle: {
                                              "max-width": "100%",
                                            },
                                            attrs: {
                                              src:
                                                t.mediaUrl +
                                                "/menu/" +
                                                t.gameContainer1.type +
                                                "/" +
                                                e.providerCode +
                                                ".webp",
                                            },
                                            on: {
                                              error: function (t) {
                                                t.target.src =
                                                  "/static/image/icon/broken-image.png";
                                              },
                                            },
                                          }),
                                          t.isGameMaintenance(
                                            t.gameContainer1.type,
                                            e.providerCode
                                          )
                                            ? a(
                                                "v-overlay",
                                                {
                                                  staticClass:
                                                    "gameMaintenanceOverlay",
                                                  attrs: {
                                                    absolute: "",
                                                    opacity: "0.8",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "text-uppercase font-weight-bold",
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "label.underMaintenance"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                          t.isHotProvider(e.providerCode)
                                            ? a("img", {
                                                staticClass:
                                                  "img-hot-home pos_right_top",
                                                attrs: {
                                                  src: "/static/image/icon/hot-icon.png",
                                                  alt: "hot",
                                                },
                                              })
                                            : t._e(),
                                          t.isNewProvider(e.providerCode)
                                            ? a("img", {
                                                staticClass:
                                                  "img-new-home pos_right_top",
                                                attrs: {
                                                  src: "/static/image/icon/new_icon.png",
                                                  alt: "new",
                                                },
                                              })
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      "table" === t.dActiveGameType
                                        ? a(
                                            "label",
                                            {
                                              staticClass:
                                                "text-capitalize d-flex justify-center holder_text",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "label.custom_" +
                                                      t.dActiveGameType +
                                                      "_" +
                                                      e.providerCode
                                                  )
                                                )
                                              ),
                                            ]
                                          )
                                        : a(
                                            "label",
                                            {
                                              staticClass:
                                                "text-capitalize d-flex justify-center holder_text",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "label.custom_" +
                                                      e.providerCode
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                    ],
                                    1
                                  );
                                }
                              ),
                              0
                            ),
                          ]
                        ),
                    t.dActiveGameType == t.HomePageHotString
                      ? a(
                          "v-row",
                          { attrs: { "no-gutters": "" } },
                          [
                            t.storageHomepageHotGames.length > 4
                              ? a(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "viewBtn",
                                        on: { click: t.loadMoreGames },
                                      },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(
                                              4 === t.visibleGameCards
                                                ? t.$t("label.viewMore")
                                                : t.$t("label.viewLess")
                                            ) +
                                            "\n          "
                                        ),
                                        a("v-icon", [
                                          t._v(
                                            t._s(
                                              4 === t.visibleGameCards
                                                ? "mdi-chevron-down"
                                                : "mdi-chevron-up"
                                            )
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          1
                        )
                      : a(
                          "v-row",
                          { attrs: { "no-gutters": "" } },
                          [
                            t.gameContainer1.providers.length > 4
                              ? a(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "viewBtn",
                                        on: { click: t.loadMoreProviders },
                                      },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(
                                              4 === t.visibleProvider
                                                ? t.$t("label.viewMore")
                                                : t.$t("label.viewLess")
                                            ) +
                                            "\n          "
                                        ),
                                        a("v-icon", [
                                          t._v(
                                            t._s(
                                              4 === t.visibleProvider
                                                ? "mdi-chevron-down"
                                                : "mdi-chevron-up"
                                            )
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          1
                        ),
                  ],
                  1
                ),
              ])
            : t._e();
        },
        r = [],
        i =
          (a("99af"),
          a("7db0"),
          a("c975"),
          a("b0c0"),
          a("e25e"),
          a("ac1f"),
          a("5319"),
          a("1276"),
          a("4795"),
          a("96cf"),
          a("1da1")),
        o = a("4260"),
        n = (a("870b"), a("f48f"), a("e6fd")),
        l = a("15a4"),
        c = a("e438"),
        d = a("6cd4"),
        m = a.n(d),
        p = a("cd99"),
        u = {
          name: "appGameCard",
          data: function () {
            return {
              visibleGameCards: 4,
              visibleProvider: 4,
              showBottomSheet: !1,
              selectedProvider: null,
              routeName: l["a"],
              mediaUrl: n["g"].MEDIA_SERVER_URL,
              storageGameProviderType: o["f"].getLocalStorage(
                ""
                  .concat(n["b"].GAME_PROVIDER_TYPE, "_")
                  .concat(o["f"].getPlatform(), "_")
                  .concat(o["f"].getCurrency())
              ),
              storageHomepageHotGames: o["f"].getLocalStorage(
                ""
                  .concat(n["b"].HOMEPAGE_HOTGAMELIST, "_")
                  .concat(o["f"].getPlatform(), "_")
                  .concat(o["f"].getCurrency())
              ),
              selectedGameCard: "",
              gameContainer1: {},
              gameContainer2: {},
              dActiveGameType: "ld",
              HomePageHotString: "homepageHot",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              slotAspRatio: 1,
            };
          },
          computed: {
            BanneAspRatio: function () {
              var t = 1;
              switch (this.dActiveGameType) {
                case "ld":
                  t = this.ldAspRatio;
                  break;
                case "rng":
                case this.HomePageHotString:
                  t = this.slotAspRatio;
                  break;
                case "cricket":
                  t = 3;
                  break;
                case "table":
                  t = this.tableAspRatio;
                  break;
                case "sb":
                  t = 3;
                  break;
                case "fishing":
                  t = 0;
                  break;
                case "lottery":
                  t = 0;
                  break;
                case "crash":
                  t = this.crashAspRatio;
                  break;
              }
              return t;
            },
            ProviderTypes: function () {
              return this.$store.state.game.ProviderTypes;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
            calctab: function () {
              return this.text.replace("Lorem", "tab2");
            },
            homepageHotGames: function () {
              return this.$store.state.game.HomepageHotGames;
            },
          },
          watch: {
            ProviderTypes: function () {
              (this.storageGameProviderType =
                this.$store.state.game.ProviderTypes),
                this.selectGameType("", 0);
            },
            ActiveMobileGameType: function () {
              return this.dActiveGameType;
            },
            homepageHotGames: function () {
              this.storageHomepageHotGames =
                this.$store.state.game.HomepageHotGames;
            },
          },
          created: function () {
            this.selectGameType("", 0), this.getHomepageHotGames();
          },
          methods: {
            getGameName: function (t) {
              var e = this;
              try {
                return t.find(function (t) {
                  return t.language == e.currentLanguage;
                }).name;
              } catch (a) {
                return t.find(function (t) {
                  return "en" == t.language;
                }).name;
              }
            },
            loadMoreGames: function () {
              4 === this.visibleGameCards
                ? (this.visibleGameCards = this.storageHomepageHotGames.length)
                : (this.visibleGameCards = 4);
            },
            loadMoreProviders: function () {
              4 === this.visibleProvider
                ? (this.visibleProvider = this.gameContainer1.providers.length)
                : (this.visibleProvider = 4);
            },
            closePageDialog: function () {
              this.$parent.closePageDialog = !0;
            },
            closeIframe: function () {
              var t = document.querySelector("#launchGame_iframe");
              if (t) {
                var e = t.parentNode;
                (e.style.bottom = "-100%"),
                  setTimeout(function () {
                    document.body.removeChild(t.parentNode);
                  }, 100);
              }
            },
            openBottomSheet: function (t) {
              this.isGameMaintenance(
                this.gameContainer1.type,
                t.providerCode
              ) ||
                ((this.selectedProvider = t.providerCode),
                (this.showBottomSheet = !0));
            },
            closeBottomSheet: function () {
              (this.showBottomSheet = !1), (this.selectedProvider = null);
            },
            InserDirectLaunchGamePixel: function (t, e) {
              t = "slot" != t ? t : "slot";
              var a = o["e"].getMessage(
                "ProviderShortToLong.".concat(e.toUpperCase())
              );
              if ("sexy_v2" == e)
                switch (t) {
                  case "table":
                    a = o["e"].getMessage(
                      "ProviderShortToLong.".concat(e.toUpperCase(), "_TABLE")
                    );
                    break;
                  case "ld":
                    a = o["e"].getMessage(
                      "ProviderShortToLong.".concat(e.toUpperCase(), "_LD")
                    );
                    break;
                }
              var s = {
                event_type: "product_page",
                country_code: "BD",
                lang_code: o["f"].getLanguage(),
                product_name: a,
                product_id: e,
                category: t,
                depth: 2,
              };
              (window.ae_parms_kv = s),
                console.log("gametabholder aeparm: ", s);
              var r = "71880509ee082f8f44596eedf687aac0",
                i = document.createElement("script"),
                n = "//d313lzv9559yp9.cloudfront.net";
              (i.type = "text/javascript"),
                (i.async = !0),
                (i.src = "".concat(n, "/").concat(r, ".js"));
              var l = document.getElementsByTagName("script")[0];
              l.parentNode.insertBefore(i, l);
            },
            showAndroidToast: function () {},
            isNewProvider: function (t) {
              var e = ["jdb", "haba", "ludo", "pt", "aviatrix"];
              return e.indexOf(t.toLowerCase()) > -1;
            },
            isHotProvider: function (t) {
              var e = [
                "jili",
                "evo",
                "betswiz",
                "pp",
                "sexy_v2",
                "pg",
                "spribe",
                "jili",
              ];
              return e.indexOf(t.toLowerCase()) > -1;
            },
            openLoginDialog: function () {
              this.$parent.openLoginDialog();
            },
            tabfunc: function () {
              var t = this.tab.split("-"),
                e = parseInt(t[1]) + 1;
              (this.tab2 = "tab-" + e),
                console.log(this.tab2),
                console.log(this.tab);
            },
            selectGameType: function (t, e) {
              (this.dActiveGameType =
                "" != t && void 0 != t ? t.type : "homepageHot"),
                ("" == t && -1 == e) ||
                  (o["f"].setCookie(n["f"].FAVOURITE_GAME, e, 30),
                  this.storageGameProviderType &&
                    (this.$vuetify.breakpoint.mdAndUp
                      ? (e + 1 < this.storageGameProviderType.length
                          ? ((this.gameContainer1 =
                              this.storageGameProviderType[e]),
                            (this.gameContainer2 =
                              this.storageGameProviderType[e + 1]))
                          : ((this.gameContainer1 =
                              this.storageGameProviderType[e - 1]),
                            (this.gameContainer2 =
                              this.storageGameProviderType[e])),
                        m()(this.storageGameProviderType, function (t) {
                          t.selected = !1;
                        }),
                        (this.gameContainer1.selected = !0),
                        (this.gameContainer2.selected = !0))
                      : ((this.gameContainer1 =
                          this.storageGameProviderType[e]),
                        (this.gameContainer2 = this.storageGameProviderType[e]),
                        m()(this.storageGameProviderType, function (t) {
                          t.selected = !1;
                        }),
                        (this.gameContainer1.selected = !0))),
                  (this.visibleGameCards = 4),
                  (this.visibleProvider = 4),
                  console.log(this.gameContainer1));
            },
            directLaunchGame: function (t, e) {
              var a = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function s() {
                  var r;
                  return regeneratorRuntime.wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          r = a.$router.resolve({
                            name: l["a"].LAUNCH_GAME_LOBBY,
                            params: { provider: t.provider, type: t.type },
                            query: { id: t.id, code: t.code, demo: e ? 1 : 0 },
                          });
                          try {
                            a.$ga.event(
                              "Game",
                              "".concat(e ? "Demo" : "Real", " Play"),
                              ""
                                .concat(t.provider.toUpperCase(), " - Slot - ")
                                .concat(
                                  t.locale.find(function (t) {
                                    return "en" == t.language;
                                  }).name
                                ),
                              t.id
                            );
                          } catch (i) {
                            console.log(i);
                          }
                          "sb" == t.type || t.type,
                            window.open(r.href),
                            a.semiTransfer(t.provider);
                        case 3:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
            launchGame: function (t, e) {
              e || this.isLoggedIn
                ? this.directLaunchGame(t, e)
                : this.$parent.openLoginDialog();
            },
            getHomepageHotGames: function () {
              if (!this.storageHomepageHotGames) {
                var t = {
                  currency: o["f"].getCurrency(),
                  platform: o["f"].getPlatform(),
                  size: "",
                  page: "",
                  mode: "All",
                };
                this.$store.dispatch("".concat(p["c"]), { obj: t });
              }
            },
            isGameMaintenance: function (t, e) {
              return (
                null != this.storageGameProviderType &&
                void 0 !=
                  this.storageGameProviderType.find(function (e) {
                    return e.type == t;
                  }) &&
                void 0 !=
                  this.storageGameProviderType
                    .find(function (e) {
                      return e.type == t;
                    })
                    .providers.find(function (t) {
                      return t.providerCode == e;
                    }) &&
                this.storageGameProviderType
                  .find(function (e) {
                    return e.type == t;
                  })
                  .providers.find(function (t) {
                    return t.providerCode == e;
                  }).isMaintenance
              );
            },
            accessGame: function (t, e) {
              var a = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function s() {
                  var r, i;
                  return regeneratorRuntime.wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          console.log(e),
                            a.showAndroidToast(),
                            (r = ""),
                            (s.t0 = t),
                            (s.next =
                              "sb" === s.t0
                                ? 6
                                : "fishing" === s.t0
                                ? 8
                                : "ld" === s.t0
                                ? 10
                                : "special" === s.t0
                                ? 12
                                : 14);
                          break;
                        case 6:
                          return (r = "Sportsbook"), s.abrupt("break", 14);
                        case 8:
                          return (r = "Fishing"), s.abrupt("break", 14);
                        case 10:
                          return (r = "Casino"), s.abrupt("break", 14);
                        case 12:
                          return (r = "Special"), s.abrupt("break", 14);
                        case 14:
                          if ("rng" == t)
                            a.$router.push({
                              name: l["a"].SLOT_BY_PROVIDER,
                              params: {
                                provider: e,
                                lang: a.$route.params.lang,
                              },
                            });
                          else if ("lottery" == t)
                            a.$router.push({
                              name: l["a"].LOTTERY_BY_PROVIDER,
                              params: {
                                provider: e,
                                lang: a.$route.params.lang,
                              },
                            });
                          else if ("crash" == t)
                            a.$router.push({
                              name: l["a"].CRASH_BY_PROVIDER,
                              params: {
                                provider: e,
                                lang: a.$route.params.lang,
                              },
                            });
                          else if ("table" == t)
                            a.$router.push({
                              name: l["a"].TABLE_GAMES_BY_PROVIDER,
                              params: {
                                provider: e,
                                lang: a.$route.params.lang,
                              },
                            });
                          else if ("special" == t)
                            a.$router.push({
                              name: l["a"].SPECIAL_BY_PROVIDER,
                              params: {
                                provider: e,
                                lang: a.$route.params.lang,
                              },
                            });
                          else if (a.isLoggedIn) {
                            i = a.$router.resolve({
                              name: l["a"].LAUNCH_GAME_LOBBY,
                              params: {
                                provider: e,
                                type: t,
                                lang: a.$route.params.lang,
                              },
                              query: { demo: 0 },
                            });
                            try {
                              a.$ga.event(
                                "Game",
                                "Real Play",
                                "".concat(e.toUpperCase(), " - ").concat(r)
                              );
                            } catch (o) {
                              console.log(o);
                            }
                            window.open(i.href),
                              a.semiTransfer(e),
                              a.InserDirectLaunchGamePixel(t, e);
                          } else a.openLoginDialog();
                        case 15:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                })
              )();
            },
            semiTransfer: function (t) {
              var e = { to_wallet: t };
              return this.$store.dispatch("".concat(c["b"]), { obj: e });
            },
          },
          ready: function () {},
          mounted: function () {
            var t = this;
            window.onmessage = function (e) {
              "exitGame" === e.data && (t.closePageDialog(), t.closeIframe());
            };
          },
        },
        g = u,
        v = (a("3f0e"), a("2877")),
        h = a("6544"),
        f = a.n(h),
        _ = a("8336"),
        b = a("62ad"),
        C = a("132d"),
        y = a("adda"),
        w = a("a797"),
        x = a("0fd9"),
        k = Object(v["a"])(g, s, r, !1, null, null, null);
      e["a"] = k.exports;
      f()(k, {
        VBtn: _["a"],
        VCol: b["a"],
        VIcon: C["a"],
        VImg: y["a"],
        VOverlay: w["a"],
        VRow: x["a"],
      });
    },
    fa7a: function (t, e, a) {
      "use strict";
      var s = a("002a"),
        r = a.n(s);
      r.a;
    },
  },
]);
//# sourceMappingURL=app~8becc859.f0602a90.js.map
