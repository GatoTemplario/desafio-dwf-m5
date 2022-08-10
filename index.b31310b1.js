// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _pptEl = require("./components/PiedraPapelTijera/ppt-el");
var _timer = require("./components/timer-el/timer");
var _circle = require("./components/timer-el/circle");
var _buttonEl = require("./components/button-el/button-el");
(()=>{
    const fondo = require("url:./images/fondo.png");
    const div = document.querySelector(".root");
    const body = document.querySelector("body");
    _pptEl.initPPT();
    _router.initRouter(div);
    _timer.initTimer();
    _circle.initCircle();
    _buttonEl.initButton();
    const auxDivEl = document.createElement("div");
    auxDivEl.classList.add("imagen-fondo__container");
    auxDivEl.innerHTML = `<img class="imagen-fondo__image" src="${fondo}" alt="">`;
    body.appendChild(auxDivEl);
})();

},{"./router":"b2iia","./components/PiedraPapelTijera/ppt-el":"GcVvK","./components/timer-el/timer":"aiB8P","./components/timer-el/circle":"1S4iV","./components/button-el/button-el":"gyTEw","url:./images/fondo.png":"3MX0p"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome/welcome");
var _start = require("./pages/start/start");
var _game = require("./pages/game/game");
var _result = require("./pages/result/result");
const BASE_PATH = "/Capitulo8-Desafio-final";
function isGitHubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    const routes = [
        {
            path: /\/welcome/,
            component: _welcome.initWelcome
        },
        {
            path: /\/start/,
            component: _start.initStart
        },
        {
            path: /\/game/,
            component: _game.initGame
        },
        {
            path: /\/result/,
            component: _result.initResult
        }, 
    ];
    function goTo(path) {
        const completePath = isGitHubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function(event) {
        console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome/welcome":"7XTfo","./pages/start/start":"lrkWC","./pages/game/game":"gTQkq","./pages/result/result":"ktqyR","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7XTfo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome
);
function initWelcome({ goTo  }) {
    const divEl = document.createElement("div");
    divEl.classList.add("welcome__container");
    divEl.innerHTML = `\n    <div class="welcome__title-container">\n        <h1 class="welcome__title">Piedra</h1>\n        <h1 class="welcome__title">Papel\n        <span class="welcome__span">ó </span>\n        </h1>\n        <h1 class="welcome__title">Tijera</h1>\n    </div>\n    <button-el class="welcome__button">Empezar</button-el>\n    <div class="welcome__container-options">\n        <ppt-el class="welcome__option" checked=true variant="Tijera"></ppt-el>\n        <ppt-el class="welcome__option" checked=true variant="Papel"></ppt-el>\n        <ppt-el class="welcome__option" checked=true variant="Piedra"></ppt-el>\n    </div>\n    `;
    const button = divEl.querySelector(".welcome__button");
    button?.addEventListener("click", ()=>{
        goTo("/start");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lrkWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStart", ()=>initStart
);
function initStart({ goTo  }) {
    const divEl = document.createElement("div");
    divEl.classList.add("start__container");
    divEl.innerHTML = `\n    <p class="start__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>\n    <button-el class="start__button">¡Jugar!</button-el>\n    <div class="start__container-options">\n        <ppt-el class="start__option" checked=true variant="Tijera"></ppt-el>\n        <ppt-el class="start__option" checked=true variant="Papel"></ppt-el>\n        <ppt-el class="start__option" checked=true variant="Piedra"></ppt-el>\n    </div>\n    `;
    const button = divEl.querySelector(".start__button");
    button?.addEventListener("click", ()=>{
        goTo("/game");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gTQkq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _state = require("../../state");
function initGame({ goTo  }) {
    const divEl = document.createElement("div");
    divEl.classList.add("game__container");
    divEl.innerHTML = `\n        <circle-el class="game__circle"></circle-el>\n        <div class="game__container-options">\n            <ppt-el class="game__option" variant="Tijera"></ppt-el>\n            <ppt-el class="game__option" variant="Papel"></ppt-el>\n            <ppt-el class="game__option" variant="Piedra"></ppt-el>\n        </div>\n    `;
    const htmlElements = divEl.getElementsByTagName("ppt-el");
    const setDeOptions = Array.from(htmlElements);
    var choosenID = 0;
    for(let i = 0; i < setDeOptions.length; i++){
        const element = setDeOptions[i];
        element.setAttribute("id", i.toString());
        element.addEventListener("click", ()=>{
            const optionsRestantes = setDeOptions.filter((el)=>{
                return el != element;
            });
            optionsRestantes.map((el)=>{
                const options = el.shadowRoot?.querySelector(".imagen");
                if (options.className != "imagen image-grey") options.className = "imagen image-grey";
            });
            choosenID = i;
        });
    }
    function setGame() {
        const optionChoosen = document.getElementById(choosenID.toString());
        const myPlay = optionChoosen?.getAttribute("variant");
        _state.state.setGame(myPlay);
    }
    setTimeout(()=>{
        setGame();
        goTo("/result");
    }, 3500);
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            playerPlay: ""
        },
        history: {
            jugador: 0,
            computadora: 0
        },
        mapa: [
            {
                nombre: "Piedra",
                gana: "Tijera"
            },
            {
                nombre: "Papel",
                gana: "Piedra"
            },
            {
                nombre: "Tijera",
                gana: "Papel"
            }
        ],
        outcomes: [
            "Ganaste",
            "Empate",
            "Perdiste"
        ]
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb(newState);
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    getRandomPlay () {
        const randomNumer = Math.floor(Math.random() * 3);
        return this.data.mapa[randomNumer].nombre;
    },
    whoWins () {
        const currentGame = this.data.currentGame;
        const infoPlayerPlay = this.data.mapa.find((e)=>{
            return e.nombre == currentGame.playerPlay;
        });
        if (currentGame.computerPlay == infoPlayerPlay?.nombre) // Empate
        return this.data.outcomes[1];
        else if (currentGame.computerPlay == infoPlayerPlay?.gana) // Gana
        return this.data.outcomes[0];
        else // Pierde
        return this.data.outcomes[2];
    },
    pushToHistory () {
        const currentState = this.getState();
        if (this.whoWins() == this.data.outcomes[0]) currentState.history.jugador++;
        else if (this.whoWins() == this.data.outcomes[2]) currentState.history.computadora++;
        this.setState(currentState);
    },
    setGame (move) {
        const currentState = this.getState();
        const randomPlay = this.getRandomPlay();
        currentState.currentGame.playerPlay = move;
        currentState.currentGame.computerPlay = randomPlay;
        this.pushToHistory();
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ktqyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult
);
var _state = require("../../state");
const imgWinningStar = require("url:../../images/winning-star.png");
const imgLosingStar = require("url:../../images/losing-star.png");
function initResult({ goTo  }) {
    const divEl = document.createElement("div");
    const currentState = _state.state.getState();
    function renderStar() {
        if (_state.state.whoWins() == currentState.outcomes[0]) return imgWinningStar;
        else if (_state.state.whoWins() == currentState.outcomes[2]) return imgLosingStar;
    }
    divEl.classList.add("result__container");
    divEl.innerHTML = ` \n        <div class="result__options-container">\n            <ppt-el class="ppt result__option--inverted" id="1" checked=true variant="${currentState.currentGame.computerPlay}"></ppt-el>\n            <ppt-el class="ppt result__option--normal" id="2" checked=true variant="${currentState.currentGame.playerPlay}"></ppt-el>\n        </div>\n\n        <div class="result__score-container">\n            <div class="result__score-title-container">\n                <img src="${renderStar()}" alt="" class="result__score-star">\n                <h1 class="result__score-title">${_state.state.whoWins()}</h1>\n            </div>\n            <div class="result__score-text-container">\n                <h2 class="result__score-subtitle">Score</h2>\n                <h3 class="result__text">Vos: ${currentState.history.jugador}</h3>\n                <h3 class="result__text">Máquina: ${currentState.history.computadora}</h3>\n            </div>\n            <button-el class="result__button">Volver a jugar</button-el>\n        </div>\n    `;
    const button = divEl.querySelector(".result__button");
    button?.addEventListener("click", ()=>{
        goTo("/game");
    });
    function renderColor() {
        if (_state.state.whoWins() == currentState.outcomes[0]) divEl.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
        else if (_state.state.whoWins() == currentState.outcomes[2]) divEl.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
    setTimeout(()=>{
        const optionsContainer = divEl.querySelector(".result__options-container");
        const scoreContainer = divEl.querySelector(".result__score-container");
        renderColor();
        optionsContainer.style.display = "none";
        scoreContainer.style.display = "flex";
    }, 2000);
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA","url:../../images/losing-star.png":"jwC9m","url:../../images/winning-star.png":"edcgq"}],"jwC9m":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "losing-star.17437e07.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"edcgq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "winning-star.9dc1365a.png";

},{"./helpers/bundle-url":"8YnfL"}],"GcVvK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPPT", ()=>initPPT
);
const imgPiedra = require("url:../../images/piedra.png");
const imgPapel = require("url:../../images/papel.png");
const imgTijera = require("url:../../images/tijera.png");
function initPPT() {
    class PiedraPapelTijera extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
            const style = document.createElement("style");
            style.innerHTML = `\n                .imagen{\n                    width: 100%;\n                }\n                .image-coloured{\n                    filter: grayscale(0%);\n                }\n                .image-grey{\n                    filter: grayscale(100%);\n                }\n                .container{\n                    width: 100%;\n                }\n            `;
            this.shadow.appendChild(style);
            const imagen = this.shadow.querySelector(".image-grey");
            imagen?.addEventListener("click", ()=>{
                imagen.className = "imagen image-grey";
                imagen.className = "imagen image-coloured";
            });
        }
        render() {
            const div = document.createElement("div");
            const img = document.createElement("img");
            let isChecked = this.getAttribute("checked") || false;
            div.classList.add("container");
            if (isChecked) img.className = "imagen image-coloured";
            else img.className = "imagen image-grey";
            let opcion = "Piedra";
            let variant = this.getAttribute("variant") || opcion;
            if (variant == "Piedra") img.src = imgPiedra;
            else if (variant == "Papel") img.src = imgPapel;
            else img.src = imgTijera;
            div.appendChild(img);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("ppt-el", PiedraPapelTijera);
}

},{"url:../../images/piedra.png":"jQlP3","url:../../images/papel.png":"8lgLG","url:../../images/tijera.png":"5iyAz","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jQlP3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.a3b6d156.png";

},{"./helpers/bundle-url":"8YnfL"}],"8lgLG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.135c8552.png";

},{"./helpers/bundle-url":"8YnfL"}],"5iyAz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.51906c81.png";

},{"./helpers/bundle-url":"8YnfL"}],"aiB8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTimer", ()=>initTimer
);
function initTimer() {
    class Timer extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
            this.initCountdown();
        }
        render() {
            // console.log("this render");
            const div = document.createElement("div");
            const timer = document.createElement("p");
            div.appendChild(timer);
            this.shadow.appendChild(div);
        }
        initCountdown() {
            const timer = this.shadow.querySelector("p");
            let counter = 3;
            timer.innerHTML = `Tiempo: ${counter}`;
            const intervalId = setInterval(()=>{
                counter = counter - 1;
                timer.innerHTML = `Tiempo: ${counter}`;
                if (counter < 1) // ESTAS LINEAS NO VAN AQUI
                // const computerPlay = state.getRandomPlay()
                // console.log(computerPlay);
                // 
                clearInterval(intervalId);
            }, 1000);
        }
    }
    customElements.define("timer-el", Timer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1S4iV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import { initTimer } from "./timer";
parcelHelpers.export(exports, "initCircle", ()=>initCircle
);
function initCircle() {
    class Circle extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const div = document.createElement("div");
            const style = document.createElement("style");
            const COLOR_CODES = {
                info: {
                    color: "green"
                }
            };
            let remainingPathColor = COLOR_CODES.info.color;
            div.innerHTML = `\n            <div class="base-timer">\n                <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <g class="base-timer__circle">\n                        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />\n                        <path\n                        id="base-timer-path-remaining"\n                        stroke-dasharray="283"\n                        class="base-timer__path-remaining ${remainingPathColor}"\n                        d="\n                            M 50, 50\n                            m -45, 0\n                            a 45,45 0 1,0 90,0\n                            a 45,45 0 1,0 -90,0\n                        "\n                        ></path>\n                    </g>\n                </svg>\n                <span class="base-timer__label">\n                    <timer-el></timer-el>\n                </span>\n            </div>\n            `;
            style.innerHTML = `\n            .base-timer {\n                position: relative;\n                height: 300px;\n                width: 300px;\n            }\n            .base-timer__circle {\n                fill: none;\n                stroke: none;\n            }\n            .base-timer__path-elapsed {\n                stroke-width: 7px;\n                stroke: grey;\n            }\n            .base-timer__label {\n                position: absolute;\n                \n                /* Size should match the parent container */\n                width: 300px;\n                height: 300px;\n                \n                /* Keep the label aligned to the top */\n                top: 0;\n                \n                /* Create a flexible box that centers content vertically and horizontally */\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            \n                /* Sort of an arbitrary number; adjust to your liking */\n                font-size: 48px;\n            }\n            .base-timer__path-remaining {\n                /* Just as thick as the original ring */\n                stroke-width: 7px;\n            \n                /* Rounds the line endings to create a seamless circle */\n                stroke-linecap: round;\n            \n                /* Makes sure the animation starts at the top of the circle */\n                transform: rotate(90deg);\n                transform-origin: center;\n            \n                /* One second aligns with the speed of the countdown timer */\n                transition: 1s linear all;\n            \n                /* Allows the ring to change color when the color value updates */\n                stroke: currentColor;\n            }\n            \n            .base-timer__svg {\n                /* Flips the svg and makes the animation to move left-to-right */\n                transform: scaleX(-1);\n            }\n            `;
            this.startTimer();
            div.appendChild(style);
            this.shadow.appendChild(div);
        }
        startTimer() {
            const timeLimit = 3;
            var timePassed = 0;
            const timerInterval = setInterval(()=>{
                timePassed++;
                const timeLeft = timeLimit - timePassed;
                const fraction = timeLeft / timeLimit;
                const k2 = 1 / timeLimit * (1 - fraction);
                const rawTimeFraction = fraction - k2;
                const circleDashArray = `${(rawTimeFraction * 283).toFixed(0)} 283`;
                const k1 = this.shadow.getElementById("base-timer-path-remaining");
                k1.setAttribute("stroke-dasharray", circleDashArray);
                if (timePassed >= 3) clearInterval(timerInterval);
            }, 1000);
        }
    }
    customElements.define("circle-el", Circle);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gyTEw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton
);
function initButton() {
    class Boton extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const divEl = document.createElement("div");
            divEl.classList.add("container");
            const style = document.createElement("style");
            const textContent = this.textContent;
            divEl.innerHTML = `\n                <button class="button">${textContent}</button>\n            `;
            style.innerHTML = `\n                .container{\n                }\n                .button{\n                    width: 322px;\n                    height: 87px;\n                    background-color: #006CFC;\n                    border: solid;\n                    border-color: #001997;\n                    border-radius: 10px;\n                    font-family: inherit;\n                    font-size: inherit;\n                    color: white;\n                }\n                @media(min-width: 769px){\n                    .button{\n                        width: 422px;\n                        height: 95px;\n                    }\n                }\n            `;
            divEl.appendChild(style);
            this.shadow.appendChild(divEl);
        }
    }
    customElements.define("button-el", Boton);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3MX0p":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "fondo.c3190897.png";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire1256")

//# sourceMappingURL=index.b31310b1.js.map
