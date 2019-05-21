var files = ["imgs/jsm_NBA_Players.jpg",
            "imgs/jsm_c2.jpg",
            "imgs/jsm_c8.jpg"
            ];
var imgs = new Array();

for (var i = 0; i < files.length; i++)
{
    imgs[i] = new Image();
    imgs[i].src = files[i];
}

var next = 1;

function change(img) {
    img.src = imgs[next].src;
    next++;
    next %= imgs.length;
}