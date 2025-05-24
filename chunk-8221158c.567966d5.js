(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-8221158c"],
  {
    "0ee0": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-card",
            {
              class: t.$vuetify.breakpoint.mdAndDown
                ? "profile-detail-mobile"
                : "profile-detail",
              attrs: { height: "80%", elevation: "0" },
            },
            [
              a("WatchTutorialVideo", {
                staticStyle: { margin: "18px 32px 20px" },
                attrs: {
                  label: t.$t("label.howToRegisterAffiliate"),
                  "video-url":
                    "https://krikyabangladesh.wistia.com/medias/45lhcqqcfq",
                },
              }),
              a(
                "v-card",
                { staticClass: "profile-detail-card" },
                [
                  0 == t.step || 1 == t.step
                    ? a(
                        "v-card-title",
                        [
                          a(
                            "v-row",
                            { attrs: { "no-gutters": "", justify: "center" } },
                            [
                              a(
                                "v-col",
                                {
                                  staticClass: "text-center",
                                  attrs: { cols: "7" },
                                },
                                [
                                  a(
                                    "label",
                                    {
                                      staticClass:
                                        "detail-label text-capitalize",
                                    },
                                    [t._v(t._s(t.$t("label.agentRegister")))]
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
                  a(
                    "v-window",
                    {
                      attrs: { touchless: !0 },
                      model: {
                        value: t.step,
                        callback: function (e) {
                          t.step = e;
                        },
                        expression: "step",
                      },
                    },
                    [
                      a(
                        "v-window-item",
                        { attrs: { value: 0 } },
                        [
                          a(
                            "v-form",
                            { ref: "bankAccountForm1", staticClass: "mt-4" },
                            [
                              a(
                                "v-row",
                                {
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        class: "mt-2",
                                        attrs: {
                                          enabledLabel: !0,
                                          label: t.$t("field.agentId"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          errorMsg: t.agentIdErrorMessage,
                                          blur: t.checkAgentId,
                                          rules: t.validator.usernameRules(),
                                        },
                                        model: {
                                          value: t.agentObj.agent_id,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "agent_id",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.agent_id",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        ref: "password",
                                        attrs: {
                                          enabledLabel: !0,
                                          type: "password",
                                          label: t.$t("field.password"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules: t.validator.passwordRules(
                                            t.agentObj.agent_id
                                          ),
                                        },
                                        model: {
                                          value: t.agentObj.password,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "password",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.password",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          type: "password",
                                          label: t.$t("field.confirmPassword"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules:
                                            t.validator.confirmPasswordRules(
                                              t.agentObj.password,
                                              t.confirm_password
                                            ),
                                        },
                                        model: {
                                          value: t.confirm_password,
                                          callback: function (e) {
                                            t.confirm_password =
                                              "string" === typeof e
                                                ? e.trim()
                                                : e;
                                          },
                                          expression: "confirm_password",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-button", {
                                        class: t.$vuetify.breakpoint.mdAndDown
                                          ? "agent-detail-mobile dialog-button"
                                          : "agent-detail dialog-button",
                                        attrs: {
                                          customClass: "dialog-button-color",
                                          title: t.$t("button.next"),
                                          action: this.nextPage,
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
                      a(
                        "v-window-item",
                        { attrs: { value: 1 } },
                        [
                          a(
                            "v-form",
                            { ref: "bankAccountForm2", staticClass: "mt-4" },
                            [
                              a(
                                "v-row",
                                {
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          label: t.$t("field.agentRealName"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules: t.validator.realnameRules(),
                                        },
                                        model: {
                                          value: t.agentObj.real_name,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "real_name",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.real_name",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          label: t.$t("field.nid"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules: t.validator.nidNumberRules(
                                            10,
                                            13
                                          ),
                                        },
                                        model: {
                                          value: t.agentObj.nid_number,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "nid_number",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.nid_number",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("agent-app-form-field", {
                                        attrs: {
                                          type: "datetime",
                                          enabledLabel: !0,
                                          maxDate: t.dateOfBirthMaxDate,
                                          label: t.$t("field.dateOfBirth"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                        },
                                        model: {
                                          value: t.agentObj.date_of_birth,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "date_of_birth",
                                              e
                                            );
                                          },
                                          expression: "agentObj.date_of_birth",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          isOptional: !0,
                                          label: t.$t("field.email"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules: t.validator.emailRules(),
                                        },
                                        model: {
                                          value: t.agentObj.email,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "email",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.email",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          label: t.$t("field.contactNumber"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          prefix: t.mobilePrefix,
                                          rules:
                                            t.validator.mobileNumberRules("bd"),
                                        },
                                        model: {
                                          value: t.agentObj.mobile,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "mobile",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.mobile",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          type: "select",
                                          label: t.$t("field.socialType"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules:
                                            t.validator.dropDownListRules(),
                                          items: t.socialTypeList,
                                          isOptional: !0,
                                          displayText:
                                            this.socialContactTypeDdlText,
                                        },
                                        model: {
                                          value: t.agentObj.social_contact_type,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "social_contact_type",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression:
                                            "agentObj.social_contact_type",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              1 == t.agentObj.social_contact_type
                                ? a(
                                    "v-row",
                                    {
                                      staticClass: "px-8",
                                      attrs: {
                                        "no-gutters": "",
                                        align: "center",
                                        justify: "center",
                                      },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        { attrs: { lg: "8", md: "6" } },
                                        [
                                          a("app-form-field", {
                                            attrs: {
                                              enabledLabel: !0,
                                              label:
                                                "Social Contact (Telegram ID)",
                                              rules:
                                                t.validator.requiredRules(),
                                            },
                                            model: {
                                              value:
                                                t.agentObj.social_contact_value,
                                              callback: function (e) {
                                                t.$set(
                                                  t.agentObj,
                                                  "social_contact_value",
                                                  "string" === typeof e
                                                    ? e.trim()
                                                    : e
                                                );
                                              },
                                              expression:
                                                "agentObj.social_contact_value",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              2 == t.agentObj.social_contact_type
                                ? a(
                                    "v-row",
                                    {
                                      staticClass: "px-8",
                                      attrs: {
                                        "no-gutters": "",
                                        align: "center",
                                        justify: "center",
                                      },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        { attrs: { lg: "8", md: "6" } },
                                        [
                                          a("app-form-field", {
                                            attrs: {
                                              enabledLabel: !0,
                                              label:
                                                "Social Contact (IMO Number)",
                                              prefix: t.mobilePrefix,
                                              rules:
                                                t.validator.mobileNumberRules(
                                                  "bd"
                                                ),
                                            },
                                            model: {
                                              value:
                                                t.agentObj.social_contact_value,
                                              callback: function (e) {
                                                t.$set(
                                                  t.agentObj,
                                                  "social_contact_value",
                                                  "string" === typeof e
                                                    ? e.trim()
                                                    : e
                                                );
                                              },
                                              expression:
                                                "agentObj.social_contact_value",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              3 == t.agentObj.social_contact_type
                                ? a(
                                    "v-row",
                                    {
                                      staticClass: "px-8",
                                      attrs: {
                                        "no-gutters": "",
                                        align: "center",
                                        justify: "center",
                                      },
                                    },
                                    [
                                      a(
                                        "v-col",
                                        { attrs: { lg: "8", md: "6" } },
                                        [
                                          a("app-form-field", {
                                            attrs: {
                                              enabledLabel: !0,
                                              label:
                                                "Social Contact (Whatsapp Number)",
                                              prefix: t.mobilePrefix,
                                              rules:
                                                t.validator.mobileNumberRules(
                                                  "bd"
                                                ),
                                            },
                                            model: {
                                              value:
                                                t.agentObj.social_contact_value,
                                              callback: function (e) {
                                                t.$set(
                                                  t.agentObj,
                                                  "social_contact_value",
                                                  "string" === typeof e
                                                    ? e.trim()
                                                    : e
                                                );
                                              },
                                              expression:
                                                "agentObj.social_contact_value",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              a(
                                "v-row",
                                {
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          type: "select",
                                          label: t.$t("field.commissionPayout"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          rules:
                                            t.validator.dropDownListRules(),
                                          items: t.payout_method,
                                          displayText: this.payoutMethodDdlText,
                                        },
                                        model: {
                                          value: t.agentObj.commission_payout,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "commission_payout",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression:
                                            "agentObj.commission_payout",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-form-field", {
                                        attrs: {
                                          enabledLabel: !0,
                                          label: t.$t("field.walletNumber"),
                                          placeholder: t.$t(
                                            "fieldHint.fillUpHere"
                                          ),
                                          prefix: t.mobilePrefix,
                                          errorMsg: t.agentMobileErrorMessage,
                                          blur: t.checkAgentMobile,
                                          rules:
                                            t.validator.mobileNumberRules("bd"),
                                        },
                                        model: {
                                          value: t.agentObj.wallet_mobile,
                                          callback: function (e) {
                                            t.$set(
                                              t.agentObj,
                                              "wallet_mobile",
                                              "string" === typeof e
                                                ? e.trim()
                                                : e
                                            );
                                          },
                                          expression: "agentObj.wallet_mobile",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("v-checkbox", {
                                        staticClass: "mt-0",
                                        attrs: {
                                          label: t.$t(
                                            "message.applyAgentTermAndCondition"
                                          ),
                                        },
                                        model: {
                                          value: t.checkboxValue,
                                          callback: function (e) {
                                            t.checkboxValue = e;
                                          },
                                          expression: "checkboxValue",
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-button", {
                                        class: t.$vuetify.breakpoint.mdAndDown
                                          ? "agent-detail-mobile dialog-button"
                                          : "agent-detail dialog-button",
                                        attrs: {
                                          customClass: "dialog-button-color",
                                          title: t.$t("button.back"),
                                          action: this.backPage,
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
                                  staticClass: "px-8",
                                  attrs: {
                                    "no-gutters": "",
                                    justify: "center",
                                  },
                                },
                                [
                                  a(
                                    "v-col",
                                    { attrs: { lg: "8", md: "6" } },
                                    [
                                      a("app-button", {
                                        class: t.$vuetify.breakpoint.mdAndDown
                                          ? "agent-detail-mobile dialog-button primary"
                                          : "agent-detail dialog-button primary",
                                        attrs: {
                                          disabled: 0 == t.checkboxValue,
                                          title: t.$t("button.joinNow"),
                                          action: this.applyAgent,
                                          "custom-class": "text-uppercase",
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
                      t.applyAgentSuccess
                        ? a(
                            "v-window-item",
                            { attrs: { value: 2 } },
                            [
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-3 font-weight-bold",
                                  staticStyle: { "font-size": "larger" },
                                },
                                [
                                  a(
                                    "v-icon",
                                    {
                                      attrs: { "x-large": "", color: "green" },
                                    },
                                    [t._v("check_circle")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-0 pt-0 font-weight-bold",
                                  staticStyle: { "font-size": "xx-large" },
                                },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(t.$t("field.registerSuccessful"))
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-0 font-weight-bold",
                                  staticStyle: { "font-size": "large" },
                                },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t(
                                          "message.applyAgentReminderMessage"
                                        )
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-2" },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t("message.applyAgentDialogMessage1")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-2 pt-0" },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t("message.applyAgentDialogMessage4")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-0 pt-0" },
                                [
                                  a("label", [
                                    t._v(t._s(t.$t("label.agentBackoffice"))),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-0 pt-0" },
                                [
                                  a(
                                    "a",
                                    {
                                      staticStyle: { color: "blue" },
                                      attrs: { href: t.agentBackofficeUrl },
                                    },
                                    [t._v(t._s(t.agentBackofficeUrl))]
                                  ),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-0 pt-0" },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(t.$t("label.applyAgentContactUs"))
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-2 pt-0" },
                                [
                                  a(
                                    "a",
                                    {
                                      staticStyle: { color: "blue" },
                                      attrs: { href: t.agentWhatsappUrl },
                                    },
                                    [t._v(t._s(t.agentWhatsappUrl))]
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : a(
                            "v-window-item",
                            { attrs: { value: 2 } },
                            [
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-3 font-weight-bold",
                                  staticStyle: { "font-size": "larger" },
                                },
                                [
                                  a(
                                    "v-icon",
                                    { attrs: { "x-large": "", color: "red" } },
                                    [t._v("cancel")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-0 pt-0 font-weight-bold",
                                  staticStyle: { "font-size": "xx-large" },
                                },
                                [
                                  a("label", [
                                    t._v(t._s(t.$t("field.registerFailed"))),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                {
                                  staticClass:
                                    "text-center mt-0 pt-0 font-weight-bold",
                                  staticStyle: { "font-size": "large" },
                                },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t(
                                          "message.applyAgentReminderMessage"
                                        )
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-0" },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t("message.applyAgentDialogMessage1")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              a(
                                "v-col",
                                { staticClass: "text-center mt-0 mb-2 pt-0" },
                                [
                                  a("label", [
                                    t._v(
                                      t._s(
                                        t.$t("message.applyAgentDialogMessage2")
                                      )
                                    ),
                                  ]),
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
        },
        l = [],
        i =
          (a("99af"),
          a("6eba"),
          a("accc"),
          a("0d03"),
          a("b0c0"),
          a("ac1f"),
          a("5319"),
          a("1276"),
          a("4795"),
          a("4260")),
        o = a("2769"),
        n = a.n(o),
        r = a("e6fd"),
        c = a("15a4"),
        g = a("6dc2"),
        d = a("2c2b"),
        p = {
          components: { WatchTutorialVideo: d["a"] },
          beforeRouteLeave: function (t, e, a) {
            t.name != c["a"].APPLY_AGENT && this.resetApplyAgentStore(), a();
          },
          data: function () {
            return {
              validator: i["d"],
              agentObj: {
                agent_id: "",
                password: "",
                real_name: "",
                email: "",
                mobile: "",
                wallet_mobile: "",
                commission_payout: "",
                nid_number: "",
                date_of_birth: "",
                social_contact_type: "",
                social_contact_value: "",
              },
              dateOfBirthMaxDate: new Date(
                Date.now() - 6e4 * new Date().getTimezoneOffset()
              ).toISOString(),
              agentIdErrorMessage: void 0,
              agentMobileErrorMessage: void 0,
              confirm_password: "",
              checkboxValue: "",
              pageDialogShow: !1,
              pageDialog: {
                title: "",
                closePageDialog: function () {},
                messageTitle: "",
                message: [],
                button: [],
              },
              mobileNumberPrefixList: [
                { text: "+91", value: "INR" },
                { text: "+880", value: "BDT" },
              ],
              socialTypeList: i["b"].getSocialContactType(),
              payout_method: i["b"].getPayoutMethod(),
              step: 0,
            };
          },
          created: function () {
            this.metaTag(), this.getConfigUrl();
          },
          computed: {
            applyAgentComplete: function () {
              return this.$store.state.affiliate.applyAgent.complete;
            },
            applyAgentSuccess: function () {
              return this.$store.state.affiliate.applyAgent.success;
            },
            mobilePrefix: function () {
              var t = r["g"].DEFAULT_CURRENCY,
                e = n()(this.mobileNumberPrefixList, function (e) {
                  return e.value == t;
                });
              return e ? e.text : "";
            },
            checkAgentIdResult: function () {
              return this.$store.state.affiliate.checkAgentIdResult.completed;
            },
            checkAgentMobileResult: function () {
              return this.$store.state.affiliate.checkAgentMobileResult
                .completed;
            },
            agentBackofficeUrl: function () {
              return this.$store.state.affiliate.agentConfigUrl.backofficeUrl;
            },
            agentWhatsappUrl: function () {
              return this.$store.state.affiliate.agentConfigUrl.whatsappUrl;
            },
          },
          watch: {
            checkAgentIdResult: function () {
              this.$store.state.affiliate.checkAgentIdResult.completed &&
                (this.$store.state.affiliate.checkAgentIdResult.success
                  ? (this.agentIdErrorMessage = void 0)
                  : -1 == this.$store.state.affiliate.checkAgentIdResult.code
                  ? (this.agentIdErrorMessage = i["e"].getMessage(
                      "fieldErrorMessage.agentIdUsed"
                    ))
                  : -2 == this.$store.state.affiliate.checkAgentIdResult.code &&
                    (this.agentIdErrorMessage = i["e"].getMessage(
                      "fieldErrorMessage.agentIdApplied"
                    )),
                this.$store.dispatch("".concat(g["p"])));
            },
            checkAgentMobileResult: function () {
              this.$store.state.affiliate.checkAgentMobileResult.completed &&
                (this.$store.state.affiliate.checkAgentMobileResult.success
                  ? (this.agentMobileErrorMessage = void 0)
                  : -1 ==
                      this.$store.state.affiliate.checkAgentMobileResult.code &&
                    (this.agentMobileErrorMessage = i["e"].getMessage(
                      "fieldErrorMessage.agentMobileUsed"
                    )),
                this.$store.dispatch("".concat(g["q"])));
            },
            applyAgentSuccess: function () {
              var t = this;
              this.$store.state.affiliate.applyAgent.success && this.step++,
                this.$store.state.affiliate.applyAgent.success &&
                  this.$store.state.affiliate.applyAgent.automation &&
                  2 == this.step &&
                  setTimeout(function () {
                    window.location.href =
                      t.$store.state.affiliate.agentConfigUrl.backofficeUrl;
                  }, 2e4);
            },
          },
          methods: {
            metaTag: function () {
              var t = window.location.href;
              i["f"].setCanonical(t);
              var e = t.split("/")[2],
                a = e.replace(/(^\w+:|^)\/\//, ""),
                s = window.location.pathname,
                l = s.replace(/\/()/i, ""),
                o = "https://".concat(a).concat(l),
                n = "https://".concat(a, "/").concat(l),
                r = "https://".concat(a, "/").concat(l);
              i["f"].setMetaTag("url", o),
                i["f"].setMetaTag("og:url", o),
                i["f"].setHreflangLinks(o),
                i["f"].setHreflangLinksen(n),
                i["f"].setHreflangLinksbd(r),
                this.$route.params.lang
                  ? (i["f"].setTitle(
                      "".concat(i["e"].getMessage("meta.agent_lang_title"))
                    ),
                    i["f"].setMetaTag(
                      "description",
                      "".concat(
                        i["e"].getMessage("meta.agent_lang_description")
                      )
                    ))
                  : (i["f"].setTitle(
                      "".concat(i["e"].getMessage("meta.agent_title"))
                    ),
                    i["f"].setMetaTag(
                      "description",
                      "".concat(i["e"].getMessage("meta.agent_description"))
                    ));
            },
            resetApplyAgentStore: function () {
              this.$store.dispatch("".concat(g["o"]));
            },
            getConfigUrl: function () {
              this.$store.dispatch("".concat(g["f"]));
            },
            nextPage: function () {
              this.$refs.bankAccountForm1.validate() && this.step++;
            },
            backPage: function () {
              this.step--;
            },
            applyAgent: function () {
              if (this.$refs.bankAccountForm2.validate()) {
                var t = this.agentObj;
                this.$store.dispatch("".concat(g["c"]), { agentObj: t });
              }
            },
            checkAgentId: function () {
              var t = this.agentObj.agent_id;
              this.$store.dispatch("".concat(g["d"]), { agentObj: t }),
                this.$refs.password.validate();
            },
            checkAgentMobile: function () {
              var t = this.agentObj.mobile;
              this.$store.dispatch("".concat(g["e"]), { agentObj: t });
            },
            payoutMethodDdlText: function (t) {
              var e;
              return (
                (e = i["e"].getMessage("agentPayoutMethod.".concat(t.value))), e
              );
            },
            socialContactTypeDdlText: function (t) {
              var e;
              return (
                (e = i["e"].getMessage(
                  "agentSocialContactType.".concat(t.value)
                )),
                e
              );
            },
            initializePageDialogProperty: function () {
              var t = {
                title: i["e"].getMessage("label.system"),
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
              this.$eventHub.$emit("close-page-dialog", !0),
                this.applyAgentSuccess &&
                  this.$router.push({ name: c["a"].HOME }),
                this.$store.dispatch("".concat(g["o"]));
            },
          },
        },
        f = p,
        u = (a("5e1b"), a("2877")),
        b = a("6544"),
        m = a.n(b),
        v = a("b0af"),
        h = a("99d9"),
        _ = a("ac7c"),
        y = a("62ad"),
        x = a("4bd4"),
        $ = a("132d"),
        w = a("0fd9"),
        j = a("f665"),
        k = a("1e6c"),
        C = Object(u["a"])(f, s, l, !1, null, null, null);
      e["default"] = C.exports;
      m()(C, {
        VCard: v["a"],
        VCardTitle: h["d"],
        VCheckbox: _["a"],
        VCol: y["a"],
        VForm: x["a"],
        VIcon: $["a"],
        VRow: w["a"],
        VWindow: j["a"],
        VWindowItem: k["a"],
      });
    },
    "46b0": function (t, e, a) {},
    "5e1b": function (t, e, a) {
      "use strict";
      var s = a("46b0"),
        l = a.n(s);
      l.a;
    },
  },
]);
//# sourceMappingURL=chunk-8221158c.567966d5.js.map
