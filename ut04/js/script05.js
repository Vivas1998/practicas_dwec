let arr = 'http://www.google.es https://duckduckgo.com https://www.bing.com https://www.ecosia.org/ https://www.wolframalpha.com/'.split(' ');
let arr2 = "Google DuckDuckGo Bing Ecosia WolframAlpha".split(' ');
let lis = document.querySelectorAll('li');
for(i = 0;i<arr.length; i++) {
    lis[i].innerHTML = `<a href='${arr[i]}'>${arr2[i]}</a>`;
}