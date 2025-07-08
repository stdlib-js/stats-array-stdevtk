"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(h,n){
var o=require('@stdlib/assert-is-collection/dist'),v=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/array-dtypes/dist'),l=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),g=require('@stdlib/array-base-join/dist'),c=require('@stdlib/stats-base-stdevtk/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),i=m("real_and_generic"),p="generic";function q(e){var r,t;if(!o(e))throw new TypeError(a('null2O',e));if(t=l(e)||p,!d(i,t))throw new TypeError(a('nullHZ',g(i,'", "'),t));if(arguments.length>1){if(r=arguments[1],!v(r))throw new TypeError(a('null4A',r))}else r=1;return c(e.length,r,e,1,0)}n.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
