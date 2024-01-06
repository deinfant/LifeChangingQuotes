var randomQuote = "";
var randomAuthor = "";

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
  ["嘗試一些事，遭遇失敗後從中學習，比你什麼事都不做更好。", "馬克．祖克柏"],
  "朝著既定的目標走，就不會迷失。",
  "生活本沒有導演，但我們每個人都像演員一樣，為了合乎劇情而認真地表演著。",
  "不管別人臉上有沒有飯粒，都請你先照照鏡子。",
  "有無目標是成功者與平庸者的根本差別。",
  "如果不想被打倒，只有增加自身的重量。",
  "自卑是更可怕的貧窮。"
];

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
