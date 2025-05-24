(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~03c2e492"],
  {
    "4f66": function (e, t, r) {
      "use strict";
      r.r(t);
      var s = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            [
              r(
                "v-row",
                {
                  staticClass: "register_panel",
                  class: e.$vuetify.breakpoint.mdAndDown ? "" : "my-12",
                  attrs: { "no-gutters": "" },
                },
                [
                  r(
                    "v-row",
                    {
                      staticClass: "register_wrapper",
                      class: e.$vuetify.breakpoint.mdAndDown
                        ? "px-5 py-5"
                        : "px-12 py-8",
                      attrs: { "no-gutters": "" },
                    },
                    [
                      r(
                        "v-col",
                        { staticClass: "no-gutters" },
                        [
                          e.$vuetify.breakpoint.mdAndUp
                            ? r(
                                "v-row",
                                {
                                  staticClass: "sign-up-title cols",
                                  attrs: { "no-gutters": "" },
                                },
                                [
                                  r("label", { staticClass: "h6" }, [
                                    e._v(e._s(e.$t("label.signUp"))),
                                  ]),
                                ]
                              )
                            : e._e(),
                          e.$vuetify.breakpoint.mdAndUp
                            ? e._e()
                            : r("WatchTutorialVideo", {
                                staticStyle: { margin: "0 0 20px" },
                                attrs: {
                                  label: e.$t("label.howToRegister"),
                                  "video-url":
                                    "https://krikyabangladesh.wistia.com/medias/d7ph9cprec",
                                },
                              }),
                          r(
                            "v-window",
                            {
                              attrs: { touchless: !0 },
                              model: {
                                value: e.step,
                                callback: function (t) {
                                  e.step = t;
                                },
                                expression: "step",
                              },
                            },
                            [
                              r(
                                "v-window-item",
                                { key: 0, attrs: { value: 0 } },
                                [
                                  r(
                                    "v-form",
                                    { ref: "registerForm1" },
                                    [
                                      r(
                                        "v-card-text",
                                        { staticClass: "ma-0 pa-0" },
                                        [
                                          r("app-form-field", {
                                            key: "",
                                            ref: "regMemberCode",
                                            attrs: {
                                              enabledLabel: !0,
                                              label: e.$t("field.username"),
                                              errorMsg: e.userNameErrorMsg,
                                              blur: e.checkUsername,
                                              rules: e.validator.usernameRules(
                                                e.registerObj.password
                                              ),
                                            },
                                            model: {
                                              value: e.registerObj.memberCode,
                                              callback: function (t) {
                                                e.$set(
                                                  e.registerObj,
                                                  "memberCode",
                                                  "string" === typeof t
                                                    ? t.trim()
                                                    : t
                                                );
                                              },
                                              expression:
                                                "registerObj.memberCode",
                                            },
                                          }),
                                          r("app-form-field", {
                                            ref: "regPassword",
                                            attrs: {
                                              enabledLabel: !0,
                                              label: e.$t("field.password"),
                                              rules:
                                                e.validator.changePasswordRules(
                                                  e.registerObj.memberCode
                                                ),
                                              allowShowPassword: !1,
                                              type: "password",
                                            },
                                            model: {
                                              value: e.registerObj.password,
                                              callback: function (t) {
                                                e.$set(
                                                  e.registerObj,
                                                  "password",
                                                  "string" === typeof t
                                                    ? t.trim()
                                                    : t
                                                );
                                              },
                                              expression:
                                                "registerObj.password",
                                            },
                                          }),
                                          r("app-form-field", {
                                            attrs: {
                                              enabledLabel: !0,
                                              label: e.$t(
                                                "field.confirmPassword"
                                              ),
                                              rules:
                                                e.validator.confirmPasswordRules(
                                                  e.registerObj.password,
                                                  e.confirmNewPassword
                                                ),
                                              allowShowPassword: !1,
                                              type: "password",
                                            },
                                            model: {
                                              value: e.confirmNewPassword,
                                              callback: function (t) {
                                                e.confirmNewPassword =
                                                  "string" === typeof t
                                                    ? t.trim()
                                                    : t;
                                              },
                                              expression: "confirmNewPassword",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-row",
                                        {
                                          staticClass:
                                            "d-flex justify-center align-center cols",
                                          attrs: { "no-gutters": "" },
                                        },
                                        [
                                          r(
                                            "v-btn",
                                            {
                                              staticClass:
                                                "text-capitalize circle-button-next",
                                              on: { click: this.nextPage },
                                            },
                                            [
                                              e._v(
                                                "\n                  " +
                                                  e._s(e.$t("button.next")) +
                                                  "\n                  "
                                              ),
                                              r("v-icon", [
                                                e._v("mdi-arrow-right"),
                                              ]),
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
                              r(
                                "v-window-item",
                                { key: 1, attrs: { value: 1 } },
                                [
                                  r(
                                    "v-form",
                                    { ref: "registerForm2" },
                                    [
                                      r(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          r(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              r("app-form-field", {
                                                staticClass: "black--text",
                                                attrs: {
                                                  enabledLabel: !0,
                                                  label: e.$t("field.currency"),
                                                  type: "select",
                                                  disabled: !0,
                                                  rules:
                                                    e.validator.dropDownListRules(),
                                                  items: e.currencyList,
                                                },
                                                model: {
                                                  value: e.registerObj.currency,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.registerObj,
                                                      "currency",
                                                      "string" === typeof t
                                                        ? t.trim()
                                                        : t
                                                    );
                                                  },
                                                  expression:
                                                    "registerObj.currency",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-card-text",
                                        { staticClass: "ma-0 pa-0" },
                                        [
                                          r(
                                            "label",
                                            {
                                              staticClass:
                                                "input-field-label ma-0 pb-2 text-capitalize d-block",
                                            },
                                            [
                                              e._v(
                                                "\n                  " +
                                                  e._s(
                                                    e.$t("field.phoneNumber")
                                                  ) +
                                                  "\n                  "
                                              ),
                                              r(
                                                "span",
                                                {
                                                  staticClass: "red--text ml-1",
                                                },
                                                [e._v("*")]
                                              ),
                                            ]
                                          ),
                                          r(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              r(
                                                "v-col",
                                                { attrs: { cols: "5" } },
                                                [
                                                  r("v-select", {
                                                    staticClass:
                                                      "input-field mr-2 black--text",
                                                    attrs: {
                                                      elevation: "2",
                                                      "item-text": "text",
                                                      "item-value": "value",
                                                      items:
                                                        e.mobileNumberPrefixList,
                                                      dense: "",
                                                      outlined: "",
                                                      readonly: !0,
                                                    },
                                                    model: {
                                                      value:
                                                        e.registerObj.dialCode,
                                                      callback: function (t) {
                                                        e.$set(
                                                          e.registerObj,
                                                          "dialCode",
                                                          "string" === typeof t
                                                            ? t.trim()
                                                            : t
                                                        );
                                                      },
                                                      expression:
                                                        "registerObj.dialCode",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              r(
                                                "v-col",
                                                { attrs: { cols: "7" } },
                                                [
                                                  r("app-form-field", {
                                                    attrs: {
                                                      enabledLabel: !1,
                                                      rules:
                                                        e.validator.mobileNumberRules(
                                                          e.registerObj.language
                                                        ),
                                                      isOptional: !1,
                                                    },
                                                    model: {
                                                      value:
                                                        e.registerObj
                                                          .mobileNumber,
                                                      callback: function (t) {
                                                        e.$set(
                                                          e.registerObj,
                                                          "mobileNumber",
                                                          "string" === typeof t
                                                            ? t.trim()
                                                            : t
                                                        );
                                                      },
                                                      expression:
                                                        "registerObj.mobileNumber",
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
                                    ],
                                    1
                                  ),
                                  r(
                                    "v-form",
                                    { ref: "registerForm3" },
                                    [
                                      r(
                                        "v-card-text",
                                        { staticClass: "ma-0 pa-0" },
                                        [
                                          r(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              r(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  r("app-form-field", {
                                                    attrs: {
                                                      enabledLabel: !0,
                                                      label:
                                                        e.$t("field.email"),
                                                      isOptional: !0,
                                                      placeholder: e.$t(
                                                        "fieldHint.fillUpHere"
                                                      ),
                                                      rules:
                                                        e.validator.emailRules(),
                                                    },
                                                    model: {
                                                      value:
                                                        e.registerObj.email,
                                                      callback: function (t) {
                                                        e.$set(
                                                          e.registerObj,
                                                          "email",
                                                          "string" === typeof t
                                                            ? t.trim()
                                                            : t
                                                        );
                                                      },
                                                      expression:
                                                        "registerObj.email",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          r(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              r(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  r("app-form-field", {
                                                    attrs: {
                                                      enabledLabel: !0,
                                                      label:
                                                        e.$t(
                                                          "field.referralCode"
                                                        ),
                                                      rules:
                                                        e.validator.referralCodeRules(),
                                                      readonly:
                                                        e.isReferralCodeReadonly,
                                                      isOptional: !0,
                                                    },
                                                    model: {
                                                      value:
                                                        e.registerObj
                                                          .referralCode,
                                                      callback: function (t) {
                                                        e.$set(
                                                          e.registerObj,
                                                          "referralCode",
                                                          "string" === typeof t
                                                            ? t.trim()
                                                            : t
                                                        );
                                                      },
                                                      expression:
                                                        "registerObj.referralCode",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          r(
                                            "v-row",
                                            { attrs: { "no-gutters": "" } },
                                            [
                                              r(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  r("v-checkbox", {
                                                    staticClass: "mt-0 pt-0",
                                                    attrs: {
                                                      rules:
                                                        e.validator.requiredRules(),
                                                    },
                                                    scopedSlots: e._u([
                                                      {
                                                        key: "label",
                                                        fn: function () {
                                                          return [
                                                            r(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "caption pt-2 mb-0",
                                                              },
                                                              [
                                                                r("label", [
                                                                  e._v(
                                                                    e._s(
                                                                      e.$t(
                                                                        "message.registerDisclaimer_1"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]),
                                                                r(
                                                                  "label",
                                                                  {
                                                                    staticClass:
                                                                      "secondary&#45;&#45;text font-weight-bold",
                                                                    staticStyle:
                                                                      {
                                                                        cursor:
                                                                          "pointer",
                                                                      },
                                                                    on: {
                                                                      click:
                                                                        e.openRegisterTncDialog,
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      e._s(
                                                                        e.$t(
                                                                          "message.registerDisclaimer_2"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ];
                                                        },
                                                        proxy: !0,
                                                      },
                                                    ]),
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          r(
                                            "v-row",
                                            {
                                              staticClass:
                                                "d-flex justify-space-between align-center",
                                              attrs: { "no-gutters": "" },
                                            },
                                            [
                                              r(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "circle-button text-capitalize",
                                                  on: {
                                                    click: this.previousPage,
                                                  },
                                                },
                                                [
                                                  r("v-icon", [
                                                    e._v("mdi-arrow-left"),
                                                  ]),
                                                  e._v(
                                                    "\n                    " +
                                                      e._s(
                                                        e.$t("button.back")
                                                      ) +
                                                      "\n                  "
                                                  ),
                                                ],
                                                1
                                              ),
                                              r(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "circle-button text-capitalize",
                                                  staticStyle: {
                                                    "background-color":
                                                      "#76bd6a",
                                                  },
                                                  on: { click: this.register },
                                                },
                                                [
                                                  e._v(
                                                    "\n                    " +
                                                      e._s(
                                                        e.$t("button.complete")
                                                      ) +
                                                      "\n                    "
                                                  ),
                                                  r("v-icon", [
                                                    e._v("mdi-check"),
                                                  ]),
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
                      r(
                        "v-col",
                        {
                          staticClass: "no-gutters",
                          attrs: { cols: "12", md: 8 },
                        },
                        [
                          e.$vuetify.breakpoint.mdAndUp
                            ? r("WatchTutorialVideo", {
                                staticStyle: { margin: "0 0 20px" },
                                attrs: {
                                  label: e.$t("label.howToRegister"),
                                  "video-url":
                                    "https://krikyabangladesh.wistia.com/medias/d7ph9cprec",
                                },
                              })
                            : e._e(),
                          r(
                            "v-carousel",
                            {
                              attrs: {
                                "delimiter-icon": "mdi-minus",
                                "hide-delimiters": "",
                                "show-arrows": !1,
                                cycle: "",
                                interval: "10000",
                                height: "auto",
                              },
                            },
                            e._l(e.registrationBannerContent, function (e, t) {
                              return r(
                                "v-carousel-item",
                                { key: t, staticStyle: { display: "grid" } },
                                [
                                  r("v-img", {
                                    attrs: {
                                      src: "" + e.desktop_registration_banner,
                                      contain: !0,
                                    },
                                  }),
                                ],
                                1
                              );
                            }),
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
              r(
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
                    value: e.alertShow,
                    callback: function (t) {
                      e.alertShow = t;
                    },
                    expression: "alertShow",
                  },
                },
                [
                  r(
                    "v-alert",
                    {
                      staticClass: "mb-0 pa-1",
                      class: e.alertSuccess
                        ? "profile-alert-success"
                        : "profile-alert-failed",
                      attrs: {
                        dismissible: "",
                        icon: e.alertSuccess
                          ? "mdi-check-circle-outline"
                          : "mdi-close",
                        light: "",
                        "close-icon": "mdi-close",
                      },
                      model: {
                        value: e.alertShow,
                        callback: function (t) {
                          e.alertShow = t;
                        },
                        expression: "alertShow",
                      },
                    },
                    [e._v("\n      " + e._s(e.alertMessage) + "\n    ")]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [],
        a =
          (r("99af"),
          r("7db0"),
          r("4160"),
          r("0d03"),
          r("b64b"),
          r("d3b7"),
          r("ac1f"),
          r("25f0"),
          r("1276"),
          r("498a"),
          r("159b"),
          r("96cf"),
          r("1da1")),
        o = r("818d"),
        n = r.n(o),
        l = r("4260"),
        c = r("bb72"),
        g = r("e6fd"),
        u = r("384a"),
        d = r("ff1d"),
        m = r("2c2b"),
        f = {
          name: "appRegister",
          components: { WatchTutorialVideo: m["a"] },
          mounted: function () {
            this.$refs.registerForm1.reset(),
              this.checkAffiliateReferralCode(),
              this.checkPhoneVerificationRequirements(),
              this.AdElementPixelBe4Reg();
          },
          props: {
            openLoginDialog: {
              type: Function,
              required: !1,
              default: function () {},
            },
          },
          created: function () {
            this.metaTag(),
              this.getAffilkaUrlParam(),
              this.getRegistrationBanner();
          },
          data: function () {
            return {
              currentLanguage: l["f"].getLanguage(),
              defaultLanguage: g["g"].DEFAULT_LANGUAGE,
              registerTncUrl: "",
              registerTncDialog: {
                show: !1,
                title: l["e"].getMessage("label.registerAccountAgreement"),
              },
              validator: l["d"],
              stringFormat: n.a,
              isReferralCodeReadonly: !1,
              confirmNewPassword: "",
              mobileNumberPrefixList: [
                { text: "+91", value: "91", currency: "INR", lang: "id" },
                { text: "+880", value: "880", currency: "BDT", lang: "bd" },
              ],
              currencyList: ["INR", "BDT"],
              registerObj: {
                memberCode: "",
                password: "",
                currency: g["g"].DEFAULT_CURRENCY,
                email: "",
                dialCode: l["f"].getDialCode(),
                mobileNumber: "",
                verificationCode: "",
                line: "",
                referralCode: "",
                isEarlyBird: "0",
                domain: "",
                language: g["g"].DEFAULT_LANGUAGE,
                platform: "",
                fp: "",
                agent_team: "",
                utm_source: l["f"].getCookie(g["f"].UTM_SOURCE),
                utm_medium: l["f"].getCookie(g["f"].UTM_MEDIUM),
                utm_campaign: l["f"].getCookie(g["f"].UTM_CAMPAIGN),
                s2: l["f"].getCookie(g["f"].UTM_S2),
                pid: l["f"].getCookie(g["f"].PID),
                c_id: l["f"].getCookie(g["f"].CLICKID),
                tracking_link: null,
                stag: null,
              },
              confirmedPassword: "",
              step: 0,
              regSteps: 2,
              errorMsg: void 0,
              userNameErrorMsg: void 0,
              alertShow: !1,
              alertSuccess: !1,
              alertMessage: "",
            };
          },
          computed: {
            smsRequired: function () {
              return this.$store.state.member.smsVerificationRequired.required;
            },
            smsVerificationSent: function () {
              return this.$store.state.member.smsVerificationSent.success;
            },
            smsVerificationResult: function () {
              return this.$store.state.member.smsVerificationResult.success;
            },
            smsVerificationError: function () {
              return this.$store.state.member.smsVerificationResult.message;
            },
            smsRequestError: function () {
              return this.$store.state.member.smsVerificationSent.message;
            },
            smsRequestAvailable: function () {
              return (
                this.$store.state.member.smsVerificationSent.countDownTimer <= 0
              );
            },
            smsCountdownTimer: function () {
              return this.$store.state.member.smsVerificationSent.countDownTimer.toString();
            },
            checkUsernameResult: function () {
              return this.$store.state.member.checkUsernameResult.completed;
            },
            watchCurrency: function () {
              return this.registerObj.currency;
            },
            registrationBannerContent: function () {
              return this.$store.state.cms.registrationBannerContent;
            },
          },
          watch: {
            watchCurrency: function () {
              var e = this,
                t = this.mobileNumberPrefixList.find(function (t) {
                  return t.currency == e.registerObj.currency;
                });
              t && (this.registerObj.dialCode = t.value);
            },
            smsRequestError: function () {
              this.$store.state.member.smsVerificationSent.complete &&
                !this.$store.state.member.smsVerificationSent.success &&
                this.errorDialog(
                  this.$store.state.member.smsVerificationSent.code
                );
            },
            checkUsernameResult: function () {
              this.$store.state.member.checkUsernameResult.completed &&
                (this.$store.state.member.checkUsernameResult.success
                  ? (this.userNameErrorMsg = void 0)
                  : -2 == this.$store.state.member.checkUsernameResult.code
                  ? (this.userNameErrorMsg = l["e"].getMessage(
                      "fieldErrorMessage.usernameExceedLength"
                    ))
                  : -1 == this.$store.state.member.checkUsernameResult.code &&
                    (this.userNameErrorMsg = l["e"].getMessage(
                      "fieldErrorMessage.usernameUsed"
                    )),
                this.$store.dispatch("".concat(c["u"])));
            },
          },
          methods: {
            getAffilkaUrlParam: function () {
              var e = this.getUrlParams(window.location.href);
              Object.keys(e).length > 0 &&
                e.hasOwnProperty("stag") &&
                e.hasOwnProperty("tracking_link") &&
                ((this.registerObj.tracking_link = e["tracking_link"]),
                (this.registerObj.stag = e["stag"]),
                console.log("tracking link: " + this.registerObj.tracking_link),
                console.log("stag: " + this.registerObj.stag));
            },
            getUrlParams: function (e) {
              var t = {},
                r = e.split("?");
              if (r.length > 1) {
                var s = r[1],
                  i = s.split("&");
                i.forEach(function (e) {
                  var r = e.split("=");
                  if (2 === r.length) {
                    var s = decodeURIComponent(r[0]);
                    t[s] = decodeURIComponent(r[1]);
                  }
                });
              }
              return t;
            },
            AdElementPixelBe4Reg: function () {
              var e = {
                event_type: "register_page",
                country_code: "BD",
                lang_code: l["f"].getLanguage(),
                depth: 4,
              };
              window.ae_parms_kv = e;
              var t = "71880509ee082f8f44596eedf687aac0",
                r = document.createElement("script"),
                s = "//d313lzv9559yp9.cloudfront.net";
              (r.type = "text/javascript"),
                (r.async = !0),
                (r.src = "".concat(s, "/").concat(t, ".js"));
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(r, i);
            },
            metaTag: function () {
              l["f"].setTitle(
                "".concat(l["e"].getMessage("meta.register_title"))
              ),
                l["f"].setMetaTag(
                  "description",
                  "".concat(l["e"].getMessage("meta.register_description"))
                ),
                l["f"].setMetaTag(
                  "keywords",
                  "".concat(l["e"].getMessage("meta.register_keyword"))
                );
              var e = window.location.href;
              l["f"].setCanonical(e), l["f"].setMetaTag("url", e);
            },
            checkUsername: function () {
              if ("" !== this.registerObj.memberCode.trim()) {
                var e = this.registerObj;
                this.$store.dispatch("".concat(c["e"]), { registerObj: e }),
                  this.$refs.regPassword.validate();
              }
            },
            errorDialog: function (e) {
              var t = this,
                r = this.initializePageDialogProperty();
              (r.title = l["e"].getMessage("label.register")),
                (r.dialogXButton = null),
                r.message.push(u["a"].getErrorCodeDesc(e)),
                r.button.push({
                  title: l["e"].getMessage("label.close"),
                  action: function () {
                    return t.closePageDialog();
                  },
                }),
                this.openPageDialog(r);
            },
            openPageDialog: function (e) {
              this.$eventHub.$emit("open-page-dialog", e);
            },
            closePageDialog: function () {
              this.$store.dispatch("".concat(c["F"])),
                this.$eventHub.$emit("close-page-dialog", !0);
            },
            initializePageDialogProperty: function () {
              var e = {
                title: l["e"].getMessage("label.system"),
                dialogXButton: this.closePageDialog,
                messageTitle: "",
                message: [],
                button: [],
              };
              return e;
            },
            checkPhoneVerificationRequirements: function () {
              this.$store.dispatch("".concat(c["i"]));
            },
            openRegisterTncDialog: function () {
              (this.registerTncUrl = ""
                .concat("/", "static/html/other/")
                .concat(l["f"].getLanguage(), "/register-tnc.html")),
                (this.registerTncDialog.show = !0),
                (this.registerTncDialog.dialogXButton =
                  this.closePromotionTncDialog);
            },
            closeRegisterTncDialog: function () {
              this.registerTncDialog.show = !1;
            },
            openLogin: function () {
              this.openLoginDialog();
            },
            register: function () {
              if (
                this.$refs.registerForm2.validate() &&
                this.$refs.registerForm3.validate()
              ) {
                var e = this;
                (this.registerObj.platform = l["f"].getPlatform()),
                  (this.registerObj.domain = l["f"].getHostname()),
                  (this.registerObj.language = l["f"].getLanguage()),
                  (this.registerObj.stag = l["f"].getCookie("stag")),
                  (this.registerObj.tracking_link =
                    l["f"].getCookie("trackingLink"));
                var t =
                  "undefined" != typeof l["f"].getCookie("fp_visitor") &&
                  null != l["f"].getCookie("fp_visitor") &&
                  "" != l["f"].getCookie("fp_visitor");
                if (t) {
                  e.registerObj.fp = l["f"].getCookie("fp_visitor");
                  var r = this.registerObj;
                  this.$store.dispatch("".concat(c["o"]), { registerObj: r });
                } else
                  try {
                    if (
                      ((e.registerObj.fp = l["f"].getFingerprints()),
                      "" != e.registerObj.fp && null != e.registerObj.fp)
                    ) {
                      l["f"].setCookie("fp_visitor", e.registerObj.fp, 30);
                      var s = e.registerObj;
                      this.$store.dispatch("".concat(c["o"]), {
                        registerObj: s,
                      });
                    }
                  } catch (a) {
                    log(a);
                    var i = this.registerObj;
                    this.$store.dispatch("".concat(c["o"]), { registerObj: i });
                  }
              }
            },
            formatSeconds: function (e) {
              var t = function (e) {
                  return e < 10 ? "0".concat(e) : e;
                },
                r = Math.floor(e / 3600),
                s = Math.floor(e / 60) - 60 * r,
                i = Math.floor(e - 3600 * r - 60 * s);
              return "".concat(t(s), ":").concat(t(i));
            },
            requestSmsVerificationCode: function () {
              if (
                ((this.$store.state.member.smsVerificationSent.success = !1),
                this.$refs.registerForm2.validate())
              ) {
                (this.registerObj.domain = l["f"].getHostname()),
                  (this.registerObj.language = l["f"].getLanguage());
                var e = this.registerObj;
                this.$store.dispatch("".concat(c["M"]), { registerObj: e });
              }
            },
            verifySmsCode: function () {
              var e = this;
              return Object(a["a"])(
                regeneratorRuntime.mark(function t() {
                  var r;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e.$refs.registerForm.validate() &&
                            ((r = e.registerObj),
                            e.$store.dispatch("".concat(c["N"]), {
                              registerObj: r,
                            }));
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            checkAffiliateReferralCode: function () {
              var e = l["f"].getCookie(g["f"].REFER_CODE),
                t = l["f"].getCookie(g["f"].AFF_CODE);
              null != t && "" != t
                ? ((this.registerObj.agent_team = t),
                  (this.isReferralCodeReadonly = !0))
                : null != e && "" != e
                ? ((this.registerObj.referralCode = e),
                  (this.isReferralCodeReadonly = !0))
                : ((this.registerObj.referralCode = ""),
                  (this.isReferralCodeReadonly = !1));
            },
            nextPage: function () {
              this.$refs.registerForm1.validate() &&
                !this.userNameErrorMsg &&
                this.step++;
              try {
                srtmCommands.push({
                  event: "track.user.registration",
                  payload: { action: "start" },
                });
              } catch (e) {
                console.log(e);
              }
            },
            previousPage: function () {
              this.step--;
            },
            openAlert: function (e, t) {
              (this.alertSuccess = e),
                (this.alertMessage = t),
                (this.alertShow = !0);
            },
            getRegistrationBanner: function () {
              var e = { language: l["f"].getLanguage() };
              this.$store.dispatch("".concat(d["d"]), { obj: e });
            },
          },
        },
        b = f,
        p = (r("ff32"), r("2877")),
        h = r("6544"),
        v = r.n(h),
        w = r("0798"),
        k = r("8336"),
        C = r("99d9"),
        y = r("5e66"),
        O = r("3e35"),
        _ = r("ac7c"),
        j = r("62ad"),
        $ = r("4bd4"),
        R = r("132d"),
        x = r("adda"),
        P = r("0fd9"),
        D = r("b974"),
        M = r("2db4"),
        S = r("f665"),
        T = r("1e6c"),
        L = Object(p["a"])(b, s, i, !1, null, null, null);
      t["default"] = L.exports;
      v()(L, {
        VAlert: w["a"],
        VBtn: k["a"],
        VCardText: C["c"],
        VCarousel: y["a"],
        VCarouselItem: O["a"],
        VCheckbox: _["a"],
        VCol: j["a"],
        VForm: $["a"],
        VIcon: R["a"],
        VImg: x["a"],
        VRow: P["a"],
        VSelect: D["a"],
        VSnackbar: M["a"],
        VWindow: S["a"],
        VWindowItem: T["a"],
      });
    },
    "52ee": function (e, t, r) {
      "use strict";
      r.r(t);
      var s = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("router-view");
        },
        i = [],
        a = r("4260"),
        o = {
          name: "TableLayout",
          metaInfo: {
            title: "".concat(a["e"].getMessage("meta.default_title")),
            titleTemplate: "%s",
            meta: [
              { charset: "utf-8" },
              {
                name: "description",
                content: "".concat(
                  a["e"].getMessage("meta.default_description")
                ),
              },
              {
                name: "keyword",
                content: "".concat(a["e"].getMessage("meta.default_keyword")),
              },
            ],
            link: [
              { rel: "canonical", href: "https://www.krikya11.com/lottery/" },
            ],
          },
          methods: {
            openLoginDialog: function () {
              this.$parent.openLoginDialog();
            },
          },
        },
        n = o,
        l = r("2877"),
        c = Object(l["a"])(n, s, i, !1, null, null, null);
      t["default"] = c.exports;
    },
    "907c": function (e, t, r) {},
    ff32: function (e, t, r) {
      "use strict";
      var s = r("907c"),
        i = r.n(s);
      i.a;
    },
  },
]);
//# sourceMappingURL=app~03c2e492.177587a8.js.map
