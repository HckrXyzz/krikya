(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~0e32f6fa"],
  {
    "2bb7": function (t, e, a) {},
    "2d92": function (t, e, a) {},
    5697: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-card",
            { staticClass: "desktop_card" },
            [
              a("v-card-title", [
                a(
                  "label",
                  {
                    staticClass:
                      "--v-primary-base text-left text-capitalize mr-4",
                  },
                  [t._v(t._s(t.$t("label.rewards")))]
                ),
              ]),
              a(
                "v-card",
                {
                  staticClass: "mt-4 profile-detail-card rewards-card",
                  attrs: { elevation: "0" },
                },
                [
                  a(
                    "v-row",
                    {
                      staticClass: "px-8",
                      class: t.$vuetify.breakpoint.lgAndUp ? "pt-4" : "",
                      attrs: { align: "center" },
                    },
                    [
                      a(
                        "v-col",
                        { attrs: { cols: "5", sm: "2", md: "3", lg: "2" } },
                        [a("label", [t._v(t._s(t.$t("label.coinsRewards")))])]
                      ),
                      a(
                        "v-col",
                        { attrs: { cols: "7", sm: "3", md: "3", lg: "2" } },
                        [
                          a(
                            "v-card",
                            {
                              attrs: {
                                color: "footer_color text-center",
                                elevation: "0",
                              },
                            },
                            [
                              a(
                                "v-row",
                                {
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    {
                                      staticClass: "text-right",
                                      attrs: { cols: "auto" },
                                    },
                                    [
                                      a("img", {
                                        staticClass: "mt-1",
                                        attrs: {
                                          src: "/static/svg/coin-event.svg",
                                          height: "24",
                                          width: "24",
                                        },
                                      }),
                                    ]
                                  ),
                                  a(
                                    "v-col",
                                    {
                                      staticClass: "pl-2 text-left",
                                      attrs: { cols: "auto" },
                                    },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(
                                            t.memberInfo.rewardBalance
                                              ? t.memberInfo.rewardBalance
                                              : 0
                                          ) +
                                          "\n            "
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
                        { attrs: { cols: "12", sm: "6", md: "6", lg: "4" } },
                        [
                          a(
                            "v-row",
                            {
                              attrs: {
                                "no-gutters": "",
                                justify: "space-between",
                              },
                            },
                            [
                              1 == t.configuration.daily_check_in.enabled
                                ? a(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      a(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          a(
                                            "v-col",
                                            {
                                              staticClass: "text-center",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  a("img", {
                                                    attrs: {
                                                      src: "/static/svg/reward-checkin.svg",
                                                      height: "40",
                                                      width: "40",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.openDailyRewardsDialog();
                                                      },
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
                                              staticClass: "text-center mt-1",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "label",
                                                {
                                                  staticClass:
                                                    "reward-icon-label",
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.$t("label.checkin"))
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
                                  )
                                : t._e(),
                              1 == t.configuration.spin_wheel.enabled
                                ? a(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      a(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          a(
                                            "v-col",
                                            {
                                              staticClass: "text-center",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  a("img", {
                                                    attrs: {
                                                      src: "/static/svg/icon-luckyspin.svg",
                                                      height: "40",
                                                      width: "40",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.navigateWOFPage();
                                                      },
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
                                              staticClass: "text-center mt-1",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "label",
                                                {
                                                  staticClass:
                                                    "reward-icon-label",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.$t("label.luckyWheel")
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
                                  )
                                : t._e(),
                              1 == t.configuration.card_mania.enabled
                                ? a(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      a(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          a(
                                            "v-col",
                                            {
                                              staticClass: "text-center",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  a("img", {
                                                    attrs: {
                                                      src: "/static/image/profile/icon-card-mania.svg",
                                                      height: "40",
                                                      width: "40",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.navigateToCardManiaPage();
                                                      },
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
                                              staticClass: "text-center mt-1",
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              a(
                                                "label",
                                                {
                                                  staticClass:
                                                    "reward-icon-label",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.$t("label.cardMania")
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
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-col",
                        { attrs: { cols: "12", sm: "12" } },
                        [
                          a(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
                                "close-on-content-click": !1,
                                "offset-y": "",
                                transition: "scale-transition",
                                "max-width": "290px",
                                "min-width": "290px",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "activator",
                                  fn: function (e) {
                                    var s = e.on;
                                    return [
                                      a(
                                        "v-text-field",
                                        t._g(
                                          {
                                            staticClass:
                                              "rewards-date-search ml-3 elevation-0",
                                            attrs: {
                                              clearable: "",
                                              outlined: "",
                                              "hide-details": "true",
                                              "append-icon": "mdi-magnify",
                                            },
                                            on: {
                                              "click:clear": function (e) {
                                                return t.clearFilter();
                                              },
                                            },
                                            model: {
                                              value: t.dateRangeText,
                                              callback: function (e) {
                                                t.dateRangeText = e;
                                              },
                                              expression: "dateRangeText",
                                            },
                                          },
                                          s
                                        )
                                      ),
                                    ];
                                  },
                                },
                              ]),
                              model: {
                                value: t.dateMenu,
                                callback: function (e) {
                                  t.dateMenu = e;
                                },
                                expression: "dateMenu",
                              },
                            },
                            [
                              a("v-date-picker", {
                                attrs: {
                                  color: "buttonPrimary",
                                  "no-title": "",
                                  range: "",
                                },
                                on: {
                                  change: function (e) {
                                    return t.filterListByDate();
                                  },
                                  input: function (e) {
                                    return t.selectedDate();
                                  },
                                },
                                model: {
                                  value: t.dates,
                                  callback: function (e) {
                                    t.dates = e;
                                  },
                                  expression: "dates",
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
                  ),
                  a(
                    "v-row",
                    [
                      t.$vuetify.breakpoint.mdAndUp
                        ? a(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              a("v-data-table", {
                                staticClass: "elevation-0",
                                attrs: {
                                  light: "",
                                  headers: t.headers,
                                  items: t.transactionList,
                                  "hide-default-footer": !0,
                                  "hide-default-header": "",
                                  "items-per-page": -1,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "header",
                                      fn: function (e) {
                                        var s = e.props;
                                        return [
                                          a(
                                            "tr",
                                            t._l(s.headers, function (e) {
                                              return a(
                                                "th",
                                                {
                                                  key: e.text,
                                                  staticClass:
                                                    "reward-table-header text-start",
                                                  staticStyle: {
                                                    "border-bottom":
                                                      "thin solid rgba(0,0,0,.12)",
                                                    padding: "10px 16px",
                                                  },
                                                },
                                                [
                                                  "dateSearch" !== e.text
                                                    ? a("span", [
                                                        t._v(
                                                          "\n                  " +
                                                            t._s(
                                                              t.$t(
                                                                "label." +
                                                                  e.text
                                                              )
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                        e.sortable
                                                          ? a(
                                                              "span",
                                                              [
                                                                "asc" ==
                                                                e.sortBy
                                                                  ? a(
                                                                      "v-icon",
                                                                      {
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              a
                                                                            ) {
                                                                              return t.sortTableList(
                                                                                e
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          "mdi-chevron-down"
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
                                                                "desc" ==
                                                                e.sortBy
                                                                  ? a(
                                                                      "v-icon",
                                                                      {
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              a
                                                                            ) {
                                                                              return t.sortTableList(
                                                                                e
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          "mdi-chevron-up"
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
                                                              ],
                                                              1
                                                            )
                                                          : t._e(),
                                                      ])
                                                    : t._e(),
                                                ]
                                              );
                                            }),
                                            0
                                          ),
                                        ];
                                      },
                                    },
                                    {
                                      key: "body",
                                      fn: function (e) {
                                        var s = e.items;
                                        return t._l(s, function (e, s) {
                                          return a("tr", { key: s }, [
                                            a(
                                              "td",
                                              {
                                                staticClass: "text-start",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t._f("longDate")(
                                                        e.updated_at
                                                      )
                                                    ) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                            a(
                                              "td",
                                              {
                                                staticClass: "text-start",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.trx_id) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                            a(
                                              "td",
                                              {
                                                staticClass: "text-start",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.balance_before) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                            a(
                                              "td",
                                              {
                                                staticClass: "text-start",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.balance_after) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                            a(
                                              "td",
                                              {
                                                staticClass: "text-start",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.amount) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                            a(
                                              "td",
                                              {
                                                staticClass:
                                                  "text-start text-capitalize",
                                                staticStyle: {
                                                  "border-bottom":
                                                    "thin solid rgba(0,0,0,.12)",
                                                  padding: "10px 16px",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.activity) +
                                                    "\n              "
                                                ),
                                              ]
                                            ),
                                          ]);
                                        });
                                      },
                                    },
                                  ],
                                  null,
                                  !1,
                                  1138050796
                                ),
                              }),
                            ],
                            1
                          )
                        : a(
                            "v-col",
                            { attrs: { cols: "12" } },
                            t._l(t.transactionList, function (e, s) {
                              return a(
                                "v-row",
                                {
                                  key: s,
                                  staticClass: "mx-1 mobile-reward-table",
                                },
                                [
                                  a(
                                    "v-col",
                                    {
                                      staticClass: "mr-0",
                                      attrs: { cols: "6" },
                                    },
                                    [
                                      a(
                                        "v-row",
                                        {
                                          staticClass:
                                            "reward-table-header pl-6",
                                          attrs: { "no-gutters": "" },
                                        },
                                        t._l(t.headers, function (e) {
                                          return a(
                                            "v-col",
                                            {
                                              key: e.text,
                                              attrs: { cols: "12" },
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.$t("label." + e.text)
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          );
                                        }),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      a(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t._f("longDate")(
                                                      e.updated_at
                                                    )
                                                  ) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.trx_id) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.balance_before) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.balance_after) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.amount) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                          a(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.activity) +
                                                  "\n              "
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
                                    { attrs: { cols: "12" } },
                                    [a("v-divider", { staticClass: "mx-2" })],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                    ],
                    1
                  ),
                  a(
                    "v-row",
                    [
                      0 == t.transactionList.length
                        ? a(
                            "v-col",
                            {
                              staticClass: "text-center pt-0 pb-8",
                              attrs: { cols: "12" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "reward-table-header subtitle-2",
                                },
                                [t._v(t._s(t.$t("message.noDataAvaliable")))]
                              ),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                  t.pagination.last_page > 1
                    ? a(
                        "v-row",
                        { staticClass: "mb-6" },
                        [
                          a(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12" },
                            },
                            [
                              a("v-pagination", {
                                staticClass: "reward_log_pagination",
                                attrs: {
                                  length: t.pagination.last_page,
                                  "next-icon": "mdi-chevron-right",
                                  "prev-icon": "mdi-chevron-left",
                                  "total-visible": t.pagination.per_page,
                                },
                                on: { input: t.changePage },
                                model: {
                                  value: t.pagination.current_page,
                                  callback: function (e) {
                                    t.$set(t.pagination, "current_page", e);
                                  },
                                  expression: "pagination.current_page",
                                },
                              }),
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
              a(
                "v-dialog",
                {
                  staticStyle: { margin: "10px" },
                  attrs: {
                    "content-class": "daily-rewards-dialog",
                    persistent: "",
                    value: t.dailyRewardsDialogShow,
                    "max-width": 440,
                  },
                },
                [
                  a(
                    "v-card",
                    { staticClass: "daily-rewards-card" },
                    [
                      a(
                        "v-row",
                        {
                          class: t.$vuetify.breakpoint.mdAndDown
                            ? "dialog-header pt-5 px-5"
                            : "dialog-header pt-8 px-5",
                          attrs: { justify: "space-between", "no-gutters": "" },
                        },
                        [
                          a("v-col", { attrs: { cols: "11" } }, [
                            a(
                              "label",
                              {
                                staticClass:
                                  "dialog-title pt-3 ma-0 text-capitalize d-block full-width",
                              },
                              [t._v(t._s(t.$t("label.dailyCheckIn")))]
                            ),
                          ]),
                          a(
                            "v-col",
                            { attrs: { cols: "1" } },
                            [
                              a(
                                "v-icon",
                                {
                                  class: "dialog-close-icon",
                                  on: { click: t.closeDailyRewardsDialog },
                                },
                                [t._v("mdi-close")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-row",
                        {
                          class: t.$vuetify.breakpoint.mdAndDown
                            ? "px-5 py-3"
                            : "px-5 py-6",
                          attrs: { "no-gutters": "" },
                        },
                        [
                          a(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [a("v-divider", { staticClass: "dialog-divider" })],
                            1
                          ),
                        ],
                        1
                      ),
                      t.dailyRewardsDialogShow
                        ? a(
                            "v-row",
                            {
                              staticClass: "d-block dialog-row",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-row",
                                {
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    {
                                      staticClass: "mb-8",
                                      class:
                                        (t.$vuetify.breakpoint.mdAndDown,
                                        "px-5"),
                                      attrs: { cols: "12" },
                                    },
                                    [
                                      a(
                                        "v-card",
                                        {
                                          attrs: {
                                            color: "footer_color text-center",
                                            elevation: "0",
                                          },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              attrs: {
                                                "no-gutters": "",
                                                align: "center",
                                                justify: "center",
                                              },
                                            },
                                            [
                                              a(
                                                "v-col",
                                                {
                                                  staticClass: "text-right",
                                                  attrs: { cols: "auto" },
                                                },
                                                [
                                                  a("img", {
                                                    staticClass: "mt-1",
                                                    attrs: {
                                                      src: "/static/svg/coin-event.svg",
                                                      height: "24",
                                                      width: "24",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass: "pl-2 text-left",
                                                  staticStyle: {
                                                    "font-size": "14px",
                                                  },
                                                  attrs: { cols: "auto" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(
                                                        t.memberInfo
                                                          .rewardBalance
                                                          ? t.memberInfo
                                                              .rewardBalance
                                                          : 0
                                                      ) +
                                                      "\n                "
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
                                      staticClass: "mb-8",
                                      class:
                                        (t.$vuetify.breakpoint.mdAndDown,
                                        "px-5"),
                                      attrs: { cols: "12" },
                                    },
                                    [
                                      a(
                                        "v-row",
                                        {
                                          attrs: {
                                            "no-gutters": "",
                                            justify: "end",
                                          },
                                        },
                                        t._l(t.dailyRewards, function (e, s) {
                                          return a(
                                            "v-col",
                                            { key: s },
                                            [
                                              a(
                                                "v-row",
                                                {
                                                  staticClass:
                                                    "daily-coins-progress",
                                                  attrs: { "no-gutters": "" },
                                                },
                                                [
                                                  a(
                                                    "v-col",
                                                    [
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
                                                              staticClass:
                                                                "text-center",
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                        " +
                                                                  t._s(
                                                                    e.coins
                                                                  ) +
                                                                  "\n                      "
                                                              ),
                                                            ]
                                                          ),
                                                          a(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "text-center",
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              a("img", {
                                                                attrs: {
                                                                  src: t.getCoinsImg(
                                                                    e
                                                                  ),
                                                                },
                                                              }),
                                                            ]
                                                          ),
                                                          a(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "text-center",
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                        " +
                                                                  t._s(
                                                                    t.days[
                                                                      e.day
                                                                    ]
                                                                  ) +
                                                                  "\n                      "
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
                                          );
                                        }),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-col",
                                    {
                                      staticClass:
                                        "mb-5 d-flex justify-center align-center",
                                      class: t.$vuetify.breakpoint.mdAndDown
                                        ? "px-2"
                                        : "px-5",
                                      attrs: { cols: "12" },
                                    },
                                    [
                                      a("app-button", {
                                        staticClass:
                                          "dialog-button white--text",
                                        attrs: {
                                          action: this.checkInDay,
                                          title: t.$t("button.checkInToday"),
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
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              a(
                "v-dialog",
                {
                  attrs: { "max-width": "500px", transition: "top" },
                  model: {
                    value: t.directToWOFDialogShow,
                    callback: function (e) {
                      t.directToWOFDialogShow = e;
                    },
                    expression: "directToWOFDialogShow",
                  },
                },
                [
                  a(
                    "v-card",
                    {
                      attrs: {
                        color: "white",
                        "min-height": "200",
                        "max-width": "500px",
                      },
                    },
                    [
                      a(
                        "v-card-title",
                        { staticClass: "primary white--text" },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("label.dailyCheckIn")) +
                              "\n      "
                          ),
                        ]
                      ),
                      a("div", { staticClass: "pa-5" }, [
                        a("div", [
                          a("span", [
                            t._v(t._s(t.$t("label.trigger_redirect_wof_msg"))),
                          ]),
                        ]),
                      ]),
                      a(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end" },
                        [
                          a(
                            "v-btn",
                            {
                              staticClass: "primary white--text",
                              staticStyle: { "min-width": "100%" },
                              attrs: { ripple: "", outlined: "" },
                              on: {
                                click: function (e) {
                                  return t.navigateWOFPage();
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
            ],
            1
          );
        },
        r = [],
        i =
          (a("99af"),
          a("caad"),
          a("0d03"),
          a("a9e3"),
          a("ac1f"),
          a("2532"),
          a("5319"),
          a("1276"),
          a("4795"),
          a("d991")),
        o = a("15a4"),
        n = a("4260"),
        c = a("bb72"),
        l = a("ac8b"),
        d = a("639a"),
        u = a("cdc9"),
        m = {
          name: "rewards",
          data: function () {
            return {
              directToWOFDialogShow: !1,
              dailyRewardsDialogShow: !1,
              dateMenu: !1,
              dates: ["", ""],
              dayOfWeekNumber: new Date().getDay(),
              devicePlatform: i["d"],
              validator: n["d"],
              currentCurrency: n["f"].getCurrency(),
              transactionList: [],
              dailyRewards: [],
              headers: [
                {
                  text: "transactionDate",
                  align: "start",
                  sortable: !0,
                  value: "member_id",
                },
                { text: "transactionId", value: "membercode", sortable: !1 },
                { text: "balanceBefore", value: "commission", sortable: !1 },
                { text: "balanceAfter", value: "status", sortable: !1 },
                { text: "amount", value: "status", sortable: !1 },
                { text: "activity", value: "status", sortable: !1 },
              ],
              routeName: o["a"],
              days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
              pagination: {},
              selectedPage: 1,
            };
          },
          created: function () {
            this.metaTag(),
              this.getDailyCheckInPrizeList(),
              this.getGrabCoinSetting(),
              this.getRewardWalletLog(),
              this.getRewardCheckInDay(),
              this.getChallengeByMember(),
              this.getMemberDetail(),
              this.getWOF(),
              this.getGrabCoinSetting(),
              this.getConfigurationStatus();
          },
          computed: {
            dateRangeText: {
              get: function () {
                var t = this.dates[0] ? this.dates[0] : "",
                  e = this.dates[1] ? this.dates[1] : "";
                return t + " - " + e;
              },
              set: function (t) {
                this.dates = [];
              },
            },
            rewardWalletLog: function () {
              return this.$store.state.reward.rewardWalletLog.data;
            },
            memberInfo: function () {
              return this.$store.state.member.info;
            },
            memberChallenge: function () {
              return this.$store.state.reward.memberChallenge;
            },
            rewardCheckInDay: function () {
              return this.$store.state.reward.checkInDay;
            },
            checkInDayResponse: function () {
              return this.$store.state.reward.checkInDayResponse.complete;
            },
            isLoggedIn: function () {
              return this.$store.state.member.isLoggedIn;
            },
            dailyCheckInPrizeList: function () {
              return this.$store.state.reward.dailyCheckInPrizeList;
            },
            grabCoin: function () {
              var t = this.$store.state.bonus.grabCoinSettings;
              return t;
            },
            configuration: function () {
              var t = this.$store.state.reward.configurationStatus;
              return (
                t.daily_check_in.enabled && (this.dailyRewardsDialogShow = !0),
                t
              );
            },
          },
          watch: {
            rewardWalletLog: function () {
              (this.transactionList =
                this.$store.state.reward.rewardWalletLog.data),
                (this.pagination =
                  this.$store.state.reward.rewardWalletLog.pagination);
            },
            dailyCheckInPrizeList: function () {
              this.dailyRewards =
                this.$store.state.reward.dailyCheckInPrizeList[0].daily_coins_given;
            },
            checkInDayResponse: function () {
              this.$store.state.reward.checkInDayResponse.complete &&
                this.checkInComplete(
                  this.$store.state.reward.checkInDayResponse
                );
            },
          },
          methods: {
            navigateToCardManiaPage: function () {
              this.$router.push({
                name: o["a"].CARD_MANIA,
                params: { lang: this.$route.params.lang },
              });
            },
            metaTag: function () {
              var t = window.location.href;
              n["f"].setCanonical(t);
              var e = t.split("/")[2],
                a = e.replace(/(^\w+:|^)\/\//, ""),
                s = window.location.pathname,
                r = s.replace(/\/(en-BD|bn-BD)/i, ""),
                i = "https://".concat(a).concat(r),
                o = "https://".concat(a, "/en-BD").concat(r),
                c = "https://".concat(a, "/bn-BD").concat(r);
              n["f"].setHreflangLinks(i),
                n["f"].setHreflangLinksen(o),
                n["f"].setHreflangLinksbd(c),
                n["f"].setTitle(
                  "".concat(n["e"].getMessage("meta.profile_rewards_title"))
                ),
                n["f"].setMetaTag(
                  "description",
                  "".concat(
                    n["e"].getMessage("meta.profile_rewards_description")
                  )
                );
            },
            getConfigurationStatus: function () {
              var t = { currency: n["f"].getCurrency() };
              this.$store.dispatch("".concat(d["g"]), { filter: t });
            },
            selectedDate: function () {
              if (this.dates[0] && this.dates[1]) {
                var t = this;
                setTimeout(function () {
                  t.dateMenu = !1;
                }, 500);
              }
            },
            checkInComplete: function (t) {
              if (t.success) {
                this.$parent.openAlert(
                  !0,
                  n["e"].getMessage("message.checkedIn")
                ),
                  this.getMemberDetail(),
                  this.getRewardCheckInDay(),
                  this.getRewardWalletLog(),
                  this.closeDailyRewardsDialog();
                var e =
                  Number(this.memberInfo.rewardBalance) +
                  Number(this.dailyRewards[this.dayOfWeekNumber - 1].coins);
                e >= 10 && (this.directToWOFDialogShow = !0);
              } else
                this.$parent.openAlert(!1, n["c"].getErrorCodeDesc(t.code)),
                  this.getRewardCheckInDay(),
                  this.getRewardWalletLog(),
                  this.closeDailyRewardsDialog();
              this.$store.dispatch("".concat(d["n"]));
            },
            getCoinsImg: function (t) {
              return this.rewardCheckInDay.includes(t.day)
                ? "/static/svg/coin_checked.svg"
                : t.day < this.dayOfWeekNumber && 0 != t.day
                ? "/static/svg/coin_unchecked.svg"
                : "/static/svg/coin.svg";
            },
            getMemberDetail: function () {
              this.isLoggedIn && this.$store.dispatch("".concat(c["g"]));
            },
            changePage: function (t) {
              (this.selectedPage = t), this.getRewardWalletLog();
            },
            filterListByDate: function () {
              this.getRewardWalletLog();
            },
            getRewardWalletLog: function () {
              var t = {
                size: 20,
                page: this.selectedPage,
                startTime: this.dates[0],
                endTime: this.dates[1],
              };
              this.$store.dispatch("".concat(d["l"]), { obj: t });
            },
            getChallengeByMember: function () {
              this.isLoggedIn && this.$store.dispatch("".concat(d["k"]));
            },
            getDailyCheckInPrizeList: function () {
              var t = { id: 2 };
              this.$store.dispatch("".concat(d["i"]), { obj: t });
            },
            getRewardCheckInDay: function () {
              this.$store.dispatch("".concat(d["h"]));
            },
            acceptChallenge: function () {
              var t = { id: 2 };
              this.$store.dispatch("".concat(d["f"]), { obj: t });
            },
            checkInDay: function () {
              var t = { checkinDay: this.dayOfWeekNumber };
              this.$store.dispatch("".concat(d["m"]), { obj: t });
            },
            changePasswordResponseCompleteDialog: function (t) {
              0 == t.code || t.success
                ? this.$parent.openAlert(
                    !0,
                    n["e"].getMessage("message.memberPasswordUpdated")
                  )
                : this.$parent.openAlert(!1, n["c"].getErrorCodeDesc(t.code));
            },
            clearFilter: function () {
              (this.dates = []), this.getRewardWalletLog();
            },
            closeDailyRewardsDialog: function () {
              this.dailyRewardsDialogShow = !1;
            },
            openDailyRewardsDialog: function () {
              2 != this.memberChallenge.fk_challenge_id &&
                this.acceptChallenge(),
                (this.dailyRewardsDialogShow = !0);
            },
            navigateWOFPage: function () {
              n["f"].getPlatform() == i["d"].DESKTOP
                ? this.$router.push({
                    name: o["a"].WOF,
                    params: { lang: this.$route.params.lang },
                  })
                : this.$router.push({
                    name: o["a"].MWOF,
                    params: { lang: this.$route.params.lang },
                  });
            },
            getWOF: function () {
              var t = n["f"].getCurrency(),
                e = { currency: t };
              this.$store.dispatch("".concat(l["f"]), { filter: e });
            },
            getGrabCoinSetting: function () {
              var t = { currency: n["f"].getCurrency() };
              this.$store.dispatch("".concat(u["n"]), { filter: t });
            },
            navigateToCoinPage: function () {
              this.$router.push({
                name: o["a"].GRAB_COIN,
                params: { type: "coin", lang: this.$route.params.lang },
              });
            },
          },
        },
        b = m,
        v = (a("6466"), a("2877")),
        p = a("6544"),
        h = a.n(p),
        g = a("8336"),
        _ = a("b0af"),
        f = a("99d9"),
        y = a("62ad"),
        C = a("8fea"),
        x = a("2e4b"),
        w = a("169a"),
        S = a("ce7e"),
        k = a("132d"),
        D = a("e449"),
        $ = a("891e"),
        T = a("0fd9"),
        R = a("8654"),
        P = Object(v["a"])(b, s, r, !1, null, null, null);
      e["default"] = P.exports;
      h()(P, {
        VBtn: g["a"],
        VCard: _["a"],
        VCardActions: f["a"],
        VCardTitle: f["d"],
        VCol: y["a"],
        VDataTable: C["a"],
        VDatePicker: x["a"],
        VDialog: w["a"],
        VDivider: S["a"],
        VIcon: k["a"],
        VMenu: D["a"],
        VPagination: $["a"],
        VRow: T["a"],
        VTextField: R["a"],
      });
    },
    6466: function (t, e, a) {
      "use strict";
      var s = a("6d0e"),
        r = a.n(s);
      r.a;
    },
    "6d0e": function (t, e, a) {},
    "70ac": function (t, e, a) {
      "use strict";
      var s = a("2bb7"),
        r = a.n(s);
      r.a;
    },
    "741d": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-snackbar",
                {
                  staticClass: "pa-0",
                  staticStyle: { "z-index": "1000 !important", top: "7%" },
                  attrs: {
                    light: "",
                    timeout: "-1",
                    width: "fit-content",
                    top: "",
                    centered: "",
                  },
                  model: {
                    value: t.alertShow,
                    callback: function (e) {
                      t.alertShow = e;
                    },
                    expression: "alertShow",
                  },
                },
                [
                  a(
                    "v-alert",
                    {
                      staticClass: "mb-0 pa-1",
                      class: t.alertSuccess
                        ? "profile-alert-success"
                        : "profile-alert-failed",
                      attrs: {
                        dismissible: "",
                        icon: t.alertSuccess
                          ? "mdi-check-circle-outline"
                          : "mdi-close",
                        light: "",
                        "close-icon": "mdi-close",
                      },
                      model: {
                        value: t.alertShow,
                        callback: function (e) {
                          t.alertShow = e;
                        },
                        expression: "alertShow",
                      },
                    },
                    [t._v("\n      " + t._s(t.alertMessage) + "\n    ")]
                  ),
                ],
                1
              ),
              t.$vuetify.breakpoint.lgAndUp
                ? a(
                    "v-row",
                    {
                      staticStyle: { "background-color": "white" },
                      attrs: { justify: "center", "no-gutters": "" },
                    },
                    [
                      a(
                        "v-col",
                        {
                          staticClass: "bank-profile-side-panel d-none",
                          attrs: { cols: "2", md: "2" },
                        },
                        [a("app-bank-and-profile-side-panel")],
                        1
                      ),
                      a(
                        "v-col",
                        { staticClass: "my-12", attrs: { cols: "10" } },
                        [a("router-view", { key: t.$route.path })],
                        1
                      ),
                    ],
                    1
                  )
                : a(
                    "v-row",
                    {
                      staticStyle: { "background-color": "white" },
                      attrs: { "no-gutters": "" },
                    },
                    [
                      a(
                        "v-col",
                        {
                          staticClass: "bank-profile-side-panel d-none",
                          attrs: { cols: "1" },
                        },
                        [a("app-bank-and-profile-side-panel")],
                        1
                      ),
                      a(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [a("router-view")],
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
        i = a("4260"),
        o = a("6578"),
        n = a("8ef4"),
        c = a("a5b7"),
        l = a("8ffa"),
        d = a("5fb2"),
        u = a("02a7"),
        m = a("3c88"),
        b = a("640a"),
        v = a("69e6"),
        p = a("fcd5"),
        h = a("bb2c"),
        g = a("82e2"),
        _ = a("e6fd"),
        f = {
          name: "profileLayout",
          metaInfo: {
            title: "".concat(i["e"].getMessage("meta.mmemberProfile_title")),
            titleTemplate: "%s",
            meta: [
              { charset: "utf-8" },
              {
                name: "description",
                content: "".concat(
                  i["e"].getMessage("meta.mmemberProfile_description")
                ),
              },
              {
                name: "keyword",
                content: "".concat(
                  i["e"].getMessage("meta.mmemberProfile_keyword")
                ),
              },
            ],
          },
          components: {
            AppBankAndProfileSidePanel: o["a"],
            AccountBank: n["a"],
            AccountDeposit: c["a"],
            AccountHistory: l["a"],
            AccountInbox: d["a"],
            AccountPassword: u["a"],
            AccountProfile: m["a"],
            AccountReward: b["a"],
            AccountVip: v["a"],
            AccountWithdrawal: p["a"],
            AppReferral: h["a"],
          },
          data: function () {
            return {
              openNav: !1,
              alertShow: !1,
              alertSuccess: !1,
              alertMessage: "",
            };
          },
          computed: {},
          watch: {
            alertShow: function () {
              this.alertShow ||
                ((this.alertSuccess = "1"), (this.alertMessage = "1"));
            },
          },
          created: function () {
            this.getMemberBankAccount(), this.getBank();
          },
          methods: {
            getBank: function () {
              var t = {
                bankName: "",
                bankCode: "",
                currency: i["f"].getCurrency(),
                Page: "",
                ItemsPerpage: "",
                orderBy: "",
                order: "",
              };
              this.$store.dispatch("".concat(g["c"]), { obj: t });
            },
            getMemberBankAccount: function () {
              var t = { memberCode: localStorage.getItem(_["f"].USERNAME) };
              this.$store.dispatch("".concat(g["g"]), { obj: t });
            },
            openAlert: function (t, e) {
              (this.alertSuccess = t),
                (this.alertMessage = e),
                (this.alertShow = !0);
            },
          },
        },
        y = f,
        C = (a("c092"), a("2877")),
        x = a("6544"),
        w = a.n(x),
        S = a("0798"),
        k = a("62ad"),
        D = a("0fd9"),
        $ = a("2db4"),
        T = Object(C["a"])(y, s, r, !1, null, null, null);
      e["default"] = T.exports;
      w()(T, { VAlert: S["a"], VCol: k["a"], VRow: D["a"], VSnackbar: $["a"] });
    },
    "8e2d": function (t, e, a) {
      "use strict";
      var s = a("ccba"),
        r = a.n(s);
      r.a;
    },
    b21e: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "profile-container" },
            [
              a("div", { staticClass: "profile-wrapper" }, [
                a("div", { staticClass: "avatar-wrapper" }, [
                  t.isPersonalProfileComplete
                    ? a("div", { staticClass: "avatar" })
                    : a("div", {
                        staticClass: "avatar",
                        on: {
                          click: function (e) {
                            return t.openEditDialog();
                          },
                        },
                      }),
                ]),
                a("div", { staticClass: "member-name mt-2" }, [
                  t._v(t._s(t.memberInfo.name)),
                ]),
                a(
                  "div",
                  { staticClass: "profile-detail" },
                  [
                    a(
                      "v-row",
                      { attrs: { "no-gutters": "", justify: "end" } },
                      [
                        a("div", { staticClass: "editBtn" }, [
                          t.isPersonalProfileComplete
                            ? t._e()
                            : a(
                                "div",
                                {
                                  staticClass: "px-2 warning-text",
                                  on: {
                                    click: function (e) {
                                      return t.openEditDialog();
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("label.editProfile")))]
                              ),
                        ]),
                      ]
                    ),
                    a("v-col", { staticClass: "no-gutters" }, [
                      a("div", { staticClass: "field-name" }, [
                        t._v(t._s(t.$t("field.username"))),
                      ]),
                      a("div", { staticClass: "orange--text" }, [
                        t._v(t._s(t.memberInfo.memberCode)),
                      ]),
                    ]),
                    a(
                      "v-col",
                      { staticClass: "no-gutters" },
                      [
                        a("div", { staticClass: "field-name" }, [
                          t._v(t._s(t.$t("field.phoneNumber"))),
                        ]),
                        t._l(t.memberInfo.mobileList, function (e, s) {
                          return a(
                            "v-row",
                            {
                              staticClass: "mobile-input",
                              attrs: {
                                "no-gutters": "",
                                justify: "space-between pa-0",
                                index: s,
                              },
                            },
                            [
                              0 == s
                                ? a(
                                    "v-col",
                                    {
                                      staticClass:
                                        "d-flex align-center justify-space-between remove-bord-btm",
                                      attrs: { cols: "12" },
                                    },
                                    [
                                      a(
                                        "div",
                                        { staticClass: "orange--text" },
                                        [
                                          t._v(
                                            t._s(t.mobilePrefix) +
                                              " " +
                                              t._s(t._f("maskInfo")(e.value))
                                          ),
                                        ]
                                      ),
                                      a("v-spacer"),
                                      e.is_verified
                                        ? a("div", [
                                            a(
                                              "p",
                                              {
                                                staticClass:
                                                  "px-2 verified-text d-flex",
                                              },
                                              [
                                                a("v-img", {
                                                  staticClass: "mr-2",
                                                  attrs: {
                                                    src: "/static/image/profile/personal-info-verified.svg",
                                                    width: "25",
                                                    height: "25",
                                                    contain: !0,
                                                  },
                                                }),
                                                t._v(
                                                  "\n                Verified\n              "
                                                ),
                                              ],
                                              1
                                            ),
                                          ])
                                        : a(
                                            "div",
                                            {
                                              on: {
                                                click: function (e) {
                                                  return t.openOTPDialog(s);
                                                },
                                              },
                                            },
                                            [
                                              a(
                                                "label",
                                                {
                                                  staticClass:
                                                    "px-2 warning-text d-flex",
                                                },
                                                [
                                                  t._v(
                                                    "\n                Verify OTP\n                "
                                                  ),
                                                  a("v-img", {
                                                    staticClass: "ml-2",
                                                    attrs: {
                                                      src: "/static/image/profile/personal-info-warning.svg",
                                                      width: "25",
                                                      height: "25",
                                                      contain: !0,
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              s > 0
                                ? a(
                                    "v-col",
                                    {
                                      staticClass:
                                        "d-flex align-center justify-space-between remove-bord-btm",
                                    },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticClass:
                                            "primary--text font-weight-bold",
                                          staticStyle: { "font-size": "12px" },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                s < 2
                                                  ? t.$t(
                                                      "label.secondaryNumber"
                                                    )
                                                  : t.$t("label.tertiaryNumber")
                                              ) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                      a("v-spacer"),
                                      a(
                                        "div",
                                        {
                                          on: {
                                            click: function (a) {
                                              !e.is_verified &&
                                                t.openOTPDialog(s);
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "p",
                                            {
                                              class: [
                                                "px-2 verified-text d-flex  mb-1",
                                                e.is_verified
                                                  ? "primary--text"
                                                  : "text-decoration-underline secondary--text",
                                              ],
                                              staticStyle: {
                                                "font-size": "12px",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(t.mobilePrefix) +
                                                  "\n                " +
                                                  t._s(
                                                    t._f("maskInfo")(e.value)
                                                  ) +
                                                  "\n                "
                                              ),
                                              e.is_verified
                                                ? a(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        color: "primary",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "mdi-check-circle-outline"
                                                      ),
                                                    ]
                                                  )
                                                : a(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        color: "secondary",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "mdi-information-outline"
                                                      ),
                                                    ]
                                                  ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ],
                            1
                          );
                        }),
                        t.memberInfo.mobileList.length < 3
                          ? a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  {
                                    staticClass: "pt-0",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          rounded: "",
                                          color: "primary",
                                          small: "",
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.verifyPrimaryNumber();
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              1 ==
                                                t.memberInfo.mobileList.length
                                                ? "Add Secondary Number"
                                                : "Add Tertiary Number"
                                            ) +
                                            "\n            "
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
                      ],
                      2
                    ),
                    a(
                      "v-col",
                      { staticClass: "no-gutters" },
                      [
                        a("div", { staticClass: "field-name" }, [
                          t._v(t._s(t.$t("field.email"))),
                        ]),
                        a(
                          "v-row",
                          {
                            attrs: {
                              "no-gutters": "",
                              justify: "space-between",
                            },
                          },
                          [
                            a("label", { staticClass: "orange--text" }, [
                              t._v(t._s(t.memberInfo.email.value)),
                            ]),
                            a("div", {
                              staticClass: "d-flex align-center",
                              on: {
                                click: function (e) {
                                  return t.openEditDialog();
                                },
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                    a(
                      "v-col",
                      { staticClass: "no-gutters" },
                      [
                        a("div", { staticClass: "field-name" }, [
                          t._v(t._s(t.$t("field.dateOfBirth"))),
                        ]),
                        a(
                          "v-row",
                          {
                            attrs: {
                              "no-gutters": "",
                              justify: "space-between",
                            },
                          },
                          [
                            a("div", { staticClass: "orange--text" }, [
                              t._v(
                                t._s(
                                  t._f("shortDate")(t.memberInfo.dateOfBirth)
                                )
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    a("v-col", { staticClass: "no-gutters" }, [
                      a("div", { staticClass: "field-name" }, [
                        t._v(t._s(t.$t("field.currency"))),
                      ]),
                      a("div", [t._v(t._s(t.memberInfo.currency))]),
                    ]),
                  ],
                  1
                ),
              ]),
              a(
                "app-dialog",
                {
                  ref: "personalEditDialog",
                  attrs: {
                    dialogShow: t.editDialogShow,
                    "max-width": 400,
                    title: t.$t("label.editProfile"),
                    isAuth: !1,
                    header_title: "editProfile",
                    closeAction: this.closeEditDialog,
                  },
                },
                [
                  a("app-personal-edit", {
                    attrs: {
                      personalInfo: t.personalInfo,
                      closeAction: this.closeEditDialog,
                    },
                  }),
                ],
                1
              ),
              a(
                "app-dialog",
                {
                  ref: "addNewNumberOtpDialog",
                  attrs: {
                    title: t.$t("label.addNewNumber"),
                    "dialog-show": t.addNewNumberDialog,
                    closeAction: this.closeAddNumberDialog,
                    "max-width": 400,
                  },
                },
                [
                  a(
                    "v-form",
                    { ref: "addNumberForm" },
                    [
                      [
                        a("app-form-field", {
                          staticClass: "otpPhoneNo pb-2",
                          attrs: {
                            enabledLabel: !0,
                            label: t.$t("field.phoneNumber"),
                            readonly: !t.newContactNumber.is_new_number,
                            rules: t.validator.mobileNumberRules(
                              t.defaultLanguage
                            ),
                            prefix: t.mobilePrefix,
                          },
                          model: {
                            value: t.newContactNumber.mobile,
                            callback: function (e) {
                              t.$set(
                                t.newContactNumber,
                                "mobile",
                                "string" === typeof e ? e.trim() : e
                              );
                            },
                            expression: "newContactNumber.mobile",
                          },
                        }),
                        a(
                          "v-row",
                          {
                            staticClass: "d-flex justify-center align-center",
                            attrs: { "no-gutters": "" },
                          },
                          [
                            a("app-button", {
                              staticClass: "otpSubmitButton white--text",
                              attrs: {
                                action: this.AddNewSubContact,
                                title: t.$t("button.submit"),
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                    ],
                    2
                  ),
                ],
                1
              ),
              a(
                "app-dialog",
                {
                  ref: "personalOTPDialog",
                  attrs: {
                    dialogShow: t.otpDialogShow,
                    closeAction: this.closeOTPDialog,
                    "max-width": 400,
                    title: t.$t("label.verifyPhoneNo"),
                  },
                },
                [
                  a(
                    "v-form",
                    { ref: "otpForm" },
                    [
                      [
                        a("captcha", {
                          ref: "captchaCode",
                          attrs: {
                            isOptional: !0,
                            errorMsg: t.captchaErrorMsg,
                            rules: t.validator.captchaRules(),
                          },
                          model: {
                            value: t.captcha,
                            callback: function (e) {
                              t.captcha = "string" === typeof e ? e.trim() : e;
                            },
                            expression: "captcha",
                          },
                        }),
                        a("app-form-field", {
                          staticClass: "otpPhoneNo pb-2",
                          attrs: {
                            enabledLabel: !0,
                            label: t.$t("field.firstNumber"),
                            readonly: !t.newContactNumber.is_new_number,
                            rules: t.validator.mobileNumberRules(
                              t.defaultLanguage
                            ),
                            prefix: t.mobilePrefix,
                          },
                          model: {
                            value: this.memberInfo.mobileList[0].value,
                            callback: function (e) {
                              t.$set(
                                this.memberInfo.mobileList[0],
                                "value",
                                "string" === typeof e ? e.trim() : e
                              );
                            },
                            expression: "this.memberInfo.mobileList[0].value",
                          },
                        }),
                        a(
                          "v-row",
                          { staticClass: "pb-5", attrs: { "no-gutters": "" } },
                          [
                            a("v-col", { attrs: { cols: "5" } }, [
                              a(
                                "div",
                                { staticClass: "mr-2" },
                                [
                                  a(
                                    "v-btn",
                                    {
                                      staticClass:
                                        "otp-button theme-button font-weight-bold white--text mr-2",
                                      attrs: {
                                        height: "auto",
                                        disabled:
                                          this.$store.state.member
                                            .smsVerificationSent
                                            .countDownTimer > 0,
                                        color: "secondary",
                                        depressed: "",
                                      },
                                      on: {
                                        click: this.requestSmsVerificationCode,
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(
                                            this.$store.state.member
                                              .smsVerificationSent
                                              .countDownTimer > 0
                                              ? t.formatSeconds(
                                                  this.$store.state.member
                                                    .smsVerificationSent
                                                    .countDownTimer
                                                )
                                              : t.$t("button.requestOtp")
                                          ) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            a(
                              "v-col",
                              [
                                a("app-form-field", {
                                  attrs: {
                                    enabledLabel: !1,
                                    placeholder: t.$t("fieldHint.fillUpHere"),
                                    rules: t.validator.requiredRules(),
                                    type: "text",
                                  },
                                  model: {
                                    value: t.verificationCode,
                                    callback: function (e) {
                                      t.verificationCode =
                                        "string" === typeof e ? e.trim() : e;
                                    },
                                    expression: "verificationCode",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          "v-row",
                          {
                            staticClass: "d-flex justify-center align-center",
                            attrs: { "no-gutters": "" },
                          },
                          [
                            a("app-button", {
                              staticClass: "otpSubmitButton white--text",
                              attrs: {
                                disabled: !t.verificationCode,
                                action: t.newContactNumber.is_new_number
                                  ? this.verifyAndAddNewContact
                                  : this.verifySmsCode,
                                title: t.$t("button.submit"),
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                    ],
                    2
                  ),
                ],
                1
              ),
              a(
                "app-dialog",
                {
                  ref: "otpResultDialog",
                  attrs: {
                    dialogShow: t.otpResultDialogShow,
                    closeAction: this.closeOtpResultDialog,
                    "max-width": 350,
                    title: t.$t("label.OTPResult"),
                  },
                },
                [
                  a("label", [
                    t._v(
                      t._s(
                        t.smsVerificationResult
                          ? "Success"
                          : "Failed, try again"
                      )
                    ),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        r = [],
        i =
          (a("99af"),
          a("7db0"),
          a("277d"),
          a("accc"),
          a("0d03"),
          a("b0c0"),
          a("d3b7"),
          a("ac1f"),
          a("25f0"),
          a("5319"),
          a("1276"),
          a("4795"),
          a("96cf"),
          a("1da1")),
        o = a("15a4"),
        n = a("4260"),
        c = a("e6fd"),
        l = a("bb72"),
        d = a("e6e5"),
        u = a("0cad"),
        m = a("4139"),
        b = a("2769"),
        v = a.n(b),
        p = a("e7f8"),
        h = {
          name: "myProfile",
          components: {
            Captcha: p["a"],
            AccountEdit: u["a"],
            AppPersonalEdit: m["a"],
          },
          data: function () {
            return {
              is_add_new_number: !1,
              addNewNumberDialog: !1,
              defaultLanguage: c["g"].DEFAULT_LANGUAGE,
              newContactNumber: { mobile: "", is_new_number: !1 },
              phonePriority: 0,
              verificationCode: "",
              language: n["f"].getLanguage(),
              validator: n["d"],
              dateOfBirthMaxDate: new Date(
                new Date().setFullYear(new Date().getFullYear() - 18)
              )
                .toISOString()
                .substr(0, 10),
              dateOfBirthMenu: !1,
              shared: c["g"],
              isPersonalProfileComplete: !1,
              tempMemberInfo: { email: "", name: "" },
              profileTab: [
                { key: "account", link: o["a"].PROFILE },
                { key: "personal", link: o["a"].PERSONAL },
              ],
              personalInfoObj: {
                gender: "",
                dateOfBirth: "",
                country: "",
                province: "",
                postcode: "",
                nationality: "",
                address: "",
              },
              editDialogShow: !1,
              otpDialogShow: !1,
              otpResultDialogShow: !1,
              mobileNumberPrefixList: [
                { text: "+91", value: "INR" },
                { text: "+880", value: "BDT" },
              ],
              personalInfo: {
                memberCode: "",
                dateOfBirth: "",
                mobile: { value: "" },
                email: null,
                name: "",
                currency: "",
              },
              captcha: "",
              captchaErrorMsg: void 0,
            };
          },
          created: function () {
            this.metaTag(), this.getMemberDetail(), this.getCountry();
          },
          computed: {
            smsOTPErrorMsg: function () {
              return this.$store.state.member.smsVerificationSent.code;
            },
            smsCountdownTimer: function () {
              return this.$store.state.member.smsVerificationSent.countDownTimer.toString();
            },
            smsVerificationSent: function () {
              return this.$store.state.member.smsVerificationSent.success;
            },
            smsVerificationResult: function () {
              return this.$store.state.member.smsVerificationResult.loaded;
            },
            memberInfo: function () {
              return this.$store.state.member.info;
            },
            updateDetailResponseComplete: function () {
              return this.$store.state.member.updateDetailResponse.complete;
            },
            addNewContactNumberResponse: function () {
              return this.$store.state.member.addNewNumberContact.complete;
            },
            country: function () {
              return this.$store.state.lookup.country;
            },
            province: function () {
              return this.$store.state.lookup.province;
            },
            mobilePrefix: function () {
              var t = this,
                e = v()(this.mobileNumberPrefixList, function (e) {
                  return e.value == t.memberInfo.currency;
                });
              return e ? e.text : "";
            },
            cPhonePriority: function () {
              var t = this.phonePriority,
                e = this.memberInfo.mobileList;
              if (Array.isArray(e) && e.length > t)
                return (this.newContactNumber.mobile = e[t].value), e[t].value;
            },
          },
          watch: {
            smsOTPErrorMsg: function () {
              var t = this.$store.state.member.smsVerificationSent.code;
              -1 == t
                ? this.$parent.openAlert(
                    !1,
                    n["e"].getMessage("fieldErrorMessage.invalidCaptchaCode")
                  )
                : -3 == t
                ? this.$parent.openAlert(
                    !1,
                    n["e"].getMessage("fieldErrorMessage.tooManyRequest")
                  )
                : this.errorDialog(t);
            },
            smsVerificationResult: function () {
              var t = this.$store.state.member.smsVerificationResult;
              if (t.loaded) {
                if (t.success) {
                  this.$parent.openAlert(!0, "Phone verified successfully"),
                    (this.otpDialogShow = !1),
                    this.is_add_new_number &&
                      ((this.newContactNumber.is_new_number = !0),
                      (this.newContactNumber.mobile = ""),
                      (this.addNewNumberDialog = !0),
                      (this.is_add_new_number = !1));
                  var e = this.phonePriority;
                  this.$store.dispatch("".concat(l["m"]), e);
                } else
                  -1 == t.code
                    ? this.$parent.openAlert(
                        t.success,
                        n["e"].getMessage(
                          "fieldErrorMessage.invalidCaptchaCode"
                        )
                      )
                    : -3 == t.code
                    ? this.$parent.openAlert(
                        t.success,
                        n["e"].getMessage("fieldErrorMessage.tooManyRequest")
                      )
                    : this.$parent.openAlert(
                        !0,
                        "Failed to verify (".concat(
                          t.message,
                          "). please try again"
                        )
                      );
                this.$store.dispatch("".concat(l["K"]));
              }
            },
            memberInfo: function () {
              var t = this.$store.state.member.info,
                e = t.mobileList[0].value;
              return (
                (this.personalInfo = {
                  memberCode: t.memberCode,
                  dateOfBirth: t.dateOfBirth,
                  mobile: { value: e },
                  name: t.name,
                  currency: t.currency,
                  email: t.email,
                }),
                t.dateOfBirth &&
                  t.name &&
                  t.email.value &&
                  (this.isPersonalProfileComplete = !0),
                t
              );
            },
            dateOfBirthMenu: function (t) {
              var e = this;
              t &&
                setTimeout(function () {
                  return (e.$refs.dateOfBirthPicker.activePicker = "YEAR");
                });
            },
            updateDetailResponseComplete: function () {
              var t = this.$store.state.member.updateDetailResponse;
              t.complete &&
                (this.updateDetailResponseCompleteDialog(t),
                this.$store.dispatch("".concat(l["G"])));
            },
            addNewContactNumberResponse: function () {
              if (this.$store.state.member.addNewNumberContact.complete) {
                if (this.$store.state.member.addNewNumberContact.success) {
                  this.$parent.openAlert(!0, "Phone verified successfully"),
                    (this.otpDialogShow = !1),
                    (this.addNewNumberDialog = !1);
                  var t = this.phonePriority;
                  this.getMemberDetail(),
                    this.$store.dispatch("".concat(l["m"]), t);
                } else
                  this.$parent.openAlert(
                    !1,
                    n["c"].getErrorCodeDesc(
                      this.$store.state.member.addNewNumberContact.code
                    )
                  );
                this.$store.dispatch("".concat(l["r"])),
                  this.$store.dispatch("".concat(l["K"])),
                  this.$store.dispatch("".concat(l["F"]));
              }
            },
          },
          methods: {
            metaTag: function () {
              var t = window.location.href;
              n["f"].setCanonical(t);
              var e = t.split("/")[2],
                a = e.replace(/(^\w+:|^)\/\//, ""),
                s = window.location.pathname,
                r = s.replace(/\/(en-BD|bn-BD)/i, ""),
                i = "https://".concat(a).concat(r),
                o = "https://".concat(a, "/en-BD").concat(r),
                c = "https://".concat(a, "/bn-BD").concat(r);
              n["f"].setHreflangLinks(i),
                n["f"].setHreflangLinksen(o),
                n["f"].setHreflangLinksbd(c);
            },
            verifyPrimaryNumber: function () {
              (this.phonePriority = 0),
                (this.newContactNumber.is_new_number = !1),
                (this.newContactNumber.mobile =
                  this.memberInfo.mobileList[0].value),
                (this.otpDialogShow = !0),
                (this.is_add_new_number = !0);
            },
            openAddNewNumberDialog: function (t) {
              (this.phonePriority = t),
                (this.newContactNumber.is_new_number = !0),
                (this.newContactNumber.mobile = ""),
                (this.otpDialogShow = !0);
            },
            errorDialog: function (t) {
              var e = this;
              if (0 != t) {
                var a = this.initializePageDialogProperty();
                (a.title = n["e"].getMessage("label.system")),
                  (a.dialogXButton = null);
                var s = n["c"].getErrorCodeDesc(t);
                if ("3.65" == t) {
                  var r = this.$store.state.member.smsVerificationSent.message;
                  if (null != r) {
                    var i = r.replaceAll(" ", "").split("|");
                    if (
                      "undefined" != typeof i &&
                      null != i &&
                      2 === i.length
                    ) {
                      var o = i[1];
                      s = n["c"].getErrorCodeDesc(t, o);
                    }
                  }
                }
                "3.32.6" == t &&
                  (s +=
                    ". " + n["e"].getMessage("label.contactCsChangePhoneNo")),
                  a.message.push(s),
                  a.button.push({
                    title: n["e"].getMessage("label.close"),
                    action: function () {
                      return e.closePageDialog();
                    },
                  }),
                  this.openPageDialog(a);
              }
            },
            initializePageDialogProperty: function () {
              var t = {
                title: n["e"].getMessage("label.system"),
                dialogXButton: this.closePageDialog,
                messageTitle: "",
                message: [],
                button: [],
              };
              return t;
            },
            openPageDialog: function (t) {
              this.$eventHub.$emit("open-page-dialog", t);
            },
            closePageDialog: function () {
              this.$store.dispatch("".concat(l["F"])),
                this.$eventHub.$emit("close-page-dialog", !0);
            },
            closeOtpResultDialog: function () {
              this.otpResultDialogShow = !1;
            },
            formatSeconds: function (t) {
              var e = function (t) {
                  return t < 10 ? "0".concat(t) : t;
                },
                a = Math.floor(t / 3600),
                s = Math.floor(t / 60) - 60 * a,
                r = Math.floor(t - 3600 * a - 60 * s);
              return "".concat(e(s), ":").concat(e(r));
            },
            AddNewSubContact: function () {
              var t = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function e() {
                  var a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.$refs.addNumberForm.validate() &&
                            ((a = {
                              verification_code: "",
                              mobileNumber: t.newContactNumber.mobile,
                              required_only_primary_verified: !0,
                            }),
                            t.$store.dispatch("".concat(l["a"]), {
                              filter: a,
                            }));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            verifyAndAddNewContact: function () {
              var t = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function e() {
                  var a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.$refs.otpForm.validate() &&
                            ((a = {
                              verification_code: t.verificationCode,
                              mobileNumber: t.newContactNumber.mobile,
                              required_only_primary_verified: !0,
                            }),
                            t.$store.dispatch("".concat(l["a"]), {
                              filter: a,
                            }));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            verifySmsCode: function () {
              var t = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.memberInfo.mobileList[0].value),
                            (s = {
                              verificationCode: t.verificationCode,
                              mobileNumber: a,
                              captchaId: t.$refs.captchaCode.$refs.code.id,
                              captchaCode: t.captcha,
                            }),
                            t.$store.dispatch("".concat(l["N"]), {
                              registerObj: s,
                            });
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            requestSmsVerificationCode: function () {
              this.$store.state.member.smsVerificationSent.success = !1;
              var t = this.memberInfo.mobileList[0].value;
              if ("" != this.captcha) {
                var e = {};
                (e.domain = n["f"].getHostname()),
                  (e.language = n["f"].getLanguage()),
                  (e.currency = this.personalInfo.currency),
                  (e.memberCode = this.personalInfo.memberCode),
                  (e.mobileNumber = t),
                  (e.request_otp = !0),
                  (e.captchaId = this.$refs.captchaCode.$refs.code.id),
                  (e.captchaCode = this.captcha),
                  this.$store.dispatch("".concat(l["M"]), { registerObj: e });
              }
            },
            openEditDialog: function () {
              console.log("open", this.memberInfo), (this.editDialogShow = !0);
            },
            closeEditDialog: function () {
              this.editDialogShow = !1;
            },
            openOTPDialog: function (t) {
              this.phonePriority = t;
              var e = this.phonePriority,
                a = this.memberInfo.mobileList;
              Array.isArray(a) &&
                a.length > e &&
                (this.newContactNumber.mobile = a[e].value),
                (this.otpDialogShow = !0);
            },
            closeAddNumberDialog: function () {
              this.addNewNumberDialog = !1;
            },
            closeOTPDialog: function () {
              this.otpDialogShow = !1;
            },
            getMemberDetail: function () {
              this.$store.dispatch("".concat(l["g"]));
            },
            getCountry: function () {
              var t = { language: n["f"].getCookie("language") + "-cn" };
              this.$store.dispatch("".concat(d["a"]), { countryLookupObj: t });
            },
            getCountryProvince: function (t) {
              var e = {
                language: n["f"].getCookie("language") + "-cn",
                countryCode: t,
              };
              this.$store.dispatch("".concat(d["b"]), { provinceLookupObj: e });
            },
            countryDisplayText: function (t) {
              return t.displayText;
            },
            provinceDisplayText: function (t) {
              return t.displayText;
            },
            updatePersonalInfo: function () {
              if (this.$refs.profileForm.validate()) {
                var t = this.personalInfoObj,
                  e = this.country.find(function (e) {
                    return e.value == t.country;
                  }).displayText,
                  a = this.country.find(function (e) {
                    return e.value == t.nationality;
                  }).displayText;
                (t.country = e),
                  (t.nationality = a),
                  this.$store.dispatch("".concat(l["P"]), { memberObj: t });
              }
            },
            updateDetailResponseCompleteDialog: function (t) {
              0 == t.code || t.success
                ? this.$parent.openAlert(
                    !0,
                    n["e"].getMessage("message.memberPersonalDetailUpdated")
                  )
                : this.$parent.openAlert(!1, n["c"].getErrorCodeDesc(t.code));
            },
            openLiveChat: function () {
              this.$parent.$parent.openLiveChat();
            },
          },
        },
        g = h,
        _ = (a("8e2d"), a("2877")),
        f = a("6544"),
        y = a.n(f),
        C = a("8336"),
        x = a("62ad"),
        w = a("4bd4"),
        S = a("132d"),
        k = a("adda"),
        D = a("0fd9"),
        $ = a("2fa4"),
        T = Object(_["a"])(g, s, r, !1, null, null, null);
      e["default"] = T.exports;
      y()(T, {
        VBtn: C["a"],
        VCol: x["a"],
        VForm: w["a"],
        VIcon: S["a"],
        VImg: k["a"],
        VRow: D["a"],
        VSpacer: $["a"],
      });
    },
    c092: function (t, e, a) {
      "use strict";
      var s = a("2d92"),
        r = a.n(s);
      r.a;
    },
    c4bd: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-row",
                {
                  staticClass: "bank-profile-container-row",
                  attrs: { justify: "center" },
                },
                [
                  a(
                    "v-col",
                    {
                      staticClass: "bank-profile-side-panel",
                      attrs: { cols: "2" },
                    },
                    [a("app-bank-and-profile-side-panel")],
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
        i = a("6578"),
        o = {
          name: "profileMenu",
          components: { AppBankAndProfileSidePanel: i["a"] },
          data: function () {
            return {};
          },
          computed: {},
          watch: {},
          created: function () {},
          methods: {},
        },
        n = o,
        c = (a("70ac"), a("2877")),
        l = a("6544"),
        d = a.n(l),
        u = a("62ad"),
        m = a("0fd9"),
        b = Object(c["a"])(n, s, r, !1, null, null, null);
      e["default"] = b.exports;
      d()(b, { VCol: u["a"], VRow: m["a"] });
    },
    ccba: function (t, e, a) {},
    d1c9: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "table-wrapper" },
            [
              a(
                "v-card",
                { staticClass: "elevation-0 my-2 search-container" },
                [
                  ["DEPOSIT", "WITHDRAWAL"].includes(t.selectedTab)
                    ? a(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          a(
                            "v-row",
                            {
                              staticClass: "cols",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "DEPOSIT" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("DEPOSIT", !0);
                                    },
                                  },
                                },
                                [a("span", [t._v(t._s(t.$t("label.deposit")))])]
                              ),
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "WITHDRAWAL" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("WITHDRAWAL", !0);
                                    },
                                  },
                                },
                                [
                                  a("span", [
                                    t._v(t._s(t.$t("label.withdrawal"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  ["REBATE", "BONUS"].includes(t.selectedTab)
                    ? a(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          a(
                            "v-row",
                            {
                              staticClass: "cols",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "REBATE" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("REBATE", !0);
                                    },
                                  },
                                },
                                [a("span", [t._v(t._s(t.$t("button.rebate")))])]
                              ),
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "BONUS" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("BONUS", !0);
                                    },
                                  },
                                },
                                [a("span", [t._v(t._s(t.$t("label.bonus")))])]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  ["TRANSFER"].includes(t.selectedTab)
                    ? a(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          a(
                            "v-row",
                            {
                              staticClass: "cols",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "TRANSFER" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("TRANSFER", !0);
                                    },
                                  },
                                },
                                [
                                  a("span", [
                                    t._v(t._s(t.$t("label.transfer"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  ["REDEMPTION"].includes(t.selectedTab)
                    ? a(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          a(
                            "v-row",
                            {
                              staticClass: "cols",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              a(
                                "v-btn",
                                {
                                  staticClass: "history-tab",
                                  attrs: {
                                    color:
                                      "REDEMPTION" == t.selectedTab
                                        ? "primary"
                                        : "outlined",
                                    depressed: "",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.onChangeTab("REDEMPTION", !0);
                                    },
                                  },
                                },
                                [
                                  a("span", [
                                    t._v(t._s(t.$t("label.redemption"))),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  ["REDEMPTION"].includes(t.selectedTab)
                    ? t._e()
                    : a(
                        "v-row",
                        { staticClass: "pa-2", attrs: { "no-gutters": "" } },
                        [
                          a(
                            "v-col",
                            { attrs: { cols: "12", sm: "4", md: "3" } },
                            [
                              a(
                                "v-menu",
                                {
                                  ref: "menu",
                                  attrs: {
                                    "close-on-content-click": !1,
                                    "offset-y": "",
                                    transition: "scale-transition",
                                  },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function (e) {
                                          var s = e.on;
                                          return [
                                            a(
                                              "v-text-field",
                                              t._g(
                                                {
                                                  staticClass:
                                                    "date-search elevation-0",
                                                  attrs: {
                                                    clearable: "",
                                                    outlined: "",
                                                    "hide-details": "true",
                                                    "append-icon":
                                                      "mdi-magnify",
                                                    hint: "search",
                                                    dense: !0,
                                                  },
                                                  on: {
                                                    "click:clear": function (
                                                      e
                                                    ) {
                                                      return t.clearFilter();
                                                    },
                                                  },
                                                  model: {
                                                    value: t.dateRangeText,
                                                    callback: function (e) {
                                                      t.dateRangeText = e;
                                                    },
                                                    expression: "dateRangeText",
                                                  },
                                                },
                                                s
                                              )
                                            ),
                                          ];
                                        },
                                      },
                                    ],
                                    null,
                                    !1,
                                    54359241
                                  ),
                                  model: {
                                    value: t.dateMenu,
                                    callback: function (e) {
                                      t.dateMenu = e;
                                    },
                                    expression: "dateMenu",
                                  },
                                },
                                [
                                  a("v-date-picker", {
                                    attrs: {
                                      color: "buttonPrimary",
                                      "no-title": "",
                                      range: "",
                                    },
                                    on: {
                                      change: function (e) {
                                        return t.filterListByDate();
                                      },
                                      input: function (e) {
                                        return t.selectedDate();
                                      },
                                    },
                                    model: {
                                      value: t.dates,
                                      callback: function (e) {
                                        t.dates = e;
                                      },
                                      expression: "dates",
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
                      ),
                  "REBATE" == t.selectedTab
                    ? a(
                        "v-col",
                        {
                          staticClass: "pl-2 pb-2 no-gutters",
                          attrs: { cols: "1" },
                        },
                        [
                          t.totalRebate.unclaimed > 0
                            ? a(
                                "v-btn",
                                {
                                  staticClass:
                                    "primary-button text-capitalize pa-2 font-weight-bold",
                                  attrs: {
                                    height: "auto",
                                    depressed: "",
                                    color: "outlined",
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.claimRebate();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(t.$t("label.claim")) +
                                      "\n      "
                                  ),
                                ]
                              )
                            : t._e(),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
              a(
                "div",
                [
                  t.$vuetify.breakpoint.mdAndUp
                    ? a(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          "TRANSFER" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.transferHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.created_at
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.from_wallet) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.to_wallet) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    "FAILED" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "SUCCESS" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "PENDING" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "FAILED" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.fail"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "SUCCESS" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.success"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "PENDING" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.pending"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      1606489998
                                    ),
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          "REBATE" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a(
                                    "v-row",
                                    {
                                      staticClass: "pa-3",
                                      attrs: { "no-gutters": "" },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "pr-2",
                                          attrs: { cols: "12" },
                                        },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "referral-table-header subtitle-1",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "label.totalRebateUnclaimed"
                                                  )
                                                ) +
                                                  t._s(
                                                    t._f("currency")(
                                                      t.totalRebate.unclaimed,
                                                      t.currentCurrency
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
                                          staticClass: "pr-2",
                                          attrs: { cols: "12" },
                                        },
                                        [
                                          a(
                                            "label",
                                            {
                                              staticClass:
                                                "referral-table-header subtitle-1",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t("label.totalRebateAmt")
                                                )
                                              ),
                                            ]
                                          ),
                                          a("label", [
                                            t._v(
                                              t._s(
                                                t._f("currency")(
                                                  t.totalRebate.total,
                                                  t.currentCurrency
                                                )
                                              )
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.rebateHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.bet_time_end
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.valid_bet_amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.vip_percentage) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.rebate_amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.provider_code) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.game_type) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          1 ==
                                                            e.fk_rebate_status_id
                                                            ? t.$t(
                                                                "label.claimed"
                                                              )
                                                            : t.$t(
                                                                "label.unclaimed"
                                                              )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      3935004992
                                    ),
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          "DEPOSIT" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.depositHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.date
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.method) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.bonus_name
                                                            ? e.bonus_name
                                                            : "-"
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    "Rejected and Complete" ==
                                                    e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "Approved and completed" ==
                                                    e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "Rejected and Complete" !=
                                                      e.status &&
                                                    "Approved and completed" !=
                                                      e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "Rejected and Complete" ==
                                                    e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.fail"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Approved and completed" ==
                                                    e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.success"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Rejected and Complete" !=
                                                      e.status &&
                                                    "Approved and completed" !=
                                                      e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.pending"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      1787482769
                                    ),
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          "WITHDRAWAL" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.withdrawalHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.date
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.method) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    "Rejected and Complete" ==
                                                    e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : "Approved and completed" ==
                                                        e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        ),
                                                    "Rejected and Complete" ==
                                                    e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.fail"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : "Approved and completed" ==
                                                        e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.success"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "transactionStatus.pending"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                  ],
                                                  1
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f(
                                                            "emptyDataFormat"
                                                          )(e.remarks)
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      1189556940
                                    ),
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          "BONUS" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.bonusHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.bonus.created_at
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.bonus.name) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.ref_id) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("currency")(
                                                            e.bonus_given_amount,
                                                            t.currentCurrency
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    "Canceled" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "Success" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "Pending" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "Pending CS" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "Canceled" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.canceled"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Success" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.success"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Pending" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.pending"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Pending CS" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.pendingCustomerService"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      4038011782
                                    ),
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          "REDEMPTION" == t.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  a("v-data-table", {
                                    staticClass: "elevation-0 history-table",
                                    attrs: {
                                      headers: t.redeemHeaders,
                                      items: t.transactionList,
                                      "hide-default-footer": !0,
                                      "hide-default-header": "",
                                      "items-per-page": -1,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "header",
                                          fn: function (e) {
                                            var s = e.props;
                                            return [
                                              a(
                                                "tr",
                                                t._l(s.headers, function (e) {
                                                  return a(
                                                    "th",
                                                    {
                                                      key: e.text,
                                                      staticClass:
                                                        "history-table-header text-start",
                                                    },
                                                    [
                                                      "dateSearch" !== e.text
                                                        ? a("span", [
                                                            t._v(
                                                              "\n                  " +
                                                                t._s(
                                                                  t.$t(
                                                                    "label." +
                                                                      e.text
                                                                  )
                                                                ) +
                                                                "\n                  "
                                                            ),
                                                            e.sortable
                                                              ? a(
                                                                  "span",
                                                                  [
                                                                    "asc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-down"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                    "desc" ==
                                                                    e.sortBy
                                                                      ? a(
                                                                          "v-icon",
                                                                          {
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  a
                                                                                ) {
                                                                                  return t.sortTableList(
                                                                                    e
                                                                                  );
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              "mdi-chevron-up"
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t._e(),
                                                                  ],
                                                                  1
                                                                )
                                                              : t._e(),
                                                          ])
                                                        : t._e(),
                                                    ]
                                                  );
                                                }),
                                                0
                                              ),
                                            ];
                                          },
                                        },
                                        {
                                          key: "body",
                                          fn: function (e) {
                                            var s = e.items;
                                            return t._l(s, function (e, s) {
                                              return a("tr", { key: s }, [
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t._f("longDate")(
                                                            e.created_at
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reward_item_name
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reward_category_name
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reward_variation
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.reciever_name) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reciever_mobile
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reciever_address_1
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          e.reciever_address_2
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.city) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.postcode) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.tracking) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.trx_id) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass: "text-start",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(e.updated_at) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "text-start text-capitalize",
                                                    staticStyle: {
                                                      "border-bottom":
                                                        "thin solid rgba(0, 0, 0, 0.12)",
                                                      padding: "10px 16px",
                                                    },
                                                  },
                                                  [
                                                    "CANCELED" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "REJECTED" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "red",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-close-circle-outline"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "SUCCESS" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "APPROVED" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "green",
                                                              small: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "mdi-checkbox-marked-circle"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    "PENDING" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "Pending CS" == e.status
                                                      ? a(
                                                          "v-icon",
                                                          {
                                                            staticClass: "mb-1",
                                                            attrs: {
                                                              color: "yellow",
                                                              small: "",
                                                            },
                                                          },
                                                          [t._v("mdi-clock")]
                                                        )
                                                      : t._e(),
                                                    "CANCELED" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.canceled"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "REJECTED" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.rejected"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "SUCCESS" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.success"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "APPROVED" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.approved"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "PENDING" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.pending"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    "Pending CS" == e.status
                                                      ? a("span", [
                                                          t._v(
                                                            t._s(
                                                              t.$t(
                                                                "bonusStatus.pendingCustomerService"
                                                              )
                                                            )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                              ]);
                                            });
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      1707001687
                                    ),
                                  }),
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
                          "DEPOSIT" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(
                                              t.depositHeaders,
                                              function (e) {
                                                return a(
                                                  "v-col",
                                                  {
                                                    key: e.text,
                                                    attrs: { cols: "12" },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.$t(
                                                            "label." + e.text
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(e.date)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.method) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  a("label", [
                                                    t._v(
                                                      t._s(
                                                        e.bonus_name
                                                          ? e.bonus_name
                                                          : "-"
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  "Rejected and Complete" ==
                                                  e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.fail"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Approved and completed" ==
                                                  e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.success"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Rejected and Complete" !=
                                                    e.status &&
                                                  "Approved and completed" !=
                                                    e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.pending"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Rejected and Complete" ==
                                                  e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "Approved and completed" ==
                                                  e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "Rejected and Complete" !=
                                                    e.status &&
                                                  "Approved and completed" !=
                                                    e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                          "WITHDRAWAL" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(
                                              t.withdrawalHeaders,
                                              function (e) {
                                                return a(
                                                  "v-col",
                                                  {
                                                    key: e.text,
                                                    attrs: { cols: "12" },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.$t(
                                                            "label." + e.text
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(e.date)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.method) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  "Rejected and Complete" ==
                                                  e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.fail"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : "Approved and completed" ==
                                                      e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.success"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.pending"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                  "Rejected and Complete" ==
                                                  e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : "Approved and completed" ==
                                                      e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      ),
                                                ],
                                                1
                                              ),
                                              a(
                                                "v-col",
                                                {
                                                  staticClass: "remarks-col",
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("emptyDataFormat")(
                                                          e.remarks
                                                        )
                                                      ) +
                                                      "\n              "
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                          "TRANSFER" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(
                                              t.transferHeaders,
                                              function (e) {
                                                return a(
                                                  "v-col",
                                                  {
                                                    key: e.text,
                                                    attrs: { cols: "12" },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.$t(
                                                            "label." + e.text
                                                          )
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(
                                                          e.created_at
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.from_wallet) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.to_wallet) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  "FAILED" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.fail"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "SUCCESS" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.success"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "PENDING" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "transactionStatus.pending"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "FAILED" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "SUCCESS" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "PENDING" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                          "REBATE" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(t.rebateHeaders, function (e) {
                                              return a(
                                                "v-col",
                                                {
                                                  key: e.text,
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.$t("label." + e.text)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              );
                                            }),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(
                                                          e.bet_time_end
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.valid_bet_amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.vip_percentage) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.rebate_amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.provider_code) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.game_type) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        1 ==
                                                          e.fk_rebate_status_id
                                                          ? t.$t(
                                                              "label.claimed"
                                                            )
                                                          : t.$t(
                                                              "label.unclaimed"
                                                            )
                                                      ) +
                                                      "\n              "
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                          "BONUS" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(t.bonusHeaders, function (e) {
                                              return a(
                                                "v-col",
                                                {
                                                  key: e.text,
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.$t("label." + e.text)
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              );
                                            }),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(
                                                          e.bonus.created_at
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.bonus.name) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.ref_id) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("currency")(
                                                          e.bonus_given_amount,
                                                          t.currentCurrency
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  "Canceled" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.canceled"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Success" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.success"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Pending" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.pending"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Pending CS" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.pendingCustomerService"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Canceled" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "Success" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "Pending" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
                                                  "Pending CS" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                          "REDEMPTION" == this.selectedTab
                            ? a(
                                "v-col",
                                { attrs: { cols: "12" } },
                                t._l(t.transactionList, function (e, s) {
                                  return a(
                                    "v-row",
                                    {
                                      key: s,
                                      staticClass: "mobile-history-table",
                                    },
                                    [
                                      a(
                                        "v-col",
                                        {
                                          staticClass: "mr-0",
                                          attrs: { cols: "6" },
                                        },
                                        [
                                          a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "history-table-header pl-6",
                                              attrs: { "no-gutters": "" },
                                            },
                                            t._l(t.redeemHeaders, function (e) {
                                              return a(
                                                "v-col",
                                                {
                                                  key: e.text,
                                                  attrs: { cols: "12" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.$t("label." + e.text)
                                                    ) + " :"
                                                  ),
                                                ]
                                              );
                                            }),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          a(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t._f("longDate")(
                                                          e.created_at
                                                        )
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.reward_item_name) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        e.reward_category_name
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.reward_variation) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.reciever_name) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.reciever_mobile) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        e.reciever_address_1
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        e.reciever_address_2
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.city) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.postcode) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.tracking) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.trx_id) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.updated_at) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                              a(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  "CANCELED" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "REJECTED" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "red",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-close-circle-outline"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "SUCCESS" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "APPROVED" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "green",
                                                            small: "",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "mdi-checkbox-marked-circle"
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  "PENDING" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
                                                  "Pending CS" == e.status
                                                    ? a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mb-1",
                                                          attrs: {
                                                            color: "yellow",
                                                            small: "",
                                                          },
                                                        },
                                                        [t._v("mdi-clock")]
                                                      )
                                                    : t._e(),
                                                  "CANCELED" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.canceled"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "REJECTED" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.rejected"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "SUCCESS" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.success"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "APPROVED" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.approved"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "PENDING" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.pending"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  "Pending CS" == e.status
                                                    ? a("span", [
                                                        t._v(
                                                          t._s(
                                                            t.$t(
                                                              "bonusStatus.pendingCustomerService"
                                                            )
                                                          )
                                                        ),
                                                      ])
                                                    : t._e(),
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
                                        { attrs: { cols: "12" } },
                                        [
                                          a("v-divider", {
                                            staticClass: "mx-2",
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                  a(
                    "v-row",
                    [
                      0 == t.transactionList.length
                        ? a(
                            "v-col",
                            {
                              staticClass: "text-center pt-0 pb-8",
                              attrs: { cols: "12" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass:
                                    "history-table-header subtitle-2",
                                },
                                [t._v(t._s(t.$t("message.noDataAvaliable")))]
                              ),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                  t.pagination.last_page > 1
                    ? a(
                        "v-row",
                        { staticClass: "mt-1", attrs: { "no-gutters": "" } },
                        [
                          a(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "12" },
                            },
                            [
                              a("v-pagination", {
                                staticClass: "trxn_history_pagination",
                                attrs: {
                                  length: t.pagination.last_page,
                                  "next-icon": "mdi-chevron-right",
                                  "prev-icon": "mdi-chevron-left",
                                  "total-visible": 10,
                                },
                                on: { input: t.changePage },
                                model: {
                                  value: t.pagination.current_page,
                                  callback: function (e) {
                                    t.$set(t.pagination, "current_page", e);
                                  },
                                  expression: "pagination.current_page",
                                },
                              }),
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
          );
        },
        r = [],
        i =
          (a("99af"),
          a("4160"),
          a("c975"),
          a("ac1f"),
          a("5319"),
          a("1276"),
          a("159b"),
          a("4795"),
          a("1b0b")),
        o = a("8833"),
        n = a("645e"),
        c = a("e980"),
        l = a("01cb"),
        d = a("15a4"),
        u = a("4260"),
        m = a("e6fd"),
        b = a("13ea"),
        v = a.n(b),
        p = a("0644"),
        h = a.n(p),
        g = a("9380"),
        _ = a.n(g),
        f = a("2769"),
        y = a.n(f),
        C = a("dd61"),
        x = a.n(C),
        w = a("93c6"),
        S = a.n(w),
        k = a("cdc9"),
        D = a("e438"),
        $ = a("82e2"),
        T = a("639a"),
        R = {
          name: "transactionHistory",
          components: {
            depositHistory: o["a"],
            depositHistoryActive: i["a"],
            withdrawalHistory: n["a"],
            transferHistory: c["a"],
            rebateHistory: l["a"],
          },
          data: function () {
            return {
              dateMenu: !1,
              dates: [m["g"].DEFAULT_DATE, m["g"].DEFAULT_DATE],
              language: u["f"].getLanguage(),
              currentCurrency: u["f"].getCurrency(),
              validator: u["d"],
              shared: m["g"],
              selectedTab: this.$route.params.tab
                ? this.$route.params.tab
                : "BONUS",
              msgDialog: { show: !1 },
              inboxList: [],
              announcementList: [],
              selectedList: [],
              pagination: {
                currentPage: 1,
                totalPage: 1,
                paginationPageLimit: 10,
              },
              searchCriteria: {
                pageNumber: 1,
                pageSize: 20,
                mobilePageSize: 10,
              },
              depositHeaders: [
                {
                  text: "date",
                  align: "start",
                  sortable: !0,
                  value: "date",
                  sortBy: "desc",
                },
                { text: "depositMethod", value: "membercode", sortable: !1 },
                { text: "depositAmt", value: "membercode", sortable: !1 },
                { text: "bonus", value: "membercode", sortable: !1 },
                { text: "status", value: "status", sortable: !1 },
              ],
              withdrawalHeaders: [
                {
                  text: "date",
                  align: "start",
                  sortable: !0,
                  value: "date",
                  sortBy: "desc",
                },
                { text: "withdrawalAmt", value: "membercode", sortable: !1 },
                { text: "paymentMethod", value: "commission", sortable: !1 },
                { text: "status", value: "status", sortable: !1 },
                { text: "remarks", value: "remarks", sortable: !1 },
              ],
              transferHeaders: [
                {
                  text: "transactionDate",
                  align: "start",
                  sortable: !0,
                  value: "created_at",
                  sortBy: "desc",
                },
                { text: "fromWallet", value: "membercode", sortable: !1 },
                { text: "toWallet", value: "commission", sortable: !1 },
                { text: "amount", value: "status", sortable: !1 },
                { text: "status", value: "status", sortable: !1 },
              ],
              rebateHeaders: [
                {
                  text: "date",
                  align: "start",
                  sortable: !0,
                  value: "bet_time_end",
                  sortBy: "desc",
                },
                { text: "valid", value: "valid_bet_amount", sortable: !1 },
                { text: "rebate", value: "vip_percentage", sortable: !1 },
                { text: "rebateAmount", value: "rebate_amount", sortable: !1 },
                { text: "provider", value: "activity", sortable: !1 },
                { text: "category", value: "provider_code", sortable: !1 },
                { text: "status", value: "status", sortable: !1 },
              ],
              redeemHeaders: [
                {
                  text: "date",
                  align: "start",
                  sortable: !0,
                  value: "created_at",
                  sortBy: "desc",
                },
                {
                  text: "rewardItemName",
                  value: "reward_item_name",
                  sortable: !1,
                },
                {
                  text: "rewardCategoryName",
                  value: "reward_category_name",
                  sortable: !1,
                },
                {
                  text: "rewardVariation",
                  value: "reward_variation",
                  sortable: !1,
                },
                { text: "receiverName", value: "reciever_name", sortable: !1 },
                {
                  text: "receiverMobile",
                  value: "reciever_mobile",
                  sortable: !1,
                },
                {
                  text: "receiverAddress1",
                  value: "reciever_address_1",
                  sortable: !1,
                },
                {
                  text: "receiverAddress2",
                  value: "reciever_address_2",
                  sortable: !1,
                },
                { text: "city", value: "city", sortable: !1 },
                { text: "postcode", value: "postcode", sortable: !1 },
                { text: "tracking", value: "tracking", sortable: !1 },
                { text: "transactionId", value: "trx_id", sortable: !1 },
                { text: "updatedAt", value: "updated_at", sortable: !1 },
                { text: "status", value: "status", sortable: !1 },
              ],
              bonusHeaders: [
                {
                  text: "date",
                  align: "start",
                  sortable: !0,
                  value: "bonusApplyDate",
                  sortBy: "desc",
                },
                { text: "bonusType", value: "name", sortable: !1 },
                { text: "bonusID", value: "refId", sortable: !1 },
                {
                  text: "bonusHistoryAmount",
                  value: "bonusGivenAmount",
                  sortable: !1,
                },
                { text: "status", value: "status", sortable: !1 },
              ],
              transactionList: [],
              selectedPage: 1,
            };
          },
          created: function () {
            window.location.pathname.indexOf(d["a"].TRANSFER_HISTORY) > -1
              ? ((this.selectedTab = "TRANSFER"), this.getTransferHistory())
              : window.location.pathname.indexOf(d["a"].BONUS_HISTORY) > -1
              ? ((this.selectedTab = "REBATE"), this.getRebateHistory())
              : window.location.pathname.indexOf(d["a"].TRANSACTION_HISTORY) >
                -1
              ? ((this.selectedTab = "DEPOSIT"),
                this.getPaymentHistory("DEPOSIT"))
              : window.location.pathname.indexOf(d["a"].REDEMPTION_HISTORY) >
                  -1 && this.getRedeemHistory(),
              this.metaTag();
          },
          computed: {
            redeemHistory: function () {
              return this.$store.state.reward.redeemHistory.data;
            },
            dateRangeText: {
              get: function () {
                var t = this.dates[0] ? this.dates[0] : "",
                  e = this.dates[1] ? this.dates[1] : "";
                if (t || e) return t + " - " + e;
              },
              set: function (t) {
                this.dates = [];
              },
            },
            paymentHistory: function () {
              return this.$store.state.payment.paymentHistory.data;
            },
            rewardHistoryPagination: function () {
              return this.$store.state.reward.redeemHistory.pagination;
            },
            paymentHistoryPagination: function () {
              return this.$store.state.payment.paymentHistory.pagination;
            },
            transactionHistory: function () {
              return this.$store.state.transfer.transactionHistory.data;
            },
            transactionHistoryPagination: function () {
              return this.$store.state.transfer.transactionHistory.pagination;
            },
            rebateHistory: function () {
              return this.$store.state.bonus.rebateHistory.data;
            },
            rebateHistoryPagination: function () {
              return this.$store.state.bonus.rebateHistory.pagination;
            },
            bonusHistory: function () {
              return this.$store.state.bonus.bonusHistory.data;
            },
            bonusHistoryPagination: function () {
              return this.$store.state.bonus.bonusHistory.pagination;
            },
            totalRebateAmt: function () {
              if ("REBATE" == this.selectedTab) {
                var t = 0;
                return (
                  this.$store.state.bonus.rebateHistory.data.forEach(function (
                    e
                  ) {
                    t += e.rebate_amount;
                  }),
                  t
                );
              }
              return 0;
            },
            totalRebatePercentage: function () {
              if ("REBATE" == this.selectedTab) {
                var t = 0;
                return (
                  this.$store.state.bonus.rebateHistory.data.forEach(function (
                    e
                  ) {
                    t += e.vip_percentage;
                  }),
                  t
                );
              }
              return 0;
            },
            totalRebate: function () {
              return this.$store.state.bonus.rebateHistory.totalRebate;
            },
            claimRebateResult: function () {
              return this.$store.state.bonus.claimRebateResult.complete;
            },
          },
          watch: {
            redeemHistory: function () {
              this.getTransactionList();
            },
            paymentHistory: function () {
              this.getTransactionList();
            },
            transactionHistory: function () {
              this.getTransactionList();
            },
            rebateHistory: function () {
              this.getTransactionList();
            },
            bonusHistory: function () {
              this.getTransactionList();
            },
            claimRebateResult: function () {
              this.$store.state.bonus.claimRebateResult.complete &&
                this.claimRebateResponse(
                  this.$store.state.bonus.claimRebateResult
                );
            },
          },
          methods: {
            metaTag: function () {
              var t = window.location.href;
              u["f"].setCanonical(t);
              var e = t.split("/")[2],
                a = e.replace(/(^\w+:|^)\/\//, ""),
                s = window.location.pathname,
                r = s.replace(/\/(en-BD|bn-BD)/i, ""),
                i = "https://".concat(a).concat(r),
                o = "https://".concat(a, "/en-BD").concat(r),
                n = "https://".concat(a, "/bn-BD").concat(r);
              u["f"].setHreflangLinks(i),
                u["f"].setHreflangLinksen(o),
                u["f"].setHreflangLinksbd(n);
            },
            selectedDate: function () {
              if (this.dates[0] && this.dates[1]) {
                var t = this;
                setTimeout(function () {
                  t.dateMenu = !1;
                }, 500);
              }
            },
            changePage: function (t) {
              (this.selectedPage = t),
                "DEPOSIT" == this.selectedTab
                  ? this.getPaymentHistory(this.selectedTab)
                  : "WITHDRAWAL" == this.selectedTab
                  ? this.getPaymentHistory(this.selectedTab)
                  : "TRANSFER" == this.selectedTab
                  ? this.getTransferHistory()
                  : "REBATE" == this.selectedTab
                  ? this.getRebateHistory()
                  : "BONUS" == this.selectedTab
                  ? this.getBonusHistory()
                  : "REDEMPTION" == this.selectedTab && this.getRedeemHistory();
            },
            onChangeTab: function (t, e) {
              (this.selectedTab = t),
                e || (this.dates = ["", ""]),
                (this.selectedPage = 1),
                "DEPOSIT" == this.selectedTab
                  ? this.getPaymentHistory(t)
                  : "WITHDRAWAL" == this.selectedTab
                  ? this.getPaymentHistory(t)
                  : "TRANSFER" == this.selectedTab
                  ? this.getTransferHistory()
                  : "REBATE" == this.selectedTab
                  ? this.getRebateHistory()
                  : "BONUS" == this.selectedTab
                  ? this.getBonusHistory()
                  : "REDEMPTION" == this.selectedTab && this.getRedeemHistory();
            },
            getBonusHistory: function (t) {
              var e = {
                type: t,
                overallStatus: "history",
                fromDate: v()(this.dates[0])
                  ? this.dates[0]
                  : this.dates[0] + " 00:00:00",
                toDate: v()(this.dates[1])
                  ? this.dates[1]
                  : this.dates[1] + " 23:59:59",
                page: this.selectedPage,
                itemsPerPage: 10,
              };
              this.$store.dispatch("".concat(k["c"]), { bonusHistoryObj: e });
            },
            getPaymentHistory: function (t) {
              var e = {
                type: t,
                startTime: v()(this.dates[0])
                  ? this.dates[0]
                  : this.dates[0] + " 00:00:00",
                endTime: v()(this.dates[1])
                  ? this.dates[1]
                  : this.dates[1] + " 23:59:59",
                size: 10,
                page: this.selectedPage,
              };
              this.$store.dispatch("".concat($["f"]), { obj: e });
            },
            getRedeemHistory: function () {
              var t = { size: 10, page: this.selectedPage };
              this.$store.dispatch("".concat(T["b"]), { obj: t });
            },
            getTransferHistory: function () {
              var t = {
                startTime: v()(this.dates[0])
                  ? this.dates[0]
                  : this.dates[0] + " 00:00:00",
                endTime: v()(this.dates[1])
                  ? this.dates[1]
                  : this.dates[1] + " 23:59:59",
                size: 10,
                page: this.selectedPage,
              };
              this.$store.dispatch("".concat(D["c"]), { obj: t });
            },
            getRebateHistory: function (t) {
              var e = {
                type: t,
                startTime: v()(this.dates[0])
                  ? this.dates[0]
                  : this.dates[0] + " 00:00:00",
                endTime: v()(this.dates[1])
                  ? this.dates[1]
                  : this.dates[1] + " 23:59:59",
                size: 10,
                page: this.selectedPage,
              };
              this.$store.dispatch("".concat(k["o"]), { obj: e });
            },
            getTransactionList: function () {
              "DEPOSIT" == this.selectedTab
                ? ((this.transactionList = h()(this.paymentHistory)),
                  (this.pagination = this.paymentHistoryPagination))
                : "WITHDRAWAL" == this.selectedTab
                ? ((this.transactionList = h()(this.paymentHistory)),
                  (this.pagination = this.paymentHistoryPagination))
                : "TRANSFER" == this.selectedTab
                ? ((this.transactionList = h()(this.transactionHistory)),
                  (this.pagination = this.transactionHistoryPagination))
                : "REBATE" == this.selectedTab
                ? ((this.transactionList = h()(this.rebateHistory)),
                  (this.pagination = this.rebateHistoryPagination))
                : "BONUS" == this.selectedTab
                ? ((this.transactionList = h()(this.bonusHistory)),
                  (this.pagination = this.bonusHistoryPagination))
                : "REDEMPTION" == this.selectedTab &&
                  ((this.transactionList = h()(this.redeemHistory)),
                  (this.pagination = this.rewardHistoryPagination));
            },
            clearFilter: function () {
              (this.dates = ["", ""]), this.onChangeTab(this.selectedTab, !1);
            },
            filterListByDate: function () {
              this.onChangeTab(this.selectedTab, !0);
            },
            claimRebate: function () {
              this.$store.dispatch("".concat(k["k"]));
            },
            claimRebateResponse: function (t) {
              t.success && 0 == t.code
                ? this.$parent.openAlert(
                    !0,
                    u["e"].getMessage("message.rebateSubmitSuccess")
                  )
                : this.$parent.openAlert(
                    !1,
                    u["e"].getMessage("message.vipBonusFailed")
                  );
            },
            sortTableList: function (t) {
              var e = [];
              e =
                "DEPOSIT" == this.selectedTab
                  ? this.depositHeaders
                  : "WITHDRAWAL" == this.selectedTab
                  ? this.withdrawalHeaders
                  : "TRANSFER" == this.selectedTab
                  ? this.transferHeaders
                  : "REBATE" == this.selectedTab
                  ? this.rebateHeaders
                  : "REDEMPTION" == this.selectedTab
                  ? this.redeemHeaders
                  : this.bonusHeaders;
              var a = _()(e, function (t) {
                return t.sortable;
              });
              if (t)
                y()(a, function (e) {
                  if (e.value == t.value)
                    return (e.sortBy = "asc" == e.sortBy ? "desc" : "asc"), !0;
                });
              this.transactionList = S()(
                this.transactionList,
                x()(a, "value"),
                x()(a, "sortBy")
              );
            },
          },
        },
        P = R,
        A = (a("f178"), a("2877")),
        E = a("6544"),
        N = a.n(E),
        I = a("8336"),
        L = a("b0af"),
        H = a("62ad"),
        O = a("8fea"),
        B = a("2e4b"),
        M = a("ce7e"),
        V = a("132d"),
        j = a("e449"),
        F = a("891e"),
        W = a("0fd9"),
        z = a("8654"),
        U = Object(A["a"])(P, s, r, !1, null, null, null);
      e["default"] = U.exports;
      N()(U, {
        VBtn: I["a"],
        VCard: L["a"],
        VCol: H["a"],
        VDataTable: O["a"],
        VDatePicker: B["a"],
        VDivider: M["a"],
        VIcon: V["a"],
        VMenu: j["a"],
        VPagination: F["a"],
        VRow: W["a"],
        VTextField: z["a"],
      });
    },
    d96b: function (t, e, a) {},
    f178: function (t, e, a) {
      "use strict";
      var s = a("d96b"),
        r = a.n(s);
      r.a;
    },
    f879: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [a("v-form", { ref: "forgotPasswordForm" })], 1);
        },
        r = [],
        i = a("15a4"),
        o = a("e6fd"),
        n = {
          name: "resetPassword",
          created: function () {
            this.initializeResetPassword();
          },
          methods: {
            initializeResetPassword: function () {
              this.$router.push({
                name: i["a"].HOME,
                params: {
                  action: o["g"].RESET_PASSWORD,
                  memberCode: this.$route.query.memberCode,
                  contact: this.$route.query.contact,
                },
              });
            },
          },
        },
        c = n,
        l = a("2877"),
        d = a("6544"),
        u = a.n(d),
        m = a("4bd4"),
        b = Object(l["a"])(c, s, r, !1, null, null, null);
      e["default"] = b.exports;
      u()(b, { VForm: m["a"] });
    },
  },
]);
//# sourceMappingURL=app~0e32f6fa.77de22b6.js.map
