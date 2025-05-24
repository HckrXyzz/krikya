(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~4ebb1a2a"],
  {
    dde5: function (e, t, a) {
      "use strict";
      a("99af");
      var n = a("4260"),
        c = a("e6fd"),
        r = { changePassword: i },
        o = { USER: "/user", PASSWORD: "password", MEMBER: "/member/details" };
      function i(e, t) {
        var a = {
          password: t,
          old_password: e,
          username: localStorage.getItem(c["f"].USERNAME),
        };
        return Object(n["a"])().patch(
          "".concat(o.USER, "/").concat(o.PASSWORD),
          a
        );
      }
      var u = {
          getGames: _,
          getProviderTypeConfig: p,
          launchGame: R,
          gameCategories: g,
          getJackpot: b,
          getPlayerGameDetails: A,
          quickRegister: d,
          kisskayadeeplink: E,
          matchesHighlights: O,
          getHomepageHot: T,
          homeWinningRecord: s,
        },
        m = {
          GAME: "game",
          TYPES: "types",
          CATEGORIES: "categories",
          PLAYER_DETAILS: "playerdetails",
          MEDIA_SERVER_URL: c["g"].MEDIA_SERVER_URL,
          CRICKET_SERVER_URL: c["g"].CRICKET_SERVER_URL,
          SERVER_NAME: c["g"].SERVER_NAME,
          JACKPOT_URL: "json/KRIKYA/grand_jackpot.json",
          QUICK_REGISTER: "quickregister",
          DEEPLINK: "kisskaya/deeplink",
          HOMEPAGE_HOT: "homepagehot",
          HOMEPAGE_WINNING_RECORD: "bw/lastWin?",
        };
      function s(e) {
        var t = { params: { currency: e.currency, size: e.size } };
        return Object(n["a"])().get("/".concat(m.HOMEPAGE_WINNING_RECORD), t);
      }
      function E(e) {
        var t = { provider: e.provider };
        return Object(n["a"])().post(
          "/".concat(m.GAME, "/").concat(m.DEEPLINK),
          t
        );
      }
      function d(e) {
        var t = { provider: e.provider };
        return Object(n["a"])().post(
          "/".concat(m.GAME, "/").concat(m.QUICK_REGISTER),
          t
        );
      }
      function A(e) {
        var t = { params: { provider: e.provider } };
        return Object(n["a"])().get(
          "/".concat(m.GAME, "/").concat(m.PLAYER_DETAILS),
          t
        );
      }
      function _(e) {
        var t = {
          params: {
            currency: e.currency,
            type: e.type,
            size: e.size,
            page: e.page,
            platform: e.platform,
            category: e.category,
            provider: e.provider,
            mode: e.mode,
          },
        };
        return Object(n["a"])().get("/".concat(m.GAME), t);
      }
      function p(e) {
        var t = { params: { currency: e.currency, platform: e.platform } };
        return Object(n["a"])().get("/".concat(m.GAME, "/").concat(m.TYPES), t);
      }
      function R(e) {
        var t = {
          provider: e.provider,
          game_id: e.gameId,
          game_code: e.gameCode,
          is_demo: e.isDemo,
          platform: e.platform,
          language: e.language,
          website: e.webSite,
          currency: e.currency,
          game_type: e.gameType,
        };
        return Object(n["a"])().post("/".concat(m.GAME), t);
      }
      function g() {
        return Object(n["a"])().get(
          "/".concat(m.GAME, "/").concat(m.CATEGORIES)
        );
      }
      function b() {
        return Object(n["a"])("".concat(m.MEDIA_SERVER_URL), !1).get(
          "/".concat(m.JACKPOT_URL)
        );
      }
      function O() {
        return Object(n["a"])(
          "".concat(m.CRICKET_SERVER_URL, "/").concat(m.SERVER_NAME),
          !1
        ).get("/cricket/data_".concat(c["g"].DEFAULT_CURRENCY, ".json"));
      }
      function T(e) {
        var t = {
          params: {
            currency: e.currency,
            size: e.size,
            page: e.page,
            platform: e.platform,
            mode: e.mode,
          },
        };
        return Object(n["a"])().get(
          "/".concat(m.GAME, "/").concat(m.HOMEPAGE_HOT),
          t
        );
      }
      a("4160"),
        a("b0c0"),
        a("d3b7"),
        a("ac1f"),
        a("3ca3"),
        a("5319"),
        a("498a"),
        a("159b"),
        a("ddb0"),
        a("96cf");
      var C = a("1da1"),
        N = {
          changePassword: q,
          forgotPassword: z,
          getDetail: W,
          getWallet: G,
          getWithdrawStatus: $,
          getTurnoverTicket: B,
          turnoverChecking: P,
          login: w,
          logout: H,
          refreshToken: Y,
          getSmsVerificationRequirements: L,
          sendContactVerificationRequest: U,
          verifyContactBySms: k,
          getRewardsUrl: D,
          verifyContact: Z,
          getShortenedLink: j,
          register: h,
          resetPassword: X,
          sendContactVerificationEmail: J,
          updateMember: Q,
          updateMemberEmail: x,
          validateToken: F,
          getVipProgress: ee,
          sendOTP: te,
          verifyOTP: ae,
          getSpecifyWallet: V,
          oneSignalPlayerIds: ne,
          checkUsername: v,
          addNewNumberContact: y,
          checkIfFirstDepositVerification: M,
          requestForgotPassword: l,
          verifyForgotPassword: S,
          updateForgotPassword: f,
          getVipTierProgress: ce,
          getCommunicationUrl: re,
          requestCaptchaCode: oe,
        },
        I = {
          COMMUNICATION: "communication",
          DETAILS: "details",
          INVALIDATE: "invalidate",
          MEMBER: "member",
          MOBILE_REQUIREMENTS: "mobile/requirement",
          MOBILE_REQUEST: "mobile/request",
          MOBILE_VERIFY: "mobile/verify",
          SHORTCUT_LINK: "shortcut",
          PASSWORD: "password",
          REFRESH: "refresh",
          RESET: "reset",
          TOKEN: "token",
          VALIDATE: "validate",
          VERIFICATION: "verification",
          WALLETS: "wallets",
          WITHDRAW_STATUS: "withdrawstatus",
          REWARDS: "rewardsLogin",
          VIP_PROGRESS: "vipProgress",
          SEND_OTP: "sendOTP",
          VERIFY_OTP: "verifyOTP",
          SPECIFIC_WALLET: "specificWallet",
          CHECK_USERNAME: "checkUsername",
          TURNOVER_LIST: "turnover_ticket",
          RESTRICT_WITHDRAWAL: "restrict_withdrawal",
          PLAYER_IDS: "player_ids",
          ONE_SIGNAL: "oneSignal",
          ADD_NEW_NUMBER_CONTACT: "mobile/contact/add",
          CHECK_FIRST_DEPOSIT_VERIFICATION: "mobile/firstDepositVerification",
          REQUEST_FORGOT_PASSWORD_OTP: "reqFgtPsw",
          VERIFY_FORGOT_PASSWORD_OTP: "verifyFgtPsw",
          UPDATE_FORGOT_PASSWORD: "updateFgtPsw",
          VIP_TIER_PROGRESS: "vipTier/level/progress",
          VIP_TIER_COMMUNICATION: "vipTier/communication",
          REQUEST_CAPTCHA_CODE: "requestCaptchaCode",
        };
      function l(e) {
        var t = {
          mobile: e.mobileNumber,
          prefix: e.prefix,
          captcha_id: e.captchaId,
          captcha_code: e.captchaCode,
        };
        return Object(n["a"])().post(
          "/".concat(I.MEMBER, "/").concat(I.REQUEST_FORGOT_PASSWORD_OTP),
          t
        );
      }
      function S(e) {
        var t = {
          mobile: e.mobileNumber,
          sms_token: e.smsToken,
          captcha_id: e.captchaId,
          captcha_code: e.captchaCode,
        };
        return Object(n["a"])().post(
          "/".concat(I.MEMBER, "/").concat(I.VERIFY_FORGOT_PASSWORD_OTP),
          t
        );
      }
      function f(e) {
        var t = {
          membercode: e.memberCode,
          new_password: e.newPassword,
          contact: e.contact,
        };
        return Object(n["a"])().patch(
          "/".concat(I.MEMBER, "/").concat(I.UPDATE_FORGOT_PASSWORD),
          t
        );
      }
      function M() {
        return Object(n["a"])().get(
          "/".concat(I.CHECK_FIRST_DEPOSIT_VERIFICATION)
        );
      }
      function y(e) {
        var t = {
          verification_code: e.verification_code,
          mobile: e.mobileNumber,
          membercode: e.memberCode,
          required_only_primary_verified: !0,
        };
        return Object(n["a"])().post("/".concat(I.ADD_NEW_NUMBER_CONTACT), t);
      }
      function v(e) {
        if (e.memberCode && "" !== e.memberCode.trim()) {
          var t = { membercode: e.memberCode };
          return Object(n["a"])().post(
            "/".concat(I.MEMBER, "/").concat(I.CHECK_USERNAME),
            t
          );
        }
        return { success: !1, code: "EMPTY_USERNAME" };
      }
      function B(e) {
        var t = { params: { is_served: e.is_served } };
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.TURNOVER_LIST),
          t
        );
      }
      function P() {
        return Object(n["a"])().post(
          "/".concat(I.MEMBER, "/").concat(I.RESTRICT_WITHDRAWAL)
        );
      }
      function L() {
        return Object(n["a"])().get("/".concat(I.MOBILE_REQUIREMENTS));
      }
      function D() {
        return Object(n["a"])().post(
          "/".concat(I.MEMBER, "/").concat(I.REWARDS)
        );
      }
      function U(e) {
        var t = {
          membercode: e.memberCode,
          mobile: e.mobileNumber,
          currency: e.currency,
          language: e.language,
          request_otp: e.request_otp,
          captcha_id: e.captchaId,
          captcha_code: e.captchaCode,
        };
        return Object(n["a"])().post("/".concat(I.MOBILE_REQUEST), t);
      }
      function k(e) {
        var t = {
          verification_code: e.verificationCode,
          mobile: e.mobileNumber,
          memberCode: e.memberCode,
          captcha_id: e.captchaId,
          captcha_code: e.captchaCode,
        };
        return Object(n["a"])().post("/".concat(I.MOBILE_VERIFY), t);
      }
      function j(e) {
        return Object(n["a"])().get("/".concat(I.SHORTCUT_LINK, "/").concat(e));
      }
      function h(e) {
        var t = {
          membercode: e.memberCode,
          password: e.password,
          currency: e.currency,
          email: e.email,
          registration_site: e.platform,
          mobile: e.mobileNumber,
          line: e.line,
          referral_code: e.referralCode,
          is_early_bird: e.isEarlyBird,
          domain: e.domain,
          language: e.language,
          verification_code: e.verificationCode,
          reg_type: 2,
          agent_team: e.agent_team,
          utm_source: e.utm_source,
          utm_medium: e.utm_medium,
          utm_campaign: e.utm_campaign,
          s2: e.s2,
          fp: "undefined" == typeof e.fp ? null : e.fp,
          c_id: e.c_id,
          pid: e.pid,
          stag: e.stag,
          tracking_url: e.tracking_link,
        };
        return Object(n["a"])().post("/".concat(I.MEMBER), t);
      }
      function w(e) {
        var t = {
          membercode: e.memberCode,
          password: e.password,
          domain: e.domain,
          platform: e.platform,
          option: e.option,
          fp: e.fp,
        };
        return Object(n["a"])().post("/".concat(I.TOKEN), t);
      }
      function F() {
        return Object(n["a"])().get(
          "/".concat(I.TOKEN, "/").concat(I.VALIDATE)
        );
      }
      function H(e) {
        var t = { domain: e.domain, platform: e.platform };
        return Object(n["a"])().post(
          "/".concat(I.TOKEN, "/").concat(I.INVALIDATE),
          t
        );
      }
      function Y() {
        return Object(n["a"])().post(
          "/".concat(I.TOKEN, "/").concat(I.REFRESH)
        );
      }
      function G() {
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.WALLETS)
        );
      }
      function V(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            e.is_locked ||
              e.is_maintenance ||
              t.push(
                Object(n["a"])().get(
                  "/".concat(I.MEMBER, "/").concat(I.SPECIFIC_WALLET),
                  { params: { provider: e.wallet_code } }
                )
              );
          }),
          Promise.all(t)
        );
      }
      function W() {
        return K.apply(this, arguments);
      }
      function K() {
        return (
          (K = Object(C["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(n["a"])().get(
                          "/".concat(I.MEMBER, "/").concat(I.DETAILS)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          K.apply(this, arguments)
        );
      }
      function z(e) {
        var t = "";
        switch (e.contactType) {
          case c["g"].EMAIL:
            t = e.email;
            break;
          case c["g"].MOBILE:
            t = e.mobile;
            break;
        }
        var a = {
          contact_type: e.contactType,
          membercode: e.memberCode,
          contact: t,
          domain: e.domain,
          language: e.language,
        };
        return Object(n["a"])().post(
          "/".concat(I.PASSWORD, "/").concat(I.COMMUNICATION),
          a
        );
      }
      function q(e) {
        var t = { old_password: e.oldPassword, new_password: e.newPassword };
        return Object(n["a"])().patch(
          "/".concat(I.MEMBER, "/").concat(I.PASSWORD),
          t
        );
      }
      function Q(e) {
        var t = {
          surname: void 0 != e.surname ? e.surname : void 0,
          name: void 0 != e.name ? e.name : void 0,
          gender: void 0 != e.gender ? e.gender : void 0,
          date_of_birth: void 0 != e.dateOfBirth ? e.dateOfBirth : void 0,
          place_of_birth: void 0 != e.nationality ? e.nationality : void 0,
          address: void 0 != e.address ? e.address : void 0,
          country: void 0 != e.country ? e.country : void 0,
          province: void 0 != e.province ? e.province : void 0,
          postcode: void 0 != e.postcode ? e.postcode : void 0,
          nationality: void 0 != e.nationality ? e.nationality : void 0,
          email: void 0 != e.email ? e.email.value : void 0,
          mobile: void 0 != e.mobile ? e.mobile.value : void 0,
          line: void 0 != e.line ? e.line.value : void 0,
        };
        return Object(n["a"])().patch(
          "/".concat(I.MEMBER, "/").concat(I.DETAILS),
          t
        );
      }
      function x(e) {
        var t = { email: e };
        return Object(n["a"])().patch(
          "/".concat(I.MEMBER, "/").concat(I.DETAILS),
          t
        );
      }
      function J(e) {
        var t = {
          type: e.type,
          value: e.value,
          language: e.language,
          domain: e.domain,
        };
        return Object(n["a"])().post(
          "/"
            .concat(I.MEMBER, "/")
            .concat(I.VERIFICATION, "/")
            .concat(I.COMMUNICATION),
          t
        );
      }
      function X(e) {
        var t = {
          membercode: e.memberCode.replace(/\s/g, "+"),
          old_password: e.key.replace(/\s/g, "+"),
          new_password: e.newPassword,
        };
        return Object(n["a"])().post(
          "/".concat(I.PASSWORD, "/").concat(I.RESET),
          t
        );
      }
      function Z(e) {
        var t = {
          membercode: e.memberCode.replace(/\s/g, "+"),
          otp: e.otp.replace(/\s/g, "+"),
          contact_type: e.type.replace(/\s/g, "+"),
          contact_value: e.contact.replace(/\s/g, "+"),
        };
        return Object(n["a"])().post("/".concat(I.VERIFICATION), t);
      }
      function $() {
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.WITHDRAW_STATUS)
        );
      }
      function ee() {
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.VIP_PROGRESS)
        );
      }
      function te(e) {
        var t = {
          params: {
            membercode: e.memberCode,
            mobile: e.mobile,
            prefix: e.prefix,
          },
        };
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.SEND_OTP),
          t
        );
      }
      function ae(e) {
        var t = {
          membercode: e.memberCode,
          mobile: e.mobile,
          sms_token: e.smsToken,
        };
        return Object(n["a"])().post(
          "/".concat(I.MEMBER, "/").concat(I.VERIFY_OTP),
          t
        );
      }
      function ne(e) {
        var t = {
          player_ids: e.player_ids,
          is_subscribe: e.is_subscribe,
          permission_status: e.permission_status,
        };
        return Object(n["a"])().post(
          "/".concat(I.ONE_SIGNAL, "/").concat(I.PLAYER_IDS),
          t
        );
      }
      function ce() {
        return Object(n["a"])().get("/".concat(I.VIP_TIER_PROGRESS));
      }
      function re(e) {
        var t = { params: { type: e.type, currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])().get("/".concat(I.VIP_TIER_COMMUNICATION), t);
      }
      function oe(e) {
        var t = {
          params: { captcha_id: e.captcha_id, captcha_code: e.captcha_code },
        };
        return Object(n["a"])().get(
          "/".concat(I.MEMBER, "/").concat(I.REQUEST_CAPTCHA_CODE),
          t
        );
      }
      var ie = {
          getAnnouncementListing: Ee,
          getAnnouncement: de,
          getPopupListing: se,
          getLoginPopupListing: me,
        },
        ue = { ANNOUNCEMENT: "/announcement" };
      function me(e) {
        var t = {
          params: {
            site: e.site,
            type: e.type,
            size: e.itemsPerPage,
            page: e.page,
            currency: c["g"].DEFAULT_CURRENCY,
          },
        };
        return Object(n["a"])().get("".concat(ue.ANNOUNCEMENT), t);
      }
      function se(e) {
        var t = {
          params: {
            site: e.site,
            type: e.type,
            size: e.itemsPerPage,
            page: e.page,
            currency: c["g"].DEFAULT_CURRENCY,
          },
        };
        return Object(n["a"])().get("".concat(ue.ANNOUNCEMENT), t);
      }
      function Ee(e) {
        var t = {
          params: {
            site: e.site,
            type: e.type,
            size: e.itemsPerPage,
            page: e.page,
            currency: c["g"].DEFAULT_CURRENCY,
          },
        };
        return Object(n["a"])().get("".concat(ue.ANNOUNCEMENT), t);
      }
      function de(e, t) {
        var a = {
          params: {
            site: e.site,
            type: e.type,
            currency: c["g"].DEFAULT_CURRENCY,
          },
        };
        return Object(n["a"])().get(
          "".concat(ue.ANNOUNCEMENT, "/").concat(t),
          a
        );
      }
      var Ae = {
          getCategory: Ne,
          getAnonBonusList: Oe,
          getManualBonusList: Te,
          getMemberAvailableBonusList: Ce,
          getBonusHistory: be,
          getOverallBonusStatus: fe,
          getBonusStatus: Me,
          claimBonus: ye,
          applyBonus: Ie,
          checkVoucherBonus: Se,
          applyVoucherBonus: le,
          checkVipBonus: ve,
          applyVipBonus: Be,
          getRewardCoins: ge,
          getCoinsLogs: Re,
          grabCoinNow: pe,
          claimProgressReward: Pe,
          getVipSummary: Le,
          getRebateHistory: De,
          claimRebate: Ue,
          getRebateProvider: ke,
          getRebateSummaryHistory: je,
          getRebateSummaryDetail: he,
          flipCardNow: we,
          getCardManiaLogs: Fe,
          getCardMania: He,
          getCardManiaUserInfo: Ye,
        },
        _e = {
          BONUS: "bonus",
          CATEGORY: "category",
          OVERALLSTATUS: "overallstatus",
          HISTORY: "history",
          STATUS: "status",
          CLAIM: "claim",
          VOUCHER: "voucher",
          APPLY: "apply",
          CHECK: "check",
          MEMBER: "member",
          VIPBONUS: "vipBonus",
          VIPPROGRESS: "vipProgress",
          GRAB_COIN_SETTINGS: "/reward/grab-coin",
          COIN_LOGS: "/reward/coin-logs",
          GRAB_COIN: "/reward/grab",
          VIP_REWARDS_SUMMARY: "vipRewardsSummary",
          REBATE_HISTORY: "rebate/all",
          REWARD_WALLET: "rewardWallet/log",
          REBATE_PROVIDER: "rebate/provider",
          REBATE_SUMMARY_HISTORY: "rebate/summary/history",
          REBATE_SUMMARY_DETAIL: "rebate/summary/detail",
          CARD_MANIA_SETTINGS: "/reward/card-mania",
          CARD_MANIA_LOGS: "/reward/card-mania-logs",
          CARD_MANIA_FLIP: "/reward/flipCard",
          CARD_MANIA_USER_INFO: "/reward/card-mania-user-info",
        };
      function pe() {
        return Object(n["a"])().post("".concat(_e.GRAB_COIN));
      }
      function Re(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(_e.COIN_LOGS), t);
      }
      function ge(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(_e.GRAB_COIN_SETTINGS), t);
      }
      function be(e) {
        var t = {
          params: {
            overall_status: e.overallStatus,
            apply_start_time: e.fromDate,
            apply_end_time: e.toDate,
            page: e.page,
            size: e.itemsPerPage,
          },
        };
        return Object(n["a"])().get(
          "/".concat(_e.BONUS, "/").concat(_e.HISTORY),
          t
        );
      }
      function Oe() {
        var e = { params: { currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])(null, !1).get("/".concat(_e.BONUS), e);
      }
      function Te() {
        return Object(n["a"])("/", !1).get("".concat(c["g"].BONUS_JSON_URL));
      }
      function Ce() {
        var e = { params: { currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])().get("/".concat(_e.BONUS), e);
      }
      function Ne() {
        return Object(n["a"])().get(
          "/".concat(_e.BONUS, "/").concat(_e.CATEGORY)
        );
      }
      function Ie(e) {
        var t = {
          bonus_id: e.bonusId,
          fund_in_amount: e.depositAmount,
          fund_in_trx_id: e.depositTransactionId,
        };
        return Object(n["a"])().post("".concat(_e.BONUS), t);
      }
      function le(e) {
        var t = { code: e.code };
        return Object(n["a"])().post(
          "".concat(_e.VOUCHER, "/").concat(_e.APPLY),
          t
        );
      }
      function Se(e) {
        var t = { code: e.code };
        return Object(n["a"])().post(
          "".concat(_e.VOUCHER, "/").concat(_e.CHECK),
          t
        );
      }
      function fe() {
        return Object(n["a"])().get(
          "".concat(_e.BONUS, "/").concat(_e.OVERALLSTATUS)
        );
      }
      function Me() {
        return Object(n["a"])().get("".concat(_e.BONUS, "/").concat(_e.STATUS));
      }
      function ye(e) {
        return Object(n["a"])().post(
          "".concat(_e.BONUS, "/").concat(e, "/").concat(_e.CLAIM)
        );
      }
      function ve() {
        return Object(n["a"])().get(
          "".concat(_e.MEMBER, "/").concat(_e.VIPBONUS)
        );
      }
      function Be() {
        return Object(n["a"])().post(
          "".concat(_e.MEMBER, "/").concat(_e.VIPBONUS)
        );
      }
      function Pe() {
        return Object(n["a"])().post(
          "".concat(_e.MEMBER, "/").concat(_e.VIPPROGRESS)
        );
      }
      function Le() {
        return Object(n["a"])().get(
          "".concat(_e.MEMBER, "/").concat(_e.VIP_REWARDS_SUMMARY)
        );
      }
      function De(e) {
        var t = {
          params: {
            page: e.page,
            start_time: e.startTime,
            end_time: e.endTime,
            size: e.size,
          },
        };
        return Object(n["a"])().get(
          "".concat(_e.BONUS, "/").concat(_e.REBATE_HISTORY),
          t
        );
      }
      function Ue() {
        return Object(n["a"])().post(
          "".concat(_e.BONUS, "/").concat(_e.REBATE_HISTORY)
        );
      }
      function ke() {
        var e = { params: { currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])().get(
          "".concat(_e.BONUS, "/").concat(_e.REBATE_PROVIDER),
          e
        );
      }
      function je(e) {
        var t = {
          params: {
            page: e.page,
            start_time: e.startTime,
            end_time: e.endTime,
            size: e.size,
          },
        };
        return Object(n["a"])().get(
          "".concat(_e.BONUS, "/").concat(_e.REBATE_SUMMARY_HISTORY),
          t
        );
      }
      function he(e) {
        var t = { params: { claimed_date: e.claimed_date } };
        return Object(n["a"])().get(
          "".concat(_e.BONUS, "/").concat(_e.REBATE_SUMMARY_DETAIL),
          t
        );
      }
      function we() {
        return Object(n["a"])().post("".concat(_e.CARD_MANIA_FLIP));
      }
      function Fe(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(_e.CARD_MANIA_LOGS), t);
      }
      function He(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(_e.CARD_MANIA_SETTINGS), t);
      }
      function Ye(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(_e.CARD_MANIA_USER_INFO), t);
      }
      a("4e827"), a("0d03"), a("a9e3"), a("b64b"), a("25f0"), a("b85c");
      var Ge = a("6821"),
        Ve = a.n(Ge),
        We = a("818d"),
        Ke = a.n(We),
        ze = {
          MERCHANTS: "Merchants",
          TRANSACTION: "Transactions",
          MEMBER: "Members",
          CURRENCY: "Currency",
          CANCEL: "Cancel",
          BANKS: "banks",
          MEMBER_BANK_ACCOUNTS: "member_bank_accounts",
          MERCHANTS_BANK_ACCOUNTS: "BankAccounts",
          AVAILABLE_METHODS: "payment_methods",
          PROCESS_TRANSACTION: "process",
          GATEWAY_SUPPORTED_BANK: "GatewaySupportedBank",
          PAYMENT: "payment",
          API_URL: c["a"].PAYMENT_URL,
          MERCHANTS_CODE: c["d"].PAYMENT_MERCHANTS_CODE,
          MERCHANTS_KEY: c["d"].PAYMENT_MERCHANTS_KEY,
          CONFIGURATION: "configuration/depositPercentage",
        },
        qe = {
          getBank: Qe,
          getAvailableMethod: xe,
          getMerchantBankAccount: Je,
          getOnlinePaymentSupportedBank: Xe,
          getMemberBankAccount: Ze,
          putMemberBankAccount: $e,
          deleteMemberBankAccount: et,
          newMemberBankAccount: tt,
          getTransaction: at,
          cancelTransaction: nt,
          postTransaction: ct,
          processTransaction: rt,
          getPaymentHistory: ot,
          getDepositPercentConfiguration: it,
        };
      function Qe(e) {
        return Object(n["a"])().get("/".concat(ze.BANKS));
      }
      function xe(e) {
        return Object(n["a"])().get("/".concat(ze.AVAILABLE_METHODS));
      }
      function Je(e) {
        return Object(n["a"])(ze.API_URL).get(
          "/"
            .concat(ze.MERCHANTS, "/")
            .concat(ze.MERCHANTS_CODE, "/")
            .concat(ze.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(ze.CURRENCY, "/")
            .concat(e.currency, "/")
            .concat(ze.MERCHANTS_BANK_ACCOUNTS)
        );
      }
      function Xe(e) {
        return Object(n["a"])(ze.API_URL).get(
          "/"
            .concat(ze.MERCHANTS, "/")
            .concat(ze.MERCHANTS_CODE, "/")
            .concat(ze.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(ze.GATEWAY_SUPPORTED_BANK)
        );
      }
      function Ze(e) {
        return Object(n["a"])().get("/".concat(ze.MEMBER_BANK_ACCOUNTS));
      }
      function $e(e) {
        var t = {
          accountName: e.memberBankAccountName,
          accountNumber: e.memberBankAccountNumber,
          province: e.memberBankProvince,
          branch: e.memberBankBranch,
          city: e.memberBankCity,
          bankName: e.memberBankName,
          updatedBy: e.memberCode,
        };
        return Object(n["a"])(ze.API_URL).put(
          "/"
            .concat(ze.MEMBER_BANK_ACCOUNTS, "/")
            .concat(e.memberBankAccountId),
          t
        );
      }
      function et(e) {
        return Object(n["a"])(ze.API_URL)["delete"](
          "/".concat(ze.MEMBER_BANK_ACCOUNTS, "/").concat(e.memberBankAccountId)
        );
      }
      function tt(e) {
        var t = {
          account_name: e.memberBankAccountName,
          account_number: e.memberBankAccountNumber,
          bank_code: e.bankCode,
          bank_name: e.memberBankName,
        };
        return Object(n["a"])().post("/".concat(ze.MEMBER_BANK_ACCOUNTS), t);
      }
      function at(e) {
        var t = Ke()(
            "merchantcode={0}&membercode={1}&currencycode={2}&key={3}",
            ze.MERCHANTS_CODE,
            e.memberCode,
            e.currency,
            ze.MERCHANTS_KEY
          ),
          a = {
            params: {
              fromdate: e.fromDate,
              todate: e.toDate,
              transtype: e.transType,
              signature: Ve()(t),
              page: e.page,
              itemsperpage: e.itemsPerPage,
            },
          };
        return Object(n["a"])(ze.API_URL).get(
          "/"
            .concat(ze.MERCHANTS, "/")
            .concat(ze.MERCHANTS_CODE, "/")
            .concat(ze.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(ze.CURRENCY, "/")
            .concat(e.currency, "/")
            .concat(ze.TRANSACTION),
          a
        );
      }
      function nt(e) {
        var t = Ke()(
            "merchantcode={0}&transid={1}&key={2}",
            ze.MERCHANTS_CODE,
            e.transactionId,
            ze.MERCHANTS_KEY
          ),
          a = {
            params: {
              transid: e.transactionId,
              merchantcode: ze.MERCHANTS_CODE,
              signature: Ve()(t),
            },
          };
        return Object(n["a"])(ze.API_URL).put(
          "/"
            .concat(ze.MERCHANTS, "/")
            .concat(ze.MERCHANTS_CODE, "/")
            .concat(ze.TRANSACTION, "/")
            .concat(e.transactionId, "/")
            .concat(ze.CANCEL, "?signature=")
            .concat(a.params.signature),
          a
        );
      }
      function ct(e) {
        if ("Deposit" == e.transactionType) {
          if ("NLB" == e.methodCode) {
            var t = new FormData();
            return (
              "undefined" != typeof e.rawAttachment &&
                "" != e.rawAttachment &&
                t.append("attachment", e.rawAttachment),
              t.append("amount", e.amount),
              t.append("transaction_type", e.transactionType),
              t.append("method_code", e.methodCode),
              t.append("gateway_provider_code", e.gatewayProviderCode),
              t.append("member_account_number", e.memberBankAccountNumber),
              t.append("member_account_name", e.memberBankAccountName),
              t.append("member_account_bank_code", e.memberBankName),
              t.append("gateway_bank_code", e.gatewayAccountBankId),
              t.append("company_bank_code", e.merchantLocalBankCode),
              Object(n["a"])().post("/".concat(ze.PAYMENT), t)
            );
          }
          var a = {
            amount: Number(e.amount),
            transaction_type: e.transactionType,
            method_code: e.methodCode,
            gateway_provider_code: e.gatewayProviderCode,
            member_account_number: e.memberBankAccountNumber,
            member_account_name: e.memberBankAccountName,
            member_account_bank_code: e.gatewayAccountBankId,
            gateway_bank_code: e.gatewayAccountBankId,
            company_bank_code: e.merchantBankCode,
          };
          for (var c in a) {
            var r = a[c];
            ("undefined" !== typeof r &&
              null !== r &&
              0 !== r.toString().length) ||
              delete a[c];
          }
          return Object(n["a"])().post("/".concat(ze.PAYMENT), a);
        }
        if ("Withdrawal" == e.transactionType) {
          if ("NWLB" == e.methodCode) {
            var o = {
              amount: Number(e.amount),
              transaction_type: e.transactionType,
              method_code: e.methodCode,
              gateway_provider_code: e.gatewayProviderCode,
              member_account_number: e.memberBankAccountNumber,
              member_account_name: e.memberBankAccountName,
              member_account_bank_code: e.memberBankName,
              gateway_bank_code: e.gatewayAccountBankId,
            };
            for (var i in o) {
              var u = o[i];
              ("undefined" !== typeof u &&
                null !== u &&
                0 !== u.toString().length) ||
                delete o[i];
            }
            return Object(n["a"])().post("/".concat(ze.PAYMENT), o);
          }
          var m = {
            amount: Number(e.amount),
            transaction_type: e.transactionType,
            method_code: e.methodCode,
            gateway_provider_code: e.gatewayProviderCode,
            member_account_number: e.memberBankAccountNumber,
            member_account_name: e.memberBankAccountName,
            member_account_bank_code: e.gatewayAccountBankId,
            gateway_bank_code: e.gatewayAccountBankId,
          };
          for (var s in m) {
            var E = m[s];
            ("undefined" !== typeof E &&
              null !== E &&
              0 !== E.toString().length) ||
              delete m[s];
          }
          return Object(n["a"])().post("/".concat(ze.PAYMENT), m);
        }
      }
      function rt(e) {
        return Object(n["a"])().post(
          "/"
            .concat(ze.PAYMENT, "/")
            .concat(e.transactionId, "/")
            .concat(ze.PROCESS_TRANSACTION),
          e
        );
      }
      function ot(e) {
        var t = {
          params: {
            page: e.page,
            type: e.type,
            start_time: e.startTime,
            end_time: e.endTime,
            size: e.size,
          },
        };
        return Object(n["a"])().get("/".concat(ze.PAYMENT), t);
      }
      function it() {
        return Object(n["a"])().get("/".concat(ze.CONFIGURATION));
      }
      var ut = {
          getTransferType: st,
          getTransferHistory: dt,
          transferWallet: Et,
          semiTransfer: At,
          withdrawalRestore: _t,
          getTransactionHistory: pt,
        },
        mt = {
          TRANSFER: "transfer",
          HISTORY: "histories",
          TYPES: "types",
          SEMITRANSFER: "semi_transfer",
          RESTORE: "restore",
        };
      function st() {
        return Object(n["a"])().get(
          "/".concat(mt.TRANSFER, "/").concat(mt.TYPES)
        );
      }
      function Et(e) {
        var t = {
          from_wallet: e.from_wallet,
          to_wallet: e.to_wallet,
          amount: e.amount,
        };
        return Object(n["a"])().post("/".concat(mt.TRANSFER), t);
      }
      function dt(e) {
        var t = {
          params: {
            page: e.page,
            size: e.itemsPerPage,
            status: e.status,
            type: e.type,
            from_wallet: e.fromWallet,
            to_wallet: e.toWallet,
            start_time: e.fromDate,
            end_time: e.toDate,
          },
        };
        return Object(n["a"])().get(
          "/".concat(mt.TRANSFER, "/").concat(mt.HISTORY),
          t
        );
      }
      function At(e) {
        var t = { to_wallet: e.to_wallet };
        return Object(n["a"])().post(
          "/".concat(mt.TRANSFER, "/").concat(mt.SEMITRANSFER),
          t
        );
      }
      function _t() {
        return Object(n["a"])().post(
          "/".concat(mt.TRANSFER, "/").concat(mt.RESTORE)
        );
      }
      function pt(e) {
        var t = {
          params: {
            page: e.page,
            start_time: e.startTime,
            end_time: e.endTime,
            size: e.size,
          },
        };
        return Object(n["a"])().get(
          "/".concat(mt.TRANSFER, "/").concat(mt.HISTORY),
          t
        );
      }
      var Rt = { getCountry: bt, getProvince: Ot },
        gt = {
          LOOKUP: "lookup",
          COUNTRIES: "countries",
          PROVINCES: "provinces",
        };
      function bt(e) {
        var t = { params: { language: e.language } };
        return Object(n["a"])().get(
          "/".concat(gt.LOOKUP, "/").concat(gt.COUNTRIES),
          t
        );
      }
      function Ot(e) {
        var t = {
          params: { language: e.language, country_code: e.countryCode },
        };
        return Object(n["a"])().get(
          "/".concat(gt.LOOKUP, "/").concat(gt.PROVINCES),
          t
        );
      }
      a("9911");
      var Tt = {
          getDetails: Nt,
          getReferralLink: It,
          getProductReport: lt,
          getProductDetailReport: St,
          upgradeAffiliateType: ft,
          getMemberReport: Mt,
          getMemberDetailReport: yt,
          getQuickLink: Bt,
          getAgentReport: vt,
          getReferralCode: Pt,
          getAffiliateTypeLog: Lt,
          getAffiliateTransferHistory: Dt,
          getAgentProductDownlineReport: Ut,
          getAffiliateDownlineListing: kt,
          getAffiliateDownlineDetail: jt,
          getAffiliateUplineReferral: ht,
          getAffiliateBonusDetail: wt,
          applyAgent: Ft,
          applyAgentDetail: Ht,
          checkAgentId: Yt,
          checkAgentMobile: Gt,
          getAgentConfigUrl: Vt,
        },
        Ct = {
          AFFILIATE: "affiliate",
          QUICKLINK: "quicklink",
          DETAILS: "details",
          REPORTS: "reports",
          PRODUCTS: "products",
          TYPE: "type",
          LIST: "list",
          AGENTS: "agents",
          CODE: "code",
          LOG: "log",
          HISTORY: "histories",
          DOWNLINE: "downline",
          UPLINE: "upline",
          REFERRAL: "referral",
          BONUS_DETAIL: "bonus/detail",
          ONETIME: "one-time/bonus",
          APPLY_AGENT: "apply/agent",
          APPLY_AGENT_DETAIL: "apply/agent/detail",
          CHECK_ID: "apply/agent/checkId",
          CHECK_MOBILE: "apply/agent/checkMobile",
          URL_CONFIG: "url/detail",
        };
      function Nt() {
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.DETAILS)
        );
      }
      function It(e) {
        var t = { params: { mode: e.mode, language: e.link } };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.QUICKLINK),
          t
        );
      }
      function lt(e) {
        var t = {
          params: {
            mode: e.mode,
            report_start_date: e.startDate,
            report_end_date: e.endDate,
          },
        };
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.REPORTS, "/")
            .concat(Ct.PRODUCTS),
          t
        );
      }
      function St(e) {
        var t = {
          params: {
            mode: e.mode,
            sort: "report_date DESC",
            report_start_date: e.startDate,
            report_end_date: e.endDate,
            product_type: e.productType,
          },
        };
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.REPORTS, "/")
            .concat(Ct.PRODUCTS),
          t
        );
      }
      function ft() {
        return Object(n["a"])().patch(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.TYPE)
        );
      }
      function Mt(e) {
        var t = {
          params: { size: e.size, page: e.page, is_member_active: e.status },
        };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.LIST),
          t
        );
      }
      function yt(e) {
        var t = {
          params: {
            mode: e.mode,
            size: e.size,
            page: e.page,
            sort: "report_date DESC",
            report_start_date: e.startDate,
            report_end_date: e.endDate,
          },
        };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.REPORTS),
          t
        );
      }
      function vt(e) {
        var t = {
          params: {
            mode: e.mode,
            size: e.size,
            page: e.page,
            affiliate_type: e.affiliateType,
            sort: "report_date DESC",
            report_start_date: e.startDate,
            report_end_date: e.endDate,
          },
        };
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.REPORTS, "/")
            .concat(Ct.AGENTS),
          t
        );
      }
      function Bt(e) {
        var t = { domain: e.domain };
        return Object(n["a"])().post(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.QUICKLINK),
          t,
          { params: { mode: e.mode, language: e.language } }
        );
      }
      function Pt(e) {
        var t = { params: { name: e.name } };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.CODE),
          t
        );
      }
      function Lt() {
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.TYPE, "/").concat(Ct.LOG)
        );
      }
      function Dt(e) {
        var t = {
          params: {
            page: e.page,
            size: e.itemsPerPage,
            status: e.status,
            type: e.type,
            from_wallet: e.fromWallet,
            to_wallet: e.toWallet,
            start_time: e.fromDate,
            end_time: e.toDate,
          },
        };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.HISTORY),
          t
        );
      }
      function Ut(e) {
        var t = {
          params: {
            page: e.page,
            size: e.size,
            mode: e.mode,
            membercode: e.memberCode,
            report_start_date: e.startDate,
            report_end_date: e.endDate,
          },
        };
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.REPORTS, "/")
            .concat(Ct.PRODUCTS, "/")
            .concat(Ct.DOWNLINE),
          t
        );
      }
      function kt(e) {
        var t = {
          params: {
            page: e.page,
            size: e.size,
            start_time: e.start_time,
            end_time: e.end_time,
          },
        };
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.DOWNLINE, "/")
            .concat(Ct.LIST),
          t
        );
      }
      function jt() {
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.DOWNLINE)
        );
      }
      function ht() {
        return Object(n["a"])().get(
          "/"
            .concat(Ct.AFFILIATE, "/")
            .concat(Ct.UPLINE, "/")
            .concat(Ct.REFERRAL)
        );
      }
      function wt() {
        var e = { params: { currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.BONUS_DETAIL),
          e
        );
      }
      function Ft(e) {
        var t = {
          agent_id: e.agent_id,
          password: e.password,
          real_name: e.real_name,
          email: e.email,
          mobile: e.mobile,
          commission_payout: e.commission_payout,
          wallet_mobile: e.wallet_mobile,
          nid_number: e.nid_number,
          date_of_birth: e.date_of_birth,
          currency: c["g"].DEFAULT_CURRENCY,
          social_contact_type: e.social_contact_type,
          social_contact_value: e.social_contact_value,
        };
        return Object(n["a"])().post(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.APPLY_AGENT),
          t
        );
      }
      function Ht() {
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.APPLY_AGENT_DETAIL)
        );
      }
      function Yt(e) {
        var t = { agent_id: e };
        return Object(n["a"])().post(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.CHECK_ID),
          t
        );
      }
      function Gt(e) {
        var t = { agent_mobile: e };
        return Object(n["a"])().post(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.CHECK_MOBILE),
          t
        );
      }
      function Vt() {
        return Object(n["a"])().get(
          "/".concat(Ct.AFFILIATE, "/").concat(Ct.URL_CONFIG)
        );
      }
      var Wt = {
          MERCHANTS: "Merchants",
          TRANSACTION: "Transactions",
          MEMBER: "Members",
          CURRENCY: "Currency",
          CANCEL: "Cancel",
          BANKS: "Banks",
          MEMBER_BANK_ACCOUNTS: "MemberBankAccounts",
          MERCHANTS_BANK_ACCOUNTS: "BankAccounts",
          AVAILABLE_METHODS: "AvailableMethods",
          PROCESS_TRANSACTION: "ProcessTransaction",
          GATEWAY_SUPPORTED_BANK: "GatewaySupportedBank",
          API_URL: c["a"].PAYMENT_URL,
          MERCHANTS_CODE: c["d"].AFFILIATE_PAYMENT_MERCHANTS_CODE,
          MERCHANTS_KEY: c["d"].AFFILIATE_PAYMENT_MERCHANTS_KEY,
        },
        Kt = {
          getBank: zt,
          getAvailableMethod: qt,
          getMerchantBankAccount: Qt,
          getOnlinePaymentSupportedBank: xt,
          getMemberBankAccount: Jt,
          putMemberBankAccount: Xt,
          deleteMemberBankAccount: Zt,
          newMemberBankAccount: $t,
          getTransaction: ea,
          cancelTransaction: ta,
          postTransaction: aa,
          processTransaction: na,
        };
      function zt(e) {
        var t = {
          params: {
            Name: e.bankName,
            BankCode: e.bankCode,
            CurrencyCode: e.currency,
            Page: e.page,
            ItemsPerpage: e.itemsPerPage,
            orderBy: e.orderBy,
            order: e.order,
          },
        };
        return Object(n["a"])(Wt.API_URL).get("/".concat(Wt.BANKS), t);
      }
      function qt(e) {
        var t = {
          params: {
            MerchantCode: Wt.MERCHANTS_CODE,
            MemberCode: e.memberCode,
            MemberRealName: e.realName,
            CurrencyCode: e.currency,
          },
        };
        return Object(n["a"])(Wt.API_URL).get(
          "/".concat(Wt.AVAILABLE_METHODS),
          t
        );
      }
      function Qt(e) {
        return Object(n["a"])(Wt.API_URL).get(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.CURRENCY, "/")
            .concat(e.currency, "/")
            .concat(Wt.MERCHANTS_BANK_ACCOUNTS)
        );
      }
      function xt(e) {
        return Object(n["a"])(Wt.API_URL).get(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.GATEWAY_SUPPORTED_BANK)
        );
      }
      function Jt(e) {
        return Object(n["a"])(Wt.API_URL).get(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.MEMBER_BANK_ACCOUNTS)
        );
      }
      function Xt(e) {
        var t = {
          accountName: e.memberBankAccountName,
          accountNumber: e.memberBankAccountNumber,
          province: e.memberBankProvince,
          branch: e.memberBankBranch,
          city: e.memberBankCity,
          bankName: e.memberBankName,
          updatedBy: e.memberCode,
        };
        return Object(n["a"])(Wt.API_URL).put(
          "/"
            .concat(Wt.MEMBER_BANK_ACCOUNTS, "/")
            .concat(e.memberBankAccountId),
          t
        );
      }
      function Zt(e) {
        return Object(n["a"])(Wt.API_URL)["delete"](
          "/".concat(Wt.MEMBER_BANK_ACCOUNTS, "/").concat(e.memberBankAccountId)
        );
      }
      function $t(e) {
        var t = {
          accountName: e.memberBankAccountName,
          accountNumber: e.memberBankAccountNumber,
          province: e.memberBankProvince,
          branch: e.memberBankBranch,
          city: e.memberBankCity,
          bankName: e.memberBankName,
          createdBy: e.memberCode,
        };
        return Object(n["a"])(Wt.API_URL).post(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.MEMBER_BANK_ACCOUNTS),
          t
        );
      }
      function ea(e) {
        var t = Ke()(
            "merchantcode={0}&membercode={1}&currencycode={2}&key={3}",
            Wt.MERCHANTS_CODE,
            e.memberCode,
            e.currency,
            Wt.MERCHANTS_KEY
          ),
          a = {
            params: {
              fromdate: e.fromDate,
              todate: e.toDate,
              transtype: e.transType,
              signature: Ve()(t),
              page: e.page,
              itemsperpage: e.itemsPerPage,
            },
          };
        return Object(n["a"])(Wt.API_URL).get(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.CURRENCY, "/")
            .concat(e.currency, "/")
            .concat(Wt.TRANSACTION),
          a
        );
      }
      function ta(e) {
        var t = Ke()(
            "merchantcode={0}&transid={1}&key={2}",
            Wt.MERCHANTS_CODE,
            e.transactionId,
            Wt.MERCHANTS_KEY
          ),
          a = {
            params: {
              transid: e.transactionId,
              merchantcode: Wt.MERCHANTS_CODE,
              signature: Ve()(t),
            },
          };
        return Object(n["a"])(Wt.API_URL).put(
          "/"
            .concat(Wt.TRANSACTION, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.TRANSACTION, "/")
            .concat(e.transactionId, "/")
            .concat(Wt.CANCEL, "?signature=")
            .concat(a.params.signature),
          a
        );
      }
      function aa(e) {
        var t = Ke()(
            "transtypename={0}&methodcode={1}&memberrealname={2}&currencycode={3}&amount={4}&oricurrencycode={5}&oriamount={6}&gatewayaccountid={7}&bankaccountshortcode={8}&memberbankaccountid={9}&memberaccountname={10}&memberaccountnumber={11}&memberaccountbankname={12}&memberaccountprovince={13}&memberaccountbranch={14}&memberaccountcity={15}&memberbankdepositedtime={16}&gatewaybankid={17}&memberemail={18}&membercontactidornumber={19}&merchantfrontendurl={20}&attachmenttype={21}&ipaddress={22}&savebankaccountoptions={23}&key={24}",
            e.transactionType,
            e.methodCode,
            e.memberRealName,
            e.currency,
            e.amount,
            e.oriCurrency,
            e.oriAmount,
            e.gatewayAccountId,
            e.merchantBankCode,
            e.memberBankAccountId,
            e.memberBankAccountName,
            e.memberBankAccountNumber,
            e.memberBankName,
            e.memberBankProvince,
            e.memberBankBranch,
            e.memberBankCity,
            e.depositDateTime,
            e.gatewayAccountBankId,
            e.memberEmail,
            e.memberContactIdorNumber,
            e.transactionSuccessUrl,
            e.attachmentFileType,
            e.ipAddress,
            e.saveNewBank,
            Wt.MERCHANTS_KEY
          ),
          a = {
            transTypeName: e.transactionType,
            methodCode: e.methodCode,
            memberRealName: e.memberRealName,
            currencyCode: e.currency,
            amount: e.amount,
            oriCurrencyCode: e.oriCurrency,
            oriAmount: e.oriAmount,
            gatewayAccountID: e.gatewayAccountId,
            bankAccountShortCode: e.merchantBankCode,
            memberBankAccountID: e.memberBankAccountId,
            memberAccountName: e.memberBankAccountName,
            memberAccountNumber: e.memberBankAccountNumber,
            memberAccountBankName: e.memberBankName,
            memberAccountProvince: e.memberBankProvince,
            memberAccountBranch: e.memberBankBranch,
            memberAccountCity: e.memberBankCity,
            memberBankDepositedTime: e.depositDateTime,
            gatewayBankID: e.gatewayAccountBankId,
            memberEmail: e.memberEmail,
            memberContactIdOrNumber: e.memberContactIdorNumber,
            merchantFrontendURL: e.transactionSuccessUrl,
            attachmentType: e.attachmentFileType,
            attachment: e.attachment,
            ipAddress: e.ipAddress,
            saveBankAccountOptions: e.saveNewBank ? 1 : 0,
            language: e.language,
            platformType: e.platform,
            signature: Ve()(t),
          };
        return Object(n["a"])(Wt.API_URL).post(
          "/"
            .concat(Wt.MERCHANTS, "/")
            .concat(Wt.MERCHANTS_CODE, "/")
            .concat(Wt.MEMBER, "/")
            .concat(e.memberCode, "/")
            .concat(Wt.TRANSACTION),
          a
        );
      }
      function na(e) {
        return Object(n["a"])(Wt.API_URL).get(
          "/"
            .concat(Wt.TRANSACTION, "/")
            .concat(e.transactionId, "/")
            .concat(Wt.PROCESS_TRANSACTION)
        );
      }
      var ca = {
          getBanner: ma,
          getCmsBonus: sa,
          getAngpaoChance: ua,
          claimAngpao: oa,
          getBonusCategories: ia,
          getRegistrationBanner: Ea,
        },
        ra = {
          BANNER: "banner",
          CMS_CONTENT: "cmscontent",
          CMS_API_URL: c["a"].CMS_URL,
          ANGPAO_CHANGE: "angpau/unclaimed",
          ANGPAO_CLAIM: "angpau/claim",
          BONUS_CATEGORIES: "bonus_categories",
          REGISTRATION_BANNER: "registrationBanner",
        };
      function oa() {
        return Object(n["a"])().post("/".concat(ra.ANGPAO_CLAIM));
      }
      function ia(e) {
        return Object(n["a"])().get(
          "".concat(ra.CMS_API_URL, "/").concat(ra.BONUS_CATEGORIES),
          { params: e }
        );
      }
      function ua() {
        return Object(n["a"])().get("/".concat(ra.ANGPAO_CHANGE));
      }
      function ma() {
        var e = {
          params: {
            is_live: 1,
            is_active: 1,
            currency: c["g"].DEFAULT_CURRENCY,
          },
        };
        return Object(n["a"])().get(
          "".concat(ra.CMS_API_URL, "/").concat(ra.BANNER),
          e
        );
      }
      function sa(e) {
        var t = {
          params: {
            is_live: 1,
            is_active: 1,
            categoryId: e.cmsBonusCategoryId,
            currency: e.currency,
          },
        };
        return Object(n["a"])().get(
          "".concat(ra.CMS_API_URL, "/").concat(ra.CMS_CONTENT),
          t
        );
      }
      function Ea() {
        var e = { params: { currency: c["g"].DEFAULT_CURRENCY } };
        return Object(n["a"])().get(
          "".concat(ra.CMS_API_URL, "/").concat(ra.REGISTRATION_BANNER),
          e
        );
      }
      var da = {
          referralOverview: _a,
          referralDownlines: pa,
          referralReport: Ra,
          redeemCommission: ga,
          referralConfig: ba,
        },
        Aa = {
          REFERRAL: "referral",
          OVERVIEW: "overview",
          DOWNLINES: "downlines",
          REPORT: "report",
          COMMISSION: "commission",
          CONFIG: "config",
        };
      function _a() {
        return Object(n["a"])().get(
          "/".concat(Aa.REFERRAL, "/").concat(Aa.OVERVIEW)
        );
      }
      function pa() {
        return Object(n["a"])().get(
          "/".concat(Aa.REFERRAL, "/").concat(Aa.DOWNLINES)
        );
      }
      function Ra() {
        return Object(n["a"])().get(
          "/".concat(Aa.REFERRAL, "/").concat(Aa.REPORT)
        );
      }
      function ga(e) {
        var t = { amount: e.amount };
        return Object(n["a"])().post(
          "/".concat(Aa.REFERRAL, "/").concat(Aa.COMMISSION),
          t
        );
      }
      function ba() {
        return Object(n["a"])().get(
          "/".concat(Aa.REFERRAL, "/").concat(Aa.CONFIG)
        );
      }
      var Oa = {
          getWheel: Ca,
          getLogs: Ia,
          getChances: la,
          getMyLogs: Sa,
          spinWheel: fa,
          getMultipleWheel: Na,
        },
        Ta = {
          EVENT: "/jevent",
          CHANCES: "/my-chances",
          MYLOGS: "/my-logs",
          SPIN: "/spin",
          MULTIPLE: "/multiple",
          SIZE: "size=3",
        };
      function Ca(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get("".concat(Ta.EVENT), t);
      }
      function Na(e) {
        var t = { params: { currency: e.currency } };
        return Object(n["a"])().get(
          "".concat(Ta.EVENT).concat(Ta.MULTIPLE, "?").concat(Ta.SIZE),
          t
        );
      }
      function Ia(e) {
        var t = { params: { size: 50 } };
        return Object(n["a"])().get("".concat(Ta.EVENT, "/").concat(e.id), t);
      }
      function la(e) {
        return Object(n["a"])().get(
          "".concat(Ta.EVENT, "/").concat(e.id).concat(Ta.CHANCES)
        );
      }
      function Sa(e) {
        var t = { params: { size: 50 } };
        return Object(n["a"])().get(
          "".concat(Ta.EVENT, "/").concat(e.id).concat(Ta.MYLOGS),
          t
        );
      }
      function fa(e) {
        return Object(n["a"])().post(
          "".concat(Ta.EVENT, "/").concat(e.id).concat(Ta.SPIN)
        );
      }
      var Ma = {
          getInboxMsg: va,
          getInboxMsgContent: Ba,
          readInboxMsg: La,
          deleteInboxMsg: Da,
        },
        ya = {
          INBOX: "inbox",
          CONTENT: "content",
          READ: "read/message",
          MESSAGE: "get/message",
          REMOVE: "remove/message",
          REMOVES: "remove/messages",
        };
      function va() {
        return Object(n["a"])().get(
          "".concat(ya.INBOX, "/").concat(ya.MESSAGE)
        );
      }
      function Ba(e) {
        return Pa.apply(this, arguments);
      }
      function Pa() {
        return (
          (Pa = Object(C["a"])(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(n["a"])().get(
                          "/"
                            .concat(ya.INBOX, "/")
                            .concat(ya.MESSAGE, "/")
                            .concat(ya.CONTENT, "/")
                            .concat(t.msgId, "/")
                            .concat(t.category)
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Pa.apply(this, arguments)
        );
      }
      function La(e) {
        return Object(n["a"])().post(
          "/"
            .concat(ya.INBOX, "/")
            .concat(ya.READ, "/")
            .concat(e.msgId, "/")
            .concat(e.categoryId)
        );
      }
      function Da(e) {
        return Object(n["a"])().post(
          "/".concat(ya.INBOX, "/").concat(ya.REMOVES),
          e
        );
      }
      var Ua = {
          getRewardWalletLog: Ha,
          getDailyCheckInRewardPrizeList: Ka,
          getCheckInDay: Va,
          postCheckInDay: Wa,
          getRewardConfiguration: za,
          getChallengeByMember: Ya,
          acceptMemberChallenge: Ga,
          getRewardItem: ja,
          claimRewardItem: wa,
          verifyClaim: Fa,
          getRedeemHistory: ha,
        },
        ka = {
          REWARD: "reward",
          REWARD_WALLET: "rewardWallet/log",
          DAILY_CHECKIN: "dailycheckin",
          CHECK_IN_DAY: "checkInDay",
          CHECK_IN_DAILY: "dailycheckin",
          GET_MEMBER_CHALLENGE: "getChallengeByMember",
          ACCEPT: "accept",
          CONFIGURATION: "configuration/reward",
          REWARD_ITEM: "reward-item",
          CLAIM: "rewardStore/claim",
          HISTORY: "rewardStore/history",
          VERIFY: "rewardStore/verify",
        };
      function ja(e, t) {
        var a = {
          params: {
            currency: c["g"].DEFAULT_CURRENCY,
            size: e.size,
            page: e.page,
          },
        };
        return Object(n["a"])().get(
          "".concat(ka.REWARD, "/").concat(ka.REWARD_ITEM, "/").concat(t),
          a
        );
      }
      function ha(e) {
        var t = { params: { size: e.size, page: e.page } };
        return Object(n["a"])().get("/".concat(ka.HISTORY), t);
      }
      function wa(e) {
        var t = {
          rewardId: e.rewardId,
          rewardVariation: e.rewardVariation,
          name: e.name,
          mobile: e.mobile,
          email: e.email,
          city: e.city,
          postcode: e.postcode,
          address1: e.address1,
          address2: e.address2,
        };
        return Object(n["a"])().post("".concat(ka.CLAIM), t);
      }
      function Fa(e) {
        var t = { params: { rewardId: e.reward_id } };
        return Object(n["a"])().get("".concat(ka.VERIFY), t);
      }
      function Ha(e) {
        var t = {
          params: {
            page: e.page,
            start_time: e.startTime,
            end_time: e.endTime,
            size: e.size,
          },
        };
        return Object(n["a"])().get("/".concat(ka.REWARD_WALLET), t);
      }
      function Ya() {
        return Object(n["a"])().get(
          "".concat(ka.REWARD, "/").concat(ka.GET_MEMBER_CHALLENGE)
        );
      }
      function Ga(e) {
        var t = { challenge_id: e.id };
        return Object(n["a"])().post(
          "".concat(ka.REWARD, "/").concat(ka.ACCEPT),
          t
        );
      }
      function Va() {
        return Object(n["a"])().get(
          "".concat(ka.REWARD, "/").concat(ka.CHECK_IN_DAY)
        );
      }
      function Wa(e) {
        var t = { checkin_day: e.checkinDay };
        return Object(n["a"])().post(
          "".concat(ka.REWARD, "/").concat(ka.CHECK_IN_DAILY),
          t
        );
      }
      function Ka(e) {
        var t = { params: { id: e.id } };
        return Object(n["a"])().get(
          "".concat(ka.REWARD, "/").concat(ka.CHECK_IN_DAILY),
          t
        );
      }
      function za(e) {
        var t = { params: { key: e.currency, enabled: e.enabled } };
        return Object(n["a"])().get("/".concat(ka.CONFIGURATION), t);
      }
      var qa = { getHistoryOverview: xa, getHistoryDetail: Ja },
        Qa = { HISTORY: "player-bet-history", OVERVIEW: "overview" };
      function xa(e) {
        var t = { params: { page: e.page, size: e.itemsPerPage } };
        return Object(n["a"])().get(
          "/".concat(Qa.HISTORY, "/").concat(Qa.OVERVIEW),
          t
        );
      }
      function Ja(e) {
        var t = {
          params: {
            start_date: e.startDate,
            end_date: e.endDate,
            provider: e.provider,
            game_type: e.gameType,
            page: e.page,
            size: e.itemsPerPage,
          },
        };
        return Object(n["a"])().get("/".concat(Qa.HISTORY), t);
      }
      a.d(t, "o", function () {
        return r;
      }),
        a.d(t, "f", function () {
          return u;
        }),
        a.d(t, "j", function () {
          return N;
        }),
        a.d(t, "c", function () {
          return ie;
        }),
        a.d(t, "d", function () {
          return Ae;
        }),
        a.d(t, "k", function () {
          return qe;
        }),
        a.d(t, "n", function () {
          return ut;
        }),
        a.d(t, "i", function () {
          return Rt;
        }),
        a.d(t, "b", function () {
          return Tt;
        }),
        a.d(t, "a", function () {
          return Kt;
        }),
        a.d(t, "e", function () {
          return ca;
        }),
        a.d(t, "l", function () {
          return da;
        }),
        a.d(t, "p", function () {
          return Oa;
        }),
        a.d(t, "h", function () {
          return Ma;
        }),
        a.d(t, "m", function () {
          return Ua;
        }),
        a.d(t, "g", function () {
          return qa;
        });
    },
  },
]);
//# sourceMappingURL=app~4ebb1a2a.2478ad87.js.map
