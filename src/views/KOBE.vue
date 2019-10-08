<template>
  <div class="kobe">
    <h2>kobe forever heart</h2>
    <ul class="kobe__ul">
      <li class="kobe_li" v-for="(item, index) in kobe" :key="index">
        <p class="en">{{ item.en }}</p>
        <p class="cn">{{ item.cn }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    kobe: [
      {
        cn: "在你想要放弃的时候，想想是什么让你当初坚持走到了这里。",
        en:
          "When you want to give up, think about what made you insist on coming here."
      },
      {
        cn: "我现在所做的，是为了追求更加完美！",
        en: "What I'm doing now is to pursue perfection"
      },
      {
        cn: "如果现在湖人是泰坦尼克，我会和他一起沉下去",
        en: "If the Lakers are Titanic now, I will sink with him"
      },
      {
        cn:
          "低头不是认输，是要看清自己的路；仰头不是骄傲，是要看见自己的天空。",
        en:
          "To bow down is not to admit defeat, but to see clearly its own way; to look up is not pride but to see one's own sky"
      },
      {
        cn: "如果你要成功，那么你要牺牲许多",
        en: "If you want to succeed, you have to sacrifice a lot"
      },
      {
        cn: "坚持走出自己的梦想之路",
        en: "Insist on stepping out of your dream"
      },
      {
        cn: "如果你害怕失败，你就会失败",
        en: "If you are afraid of failure, you will fail"
      },
      {
        cn: "我最大的敌人是自己",
        en: "My biggest enemy is myself"
      },
      {
        cn: "扑捉猎物的猛兽又怎么在意细小的虫子",
        en: " How can the beast that prey on prey care about tiny insects?"
      },
      {
        cn: "得到一切，必须付出一切、征服一切",
        en: "To get everything, we must give everything and conquer everything."
      },
      {
        cn: "要抓住一切机会，向所有人证明你自己，证明你能够迎接挑战",
        en:
          "We must seize every opportunity to prove ourselves to everyone and prove that you can meet challenges"
      },
      {
        cn: "恨我，因为我渴望你伟大，而伟大，需要不惜一切代价",
        en:
          "Hate me, because I yearn for your greatness, greatness, at all costs"
      },
      {
        cn: "我能接受失败，但无法接受放弃",
        en: "I can accept failure, but I cannot accept giving up"
      },
      {
        cn: "第二名就意味着你是头号输家！",
        en: "Second means you are the number one loser"
      },
      {
        cn: "英雄是一时的，但传奇是一世的",
        en: "Heroes are temporary, but legend is one"
      },
      {
        cn: "我所做的，只是不停的重复",
        en: "What I do is just keep repeating"
      },
      {
        cn:
          "我知道我自己打得像坨屎一样，但你们不知道我为了让自己打得不那么像坨屎，付出了多少努力",
        en:
          "I know I play like shit myself, but you don't know how much effort I have made to make myself not so like shit"
      },
      {
        cn: "你，不是我的对手",
        en: "You are not my opponent"
      },
      {
        cn:
          "当我退役的时候，我希望回头看我走过的路，每一天，我都付出了我的全部！",
        en:
          "When I retire, I hope to look back at the way I have traveled. Every day, I have paid all of my money!"
      },
      {
        cn: "压力、挑战，这一切消极的东西都是我能够取得成功的催化剂",
        en:
          "Pressure, challenge, all these negative things are catalysts for my success"
      },
      {
        cn: "我的听力越来越差了，在每个球场都听不见嘘声",
        en:
          "My hearing is getting worse and worse. I can't hear boos on every court"
      },
      {
        cn: "我不想做下一个迈克尔-乔丹，我只想做科比-布莱恩特",
        en:
          "I don't want to be the next Michael Jordan. I just want to be Kobe Bryant"
      },
      {
        cn: "如果你害怕失败，那意味着你已经输了",
        en: "If you are afraid of failure, it means that you have already lost"
      },
      {
        cn: "总有一个人要赢的，那为什么不能是我",
        en: "There is always one person who will win. Why can't it be me"
      },
      {
        cn: "我知道每天凌晨四点洛杉矶的样子",
        en: "I know the appearance of Losangeles at four in the morning"
      },
      {
        cn: "抓住今天，勿信明天",
        en: "Seize the day and trust not tomorrow"
      },
      {
        cn: "即使是耶酥，也会有人对他怀恨在心，我不需要解释什么",
        en:
          "Even Jesus, there are people who hate him. I don't need to explain anything"
      },
      {
        cn: "我不想做第二个乔丹，我只想做第一个科比",
        en:
          "I don't want to be the second Jordan. I just want to be the first Kobe"
      },
      {
        cn: "如果我感觉一些东西不对，我会呆在那不停地训练，直到我做到对为止",
        en:
          "If I feel something wrong, I will stay there and train until I can do it right"
      },
      {
        cn: "猎豹捕猎时会在意小昆虫吗？",
        en: "Do cheetahs care about small insects when hunting?"
      },
      {
        cn: "朋友来来往往，总冠军的旗帜却一直在那里，随风飘荡",
        en:
          "Friends come and go, but the flag of the championship is always there, floating with the wind"
      },
      {
        cn: "朋友总是来来往往，但冠军之旗永不落",
        en:
          "Friends always come and go, but the champion's flag never goes down"
      },
      {
        cn: "肯定有人要赢的，那个人为什么不能是我？",
        en: "Somebody must win. Why can't that person be me?"
      }
    ]
  })
};
</script>

<style lang="stylus" scoped>
.kobe
  .kobe_ul
    display inline-block
    width 90%
    .kobe_li
      margin 10px
      .cn, .en
        text-align left
</style>
