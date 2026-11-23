(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = o(r);
    fetch(r.href, a);
  }
})();
const n = {
    url: "https://hanwen119.github.io/",
    name: "潘涵雯",
    brand: "涵雯｜幸福媽媽設計師",
    brandEn: "Home Media Tutor",
    locale: "zh-Hant-TW",
    email: "",
    showEmail: !1,
    line: {
      id: "@360ivkvs",
      primary: "https://lin.ee/w7ZDO7f",
      aliases: ["https://lin.ee/QPteACN", "https://lin.ee/YG93HBB"],
      page: "https://page.line.me/360ivkvs",
    },
    socials: [
      { label: "Threads", href: "https://www.threads.net/@homemediatutor" },
      { label: "Instagram", href: "https://www.instagram.com/hanwen119/" },
      { label: "YouTube", href: "https://www.youtube.com/@HomeMediaTutor" },
      { label: "Facebook", href: "https://www.facebook.com/hanwen119" },
      { label: "TikTok", href: "https://www.tiktok.com/@homemediatutor" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%E6%B6%B5%E9%9B%AF-%E6%BD%98-6135a2184",
      },
    ],
    hero: {
      eyebrow: "涵雯｜幸福媽媽設計師",
      lockedLine:
        "別人教媽媽怎麼賣東西，我幫妳先找出妳能賣什麼\n然後在 90 天內把它做出來",
      subline: "我相信每位媽媽都值得擁有既能陪伴孩子，又能成就自己的幸福事業。",
      support: "AI 和短影音是我陪妳把第一筆做出來的工具。",
      primaryCta: "先做 2 分鐘方向測驗",
      lineCta: "已經知道要找我？加官方 LINE",
    },
    about: {
      lead: "我是涵雯。在成為媽媽以前，我的工作是把很難的東西教到別人做得到。",
      paragraphs: [
        "我在宏華國際做了十年企業內訓。那是中華電信集團的子公司。我從門市銷售走到訓練師，後來負責教材，擔任教材組組長。十年前我第一次碰影片，是為公司做影音教材，當時又重又慢，還得靠高階設備。我也獨力寫過一本 300 頁的產品百科，給第一線的人拿去用。",
        "有一次出差，我在高鐵上接到女兒的電話。她哭著問我什麼時候回來、說她想我。那幾年我以為是自己不夠努力，後來才發現方向錯了，多做只是多累。我想要的不是一份更忙的工作，是一條帶著孩子也走得下去的路。",
        "離開原本的節奏之後，我開始陪跟我一樣的媽媽：先找出能賣的那一件，再在 90 天裡把它做出來。AI 和短影音是這段路上的工具。我考了高雄市政府青年局的新媒體行銷管理師。",
      ],
      credentials: [
        "宏華國際（中華電信集團子公司）十年：門市一路做到副店長，後轉 Training Team 訓練師六年",
        "教材組組長，帶約 10 人，也負責訓練師徵選",
        "高雄市政府青年局認證新媒體行銷管理師",
        "MomPower 媽媽商學院講師",
        "曾任 MomPower 家庭財務規劃師",
      ],
    },
    media: {
      title: "聽我分享",
      lead: "這些是我去別的節目當來賓，聊媽媽怎麼在家開始。",
      episodes: [
        {
          show: "精算媽咪的家計簿",
          note: "從上班族走到在家工作",
          href: "https://open.spotify.com/episode/0Zxzq9ZMlB8pblJbSrijDP",
        },
        {
          show: "神媽底家拉 EP192",
          note: "新手媽媽怎麼開始做短影音",
          href: "https://podcasts.apple.com/tw/podcast/ep192-%E6%96%B0%E6%89%8B%E5%AA%BD%E5%AA%BD%E5%89%AA%E8%BC%AF%E6%8A%80%E5%B7%A7-%E5%B8%B6%E5%AD%A9%E5%AD%90%E4%B9%9F%E8%83%BD%E5%85%BC%E8%81%B7-%E7%9F%AD%E5%BD%B1%E9%9F%B33%E7%A7%92%E5%90%B8%E7%9D%9B%E8%A1%93-ft-%E7%9F%AD%E5%BD%B1%E9%9F%B3%E5%89%AA%E8%BC%AF%E9%81%94%E4%BA%BA-%E6%B6%B5%E9%9B%AF/id1547740428?i=1000705691457",
        },
      ],
      ownVideos: [
        {
          id: "brand-intro",
          title: "幸福媽媽設計師",
          url: "https://www.youtube.com/watch?v=WwbK4-4XE1k",
          visible: !0,
        },
        {
          id: "design-happiness",
          title: "設計幸福",
          url: "https://www.youtube.com/shorts/ivx2FpdRSw8",
          visible: !0,
        },
        {
          id: "kids-money",
          title: "【親子財商】一定要長時間努力工作嗎？",
          url: "https://www.youtube.com/watch?v=_dT0ojcfPQY",
          visible: !1,
        },
      ],
    },
    course: {
      title: "帶娃媽咪致富寶典",
      tagline: "0 到 100，打造在家工作的收入系統",
      priceNow: 5990,
      priceLater: 6980,
      priceNote: "課程建置中優惠價 NT$5,990，全部章節完成後調漲為 NT$6,980",
      totalLessons: 20,
      publishedLessons: 8,
      delivery:
        "課程放在 Notion 學員專區。購買並開通後，可隨時觀看已上架的單元。",
      accessLabel: "永久觀看（課程持續營運期間）。",
      buyMode: "line",
      checkoutUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSek1wkaHJY-XT0y6FKBOaPRMRq6BW9n82QVJjo2J4FLcgoI0w/viewform",
      linePrompt: "我想看致富寶典",
      includes: [
        "已上架的每一堂：短影音、完整文字稿、作業單",
        "作業單可以印出來，或複製到自己的 Google 雲端，用 AI 協助檢查",
        "購買後有 LINE 學員群，邀請只給已開通的學員",
        "加碼方向有「7 大引流模組」，其餘系統陸續上架",
      ],
      chapters: [
        {
          id: "preface",
          label: "前傳",
          title: "",
          lessons: [
            { id: "pre", title: "這門課，妳會成為誰", status: "live" },
          ],
        },
        {
          id: "ch1",
          label: "第一章",
          title: "往自由跨出第一步",
          lessons: [
            { id: "1-1", title: "1-1 妳的生活藍圖", status: "live" },
            { id: "1-2", title: "1-2 賺錢信念建立", status: "live" },
          ],
        },
        {
          id: "ch2",
          label: "第二章",
          title: "找出妳的那一條路",
          lessons: [
            { id: "2-1", title: "2-1 挖礦", status: "live" },
            { id: "2-2", title: "2-2 收斂", status: "live" },
            { id: "2-3", title: "2-3 定位一句話", status: "live" },
          ],
        },
        {
          id: "ch3",
          label: "第三章",
          title: "先做出一個小成果",
          lessons: [
            { id: "3-1", title: "3-1 最小可行性產品", status: "live" },
            { id: "3-2", title: "3-2 找到妳的前三個人", status: "live" },
            { id: "3-3", title: "3-3 收到第一筆", status: "soon" },
          ],
        },
        {
          id: "ch4",
          label: "第四章",
          title: "把不穩變穩",
          lessons: [
            { id: "4-1", title: "4-1 銷售三層次", status: "soon" },
            { id: "4-2", title: "4-2 妳的變現模式", status: "soon" },
            { id: "4-3", title: "4-3 從一筆到重複", status: "soon" },
          ],
        },
        {
          id: "ch5",
          label: "第五章",
          title: "讓對的人穩定看見妳",
          lessons: [
            { id: "5-1", title: "5-1 內容結構", status: "soon" },
            { id: "5-2", title: "5-2 選一個平台先做透", status: "soon" },
            { id: "5-3", title: "5-3 名單思維", status: "soon" },
          ],
        },
        {
          id: "ch6",
          label: "第六章",
          title: "買回妳的時間",
          lessons: [
            { id: "6-1", title: "6-1 行動黃金時段＋流動式工作法", status: "soon" },
            { id: "6-2", title: "6-2 面對外界：老公不支持、被質疑", status: "soon" },
            { id: "6-3", title: "6-3 卡關與自我照顧：續航力", status: "soon" },
          ],
        },
        {
          id: "ch7",
          label: "第七章",
          title: "妳也可以",
          lessons: [
            { id: "7-1", title: "7-1 真實案例", status: "soon" },
            { id: "7-2", title: "7-2 通往自由的下一步地圖（90 天）", status: "soon" },
          ],
        },
      ],
    },
    offers: {
      diagnosis: {
        title: "免費 30 分鐘診斷",
        text: "還說不出自己能賣什麼，就先約一次。名額有限，從官方 LINE 預約。這一次不收費。",
        linePrompt: "我想約免費診斷",
      },
      coaching: {
        enabled: !0,
        showPrice: !1,
        priceLabel: "",
        eyebrow: "候補中",
        title: "90 天做出第一筆",
        text: "陪跑首發班，2027/2/15 開跑，限 6 位，候補中。",
        linePrompt: "陪跑",
        cta: "加 LINE 跟我說「陪跑」",
      },
    },
    b2b: {
      title: "企業／品牌影音合作",
      lead: "這頁給品牌、講師和企業。媽媽要找的自學課和陪跑，在首頁。",
      team: "帶出 20 位媽媽組成的剪輯接案團隊",
      credential: "十年企業訓練師、教材組組長",
      points: [
        "短影音、口播和音檔，依案子報價",
        "範圍、支數和交期，在 LINE 上先講清楚",
      ],
      processTitle: "合作流程",
      process: ["詢問", "回答四個問題", "報價"],
      questions: [
        "母片多長？",
        "素材有沒有標好哪段放哪？",
        "要幾支？需不需要直式＋橫式兩種版本？",
        "腳本由你們提供，還是我寫？",
      ],
      linePrompt: "我想問企業影音合作",
      cta: "加 LINE 詢問報價",
      portfolioTitle: "團隊作品",
      portfolio: [
        { id: "work-1", title: "", url: "", visible: !1 },
        { id: "work-2", title: "", url: "", visible: !1 },
        { id: "work-3", title: "", url: "", visible: !1 },
      ],
    },
    stats: [
      {
        figure: "51.95%",
        label: "2024 年台灣女性勞動力參與率",
        detail: "女性勞動力 541.9 萬人。數字在上升，但還是明顯低於男性。",
        source:
          "行政院主計總處人力資源調查，行政院性別平等處 CEDAW 第 5 次國家報告",
        href: "https://gec.ey.gov.tw/File/512526A3917A30FA?A=C",
      },
      {
        figure: "低 10.79 個百分點",
        label: "家裡有未滿 6 歲孩子的媽媽，較少留在勞動市場",
        detail:
          "113 年 5 月，15 到 49 歲有偶婦女裡，有未滿 6 歲子女者的勞動力參與率是 73.89%，比沒有子女的人低 10.79 個百分點。",
        source:
          "行政院主計總處，113 年人力運用調查報告（表 2，資料時間 113 年 5 月）",
        href: "https://www.stat.gov.tw/News_Content.aspx?n=3105&s=234273",
      },
      {
        figure: "64 萬 843 家",
        label: "2024 年女性中小企業負責人",
        detail:
          "約占中小企業負責人 37.8%，比前一年增加約 1.9 萬家。新設未滿 1 年的企業裡，女性負責人約占 4 成。",
        source: "經濟部中小及新創企業署；中央社引 2024 年中小企業白皮書",
        href: "https://www.cna.com.tw/news/afe/202601110064.aspx",
      },
    ],
    testimonials: [],
    resources: [
      {
        id: "muffin",
        title: "瑪芬口味測驗",
        text: "我原本就在用的 9 題測驗，幫妳看天賦比較靠近哪一種在家工作的路。",
        url: "https://hanwen119.github.io/muffin-quiz/",
        linePrompt: "我測完瑪芬了",
      },
      {
        id: "topics",
        title: "短影音選題神器",
        text: "用關鍵字交叉出題目，並拿到口播稿的提示詞。適合已經想拍、但不知道拍什麼的人。",
        url: "https://hanwen119.github.io/topic-generator/",
        linePrompt: "我用了選題神器",
      },
      {
        id: "proposal",
        title: "在家工作企畫書",
        text: "想先把想法寫成一頁可以拿去談的企畫。跟我說一聲，我用同一個官方 LINE 給妳。",
        url: "",
        linePrompt: "我想要企畫書",
      },
    ],
    faq: [
      {
        q: "《帶娃媽咪致富寶典》現在買，看得到全部嗎？",
        a: "看不到全部。整套預定 20 堂，目前 8 堂已經可以在 Notion 看，其餘是即將上線。購買後會跟著更新。",
      },
      {
        q: "課程放在哪裡？可以看多久？",
        a: "課程放在我自己的 Notion 學員專區，購買後隨時觀看。永久觀看（課程持續營運期間）。每一堂有短影音、逐字稿，以及附 AI 助手的學習單，另外有 LINE 學員群和加碼頁面。",
      },
      {
        q: "為什麼現在是 5,990，之後會變 6,980？",
        a: "因為課還在建置。現在的 5,990 是全部章節完成前的價格，二十堂都上線之後調為 6,980。頁面上沒有倒數計時。",
      },
      {
        q: "上完會不會有一定的收入？",
        a: "不會。我不保證收入。我可以給路徑、示範和回饋，賺不賺得到，還是看妳的時間、作品和客人。",
      },
      {
        q: "免費 30 分鐘診斷怎麼約？",
        a: "加官方 LINE @360ivkvs，跟我說想約免費診斷。名額有限，這一次不收費。",
      },
      {
        q: "品牌或企業要剪影片，要去哪裡問？",
        a: "請看頁尾的「企業／品牌影音合作」。用 LINE 詢問。",
      },
      {
        q: "方向測驗會把我的答案上傳嗎？",
        a: "不會。答案只存在妳這台裝置的瀏覽器裡。",
      },
      {
        q: "我完全沒做過內容，聽得懂嗎？",
        a: "測驗和免費診斷就是給還沒開始的人。自學課也是照自己的步調看，不需要先會剪輯。",
      },
    ],
    leadForm: { enabled: !1, provider: "formspree", endpoint: "" },
    quiz: {
      storageKey: "hmt.quiz.v2",
      title: "2 分鐘，看妳現在該自己看，還是進陪跑候補",
      intro:
        "六題，沒有對錯。做完會給妳一個下一步：免費診斷、自學課，或陪跑候補，並請妳加到同一個官方 LINE。",
      questions: [
        {
          id: "stage",
          text: "妳現在最接近哪一種？",
          options: [
            { id: "start", label: "還沒開始，還在上班或剛起步" },
            { id: "stuck", label: "想做，但說不出自己能賣什麼" },
            { id: "doing", label: "已經有在做，想讓它更穩" },
          ],
        },
        {
          id: "time",
          text: "妳每週大概能固定空出多少時間？",
          options: [
            { id: "fragments", label: "很碎，常常不到 1 小時" },
            { id: "some", label: "大概 3 到 4 小時" },
            { id: "steady", label: "可以再多一點" },
          ],
        },
        {
          id: "goal",
          text: "90 天後，妳最希望手上有什麼？",
          options: [
            { id: "clarity", label: "一句話講得出我能賣什麼" },
            { id: "make", label: "一個真的交出去的小東西" },
            { id: "together", label: "有人陪我把第一筆走完" },
          ],
        },
        {
          id: "start",
          text: "妳比較想怎麼走？",
          options: [
            { id: "self", label: "自己看，照自己的步調" },
            { id: "cohort", label: "一小群一起，有人帶" },
            { id: "talk", label: "先跟我談 30 分鐘" },
          ],
        },
        {
          id: "budget",
          text: "若要為這件事花錢，妳現在比較能接受？",
          options: [
            { id: "free", label: "先免費弄清楚" },
            { id: "course", label: "六千元上下的自學課" },
            { id: "cohort", label: "想等陪跑開跑再決定" },
            { id: "unsure", label: "還不確定" },
          ],
        },
        {
          id: "hope",
          text: "妳最需要先被幫到的是？",
          options: [
            { id: "find", label: "找出我能賣什麼" },
            { id: "make", label: "把它做成一個小東西" },
            { id: "walk", label: "有人盯著我做完" },
          ],
        },
      ],
    },
  },
  l = (e, t = document) => t.querySelector(e),
  L = (e, t = document) => [...t.querySelectorAll(e)];
function s(e) {
  return String(e)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function f(e) {
  return n.line.primary;
}
function h(e) {
  return e ? `加 LINE · ${e}` : `加官方 LINE ${n.line.id}`;
}
function E() {
  const e = n.course,
    t = e.chapters.reduce(
      (d, p) => d + p.lessons.filter((m) => m.status === "live").length,
      0,
    ),
    o = e.chapters.reduce((d, p) => d + p.lessons.length, 0),
    i = o > 0 ? t : e.publishedLessons,
    r = o > 0 ? o : e.totalLessons;
  L("[data-bind]").forEach((d) => {
    if (d.dataset.bind === "hero.lockedLine") {
      const parts = n.hero.lockedLine.split("\n");
      d.innerHTML = parts.map((x) => `<span class="h1-line">${s(x)}</span>`).join("");
      return;
    }
    var w;
    const p = d.dataset.bind,
      m = {
        "hero.lockedLine": n.hero.lockedLine,
        "hero.subline": n.hero.subline,
        "hero.support": n.hero.support,
        "media.lead": (w = n.media) == null ? void 0 : w.lead,
        "course.priceNote": e.priceNote,
        "course.delivery": `${e.delivery}${e.accessLabel}`,
        "course.progress": `20 堂裡，目前 ${i} 堂已可觀看，其餘即將上線。`,
        "line.id": n.line.id,
      };
    m[p] != null && (d.textContent = m[p]);
  });
  const a = l("[data-meter]");
  a && (a.style.width = `${Math.round((i / r) * 100)}%`);
  const u = l("[data-progress-label]");
  u && (u.textContent = `${i} / ${r} 堂已可看`);
}
function k() {
  const e = l("#chapters");
  if (!e) return;
  if (!n.course.chapters.some((o) => o.lessons.length > 0)) {
    e.innerHTML = `<ol class="chapter-map">
      ${n.course.chapters.map((o) => `<li><strong>${s(o.label)}</strong>${o.title ? `　${s(o.title)}` : ""}</li>`).join("")}
    </ol>
    <p class="muted">前傳加上七章，一共 ${n.course.totalLessons} 堂。目前 ${n.course.publishedLessons} 堂已可在 Notion 看，其餘即將上線。每一堂會標成「可觀看」或「即將上線」。現在不能把七章都當成已經能看完。</p>`;
    return;
  }
  e.innerHTML = n.course.chapters
    .map((o) => {
      const i = o.lessons
          .map((u) => {
            const d = u.status === "live";
            return `<li class="lesson">
            <span>${s(u.title)}</span>
            <span class="badge ${d ? "live" : "soon"}">${d ? "可觀看" : "即將上線"}</span>
          </li>`;
          })
          .join(""),
        r = "",
        a = i
          ? `<ul class="lesson-list">${i}</ul>`
          : '<p class="muted">這一章尚未公開課名，也不代表現在可以整章看完。</p>';
      return `<article class="chapter"><h3>${s(o.label)}${o.title ? `｜${s(o.title)}` : ""}</h3>${r}${a}</article>`;
    })
    .join("");
}
function x() {
  const e = l("#listen-list");
  e &&
    n.media &&
    (e.innerHTML = n.media.episodes
      .map(
        (i) =>
          `<a href="${s(i.href)}" target="_blank" rel="noopener noreferrer">${s(i.show)}<span>${s(i.note)}</span></a>`,
      )
      .join(""));
  const t = l("#own-videos");
  if (!t || !n.media) return;
  const o = (n.media.ownVideos || []).filter((i) => i.visible && i.url);
  t.innerHTML = o
    .map(
      (i) => `<figure class="quote">
        <p class="result-kicker">我自己的作品</p>
        <h3>${s(i.title)}</h3>
        <div class="player">${$(i.url, i.title)}</div>
      </figure>`,
    )
    .join("");
}
function A() {
  const e = l("#b2b");
  if (!e || !n.b2b) return;
  const t = n.b2b,
    o = t.points.map((a) => `<li>${s(a)}</li>`).join(""),
    q4 = t.questions.map((a) => `<li>${s(a)}</li>`).join(""),
    steps = t.process
      .map(
        (a, k) =>
          `<li class="step"><span class="step-no">${k + 1}</span><div><strong>${s(a)}</strong>${k === 1 ? `<ul class="include-list">${q4}</ul>` : ""}</div></li>`,
      )
      .join("");
  e.innerHTML = `
    <div class="b2b-head">
      <div>
        <p class="eyebrow">${s(t.title)}</p>
        <h1>${s(t.team)}</h1>
        <p class="b2b-cred">${s(t.credential)}</p>
        <p class="lede">${s(t.lead)}</p>
        <ul class="include-list">${o}</ul>
      </div>
      <figure class="b2b-photo">
        <img src="./photos/b2b-hero.jpg" width="665" height="1182" alt="潘涵雯，長髮，黑色上衣，雙手交叉" fetchpriority="high">
      </figure>
    </div>
    <h2>${s(t.processTitle)}</h2>
    <ol class="steps">${steps}</ol>
    <div class="stack">
      <a class="btn" href="${s(f())}">${s(t.cta)}</a>
      <a class="text-link" href="./index.html">回媽媽的首頁</a>
    </div>
    <section id="b2b-portfolio" class="b2b-portfolio" hidden></section>
  `;
  N();
}
function N() {
  const e = l("#b2b-portfolio");
  if (!e) return;
  const t = (n.b2b.portfolio || []).filter((o) => o.visible && o.url);
  if (!t.length) {
    ((e.innerHTML = ""), (e.hidden = !0));
    return;
  }
  ((e.hidden = !1),
    (e.innerHTML = `<h2>${s(n.b2b.portfolioTitle)}</h2>
    <div class="quotes">${t
      .map(
        (o) => `<figure class="quote">
          ${o.title ? `<h3>${s(o.title)}</h3>` : ""}
          <div class="player">${$(o.url, o.title || "團隊作品")}</div>
        </figure>`,
      )
      .join("")}</div>`));
}
function B() {
  const e = l("#includes");
  e &&
    (e.innerHTML = n.course.includes.map((t) => `<li>${s(t)}</li>`).join(""));
}
function v(e, t) {
  const o = l(t);
  if (!o) return;
  const i = n.testimonials.filter(
    (r) => r.published && r.placement === e && r.quote,
  );
  o.innerHTML = i.map(q).join("");
}
function q(e) {
  const t = e.videoUrl
    ? `<div class="player">${$(e.videoUrl, e.name)}</div>`
    : "";
  return `<figure class="quote">
    <p>「${s(e.quote)}」</p>
    ${t}
    <footer>
      <strong>${s(e.name)}</strong>
      ${e.role ? ` · ${s(e.role)}` : ""}
      ${e.date ? ` · ${s(e.date)}` : ""}
      <br>
      <a href="${s(e.sourceUrl)}" target="_blank" rel="noopener noreferrer">${s(e.sourceLabel)}</a>
    </footer>
  </figure>`;
}
function $(e, t) {
  const o = s(t || "學員"),
    i = String(e).match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/,
    );
  if (i)
    return `<iframe src="https://www.youtube-nocookie.com/embed/${i[1]}" title="${o}的短片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  const r = String(e).match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return r
    ? `<iframe src="https://player.vimeo.com/video/${r[1]}" title="${o}的短片" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
    : /\.(mp4|webm)(\?|$)/i.test(e)
      ? `<video controls playsinline preload="metadata" src="${s(e)}"></video>`
      : `<a href="${s(e)}" target="_blank" rel="noopener noreferrer">看${o}的短片</a>`;
}
function P() {
  const e = l("#resources");
  e &&
    (e.innerHTML = n.resources
      .map((t) => {
        const o = t.url || f(t.linePrompt),
          i = !!t.url,
          r = i ? "打開這個工具" : h(t.linePrompt);
        return `<article class="resource">
        <h3>${s(t.title)}</h3>
        <p>${s(t.text)}</p>
        <p><a href="${s(o)}" ${i ? 'target="_blank" rel="noopener noreferrer"' : ""}>${s(r)}</a></p>
        <p class="muted">做完都回到同一個官方 LINE ${s(n.line.id)}。</p>
      </article>`;
      })
      .join(""));
}
function T() {
  const e = l("#faq");
  e &&
    (e.innerHTML = n.faq
      .map(
        (t) => `<details>
        <summary>${s(t.q)}</summary>
        <p>${s(t.a)}</p>
      </details>`,
      )
      .join(""));
}
function z() {
  const e = l("#stats");
  e &&
    (e.innerHTML = n.stats
      .map(
        (t) => `<article class="stat">
        <div class="figure">${s(t.figure)}</div>
        <h3>${s(t.label)}</h3>
        <p>${s(t.detail)}</p>
        <p><a href="${s(t.href)}" target="_blank" rel="noopener noreferrer">${s(t.source)}</a></p>
      </article>`,
      )
      .join(""));
}
function I() {
  const e = l("#coaching-slot");
  if (!e) return;
  const t = n.offers.coaching;
  if (!t) {
    ((e.innerHTML = ""), (e.hidden = !0));
    return;
  }
  const o = "";
  ((e.hidden = !1),
    (e.innerHTML = `<article class="offer" id="coaching">
    <p class="price-flag">${s(t.eyebrow)}</p>
    <h3>${s(t.title)}</h3>
    <p>${s(t.text)}</p>
    ${o}
    <a class="btn ghost" href="${s(f())}">${s(t.cta)}</a>
  </article>`));
}
function S() {
  const e = l("#course-buy");
  e && ((e.href = f()), (e.textContent = h(n.course.linePrompt)));
  const t = l("#course-alt");
  (t && ((t.hidden = !1), (t.href = n.course.checkoutUrl)),
    L("[data-line-prompt]").forEach((o) => {
      const i = o.dataset.linePrompt;
      ((o.href = f()),
        o.dataset.lineText === "label" && (o.textContent = h(i)));
    }));
}
const c = { index: 0, answers: {} };
function M() {
  try {
    const e = localStorage.getItem(n.quiz.storageKey);
    if (!e) return;
    const t = JSON.parse(e);
    t && t.answers && (c.answers = t.answers);
  } catch {}
}
function g(e = {}) {
  try {
    localStorage.setItem(
      n.quiz.storageKey,
      JSON.stringify({
        answers: c.answers,
        updatedAt: new Date().toISOString(),
        ...e,
      }),
    );
  } catch {}
}
function C(e) {
  return e.start === "talk" || e.budget === "free" || e.budget === "unsure"
    ? y()
    : e.start === "cohort" ||
        e.budget === "cohort" ||
        e.goal === "together" ||
        e.hope === "walk"
      ? H()
      : e.start === "self" || e.budget === "course"
        ? F()
        : y();
}
function F() {
  return {
    id: "course",
    kicker: "比較適合的下一步",
    title: "先把在家工作排成一條看得到的路",
    body: `以妳的回答，自學課比再收集更多資訊更合適。《${n.course.title}》放在 Notion，現在 ${n.course.publishedLessons} 堂可以看，另外 ${n.course.totalLessons - n.course.publishedLessons} 堂即將上線。${n.course.priceNote}。這不是收入保證。`,
    linePrompt: n.course.linePrompt,
    button: h(n.course.linePrompt),
  };
}
function H() {
  const e = n.offers.coaching;
  return {
    id: "coaching",
    kicker: "比較適合的下一步",
    title: e.title,
    body: `${e.text}加 LINE 後跟我說「${e.linePrompt}」，我會把候補方式告訴妳。`,
    linePrompt: e.linePrompt,
    button: e.cta || h(e.linePrompt),
  };
}
function y() {
  return {
    id: "diagnosis",
    kicker: "先不要急著買",
    title: "先用 30 分鐘把能賣的那一件說清楚",
    body: "以妳現在的回答，比較合適的是免費 30 分鐘診斷。這一次不收費，名額有限。談完再決定要自己看自學課，還是加入陪跑候補。",
    linePrompt: n.offers.diagnosis.linePrompt,
    button: h(n.offers.diagnosis.linePrompt),
  };
}
function b() {
  const e = l("#quiz-app");
  if (!e) return;
  const t = n.quiz.questions,
    o = t[c.index],
    i = c.answers[o.id];
  e.innerHTML = `
    <p class="progress-label"><span>第 ${c.index + 1} 題，共 ${t.length} 題</span><span>不會上傳</span></p>
    <div class="track" aria-hidden="true"><span style="width:${(c.index / t.length) * 100}%"></span></div>
    <h3 id="quiz-question">${s(o.text)}</h3>
    <div class="options" role="radiogroup" aria-labelledby="quiz-question">
      ${o.options.map((r) => `<button type="button" class="option${i === r.id ? " selected" : ""}" role="radio" aria-checked="${i === r.id}" data-option="${s(r.id)}">${s(r.label)}</button>`).join("")}
    </div>
    <div class="quiz-nav">
      <button type="button" class="btn ghost" data-quiz="back" ${c.index === 0 ? "disabled" : ""}>上一題</button>
      <button type="button" class="btn" data-quiz="next" ${i ? "" : "disabled"}>${c.index === t.length - 1 ? "看結果" : "下一題"}</button>
    </div>
  `;
}
function D(e) {
  const t = l("#quiz-app"),
    o = j();
  t.innerHTML = `
    <p class="result-kicker">${s(e.kicker)}</p>
    <h3>${s(e.title)}</h3>
    <p>${s(e.body)}</p>
    <div class="stack">
      <a class="btn full" href="${s(f(e.linePrompt))}">${s(e.button)}</a>
      <a class="btn ghost full" href="${s(n.resources[0].url)}" target="_blank" rel="noopener noreferrer">去做瑪芬口味測驗</a>
    </div>
    ${o}
    <p style="margin-top:16px"><button type="button" class="btn ghost" data-quiz="restart">重新做一次</button></p>
  `;
  const i = l("#lead-form");
  i && i.addEventListener("submit", O);
}
function j(e) {
  return "";
}
async function O(e) {
  e.preventDefault();
  const t = e.currentTarget,
    o = l("#lead-status"),
    i = Object.fromEntries(new FormData(t).entries());
  ((i.answers = c.answers), (o.textContent = "送出中…"));
  try {
    if (n.leadForm.provider !== "apps-script") {
      const r = new FormData();
      if (
        (r.set("name", i.name),
        r.set("email", i.email),
        r.set("result", i.result),
        r.set("answers", JSON.stringify(i.answers)),
        !(
          await fetch(n.leadForm.endpoint, {
            method: "POST",
            body: r,
            headers: { Accept: "application/json" },
          })
        ).ok)
      )
        throw new Error("form failed");
      o.textContent = "收到了。我之後用這個信箱跟妳聯絡。";
    }
    t.reset();
  } catch {
    o.textContent = "這次沒送成功。請改加 LINE，一樣可以找到我。";
  }
}
function Q(e) {
  const t = e.target.closest("[data-option]"),
    o = e.target.closest("[data-quiz]");
  if (t) {
    const i = n.quiz.questions[c.index];
    ((c.answers[i.id] = t.dataset.option), g(), b());
    return;
  }
  if (o) {
    if (o.dataset.quiz === "back") {
      ((c.index = Math.max(0, c.index - 1)), b());
      return;
    }
    if (o.dataset.quiz === "restart") {
      ((c.index = 0), (c.answers = {}), g({ resultId: "" }), b());
      return;
    }
    if (o.dataset.quiz === "next") {
      const i = n.quiz.questions[c.index];
      if (!c.answers[i.id]) return;
      if (c.index < n.quiz.questions.length - 1) {
        ((c.index += 1), b());
        return;
      }
      const r = C(c.answers);
      (g({ resultId: r.id }), D(r));
    }
  }
}
function R() {
  const e = document.querySelector(".dock"),
    t = document.querySelector(".hero");
  if (!e || !t) return;
  if (!("IntersectionObserver" in window)) {
    const o = () => {
      e.hidden = t.getBoundingClientRect().bottom > 0;
    };
    (o(), document.addEventListener("scroll", o, { passive: !0 }));
    return;
  }
  e.hidden = !0;
  new IntersectionObserver(
    (o) => {
      o.forEach((i) => {
        e.hidden = i.isIntersecting || i.boundingClientRect.top > 0;
      });
    },
    { threshold: 0 },
  ).observe(t);
}
function _() {
  const e = l(".nav-toggle"),
    t = l("#nav");
  !e ||
    !t ||
    (e.addEventListener("click", () => {
      const o = t.classList.toggle("is-open");
      (e.setAttribute("aria-expanded", String(o)),
        document.body.classList.toggle("nav-open", o));
    }),
    t.addEventListener("click", (o) => {
      o.target.closest("a") &&
        (t.classList.remove("is-open"),
        e.setAttribute("aria-expanded", "false"),
        document.body.classList.remove("nav-open"));
    }));
}
function J() {
  (E(),
    k(),
    B(),
    x(),
    A(),
    v("short-video", "#short-video-quotes"),
    v("general", "#testimonial-list"),
    P(),
    T(),
    z(),
    S(),
    I(),
    M(),
    b());
  const e = l("#quiz-app");
  (e && e.addEventListener("click", Q), _(), R());
  const t = l("#year");
  t && (t.textContent = String(new Date().getFullYear()));
}
J();
