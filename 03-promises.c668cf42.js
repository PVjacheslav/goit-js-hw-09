var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("7Y9D8");const r={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function i(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)})).then((({position:e,delay:o})=>{console.log(`:white_tick: Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`:x: Rejected promise ${e} in ${o}ms`)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();const o=Number(r.delay.value),t=Number(r.step.value),n=Number(r.amount.value);let l=1,u=o;for(let e=1;e<=n;e+=1)i(l,u),l++,u+=t}));
//# sourceMappingURL=03-promises.c668cf42.js.map
