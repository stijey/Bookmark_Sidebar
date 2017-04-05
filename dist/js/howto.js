/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){var b="mousedown",c="left",d={visible:"visible",reversed:"reversed"},e={body:a("body"),title:a("head > title"),thanks:a("section#thanks"),tutorial:a("section#tutorial"),copyright:a("a#copyright"),close:a("a.close"),startTutorial:a("a.startTutorial")},f=function(){var d="howto_";a("[data-i18n]").forEach(function(b){var c=a(b).attr("data-i18n"),e=0===c.search(/^share_userdata/)?c:d+c;a(b).html(chrome.i18n.getMessage(e).replace(/\[u\](.*)\[\/u\]/,"<span>$1</span>"))});var f=["right"===c?"right":"left","contextmenu"===b?"right":"left"];f.forEach(function(a,b){var c=e.tutorial.children("p.text[data-index='"+(b+1)+"']").text();c=c.replace(/\{1\}/,chrome.i18n.getMessage(d+"tutorial_"+a)),e.tutorial.children("p.text[data-index='"+(b+1)+"']").text(c)});var g=chrome.runtime.getManifest();e.title.text(e.title.text()+" - "+g.short_name)},g=function(){location.href.search(/(\?|\&)tutorial\=1/)===-1?e.thanks.addClass(d.visible):i()},h=function(){e.close.on("click",function(a){a.preventDefault(),window.close()}),e.startTutorial.on("click",function(a){if(a.preventDefault(),e.tutorial.hasClass(d.visible)){var b=location.href.replace(/(\?|\&)tutorial\=1/,"");location.href=b+(b.search(/\?/)===-1?"?":"&")+"tutorial=1"}else e.thanks.removeClass(d.visible),i()})},i=function(){e.tutorial.addClass(d.visible),e.tutorial.attr("data-pos",c);var a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;setTimeout(function(){e.tutorial.children("p.text[data-index='2']").removeClass(d.visible),e.tutorial.children("div#sidebar").addClass(d.visible),e.tutorial.children("div#cursor").attr("data-step",3),setTimeout(function(){e.tutorial.children("p.text[data-index='3']").addClass(d.visible),setTimeout(function(){e.tutorial.children("div#cursor, p.text").removeClass(d.visible),e.tutorial.children("div#mask").addClass(d.visible)},3e3)},1e3)},a)},f=function(){"contextmenu"===b&&e.tutorial.children("div#cursor").addClass(d.reversed),setTimeout(function(){e.tutorial.children("p.text[data-index='2']").addClass(d.visible),e.tutorial.children("div#cursor").attr("data-step",2),a()},500)};setTimeout(function(){e.tutorial.children("p.text[data-index='1']").addClass(d.visible),setTimeout(function(){e.tutorial.children("div#cursor").addClass(d.visible),setTimeout(function(){e.tutorial.children("div#cursor").attr("data-step",1),setTimeout(function(){e.tutorial.children("p.text[data-index='1']").removeClass(d.visible),"mousemove"===b?a(700):f()},1500)},500)},1e3)},500)};!function(){chrome.storage.sync.get(["behaviour","appearance"],function(a){a.behaviour&&a.behaviour.openAction&&(b=a.behaviour.openAction),a.appearance&&a.appearance.sidebarPosition&&(c=a.appearance.sidebarPosition),f(),h(),g()})}()}(jsu);