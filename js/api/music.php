<?php
header("Access-Control-Allow-Origin: https://zhaoguohui09820.github.io");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// 你的音乐数据
$musicData = '[{"name":"\u6211\u8bb0\u5f97","url":"","song_id":1974443814,"cover":"https:\/\/p3.music.126.net\/9bVOooAY6U6EJLzpv1Fikw==\/109951169682871673.jpg?param=300y300","author":"\u8d75\u96f7"},{"name":"\u661f\u6cb3\u4e07\u91cc","url":"","song_id":1843704418,"cover":"https:\/\/p3.music.126.net\/QYOtbVhmJ-jpPzCPWqjZUw==\/109951165965398413.jpg?param=300y300","author":"Rom\u90a2\u9510"},{"name":"End Of The Night","url":"","song_id":1324159296,"cover":"https:\/\/p3.music.126.net\/4EAAiYmVFk_DBwaDnGoBHQ==\/109951165985216901.jpg?param=300y300","author":"Danny Avila"},{"name":"Loch Lomond","url":"","song_id":464377736,"cover":"https:\/\/p3.music.126.net\/XhIga1Tkfk04fkQwAVRN2w==\/18878614648931316.jpg?param=300y300","author":"Marcus Warner"},{"name":"Something Just LIke This","url":"","song_id":1369794434,"cover":"https:\/\/p3.music.126.net\/CfGaRgzTYFte-jT_vUINhQ==\/109951168102436928.jpg?param=300y300","author":"One Voice Children\'s Choir"},{"name":"New Light","url":"","song_id":29045492,"cover":"https:\/\/p3.music.126.net\/eBC_4IAukmqLLa0PiOI-qg==\/6646547791017831.jpg?param=300y300","author":"Mark Petrie"},{"name":"Positive Outlook","url":"","song_id":27946926,"cover":"https:\/\/p3.music.126.net\/FZX7XAjsmEPGyVOqm4H7aQ==\/109951166361039007.jpg?param=300y300","author":"David Hoffner"},{"name":"Love Story","url":"","song_id":32465166,"cover":"https:\/\/p3.music.126.net\/pcRSwkToiexKJGDhcaeJsg==\/109951167526293019.jpg?param=300y300","author":"Edward Maya"},{"name":"New Light No Drum Beat","url":"","song_id":29045495,"cover":"https:\/\/p3.music.126.net\/eBC_4IAukmqLLa0PiOI-qg==\/6646547791017831.jpg?param=300y300","author":"Mark Petrie"}]';

echo $musicData;
?>