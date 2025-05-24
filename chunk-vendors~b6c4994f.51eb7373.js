(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-vendors~b6c4994f"],
  {
    "20ec7": function (e, i, n) {
      "use strict";
      function r(e, i) {
        for (var n = e.length, r = 0; r < n; ++r) if (i(e[r], r)) return !0;
        return !1;
      }
      function o(e, i) {
        for (var n = e.length, r = 0; r < n; ++r) if (i(e[r], r)) return e[r];
        return null;
      }
      function s(e) {
        var i = e;
        if ("undefined" === typeof i) {
          if ("undefined" === typeof navigator || !navigator) return "";
          i = navigator.userAgent || "";
        }
        return i.toLowerCase();
      }
      function t(e, i) {
        try {
          return new RegExp(e, "g").exec(i);
        } catch (n) {
          return null;
        }
      }
      function a() {
        if (
          "undefined" === typeof navigator ||
          !navigator ||
          !navigator.userAgentData
        )
          return !1;
        var e = navigator.userAgentData,
          i = e.brands || e.uaList;
        return !(!i || !i.length);
      }
      function v(e, i) {
        var n = t("(" + e + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", i);
        return n ? n[3] : "";
      }
      function d(e) {
        return e.replace(/_/g, ".");
      }
      function u(e, i) {
        var n = null,
          o = "-1";
        return (
          r(e, function (e) {
            var r = t("(" + e.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", i);
            return (
              !(!r || e.brand) &&
              ((n = e),
              (o = r[3] || "-1"),
              e.versionAlias
                ? (o = e.versionAlias)
                : e.versionTest && (o = v(e.versionTest.toLowerCase(), i) || o),
              (o = d(o)),
              !0)
            );
          }),
          { preset: n, version: o }
        );
      }
      function w(e, i) {
        var n = { brand: "", version: "-1" };
        return (
          r(e, function (e) {
            var r = m(i, e);
            return (
              !!r &&
              ((n.brand = e.id),
              (n.version = e.versionAlias || r.version),
              "-1" !== n.version)
            );
          }),
          n
        );
      }
      function m(e, i) {
        return o(e, function (e) {
          var n = e.brand;
          return t("" + i.test, n.toLowerCase());
        });
      }
      var c = [
          { test: "phantomjs", id: "phantomjs" },
          { test: "whale", id: "whale" },
          { test: "edgios|edge|edg", id: "edge" },
          {
            test: "msie|trident|windows phone",
            id: "ie",
            versionTest: "iemobile|msie|rv",
          },
          { test: "miuibrowser", id: "miui browser" },
          { test: "samsungbrowser", id: "samsung internet" },
          { test: "samsung", id: "samsung internet", versionTest: "version" },
          { test: "chrome|crios", id: "chrome" },
          { test: "firefox|fxios", id: "firefox" },
          { test: "android", id: "android browser", versionTest: "version" },
          {
            test: "safari|iphone|ipad|ipod",
            id: "safari",
            versionTest: "version",
          },
        ],
        b = [
          {
            test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
            id: "chrome",
            versionTest: "chrome",
          },
          { test: "chromium", id: "chrome" },
          { test: "whale", id: "chrome", versionAlias: "-1", brand: !0 },
        ],
        f = [
          {
            test: "applewebkit",
            id: "webkit",
            versionTest: "applewebkit|safari",
          },
        ],
        p = [
          { test: "(?=(iphone|ipad))(?!(.*version))", id: "webview" },
          {
            test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
            id: "webview",
          },
          { test: "webview", id: "webview" },
        ],
        h = [
          { test: "windows phone", id: "windows phone" },
          { test: "windows 2000", id: "window", versionAlias: "5.0" },
          { test: "windows nt", id: "window" },
          {
            test: "iphone|ipad|ipod",
            id: "ios",
            versionTest: "iphone os|cpu os",
          },
          { test: "mac os x", id: "mac" },
          { test: "android", id: "android" },
          { test: "tizen", id: "tizen" },
          { test: "webos|web0s", id: "webos" },
        ];
      function l(e) {
        var i = navigator.userAgentData,
          n = (i.uaList || i.brands).slice(),
          s = i.mobile || !1,
          t = n[0],
          a = {
            name: t.brand,
            version: t.version,
            majorVersion: -1,
            webkit: !1,
            webkitVersion: "-1",
            chromium: !1,
            chromiumVersion: "-1",
            webview: !!w(p, n).brand,
          },
          v = { name: "unknown", version: "-1", majorVersion: -1 };
        a.webkit =
          !a.chromium &&
          r(f, function (e) {
            return m(n, e);
          });
        var u = w(b, n);
        if (
          ((a.chromium = !!u.brand),
          (a.chromiumVersion = u.version),
          !a.chromium)
        ) {
          var l = w(f, n);
          (a.webkit = !!l.brand), (a.webkitVersion = l.version);
        }
        if (e) {
          var g = e.platform.toLowerCase(),
            k = o(h, function (e) {
              return new RegExp("" + e.test, "g").exec(g);
            });
          (v.name = k ? k.id : g), (v.version = e.platformVersion);
        }
        var V = w(c, n);
        return (
          V.brand &&
            ((a.name = V.brand), (a.version = e ? e.uaFullVersion : V.version)),
          "Linux armv8l" === navigator.platform
            ? (v.name = "android")
            : a.webkit && (v.name = s ? "ios" : "mac"),
          "ios" === v.name && a.webview && (a.version = "-1"),
          (v.version = d(v.version)),
          (a.version = d(a.version)),
          (v.majorVersion = parseInt(v.version, 10)),
          (a.majorVersion = parseInt(a.version, 10)),
          { browser: a, os: v, isMobile: s, isHints: !0 }
        );
      }
      function g(e) {
        var i = s(e),
          n = !!/mobi/g.exec(i),
          r = {
            name: "unknown",
            version: "-1",
            majorVersion: -1,
            webview: !!u(p, i).preset,
            chromium: !1,
            chromiumVersion: "-1",
            webkit: !1,
            webkitVersion: "-1",
          },
          o = { name: "unknown", version: "-1", majorVersion: -1 },
          t = u(c, i),
          a = t.preset,
          v = t.version,
          d = u(h, i),
          w = d.preset,
          m = d.version,
          l = u(b, i);
        if (
          ((r.chromium = !!l.preset),
          (r.chromiumVersion = l.version),
          !r.chromium)
        ) {
          var g = u(f, i);
          (r.webkit = !!g.preset), (r.webkitVersion = g.version);
        }
        return (
          w &&
            ((o.name = w.id),
            (o.version = m),
            (o.majorVersion = parseInt(m, 10))),
          a &&
            ((r.name = a.id),
            (r.version = v),
            r.webview &&
              "ios" === o.name &&
              "safari" !== r.name &&
              (r.webview = !1)),
          (r.majorVersion = parseInt(r.version, 10)),
          { browser: r, os: o, isMobile: n, isHints: !1 }
        );
      }
      function k(e) {
        return "undefined" === typeof e && a() ? l() : g(e);
      }
      i["a"] = k;
    },
  },
]);
//# sourceMappingURL=chunk-vendors~b6c4994f.51eb7373.js.map
