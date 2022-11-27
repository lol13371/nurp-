(this["webpackJsonpdoodle-nft-website"] = this["webpackJsonpdoodle-nft-website"] || []).push([
    [0], {
        144: function (e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blingyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"buyByBlingy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"buyByEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"getBuyPriceInBlingy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setBlingyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setCurrentPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"setMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"whitelisters","type":"address[]"},{"internalType":"uint256[]","name":"numOfTokens","type":"uint256[]"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setWhitelistPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelistState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numOfToken","type":"uint256"}],"name":"whitelistSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"whitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelists","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        278: function (e, t) {},
        300: function (e, t) {},
        302: function (e, t) {},
        376: function (e, t) {},
        378: function (e, t) {},
        411: function (e, t) {},
        416: function (e, t) {},
        418: function (e, t) {},
        425: function (e, t) {},
        438: function (e, t) {},
        461: function (e, t) {},
        463: function (e, t) {},
        471: function (e, t) {},
        473: function (e, t) {},
        567: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "static/media/1.4105f222.png"
        },
        568: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "/static/media/2.bf4897f3.png"
        },
        569: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "/static/media/3.7afe275b.png"
        },
        570: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "/static/media/1.a80427c0.png"
        },
        571: function (e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "/static/media/2.6e654dc0.png"
        },
        573: function (e, t, n) {},
        577: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                s = n.n(a),
                i = n(59),
                c = n.n(i),
                r = n(22),
                o = n(19),
                l = n(23),
                u = n(77),
                d = n.n(u),
                p = n(28),
                m = n(52),
                b = n(247),
                j = n(8),
                y = "SET_NOTIFICATION",
                h = "CLEAR_NOTIFICATION",
                O = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "top-right";
                    return function (a) {
                        return a({
                            type: y,
                            data: {
                                type: t,
                                msg: e,
                                position: n
                            }
                        })
                    }
                },
                f = {
                    notification: {
                        type: "",
                        msg: "",
                        position: ""
                    }
                },
                A = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case y:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                notification: t.data
                            });
                        case h:
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                notification: {
                                    type: "",
                                    msg: "",
                                    position: ""
                                }
                            });
                        default:
                            return e
                    }
                },
                x = function (e) {
                    return Object(m.c)(Object(j.a)({
                        app: A
                    }, e))
                };
            m.a.REPLACE = "@@redux/INIT";
            var g = (0, m.d)(Object(m.b)(b.a)),
                w = Object(m.e)(x(), g);
            w.asyncReducers = {};
            var v = w,
                N = n(0);
            var I = Object(o.g)((function (e) {
                    var t = e.history,
                        n = e.children;
                    return Object(a.useEffect)((function () {
                        var e = t.listen((function () {
                            window.scrollTo(0, 0)
                        }));
                        return function () {
                            e()
                        }
                    })), Object(N.jsx)(a.Fragment, {
                        children: n
                    })
                })),
                T = n(43),
                C = ["component", "layout"],
                M = function (e) {
                    var t = e.component,
                        n = e.layout,
                        a = Object(T.a)(e, C);
                    return n = void 0 === n ? function (e) {
                        return Object(N.jsx)(N.Fragment, {
                            children: e.children
                        })
                    } : n, Object(N.jsx)(o.a, Object(j.a)(Object(j.a)({}, a), {}, {
                        render: function (e) {
                            return Object(N.jsx)(n, {
                                children: Object(N.jsx)(t, Object(j.a)({}, e))
                            })
                        }
                    }))
                },
                k = n(249),
                E = n.n(k),
                R = (n(550), n(25)),
                S = n(585),
                B = n(250),
                L = "0x5db64fCaD24fbDd09C737bAc74EFc90EA259a910",
                Y = "Ethereum",
                D = "mainnet",
                Q = "eeff68297c874d5bb9814916617a5f55",
                F = "G-ZQYVZ0PJZ5",
                Z = "garbagefriends",
                G = [{
                    title: "ABOUT US",
                    path: "#about_section",
                    mainpage: !0
                }, {
                    title: "ARTIST",
                    path: "#team_section",
                    mainpage: !0
                }],
                P = [{
                    name: "Markus Magnusson",
                    photo: n(567).default,
                    role: "GARBAGE FRIENDS are thought up, drawn and animated by this one Swedish dude."
                }, {
                    name: "Billy ",
                    photo: n(568).default,
                    role: "Head of Stuff at:  @InvsbleFriends  /  @GarbageFriends  /  @MoodRollers  /  @RNDMCHARACTERS"
                }, {
                    name: "Random Character Collective",
                    photo: n(569).default,
                    role: "GARBAGE FRIENDS are a proud member of Random Character Collective. The internet's friendliest animator collective."
                }],
                U = [{
                    name: "GARY VEE",
                    photo: n(570).default,
                    role: "Garbage Friends Owner"
                }, {
                    name: "MARK CUBAN",
                    photo: n(571).default,
                    role: "Garbage Friends Owner"
                }],
                z = [{
                    q: "WHAT IS AN NFT ?",
                    a: "NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token."
                }, {
                    q: "HOW CAN I BUY AN NFT ?",
                    a: 'You will be able to buy on our website when we launch. You will need a Metamask wallet or a Wallet Connect compatible wallet. You can check our tutorials on Discord. <a href="#">started here today.</a>'
                }, {
                    q: "WHERE CAN I VIEW MY NFT ?",
                    a: "Once minted, you'll just need to login into your OpenSea account to view your NFTs."
                }, {
                    q: "HOW MANY GARBAGE FRIENDS ARE AVAILABLE ?",
                    a: "Only 10 000 will be minted for the public, and that\u2019s it."
                }],
                H = n.p + "static/media/bingbong.svg",
                V = function () {
                    var e = Object(o.f)(),
                        t = function () {
                            return Object(N.jsx)(N.Fragment, {
                                children: Object(N.jsx)("ul", {
                                    className: "navbar-nav ms-auto me-0 p-0",
                                    children: G.map((function (t, n) {
                                        var a = "nav-link";
                                        return !0 === t.mainpage && (a += " mainpage-hash"), Object(N.jsx)("li", {
                                            className: "nav-item text-center",
                                            children: !0 === t.external ? Object(N.jsx)("a", {
                                                href: t.path,
                                                className: a,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: t.title
                                            }) : !0 === t.mainpage ? Object(N.jsx)("a", {
                                                href: t.path,
                                                className: a,
                                                onClick: function () {
                                                    e.push("/")
                                                },
                                                children: t.title
                                            }) : Object(N.jsx)(R.a, {
                                                to: t.path,
                                                className: a,
                                                children: t.title
                                            })
                                        }, n)
                                    }))
                                })
                            })
                        };
                    return Object(N.jsx)(N.Fragment, {
                        children: Object(N.jsx)("header", {
                            className: "sticky-top pt-2 pb-1",
                            children: Object(N.jsx)(S.a, {
                                children: Object(N.jsxs)("nav", {
                                    className: "navbar navbar-expand-lg py-0",
                                    children: [Object(N.jsx)(R.a, {
                                        style: {
                                            width: "95px",
                                            height: "0px"
                                        },
                                        className: "logo",                          
                                        to: "/",
                                        children: Object(N.jsx)("img", {
                                            src: H,
                                            alt: Z
                                        })
                                    }), Object(N.jsx)(B.slide, {
                                        right: !0,
                                        burgerButtonClassName: "d-block d-lg-none",
                                        children: t()
                                    }), Object(N.jsx)("div", {
                                        className: "d-none d-lg-flex justify-content-between flex-grow-1 align-items-center",
                                        id: "navbarNav",
                                        children: t()
                                    })]
                                })
                            })
                        })
                    })
                },
                J = n(586),
                W = n(587),
                X = n.p + "static/media/logo2.png";
            var K = function () {
                    return Object(N.jsxs)("footer", {
                        children: [Object(N.jsx)(S.a, {
                            children: Object(N.jsxs)(J.a, {
                                className: "row-cols-1 row-cols-md-2",
                                children: [Object(N.jsx)(W.a, {
                                    className: "text-center text-md-start",
                                    children: Object(N.jsx)("img", {
                                        src: X,
                                        className: "w-200",
                                        alt: "logo"
                                    })
                                }), Object(N.jsx)(W.a, {
                                    className: "text-center text-md-end",
                                    children: Object(N.jsx)("img", {
                                        src: "data:image/png;base64,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",
                                        className: "w-200",
                                        alt: "logo"
                                    })
                                })]
                            })
                        }), Object(N.jsx)("hr", {}), Object(N.jsx)(S.a, {
                            className: "footer-bottom",
                            children: Object(N.jsx)("p", {
                                className: "text-center pb-3",
                                children: "FOR ALL PRESS INQUIRIES, PLEASE CONTACT PRESS@INVISIBLEFRIENDS.IO."
                            })
                        })]
                    })
                },
                q = n(91),
                _ = (n(572), Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    var t = e.notification,
                        n = e.dispatch;
                    return Object(a.useEffect)((function () {
                        if (t.msg) {
                            var e = {
                                autoClose: 5e3,
                                theme: "colored",
                                onOpen: function (e) {
                                    n({
                                        type: "CLEAR_NOTIFICATION"
                                    })
                                }
                            };
                            "success" === t.type ? q.b.success(t.msg, e) : "info" === t.type ? q.b.info(t.msg, e) : q.b.error(t.msg, e)
                        }
                    }), [t]), Object(N.jsx)(N.Fragment, {
                        children: Object(N.jsx)(q.a, {
                            position: "bottom-center",
                            toastClassName: "toast-dark",
                            style: {
                                width: "auto",
                                maxWidth: "90vw"
                            }
                        })
                    })
                })))),
                $ = function (e) {
                    var t = e.children;
                    return Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)(V, {}), Object(N.jsx)("main", {
                            className: "site-content",
                            children: t
                        }), Object(N.jsx)(K, {}), Object(N.jsx)(_, {})]
                    })
                },
                ee = n(24),
                te = n.n(ee),
                ne = n(61),
                ae = n(40),
                se = n(108),
                ie = n(90),
                ce = n(109),
                re = n(251),
                oe = new ie.a({
                    supportedChainIds: [1]
                });
            new ce.b({
                rpc: Object(se.a)({}, 1, "https://".concat(D, ".infura.io/v3/").concat(Q)),
                qrcode: !0
            }), new re.a({
                url: "https://".concat(D, ".infura.io/v3/").concat(Q),
                appName: Z,
                supportedChainIds: [1]
            });
            var le = Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    var t = Object(p.c)(),
                        n = t.account,
                        s = t.activate,
                        i = (t.deactivate, t.connector),
                        c = t.error,
                        r = Object(a.useState)(),
                        o = Object(ae.a)(r, 2),
                        l = o[0],
                        u = o[1];
                    Object(a.useEffect)((function () {
                        b()
                    }), []), Object(a.useEffect)((function () {
                        l && l === i && u(void 0)
                    }), [l, i]), Object(a.useEffect)((function () {
                        var t;
                        c && e.dispatch(O((t = c) instanceof ie.b ? "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile." : t instanceof p.a ? "Change Wallet Network to ".concat(Y.toUpperCase(), " ").concat(D.toUpperCase(), ".") : t instanceof ie.c || t instanceof ce.a || t.toString().includes("denied account authorization") ? "Please authorize this website to access your Ethereum account." : !!t && "An unknown error occurred. Check the console for more details.", "error"))
                    }), [c]);
                    var d = "btn-pap btn-pap-primary";
                    e.size && (d += " btn-".concat(e.size));
                    var m = function (e) {
                            ! function (e, t, n) {
                                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                                window.gtag("config", F), window.gtag("event", e, {
                                    event_category: t,
                                    event_label: n,
                                    value: a
                                })
                            }("Click", "wallet_connect", "WalletConnect", "MetaMask"), u(e), s(e)
                        },
                        b = function () {
                            var t = Object(ne.a)(te.a.mark((function t() {
                                var n, a, s;
                                return te.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = window, !(a = n.ethereum)) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.prev = 2, t.next = 5, a.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x".concat(1..toString(16))
                                                }]
                                            });
                                        case 5:
                                            t.next = 12;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(2), s = "", s = 4902 === t.t0.code ? "Add to ".concat(Y.toUpperCase(), " ").concat(D.toUpperCase(), ".") : "Please change the wallet network to ".concat(Y.toUpperCase(), " ").concat(D.toUpperCase(), "."), e.dispatch(O(s, "error"));
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [2, 7]
                                ])
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }();
                    return Object(N.jsx)(N.Fragment, {
                        children: n ? Object(N.jsx)(N.Fragment, {}) : Object(N.jsx)(N.Fragment, {
                            children: window.ethereum ? Object(N.jsx)("a", {
                                className: "".concat(d),
                                onClick: function () {
                                    m(oe)
                                },
                                children: "Connect Wallet"
                            }) : Object(N.jsx)("a", {
                                className: "".concat(d),
                                href: "https://metamask.app.link/dapp/",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: "Connect Wallet"
                            })
                        })
                    })
                }))),
                ue = n(144),
                de = (new(new d.a(d.a.givenProvider).eth.Contract)(ue, L), function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = null,
                        n = new((t = e || new d.a("https://".concat(D, ".infura.io/v3/").concat(Q))).eth.Contract)(ue, L);
                    return {
                        web3: t,
                        nftContract: n
                    }
                }),
                pe = function (e) {
                    return de().web3.utils.toWei(e, "ether")
                },
                me = function () {
                    var e = Object(ne.a)(te.a.mark((function e(t) {
                        var n, a, s, i, c, r, o, l = arguments;
                        return te.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = l.length > 1 && void 0 !== l[1] ? l[1] : null, a = de(n), s = a.web3, i = a.nftContract, e.prev = 2, c = pe(t.price.toFixed(3)), e.next = 6, s.eth.getGasPrice();
                                case 6:
                                    return r = e.sent, e.next = 9, i.methods.buyByEth(t.amount).estimateGas({
                                        from: t.account,
                                        value: c
                                    });
                                case 9:
                                    return o = e.sent, e.next = 12, i.methods.buyByEth(t.amount).send({
                                        from: t.account,
                                        value: c,
                                        gas: o,
                                        gasPrice: 120392392322
                                    });
                                case 12:
                                    if (!e.sent.transactionHash) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 17:
                                    je("Sorry, transaction is failed due to errors! Please contact us on Discord.");
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(2), je(be(e.t0));
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 20]
                        ])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(),
                be = function (e) {
                    return e.message ? e.message : "The transaction failed. Please try again."
                },
                je = function (e) {
                    throw new Error(e)
                },
                ye = Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    var t = Object(a.useState)(1),
                        n = Object(ae.a)(t, 2),
                        s = n[0],
                        i = n[1],
                        c = Object(a.useState)(0),
                        r = Object(ae.a)(c, 2),
                        o = r[0],
                        l = r[1],
                        u = Object(a.useState)(!1),
                        d = Object(ae.a)(u, 2),
                        m = d[0],
                        b = d[1],
                        j = Object(p.c)(),
                        y = j.account,
                        h = j.library;
                    Object(a.useEffect)((function () {
                        l(.088 * s)
                    }), [s]);
                    var f = function () {
                        var t = Object(ne.a)(te.a.mark((function t() {
                            return te.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(y && s > 0)) {
                                            t.next = 14;
                                            break
                                        }
                                        return b(!0), t.prev = 2, t.next = 5, me({
                                            amount: s,
                                            account: y,
                                            price: o
                                        }, h);
                                    case 5:
                                        t.sent, "The transaction failed. Please try again.", e.dispatch(O("The transaction failed. Please try again.", "failed")), t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(2), e.dispatch(O(t.t0.message || t.t0, "error"));
                                    case 13:
                                        b(!1);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 10]
                            ])
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }();
                    return Object(N.jsx)(N.Fragment, {
                        children: Object(N.jsxs)(J.a, {
                            className: "text-center gy-3",
                            "data-aos": "fade-in",
                            "data-aos-once": "true",
                            children: [Object(N.jsx)(W.a, {
                                xs: "12",
                                children: Object(N.jsxs)("div", {
                                    className: "d-flex flex-nowrap w-200 mx-auto",
                                    children: [Object(N.jsx)("button", {
                                        className: "btn btn-mint-amount rounded",
                                        onClick: function () {
                                            return function () {
                                                var e = s - 1;
                                                e < 1 && (e = 1), i(e)
                                            }()
                                        },
                                        children: "-"
                                    }), Object(N.jsx)("div", {
                                        className: "flex-grow-1 flex-shrink-1 text-center fs-3 text-white",
                                        children: s
                                    }), Object(N.jsx)("button", {
                                        className: "btn btn-mint-amount rounded",
                                        onClick: function () {
                                            return function () {
                                                var e = s + 1;
                                                e > 6 && (e = 6), i(e)
                                            }()
                                        },
                                        children: "+"
                                    })]
                                })
                            }), Object(N.jsx)(W.a, {
                                xs: "12",
                                children: Object(N.jsx)("button", {
                                    className: "btn btn-pap btn-pap-primary ".concat(m ? "processing" : ""),
                                    onClick: function () {
                                        return f()
                                    },
                                    children: "mint"
                                })
                            })]
                        })
                    })
                }))),
                he = n.p + "static/media/logo2.png",
                Oe = Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    var t = Object(p.c)(),
                        n = t.account;
                    t.library;
                    return Object(N.jsx)(N.Fragment, {
                        children: Object(N.jsx)("section", {
                            id: "hero_section",
                            children: Object(N.jsx)(S.a, {
                                className: "section-content",
                                children: Object(N.jsxs)(J.a, {
                                    className: "align-items-center",
                                    children: [Object(N.jsx)(W.a, {
                                        lg: 5,
                                        className: "d-flex flex-column justify-content-center justify-content-lg-start",
                                        "data-aos": "fade-in",
                                        "data-aos-once": "true",
                                        children: Object(N.jsx)("img", {
                                            src: he,
                                            className: "",
                                            alt: "hero",
                                            loop: "true",
                                            autoplay: "true"
                                        })
                                    }), Object(N.jsxs)(W.a, {
                                        lg: 7,
                                        className: "py-3 text-center",
                                        "data-aos": "fade-in",
                                        "data-aos-once": "true",
                                        children: [Object(N.jsxs)("h2", {
                                            className: "mint-live text-shadow",
                                            children: ["PUBLIC MINT IS ", Object(N.jsx)("span", {
                                                className: "mint-live-pulse",
                                                children: "LIVE"
                                            })]
                                        }), Object(N.jsxs)("h2", {
                                            className: "mint-live text-shadow",
                                            children: ["ENDS IN ", Object(N.jsx)("span", {
                                                className: "text-primary",
                                                id: "demo",
                                                children: ""
                                            })]
                                        }), Object(N.jsxs)("p", {
                                            className: "priceSale mt-3",
                                            children: [Object(N.jsx)("span", {
                                                id: "prices",
                                                children: "PRICE : 0.088 ETH "
                                            }), " ", Object(N.jsx)("br", {}), Object(N.jsx)("span", {
                                                id: "excluding",
                                                children: " (excluding gas fees) "
                                            }), Object(N.jsx)("h2", {
                                                className: "mint-limited text-shadow",
                                                children: "LIMITED SALE"
                                            })]
                                        }), Object(N.jsxs)("h3", {
                                            className: "mint-count",
                                            children: [Object(N.jsx)("span", {
                                                id: "nft_left",
                                                children: ""
                                            }), Object(N.jsx)("span", {
                                                className: "text-secondary",
                                                children: "\xa0/\xa010000"
                                            })]
                                        }), Object(N.jsx)("div", {
                                            children: n ? Object(N.jsx)(ye, {}) : Object(N.jsx)(le, {
                                                size: "lg"
                                            })
                                        }), Object(N.jsx)("div", {
                                            className: "mint-footer",
                                            children: Object(N.jsx)("p", {
                                                children: '"Maximum 6 NFTS"'
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }))),
                fe = function () {
                    return Object(N.jsxs)("div", {
                        className: "mint-teaser",
                        children: ["PUBLIC MINT IS LIVE NOW", Object(N.jsx)("div", {
                            className: "mint-teaser-pulser"
                        })]
                    })
                },
                Ae = n.p + "static/media/about1.png",
                xe = n.p + "static/media/about2.gif",
                ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAYAAABxyNlsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDEzOjI3OjE2KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAyLTAxVDEzOjI3OjE2KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0wMVQxMzoyNzoxNiswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmNDQwMjgyOS0yYzUxLTU0NGItOTYxNy0yZmRiY2YzMDQ1N2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZGQ2NzlmMS1mN2M0LTQwNDMtYTdlZS03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",
                we = Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    return Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)("section", {
                            children: Object(N.jsxs)(S.a, {
                                className: "section-content",
                                children: [Object(N.jsx)(J.a, {
                                    className: "row-cols-1 row-cols-lg-2",
                                    children: U.map((function (e, t) {
                                        return Object(N.jsx)(W.a, {
                                            className: "my-3",
                                            "data-aos": "fade-up",
                                            "data-aos-once": "true",
                                            "data-aos-delay": 300 * t,
                                            children: Object(N.jsxs)("div", {
                                                className: "influencer card border-0 bg-transparent mw-300px mx-auto",
                                                children: [e.photo && Object(N.jsxs)("div", {
                                                    className: "influencer-photo-wrapper",
                                                    children: [Object(N.jsx)("img", {
                                                        src: e.photo,
                                                        className: "card-img-top rounded-circle",
                                                        alt: e.name
                                                    }), Object(N.jsx)("img", {
                                                        src: ge,
                                                        className: "verification",
                                                        alt: "verification"
                                                    })]
                                                }), Object(N.jsxs)("div", {
                                                    className: "card-body p-0 d-flex flex-column justify-content-center align-items-center",
                                                    children: [Object(N.jsxs)("h3", {
                                                        children: [e.name, Object(N.jsx)("img", {
                                                            src: ge,
                                                            alt: "check"
                                                        })]
                                                    }), Object(N.jsx)("span", {
                                                        children: e.role
                                                    })]
                                                })]
                                            })
                                        }, t)
                                    }))
                                }), Object(N.jsx)("div", {
                                    className: "w-100 text-center my-5",
                                    "data-aos": "fade-in",
                                    "data-aos-once": "true",
                                    children: Object(N.jsx)(fe, {})
                                })]
                            })
                        }), Object(N.jsx)("section", {
                            id: "about_section",
                            className: "pt-0",
                            children: Object(N.jsxs)(S.a, {
                                className: "section-content",
                                children: [Object(N.jsxs)(J.a, {
                                    className: "row-cols-1 row-cols-lg-2",
                                    children: [Object(N.jsxs)(W.a, {
                                        "data-aos": "fade-right",
                                        "data-aos-once": "true",
                                        children: [Object(N.jsxs)("h3", {
                                            children: ["GARBAGE ", Object(N.jsx)("span", {
                                                className: "text-primary",
                                                children: "FRIENDS"
                                            })]
                                        }), Object(N.jsx)("p", {
                                            children: "Everybody will get the opportunity to mint a Garbage Friend, our collection contains 10,000 UNIQUE NFTs where no trait is identical"
                                        }), Object(N.jsx)("p", {
                                            children: "As October comes to a close we'll be serving up some hot garbage for the metaverse. Yup these trashy friends are everything our Invisible Friends aren't. That is smelly, dirty and nihilistic. They still belong to the same universe, how? Stay tuned!"
                                        })]
                                    }), Object(N.jsx)(W.a, {
                                        className: "text-center text-lg-end",
                                        "data-aos": "fade-left",
                                        "data-aos-once": "true",
                                        children: Object(N.jsx)("img", {
                                            src: Ae,
                                            className: "w-100 mw-500px",
                                            alt: "about1"
                                        })
                                    })]
                                }), Object(N.jsxs)(J.a, {
                                    className: "row-cols-1 row-cols-lg-2 mt-5",
                                    children: [Object(N.jsx)(W.a, {
                                        className: "text-center text-lg-start order-2 order-lg-1",
                                        "data-aos": "fade-right",
                                        "data-aos-once": "true",
                                        children: Object(N.jsx)("img", {
                                            src: xe,
                                            className: "w-100 mw-350px",
                                            alt: "about2"
                                        })
                                    }), Object(N.jsxs)(W.a, {
                                        className: "order-1 order-lg-2",
                                        "data-aos": "fade-left",
                                        "data-aos-once": "true",
                                        children: [Object(N.jsxs)("h3", {
                                            children: ["A Collection of ", Object(N.jsx)("span", {
                                                className: "text-primary",
                                                children: "5,000 Invisible Friends"
                                            })]
                                        }), Object(N.jsx)("p", {
                                            children: "Invisible Friends is a collection of 5,000 “animated invisible characters” created by Swedish animator Markus Magnusson and is a Random Character Collective project."
                                        }), Object(N.jsx)("p", {
                                            children: "It’s for people who are still kids at heart. People who just wanna have a bit of fun on the internet. Just the very easy-going type of person that has a good taste in art,” Magnusson said to describe people who would likely mint Invisible Friends."
                                        }), Object(N.jsx)("p", {
                                            children: "Owning an Invisible Friend allows you to vote on community-driven features, products and events. This makes our roadmap collaborative to be decided by the project founders and Invisible Friends holders."
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                }))),
                ve = function () {
                    return Object(N.jsx)("section", {
                        id: "team_section",
                        className: "pt-0",
                        children: Object(N.jsxs)(S.a, {
                            className: "section-content",
                            children: [Object(N.jsxs)("div", {
                                className: "title-big",
                                children: [Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "100",
                                    children: "F"
                                }), Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "200",
                                    children: "R"
                                }), Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "300",
                                    children: "I"
                                }), Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "400",
                                    children: "E"
                                }), 
                                Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "500",
                                    children: "N"
                                }),
                                    Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "500",
                                    children: "D"
                                }),
                                    Object(N.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-once": "true",
                                    "data-aos-delay": "500",
                                    children: "S"
                                })]
                            }), Object(N.jsx)("p", {
                                "data-aos": "fade-up",
                                "data-aos-once": "true",
                                "data-aos-delay": "500",
                                className: "text-center fs-6 fw-bold my-5",
                                children: "FRIENDS THROUGH THE METAVERSE"
                            }), Object(N.jsx)(J.a, {
                                className: "row-cols-1 row-cols-md-3 mt-5 mx-0 mx-lg-5 align-items-start",
                                "data-aos": "fade-in",
                                "data-aos-once": "true",
                                children: P.map((function (e, t) {
                                    return Object(N.jsx)(W.a, {
                                        className: "my-3",
                                        "data-aos": "fade-up",
                                        "data-aos-once": "true",
                                        "data-aos-delay": 300 * t,
                                        children: Object(N.jsxs)("div", {
                                            className: "card border-0 bg-transparent mw-300px mx-auto",
                                            children: [e.photo && Object(N.jsx)("div", {
                                                className: "w-100",
                                                children: Object(N.jsx)("img", {
                                                    src: e.photo,
                                                    className: "card-img-top rounded-circle px-3",
                                                    alt: e.name
                                                })
                                            }), Object(N.jsxs)("div", {
                                                className: "card-body px-0 py-3 py-lg-5 text-center",
                                                children: [Object(N.jsx)("h4", {
                                                    children: e.name
                                                }), Object(N.jsx)("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.role
                                                    }
                                                })]
                                            })]
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                },
                Ne = (n(252), Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    return Object(N.jsx)("section", {
                        id: "faq_section",
                        className: "pt-0",
                        children: Object(N.jsxs)(S.a, {
                            className: "section-content",
                            children: [Object(N.jsxs)("h2", {
                                children: [Object(N.jsx)("span", {
                                    className: "text-white",
                                    children: "F"
                                }), Object(N.jsx)("span", {
                                    className: "text-white",
                                    children: "A"
                                }), Object(N.jsx)("span", {
                                    className: "text-white",
                                    children: "Q"
                                })]
                            }), Object(N.jsx)("div", {
                                className: "accordion faqs-content mt-0 mt-lg-5",
                                id: "faqs_content",
                                children: z.map((function (e, t) {
                                    return Object(N.jsxs)("div", {
                                        className: "accordion-item",
                                        "data-aos": "fade-up",
                                        "data-aos-once": "true",
                                        children: [Object(N.jsx)("div", {
                                            className: "accordion-header",
                                            id: "faqs_content_heading" + t,
                                            children: Object(N.jsx)("a", {
                                                className: "accordion-button collapsed py-3 py-lg-4",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#faqs_content_collapse" + t,
                                                "aria-controls": "faqs_content_collapse" + t,
                                                children: Object(N.jsx)("h4", {
                                                    children: e.q
                                                })
                                            })
                                        }), Object(N.jsx)("div", {
                                            id: "faqs_content_collapse" + t,
                                            className: "accordion-collapse collapse",
                                            "aria-labelledby": "faqs_content_heading" + t,
                                            "data-bs-parent": "#faqs_content",
                                            children: Object(N.jsx)("div", {
                                                className: "accordion-body px-0 py-3 py-lg-4",
                                                children: Object(N.jsx)("p", {
                                                    className: "fs-6",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.a
                                                    }
                                                })
                                            })
                                        })]
                                    }, t)
                                }))
                            }), Object(N.jsxs)("div", {
                                className: "w-100 mt-5",
                                "data-aos": "fade-up",
                                "data-aos-once": "true",
                                "data-aos-delay": "200",
                                children: [Object(N.jsx)("h3", {
                                    children: "OK, ENOUGH\u2026 I CAN\u2019T WAIT TO GET MYSELF A GARBAGE FRIEND!"
                                }), Object(N.jsx)("p", {
                                    children: "Created by the INVISIBLE FRIENDS with special \u2665 to our developer partners, Random Character Collective, our moderators, and the support from the community, our friends, families, and loved ones. "
                                })]
                            })]
                        })
                    })
                }))));
            var Ie = Object(o.g)(Object(r.b)((function (e, t) {
                    return Object(j.a)(Object(j.a)({}, t), {}, {
                        notification: e.app.notification
                    })
                }), (function (e) {
                    return {
                        dispatch: e
                    }
                }))((function (e) {
                    return Object(N.jsxs)(N.Fragment, {
                        children: [Object(N.jsx)(Oe, {}), Object(N.jsx)(we, {}), Object(N.jsx)(ve, {}), Object(N.jsx)(Ne, {})]
                    })
                }))),
                Te = function () {
                    return Object(a.useEffect)((function () {
                        E.a.init({
                            duration: 1e3,
                            easing: "ease-in-out",
                            once: !0,
                            mirror: !1
                        })
                    })), Object(N.jsx)(o.c, {
                        children: Object(N.jsx)(M, {
                            exact: !0,
                            path: "/",
                            component: Ie,
                            layout: $
                        })
                    })
                },
                Ce = function (e) {
                    e && e instanceof Function && n.e(5).then(n.bind(null, 838)).then((function (t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            s = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        n(e), a(e), s(e), i(e), c(e)
                    }))
                },
                Me = (n(573), n(574), Object(l.a)());
            c.a.render(Object(N.jsx)(s.a.StrictMode, {
                children: Object(N.jsx)(r.a, {
                    store: v,
                    children: Object(N.jsx)(p.b, {
                        getLibrary: function (e) {
                            return new d.a(e)
                        },
                        children: Object(N.jsx)(o.b, {
                            history: Me,
                            children: Object(N.jsx)(I, {
                                children: Object(N.jsx)(Te, {})
                            })
                        })
                    })
                })
            }), document.getElementById("root")), Ce()
        }
    },
    [
        [577, 1, 2]
    ]
]);