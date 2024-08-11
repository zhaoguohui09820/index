/* PrismJS 1.26.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+arduino+aspnet+asm6502+asmatmel+bash+basic+bbcode+c+csharp+cpp+coffeescript+css-extras+csv+dart+django+docker+ejs+erlang+excel-formula+fsharp+fortran+gap+git+go+go-module+graphql+haml+haxe+http+ini+java+javadoclike+jq+json+json5+jsonp+js-templates+julia+kotlin+latex+less+liquid+lisp+lua+makefile+markdown+markup-templating+matlab+mongodb+nginx+objectivec+opencl+pascal+perl+php+phpdoc+plsql+powerquery+powershell+prolog+promql+properties+pug+pure+python+r+jsx+tsx+ruby+rust+sass+scss+scala+smarty+sql+stylus+swift+toml+twig+typescript+typoscript+uri+vbnet+verilog+vim+visual-basic+wasm+yaml&plugins=line-highlight+line-numbers+show-language+highlight-keywords+toolbar+copy-to-clipboard+download-button */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(u) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            n = 0,
            e = {},
            M = {
                manual: u.Prism && u.Prism.manual,
                disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++n
                        }), e.__id
                    },
                    clone: function t(e, r) {
                        var a, n;
                        switch (r = r || {}, M.util.type(e)) {
                            case "Object":
                                if (n = M.util.objId(e), r[n]) return r[n];
                                for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                                return a;
                            case "Array":
                                return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function(e, n) {
                                    a[n] = t(e, r)
                                }), a);
                            default:
                                return e
                        }
                    },
                    getLanguage: function(e) {
                        for (; e;) {
                            var n = t.exec(e.className);
                            if (n) return n[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function(e, n) {
                        e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (e) {
                            var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                            if (n) {
                                var t = document.getElementsByTagName("script");
                                for (var r in t)
                                    if (t[r].src == n) return t[r]
                            }
                            return null
                        }
                    },
                    isActive: function(e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    plain: e,
                    plaintext: e,
                    text: e,
                    txt: e,
                    extend: function(e, n) {
                        var t = M.util.clone(M.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function(t, e, n, r) {
                        var a = (r = r || M.languages)[t],
                            i = {};
                        for (var l in a)
                            if (a.hasOwnProperty(l)) {
                                if (l == e)
                                    for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                                n.hasOwnProperty(l) || (i[l] = a[l])
                            }
                        var s = r[t];
                        return r[t] = i, M.languages.DFS(M.languages, function(e, n) {
                            n === s && e != t && (this[e] = i)
                        }), i
                    },
                    DFS: function e(n, t, r, a) {
                        a = a || {};
                        var i = M.util.objId;
                        for (var l in n)
                            if (n.hasOwnProperty(l)) {
                                t.call(n, l, n[l], r || l);
                                var o = n[l],
                                    s = M.util.type(o);
                                "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, n) {
                    M.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function(e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);
                    for (var a, i = 0; a = r.elements[i++];) M.highlightElement(a, !0 === n, r.callback)
                },
                highlightElement: function(e, n, t) {
                    var r = M.util.getLanguage(e),
                        a = M.languages[r];
                    M.util.setLanguage(e, r);
                    var i = e.parentElement;
                    i && "pre" === i.nodeName.toLowerCase() && M.util.setLanguage(i, r);
                    var l = {
                        element: e,
                        language: r,
                        grammar: a,
                        code: e.textContent
                    };

                    function o(e) {
                        l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element)
                    }
                    if (M.hooks.run("before-sanity-check", l), (i = l.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !l.code) return M.hooks.run("complete", l), void(t && t.call(l.element));
                    if (M.hooks.run("before-highlight", l), l.grammar)
                        if (n && u.Worker) {
                            var s = new Worker(M.filename);
                            s.onmessage = function(e) {
                                o(e.data)
                            }, s.postMessage(JSON.stringify({
                                language: l.language,
                                code: l.code,
                                immediateClose: !0
                            }))
                        } else o(M.highlight(l.code, l.grammar, l.language));
                    else o(M.util.encode(l.code))
                },
                highlight: function(e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language)
                },
                tokenize: function(e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new i;
                    return I(a, a.head, e),
                        function e(n, t, r, a, i, l) {
                            for (var o in r)
                                if (r.hasOwnProperty(o) && r[o]) {
                                    var s = r[o];
                                    s = Array.isArray(s) ? s : [s];
                                    for (var u = 0; u < s.length; ++u) {
                                        if (l && l.cause == o + "," + u) return;
                                        var c = s[u],
                                            g = c.inside,
                                            f = !!c.lookbehind,
                                            h = !!c.greedy,
                                            d = c.alias;
                                        if (h && !c.pattern.global) {
                                            var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                                            c.pattern = RegExp(c.pattern.source, v + "g")
                                        }
                                        for (var p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                                            var k = m.value;
                                            if (t.length > n.length) return;
                                            if (!(k instanceof W)) {
                                                var x, b = 1;
                                                if (h) {
                                                    if (!(x = z(p, y, n, f)) || x.index >= n.length) break;
                                                    var w = x.index,
                                                        A = x.index + x[0].length,
                                                        P = y;
                                                    for (P += m.value.length; P <= w;) m = m.next, P += m.value.length;
                                                    if (P -= m.value.length, y = P, m.value instanceof W) continue;
                                                    for (var E = m; E !== t.tail && (P < A || "string" == typeof E.value); E = E.next) b++, P += E.value.length;
                                                    b--, k = n.slice(y, P), x.index -= y
                                                } else if (!(x = z(p, 0, k, f))) continue;
                                                var w = x.index,
                                                    L = x[0],
                                                    S = k.slice(0, w),
                                                    O = k.slice(w + L.length),
                                                    j = y + k.length;
                                                l && j > l.reach && (l.reach = j);
                                                var C = m.prev;
                                                S && (C = I(t, C, S), y += S.length), q(t, C, b);
                                                var N = new W(o, g ? M.tokenize(L, g) : L, d, L);
                                                if (m = I(t, C, N), O && I(t, m, O), 1 < b) {
                                                    var _ = {
                                                        cause: o + "," + u,
                                                        reach: j
                                                    };
                                                    e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach)
                                                }
                                            }
                                        }
                                    }
                                }
                        }(e, a, n, a.head, 0),
                        function(e) {
                            var n = [],
                                t = e.head.next;
                            for (; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function(e, n) {
                        var t = M.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function(e, n) {
                        var t = M.hooks.all[e];
                        if (t && t.length)
                            for (var r, a = 0; r = t[a++];) r(n)
                    }
                },
                Token: W
            };

        function W(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function z(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                a.index += i, a[0] = a[0].slice(i)
            }
            return a
        }

        function i() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function I(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function q(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r).prev = n, e.length -= a
        }
        if (u.Prism = M, W.stringify = function n(e, t) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    var r = "";
                    return e.forEach(function(e) {
                        r += n(e, t)
                    }), r
                }
                var a = {
                        type: e.type,
                        content: n(e.content, t),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t
                    },
                    i = e.alias;
                i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
                var l = "";
                for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
                return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">"
            }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function(e) {
            var n = JSON.parse(e.data),
                t = n.language,
                r = n.code,
                a = n.immediateClose;
            u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close()
        }, !1)), M;
        var r = M.util.currentScript();

        function a() {
            M.manual || M.highlightAll()
        }
        if (r && (M.filename = r.src, r.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
            var l = document.readyState;
            "loading" === l || "interactive" === l && r && r.defer ? document.addEventListener("DOMContentLoaded", a) : window.requestAnimationFrame ? window.requestAnimationFrame(a) : window.setTimeout(a, 16)
        }
        return M
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, /"|'/]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        t["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                return a
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, Prism.languages.insertBefore("markup", "cdata", n)
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [e, "language-" + e],
                            inside: Prism.languages[e]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function(s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + e.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: e,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function"
            }],
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
}), Prism.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
}), delete Prism.languages.c.boolean;
! function(e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, function() {
            return t.source
        });
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function() {
                return t.source
            })),
            lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, function() {
                return n
            }) + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: /^[<"][\s\S]+/,
                operator: /:/,
                punctuation: /\./
            }
        },
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }), e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                function: /^\w+/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp
                }
            }
        }
    }), e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }), e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism);
Prism.languages.arduino = Prism.languages.extend("cpp", {
    keyword: /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
    constant: /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
    builtin: /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/
}), Prism.languages.ino = Prism.languages.arduino;
! function(s) {
    function a(e, s) {
        return e.replace(/<<(\d+)>>/g, function(e, n) {
            return "(?:" + s[+n] + ")"
        })
    }

    function t(e, n, s) {
        return RegExp(a(e, n), s || "")
    }

    function e(e, n) {
        for (var s = 0; s < n; s++) e = e.replace(/<<self>>/g, function() {
            return "(?:" + e + ")"
        });
        return e.replace(/<<self>>/g, "[^\\s\\S]")
    }
    var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
        r = "class enum interface record struct",
        i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
        o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";

    function l(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
    }
    var d = l(r),
        p = RegExp(l(n + " " + r + " " + i + " " + o)),
        c = l(r + " " + i + " " + o),
        u = l(n + " " + r + " " + o),
        g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
        b = e("\\((?:[^()]|<<self>>)*\\)", 2),
        h = "@?\\b[A-Za-z_]\\w*\\b",
        f = a("<<0>>(?:\\s*<<1>>)?", [h, g]),
        m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
        k = "\\[\\s*(?:,\\s*)*\\]",
        y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
        w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k]),
        v = {
            keyword: p,
            punctuation: /[<>()?,.:[\]]/
        },
        x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
        $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
    s.languages.csharp = s.languages.extend("clike", {
        string: [{
            pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: t("(^|[^@$\\\\])<<0>>", [$]),
            lookbehind: !0,
            greedy: !0
        }],
        "class-name": [{
            pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bwhere\\s+)<<0>>", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [w, u, h]),
            inside: v
        }],
        keyword: p,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/
    }), s.languages.insertBefore("csharp", "number", {
        range: {
            pattern: /\.\./,
            alias: "operator"
        }
    }), s.languages.insertBefore("csharp", "punctuation", {
        "named-parameter": {
            pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
            lookbehind: !0,
            alias: "punctuation"
        }
    }), s.languages.insertBefore("csharp", "class-name", {
        namespace: {
            pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        },
        "type-expression": {
            pattern: t("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [b]),
            lookbehind: !0,
            alias: "class-name",
            inside: v
        },
        "return-type": {
            pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [w, m]),
            inside: v,
            alias: "class-name"
        },
        "constructor-invocation": {
            pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]),
            lookbehind: !0,
            inside: v,
            alias: "class-name"
        },
        "generic-method": {
            pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
            inside: {
                function: t("^<<0>>", [h]),
                generic: {
                    pattern: RegExp(g),
                    alias: "class-name",
                    inside: v
                }
            }
        },
        "type-list": {
            pattern: t("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, w, p.source, b, "\\bnew\\s*\\(\\s*\\)"]),
            lookbehind: !0,
            inside: {
                "record-arguments": {
                    pattern: t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]),
                    lookbehind: !0,
                    greedy: !0,
                    inside: s.languages.csharp
                },
                keyword: p,
                "class-name": {
                    pattern: RegExp(w),
                    greedy: !0,
                    inside: v
                },
                punctuation: /[,()]/
            }
        },
        preprocessor: {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
                directive: {
                    pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        }
    });
    var _ = $ + "|" + x,
        B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_]),
        E = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
        R = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
        z = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);
    s.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [R, z]),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {
                    pattern: t("^<<0>>(?=\\s*:)", [R]),
                    alias: "keyword"
                },
                "attribute-arguments": {
                    pattern: t("\\(<<0>>*\\)", [E]),
                    inside: s.languages.csharp
                },
                "class-name": {
                    pattern: RegExp(m),
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /[:,]/
            }
        }
    });
    var S = ":[^}\r\n]+",
        j = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
        A = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [j, S]),
        F = e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [_]), 2),
        P = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, S]);

    function U(e, n) {
        return {
            interpolation: {
                pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, S]),
                        lookbehind: !0,
                        inside: {
                            punctuation: /^:/
                        }
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: s.languages.csharp
                    }
                }
            },
            string: /[\s\S]+/
        }
    }
    s.languages.insertBefore("csharp", "string", {
        "interpolation-string": [{
            pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [A]),
            lookbehind: !0,
            greedy: !0,
            inside: U(A, j)
        }, {
            pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [P]),
            lookbehind: !0,
            greedy: !0,
            inside: U(P, F)
        }],
        char: {
            pattern: RegExp(x),
            greedy: !0
        }
    }), s.languages.dotnet = s.languages.cs = s.languages.csharp
}(Prism);
Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive": {
        pattern: /<%\s*@.*%>/,
        alias: "tag",
        inside: {
            "page-directive": {
                pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                alias: "tag"
            },
            rest: Prism.languages.markup.tag.inside
        }
    },
    directive: {
        pattern: /<%.*%>/,
        alias: "tag",
        inside: {
            directive: {
                pattern: /<%\s*?[$=%#:]{0,2}|%>/,
                alias: "tag"
            },
            rest: Prism.languages.csharp
        }
    }
}), Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/, Prism.languages.insertBefore("inside", "punctuation", {
    directive: Prism.languages.aspnet.directive
}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {
    "asp-comment": {
        pattern: /<%--[\s\S]*?--%>/,
        alias: ["asp", "comment"]
    }
}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp-script": {
        pattern: /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        alias: ["asp", "script"],
        inside: Prism.languages.csharp || {}
    }
});
Prism.languages.asm6502 = {
    comment: /;.*/,
    directive: {
        pattern: /\.\w+(?= )/,
        alias: "property"
    },
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "op-code": {
        pattern: /\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,
        alias: "keyword"
    },
    "hex-number": {
        pattern: /#?\$[\da-f]{1,4}\b/i,
        alias: "number"
    },
    "binary-number": {
        pattern: /#?%[01]+\b/,
        alias: "number"
    },
    "decimal-number": {
        pattern: /#?\b\d+\b/,
        alias: "number"
    },
    register: {
        pattern: /\b[xya]\b/i,
        alias: "variable"
    },
    punctuation: /[(),:]/
};
Prism.languages.asmatmel = {
    comment: {
        pattern: /;.*/,
        greedy: !0
    },
    string: {
        pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    constant: /\b(?:PORT[A-Z]|DDR[A-Z]|(?:DD|P)[A-Z](?:\d|[0-2]\d|3[01]))\b/,
    directive: {
        pattern: /\.\w+(?= )/,
        alias: "property"
    },
    "r-register": {
        pattern: /\br(?:\d|[12]\d|3[01])\b/,
        alias: "variable"
    },
    "op-code": {
        pattern: /\b(?:ADC|ADD|ADIW|AND|ANDI|ASR|BCLR|BLD|BRBC|BRBS|BRCC|BRCS|BREAK|BREQ|BRGE|BRHC|BRHS|BRID|BRIE|BRLO|BRLT|BRMI|BRNE|BRPL|BRSH|BRTC|BRTS|BRVC|BRVS|BSET|BST|CALL|CBI|CBR|CLC|CLH|CLI|CLN|CLR|CLS|CLT|CLV|CLZ|COM|CP|CPC|CPI|CPSE|DEC|DES|EICALL|EIJMP|ELPM|EOR|FMUL|FMULS|FMULSU|ICALL|IJMP|IN|INC|JMP|LAC|LAS|LAT|LD|LD[A-Za-z0-9]|LPM|LSL|LSR|MOV|MOVW|MUL|MULS|MULSU|NEG|NOP|OR|ORI|OUT|POP|PUSH|RCALL|RET|RETI|RJMP|ROL|ROR|SBC|SBCI|SBI|SBIC|SBIS|SBIW|SBR|SBRC|SBRS|SEC|SEH|SEI|SEN|SER|SES|SET|SEV|SEZ|SLEEP|SPM|ST|ST[A-Z0-9]|SUB|SUBI|SWAP|TST|WDR|XCH|adc|add|adiw|and|andi|asr|bclr|bld|brbc|brbs|brcc|brcs|break|breq|brge|brhc|brhs|brid|brie|brlo|brlt|brmi|brne|brpl|brsh|brtc|brts|brvc|brvs|bset|bst|call|cbi|cbr|clc|clh|cli|cln|clr|cls|clt|clv|clz|com|cp|cpc|cpi|cpse|dec|des|eicall|eijmp|elpm|eor|fmul|fmuls|fmulsu|icall|ijmp|in|inc|jmp|lac|las|lat|ld|ld[a-z0-9]|lpm|lsl|lsr|mov|movw|mul|muls|mulsu|neg|nop|or|ori|out|pop|push|rcall|ret|reti|rjmp|rol|ror|sbc|sbci|sbi|sbic|sbis|sbiw|sbr|sbrc|sbrs|sec|seh|sei|sen|ser|ses|set|sev|sez|sleep|spm|st|st[a-zA-Z0-9]|sub|subi|swap|tst|wdr|xch)\b/,
        alias: "keyword"
    },
    "hex-number": {
        pattern: /#?\$[\da-f]{2,4}\b/i,
        alias: "number"
    },
    "binary-number": {
        pattern: /#?%[01]+\b/,
        alias: "number"
    },
    "decimal-number": {
        pattern: /#?\b\d+\b/,
        alias: "number"
    },
    register: {
        pattern: /\b[acznvshtixy]\b/i,
        alias: "variable"
    },
    operator: />>=?|<<=?|&&?|\|\|?|[-+*/%&|^!=<>?]=?/,
    punctuation: /[(),:]/
};
! function(e) {
    var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
        n = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: "punctuation",
            inside: null
        },
        a = {
            bash: n,
            environment: {
                pattern: RegExp("\\$" + t),
                alias: "constant"
            },
            variable: [{
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: !0,
                inside: {
                    variable: [{
                        pattern: /(^\$\(\([\s\S]+)\)\)/,
                        lookbehind: !0
                    }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/
                }
            }, {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: !0,
                inside: {
                    variable: /^\$\(|^`|\)$|`$/
                }
            }, {
                pattern: /\$\{[^}]+\}/,
                greedy: !0,
                inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                        pattern: RegExp("(\\{)" + t),
                        lookbehind: !0,
                        alias: "constant"
                    }
                }
            }, /\$(?:\w+|[#?*!@$])/],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
        };
    e.languages.bash = {
        shebang: {
            pattern: /^#!\s*\/.*/,
            alias: "important"
        },
        comment: {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: !0
        },
        "function-name": [{
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: !0,
            alias: "function"
        }, {
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
        }],
        "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: !0
        },
        "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
                environment: {
                    pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                    lookbehind: !0,
                    alias: "constant"
                }
            },
            alias: "variable",
            lookbehind: !0
        },
        string: [{
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: !0,
            greedy: !0,
            inside: a
        }, {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                bash: n
            }
        }, {
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: !0,
            greedy: !0,
            inside: a
        }, {
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: !0,
            inside: {
                entity: a.entity
            }
        }],
        environment: {
            pattern: RegExp("\\$?" + t),
            alias: "constant"
        },
        variable: a.variable,
        function: {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        builtin: {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: "class-name"
        },
        boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        "file-descriptor": {
            pattern: /\B&\d\b/,
            alias: "important"
        },
        operator: {
            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
                "file-descriptor": {
                    pattern: /^\d/,
                    alias: "important"
                }
            }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0
        }
    }, n.inside = e.languages.bash;
    for (var o = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], s = a.variable[1].inside, i = 0; i < o.length; i++) s[o[i]] = e.languages.bash[o[i]];
    e.languages.shell = e.languages.bash
}(Prism);
Prism.languages.basic = {
    comment: {
        pattern: /(?:!|REM\b).+/i,
        inside: {
            keyword: /^REM/i
        }
    },
    string: {
        pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
        greedy: !0
    },
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
};
Prism.languages.bbcode = {
    tag: {
        pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
        inside: {
            tag: {
                pattern: /^\[\/?[^\s=\]]+/,
                inside: {
                    punctuation: /^\[\/?/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\]/,
            "attr-name": /[^\s=\]]+/
        }
    }
}, Prism.languages.shortcode = Prism.languages.bbcode;
! function(e) {
    var t = /#(?!\{).+/,
        n = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [{
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: !0
        }, {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            inside: {
                interpolation: n
            }
        }],
        keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }), e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: n
            }
        }
    }), e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                script: {
                    pattern: /[\s\S]+/,
                    alias: "language-javascript",
                    inside: e.languages.javascript
                }
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            greedy: !0,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: n
            }
        }]
    }), e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript
}(Prism);
! function(e) {
    var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css.selector = {
        pattern: e.languages.css.selector.pattern,
        lookbehind: !0,
        inside: a = {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                    punctuation: /^\[|\]$/,
                    "case-sensitivity": {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    namespace: {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\|$/
                        }
                    },
                    "attr-name": {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: !0
                    },
                    "attr-value": [n, {
                        pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                        lookbehind: !0
                    }],
                    operator: /[|~*^$]?=/
                }
            },
            "n-th": [{
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: {
                    number: /[\dn]+/,
                    operator: /[+-]/
                }
            }, {
                pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                lookbehind: !0
            }],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/
        }
    }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
        variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
            lookbehind: !0
        }
    });
    var r = {
            pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
            lookbehind: !0
        },
        i = {
            pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
            lookbehind: !0
        };
    e.languages.insertBefore("css", "function", {
        operator: {
            pattern: /(\s)[+\-*\/](?=\s)/,
            lookbehind: !0
        },
        hexcode: {
            pattern: /\B#[\da-f]{3,8}\b/i,
            alias: "color"
        },
        color: [{
            pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
            lookbehind: !0
        }, {
            pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
                unit: r,
                number: i,
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
            }
        }],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i
    })
}(Prism);
Prism.languages.csv = {
    value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
    punctuation: /,/
};
! function(e) {
    var a = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        s = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                }
            }
        };
    e.languages.dart = e.languages.extend("clike", {
        "class-name": [s, {
            pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
            lookbehind: !0,
            inside: s.inside
        }],
        keyword: a,
        operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
    }), e.languages.insertBefore("dart", "string", {
        "string-literal": {
            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /^\$\{?|\}$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: e.languages.dart
                        }
                    }
                },
                string: /[\s\S]+/
            }
        },
        string: void 0
    }), e.languages.insertBefore("dart", "class-name", {
        metadata: {
            pattern: /@\w+/,
            alias: "function"
        }
    }), e.languages.insertBefore("dart", "class-name", {
        generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
                "class-name": s,
                keyword: a,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        }
    })
}(Prism);
! function(h) {
    function v(e, n) {
        return "___" + e.toUpperCase() + n + "___"
    }
    Object.defineProperties(h.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function(a, r, e, o) {
                if (a.language === r) {
                    var c = a.tokenStack = [];
                    a.code = a.code.replace(e, function(e) {
                        if ("function" == typeof o && !o(e)) return e;
                        for (var n, t = c.length; - 1 !== a.code.indexOf(n = v(r, t));) ++t;
                        return c[t] = e, n
                    }), a.grammar = h.languages.markup
                }
            }
        },
        tokenizePlaceholders: {
            value: function(p, k) {
                if (p.language === k && p.tokenStack) {
                    p.grammar = h.languages[k];
                    var m = 0,
                        d = Object.keys(p.tokenStack);
                    ! function e(n) {
                        for (var t = 0; t < n.length && !(m >= d.length); t++) {
                            var a = n[t];
                            if ("string" == typeof a || a.content && "string" == typeof a.content) {
                                var r = d[m],
                                    o = p.tokenStack[r],
                                    c = "string" == typeof a ? a : a.content,
                                    i = v(k, r),
                                    u = c.indexOf(i);
                                if (-1 < u) {
                                    ++m;
                                    var g = c.substring(0, u),
                                        l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                                        s = c.substring(u + i.length),
                                        f = [];
                                    g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f
                                }
                            } else a.content && e(a.content)
                        }
                        return n
                    }(p.tokens)
                }
            }
        }
    })
}(Prism);
! function(e) {
    e.languages.django = {
        comment: /^\{#[\s\S]*?#\}$/,
        tag: {
            pattern: /(^\{%[+-]?\s*)\w+/,
            lookbehind: !0,
            alias: "keyword"
        },
        delimiter: {
            pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
            alias: "punctuation"
        },
        string: {
            pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        filter: {
            pattern: /(\|)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        test: {
            pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        function: /\b[a-z_]\w+(?=\s*\()/i,
        keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        number: /\b\d+(?:\.\d+)?\b/,
        boolean: /[Ff]alse|[Nn]one|[Tt]rue/,
        variable: /\b\w+\b/,
        punctuation: /[{}[\](),.:;]/
    };
    var n = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,
        o = e.languages["markup-templating"];
    e.hooks.add("before-tokenize", function(e) {
        o.buildPlaceholders(e, "django", n)
    }), e.hooks.add("after-tokenize", function(e) {
        o.tokenizePlaceholders(e, "django")
    }), e.languages.jinja2 = e.languages.django, e.hooks.add("before-tokenize", function(e) {
        o.buildPlaceholders(e, "jinja2", n)
    }), e.hooks.add("after-tokenize", function(e) {
        o.tokenizePlaceholders(e, "jinja2")
    })
}(Prism);
! function(e) {
    var r = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, function() {
            return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"
        }),
        n = "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g, function() {
            return n
        }),
        o = {
            pattern: RegExp(n),
            greedy: !0
        },
        i = {
            pattern: /(^[ \t]*)#.*/m,
            lookbehind: !0,
            greedy: !0
        };

    function a(e, n) {
        return e = e.replace(/<OPT>/g, function() {
            return t
        }).replace(/<SP>/g, function() {
            return r
        }), RegExp(e, n)
    }
    e.languages.docker = {
        instruction: {
            pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: {
                            pattern: /(^|\s)--[\w-]+/,
                            lookbehind: !0
                        },
                        string: [o, {
                            pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                            lookbehind: !0
                        }],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [{
                    pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^ONBUILD<SP>)\\w+", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /^\w+/,
                    greedy: !0
                }],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        },
        comment: i
    }, e.languages.dockerfile = e.languages.docker
}(Prism);
! function(e) {
    e.languages.ejs = {
        delimiter: {
            pattern: /^<%[-_=]?|[-_]?%>$/,
            alias: "punctuation"
        },
        comment: /^#[\s\S]*/,
        "language-javascript": {
            pattern: /[\s\S]+/,
            inside: e.languages.javascript
        }
    }, e.hooks.add("before-tokenize", function(a) {
        e.languages["markup-templating"].buildPlaceholders(a, "ejs", /<%(?!%)[\s\S]+?%>/g)
    }), e.hooks.add("after-tokenize", function(a) {
        e.languages["markup-templating"].tokenizePlaceholders(a, "ejs")
    }), e.languages.eta = e.languages.ejs
}(Prism);
Prism.languages.erlang = {
    comment: /%.+/,
    string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"/,
        greedy: !0
    },
    "quoted-function": {
        pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
        alias: "function"
    },
    "quoted-atom": {
        pattern: /'(?:\\.|[^\\'\r\n])+'/,
        alias: "atom"
    },
    boolean: /\b(?:false|true)\b/,
    keyword: /\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,
    number: [/\$\\?./, /\b\d+#[a-z0-9]+/i, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],
    function: /\b[a-z][\w@]*(?=\()/,
    variable: {
        pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
        lookbehind: !0
    },
    operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/, {
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: !0
    }],
    atom: /\b[a-z][\w@]*/,
    punctuation: /[()[\]{}:;,.#|]|<<|>>/
};
Prism.languages["excel-formula"] = {
    comment: {
        pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /"(?:[^"]|"")*"(?!")/,
        greedy: !0
    },
    reference: {
        pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
        greedy: !0,
        alias: "string",
        inside: {
            operator: /!$/,
            punctuation: /'/,
            sheet: {
                pattern: /[^[\]]+$/,
                alias: "function"
            },
            file: {
                pattern: /\[[^[\]]+\]$/,
                inside: {
                    punctuation: /[[\]]/
                }
            },
            path: /[\s\S]+/
        }
    },
    "function-name": {
        pattern: /\b[A-Z]\w*(?=\()/i,
        alias: "keyword"
    },
    range: {
        pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
        alias: "property",
        inside: {
            operator: /:/,
            cell: /\$?[A-Z]+\$?\d+/i,
            column: /\$?[A-Z]+/i,
            row: /\$?\d+/
        }
    },
    cell: {
        pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
        alias: "property"
    },
    number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:FALSE|TRUE)\b/i,
    operator: /[-+*/^%=&,]|<[=>]?|>=?/,
    punctuation: /[[\]();{}|]/
}, Prism.languages.xlsx = Prism.languages.xls = Prism.languages["excel-formula"];
Prism.languages.fsharp = Prism.languages.extend("clike", {
    comment: [{
        pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
        lookbehind: !0,
        inside: {
            operator: /->|\*/,
            punctuation: /\./
        }
    },
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,
    number: [/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/, /\b0b[01]+(?:uy|y)?\b/, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],
    operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
}), Prism.languages.insertBefore("fsharp", "keyword", {
    preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
            directive: {
                pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
}), Prism.languages.insertBefore("fsharp", "punctuation", {
    "computation-expression": {
        pattern: /\b[_a-z]\w*(?=\s*\{)/i,
        alias: "keyword"
    }
}), Prism.languages.insertBefore("fsharp", "string", {
    annotation: {
        pattern: /\[<.+?>\]/,
        greedy: !0,
        inside: {
            punctuation: /^\[<|>\]$/,
            "class-name": {
                pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
                lookbehind: !0
            },
            "annotation-content": {
                pattern: /[\s\S]+/,
                inside: Prism.languages.fsharp
            }
        }
    },
    char: {
        pattern: /'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
        greedy: !0
    }
});
Prism.languages.fortran = {
    "quoted-number": {
        pattern: /[BOZ](['"])[A-F0-9]+\1/i,
        alias: "number"
    },
    string: {
        pattern: /(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,
        inside: {
            comment: {
                pattern: /(&(?:\r\n?|\n)\s*)!.*/,
                lookbehind: !0
            }
        }
    },
    comment: {
        pattern: /!.*/,
        greedy: !0
    },
    boolean: /\.(?:FALSE|TRUE)\.(?:_\w+)?/i,
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
    keyword: [/\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],
    operator: [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i, {
        pattern: /(^|(?!\().)\/(?!\))/,
        lookbehind: !0
    }],
    punctuation: /\(\/|\/\)|[(),;:&]/
};
Prism.languages.gap = {
    shell: {
        pattern: /^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m,
        greedy: !0,
        inside: {
            gap: {
                pattern: /^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/,
                lookbehind: !0,
                inside: null
            },
            punctuation: /^gap>/
        }
    },
    comment: {
        pattern: /#.*/,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/,
        lookbehind: !0,
        greedy: !0,
        inside: {
            continuation: {
                pattern: /([\r\n])>/,
                lookbehind: !0,
                alias: "punctuation"
            }
        }
    },
    keyword: /\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: {
        pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,
        lookbehind: !0
    },
    continuation: {
        pattern: /([\r\n])>/,
        lookbehind: !0,
        alias: "punctuation"
    },
    operator: /->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./,
    punctuation: /[()[\]{},;.:]/
}, Prism.languages.gap.shell.inside.gap.inside = Prism.languages.gap;
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s--?\w+/
        }
    },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
};
Prism.languages.go = Prism.languages.extend("clike", {
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
}), Prism.languages.insertBefore("go", "string", {
    char: {
        pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
        greedy: !0
    }
}), delete Prism.languages.go["class-name"];
Prism.languages["go-mod"] = Prism.languages["go-module"] = {
    comment: {
        pattern: /\/\/.*/,
        greedy: !0
    },
    version: {
        pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
        lookbehind: !0,
        alias: "number"
    },
    "go-version": {
        pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
        lookbehind: !0,
        alias: "number"
    },
    keyword: {
        pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
        lookbehind: !0
    },
    operator: /=>/,
    punctuation: /[()[\],]/
};
Prism.languages.graphql = {
    comment: /#.*/,
    description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: !0,
        alias: "string",
        inside: {
            "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: Prism.languages.markdown
            }
        }
    },
    string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
    },
    "attr-name": {
        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: !0
    },
    "atom-input": {
        pattern: /\b[A-Z]\w*Input\b/,
        alias: "class-name"
    },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: !0
    },
    fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
    },
    "definition-mutation": {
        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
    },
    "definition-query": {
        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
}, Prism.hooks.add("after-tokenize", function(n) {
    if ("graphql" === n.language)
        for (var o = n.tokens.filter(function(n) {
                return "string" != typeof n && "comment" !== n.type && "scalar" !== n.type
            }), s = 0; s < o.length;) {
            var t = o[s++];
            if ("keyword" === t.type && "mutation" === t.content) {
                var e = [];
                if (c(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
                    s += 2;
                    var a = f(/^\($/, /^\)$/);
                    if (-1 === a) continue;
                    for (; s < a; s++) {
                        var r = l(0);
                        "variable" === r.type && (b(r, "variable-input"), e.push(r.content))
                    }
                    s = a + 1
                }
                if (c(["punctuation", "property-query"]) && "{" === l(0).content && (s++, b(l(0), "property-mutation"), 0 < e.length)) {
                    var i = f(/^\{$/, /^\}$/);
                    if (-1 === i) continue;
                    for (var u = s; u < i; u++) {
                        var p = o[u];
                        "variable" === p.type && 0 <= e.indexOf(p.content) && b(p, "variable-input")
                    }
                }
            }
        }

    function l(n) {
        return o[s + n]
    }

    function c(n, t) {
        t = t || 0;
        for (var e = 0; e < n.length; e++) {
            var a = l(e + t);
            if (!a || a.type !== n[e]) return !1
        }
        return !0
    }

    function f(n, t) {
        for (var e = 1, a = s; a < o.length; a++) {
            var r = o[a],
                i = r.content;
            if ("punctuation" === r.type && "string" == typeof i)
                if (n.test(i)) e++;
                else if (t.test(i) && 0 === --e) return a
        }
        return -1
    }

    function b(n, t) {
        var e = n.alias;
        e ? Array.isArray(e) || (n.alias = e = [e]) : n.alias = e = [], e.push(t)
    }
});
! function(e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: {
            pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
        punctuation: /[(){}[\].,;]/
    }), e.languages.insertBefore("ruby", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    });
    var n = {
        pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
        lookbehind: !0,
        inside: {
            content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby
            },
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
            }
        }
    };
    delete e.languages.ruby.function;
    var t = "(?:" + ["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)", "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]", "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|") + ")",
        i = '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
    e.languages.insertBefore("ruby", "keyword", {
        "regex-literal": [{
            pattern: RegExp("%r" + t + "[egimnosux]{0,6}"),
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                interpolation: n,
                regex: /[\s\S]+/
            }
        }],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: [{
            pattern: RegExp("(^|[^:]):" + i),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: RegExp("([\r\n{(,][ \t]*)" + i + "(?=:(?!:))"),
            lookbehind: !0,
            greedy: !0
        }],
        "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: !0,
            inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./
            }
        }
    }), e.languages.insertBefore("ruby", "string", {
        "string-literal": [{
            pattern: RegExp("%[qQiIwWs]?" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
            greedy: !0,
            inside: {
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?/
                    }
                },
                interpolation: n,
                string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                    inside: {
                        symbol: /\b\w+/,
                        punctuation: /^<<[-~]?'|'$/
                    }
                },
                string: /[\s\S]+/
            }
        }],
        "command-literal": [{
            pattern: RegExp("%x" + t),
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }, {
            pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
            greedy: !0,
            inside: {
                interpolation: n,
                command: {
                    pattern: /[\s\S]+/,
                    alias: "string"
                }
            }
        }]
    }), delete e.languages.ruby.string, e.languages.insertBefore("ruby", "number", {
        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
        constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    }), e.languages.rb = e.languages.ruby
}(Prism);
! function(n) {
    n.languages.haml = {
        "multiline-comment": {
            pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,
            lookbehind: !0,
            alias: "comment"
        },
        "multiline-code": [{
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,
            lookbehind: !0,
            inside: n.languages.ruby
        }, {
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,
            lookbehind: !0,
            inside: n.languages.ruby
        }],
        filter: {
            pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "symbol"
                }
            }
        },
        markup: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
            lookbehind: !0,
            inside: n.languages.markup
        },
        doctype: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
            lookbehind: !0
        },
        tag: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,
                    lookbehind: !0,
                    inside: n.languages.ruby
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
                            lookbehind: !0
                        },
                        "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[=(),]/
                    }
                }, {
                    pattern: /\[[^\]]+\]/,
                    inside: n.languages.ruby
                }],
                punctuation: /[<>]/
            }
        },
        code: {
            pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
            lookbehind: !0,
            inside: n.languages.ruby
        },
        interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "punctuation"
                },
                ruby: {
                    pattern: /[\s\S]+/,
                    inside: n.languages.ruby
                }
            }
        },
        punctuation: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
            lookbehind: !0
        }
    };
    for (var e = ["css", {
            filter: "coffee",
            language: "coffeescript"
        }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], t = {}, r = 0, a = e.length; r < a; r++) {
        var i = e[r];
        i = "string" == typeof i ? {
            filter: i,
            language: i
        } : i, n.languages[i.language] && (t["filter-" + i.filter] = {
            pattern: RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", function() {
                return i.filter
            })),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "symbol"
                },
                text: {
                    pattern: /[\s\S]+/,
                    alias: [i.language, "language-" + i.language],
                    inside: n.languages[i.language]
                }
            }
        })
    }
    n.languages.insertBefore("haml", "filter", t)
}(Prism);
Prism.languages.haxe = Prism.languages.extend("clike", {
    string: {
        pattern: /"(?:[^"\\]|\\[\s\S])*"/,
        greedy: !0
    },
    "class-name": [{
        pattern: /(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,
        lookbehind: !0
    }, /\b[A-Z]\w*/],
    keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,
    function: {
        pattern: /\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,
        greedy: !0
    },
    operator: /\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/
}), Prism.languages.insertBefore("haxe", "string", {
    "string-interpolation": {
        pattern: /'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /(^|[^\\])\$(?:\w+|\{[^{}]+\})/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{?|\}$/,
                        alias: "punctuation"
                    },
                    expression: {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages.haxe
                    }
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.insertBefore("haxe", "class-name", {
    regex: {
        pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,
        greedy: !0,
        inside: {
            "regex-flags": /\b[a-z]+$/,
            "regex-source": {
                pattern: /^(~\/)[\s\S]+(?=\/$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^~\/|\/$/
        }
    }
}), Prism.languages.insertBefore("haxe", "keyword", {
    preprocessor: {
        pattern: /#(?:else|elseif|end|if)\b.*/,
        alias: "property"
    },
    metadata: {
        pattern: /@:?[\w.]+/,
        alias: "symbol"
    },
    reification: {
        pattern: /\$(?:\w+|(?=\{))/,
        alias: "important"
    }
});
! function(t) {
    function a(t) {
        return RegExp("(^(?:" + t + "):[ \t]*(?![ \t]))[^]+", "i")
    }
    t.languages.http = {
        "request-line": {
            pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
            inside: {
                method: {
                    pattern: /^[A-Z]+\b/,
                    alias: "property"
                },
                "request-target": {
                    pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                    lookbehind: !0,
                    alias: "url",
                    inside: t.languages.uri
                },
                "http-version": {
                    pattern: /^(\s)HTTP\/[\d.]+/,
                    lookbehind: !0,
                    alias: "property"
                }
            }
        },
        "response-status": {
            pattern: /^HTTP\/[\d.]+ \d+ .+/m,
            inside: {
                "http-version": {
                    pattern: /^HTTP\/[\d.]+/,
                    alias: "property"
                },
                "status-code": {
                    pattern: /^(\s)\d+(?=\s)/,
                    lookbehind: !0,
                    alias: "number"
                },
                "reason-phrase": {
                    pattern: /^(\s).+/,
                    lookbehind: !0,
                    alias: "string"
                }
            }
        },
        header: {
            pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
            inside: {
                "header-value": [{
                    pattern: a("Content-Security-Policy"),
                    lookbehind: !0,
                    alias: ["csp", "languages-csp"],
                    inside: t.languages.csp
                }, {
                    pattern: a("Public-Key-Pins(?:-Report-Only)?"),
                    lookbehind: !0,
                    alias: ["hpkp", "languages-hpkp"],
                    inside: t.languages.hpkp
                }, {
                    pattern: a("Strict-Transport-Security"),
                    lookbehind: !0,
                    alias: ["hsts", "languages-hsts"],
                    inside: t.languages.hsts
                }, {
                    pattern: a("[^:]+"),
                    lookbehind: !0
                }],
                "header-name": {
                    pattern: /^[^:]+/,
                    alias: "keyword"
                },
                punctuation: /^:/
            }
        }
    };
    var e, n, s, i = t.languages,
        p = {
            "application/javascript": i.javascript,
            "application/json": i.json || i.javascript,
            "application/xml": i.xml,
            "text/xml": i.xml,
            "text/html": i.html,
            "text/css": i.css,
            "text/plain": i.plain
        },
        r = {
            "application/json": !0,
            "application/xml": !0
        };
    for (var l in p)
        if (p[l]) {
            e = e || {};
            var o = r[l] ? (void 0, s = (n = l).replace(/^[a-z]+\//, ""), "(?:" + n + "|\\w+/(?:[\\w.-]+\\+)+" + s + "(?![+\\w.-]))") : l;
            e[l.replace(/\//g, "-")] = {
                pattern: RegExp("(content-type:\\s*" + o + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*", "i"),
                lookbehind: !0,
                inside: p[l]
            }
        }
    e && t.languages.insertBefore("http", "header", e)
}(Prism);
Prism.languages.ini = {
    comment: {
        pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
        lookbehind: !0
    },
    header: {
        pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
        lookbehind: !0,
        inside: {
            "section-name": {
                pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                lookbehind: !0,
                alias: "selector"
            },
            punctuation: /\[|\]/
        }
    },
    key: {
        pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    value: {
        pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
        lookbehind: !0,
        alias: "attr-value",
        inside: {
            "inner-value": {
                pattern: /^("|').+(?=\1$)/,
                lookbehind: !0
            }
        }
    },
    punctuation: /=/
};
! function(e) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
        a = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /\./
            }
        };
    e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [a, {
            pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
            lookbehind: !0,
            inside: a.inside
        }],
        keyword: t,
        function: [e.languages.clike.function, {
            pattern: /(::\s*)[a-z_]\w*/,
            lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        }
    }), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        },
        char: {
            pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
            greedy: !0
        }
    }), e.languages.insertBefore("java", "class-name", {
        annotation: {
            pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
            lookbehind: !0,
            alias: "punctuation"
        },
        generics: {
            pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
            inside: {
                "class-name": a,
                keyword: t,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        },
        namespace: {
            pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
                return t.source
            })),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    })
}(Prism);
! function(a) {
    var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
        t = [{
            pattern: /\b(?:false|true)\b/i,
            alias: "boolean"
        }, {
            pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
            greedy: !0,
            lookbehind: !0
        }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
        i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
        s = /[{}\[\](),:;]/;
    a.languages.php = {
        delimiter: {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: "important"
        },
        comment: e,
        variable: /\$+(?:\w+\b|(?=\{))/,
        package: {
            pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        },
        "class-name-definition": {
            pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
            lookbehind: !0,
            alias: "class-name"
        },
        "function-definition": {
            pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
            lookbehind: !0,
            alias: "function"
        },
        keyword: [{
            pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
            alias: "type-casting",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
            alias: "type-declaration",
            greedy: !0
        }, {
            pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
            alias: "type-declaration",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /\b(?:parent|self|static)(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
        }, {
            pattern: /(\byield\s+)from\b/i,
            lookbehind: !0
        }, /\bclass\b/i, {
            pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
            lookbehind: !0
        }],
        "argument-name": {
            pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
            lookbehind: !0
        },
        "class-name": [{
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
            greedy: !0
        }, {
            pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /\b[a-z_]\w*(?=\s*\$)/i,
            alias: "type-declaration",
            greedy: !0
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-declaration"],
            greedy: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /\b[a-z_]\w*(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
            alias: ["class-name-fully-qualified", "static-context"],
            greedy: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-hint"],
            greedy: !0,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: ["class-name-fully-qualified", "return-type"],
            greedy: !0,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }],
        constant: t,
        function: {
            pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        },
        property: {
            pattern: /(->\s*)\w+/,
            lookbehind: !0
        },
        number: i,
        operator: n,
        punctuation: s
    };
    var l = {
            pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
            lookbehind: !0,
            inside: a.languages.php
        },
        r = [{
            pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
            alias: "nowdoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<'?|[';]$/
                    }
                }
            }
        }, {
            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<"?|[";]$/
                    }
                },
                interpolation: l
            }
        }, {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            alias: "backtick-quoted-string",
            greedy: !0
        }, {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            alias: "single-quoted-string",
            greedy: !0
        }, {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            alias: "double-quoted-string",
            greedy: !0,
            inside: {
                interpolation: l
            }
        }];
    a.languages.insertBefore("php", "variable", {
        string: r,
        attribute: {
            pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
            greedy: !0,
            inside: {
                "attribute-content": {
                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                    lookbehind: !0,
                    inside: {
                        comment: e,
                        string: r,
                        "attribute-class-name": [{
                            pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                            alias: "class-name",
                            greedy: !0,
                            lookbehind: !0
                        }, {
                            pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                            alias: ["class-name", "class-name-fully-qualified"],
                            greedy: !0,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\\/
                            }
                        }],
                        constant: t,
                        number: i,
                        operator: n,
                        punctuation: s
                    }
                },
                delimiter: {
                    pattern: /^#\[|\]$/,
                    alias: "punctuation"
                }
            }
        }
    }), a.hooks.add("before-tokenize", function(e) {
        if (/<\?/.test(e.code)) {
            a.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)
        }
    }), a.hooks.add("after-tokenize", function(e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "php")
    })
}(Prism);
! function(p) {
    var a = p.languages.javadoclike = {
        parameter: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0
        },
        punctuation: /[{}]/
    };
    Object.defineProperty(a, "addSupport", {
        value: function(a, e) {
            "string" == typeof a && (a = [a]), a.forEach(function(a) {
                ! function(a, e) {
                    var n = "doc-comment",
                        t = p.languages[a];
                    if (t) {
                        var r = t[n];
                        if (!r) {
                            var o = {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    lookbehind: !0,
                                    alias: "comment"
                                }
                            };
                            r = (t = p.languages.insertBefore(a, "comment", o))[n]
                        }
                        if (r instanceof RegExp && (r = t[n] = {
                                pattern: r
                            }), Array.isArray(r))
                            for (var i = 0, s = r.length; i < s; i++) r[i] instanceof RegExp && (r[i] = {
                                pattern: r[i]
                            }), e(r[i]);
                        else e(r)
                    }
                }(a, function(a) {
                    a.inside || (a.inside = {}), a.inside.rest = e
                })
            })
        }
    }), a.addSupport(["java", "javascript", "php"], a)
}(Prism);
! function(e) {
    var n = "\\\\\\((?:[^()]|\\([^()]*\\))*\\)",
        t = RegExp('(^|[^\\\\])"(?:[^"\r\n\\\\]|\\\\[^\r\n(]|__)*"'.replace(/__/g, function() {
            return n
        })),
        i = {
            interpolation: {
                pattern: RegExp("((?:^|[^\\\\])(?:\\\\{2})*)" + n),
                lookbehind: !0,
                inside: {
                    content: {
                        pattern: /^(\\\()[\s\S]+(?=\)$)/,
                        lookbehind: !0,
                        inside: null
                    },
                    punctuation: /^\\\(|\)$/
                }
            }
        },
        a = e.languages.jq = {
            comment: /#.*/,
            property: {
                pattern: RegExp(t.source + "(?=\\s*:(?!:))"),
                lookbehind: !0,
                greedy: !0,
                inside: i
            },
            string: {
                pattern: t,
                lookbehind: !0,
                greedy: !0,
                inside: i
            },
            function: {
                pattern: /(\bdef\s+)[a-z_]\w+/i,
                lookbehind: !0
            },
            variable: /\B\$\w+/,
            "property-literal": {
                pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
                alias: "property"
            },
            keyword: /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
            boolean: /\b(?:false|true)\b/,
            number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
            operator: [{
                pattern: /\|=?/,
                alias: "pipe"
            }, /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],
            "c-style-function": {
                pattern: /\b[a-z_]\w*(?=\s*\()/i,
                alias: "function"
            },
            punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
            dot: {
                pattern: /\./,
                alias: "important"
            }
        };
    i.interpolation.inside.content.inside = a
}(Prism);
Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
}, Prism.languages.webmanifest = Prism.languages.json;
! function(n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [{
            pattern: RegExp(e.source + "(?=\\s*:)"),
            greedy: !0
        }, {
            pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
            alias: "unquoted"
        }],
        string: {
            pattern: e,
            greedy: !0
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
}(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {
    punctuation: /[{}[\]();,.]/
}), Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
! function(u) {
    var e = u.languages.javascript["template-string"],
        n = e.pattern.source,
        a = e.inside.interpolation,
        i = a.inside["interpolation-punctuation"],
        r = a.pattern.source;

    function t(e, t) {
        if (u.languages[e]) return {
            pattern: RegExp("((?:" + t + ")\\s*)" + n),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                "embedded-code": {
                    pattern: /[\s\S]+/,
                    alias: e
                }
            }
        }
    }

    function s(e, t, n) {
        var r = {
            code: e,
            grammar: t,
            language: n
        };
        return u.hooks.run("before-tokenize", r), r.tokens = u.tokenize(r.code, r.grammar), u.hooks.run("after-tokenize", r), r.tokens
    }

    function d(e) {
        var t = {};
        t["interpolation-punctuation"] = i;
        var n = u.tokenize(e, t);
        if (3 === n.length) {
            var r = [1, 1];
            r.push.apply(r, s(n[1], u.languages.javascript, "javascript")), n.splice.apply(n, r)
        }
        return new u.Token("interpolation", n, a.alias, e)
    }

    function c(a, e, i) {
        var t = u.tokenize(a, {
                interpolation: {
                    pattern: RegExp(r),
                    lookbehind: !0
                }
            }),
            f = 0,
            y = {},
            n = s(t.map(function(e) {
                if ("string" == typeof e) return e;
                for (var t, n = e.content; - 1 !== a.indexOf((r = f++, t = "___" + i.toUpperCase() + "_" + r + "___")););
                return y[t] = n, t;
                var r
            }).join(""), e, i),
            v = Object.keys(y);
        return f = 0,
            function e(t) {
                for (var n = 0; n < t.length; n++) {
                    if (f >= v.length) return;
                    var r = t[n];
                    if ("string" == typeof r || "string" == typeof r.content) {
                        var a = v[f],
                            i = "string" == typeof r ? r : r.content,
                            s = i.indexOf(a);
                        if (-1 !== s) {
                            ++f;
                            var o = i.substring(0, s),
                                p = d(y[a]),
                                l = i.substring(s + a.length),
                                g = [];
                            if (o && g.push(o), g.push(p), l) {
                                var u = [l];
                                e(u), g.push.apply(g, u)
                            }
                            "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(g)), n += g.length - 1) : r.content = g
                        }
                    } else {
                        var c = r.content;
                        Array.isArray(c) ? e(c) : e([c])
                    }
                }
            }(n), new u.Token(i, n, "language-" + i, a)
    }
    u.languages.javascript["template-string"] = [t("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), t("svg", "\\bsvg"), t("markdown", "\\b(?:markdown|md)"), t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), t("sql", "\\bsql"), e].filter(Boolean);
    var o = {
        javascript: !0,
        js: !0,
        typescript: !0,
        ts: !0,
        jsx: !0,
        tsx: !0
    };

    function f(e) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.map(f).join("") : f(e.content)
    }
    u.hooks.add("after-tokenize", function(e) {
        e.language in o && ! function e(t) {
            for (var n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if ("string" != typeof a) {
                    var i = a.content;
                    if (Array.isArray(i))
                        if ("template-string" === a.type) {
                            var s = i[1];
                            if (3 === i.length && "string" != typeof s && "embedded-code" === s.type) {
                                var o = f(s),
                                    p = s.alias,
                                    l = Array.isArray(p) ? p[0] : p,
                                    g = u.languages[l];
                                if (!g) continue;
                                i[1] = c(o, g, l)
                            }
                        } else e(i);
                    else "string" != typeof i && e([i])
                }
            }
        }(e.tokens)
    })
}(Prism);
Prism.languages.julia = {
    comment: {
        pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
        lookbehind: !0
    },
    regex: {
        pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
        greedy: !0
    },
    string: {
        pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
        greedy: !0
    },
    char: {
        pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
    boolean: /\b(?:false|true)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
    operator: /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
    punctuation: /::?|[{}[\]();,.?]/,
    constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
};
! function(n) {
    n.languages.kotlin = n.languages.extend("clike", {
        keyword: {
            pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
            lookbehind: !0
        },
        function: [{
            pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
            greedy: !0
        }, {
            pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
            lookbehind: !0,
            greedy: !0
        }],
        number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
        operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    }), delete n.languages.kotlin["class-name"];
    var e = {
        "interpolation-punctuation": {
            pattern: /^\$\{?|\}$/,
            alias: "punctuation"
        },
        expression: {
            pattern: /[\s\S]+/,
            inside: n.languages.kotlin
        }
    };
    n.languages.insertBefore("kotlin", "string", {
        "string-literal": [{
            pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
            alias: "multiline",
            inside: {
                interpolation: {
                    pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                    inside: e
                },
                string: /[\s\S]+/
            }
        }, {
            pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
            alias: "singleline",
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                    lookbehind: !0,
                    inside: e
                },
                string: /[\s\S]+/
            }
        }],
        char: {
            pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
            greedy: !0
        }
    }), delete n.languages.kotlin.string, n.languages.insertBefore("kotlin", "keyword", {
        annotation: {
            pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
            alias: "builtin"
        }
    }), n.languages.insertBefore("kotlin", "function", {
        label: {
            pattern: /\b\w+@|@\w+\b/,
            alias: "symbol"
        }
    }), n.languages.kt = n.languages.kotlin, n.languages.kts = n.languages.kotlin
}(Prism);
! function(a) {
    var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
        n = {
            "equation-command": {
                pattern: e,
                alias: "regex"
            }
        };
    a.languages.latex = {
        comment: /%.*/,
        cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0
        },
        equation: [{
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0,
            alias: "class-name"
        },
        function: {
            pattern: e,
            alias: "selector"
        },
        punctuation: /[[\]{}&]/
    }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex
}(Prism);
Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\s\S]*?\*\//, {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: !0
    }],
    atrule: {
        pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: {
            punctuation: /[:()]/
        }
    },
    selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
        inside: {
            variable: /@+[\w-]+/
        }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "property", {
    variable: [{
        pattern: /@[\w-]+\s*:/,
        inside: {
            punctuation: /:/
        }
    }, /@@?[\w-]+/],
    "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
        lookbehind: !0,
        alias: "function"
    }
});
Prism.languages.liquid = {
    comment: {
        pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
        lookbehind: !0
    },
    delimiter: {
        pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
        alias: "punctuation"
    },
    string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
    },
    keyword: /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
    object: /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
    function: [{
        pattern: /(\|\s*)\w+/,
        lookbehind: !0,
        alias: "filter"
    }, {
        pattern: /(\.\s*)(?:first|last|size)/,
        lookbehind: !0
    }],
    boolean: /\b(?:false|nil|true)\b/,
    range: {
        pattern: /\.\./,
        alias: "operator"
    },
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
    punctuation: /[.,\[\]()]/,
    empty: {
        pattern: /\bempty\b/,
        alias: "keyword"
    }
}, Prism.hooks.add("before-tokenize", function(e) {
    var i = !1;
    Prism.languages["markup-templating"].buildPlaceholders(e, "liquid", /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g, function(e) {
        var t = /^\{%-?\s*(\w+)/.exec(e);
        if (t) {
            var n = t[1];
            if ("raw" === n && !i) return i = !0;
            if ("endraw" === n) return !(i = !1)
        }
        return !i
    })
}), Prism.hooks.add("after-tokenize", function(e) {
    Prism.languages["markup-templating"].tokenizePlaceholders(e, "liquid")
});
! function(e) {
    function n(e) {
        return RegExp("(\\()(?:" + e + ")(?=[\\s\\)])")
    }

    function a(e) {
        return RegExp("([\\s([])(?:" + e + ")(?=[\\s)])")
    }
    var t = "(?!\\d)[-+*/~!@$%^=<>{}\\w]+",
        r = "(\\()",
        i = "(?=\\s)",
        s = "(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*",
        l = {
            heading: {
                pattern: /;;;.*/,
                alias: ["comment", "title"]
            },
            comment: /;.*/,
            string: {
                pattern: /"(?:[^"\\]|\\.)*"/,
                greedy: !0,
                inside: {
                    argument: /[-A-Z]+(?=[.,\s])/,
                    symbol: RegExp("`" + t + "'")
                }
            },
            "quoted-symbol": {
                pattern: RegExp("#?'" + t),
                alias: ["variable", "symbol"]
            },
            "lisp-property": {
                pattern: RegExp(":" + t),
                alias: "property"
            },
            splice: {
                pattern: RegExp(",@?" + t),
                alias: ["symbol", "variable"]
            },
            keyword: [{
                pattern: RegExp(r + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + i),
                lookbehind: !0
            }, {
                pattern: RegExp(r + "(?:append|by|collect|concat|do|finally|for|in|return)" + i),
                lookbehind: !0
            }],
            declare: {
                pattern: n("declare"),
                lookbehind: !0,
                alias: "keyword"
            },
            interactive: {
                pattern: n("interactive"),
                lookbehind: !0,
                alias: "keyword"
            },
            boolean: {
                pattern: a("nil|t"),
                lookbehind: !0
            },
            number: {
                pattern: a("[-+]?\\d+(?:\\.\\d*)?"),
                lookbehind: !0
            },
            defvar: {
                pattern: RegExp(r + "def(?:const|custom|group|var)\\s+" + t),
                lookbehind: !0,
                inside: {
                    keyword: /^def[a-z]+/,
                    variable: RegExp(t)
                }
            },
            defun: {
                pattern: RegExp(r + "(?:cl-)?(?:defmacro|defun\\*?)\\s+" + t + "\\s+\\(" + s + "\\)"),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    keyword: /^(?:cl-)?def\S+/,
                    arguments: null,
                    function: {
                        pattern: RegExp("(^\\s)" + t),
                        lookbehind: !0
                    },
                    punctuation: /[()]/
                }
            },
            lambda: {
                pattern: RegExp(r + "lambda\\s+\\(\\s*(?:&?" + t + "(?:\\s+&?" + t + ")*\\s*)?\\)"),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    keyword: /^lambda/,
                    arguments: null,
                    punctuation: /[()]/
                }
            },
            car: {
                pattern: RegExp(r + t),
                lookbehind: !0
            },
            punctuation: [/(?:['`,]?\(|[)\[\]])/, {
                pattern: /(\s)\.(?=\s)/,
                lookbehind: !0
            }]
        },
        o = {
            "lisp-marker": RegExp("&(?!\\d)[-+*/~!@$%^=<>{}\\w]+"),
            varform: {
                pattern: RegExp("\\(" + t + "\\s+(?=\\S)" + s + "\\)"),
                inside: l
            },
            argument: {
                pattern: RegExp("(^|[\\s(])" + t),
                lookbehind: !0,
                alias: "variable"
            },
            rest: l
        },
        p = "\\S+(?:\\s+\\S+)*",
        d = {
            pattern: RegExp(r + s + "(?=\\))"),
            lookbehind: !0,
            inside: {
                "rest-vars": {
                    pattern: RegExp("&(?:body|rest)\\s+" + p),
                    inside: o
                },
                "other-marker-vars": {
                    pattern: RegExp("&(?:aux|optional)\\s+" + p),
                    inside: o
                },
                keys: {
                    pattern: RegExp("&key\\s+" + p + "(?:\\s+&allow-other-keys)?"),
                    inside: o
                },
                argument: {
                    pattern: RegExp(t),
                    alias: "variable"
                },
                punctuation: /[()]/
            }
        };
    l.lambda.inside.arguments = d, l.defun.inside.arguments = e.util.clone(d), l.defun.inside.arguments.inside.sublist = d, e.languages.lisp = l, e.languages.elisp = l, e.languages.emacs = l, e.languages["emacs-lisp"] = l
}(Prism);
Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    string: {
        pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
        greedy: !0
    },
    number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: !0
    }],
    punctuation: /[\[\](){},;]|\.+|:+/
};
Prism.languages.makefile = {
    comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: !0
    },
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "builtin-target": {
        pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        alias: "builtin"
    },
    target: {
        pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
        alias: "symbol",
        inside: {
            variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
        }
    },
    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    function: {
        pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
        lookbehind: !0
    },
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
};
! function(s) {
    function n(n) {
        return n = n.replace(/<inner>/g, function() {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))"
        }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    }
    var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function() {
            return e
        }),
        a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    s.languages.markdown = s.languages.extend("markup", {}), s.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                punctuation: /^---|---$/,
                "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: s.languages.yaml
                }
            }
        },
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(e),
                            inside: s.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + t + ")" + a + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + t + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(e),
                            alias: "important",
                            inside: s.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [{
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {
                    pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                    lookbehind: !0
                },
                "code-language": {
                    pattern: /^(```).+/,
                    lookbehind: !0
                },
                punctuation: /```/
            }
        }],
        title: [{
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        }],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        "code-snippet": {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ["code", "keyword"]
        },
        url: {
            pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                operator: /^!/,
                content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                url: {
                    pattern: /(^\]\()[^\s)]+/,
                    lookbehind: !0
                },
                string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0
                }
            }
        }
    }), ["url", "bold", "italic", "strike"].forEach(function(e) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(n) {
            e !== n && (s.languages.markdown[e].inside.content.inside[n] = s.languages.markdown[n])
        })
    }), s.hooks.add("after-tokenize", function(n) {
        "markdown" !== n.language && "md" !== n.language || ! function n(e) {
            if (e && "string" != typeof e)
                for (var t = 0, a = e.length; t < a; t++) {
                    var r = e[t];
                    if ("code" === r.type) {
                        var i = r.content[1],
                            o = r.content[3];
                        if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
                            var l = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                        }
                    } else n(r.content)
                }
        }(n.tokens)
    }), s.hooks.add("wrap", function(n) {
        if ("code-block" === n.type) {
            for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
                var r = n.classes[t],
                    i = /language-(.+)/.exec(r);
                if (i) {
                    e = i[1];
                    break
                }
            }
            var o = s.languages[e];
            if (o) n.content = s.highlight(function(n) {
                var e = n.replace(d, "");
                return e = e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(n, e) {
                    var t;
                    if ("#" === (e = e.toLowerCase())[0]) return t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), u(t);
                    var a = p[e];
                    return a || n
                })
            }(n.content), o, e);
            else if (e && "none" !== e && s.plugins.autoloader) {
                var l = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                n.attributes.id = l, s.plugins.autoloader.loadLanguages(e, function() {
                    var n = document.getElementById(l);
                    n && (n.innerHTML = s.highlight(n.textContent, s.languages[e], e))
                })
            }
        }
    });
    var d = RegExp(s.languages.markup.tag.pattern.source, "gi"),
        p = {
            amp: "&",
            lt: "<",
            gt: ">",
            quot: '"'
        },
        u = String.fromCodePoint || String.fromCharCode;
    s.languages.md = s.languages.markdown
}(Prism);
Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
        pattern: /\B'(?:''|[^'\r\n])*'/,
        greedy: !0
    },
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /\b(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
};
! function($) {
    var e = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$setWindowFields", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$count", "$dateAdd", "$dateDiff", "$dateSubtract", "$dateTrunc", "$getField", "$rand", "$sampleRate", "$setField", "$unsetField", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"],
        t = "(?:" + (e = e.map(function($) {
            return $.replace("$", "\\$")
        })).join("|") + ")\\b";
    $.languages.mongodb = $.languages.extend("javascript", {}), $.languages.insertBefore("mongodb", "string", {
        property: {
            pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
            greedy: !0,
            inside: {
                keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$")
            }
        }
    }), $.languages.mongodb.string.inside = {
        url: {
            pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
            greedy: !0
        },
        entity: {
            pattern: /\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,
            greedy: !0
        }
    }, $.languages.insertBefore("mongodb", "constant", {
        builtin: {
            pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
            alias: "keyword"
        }
    })
}(Prism);
! function(e) {
    var n = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
    Prism.languages.nginx = {
        comment: {
            pattern: /(^|[\s{};])#.*/,
            lookbehind: !0,
            greedy: !0
        },
        directive: {
            pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: {
                    pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        escape: {
                            pattern: /\\["'\\nrt]/,
                            alias: "entity"
                        },
                        variable: n
                    }
                },
                comment: {
                    pattern: /(\s)#.*/,
                    lookbehind: !0,
                    greedy: !0
                },
                keyword: {
                    pattern: /^\S+/,
                    greedy: !0
                },
                boolean: {
                    pattern: /(\s)(?:off|on)(?!\S)/,
                    lookbehind: !0
                },
                number: {
                    pattern: /(\s)\d+[a-z]*(?!\S)/i,
                    lookbehind: !0
                },
                variable: n
            }
        },
        punctuation: /[{};]/
    }
}();
Prism.languages.objectivec = Prism.languages.extend("c", {
    string: {
        pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec;
! function(E) {
    E.languages.opencl = E.languages.extend("c", {
        keyword: /\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,
        number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,
        boolean: /\b(?:false|true)\b/,
        "constant-opencl-kernel": {
            pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:2|10)E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,
            alias: "constant"
        }
    }), E.languages.insertBefore("opencl", "class-name", {
        "builtin-type": {
            pattern: /\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|intptr_t|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|uintptr_t)\b/,
            alias: "keyword"
        }
    });
    var _ = {
        "type-opencl-host": {
            pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
            alias: "keyword"
        },
        "boolean-opencl-host": {
            pattern: /\bCL_(?:FALSE|TRUE)\b/,
            alias: "boolean"
        },
        "constant-opencl-host": {
            pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
            alias: "constant"
        },
        "function-opencl-host": {
            pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
            alias: "function"
        }
    };
    E.languages.insertBefore("c", "keyword", _), E.languages.cpp && (_["type-opencl-host-cpp"] = {
        pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|Sampler|UserEvent)\b/,
        alias: "keyword"
    }, E.languages.insertBefore("cpp", "keyword", _))
}(Prism);
Prism.languages.pascal = {
    directive: {
        pattern: /\{\$[\s\S]*?\}/,
        greedy: !0,
        alias: ["marco", "property"]
    },
    comment: {
        pattern: /\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,
        greedy: !0
    },
    string: {
        pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
        greedy: !0
    },
    asm: {
        pattern: /(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,
        lookbehind: !0,
        greedy: !0,
        inside: null
    },
    keyword: [{
        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
        lookbehind: !0
    }],
    number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
    operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/, {
        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
        lookbehind: !0
    }],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
}, Prism.languages.pascal.asm.inside = Prism.languages.extend("pascal", {
    asm: void 0,
    keyword: void 0,
    operator: void 0
}), Prism.languages.objectpascal = Prism.languages.pascal;
! function(e) {
    var n = "(?:\\((?:[^()\\\\]|\\\\[^])*\\)|\\{(?:[^{}\\\\]|\\\\[^])*\\}|\\[(?:[^[\\]\\\\]|\\\\[^])*\\]|<(?:[^<>\\\\]|\\\\[^])*>)";
    Prism.languages.perl = {
        comment: [{
            pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\$])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: [{
            pattern: RegExp("\\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", n].join("|") + ")"),
            greedy: !0
        }, {
            pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0
        }, {
            pattern: /'(?:[^'\\\r\n]|\\.)*'/,
            greedy: !0
        }],
        regex: [{
            pattern: RegExp("\\b(?:m|qr)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", n].join("|") + ")[msixpodualngc]*"),
            greedy: !0
        }, {
            pattern: RegExp("(^|[^-])\\b(?:s|tr|y)(?![a-zA-Z0-9])\\s*(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2(?:(?!\\2)[^\\\\]|\\\\[^])*\\2", "([a-zA-Z0-9])(?:(?!\\3)[^\\\\]|\\\\[^])*\\3(?:(?!\\3)[^\\\\]|\\\\[^])*\\3", n + "\\s*" + n].join("|") + ")[msixpodualngcer]*"),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
            greedy: !0
        }],
        variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
        filehandle: {
            pattern: /<(?![<=])\S*?>|\b_\b/,
            alias: "symbol"
        },
        "v-string": {
            pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
            alias: "string"
        },
        function: {
            pattern: /(\bsub[ \t]+)\w+/,
            lookbehind: !0
        },
        keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
        operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
        punctuation: /[{}[\];(),:]/
    }
}();
! function(a) {
    var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
    a.languages.phpdoc = a.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
            lookbehind: !0
        }
    }), a.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [{
            pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
            lookbehind: !0,
            inside: {
                keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
                punctuation: /[|\\[\]()]/
            }
        }]
    }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc)
}(Prism);
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    variable: [{
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: !0
    }, /@[\w.$]+/],
    string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
        greedy: !0,
        lookbehind: !0
    },
    identifier: {
        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
        greedy: !0,
        lookbehind: !0,
        inside: {
            punctuation: /^`|`$/
        }
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
Prism.languages.plsql = Prism.languages.extend("sql", {
    comment: {
        pattern: /\/\*[\s\S]*?\*\/|--.*/,
        greedy: !0
    },
    keyword: /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
    operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/
}), Prism.languages.insertBefore("plsql", "operator", {
    label: {
        pattern: /<<\s*\w+\s*>>/,
        alias: "symbol"
    }
});
Prism.languages.powerquery = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0
    },
    "quoted-identifier": {
        pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
        greedy: !0
    },
    string: {
        pattern: /(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,
        greedy: !0
    },
    constant: [/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/, /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/, /\bOccurrence\.(?:All|First|Last)\b/, /\bOrder\.(?:Ascending|Descending)\b/, /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/, /\bMissingField\.(?:Error|Ignore|UseNull)\b/, /\bQuoteStyle\.(?:Csv|None)\b/, /\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/, /\bGroupKind\.(?:Global|Local)\b/, /\bExtraValues\.(?:Error|Ignore|List)\b/, /\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/, /\bJoinSide\.(?:Left|Right)\b/, /\bPrecision\.(?:Decimal|Double)\b/, /\bRelativePosition\.From(?:End|Start)\b/, /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/, /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/, /\bnull\b/],
    boolean: /\b(?:false|true)\b/,
    keyword: /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
    function: {
        pattern: /(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,
        lookbehind: !0
    },
    "data-type": {
        pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,
        alias: "class-name"
    },
    number: {
        pattern: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
        lookbehind: !0
    },
    operator: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
    punctuation: /[,;\[\](){}]/
}, Prism.languages.pq = Prism.languages.powerquery, Prism.languages.mscript = Prism.languages.powerquery;
! function(e) {
    var i = Prism.languages.powershell = {
        comment: [{
            pattern: /(^|[^`])<#[\s\S]*?#>/,
            lookbehind: !0
        }, {
            pattern: /(^|[^`])#.*/,
            lookbehind: !0
        }],
        string: [{
            pattern: /"(?:`[\s\S]|[^`"])*"/,
            greedy: !0,
            inside: null
        }, {
            pattern: /'(?:[^']|'')*'/,
            greedy: !0
        }],
        namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
        boolean: /\$(?:false|true)\b/i,
        variable: /\$\w+\b/,
        function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    };
    i.string[0].inside = {
        function: {
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: !0,
            inside: i
        },
        boolean: i.boolean,
        variable: i.variable
    }
}();
Prism.languages.prolog = {
    comment: {
        pattern: /\/\*[\s\S]*?\*\/|%.*/,
        greedy: !0
    },
    string: {
        pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
        greedy: !0
    },
    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    number: /\b\d+(?:\.\d*)?/,
    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    punctuation: /[(){}\[\],]/
};
! function(t) {
    var n = ["on", "ignoring", "group_right", "group_left", "by", "without"],
        a = ["sum", "min", "max", "avg", "group", "stddev", "stdvar", "count", "count_values", "bottomk", "topk", "quantile"].concat(n, ["offset"]);
    t.languages.promql = {
        comment: {
            pattern: /(^[ \t]*)#.*/m,
            lookbehind: !0
        },
        "vector-match": {
            pattern: new RegExp("((?:" + n.join("|") + ")\\s*)\\([^)]*\\)"),
            lookbehind: !0,
            inside: {
                "label-key": {
                    pattern: /\b[^,]+\b/,
                    alias: "attr-name"
                },
                punctuation: /[(),]/
            }
        },
        "context-labels": {
            pattern: /\{[^{}]*\}/,
            inside: {
                "label-key": {
                    pattern: /\b[a-z_]\w*(?=\s*(?:=|![=~]))/,
                    alias: "attr-name"
                },
                "label-value": {
                    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
                    greedy: !0,
                    alias: "attr-value"
                },
                punctuation: /\{|\}|=~?|![=~]|,/
            }
        },
        "context-range": [{
            pattern: /\[[\w\s:]+\]/,
            inside: {
                punctuation: /\[|\]|:/,
                "range-duration": {
                    pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                    alias: "number"
                }
            }
        }, {
            pattern: /(\boffset\s+)\w+/,
            lookbehind: !0,
            inside: {
                "range-duration": {
                    pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i,
                    alias: "number"
                }
            }
        }],
        keyword: new RegExp("\\b(?:" + a.join("|") + ")\\b", "i"),
        function: /\b[a-z_]\w*(?=\s*\()/i,
        number: /[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,
        operator: /[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,
        punctuation: /[{};()`,.[\]]/
    }
}(Prism);
Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    "attr-value": {
        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: !0
    },
    "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
    punctuation: /[=:]/
};
! function(e) {
    e.languages.pug = {
        comment: {
            pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
            lookbehind: !0
        },
        "multiline-script": {
            pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: e.languages.javascript
        },
        filter: {
            pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                text: /\S[\s\S]*/
            }
        },
        "multiline-plain-text": {
            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {
            pattern: /(^[\t ]*)<.+/m,
            lookbehind: !0,
            inside: e.languages.markup
        },
        doctype: {
            pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
            lookbehind: !0
        },
        "flow-control": {
            pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {
                    pattern: /^each .+? in\b/,
                    inside: {
                        keyword: /\b(?:each|in)\b/,
                        punctuation: /,/
                    }
                },
                branch: {
                    pattern: /^(?:case|default|else|if|unless|when|while)\b/,
                    alias: "keyword"
                },
                rest: e.languages.javascript
            }
        },
        keyword: {
            pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
            lookbehind: !0
        },
        mixin: [{
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {
                keyword: /^mixin/,
                function: /\w+(?=\s*\(|\s*$)/,
                punctuation: /[(),.]/
            }
        }, {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {
                name: {
                    pattern: /^\+\w+/,
                    alias: "function"
                },
                rest: e.languages.javascript
            }
        }],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
            lookbehind: !0,
            inside: e.languages.javascript
        },
        "plain-text": {
            pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
            lookbehind: !0
        },
        tag: {
            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: e.languages.javascript
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: e.languages.javascript
                        },
                        "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[!=(),]+/
                    }
                }],
                punctuation: /:/,
                "attr-id": /#[\w\-]+/,
                "attr-class": /\.[\w\-]+/
            }
        },
        code: [{
            pattern: /(^[\t ]*(?:-|!?=)).+/m,
            lookbehind: !0,
            inside: e.languages.javascript
        }],
        punctuation: /[.\-!=|]+/
    };
    for (var t = [{
            filter: "atpl",
            language: "twig"
        }, {
            filter: "coffee",
            language: "coffeescript"
        }, "ejs", "handlebars", "less", "livescript", "markdown", {
            filter: "sass",
            language: "scss"
        }, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
        var r = t[a];
        r = "string" == typeof r ? {
            filter: r,
            language: r
        } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
            pattern: RegExp("(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+".replace("<filter_name>", function() {
                return r.filter
            }), "m"),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                text: {
                    pattern: /\S[\s\S]*/,
                    alias: [r.language, "language-" + r.language],
                    inside: e.languages[r.language]
                }
            }
        })
    }
    e.languages.insertBefore("pug", "filter", n)
}(Prism);
! function(r) {
    r.languages.pure = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0
        }, /#!.+/],
        "inline-lang": {
            pattern: /%<[\s\S]+?%>/,
            greedy: !0,
            inside: {
                lang: {
                    pattern: /(^%< *)-\*-.+?-\*-/,
                    lookbehind: !0,
                    alias: "comment"
                },
                delimiter: {
                    pattern: /^%<.*|%>$/,
                    alias: "punctuation"
                }
            }
        },
        string: {
            pattern: /"(?:\\.|[^"\\\r\n])*"/,
            greedy: !0
        },
        number: {
            pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?L?)/i,
            lookbehind: !0
        },
        keyword: /\b(?:NULL|ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
        function: /\b(?:abs|add_(?:addr|constdef|(?:fundef|interface|macdef|typedef)(?:_at)?|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_c?string(?:_pointer)?|byte_(?:matrix|pointer)|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|sentry|short|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
        special: {
            pattern: /\b__[a-z]+__\b/i,
            alias: "builtin"
        },
        operator: /(?:[!"#$%&'*+,\-.\/:<=>?@\\^`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]|\b_+\b)+|\b(?:and|div|mod|not|or)\b/,
        punctuation: /[(){}\[\];,|]/
    };
    ["c", {
        lang: "c++",
        alias: "cpp"
    }, "fortran"].forEach(function(e) {
        var t = e;
        if ("string" != typeof e && (t = e.alias, e = e.lang), r.languages[t]) {
            var a = {};
            a["inline-lang-" + t] = {
                pattern: RegExp("%< *-\\*- *<lang>\\d* *-\\*-[^]+?%>".replace("<lang>", e.replace(/([.+*?\/\\(){}\[\]])/g, "\\$1")), "i"),
                inside: r.util.clone(r.languages.pure["inline-lang"].inside)
            }, a["inline-lang-" + t].inside.rest = r.util.clone(r.languages[t]), r.languages.insertBefore("pure", "inline-lang", a)
        }
    }), r.languages.c && (r.languages.pure["inline-lang"].inside.rest = r.util.clone(r.languages.c))
}(Prism);
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        greedy: !0
    },
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
Prism.languages.r = {
    comment: /#.*/,
    string: {
        pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "percent-operator": {
        pattern: /%[^%\s]*%/,
        alias: "operator"
    },
    boolean: /\b(?:FALSE|TRUE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [/\b(?:Inf|NaN)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
    keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
};
! function(o) {
    var t = o.util.clone(o.languages.javascript),
        e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";

    function n(t, n) {
        return t = t.replace(/<S>/g, function() {
            return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"
        }).replace(/<BRACES>/g, function() {
            return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"
        }).replace(/<SPREAD>/g, function() {
            return e
        }), RegExp(t, n)
    }
    e = n(e).source, o.languages.jsx = o.languages.extend("markup", t), o.languages.jsx.tag.pattern = n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"), o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, o.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, o.languages.jsx.tag.inside.comment = t.comment, o.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: n("<SPREAD>"),
            inside: o.languages.jsx
        }
    }, o.languages.jsx.tag), o.languages.insertBefore("inside", "special-attr", {
        script: {
            pattern: n("=<BRACES>"),
            alias: "language-javascript",
            inside: {
                "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation"
                },
                rest: o.languages.jsx
            }
        }
    }, o.languages.jsx.tag);
    var i = function(t) {
            return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(i).join("") : ""
        },
        r = function(t) {
            for (var n = [], e = 0; e < t.length; e++) {
                var a = t[e],
                    s = !1;
                if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === i(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
                        tagName: i(a.content[0].content[1]),
                        openedBraces: 0
                    }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
                    var g = i(a);
                    e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += i(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = i(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new o.Token("plain-text", g, null, g)
                }
                a.content && "string" != typeof a.content && r(a.content)
            }
        };
    o.hooks.add("after-tokenize", function(t) {
        "jsx" !== t.language && "tsx" !== t.language || r(t.tokens)
    })
}(Prism);
! function(e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
        decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
                at: {
                    pattern: /^@/,
                    alias: "operator"
                },
                function: /^[\s\S]+/
            }
        },
        "generic-function": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: s
                }
            }
        }
    }), e.languages.ts = e.languages.typescript
}(Prism);
! function(e) {
    var a = e.util.clone(e.languages.typescript);
    e.languages.tsx = e.languages.extend("jsx", a), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0
}(Prism);
! function(e) {
    for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++) a = a.replace(/<self>/g, function() {
        return a
    });
    a = a.replace(/<self>/g, function() {
        return "[^\\s\\S]"
    }), e.languages.rust = {
        comment: [{
            pattern: RegExp("(^|[^\\\\])" + a),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
            greedy: !0
        },
        char: {
            pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
            greedy: !0
        },
        attribute: {
            pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
            greedy: !0,
            alias: "attr-name",
            inside: {
                string: null
            }
        },
        "closure-params": {
            pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                "closure-punctuation": {
                    pattern: /^\||\|$/,
                    alias: "punctuation"
                },
                rest: null
            }
        },
        "lifetime-annotation": {
            pattern: /'\w+/,
            alias: "symbol"
        },
        "fragment-specifier": {
            pattern: /(\$\w+:)[a-z]+/,
            lookbehind: !0,
            alias: "punctuation"
        },
        variable: /\$\w+/,
        "function-definition": {
            pattern: /(\bfn\s+)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        "type-definition": {
            pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
            lookbehind: !0,
            alias: "class-name"
        },
        "module-declaration": [{
            pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
            lookbehind: !0,
            alias: "namespace"
        }, {
            pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: "namespace",
            inside: {
                punctuation: /::/
            }
        }],
        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: {
            pattern: /\b\w+!/,
            alias: "property"
        },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        "class-name": /\b[A-Z]\w*\b/,
        namespace: {
            pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
            inside: {
                punctuation: /::/
            }
        },
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
}(Prism);
! function(e) {
    e.languages.sass = e.languages.extend("css", {
        comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: !0,
            greedy: !0
        }
    }), e.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: !0,
            inside: {
                atrule: /(?:@[\w-]+|[+=])/
            }
        }
    }), delete e.languages.sass.atrule;
    var r = /\$[-\w]+|#\{\$[-\w]+\}/,
        t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
            pattern: /(\s)-(?=\s)/,
            lookbehind: !0
        }];
    e.languages.insertBefore("sass", "property", {
        "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: !0,
            inside: {
                punctuation: /:/,
                variable: r,
                operator: t
            }
        },
        "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: !0,
            inside: {
                property: [/[^:\s]+(?=\s*:)/, {
                    pattern: /(:)[^:\s]+/,
                    lookbehind: !0
                }],
                punctuation: /:/,
                variable: r,
                operator: t,
                important: e.languages.sass.important
            }
        }
    }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
        selector: {
            pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: !0,
            greedy: !0
        }
    })
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
        inside: {
            parent: {
                pattern: /&/,
                alias: "important"
            },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    },
    property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: !0
    }]
}), Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
        pattern: /\b(?:as|hide|show|with)\b/i,
        alias: "keyword"
    },
    placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
    },
    statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
    },
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    },
    operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
        lookbehind: !0
    }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.scala = Prism.languages.extend("java", {
    "triple-quoted-string": {
        pattern: /"""[\s\S]*?"""/,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
    builtin: /\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,
    symbol: /'[^\d\s\\]\w*/
}), Prism.languages.insertBefore("scala", "triple-quoted-string", {
    "string-interpolation": {
        pattern: /\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,
        greedy: !0,
        inside: {
            id: {
                pattern: /^\w+/,
                greedy: !0,
                alias: "function"
            },
            escape: {
                pattern: /\\\$"|\$[$"]/,
                greedy: !0,
                alias: "symbol"
            },
            interpolation: {
                pattern: /\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                greedy: !0,
                inside: {
                    punctuation: /^\$\{?|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages.scala
                    }
                }
            },
            string: /[\s\S]+/
        }
    }
}), delete Prism.languages.scala["class-name"], delete Prism.languages.scala.function;
! function(t) {
    t.languages.smarty = {
        comment: {
            pattern: /^\{\*[\s\S]*?\*\}/,
            greedy: !0
        },
        "embedded-php": {
            pattern: /^\{php\}[\s\S]*?\{\/php\}/,
            greedy: !0,
            inside: {
                smarty: {
                    pattern: /^\{php\}|\{\/php\}$/,
                    inside: null
                },
                php: {
                    pattern: /[\s\S]+/,
                    alias: "language-php",
                    inside: t.languages.php
                }
            }
        },
        string: [{
            pattern: /"(?:\\.|[^"\\\r\n])*"/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\{[^{}]*\}|`[^`]*`/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^[{`]|[`}]$/,
                            alias: "punctuation"
                        },
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: null
                        }
                    }
                },
                variable: /\$\w+/
            }
        }, {
            pattern: /'(?:\\.|[^'\\\r\n])*'/,
            greedy: !0
        }],
        keyword: {
            pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
            lookbehind: !0,
            greedy: !0
        },
        delimiter: {
            pattern: /^\{\/?|\}$/,
            greedy: !0,
            alias: "punctuation"
        },
        number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
        variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
            pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,
            lookbehind: !0
        }, {
            pattern: /(\[)(?!\d)\w+(?=\])/,
            lookbehind: !0
        }],
        function: {
            pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
            lookbehind: !0
        },
        "attr-name": /\b[a-z_]\w*(?=\s*=)/i,
        boolean: /\b(?:false|no|off|on|true|yes)\b/,
        punctuation: /[\[\](){}.,:`]|->/,
        operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/]
    }, t.languages.smarty["embedded-php"].inside.smarty.inside = t.languages.smarty, t.languages.smarty.string[0].inside.interpolation.inside.expression.inside = t.languages.smarty;
    var e = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
        a = RegExp("\\{\\*[^]*?\\*\\}|\\{php\\}[^]*?\\{/php\\}|" + "\\{(?:[^{}\"']|<str>|\\{(?:[^{}\"']|<str>|\\{(?:[^{}\"']|<str>)*\\})*\\})*\\}".replace(/<str>/g, function() {
            return e.source
        }), "g");
    t.hooks.add("before-tokenize", function(e) {
        var n = !1;
        t.languages["markup-templating"].buildPlaceholders(e, "smarty", a, function(e) {
            return "{/literal}" === e && (n = !1), !n && ("{literal}" === e && (n = !0), !0)
        })
    }), t.hooks.add("after-tokenize", function(e) {
        t.languages["markup-templating"].tokenizePlaceholders(e, "smarty")
    })
}(Prism);
! function(e) {
    var n = {
            pattern: /(\b\d+)(?:%|[a-z]+)/,
            lookbehind: !0
        },
        r = {
            pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
            lookbehind: !0
        },
        t = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            },
            url: {
                pattern: /\burl\((["']?).*?\1\)/i,
                greedy: !0
            },
            string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
                pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0
            },
            hexcode: /#[\da-f]{3,6}/i,
            color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
                pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: n,
                    number: r,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/
                }
            }],
            entity: /\\[\da-f]{1,8}/i,
            unit: n,
            boolean: /\b(?:false|true)\b/,
            operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
            number: r,
            punctuation: /[{}()\[\];:,]/
        };
    t.interpolation = {
        pattern: /\{[^\r\n}:]+\}/,
        alias: "variable",
        inside: {
            delimiter: {
                pattern: /^\{|\}$/,
                alias: "punctuation"
            },
            rest: t
        }
    }, t.func = {
        pattern: /[\w-]+\([^)]*\).*/,
        inside: {
            function: /^[^(]+/,
            rest: t
        }
    }, e.languages.stylus = {
        "atrule-declaration": {
            pattern: /(^[ \t]*)@.+/m,
            lookbehind: !0,
            inside: {
                atrule: /^@[\w-]+/,
                rest: t
            }
        },
        "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
            lookbehind: !0,
            inside: {
                variable: /^\S+/,
                rest: t
            }
        },
        statement: {
            pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
            lookbehind: !0,
            inside: {
                keyword: /^\S+/,
                rest: t
            }
        },
        "property-declaration": {
            pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
            lookbehind: !0,
            inside: {
                property: {
                    pattern: /^[^\s:]+/,
                    inside: {
                        interpolation: t.interpolation
                    }
                },
                rest: t
            }
        },
        selector: {
            pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
            lookbehind: !0,
            inside: {
                interpolation: t.interpolation,
                comment: t.comment,
                punctuation: /[{},]/
            }
        },
        func: t.func,
        string: t.string,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
            greedy: !0
        },
        interpolation: t.interpolation,
        punctuation: /[{}()\[\];:.]/
    }
}(Prism);
Prism.languages.swift = {
    comment: {
        pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
        lookbehind: !0,
        greedy: !0
    },
    "string-literal": [{
        pattern: RegExp('(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'),
        lookbehind: !0,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                lookbehind: !0,
                inside: null
            },
            "interpolation-punctuation": {
                pattern: /^\)|\\\($/,
                alias: "punctuation"
            },
            punctuation: /\\(?=[\r\n])/,
            string: /[\s\S]+/
        }
    }, {
        pattern: RegExp('(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'),
        lookbehind: !0,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                lookbehind: !0,
                inside: null
            },
            "interpolation-punctuation": {
                pattern: /^\)|\\#+\($/,
                alias: "punctuation"
            },
            string: /[\s\S]+/
        }
    }],
    directive: {
        pattern: RegExp("#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"),
        alias: "property",
        inside: {
            "directive-name": /^#\w+/,
            boolean: /\b(?:false|true)\b/,
            number: /\b\d+(?:\.\d+)*\b/,
            operator: /!|&&|\|\||[<>]=?/,
            punctuation: /[(),]/
        }
    },
    literal: {
        pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
        alias: "constant"
    },
    "other-directive": {
        pattern: /#\w+\b/,
        alias: "property"
    },
    attribute: {
        pattern: /@\w+/,
        alias: "atrule"
    },
    "function-definition": {
        pattern: /(\bfunc\s+)\w+/,
        lookbehind: !0,
        alias: "function"
    },
    label: {
        pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
        lookbehind: !0,
        alias: "important"
    },
    keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: {
        pattern: /\bnil\b/,
        alias: "constant"
    },
    "short-argument": /\$\d+\b/,
    omit: {
        pattern: /\b_\b/,
        alias: "keyword"
    },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/
}, Prism.languages.swift["string-literal"].forEach(function(e) {
    e.inside.interpolation.inside = Prism.languages.swift
});
! function(e) {
    function n(e) {
        return e.replace(/__/g, function() {
            return "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\\\.|[^\\\\\"\r\n])*\")"
        })
    }
    e.languages.toml = {
        comment: {
            pattern: /#.*/,
            greedy: !0
        },
        table: {
            pattern: RegExp(n("(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "class-name"
        },
        key: {
            pattern: RegExp(n("(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"),
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        },
        string: {
            pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0
        },
        date: [{
            pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
            alias: "number"
        }, {
            pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
            alias: "number"
        }],
        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /[.,=[\]{}]/
    }
}(Prism);
Prism.languages.twig = {
    comment: /^\{#[\s\S]*?#\}$/,
    "tag-name": {
        pattern: /(^\{%-?\s*)\w+/,
        lookbehind: !0,
        alias: "keyword"
    },
    delimiter: {
        pattern: /^\{[{%]-?|-?[%}]\}$/,
        alias: "punctuation"
    },
    string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        inside: {
            punctuation: /^['"]|['"]$/
        }
    },
    keyword: /\b(?:even|if|odd)\b/,
    boolean: /\b(?:false|null|true)\b/,
    number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
    operator: [{
        pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
        lookbehind: !0
    }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],
    punctuation: /[()\[\]{}:.,]/
}, Prism.hooks.add("before-tokenize", function(e) {
    if ("twig" === e.language) {
        Prism.languages["markup-templating"].buildPlaceholders(e, "twig", /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)
    }
}), Prism.hooks.add("after-tokenize", function(e) {
    Prism.languages["markup-templating"].tokenizePlaceholders(e, "twig")
});
! function(E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^"'])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        function: [{
            pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
            inside: {
                string: {
                    pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                    inside: {
                        keyword: n
                    }
                },
                keyword: {
                    pattern: /INCLUDE_TYPOSCRIPT/
                }
            }
        }, {
            pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
            inside: {
                string: /"[^"\r\n]*"|'[^'\r\n]*'/
            }
        }],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: !0,
            inside: {
                function: /\{\$.*\}/,
                keyword: n,
                number: /^\d+$/,
                punctuation: /[,|:]/
            }
        },
        keyword: n,
        number: {
            pattern: /\b\d+\s*[.{=]/,
            inside: {
                operator: /[.{=]/
            }
        },
        tag: {
            pattern: /\.?[-\w\\]+\.?/,
            inside: {
                punctuation: /\./
            }
        },
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }, E.languages.tsconfig = E.languages.typoscript
}(Prism);
Prism.languages.uri = {
    scheme: {
        pattern: /^[a-z][a-z0-9+.-]*:/im,
        greedy: !0,
        inside: {
            "scheme-delimiter": /:$/
        }
    },
    fragment: {
        pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/,
        inside: {
            "fragment-delimiter": /^#/
        }
    },
    query: {
        pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
        inside: {
            "query-delimiter": {
                pattern: /^\?/,
                greedy: !0
            },
            "pair-delimiter": /[&;]/,
            pair: {
                pattern: /^[^=][\s\S]*/,
                inside: {
                    key: /^[^=]+/,
                    value: {
                        pattern: /(^=)[\s\S]+/,
                        lookbehind: !0
                    }
                }
            }
        }
    },
    authority: {
        pattern: RegExp("^//(?:[\\w\\-.~!$&'()*+,;=%:]*@)?(?:\\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\\.[\\w\\-.~!$&'()*+,;=]+)\\]|[\\w\\-.~!$&'()*+,;=%]*)(?::\\d*)?", "m"),
        inside: {
            "authority-delimiter": /^\/\//,
            "user-info-segment": {
                pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
                inside: {
                    "user-info-delimiter": /@$/,
                    "user-info": /^[\w\-.~!$&'()*+,;=%:]+/
                }
            },
            "port-segment": {
                pattern: /:\d*$/,
                inside: {
                    "port-delimiter": /^:/,
                    port: /^\d+/
                }
            },
            host: {
                pattern: /[\s\S]+/,
                inside: {
                    "ip-literal": {
                        pattern: /^\[[\s\S]+\]$/,
                        inside: {
                            "ip-literal-delimiter": /^\[|\]$/,
                            "ipv-future": /^v[\s\S]+/,
                            "ipv6-address": /^[\s\S]+/
                        }
                    },
                    "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
                }
            }
        }
    },
    path: {
        pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m,
        inside: {
            "path-separator": /\//
        }
    }
}, Prism.languages.url = Prism.languages.uri;
Prism.languages.vbnet = Prism.languages.extend("basic", {
    comment: [{
        pattern: /(?:!|REM\b).+/i,
        inside: {
            keyword: /^REM/i
        }
    }, {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(^|[^"])"(?:""|[^"])*"(?!")/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    punctuation: /[,;:(){}]/
});
Prism.languages.verilog = {
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "kernel-function": {
        pattern: /\B\$\w+\b/,
        alias: "property"
    },
    constant: /\B`\w+\b/,
    function: /\b\w+(?=\()/,
    keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
    important: /\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,
    number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,
    operator: /[-+{}^~%*\/?=!<>&|]+/,
    punctuation: /[[\];(),.:]/
};
Prism.languages.vim = {
    string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
    comment: /".*/,
    function: /\b\w+(?=\()/,
    keyword: /\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
    builtin: /\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
    operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
    punctuation: /[{}[\](),;:]/
};
Prism.languages["visual-basic"] = {
    comment: {
        pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
        inside: {
            keyword: /^REM/i
        }
    },
    directive: {
        pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,
        alias: "property",
        greedy: !0
    },
    string: {
        pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
        greedy: !0
    },
    date: {
        pattern: /#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,
        alias: "number"
    },
    number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,
    boolean: /\b(?:False|Nothing|True)\b/i,
    keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
    operator: /[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,
    punctuation: /[{}().,:?]/
}, Prism.languages.vb = Prism.languages["visual-basic"], Prism.languages.vba = Prism.languages["visual-basic"];
Prism.languages.wasm = {
    comment: [/\(;[\s\S]*?;\)/, {
        pattern: /;;.*/,
        greedy: !0
    }],
    string: {
        pattern: /"(?:\\[\s\S]|[^"\\])*"/,
        greedy: !0
    },
    keyword: [{
        pattern: /\b(?:align|offset)=/,
        inside: {
            operator: /=/
        }
    }, {
        pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
        inside: {
            punctuation: /\./
        }
    }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
};
! function(e) {
    var n = /[*&][^\s[\]{},]+/,
        r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
        t = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)",
        a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, function() {
            return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"
        }),
        d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";

    function o(e, n) {
        n = (n || "").replace(/m/g, "") + "m";
        var r = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, function() {
            return t
        }).replace(/<<value>>/g, function() {
            return e
        });
        return RegExp(r, n)
    }
    e.languages.yaml = {
        scalar: {
            pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function() {
                return t
            })),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, function() {
                return t
            }).replace(/<<key>>/g, function() {
                return "(?:" + a + "|" + d + ")"
            })),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: o("false|true", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: {
            pattern: o("null|~", "i"),
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: o(d),
            lookbehind: !0,
            greedy: !0
        },
        number: {
            pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
            lookbehind: !0
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, e.languages.yml = e.languages.yaml
}(Prism);
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
        var t, o = "line-numbers",
            s = "linkable-line-numbers",
            l = function() {
                if (void 0 === t) {
                    var e = document.createElement("div");
                    e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = "0", e.style.border = "0", e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e)
                }
                return t
            },
            a = !0;
        Prism.plugins.lineHighlight = {
            highlightLines: function(u, e, c) {
                var t = (e = "string" == typeof e ? e : u.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean),
                    d = +u.getAttribute("data-line-offset") || 0,
                    h = (l() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
                    f = Prism.util.isActive(u, o),
                    i = u.querySelector("code"),
                    p = f ? u : i || u,
                    g = [],
                    m = i && p != i ? function(e, t) {
                        var i = getComputedStyle(e),
                            n = getComputedStyle(t);

                        function r(e) {
                            return +e.substr(0, e.length - 2)
                        }
                        return t.offsetTop + r(n.borderTopWidth) + r(n.paddingTop) - r(i.paddingTop)
                    }(u, i) : 0;
                t.forEach(function(e) {
                    var t = e.split("-"),
                        i = +t[0],
                        n = +t[1] || i,
                        r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
                    if (g.push(function() {
                            r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (c || "") + " line-highlight"
                        }), f && Prism.plugins.lineNumbers) {
                        var o = Prism.plugins.lineNumbers.getLine(u, i),
                            s = Prism.plugins.lineNumbers.getLine(u, n);
                        if (o) {
                            var l = o.offsetTop + m + "px";
                            g.push(function() {
                                r.style.top = l
                            })
                        }
                        if (s) {
                            var a = s.offsetTop - o.offsetTop + s.offsetHeight + "px";
                            g.push(function() {
                                r.style.height = a
                            })
                        }
                    } else g.push(function() {
                        r.setAttribute("data-start", String(i)), i < n && r.setAttribute("data-end", String(n)), r.style.top = (i - d - 1) * h + m + "px", r.textContent = new Array(n - i + 2).join(" \n")
                    });
                    g.push(function() {
                        r.style.width = u.scrollWidth + "px"
                    }), g.push(function() {
                        p.appendChild(r)
                    })
                });
                var n = u.id;
                if (f && Prism.util.isActive(u, s) && n) {
                    y(u, s) || g.push(function() {
                        u.classList.add(s)
                    });
                    var r = parseInt(u.getAttribute("data-start") || "1");
                    v(".line-numbers-rows > span", u).forEach(function(e, t) {
                        var i = t + r;
                        e.onclick = function() {
                            var e = n + "." + i;
                            a = !1, location.hash = e, setTimeout(function() {
                                a = !0
                            }, 1)
                        }
                    })
                }
                return function() {
                    g.forEach(b)
                }
            }
        };
        var u = 0;
        Prism.hooks.add("before-sanity-check", function(e) {
            var t = e.element.parentElement;
            if (c(t)) {
                var i = 0;
                v(".line-highlight", t).forEach(function(e) {
                    i += e.textContent.length, e.parentNode.removeChild(e)
                }), i && /^(?: \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
            }
        }), Prism.hooks.add("complete", function e(t) {
            var i = t.element.parentElement;
            if (c(i)) {
                clearTimeout(u);
                var n = Prism.plugins.lineNumbers,
                    r = t.plugins && t.plugins.lineNumbers;
                if (y(i, o) && n && !r) Prism.hooks.add("line-numbers", e);
                else Prism.plugins.lineHighlight.highlightLines(i)(), u = setTimeout(d, 1)
            }
        }), window.addEventListener("hashchange", d), window.addEventListener("resize", function() {
            v("pre").filter(c).map(function(e) {
                return Prism.plugins.lineHighlight.highlightLines(e)
            }).forEach(b)
        })
    }

    function v(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function y(e, t) {
        return e.classList.contains(t)
    }

    function b(e) {
        e()
    }

    function c(e) {
        return !(!e || !/pre/i.test(e.nodeName)) && (!!e.hasAttribute("data-line") || !(!e.id || !Prism.util.isActive(e, s)))
    }

    function d() {
        var e = location.hash.slice(1);
        v(".temporary.line-highlight").forEach(function(e) {
            e.parentNode.removeChild(e)
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var i = e.slice(0, e.lastIndexOf(".")),
                n = document.getElementById(i);
            if (n) n.hasAttribute("data-line") || n.setAttribute("data-line", ""), Prism.plugins.lineHighlight.highlightLines(n, t, "temporary ")(), a && document.querySelector(".temporary.line-highlight").scrollIntoView()
        }
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var o = "line-numbers",
            a = /\n(?!$)/g,
            e = Prism.plugins.lineNumbers = {
                getLine: function(e, n) {
                    if ("PRE" === e.tagName && e.classList.contains(o)) {
                        var t = e.querySelector(".line-numbers-rows");
                        if (t) {
                            var i = parseInt(e.getAttribute("data-start"), 10) || 1,
                                r = i + (t.children.length - 1);
                            n < i && (n = i), r < n && (n = r);
                            var s = n - i;
                            return t.children[s]
                        }
                    }
                },
                resize: function(e) {
                    u([e])
                },
                assumeViewportIndependence: !0
            },
            n = void 0;
        window.addEventListener("resize", function() {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))))
        }), Prism.hooks.add("complete", function(e) {
            if (e.code) {
                var n = e.element,
                    t = n.parentNode;
                if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
                    n.classList.remove(o), t.classList.add(o);
                    var i, r = e.code.match(a),
                        s = r ? r.length + 1 : 1,
                        l = new Array(s + 1).join("<span></span>");
                    (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e)
                }
            }
        }), Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        })
    }

    function u(e) {
        if (0 != (e = e.filter(function(e) {
                var n = function(e) {
                    return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                }(e)["white-space"];
                return "pre-wrap" === n || "pre-line" === n
            })).length) {
            var n = e.map(function(e) {
                var n = e.querySelector("code"),
                    t = e.querySelector(".line-numbers-rows");
                if (n && t) {
                    var i = e.querySelector(".line-numbers-sizer"),
                        r = n.textContent.split(a);
                    i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
                    var s = i.getBoundingClientRect().height;
                    return i.innerHTML = "", {
                        element: e,
                        lines: r,
                        lineHeights: [],
                        oneLinerHeight: s,
                        sizer: i
                    }
                }
            }).filter(Boolean);
            n.forEach(function(e) {
                var i = e.sizer,
                    n = e.lines,
                    r = e.lineHeights,
                    s = e.oneLinerHeight;
                r[n.length - 1] = void 0, n.forEach(function(e, n) {
                    if (e && 1 < e.length) {
                        var t = i.appendChild(document.createElement("span"));
                        t.style.display = "block", t.textContent = e
                    } else r[n] = s
                })
            }), n.forEach(function(e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }), n.forEach(function(e) {
                var n = e.sizer,
                    t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function(e, n) {
                    t.children[n].style.height = e + "px"
                })
            })
        }
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var i = [],
            l = {},
            d = function() {};
        Prism.plugins.toolbar = {};
        var e = Prism.plugins.toolbar.registerButton = function(e, n) {
                var t;
                t = "function" == typeof n ? n : function(e) {
                    var t;
                    return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
                        n.onClick.call(this, e)
                    })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t
                }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t)
            },
            t = Prism.plugins.toolbar.hook = function(a) {
                var e = a.element.parentNode;
                if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
                    var t = document.createElement("div");
                    t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
                    var r = document.createElement("div");
                    r.classList.add("toolbar");
                    var n = i,
                        o = function(e) {
                            for (; e;) {
                                var t = e.getAttribute("data-toolbar-order");
                                if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                                e = e.parentElement
                            }
                        }(a.element);
                    o && (n = o.map(function(e) {
                        return l[e] || d
                    })), n.forEach(function(e) {
                        var t = e(a);
                        if (t) {
                            var n = document.createElement("div");
                            n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n)
                        }
                    }), t.appendChild(r)
                }
            };
        e("label", function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, a, r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r)
                } catch (e) {}
                return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
            }
        }), Prism.hooks.add("complete", t)
    }
}();
! function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document)
        if (Prism.plugins.toolbar) {
            var i = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                basic: "BASIC",
                bbcode: "BBcode",
                bnf: "BNF",
                rbnf: "RBNF",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (КуМир)",
                kum: "KuMir (КуМир)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                iecst: "Structured Text (IEC 61131-3)",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", function(e) {
                var a = e.element.parentNode;
                if (a && /pre/i.test(a.nodeName)) {
                    var t, o = a.getAttribute("data-language") || i[e.language] || ((t = e.language) ? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(/s(?=cript)/, "S") : t);
                    if (o) {
                        var s = document.createElement("span");
                        return s.textContent = o, s
                    }
                }
            })
        } else console.warn("Show Languages plugin loaded before Toolbar plugin.")
}();
"undefined" != typeof Prism && Prism.hooks.add("wrap", function(e) {
    "keyword" === e.type && e.classes.push("keyword-" + e.content)
});
! function() {
    function u(t, e) {
        t.addEventListener("click", function() {
            ! function(t) {
                navigator.clipboard ? navigator.clipboard.writeText(t.getText()).then(t.success, function() {
                    o(t)
                }) : o(t)
            }(e)
        })
    }

    function o(e) {
        var t = document.createElement("textarea");
        t.value = e.getText(), t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
        try {
            var o = document.execCommand("copy");
            setTimeout(function() {
                o ? e.success() : e.error()
            }, 1)
        } catch (t) {
            setTimeout(function() {
                e.error(t)
            }, 1)
        }
        document.body.removeChild(t)
    }
    "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(t) {
        var e = t.element,
            o = function(t) {
                var e = {
                    copy: "Copy",
                    "copy-error": "Press Ctrl+C to copy",
                    "copy-success": "Copied!",
                    "copy-timeout": 5e3
                };
                for (var o in e) {
                    for (var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n);) c = c.parentElement;
                    c && (e[o] = c.getAttribute(n))
                }
                return e
            }(e),
            n = document.createElement("button");
        n.className = "copy-to-clipboard-button", n.setAttribute("type", "button");
        var c = document.createElement("span");
        return n.appendChild(c), i("copy"), u(n, {
            getText: function() {
                return e.textContent
            },
            success: function() {
                i("copy-success"), r()
            },
            error: function() {
                i("copy-error"), setTimeout(function() {
                    ! function(t) {
                        window.getSelection().selectAllChildren(t)
                    }(e)
                }, 1), r()
            }
        }), n;

        function r() {
            setTimeout(function() {
                i("copy")
            }, o["copy-timeout"])
        }

        function i(t) {
            c.textContent = o[t], n.setAttribute("data-copy-state", t)
        }
    }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))
}();
"undefined" != typeof Prism && "undefined" != typeof document && document.querySelector && Prism.plugins.toolbar.registerButton("download-file", function(t) {
    var e = t.element.parentNode;
    if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-src") && e.hasAttribute("data-download-link")) {
        var n = e.getAttribute("data-src"),
            a = document.createElement("a");
        return a.textContent = e.getAttribute("data-download-link-label") || "Download", a.setAttribute("download", ""), a.href = n, a
    }
});