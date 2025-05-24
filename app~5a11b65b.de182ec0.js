(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~5a11b65b"],
  {
    "56d7": function (a, e, t) {
      "use strict";
      t.r(e);
      t("e260"), t("e6cf"), t("cca6"), t("a79d"), t("db4d");
      var n = t("2b0e"),
        o = t("3dfd"),
        l = t("a18c"),
        c = t("4360"),
        u = t("d3a4"),
        p = t("f309");
      n["default"].use(p["a"]);
      var d = new p["a"]({
          icons: { iconfont: "mdi" },
          theme: {
            dark: !1,
            themes: {
              light: {
                light_black: "#303030",
                body: "#d5d5d5",
                base: "#d5d5d5",
                base_2: "#D5D5D5",
                base_3: "#f5f5f5",
                base_4: "#fafafa",
                primary: "#378F6A",
                primary_2: "#ffdf1a",
                primary_3: "#252A6F",
                secondary: "#f56908",
                secondary_2: "#ff0000",
                secondary_3: "#0B5376",
                buttonPrimary: "#14805e",
                buttonHover: "#3c7591",
                buttonPressed: "#093a52",
                buttonDisabled: "#d5d5d5",
                buttonWhite: "#ffffff",
                title_color: "#14805e",
                text_color: "#000000",
                description: "#C6C6C6",
                hightlight_divider: "#14805e",
                icon_color: "#14805e",
                navigation_drawer: "#c5c5c5",
                footer_color: "#d5d5d5",
                disabled: "#C6C6C6",
                background: "#d5d5d5",
                background_2: "#f56908",
                divider: "#3A3A3A",
                text_reverse: "#ffffff",
                border: "#d3d3d3",
                fullWhite: "#ffffff",
              },
              dark: {
                body: "#111111",
                base: "#111111",
                base_2: "#F2F2F2",
                base_3: "#D5D5D5",
                base_4: "#333333",
                title_color: "#14805e",
                text_color: "#ffffff",
                description: "#999999",
                primary: "#14805e",
                primary_2: "#ffdf1a",
                primary_3: "#252A6F",
                secondary: "#f56908",
                secondary_2: "#ff0000",
                secondary_3: "#0B5376",
                buttonPrimary: "#14805e",
                buttonHover: "#3c7591",
                buttonPressed: "#093a52",
                buttonDisabled: "#d5d5d5",
                buttonGold_primary: "#FFA15C",
                buttonGold_secondary: "#E2D200",
                navigator_active: "#FFCE5E",
                hightlight_divider: "#14805e",
                icon_color: "#14805e",
                navigation_drawer: "#252525",
                footer_color: "#111111",
                disabled: "#C6C6C6",
                background: "#111111",
                background_2: "#f56908",
                divider: "#3A3A3A",
                text_reverse: "#000000",
                border: "#d3d3d3",
              },
            },
            options: { customProperties: !0 },
          },
          breakpoint: {
            thresholds: { xs: 600, sm: 960, md: 1024, lg: 1350, xl: 1650 },
            scrollBarWidth: 15,
          },
        }),
        r = t("e6fd"),
        m = (t("d1e78"), t("8975"), t("f843"), t("618a")),
        s = t("4bc3"),
        i = t("c1ee"),
        f = t("06de"),
        b = t("2a7d"),
        y = t("1332"),
        h = t("9565"),
        g = t("9b86"),
        R = t("0b01"),
        D = t("4eb5"),
        B = t.n(D),
        E = t("0284"),
        O = t.n(E),
        _ = t("f24a"),
        I = t("729d"),
        k = t("6a3f"),
        A = t("7b75"),
        S = t.n(A);
      t.d(e, "eventBus", function () {
        return T;
      }),
        n["default"].use(k["a"]),
        (n["default"].prototype.$eventHub = new n["default"]()),
        n["default"].use(_["a"]),
        n["default"].use(B.a),
        n["default"].use(O.a, { id: r["g"].GA_TRACKING_CODE, router: l["a"] }),
        n["default"].use(I["a"]),
        n["default"].use(S.a),
        n["default"].component("layout-master", m["a"]),
        n["default"].component("blank-layout-master", s["a"]),
        n["default"].component("app-form-field", i["a"]),
        n["default"].component("agent-app-form-field", f["a"]),
        n["default"].component("app-button", b["a"]),
        n["default"].component("button-primary", y["a"]),
        n["default"].component("app-dialog", h["a"]),
        n["default"].component("app-date-time-picker", g["a"]),
        n["default"].component("profile-sheet", R["a"]),
        n["default"].component("v-style", {
          render: function (a) {
            return a("style", this.$slots["default"]);
          },
        }),
        (n["default"].config.productionTip = !1);
      var T = new n["default"]();
      (n["default"].prototype.$eventHub = new n["default"]()),
        new n["default"]({
          router: l["a"],
          store: c["a"],
          i18n: u["a"],
          vuetify: d,
          render: function (a) {
            return a(o["a"]);
          },
          beforeMount: function () {
            var a = window.location.hostname;
            console.log("One signal currentdomain : " + a),
              /\bkrikya.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "9c76e1d2-a7e2-45e5-843d-31ed9766af6e" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "9c76e1d2-a7e2-45e5-843d-31ed9766af6e"
                    );
                  }),
              /\bkrikya.co\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "040a12e6-118f-49ef-a206-38173a0c5f07" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "040a12e6-118f-49ef-a206-38173a0c5f07"
                    );
                  }),
              /\bkrikya.group\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "4543e1a5-4195-4f1f-bc2c-78a52498a9ff" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "4543e1a5-4195-4f1f-bc2c-78a52498a9ff"
                    );
                  }),
              /\bkrikya.best\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "fb79d44e-a043-4f0d-b786-dc04304207e2" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "fb79d44e-a043-4f0d-b786-dc04304207e2"
                    );
                  }),
              /\bkrikya11.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "54d6f806-3eeb-41c8-a80f-0b6d2f49ad90" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "54d6f806-3eeb-41c8-a80f-0b6d2f49ad90"
                    );
                  }),
              /\bkrikya.pro\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "a6f36e33-119c-4738-8c64-49e3ffb9b264" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "a6f36e33-119c-4738-8c64-49e3ffb9b264"
                    );
                  }),
              /\bkrikya.club\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "72ade366-ac74-444c-9496-544c3a8aafff" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "72ade366-ac74-444c-9496-544c3a8aafff"
                    );
                  }),
              /\bkrikya.app\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "b62d7397-a3fe-4019-af8c-7a651858be2d" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "b62d7397-a3fe-4019-af8c-7a651858be2d"
                    );
                  }),
              /\bkrikya22.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "3ba2378d-a5a0-4f9a-a101-e12557f8a2fa" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "3ba2378d-a5a0-4f9a-a101-e12557f8a2fa"
                    );
                  }),
              /\bkrikya44.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "f40c825d-8dbf-4afd-91d5-0e6e6d3c973a" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "f40c825d-8dbf-4afd-91d5-0e6e6d3c973a"
                    );
                  }),
              /\bkrikya55.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "1f58bbab-04b4-4212-852c-1a13227b5544" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "1f58bbab-04b4-4212-852c-1a13227b5544"
                    );
                  }),
              /\bkrikya66.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "c03201af-7715-40ec-a4ae-b46f85606388" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "c03201af-7715-40ec-a4ae-b46f85606388"
                    );
                  }),
              /\bkrikya77.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "f68a3d1a-8eca-4737-8a1e-87268975cd2c" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "f68a3d1a-8eca-4737-8a1e-87268975cd2c"
                    );
                  }),
              /\bkrikya.one\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "b21c9527-e58d-4698-82ce-19697cd18bc8" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "b21c9527-e58d-4698-82ce-19697cd18bc8"
                    );
                  }),
              /\bbdkrikya.online\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "4fddbd27-13c9-48f5-a244-6e86e318f985" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "4fddbd27-13c9-48f5-a244-6e86e318f985"
                    );
                  }),
              /\bbdkrikya.net\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "e41e8f3c-9515-42ce-a52e-cd5ae435ada4" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "e41e8f3c-9515-42ce-a52e-cd5ae435ada4"
                    );
                  }),
              /\bkrikya.io\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "d2cfdaba-66d9-4a20-b8c7-6ae7d8e23dde" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "d2cfdaba-66d9-4a20-b8c7-6ae7d8e23dde"
                    );
                  }),
              /\bkrikya.today\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "7e33c33e-cc36-418b-8d4c-2edab7c35774" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "7e33c33e-cc36-418b-8d4c-2edab7c35774"
                    );
                  }),
              /\bkrikya.tech\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "1be6e355-9df9-430a-83c9-fb014009de6b" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "1be6e355-9df9-430a-83c9-fb014009de6b"
                    );
                  }),
              /\bkrikya.business\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "fd4617fd-21b6-4494-ab2f-f850fa77bfd2" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "fd4617fd-21b6-4494-ab2f-f850fa77bfd2"
                    );
                  }),
              /\bkrikya.lol\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "a0abc7c1-af22-4ee9-8a46-6be8883bd2fa" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "a0abc7c1-af22-4ee9-8a46-6be8883bd2fa"
                    );
                  }),
              /\bkrikya.space\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "17767b8c-a379-4d63-8b5b-b6186cef5001" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "17767b8c-a379-4d63-8b5b-b6186cef5001"
                    );
                  }),
              /\bkrikyavip.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "13ecaed4-2883-4ca7-a5c3-304a2fd2e2d4" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "13ecaed4-2883-4ca7-a5c3-304a2fd2e2d4"
                    );
                  }),
              /\b16896kk332.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "de122127-5513-43e6-94b5-c32856a2d5c5" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "de122127-5513-43e6-94b5-c32856a2d5c5"
                    );
                  }),
              /\bkrikya-play.com\b/.test(a) &&
                this.$OneSignal
                  .init({ appId: "27d866a3-eff3-42eb-ae57-5c38357b0bb2" })
                  .then(function () {
                    console.log(
                      "app id key set successful",
                      "27d866a3-eff3-42eb-ae57-5c38357b0bb2"
                    );
                  });
          },
        }).$mount("#app");
    },
    a18c: function (a, e, t) {
      "use strict";
      t("d3b7");
      var n = t("2b0e"),
        o = t("8c4f"),
        l = (t("58ca"), t("15a4")),
        c = t("4260");
      n["default"].use(o["a"]);
      var u = { name: l["a"].HOME },
        p = function (a, e, t) {
          c["f"].isAuthenticated() ? t() : t(u);
        },
        d = new o["a"]({
          mode: "history",
          base: "/",
          routes: [
            {
              path: "/home/",
              redirect: "/",
              pathToRegexpOptions: { strict: !0 },
            },
            {
              path: "/sc",
              name: l["a"].SHORTCUT,
              meta: { layout: "layout-master" },
              component: t("0345")["default"],
            },
            {
              path: "/reset-password",
              name: l["a"].RESET_PASSWORD,
              meta: { layout: "layout-master" },
              component: t("f879")["default"],
            },
            {
              path: "/contact-verification",
              name: l["a"].CONTACT_VERIFICATION,
              meta: { layout: "layout-master" },
              component: t("93f4")["default"],
            },
            {
              path: "/register-mobile",
              name: l["a"].REGISTER_MOBILE,
              meta: { layout: "layout-master" },
              component: t("4d88")["default"],
            },
            {
              path: "/register/",
              redirect: { name: l["a"].REGISTER },
              pathToRegexpOptions: { strict: !0 },
            },
            {
              path: "/register",
              name: l["a"].REGISTER,
              props: {
                registerErrorMsg: "",
                openLoginDialog: function () {},
                isMobileRegistration: !0,
              },
              meta: { layout: "layout-master" },
              component: t("4f66")["default"],
              pathToRegexpOptions: { strict: !0 },
            },
            {
              path: "/affiliate/referral",
              name: l["a"].AFFILIATE_REFFERAL,
              meta: { layout: "layout-master" },
              component: t("4c4c")["default"],
            },
            {
              path: "/sportsbook",
              meta: { layout: "layout-master" },
              component: t("7ce4")["default"],
              pathToRegexpOptions: { strict: !0 },
              children: [
                {
                  path: "/sportsbook",
                  name: l["a"].SPORTSBOOK,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "sb" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].SPORTSBOOK_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "sb" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/fishing",
              meta: { layout: "layout-master" },
              component: t("7239")["default"],
              children: [
                {
                  path: "/fishing",
                  name: l["a"].FISHING,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "fishing" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].FISHING_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "fishing" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/special",
              component: t("9acb")["default"],
              children: [
                {
                  path: "/special",
                  name: l["a"].SPECIAL,
                  meta: { layout: "layout-master" },
                  component: t("17fb")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].SPECIAL_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  component: t("17fb")["default"],
                },
              ],
            },
            {
              path: "/casino",
              meta: { layout: "layout-master" },
              component: t("5def")["default"],
              pathToRegexpOptions: { strict: !0 },
              children: [
                {
                  path: "/casino",
                  name: l["a"].CASINO,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "ld" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].CASINO_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "ld" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/slot",
              meta: { layout: "layout-master" },
              component: t("51ea")["default"],
              children: [
                {
                  path: "/slot",
                  name: l["a"].SLOT,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "rng" },
                  component: t("d04a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].SLOT_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "rng" },
                  component: t("d04a")["default"],
                },
                {
                  path: ":provider/:gamename",
                  name: l["a"].SLOT_BY_PROVIDER_AND_GAMENAME,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "rng" },
                  component: t("d04a")["default"],
                },
                {
                  path: "game/:gamename",
                  name: l["a"].SLOT_BY_GAMENAME,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "rng" },
                  component: t("d04a")["default"],
                },
              ],
            },
            {
              path: "/tablegames",
              meta: { layout: "layout-master" },
              component: t("66e1")["default"],
              children: [
                {
                  path: "/tablegames",
                  name: l["a"].TABLE_GAMES,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "table" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].TABLE_GAMES_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "table" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/lottery",
              meta: { layout: "layout-master" },
              component: t("52ee")["default"],
              children: [
                {
                  path: "/lottery",
                  name: l["a"].LOTTERY,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "lottery" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].LOTTERY_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "lottery" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/crash",
              meta: { layout: "layout-master" },
              component: t("4e85")["default"],
              children: [
                {
                  path: "/crash",
                  name: l["a"].CRASH,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "crash" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].CRASH_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "crash" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/cricket",
              meta: { layout: "layout-master" },
              component: t("c0e1")["default"],
              children: [
                {
                  path: "/cricket",
                  name: l["a"].CRICKET,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "cricket" },
                  component: t("3b6a")["default"],
                },
                {
                  path: ":provider",
                  name: l["a"].CRICKET_BY_PROVIDER,
                  meta: { layout: "layout-master" },
                  props: { providerSelected: "cricket" },
                  component: t("3b6a")["default"],
                },
              ],
            },
            {
              path: "/playgame/:provider/:type",
              name: l["a"].LAUNCH_GAME_LOBBY,
              meta: { layout: "blank-layout-master" },
              component: t("b595")["default"],
            },
            {
              path: "/deposit_vendor",
              name: l["a"].VENDOR_POPUP,
              meta: { layout: "blank-layout-master" },
              component: t("9923")["default"],
            },
            {
              path: "/bank",
              meta: { layout: "layout-master" },
              component: t("95b8")["default"],
              beforeEnter: function (a, e, t) {
                p(a, e, t);
              },
              children: [
                {
                  path: "funds",
                  name: l["a"].FUNDS,
                  meta: { layout: "layout-master" },
                  component: t("7ff9")["default"],
                },
                {
                  path: "deposit-success",
                  name: l["a"].DEPOSIT_SUCCESS,
                  meta: { layout: "layout-master" },
                  component: t("1b7d")["default"],
                },
                {
                  path: "transaction",
                  name: l["a"].TRANSACTION,
                  meta: { layout: "layout-master" },
                  component: t("5eea")["default"],
                },
                {
                  path: "voucher",
                  name: l["a"].CLAIM_VOUCHER,
                  meta: { layout: "layout-master" },
                  component: t("41a6")["default"],
                },
                {
                  path: "transfer",
                  name: l["a"].TRANSFER,
                  meta: { layout: "layout-master" },
                  component: t("ae37")["default"],
                },
                {
                  path: "vip",
                  name: l["a"].VIP_PROFILE,
                  meta: { layout: "layout-master" },
                  component: t("1ea4")["default"],
                },
                {
                  path: "transfer-history",
                  name: l["a"].TRANSFER_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("d1c9")["default"],
                },
                {
                  path: "betting-history",
                  name: l["a"].BETTING_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("44bd")["default"],
                },
                {
                  path: "turnover-history",
                  name: l["a"].TURNOVER_RECORD,
                  meta: { layout: "layout-master" },
                  component: t("c138")["default"],
                },
                {
                  path: "transaction-history",
                  name: l["a"].TRANSACTION_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("d1c9")["default"],
                },
                {
                  path: "bonus-history",
                  name: l["a"].BONUS_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("d1c9")["default"],
                },
                {
                  path: "redemption-history",
                  name: l["a"].REDEMPTION_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("d1c9")["default"],
                },
              ],
            },
            {
              path: "/payment/process",
              name: l["a"].PROCESS_TRANSACTION,
              meta: { layout: "blank-layout-master" },
              component: t("cbb5")["default"],
            },
            {
              path: "/payment/pay-secure",
              name: l["a"].PAY_SECURE,
              meta: { layout: "blank-layout-master" },
              component: t("e19b")["default"],
            },
            {
              path: "/profile/menu",
              name: l["a"].PROFILE_MENU,
              meta: { layout: "layout-master" },
              component: t("c4bd")["default"],
              beforeEnter: function (a, e, t) {
                p(a, e, t);
              },
            },
            {
              path: "/profile/logout",
              name: l["a"].PROFILE_LOGOUT,
              meta: { layout: "layout-master" },
              component: t("8654b")["default"],
            },
            {
              path: "/profile",
              meta: { layout: "layout-master" },
              component: function () {
                return Promise.resolve().then(t.bind(null, "741d"));
              },
              children: [
                {
                  path: "agent/apply",
                  name: l["a"].APPLY_AGENT,
                  meta: { layout: "layout-master" },
                  component: function () {
                    return t.e("chunk-8221158c").then(t.bind(null, "0ee0"));
                  },
                },
                {
                  path: "/agent/apply",
                  redirect: "/profile/agent/apply",
                  pathToRegexpOptions: { strict: !0 },
                },
              ],
            },
            {
              path: "/profile",
              meta: { layout: "layout-master" },
              component: t("741d")["default"],
              beforeEnter: function (a, e, t) {
                p(a, e, t);
              },
              children: [
                {
                  path: "account",
                  name: l["a"].PROFILE,
                  meta: { layout: "layout-master" },
                  component: t("28b1")["default"],
                },
                {
                  path: "personal",
                  name: l["a"].PERSONAL,
                  meta: { layout: "layout-master" },
                  component: t("b21e")["default"],
                },
                {
                  path: "message",
                  name: l["a"].ANNOUNCEMENT,
                  meta: { layout: "layout-master" },
                  component: t("cdb8")["default"],
                },
                {
                  path: "change-password",
                  name: l["a"].CHANGE_PASSWORD,
                  meta: { layout: "layout-master" },
                  component: t("968e")["default"],
                },
                {
                  path: "bank-account",
                  name: l["a"].BANK_ACCOUNT,
                  meta: { layout: "layout-master" },
                  component: t("e174")["default"],
                },
                {
                  path: "inbox",
                  name: l["a"].INBOX,
                  meta: { layout: "layout-master" },
                  component: t("3482")["default"],
                },
                {
                  path: "rewards",
                  name: l["a"].REWARDS,
                  meta: { layout: "layout-master" },
                  component: t("5697")["default"],
                },
              ],
            },
            {
              path: "/rewardStore",
              meta: { layout: "layout-master" },
              component: t("a1b4")["default"],
              children: [
                {
                  path: "/rewardStore",
                  name: l["a"].REWARDSTORE,
                  meta: { layout: "layout-master" },
                  component: t("a1b4")["default"],
                },
              ],
            },
            {
              path: "/daily-checkin",
              name: l["a"].DAILY_CHECKIN,
              meta: { layout: "layout-master" },
              component: t("5697")["default"],
            },
            {
              path: "/voucher",
              name: l["a"].CLAIM_VOUCHER,
              meta: { layout: "layout-master" },
              component: t("41a6")["default"],
            },
            {
              path: "/info",
              meta: { layout: "layout-master" },
              component: t("08fb")["default"],
              children: [
                {
                  path: "faq",
                  name: l["a"].FAQ,
                  meta: { layout: "layout-master" },
                  component: t("1e96")["default"],
                },
                {
                  path: "about-us",
                  name: l["a"].ABOUT_US,
                  meta: { layout: "layout-master" },
                  component: t("914a")["default"],
                },
                {
                  path: "contact-us",
                  name: l["a"].CONTACT_US,
                  meta: { layout: "layout-master" },
                  component: t("da27")["default"],
                },
                {
                  path: "tnc",
                  name: l["a"].TNC,
                  meta: { layout: "layout-master" },
                  component: t("074b")["default"],
                },
              ],
            },
            {
              path: "/promotion",
              meta: { layout: "layout-master" },
              component: t("ba25")["default"],
              children: [
                {
                  path: "/promotion",
                  name: l["a"].PROMOTION,
                  meta: { layout: "layout-master" },
                  component: t("d850")["default"],
                },
                {
                  path: "in-progress",
                  name: l["a"].PROMOTION_IN_PROGRESS,
                  meta: { layout: "layout-master" },
                  component: t("965e")["default"],
                  beforeEnter: function (a, e, t) {
                    p(a, e, t);
                  },
                },
                {
                  path: "history",
                  name: l["a"].PROMOTION_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("d8ec")["default"],
                  beforeEnter: function (a, e, t) {
                    p(a, e, t);
                  },
                },
              ],
            },
            {
              path: "/affiliate/home",
              name: l["a"].AFFILIATE_HOME,
              meta: { layout: "layout-master" },
              component: t("d687")["default"],
            },
            {
              path: "/affiliate",
              meta: { layout: "layout-master" },
              component: t("c4c5")["default"],
              beforeEnter: function (a, e, t) {
                p(a, e, t);
              },
              children: [
                {
                  path: "members",
                  name: l["a"].AFFILIATE_MEMBER_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("99fd")["default"],
                },
                {
                  path: "members-detail",
                  name: l["a"].AFFILIATE_MEMBER_DETAIL_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("3824")["default"],
                },
                {
                  path: "games-report",
                  name: l["a"].AFFILIATE_GAME_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("5830")["default"],
                },
                {
                  path: "agent-report",
                  name: l["a"].AFFILIATE_AGENT_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("af84")["default"],
                },
                {
                  path: "link",
                  name: l["a"].AFFILIATE_LINK,
                  meta: { layout: "layout-master" },
                  component: t("5a84")["default"],
                },
              ],
            },
            {
              path: "/affiliate/bank",
              meta: { layout: "layout-master" },
              component: t("ff75")["default"],
              beforeEnter: function (a, e, t) {
                p(a, e, t);
              },
              children: [
                {
                  path: "withdrawal",
                  name: l["a"].AFFILIATE_WITHDRAWAL,
                  meta: { layout: "layout-master" },
                  component: t("f2e74")["default"],
                },
                {
                  path: "transaction",
                  name: l["a"].AFFILIATE_TRANSACTION,
                  meta: { layout: "layout-master" },
                  component: t("0bb9")["default"],
                },
                {
                  path: "account",
                  name: l["a"].AFFILIATE_BANK_ACCOUNT,
                  meta: { layout: "layout-master" },
                  component: t("754c")["default"],
                },
              ],
            },
            {
              path: "/luckywheel",
              meta: { layout: "layout-master" },
              component: t("2bb79")["default"],
              name: l["a"].WOF,
            },
            {
              path: "/mluckywheel",
              meta: { layout: "layout-master" },
              component: t("7058")["default"],
              name: l["a"].MWOF,
            },
            {
              path: "/grab-coin",
              meta: { layout: "layout-master" },
              component: t("8687")["default"],
              name: l["a"].GRAB_COIN,
            },
            {
              path: "/card-mania",
              meta: { layout: "layout-master" },
              component: t("fe25")["default"],
              name: l["a"].CARD_MANIA,
            },
            {
              path: "/referral",
              meta: { layout: "layout-master" },
              component: t("b2e0")["default"],
              children: [
                {
                  path: "tier",
                  name: l["a"].REFERRAL_TIER,
                  meta: { layout: "layout-master" },
                  component: t("6424")["default"],
                },
                {
                  path: "summary",
                  name: l["a"].REFERRAL_SUMMARY,
                  meta: { layout: "layout-master" },
                  component: t("0878")["default"],
                },
                {
                  path: "report",
                  name: l["a"].REFERRAL_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("6ffa")["default"],
                },
                {
                  path: "downlinereport",
                  name: l["a"].REFERRAL_DOWNLINE_REPORT,
                  meta: { layout: "layout-master" },
                  component: t("9c45")["default"],
                },
                {
                  path: "status",
                  name: l["a"].REFERRAL_STATUS,
                  meta: { layout: "layout-master" },
                  component: t("3b76")["default"],
                },
                {
                  path: "history",
                  name: l["a"].REFERRAL_HISTORY,
                  meta: { layout: "layout-master" },
                  component: t("c910")["default"],
                },
              ],
            },
            {
              path: "/viptiers",
              meta: { layout: "layout-master" },
              component: t("ad35")["default"],
              children: [
                {
                  path: "vip-tier",
                  name: l["a"].VIPTIER,
                  meta: { layout: "layout-master" },
                  component: t("ad35")["default"],
                },
              ],
            },
            {
              path: "/referral",
              meta: { layout: "layout-master" },
              component: t("95b8")["default"],
              children: [
                {
                  path: "bonus",
                  name: l["a"].REFERRAL_BONUS,
                  meta: { layout: "layout-master" },
                  component: t("38d5")["default"],
                },
              ],
            },
            {
              path: "/krikbet",
              meta: { layout: "layout-master" },
              component: t("281d")["default"],
              children: [
                {
                  path: "challenge",
                  name: l["a"].VIP,
                  meta: { layout: "layout-master" },
                  component: t("1db0")["default"],
                  pathToRegexpOptions: { strict: !0 },
                },
                {
                  path: "challenge/",
                  redirect: "challenge",
                  pathToRegexpOptions: { strict: !0 },
                },
              ],
            },
            {
              path: "/error",
              component: t("3a6a")["default"],
              children: [
                {
                  path: "ip-restriction",
                  name: l["a"].ERROR_403,
                  meta: { layout: "blank-layout-master" },
                  component: t("7fa2")["default"],
                },
                {
                  path: "page-not-found",
                  name: l["a"].ERROR_404,
                  meta: { layout: "blank-layout-master" },
                  component: t("2754")["default"],
                },
              ],
            },
            {
              path: "/rewards/instantRebate",
              name: l["a"].REBATE,
              meta: { layout: "layout-master" },
              component: t("ce69")["default"],
            },
            {
              path: "/rewards/rebateHistory",
              name: l["a"].REBATE_HISTORY,
              meta: { layout: "layout-master" },
              component: t("d880")["default"],
            },
            {
              path: "/rewards/rebateHistoryDetail",
              name: l["a"].REBATE_HISTORY_DETAIL,
              meta: { layout: "layout-master" },
              component: t("4f00")["default"],
            },
            {
              path: "/home",
              redirect: "/",
              pathToRegexpOptions: { strict: !0 },
            },
            {
              path: ["/:lang(en-BD|bn-BD)?"],
              alias: "/:lang/home",
              name: l["a"].HOME,
              meta: { layout: "layout-master" },
              component: t("6511")["default"],
              pathToRegexpOptions: { strict: !0 },
            },
            {
              path: "/",
              name: l["a"].HOME,
              meta: { layout: "layout-master" },
              component: t("6511")["default"],
            },
            { path: "*", redirect: { name: l["a"].ERROR_404 } },
          ],
          scrollBehavior: function () {
            return { x: 0, y: 0 };
          },
        });
      e["a"] = d;
    },
    d3a4: function (a, e, t) {
      "use strict";
      var n = t("2b0e"),
        o = t("a925"),
        l = t("e6fd"),
        c = t("edd4"),
        u = (t("3504"), t("2060"), t("5f13")),
        p = t("2393");
      n["default"].use(o["a"]);
      var d = new o["a"]({
        locale: "ms",
        fallbackLocale: l["g"].FALLBACK_LANGUAGE,
        messages: { ta: p, bd: u, en: c },
      });
      e["a"] = d;
    },
  },
]);
//# sourceMappingURL=app~5a11b65b.de182ec0.js.map
