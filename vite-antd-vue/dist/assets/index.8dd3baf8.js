import{d as a,c as l,a as d,b as u,w as f,e as c,B as p,o as _,f as m}from"./vendor.71c7b8df.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};y();const h={class:"app"},g=c(" a "),v=c("Primary Button"),b=a({setup(i){return(o,s)=>{const r=p;return _(),l("div",h,[d("span",null,[g,u(r,{type:"dashed"},{default:f(()=>[v]),_:1})])])}}});m(b).mount("#app");
