const CACHE_NAME = "pos-kpi-pro-v1";


const FILES_TO_CACHE = [

"./",
"./index.html",
"./style.css",
"./manifest.json",

"./js/storage.js",
"./js/calculator.js",
"./js/report.js",
"./js/ui.js",
"./js/app.js"

];



self.addEventListener(
"install",
event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(
cache => {

return cache.addAll(FILES_TO_CACHE);

}

)

);

});





self.addEventListener(
"activate",
event => {

event.waitUntil(

caches.keys()
.then(
keys => {

return Promise.all(

keys.map(

key => {

if(key !== CACHE_NAME){

return caches.delete(key);

}

}

)

);

}

)

);

});





self.addEventListener(
"fetch",
event => {

event.respondWith(

caches.match(event.request)
.then(

response => {

return response || fetch(event.request);

}

)

);

});