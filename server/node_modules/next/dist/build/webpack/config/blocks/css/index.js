"use strict";exports.__esModule=true;exports.__overrideCssConfiguration=__overrideCssConfiguration;exports.css=void 0;var _lodash=_interopRequireDefault(require("lodash.curry"));var _path=_interopRequireDefault(require("path"));var _miniCssExtractPlugin=_interopRequireDefault(require("../../../plugins/mini-css-extract-plugin"));var _helpers=require("../../helpers");var _utils=require("../../utils");var _getCssModuleLocalIdent=require("./getCssModuleLocalIdent");var _messages=require("./messages");var _plugins=require("./plugins");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getClientStyleLoader({isDevelopment,assetPrefix}){return isDevelopment?{loader:require.resolve('style-loader'),options:{// By default, style-loader injects CSS into the bottom
// of <head>. This causes ordering problems between dev
// and prod. To fix this, we render a <noscript> tag as
// an anchor for the styles to be placed before. These
// styles will be applied _before_ <style jsx global>.
insert:function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});}}}:{loader:_miniCssExtractPlugin.default.loader,options:{publicPath:`${assetPrefix}/_next/`}};}async function __overrideCssConfiguration(rootDirectory,isProduction,config){var _config$module,_config$module$rules;const postCssPlugins=await(0,_plugins.getPostCssPlugins)(rootDirectory,isProduction);function patch(rule){if(rule.options&&typeof rule.options==='object'&&rule.options['ident']==='__nextjs_postcss'){rule.options.plugins=postCssPlugins;}else if(Array.isArray(rule.oneOf)){rule.oneOf.forEach(patch);}else if(Array.isArray(rule.use)){rule.use.forEach(u=>{if(typeof u==='object'){patch(u);}});}}// TODO: remove this rule, ESLint bug
// eslint-disable-next-line no-unused-expressions
(_config$module=config.module)===null||_config$module===void 0?void 0:(_config$module$rules=_config$module.rules)===null||_config$module$rules===void 0?void 0:_config$module$rules.forEach(entry=>{patch(entry);});}const css=(0,_lodash.default)(async function css(enabled,ctx,config){if(!enabled){return config;}const fns=[(0,_helpers.loader)({oneOf:[{// Impossible regex expression
test:/a^/,loader:'noop-loader',options:{__next_css_remove:true}}]})];const postCssPlugins=await(0,_plugins.getPostCssPlugins)(ctx.rootDirectory,ctx.isProduction,// TODO: In the future, we should stop supporting old CSS setups and
// unconditionally inject ours. When that happens, we should remove this
// function argument.
true);// CSS cannot be imported in _document. This comes before everything because
// global CSS nor CSS modules work in said file.
fns.push((0,_helpers.loader)({oneOf:[{test:/\.css$/,// Use a loose regex so we don't have to crawl the file system to
// find the real file name (if present).
issuer:{test:/pages[\\/]_document\./},use:{loader:'error-loader',options:{reason:(0,_messages.getCustomDocumentError)()}}}]}));// CSS Modules support must be enabled on the server and client so the class
// names are availble for SSR or Prerendering.
fns.push((0,_helpers.loader)({oneOf:[{// CSS Modules should never have side effects. This setting will
// allow unused CSS to be removed from the production build.
// We ensure this by disallowing `:global()` CSS at the top-level
// via the `pure` mode in `css-loader`.
sideEffects:false,// CSS Modules are activated via this specific extension.
test:/\.module\.css$/,// CSS Modules are only supported in the user's application. We're
// not yet allowing CSS imports _within_ `node_modules`.
issuer:{include:[ctx.rootDirectory],exclude:/node_modules/},use:[// Add appropriate development more or production mode style
// loader
ctx.isClient&&getClientStyleLoader({isDevelopment:ctx.isDevelopment,assetPrefix:ctx.assetPrefix}),// Resolve CSS `@import`s and `url()`s
{loader:require.resolve('css-loader'),options:{importLoaders:1,sourceMap:true,onlyLocals:ctx.isServer,modules:{// Disallow global style exports so we can code-split CSS and
// not worry about loading order.
mode:'pure',// Generate a friendly production-ready name so it's
// reasonably understandable. The same name is used for
// development.
// TODO: Consider making production reduce this to a single
// character?
getLocalIdent:_getCssModuleLocalIdent.getCssModuleLocalIdent}}},// Compile CSS
{loader:require.resolve('postcss-loader'),options:{ident:'__nextjs_postcss',plugins:postCssPlugins,sourceMap:true}}].filter(Boolean)}]}));// Throw an error for CSS Modules used outside their supported scope
fns.push((0,_helpers.loader)({oneOf:[{test:/\.module\.css$/,use:{loader:'error-loader',options:{reason:(0,_messages.getLocalModuleImportError)()}}}]}));if(ctx.isServer){fns.push((0,_helpers.loader)({oneOf:[{test:/\.css$/,use:require.resolve('ignore-loader')}]}));}else if(ctx.customAppFile){fns.push((0,_helpers.loader)({oneOf:[{// A global CSS import always has side effects. Webpack will tree
// shake the CSS without this option if the issuer claims to have
// no side-effects.
// See https://github.com/webpack/webpack/issues/6571
sideEffects:true,test:/\.css$/,issuer:{include:ctx.customAppFile},use:[// Add appropriate development more or production mode style
// loader
getClientStyleLoader({isDevelopment:ctx.isDevelopment,assetPrefix:ctx.assetPrefix}),// Resolve CSS `@import`s and `url()`s
{loader:require.resolve('css-loader'),options:{importLoaders:1,sourceMap:true}},// Compile CSS
{loader:require.resolve('postcss-loader'),options:{ident:'__nextjs_postcss',plugins:postCssPlugins,sourceMap:true}}]}]}));}// Throw an error for Global CSS used inside of `node_modules`
fns.push((0,_helpers.loader)({oneOf:[{test:/\.css$/,issuer:{include:[/node_modules/]},use:{loader:'error-loader',options:{reason:(0,_messages.getGlobalModuleImportError)()}}}]}));// Throw an error for Global CSS used outside of our custom <App> file
fns.push((0,_helpers.loader)({oneOf:[{test:/\.css$/,use:{loader:'error-loader',options:{reason:(0,_messages.getGlobalImportError)(ctx.customAppFile&&_path.default.relative(ctx.rootDirectory,ctx.customAppFile))}}}]}));if(ctx.isClient){// Automatically transform references to files (i.e. url()) into URLs
// e.g. url(./logo.svg)
fns.push((0,_helpers.loader)({oneOf:[{// This should only be applied to CSS files
issuer:{test:/\.css$/},// Exclude extensions that webpack handles by default
exclude:[/\.(js|mjs|jsx|ts|tsx)$/,/\.html$/,/\.json$/],use:{// `file-loader` always emits a URL reference, where `url-loader`
// might inline the asset as a data URI
loader:require.resolve('file-loader'),options:{// Hash the file for immutable cacheability
name:'static/media/[name].[hash].[ext]'}}}]}));}if(ctx.isClient&&ctx.isProduction){// Extract CSS as CSS file(s) in the client-side production bundle.
fns.push((0,_helpers.plugin)(new _miniCssExtractPlugin.default({filename:'static/css/[contenthash].css',chunkFilename:'static/css/[contenthash].css',// Next.js guarantees that CSS order doesn't matter, due to imposed
// restrictions:
// 1. Global CSS can only be defined in a single entrypoint (_app)
// 2. CSS Modules generate scoped class names by default and cannot
//    include Global CSS (:global() selector).
//
// If this warning were to trigger, it'd be unactionable by the user,
// but also not valid -- so we disable it.
ignoreOrder:true})));}const fn=(0,_utils.pipe)(...fns);return fn(config);});exports.css=css;