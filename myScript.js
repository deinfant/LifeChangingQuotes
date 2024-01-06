var randomQuote = "";
var randomAuthor = "";
let shownQuotes = [];

const stringArray = [
  "好的開始是成功的一半。",
  "失敗為成功之母。",
  "金錢買不到快樂。",
  "真正的強者，不是沒有眼淚，而是含著淚水奔跑著的人。",
  "生命不息，奮鬥不止。",
  "人生最大的喜悅就是每個人都說你做不到，而你卻完成了它。",
  "心若大了，事情就小了。",
  "最困難的時刻，就在離成功不遠處。",
  "別為模糊不清的未來擔憂，只為真實存在的當下努力。",
  "只要確定自己是往前進的，這條路最後到哪已經不重要了。當你能力累積夠了，自然會明白下一步該怎麼走。",
  "我不怕千萬人阻擋，只怕自己投降。",
  "好好對自己，一輩子沒多長；好好對別人，下輩子不一定能遇上。",
  "我們都擁有時光機，把我們帶回過去的，那叫回憶；把我們帶往未來的，那叫夢想。",
  "成功呈概率分佈，關鍵是你能不能堅持到成功開始呈現的那一刻。",
  "自古成功在嘗試。",
  "成功的信念在人腦中的作用就如鬧鐘，會在你需要時將你喚醒。",
  "沒有口水與汗水，就沒有成功的淚水。",
  "認真是成功的秘訣，粗心是失敗的伴侶",
  ["人們把我的成功，歸因於我的天才；其實我的天才只是刻苦罷了。", "愛因斯坦"],
  ["在一個崇高的目標支持下，不停地工作，即使慢，也一定會獲得成功", "愛因斯坦"],
  ["不要努力成為一個成功者，要努力成為一個有價值的人。", "愛因斯坦"],
  ["想像力比知識更重要。", "愛因斯坦"],
  [
    "我之所以能在科學上成功，最重要的一點就是對科學的熱愛，堅持長期探索。",
    "達爾文"
  ],
  "有冒險而成功的將領，沒有備而勝利的軍隊。",
  "勇敢是成功的兒子",
  "你得先走進世界，才能找到自己的世界",
  "如果賺錢也要別人催，那你一輩子也就這樣了",
  "努力不是表演給別人看，不需要鎂光燈",
  ["有志者事竟成。", "漢光武帝劉秀 "],
  "生活中的過程和結果，都是自己的選擇。",
  "跌倒沒關係，沒人看見就好。",
  "人類最大的悲劇不是死亡，而是沒有掌握有意義的人生。",
  ["我不讓旁人決定我是誰，我要為自己做決定成為誰。", "艾瑪．華森"],
  ["人生最大的榮耀，並不是永遠的勝利，而是屢敗屢戰。", "拿破崙"],
  ["不要畏懼一個人練習一萬種踢腿，而要畏懼他練習同一種踢腿一萬次。", "李小龍"],
  ["時間，就像海綿裡的水，只要願擠，總是還是有的。", "魯迅"],
  ["世上本無路，走得人多了，也就成了路。", "魯迅"],
  ["死者倘不埋在活人的心中,那就真的死掉了。", "魯迅"],
  ["巨大的建築，總是由一木一石疊起來的，我們何妨做做這一木一石呢？我時常做些零碎事，就是為此。", "魯迅"],
  ["在我的後園，可以看見墻外有兩株樹，一株是棗樹，還有一株也是棗樹。", "魯迅"],
  "沒有不進步的人生，只有不進取的人!  ",
  "有時候，你得停一下腳步，等一等心靈，讓心情平和，想一想自己生活中擁有的所有美好的東西。  ",
  "沒有傘的孩子，就必須努力奔跑!",
  "不要等待機會，而是要創造機會。",
  "一個人最大的敵人是自己，沒有完不成的任務，只有失去信心的自己。",
  "只要路是對的，就不怕路遠。",
  "抱最大的希望，盡最大的努力，做最壞的打算。",
  "我們這個世界，從不會給一個傷心的落伍者頒發獎牌。",
  "志在峰巔的攀登者，不會陶醉在沿途的某個腳印之中。",
  "志在山頂的人，不會貪念山腰的風景。",
  "失敗只是更走近成功一步；成功是走過了失敗的路，剩下最後的一條路。",
  "命運如同手中的掌紋，無論多曲折，終掌握在自己手中。  ",
  ["嘗試一些事，遭遇失敗後從中學習，比你什麼事都不做更好。", "馬克．祖克柏"],
  "朝著既定的目標走，就不會迷失。",
  "生活本沒有導演，但我們每個人都像演員一樣，為了合乎劇情而認真地表演著。",
  "不管別人臉上有沒有飯粒，都請你先照照鏡子。",
  "有無目標是成功者與平庸者的根本差別。",
  "如果不想被打倒，只有增加自身的重量。",
  "自卑是更可怕的貧窮。",
  "看起來比登天還難的事，有時卻輕而易舉地做到，差別就在信念。",
  "生活中處處充滿著溫情，只要我們有一雙善於發現的明亮的眼睛。",
  "比你差的人沒放棄，比你好的人仍在努力，你有什麼資格說自己無能為力！  ",
  "如果生活踹了你好多腳，別忘了給它兩個耳光，反抗總比流淚強。  ",
  "沒有一份工作是不辛苦的，也沒有一個年紀是不應該努力的。人生就是取捨，要麼拼，要麼忍。  ",
  ["你不能以一個握緊的拳頭握手。","印地拉·甘地"],
  ["生命是一頓豐厚的宴席，有人卻寧可挨餓。","利奧·巴卡力士"],
  "只用微笑說話的人，才能擔負重擔。",
  "經驗是良師，可惜學費貴。"
];

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("counter").innerHTML = `${shownQuotes.length}/${stringArray.length}`
});
function getRandomString(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getQuote() {
  const randomElement = getRandomString(stringArray);
  const element = document.getElementById("text");
  const button = document.getElementById("new-quote");
  function ChangeText() {
    if (Array.isArray(randomElement)) {
      randomQuote = randomElement[0];
      randomAuthor = randomElement[1];
    } else {
      randomQuote = randomElement;
      randomAuthor = "佚名";
    }
    $("#text").html("「" + randomQuote + "」");
    $("#author").html(randomAuthor);
  }
  button.style.display = "none";
  if (!shownQuotes.includes(randomElement)) {
    shownQuotes.push(randomElement);
  }
  //$(#counter).html(`${shownQuotes.length}/${stringArray.length}`);
  document.getElementById("counter").innerHTML = "${shownQuotes.length}/${stringArray.length}"
  if (element.style.opacity == 0) {
    element.style.opacity = 1;
    ChangeText();
    setTimeout(() => {
      button.style.display = "";
    }, 500);
  } else {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
      ChangeText();
      setTimeout(() => {
        button.style.display = "";
      }, 500);
    }, 500);
  }
}

$(document).ready(function () {
  $("#new-quote").click(function () {
    getQuote();
  });
});
