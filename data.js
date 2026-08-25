/* ============================================================================
   WEMBA 52 SF · 코호트 생존 대시보드 데이터
   ----------------------------------------------------------------------------
   Term 2 (Fall 2026) · 구성 개편판 · 2026-08-23
   · 섹션 순서 = 지금 준비 → 다가오는 일정 → 수업 일정표 → 과목 → Block Week → 자료 맵 → 디너
   · What's New 는 메인에서 빼고 '업데이트 내역'(changelog)에만 둡니다
   · 모든 시각은 PT 기준. Canvas 가 ET·UTC 로 보여주는 값은 PT 로 환산해 적었습니다
   · 3언어 필수: kr / en / cn  (하나라도 빠지면 그 언어에서 빈칸)
   · 수정할 때 meta.lastUpdated 를 반드시 함께 바꾸세요
   ========================================================================== */

const DATA = {

  meta: {
    cohort: "WEMBA 52",
    lastUpdated: "2026-08-23",
    author:   "Sally",
    tzLabel:  "PT",
    cheerOverride: { date:"", sub:{ kr:"", en:"", cn:"" } },
  },

  /* ── 학기 시작 축하 배너 ──────────────────────────────────────────
     until 날짜가 지나면 자동으로 사라집니다. 다 쓰면 kickoff 를 지우세요. */
  kickoff: {
    until: "2026-08-29",
    svg: `<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Term 2 시작"> <rect x="0" y="0" width="680" height="270" rx="12" fill="#f8f1e2"/> <g stroke="#2b2320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <!-- ── 색종이 (핑크·그린만) ── --> <g stroke="none"> <rect x="96"  y="34" width="9" height="13" rx="2" fill="#f2a9c4" transform="rotate(-22 100 40)"/> <rect x="168" y="22" width="8" height="12" rx="2" fill="#7ba05b" transform="rotate(18 172 28)"/> <rect x="242" y="46" width="9" height="12" rx="2" fill="#f2a9c4" transform="rotate(35 246 52)"/> <rect x="318" y="26" width="8" height="13" rx="2" fill="#7ba05b" transform="rotate(-14 322 32)"/> <rect x="392" y="52" width="9" height="12" rx="2" fill="#f2a9c4" transform="rotate(28 396 58)"/> <rect x="466" y="30" width="8" height="12" rx="2" fill="#7ba05b" transform="rotate(-30 470 36)"/> <rect x="540" y="56" width="9" height="13" rx="2" fill="#f2a9c4" transform="rotate(12 544 62)"/> <rect x="602" y="34" width="8" height="12" rx="2" fill="#7ba05b" transform="rotate(-20 606 40)"/> <circle cx="134" cy="62" r="3.4" fill="#7ba05b"/> <circle cx="286" cy="70" r="3" fill="#f2a9c4"/> <circle cx="440" cy="74" r="3.4" fill="#7ba05b"/> <circle cx="576" cy="94" r="3" fill="#f2a9c4"/> </g> <!-- ── Sally (정본 스펙 v3 · 만세 포즈) ── --> <g transform="translate(38,26)"> <ellipse cx="90" cy="92" rx="22" ry="24" fill="#3a2e28"/> <path d="M107 102 C118 108 122 124 117 140 C112 128 108 116 103 110 Z" fill="#3a2e28"/> <circle cx="107" cy="107" r="2.6" fill="#f2a9c4" stroke-width="1.1"/> <ellipse cx="90" cy="102" rx="18" ry="20" fill="#fdf6ea"/> <path d="M90 82 L90 87" fill="none" stroke-width="1.3"/> <path d="M76 96 C78 94 82 93 85 94" fill="none" stroke-width="1.3"/> <path d="M95 94 C98 93 102 94 104 96" fill="none" stroke-width="1.3"/> <!-- 눈웃음 + 열정 입 --> <path d="M79 104 C81 107 85 107 87 104" fill="none" stroke-width="1.6"/> <path d="M93 104 C95 107 99 107 101 104" fill="none" stroke-width="1.6"/> <ellipse cx="90" cy="115" rx="3.6" ry="4" fill="#e8927c" stroke-width="1.3"/> <circle cx="77" cy="110" r="3" fill="#f4b8c8" stroke="none" opacity="0.75"/> <circle cx="103" cy="110" r="3" fill="#f4b8c8" stroke="none" opacity="0.75"/> <!-- 몸통 + 목걸이 --> <path d="M72 128 C62 132 60 148 62 178 L118 178 C120 148 118 132 108 128 C100 124 80 124 72 128 Z" fill="#7ba05b"/> <path d="M84 128 C87 133 93 133 96 128" fill="none" stroke="#c9a227" stroke-width="1.2"/> <circle cx="90" cy="134" r="1.6" fill="#c9a227" stroke="none"/> <!-- 양팔 만세 --> <path d="M70 133 C58 124 50 110 46 98" fill="none" stroke="#7ba05b" stroke-width="6.5"/> <circle cx="44" cy="95" r="4.2" fill="#fdf6ea" stroke-width="1.4"/> <path d="M110 133 C122 124 130 110 134 98" fill="none" stroke="#7ba05b" stroke-width="6.5"/> <circle cx="136" cy="95" r="4.2" fill="#fdf6ea" stroke-width="1.4"/> <!-- 다리 + 신발 --> <path d="M80 178 L78 216 M100 178 L102 216" fill="none"/> <ellipse cx="74" cy="220" rx="8" ry="3.6" fill="#2b2320" stroke="none"/> <ellipse cx="106" cy="220" rx="8" ry="3.6" fill="#2b2320" stroke="none"/> </g> <!-- ── 새 노트 두 권 (새 학기) ── --> <g transform="translate(230,150)"> <rect x="0" y="18" width="86" height="62" rx="6" fill="#fffdf6" stroke-width="2.2"/> <path d="M14 18 L14 80" fill="none" stroke-width="1.6"/> <rect x="26" y="0" width="86" height="62" rx="6" fill="#f2a9c4" stroke-width="2.2"/> <path d="M40 0 L40 62" fill="none" stroke-width="1.6"/> <path d="M56 22 L96 22 M56 34 L88 34" fill="none" stroke="#fffdf6" stroke-width="2.4"/> </g> <!-- ── 라벨 ── --> <text x="470" y="150" font-family="Georgia, 'Times New Roman', serif" font-weight="bold" font-size="40" fill="#2b2320" stroke="none" text-anchor="middle">Term 2</text> <text x="470" y="184" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="20" fill="#c14e78" stroke="none" text-anchor="middle">here we go</text> </g> </svg>`,
    sub: {
      kr:"Term 2 가 시작됐습니다. 첫 수업 주말은 **8/28–29**, 준비할 것은 바로 아래에 정리해 뒀어요. 이번 학기도 잘해봐요 🙌",
      en:"Term 2 has started. The first class weekend is **Aug 28–29**, and everything to prepare is right below. Here is to a good term 🙌",
      cn:"第二学期开始了。首个上课周末为 **8/28–29**,需要准备的内容都在下方。这学期一起加油 🙌" },
  },

  /* ── 임시 안내 카드 ────────────────────────────────────────────────
     until 날짜가 지나면 자동으로 사라집니다. 다 쓰면 notice 를 지우세요. */
  notice: {
    until: "2026-08-29",
    title: { kr:"🔢 Term 2 섹션 배정 (추정)", en:"🔢 Term 2 section assignments (derived)", cn:"🔢 第二学期分班(推算)" },
    body: {
      kr:"Term 2 섹션은 Term 1 과 **다르게 재편**됐습니다. **러닝팀은 그대로** 유지돼요. **본인 섹션을 먼저 확인**하시고, 아래 수업 일정표에서 해당 열을 보세요.",
      en:"Term 2 sections were **reshuffled** relative to Term 1. **Learning teams are unchanged.** **Check which section you are in first**, then read the matching column in the schedule below.",
      cn:"第二学期分班相较第一学期**重新编排**。**学习小组维持不变。** 请**先确认本人班级**,再对照下方课程表的相应列。" },
    groups: [
      { color:"#8e8a99",
        label:{ kr:"Section 1", en:"Section 1", cn:"第1班" },
        names: "Abhi Shah · Adi Gupta · Akshay Narkar · Amar Shah · Angela Pei · Asheema Wanchoo · Avinash Nayak · Blake Yarbrough · Chinmay Kulkarni · Dustin Morris · Elyse Yang · Erick Delgado · Grace Alexander · Janos Kovacs · Jessica Son · Jinyan Lu · Josh Frost · Kaniksha Desai · Kk Ananthanarayanan · Kunfeng Wu · Luis Valencia Fermin · Mark Adler · Matthew Altamirano · Melody Pai · Nika Chilewich · Noah Wu · Philipp Nonnast · Roger Jin · Rudy Novak · Shardul Kachare · Shishir Jani · Stephanie Demo · Susie Deng · Tracy Shaw · Yan Zhu · Yang Ye · Yedige Tlegenov · Yvonne Wang" },
      { color:"#ffb3c7",
        label:{ kr:"Section 2", en:"Section 2", cn:"第2班" },
        names: "Abash Lal · Alex Zhang · Alok Sharma · Asjad Husain · Cade Mellies · Chelsey Liu · Cory Harris · Emily Chen · Esther Chow · Ethan Pollack · Evelyn Drake · Frank Liu · James Dowd · Jasmine Nazari · Jason Schulze · Jeff Weinfeld · Jennifer Matias · Jin Sung · Jk Venkatesh · Joanna Barron · Jorge Espino · Julia Schroeder · Kayden Lee · Kirill Sydykov · Mandy Chen · Miley Nguyen · Mishel Sikder · Neil Patel · Patrick Everley · Ravi Teja Nallapu · Riley Wynne · Ryan Perez · Sai Sravya Polavarapu · Sally Jeong · Sarah Brown · Seokjun Ko · Sudarshan Salunkhe" },
    ],
    foot: {
      kr:"강의실은 과목 기준 고정 — **LGST 6120 = Room 612 · FNCE 6130 = Room 615.** 두 섹션 합쳐 **75명**입니다.\n\n⚠️ **이 명단은 공식 발표가 아닙니다.** Course Match 의 본인 섹션 정보와 Canvas 과목 사이트의 수강생 목록을 대조해 **역산한 추정치**입니다. Canvas 는 등록명(본명), Course Match 는 통용명을 쓰기 때문에 같은 사람이 다르게 보일 수 있고, 그 과정에서 잘못 분류된 분이 있을 수 있습니다. **틀린 곳을 발견하시면 언제든 알려주세요. 바로 고치겠습니다.**\n\n이 카드는 **8/29 지나면 자동으로 사라집니다.**",
      en:"Rooms are fixed by course — **LGST 6120 = Room 612, FNCE 6130 = Room 615.** **75 students** across the two sections.\n\n⚠️ **This is not an official roster.** It was **derived** by cross-referencing your own section in Course Match against the student list on the Canvas course site. Canvas shows registered (legal) names while Course Match shows preferred names, so the same person can appear differently, and someone may have ended up in the wrong column. **If you spot an error, please tell me and I will fix it right away.**\n\nThis card **disappears automatically after Aug 29.**",
      cn:"教室按课程固定 — **LGST 6120 = Room 612 · FNCE 6130 = Room 615。** 两班合计 **75人**。\n\n⚠️ **本名单非官方发布。** 系将 Course Match 中本人班级信息与 Canvas 课程网站的学生名单**比对推算**而得。Canvas 使用注册名(本名),Course Match 使用惯用名,同一人可能显示不同,推算中或有归类错误。**若发现错误请随时告知,我会立即更正。**\n\n本卡片**8/29 后自动消失**。" }
  },

  /* ── 지금 준비가 필요한 것 (최상단 요약 카드) ─────────────────────── */
  prep: {
    window: { kr:"이번 주말 8/28–29 수업 대비", en:"For the Aug 28–29 class weekend", cn:"为 8/28–29 上课周末准备" },
    note: {
      kr:"🔴 **LGST 6120 지정 리딩이 이번 주말에만 10편입니다.** 교수 메일에는 Values Paper 와 'Spinning Wheels' 만 언급됐지만 **실라버스에는 금 3편 · 토 7편**이 지정돼 있고, **토요일에 클로즈드북 Quiz #1(배점 10%)** 이 있습니다.",
      en:"🔴 **LGST 6120 assigns ten readings for this weekend alone.** The professor's email mentioned only the Values Paper and 'Spinning Wheels', but **the syllabus lists three for Friday and seven for Saturday**, and there is a **closed-book Quiz #1 on Saturday worth 10%**.",
      cn:"🔴 **仅本周末,LGST 6120 就指定十篇阅读。** 教授邮件仅提及 Values Paper 与 'Spinning Wheels',但**大纲列出周五三篇、周六七篇**,且**周六有闭卷 Quiz #1,占10%**。" },
    cards: [
      {
        course:"LGST 6120", color:"#ffb3c7",
        when:{ kr:"금 8/28 · Personal Responsibility", en:"Fri Aug 28 · Personal Responsibility", cn:"周五 8/28 · Personal Responsibility" },
        badge:{ kr:"리딩 3편", en:"3 readings", cn:"3篇阅读" },
        lines:[
          { icon:"📝", text:{ kr:"**Values Paper 제출** (400~600단어)", en:"**Submit the Values Paper** (400–600 words)", cn:"**提交 Values Paper**(400~600词)" },
                     sub:{ kr:"Canvas ▸ Assignments · 첫 수업 전까지 · 배점 5% · 성실성만 평가", en:"Canvas ▸ Assignments · before the first class · 5% · graded on sincerity", cn:"Canvas ▸ Assignments · 首堂课前 · 占5% · 仅评真诚度" } },
          { icon:"📄", text:{ kr:"McCoy, *The Parable of the Sadhu*", en:"McCoy, *The Parable of the Sadhu*", cn:"McCoy, *The Parable of the Sadhu*" } },
          { icon:"📄", text:{ kr:"Donaldson & Werhane, *Introduction to Ethical Reasoning*", en:"Donaldson & Werhane, *Introduction to Ethical Reasoning*", cn:"Donaldson & Werhane, *Introduction to Ethical Reasoning*" },
                     sub:{ kr:"윤리 추론의 기본 틀 — 이후 토론의 공용 언어", en:"The basic framework, and the shared vocabulary for later sessions", cn:"伦理推理基本框架,后续讨论的共同语言" } },
          { icon:"📄", text:{ kr:"Greg Smith, *Why I Am Leaving Goldman Sachs* (NYT)", en:"Greg Smith, *Why I Am Leaving Goldman Sachs* (NYT)", cn:"Greg Smith, *Why I Am Leaving Goldman Sachs*(NYT)" },
                     sub:{ kr:"짧습니다", en:"Short", cn:"篇幅短" } },
          { icon:"📂", text:{ kr:"리딩 위치 = Course Materials @ Penn Libraries · Study.Net", en:"Readings live in Course Materials @ Penn Libraries and Study.Net", cn:"阅读材料在 Course Materials @ Penn Libraries 与 Study.Net" } },
        ],
      },
      {
        course:"LGST 6120", color:"#ffb3c7",
        when:{ kr:"토 8/29 · Corporate Responsibility", en:"Sat Aug 29 · Corporate Responsibility", cn:"周六 8/29 · Corporate Responsibility" },
        badge:{ kr:"리딩 7편", en:"7 readings", cn:"7篇阅读" },
        lines:[
          { icon:"📄", text:{ kr:"**Friedman**, *Social Responsibility of Business* (NYT, 1970)", en:"**Friedman**, *The Social Responsibility of Business* (NYT, 1970)", cn:"**Friedman**, *Social Responsibility of Business*(NYT, 1970)" },
                     sub:{ kr:"⭐ 이걸 먼저 — 나머지 4편이 전부 이 글에 대한 응답입니다", en:"⭐ Read this first — four of the others are responses to it", cn:"⭐ 请先读这篇 — 其余四篇均为对此文的回应" } },
          { icon:"📄", text:{ kr:"Stout (Brookings) · Hart & Zingales (ProMarket) · Bebchuk & Tallarita (WSJ)", en:"Stout (Brookings) · Hart & Zingales (ProMarket) · Bebchuk & Tallarita (WSJ)", cn:"Stout(Brookings)· Hart & Zingales(ProMarket)· Bebchuk & Tallarita(WSJ)" },
                     sub:{ kr:"주주 우선론 반론 → 수정판 → 이해관계자 자본주의 비판 순", en:"Counterargument, then a revised version, then a critique of stakeholder capitalism", cn:"反驳 → 修正版 → 对利益相关者资本主义的批判" } },
          { icon:"📄", text:{ kr:"Henning, *When Money Gets in the Way of Corporate Ethics* (NYT)", en:"Henning, *When Money Gets in the Way of Corporate Ethics* (NYT)", cn:"Henning, *When Money Gets in the Way of Corporate Ethics*(NYT)" } },
          { icon:"📕", text:{ kr:"Tayan, **Wells Fargo Cross-Selling Scandal** (Stanford)", en:"Tayan, **The Wells Fargo Cross-Selling Scandal** (Stanford)", cn:"Tayan, **Wells Fargo Cross-Selling Scandal**(Stanford)" },
                     sub:{ kr:"케이스 — 토론에서 계속 인용됩니다", en:"The case the discussion keeps returning to", cn:"讨论中反复引用的案例" } },
          { icon:"📄", text:{ kr:"\"Spinning Wheels\" 핸드아웃 — **읽기만**, 풀 필요 없음", en:"The \"Spinning Wheels\" handout — **read only**, no need to solve it", cn:"\"Spinning Wheels\" 讲义 — **只读不做**" },
                     sub:{ kr:"Canvas ▸ Files ▸ `Exercise - Spinning Wheels.docx`", en:"Canvas ▸ Files ▸ `Exercise - Spinning Wheels.docx`", cn:"Canvas ▸ Files ▸ `Exercise - Spinning Wheels.docx`" } },
        ],
        flag:{ kr:"⚠️ **Quiz #1 · 클로즈드북 · 배점 10%** — 위 리딩 전체가 범위입니다. 교수 원문 *\"I will not test you on minutiae\"* — 세부가 아니라 논점을 잡고 가세요. 실라버스 안에서 날짜가 8/28·8/29 로 엇갈리니 **금요일 아침까지** 준비해두면 안전합니다",
              en:"⚠️ **Quiz #1 · closed book · 10%** — covering all of the above. In his words, *\"I will not test you on minutiae\"*, so hold the arguments, not the details. The syllabus contradicts itself on the date (Aug 28 vs 29), so **be ready by Friday morning**",
              cn:"⚠️ **Quiz #1 · 闭卷 · 占10%** — 范围为上述全部阅读。教授原文 *\"I will not test you on minutiae\"*,请抓论点而非细节。大纲日期在 8/28 与 8/29 间不一致,**建议周五上午前准备好**" },
      },
      {
        course:"FNCE 6130", color:"#0b051d",
        when:{ kr:"금 8/28 오전 · 토 8/29 오후 · Landry", en:"Fri Aug 28 AM · Sat Aug 29 PM · Landry", cn:"周五上午 · 周六下午 · Landry" },
        badge:{ kr:"확인 필요", en:"Check again", cn:"需再确认" },
        lines:[
          { icon:"⏳", text:{ kr:"**Canvas 사이트가 아직 안 열렸습니다** — 사전 리딩 지정 여부를 확인할 수 없습니다", en:"**The Canvas site is not open yet** — no way to confirm whether readings were assigned", cn:"**Canvas 网站尚未开放** — 无法确认是否指定预习" },
                     sub:{ kr:"개강 직전에 열리는 경우가 많습니다. 목요일 밤에 한 번 더 보세요", en:"These often open right before the first session. Check again Thursday night", cn:"通常开课前才开放,请周四晚再确认" } },
          { icon:"📕", text:{ kr:"교재 *Macroeconomics* 6판 (Charles Jones)", en:"Textbook: *Macroeconomics*, 6th ed (Charles Jones)", cn:"教材 *Macroeconomics* 第6版(Charles Jones)" },
                     sub:{ kr:"ISBN 9781324063612 · 하드카피·ebook 둘 다 가능", en:"ISBN 9781324063612 · hardcopy or ebook", cn:"ISBN 9781324063612 · 纸质与电子版均可" } },
        ],
      },
      {
        course:"STAT 6130", color:"#8e8a99",
        when:{ kr:"9/11 시작 · Waterman", en:"Starts Sep 11 · Waterman", cn:"9/11 开始 · Waterman" },
        badge:{ kr:"교재만", en:"Books only", cn:"仅需教材" },
        lines:[
          { icon:"📕", text:{ kr:"**BAUR 지금 주문** — *Business Analysis Using Regression*", en:"**Order BAUR now** — *Business Analysis Using Regression*", cn:"**立即订购 BAUR** — *Business Analysis Using Regression*" },
                     sub:{ kr:"ISBN 9780387983561 · ⚠️ **하드카피만 있고 ebook 이 없습니다** — 배송 기간 고려", en:"ISBN 9780387983561 · ⚠️ **hardcopy only, no ebook** — allow for shipping", cn:"ISBN 9780387983561 · ⚠️ **仅纸质版,无电子书** — 请预留邮寄时间" } },
          { icon:"📗", text:{ kr:"나머지 2권은 ebook 가능 — BBS 9780387983547 · Statistics for Business 3판 9780134497167", en:"The other two are available as ebooks — BBS 9780387983547 · Statistics for Business 3rd ed 9780134497167", cn:"另两本有电子版 — BBS 9780387983547 · Statistics for Business 第3版 9780134497167" } },
          { icon:"🗂", text:{ kr:"기출 세트가 이미 Canvas 에 올라와 있습니다", en:"A full past-exam set is already on Canvas", cn:"历年试题全套已上传 Canvas" },
                     sub:{ kr:"Exam 1·2·3 문제·정답·분포 + 샘플 시험 · 학기 초에 난이도를 가늠해두면 편합니다", en:"Exams 1–3 with solutions and distributions, plus a sample exam · worth a look early", cn:"Exam 1·2·3 试题·答案·分布 + 样卷 · 学期初浏览有助把握难度" } },
        ],
      },
    ],
  },

  /* ── 업데이트 내역 (헤더 링크로만 표시) ─────────────────────────────── */
  changelog: [
    { date:"2026-08-23", items:[
      { kr:"🔴 **LGST 6120 리딩 10편 · Quiz #1 발견** — 실라버스 원문을 열어보니 교수 메일에 없던 내용이 있었습니다. **금 3편 · 토 7편**의 지정 리딩과, **이번 주말 클로즈드북 Quiz #1(배점 10%)**. 최상단 '지금 준비가 필요한 것' 섹션을 새로 만들어 전부 나열했습니다",
        en:"🔴 **Found ten LGST 6120 readings and Quiz #1** — the syllabus contains what the professor's email did not: **three readings for Friday, seven for Saturday**, plus a **closed-book Quiz #1 this weekend worth 10%**. A new top section, 'Prepare before class', now lists all of them",
        cn:"🔴 **发现 LGST 6120 十篇阅读与 Quiz #1** — 教学大纲中有教授邮件未提及的内容:**周五三篇、周六七篇**指定阅读,以及**本周末闭卷 Quiz #1(占10%)**。已新增顶部「现在需要准备的」栏目全部列出" },
      { kr:"🔄 **구성 개편** — What's New 는 메인에서 빼고 이 업데이트 내역으로만 옮겼습니다 · 액션 체크리스트는 삭제 · 대신 **'지금 준비가 필요한 것'** 을 최상단에 신설했습니다(체크 가능, 각자 브라우저에만 저장)",
        en:"🔄 **Layout change** — What's New has moved out of the main page into this changelog · the action checklist is gone · in its place, **'Prepare before class'** now sits at the top, with check-off saved in your own browser",
        cn:"🔄 **版面调整** — What's New 移出主页,仅保留于本更新记录 · 删除行动清单 · 改为顶部新增**「现在需要准备的」**,可勾选,仅存于本人浏览器" },
      { kr:"🔄 **Term 2 전면 개편** — Term 1(ACCT·BEPP·MGMT) 데이터를 전부 걷어내고 가을학기 6과목으로 교체 · 과목 카드·마감·수업 주말·Canvas 맵·블록위크를 새로 썼습니다",
        en:"🔄 **Rebuilt for Term 2** — all Term 1 content (ACCT, BEPP, MGMT) retired and replaced with the six Fall courses · course cards, deadlines, class weekends, the Canvas map and the block-week list are all new",
        cn:"🔄 **第二学期全面改版** — 移除第一学期(ACCT·BEPP·MGMT)全部内容,替换为秋季六门课 · 科目卡·截止·上课周末·Canvas 地图·Block Week 均已重写" },
      { kr:"📅 **가을 수업 주말 8회 확정** — 8/28–29 · 9/11 · 9/25 · 10/8 · 10/23 · 11/6 · 12/4 · 12/18. ⭐ **11/7~12/3 사이 4주가 통째로 빕니다**",
        en:"📅 **Eight class weekends locked** — Aug 28–29 · Sep 11 · Sep 25 · Oct 8 · Oct 23 · Nov 6 · Dec 4 · Dec 18. ⭐ **A four-week gap opens between Nov 7 and Dec 3**",
        cn:"📅 **秋季八个上课周末已确定** — 8/28–29 · 9/11 · 9/25 · 10/8 · 10/23 · 11/6 · 12/4 · 12/18。⭐ **11/7~12/3 空出整整四周**" },
      { kr:"🔢 **섹션 재편** — Term 2 배정은 Term 1 과 다릅니다. 과목 코드 끝자리가 섹션 번호(Wharton Reports ▸ My Class Lists) · 러닝팀은 유지",
        en:"🔢 **Sections reshuffled** — Term 2 differs from Term 1. The last digit of each course code is your section (Wharton Reports ▸ My Class Lists) · learning teams stay",
        cn:"🔢 **分班重编** — 第二学期与第一学期不同。课程代码末位即班号(Wharton Reports ▸ My Class Lists)· 学习小组不变" },
      { kr:"⏰ **블록위크 마감을 과목별로 표시했습니다** — Course Match 시스템은 12/19까지 열려 있지만 개별 ADD 마감은 10/5 · 11/23 · 12/7 로 훨씬 앞섭니다. 서울 개최였던 2건은 이미 마감(7/27)됐습니다",
        en:"⏰ **Block-week deadlines are now marked per course** — Course Match stays open until Dec 19, but individual ADD dates fall on Oct 5, Nov 23 and Dec 7. The two Seoul courses already closed on Jul 27",
        cn:"⏰ **Block Week 截止已按课标注** — Course Match 开放至 12/19,但各课 ADD 分别为 10/5 · 11/23 · 12/7。首尔两门已于 7/27 截止" },
    ]},
  ],

  /* ── 마감·일정 ─────────────────────────────────────────────────────── */
  deadlines: [
    {
      date:"2026-08-24T23:59", type:"paper", course:"MGMT", hard:true, new:true,
      title:{ kr:"MGMT 6130 팀 최종 페이퍼 (Term 1 마지막)", en:"MGMT 6130 final team paper (last of Term 1)", cn:"MGMT 6130 团队期末论文(第一学期最后一项)" },
      detail:{ kr:"⚠️ **월요일 밤 11:59 PM PT**입니다. Canvas 에는 8/25 2:59 AM ET 로 표시되는데 **같은 시각** — 화요일 아침으로 착각하기 쉽습니다. 31점 · **online upload = 팀에서 한 명만 제출**",
              en:"⚠️ **Monday 11:59 PM PT.** Canvas shows 2:59 AM ET on Aug 25, which is **the same moment** — easy to misread as Tuesday morning. 31 points · **online upload, so one submitter per team**",
              cn:"⚠️ **周一 11:59 PM PT。** Canvas 显示 8/25 2:59 AM ET,**为同一时刻** — 易误读为周二上午。31分 · **在线上传,每组一人提交**" },
    },
    {
      date:"2026-08-26", type:"registration", hard:true, new:true,
      title:{ kr:"MGMT 8920 Commercialization of Academic Science 지원 마감", en:"MGMT 8920 Commercialization of Academic Science — applications close", cn:"MGMT 8920 Commercialization of Academic Science 报名截止" },
      detail:{ kr:"Mack Institute · 1.0 CU · 수요일 15:30–17:00 하이브리드 · 첫 수업도 8/26 · Penn 연구자들의 초기 기술 9건 중 선호도를 적어 지원 · **WEMBA 지원 가능** · 문의 goutorov@wharton.upenn.edu",
              en:"Mack Institute · 1.0 CU · Wednesdays 3:30–5:00 PM hybrid · first class also Aug 26 · rank your preferences among nine early-stage Penn technologies · **WEMBA students may be considered** · goutorov@wharton.upenn.edu",
              cn:"Mack Institute · 1.0 CU · 周三 15:30–17:00 混合式 · 首堂课同为 8/26 · 在宾大九项早期技术中填写志愿 · **WEMBA 可申请** · goutorov@wharton.upenn.edu" },
    },
    {
      date:"2026-08-28T16:00", type:"paper", course:"LGST", hard:true, new:true,
      title:{ kr:"LGST 6120 Individual Values Paper 제출", en:"LGST 6120 Individual Values Paper due", cn:"LGST 6120 Individual Values Paper 提交" },
      detail:{ kr:"400~600단어 · Canvas **Assignments 탭** · **배점 5%** · 평가는 완성도와 성실성만(가치 자체는 평가하지 않음) · ⚠️ **섹션 2 는 LGST 가 금요일 오후 2시**라 금요일 오전까지 올려두는 게 안전합니다",
              en:"400–600 words · Canvas **Assignments tab** · **5% of the grade** · graded on completion and sincerity, not on the values themselves · ⚠️ **Section 2 has LGST at 2:00 PM Friday**, so post it Friday morning",
              cn:"400~600词 · Canvas **Assignments 标签** · **占5%** · 仅评完成度与真诚度,不评价价值观 · ⚠️ **第2班周五下午2点上 LGST**,建议周五上午前提交" },
    },
    {
      date:"2026-08-29", type:"quiz", course:"LGST", hard:true, new:true,
      title:{ kr:"LGST 6120 Quiz #1 (클로즈드북 · 배점 10%)", en:"LGST 6120 Quiz #1 (closed book · 10%)", cn:"LGST 6120 Quiz #1(闭卷 · 占10%)" },
      detail:{ kr:"이번 주말 리딩 **10편 전체**가 범위 · 교수 원문 *\"I will not test you on minutiae\"* — 세부보다 논점 · ⚠️ **실라버스 안에서 날짜가 엇갈립니다**(과제 항목 8/28 · 수업 일정표 8/29). 금요일 아침까지 준비해두면 어느 쪽이든 안전합니다 · 두 번째 퀴즈는 9/26",
              en:"Covers **all ten readings** from this weekend · *\"I will not test you on minutiae\"* — arguments over details · ⚠️ **the syllabus contradicts itself** (assignments say Aug 28, the schedule says Aug 29). Be ready by Friday morning and either is fine · the second quiz is Sep 26",
              cn:"范围为本周末**全部十篇阅读** · 教授原文 *\"I will not test you on minutiae\"* — 重论点而非细节 · ⚠️ **大纲内部日期不一致**(作业部分 8/28,课程表 8/29)。周五上午前准备好即可 · 第二次测验为 9/26" },
    },
    {
      date:"2026-08-29", type:"session", new:true,
      title:{ kr:"Len Lodish 어드바이징 (토, 예약제)", en:"Advising with Len Lodish (Sat, by appointment)", cn:"Len Lodish 咨询(周六,预约制)" },
      detail:{ kr:"Wharton SF 캠퍼스 창립 부학장이자 현 Venture Initiation Program(VIP) 공동리더 · 예약제 · 신청 방법은 Canvas 공지 참조 · 창업·벤처 관심 있으면 흔치 않은 기회",
              en:"Founding Vice Dean of the Wharton SF campus, now co-Leader of the Venture Initiation Program · by appointment · signup details in the Canvas announcement · a rare slot if ventures interest you",
              cn:"Wharton SF 校区创始副院长、现 VIP 联合负责人 · 预约制 · 报名方式见 Canvas 公告 · 对创业感兴趣者机会难得" },
    },
    {
      date:"2026-09-25", type:"session",
      title:{ kr:"WEMBA Careers · Networking Workshop", en:"WEMBA Careers · Networking Workshop", cn:"WEMBA Careers · Networking Workshop" },
      detail:{ kr:"주말 일정표의 Save the Date 항목 · 세부 시간 미공지",
              en:"A Save the Date on the weekend schedule · time not yet announced",
              cn:"周末日程表的 Save the Date · 具体时间未公布" },
    },
    {
      date:"2026-09-26", type:"quiz", course:"LGST",
      title:{ kr:"LGST 6120 Quiz #2 (클로즈드북 · 배점 10%)", en:"LGST 6120 Quiz #2 (closed book · 10%)", cn:"LGST 6120 Quiz #2(闭卷 · 占10%)" },
      detail:{ kr:"Unit II(Law) 주말 리딩이 범위 · 9/25 금요일 수업 = *Disclosures, Obligations to Customers and Employees* (\"Exit Interview\" 핸드아웃 · Williams v. Walker-Thomas Furniture · FTC v. Amazon 소장 등)",
              en:"Covers the Unit II (Law) weekend readings · the Sep 25 Friday session is *Disclosures, Obligations to Customers and Employees* (the \"Exit Interview\" handout, Williams v. Walker-Thomas Furniture, the FTC v. Amazon complaint and more)",
              cn:"范围为 Unit II(Law)周末阅读 · 9/25 周五课程为 *Disclosures, Obligations to Customers and Employees*(\"Exit Interview\" 讲义 · Williams v. Walker-Thomas Furniture · FTC v. Amazon 起诉书等)" },
    },
    {
      date:"2026-10-05T09:00", type:"registration", hard:true,
      title:{ kr:"10월 블록위크 ADD 마감 (9 AM PT)", en:"October block weeks — ADD deadline (9 AM PT)", cn:"10月 Block Week ADD 截止(9 AM PT)" },
      detail:{ kr:"10/12–15 사이클 전 과목 공통 · ⚠️ 이 시각 이후 추가 등록 불가",
              en:"Applies to the whole Oct 12–15 cycle · ⚠️ no adds after this moment",
              cn:"适用于 10/12–15 全部课程 · ⚠️ 此后不可加选" },
    },
    {
      date:"2026-10-13T09:00", type:"registration", hard:true,
      title:{ kr:"10월 블록위크 DROP·P/F 마감 (9 AM PT)", en:"October block weeks — DROP / P-F deadline (9 AM PT)", cn:"10月 Block Week DROP·P/F 截止(9 AM PT)" },
      detail:{ kr:"⭐ **수업 둘째 날 아침입니다.** 10/12 첫날 들어보고 판단해도 늦지 않아요 · ⚠️ **P/F 로 들으면 전공(major)에 인정되지 않습니다**",
              en:"⭐ **This is the morning of day two.** You can sit through Oct 12 and still decide · ⚠️ **P/F courses do not count toward a major**",
              cn:"⭐ **这是第二天上午。** 可先上完 10/12 再决定 · ⚠️ **P/F 不计入专业(major)**" },
    },
    {
      date:"2026-10-27", type:"paper", course:"LGST", hard:true,
      title:{ kr:"LGST 6120 개인 최종 페이퍼 (배점 25%)", en:"LGST 6120 individual final paper (25%)", cn:"LGST 6120 个人期末论文(占25%)" },
      detail:{ kr:"과제 내용은 **마지막 수업일 전에 공지**된다고 실라버스에 명시돼 있습니다 · LGST 는 10/10 에 끝나므로 종강 후 제출입니다",
              en:"The prompt will be **posted before the last day of class**, per the syllabus · LGST ends Oct 10, so this lands after the course finishes",
              cn:"大纲注明题目将于**最后一堂课前公布** · LGST 于 10/10 结课,故为课后提交" },
    },
    {
      date:"2026-11-23T09:00", type:"registration", hard:true,
      title:{ kr:"11/30–12/3 블록위크 ADD 마감 (9 AM PT)", en:"Nov 30 – Dec 3 block weeks — ADD deadline (9 AM PT)", cn:"11/30–12/3 Block Week ADD 截止(9 AM PT)" },
      detail:{ kr:"OIDD 6140 Innovation(SFO) · HCMG 8600(PHL) · ⚠️ **Innovation 은 대기 74명**이고 **Audit 도 불가** — 이 시각까지 자리가 안 나면 수강 불가",
              en:"OIDD 6140 Innovation (SFO) · HCMG 8600 (PHL) · ⚠️ **Innovation has 74 waitlisted** and **audit is not allowed** — no seat by this moment means you are out",
              cn:"OIDD 6140 Innovation(SFO)· HCMG 8600(PHL)· ⚠️ **Innovation 候补74人**且**不可旁听** — 到此时刻无空位即无法修读" },
    },
    {
      date:"2026-12-07T09:00", type:"registration", hard:true,
      title:{ kr:"12/14–16 블록위크 ADD 마감 (9 AM PT)", en:"Dec 14–16 block week — ADD deadline (9 AM PT)", cn:"12/14–16 Block Week ADD 截止(9 AM PT)" },
      detail:{ kr:"LGST 6420 Accountable AI(SFO, Werbach) · ⚠️ **대기 41명**, **Audit 불가** · 가을 마지막 블록위크",
              en:"LGST 6420 Accountable AI (SFO, Werbach) · ⚠️ **41 waitlisted**, **no audit** · the last block week of the fall",
              cn:"LGST 6420 Accountable AI(SFO, Werbach)· ⚠️ **候补41人**,**不可旁听** · 秋季最后一门" },
    },
    {
      date:"2026-12-19T09:00", type:"registration",
      title:{ kr:"Course Match 가을학기 시스템 종료 (9 AM PT)", en:"Course Match closes for the fall term (9 AM PT)", cn:"Course Match 秋季学期关闭(9 AM PT)" },
      detail:{ kr:"시스템 자체가 닫히는 시각 · ⚠️ **개별 과목 마감은 이보다 훨씬 앞섭니다**",
              en:"When the system itself closes · ⚠️ **individual course deadlines land much earlier**",
              cn:"系统本身关闭的时刻 · ⚠️ **各课截止要早得多**" },
    },
  ],

  /* ── 과목 카드 ─────────────────────────────────────────────────────── */
  courses: [
    {
      code:"LGST 6120", color:"#ffb3c7",
      name:{ kr:"Responsibility in Business · Brian Feinstein", en:"Responsibility in Business · Brian Feinstein", cn:"Responsibility in Business · Brian Feinstein" },
      headline:{ kr:"🚀 8/28 개강 · 1st Half (8/28–10/10) · 0.5 CU · 교재 없음", en:"🚀 Starts Aug 28 · first half (Aug 28 – Oct 10) · 0.5 CU · no textbook", cn:"🚀 8/28 开课 · 上半学期(8/28–10/10)· 0.5 CU · 无教材" },
      points:[
        { new:true, kr:"👤 **Brian D. Feinstein** · Associate Professor, Legal Studies & Business Ethics · bdfeinst@wharton.upenn.edu · **오피스아워: 수업 당일 SF 현장에서 세션 직전·직후**, 그 외 평일은 Zoom(필라델피아 연구실) — 메일로 예약",
          en:"👤 **Brian D. Feinstein** · Associate Professor, Legal Studies & Business Ethics · bdfeinst@wharton.upenn.edu · **office hours: in SF on class days, immediately before or after sessions**; otherwise Zoom from Philadelphia on most weekdays, by email",
          cn:"👤 **Brian D. Feinstein** · Legal Studies & Business Ethics 副教授 · bdfeinst@wharton.upenn.edu · **办公时间:上课日在 SF,课前课后**;其余工作日经邮件预约 Zoom(费城办公室)" },
        { new:true, kr:"📊 **배점** — Values Paper 5% · **인클래스 퀴즈 20%(각 10%)** · **Class Engagement 25%** · 그룹 발표 25% · 최종 페이퍼 25%. 참여 비중이 25%라 결석·침묵의 비용이 큽니다",
          en:"📊 **Grading** — Values Paper 5% · **in-class quizzes 20% (10% each)** · **class engagement 25%** · group presentation 25% · final paper 25%. Engagement at 25% means silence is expensive",
          cn:"📊 **评分** — Values Paper 5% · **课堂测验 20%(各10%)** · **课堂参与 25%** · 小组展示 25% · 期末论文 25%。参与占25%,缺席与沉默代价不小" },
        { new:true, kr:"⚠️ **인클래스 퀴즈 2회 (8/29 · 9/26), 클로즈드북.** 리딩을 실제로 읽었는지 확인하는 시험이라고 교수가 명시했습니다 — *\"evidence that you have grappled with the core concepts addressed in the readings\"*",
          en:"⚠️ **Two closed-book in-class quizzes (Aug 29 and Sep 26).** The professor states they check that you actually engaged with the readings — *\"evidence that you have grappled with the core concepts addressed in the readings\"*",
          cn:"⚠️ **两次闭卷课堂测验(8/29 · 9/26)。** 教授明确其目的是检验是否真正阅读 — *\"evidence that you have grappled with the core concepts addressed in the readings\"*" },
        { new:true, kr:"🎤 **그룹 발표(25%)** — 마지막 수업 세션에서 **기업 스캔들이나 무책임 사례**를 분석하고 교훈을 정리 · 원칙적으로 조원 전원 동일 점수",
          en:"🎤 **Group presentation (25%)** — in the final sessions, analyse **a corporate scandal or failure to act responsibly** and draw out lessons · all members receive the same grade barring extremes",
          cn:"🎤 **小组展示(25%)** — 最后几堂课分析**企业丑闻或不负责任案例**并总结教训 · 原则上组员同分" },
        { new:true, kr:"📄 **최종 페이퍼 10/27 제출(25%)** — 과제 내용은 마지막 수업일 전에 공지 · 3개 모듈 구성: **Ethics → Law → Politics**",
          en:"📄 **Final paper due Oct 27 (25%)** — the prompt is posted before the last day of class · the course runs in three modules: **Ethics, Law, Politics**",
          cn:"📄 **期末论文 10/27 提交(25%)** — 题目于最后一堂课前公布 · 课程分三模块:**Ethics → Law → Politics**" },
        { kr:"🤖 **수업 중 AI 사용 금지**가 실라버스에 명시돼 있습니다",
          en:"🤖 The syllabus states that **AI may not be used during class sessions**",
          cn:"🤖 大纲明确规定**课堂上不得使用 AI**" },
        { kr:"📂 자료가 **세 곳으로 갈립니다** — 리딩 = Course Materials @ Penn Libraries · Study.Net / 연습문제 핸드아웃 = Files 폴더",
          en:"📂 Materials sit in **three places** — readings in Course Materials @ Penn Libraries and Study.Net, exercise handouts in Files",
          cn:"📂 资料分**三处** — 阅读在 Course Materials @ Penn Libraries 与 Study.Net,练习讲义在 Files" },
      ],
    },
    {
      code:"FNCE 6130", color:"#0b051d",
      name:{ kr:"Macroeconomics & the Global Economy · Anthony Landry", en:"Macroeconomics & the Global Economy · Anthony Landry", cn:"宏观经济与全球经济环境 · Anthony Landry" },
      headline:{ kr:"🚀 8/28 개강 · Full Term (8/28–12/5) · 1.0 CU · 📕 교재 필요", en:"🚀 Starts Aug 28 · full term (Aug 28 – Dec 5) · 1.0 CU · 📕 textbook required", cn:"🚀 8/28 开课 · 全学期(8/28–12/5)· 1.0 CU · 📕 需教材" },
      points:[
        { new:true, kr:"⏳ **8/23 기준 Canvas 코스 사이트가 아직 열리지 않았습니다.** 실라버스·사전 리딩을 확인할 수 없는 상태입니다 — 목요일 밤에 다시 확인하세요",
          en:"⏳ **As of Aug 23 the Canvas site is not open**, so there is no way to see the syllabus or any pre-readings — check again Thursday night",
          cn:"⏳ **截至 8/23,Canvas 网站尚未开放**,无法查看大纲与预习材料 — 请周四晚再确认" },
        { new:true, kr:"📕 **교재: *Macroeconomics* 6판 · Charles Jones · ISBN 9781324063612** — 하드카피·ebook 둘 다 가능",
          en:"📕 **Textbook: *Macroeconomics*, 6th ed · Charles Jones · ISBN 9781324063612** — hardcopy or ebook",
          cn:"📕 **教材:*Macroeconomics* 第6版 · Charles Jones · ISBN 9781324063612** — 纸质或电子版均可" },
        { kr:"🗓 섹션 2 기준 8/28–29: **금 9:30–12:30 · 토 1:00–4:00, Room 615**",
          en:"🗓 Section 2 on Aug 28–29: **Fri 9:30–12:30 and Sat 1:00–4:00, Room 615**",
          cn:"🗓 第2班 8/28–29:**周五 9:30–12:30,周六 1:00–4:00,Room 615**" },
        { kr:"⏳ 1.0 CU 로 가을 내내 이어지며 **12/5 에 끝납니다.** 12/18 마지막 주말에는 이 과목이 없어요",
          en:"⏳ A 1.0 CU course running through **Dec 5**. It does not appear on the final weekend of Dec 18",
          cn:"⏳ 1.0 CU 贯穿秋季,至 **12/5** 结束。12/18 最后周末无此课" },
      ],
    },
    {
      code:"STAT 6130", color:"#8e8a99",
      name:{ kr:"Regression Analysis for Management · Richard Waterman", en:"Regression Analysis for Management · Richard Waterman", cn:"回归分析 · Richard Waterman" },
      headline:{ kr:"📅 9/11 시작 · 12/19까지 · 1.0 CU · 📕 교재 3권 · ✅ Canvas 열림", en:"📅 Starts Sep 11 · through Dec 19 · 1.0 CU · 📕 three books · ✅ Canvas open", cn:"📅 9/11 开始 · 至 12/19 · 1.0 CU · 📕 三本教材 · ✅ Canvas 已开放" },
      points:[
        { new:true, kr:"👤 **Richard Waterman** · 108 Steinberg Conference Center · waterman@wharton.upenn.edu · ⚠️ **모든 메일 제목에 \"WEMBA WEST\" 를 넣어달라**고 실라버스에 명시돼 있습니다 · TA 는 아직 미정(TBD)",
          en:"👤 **Richard Waterman** · 108 Steinberg Conference Center · waterman@wharton.upenn.edu · ⚠️ the syllabus asks that you **put \"WEMBA WEST\" in the subject line of every email** · TA still TBD",
          cn:"👤 **Richard Waterman** · 108 Steinberg Conference Center · waterman@wharton.upenn.edu · ⚠️ 大纲要求**所有邮件主题须含 \"WEMBA WEST\"** · 助教待定" },
        { new:true, kr:"⚠️ **BAUR(*Business Analysis Using Regression*) ISBN 9780387983561 은 하드카피만 있고 ebook 이 없습니다.** 9/11 개강 전 배송을 고려해 지금 주문하세요",
          en:"⚠️ **BAUR (*Business Analysis Using Regression*), ISBN 9780387983561, is hardcopy only.** Order now to have it before the Sep 11 start",
          cn:"⚠️ **BAUR(*Business Analysis Using Regression*)ISBN 9780387983561 仅纸质版。** 请现在下单以赶在 9/11 开课前送达" },
        { new:true, kr:"🗂 **기출이 이미 올라와 있습니다** — Exam 1·2·3 문제·정답·결과 분포 + example exam + 정답까지. 학기 초에 난이도를 가늠해두면 편합니다",
          en:"🗂 **Past exams are already posted** — Exams 1, 2 and 3 with solutions and score distributions, plus an example exam with answers. Worth a look early to calibrate",
          cn:"🗂 **历年试题已上传** — Exam 1·2·3 试题、答案与分数分布,另有样卷及答案。学期初浏览有助于把握难度" },
        { kr:"📗 나머지 2권 — *BBS: A Casebook* 9780387983547 · *Statistics for Business* 3판 9780134497167 (둘 다 ebook 가능)",
          en:"📗 The other two — *BBS: A Casebook* 9780387983547 · *Statistics for Business*, 3rd ed 9780134497167 (both available as ebooks)",
          cn:"📗 另两本 — *BBS: A Casebook* 9780387983547 · *Statistics for Business* 第3版 9780134497167(均有电子版)" },
      ],
    },
    {
      code:"MKTG 6110", color:"#c8385f",
      name:{ kr:"Marketing Management · Sharif", en:"Marketing Management · Sharif", cn:"市场营销管理 · Sharif" },
      headline:{ kr:"📅 11/6 시작 · 2nd Half (11/6–12/19) · 0.5 CU · 교재 없음", en:"📅 Starts Nov 6 · second half (Nov 6 – Dec 19) · 0.5 CU · no textbook", cn:"📅 11/6 开始 · 下半学期(11/6–12/19)· 0.5 CU · 无教材" },
      points:[
        { kr:"⏳ 학기 후반부 과목이라 **11/6 수업 주말부터** 시작합니다. Canvas 사이트도 그때 열립니다 — 지금은 신경 쓸 것이 없어요",
          en:"⏳ A second-half course beginning on the **Nov 6 class weekend**; the Canvas site opens then too. Nothing to do for now",
          cn:"⏳ 下半学期课程,自 **11/6 上课周末**开始,Canvas 届时开放。目前无需准备" },
        { kr:"📌 세분화·타겟팅·브랜딩·가격·유통·프로모션을 케이스 중심으로 다루는 코어 과목 · **Marketing 계열 상위 과목의 선수 과목**입니다",
          en:"📌 The core marketing course, taught largely through cases · it is also the **prerequisite for most upper-level marketing electives**",
          cn:"📌 市场营销核心课,以案例为主 · 也是**多数高阶营销选修课的先修课**" },
      ],
    },
  ],

  /* ── 블록위크 ─────────────────────────────────────────────────────── */
  blockWeek: {
    note: { kr:"3–4일 압축 선택과목(보통 0.5 CU, 졸업 19 CU에 포함) · 정규 일정에 내장된 여유는 **1 CU = 블록위크 2개** 뿐입니다 · ⚠️ **전공(major)엔 Graded 만 인정** — P/F 불인정 · **전공 = 코어 외 4 CU = 블록위크 8개**, 컨센트레이션 = 3 CU = 6개 · PHL·SFO 혼합 수강 가능 · ⏰ **ADD·DROP 마감은 과목마다 다르고 대부분 블록위크 직전**입니다 — Course Match 시스템이 12/19까지 열려 있다는 것과 개별 마감은 별개예요 · DROP 마감은 대개 **수업 둘째 날 아침**이라 첫날 들어보고 판단할 수 있습니다 · 상세·실라버스·Booklist: Canvas ▸ Files ▸ Course Materials ▸ Term 5",
            en:"Electives compressed into 3–4 days (usually 0.5 CU, counting toward the 19 CU needed to graduate) · the schedule builds in only **1 CU, i.e. two block weeks** · ⚠️ **only Graded courses count toward a major**, P/F does not · **a major is 4 CU beyond the core, so eight block weeks**; a concentration is 3 CU, or six · mix PHL and SFO freely · ⏰ **ADD and DROP deadlines are per course and mostly sit just before each block week** — the fact that Course Match stays open until Dec 19 is a separate thing · DROP usually closes on the **morning of day two**, so you can attend day one and still decide · details, syllabi and booklist: Canvas ▸ Files ▸ Course Materials ▸ Term 5",
            cn:"3–4天压缩选修(通常 0.5 CU,计入毕业19 CU)· 常规安排仅内置 **1 CU 即两门** · ⚠️ **专业只认 Graded**,P/F 不计 · **专业 = 核心外 4 CU = 八门**;concentration = 3 CU = 六门 · 可混选 PHL 与 SFO · ⏰ **ADD·DROP 因课而异,多在各 Block Week 前夕** — 与 Course Match 开放至 12/19 是两回事 · DROP 通常在**第二天上午**截止,可先上第一天再决定 · 详情、大纲与书单:Canvas ▸ Files ▸ Course Materials ▸ Term 5" },
    options: [
      { code:"MKTG 7340", meta:"🟢 신청 가능 · SFO · 10/12–15 · Nave · ADD 10/5 · DROP 10/13 · Audit O · 대기 없음",
        title:{ kr:"Augmented Creativity (Course Match 표기는 'Creativity')", en:"Augmented Creativity (listed in Course Match as 'Creativity')", cn:"Augmented Creativity(Course Match 标注为 'Creativity')" },
        desc:{ kr:"AI 가 ideation 부터 prototyping 까지 창작 과정을 어떻게 바꾸는지 · SIT 등 체계적 발상 기법 실습 · vibe coding·음악·영상 도구 · 팀 프로젝트 + 최종 발표 포함(나흘로 끝나지 않습니다) · 👤 Nave 는 Wharton Teaching Excellence Award(2020)·P&Q 40 under 40(2021) 수상",
                en:"How AI reshapes creation from ideation through prototyping · hands-on structured techniques such as SIT · vibe coding, music and video tools · includes a team project and final presentation, so it runs beyond the four days · 👤 Nave won the Wharton Teaching Excellence Award (2020) and P&Q Best 40-Under-40 (2021)",
                cn:"AI 如何改变从构思到原型的创作流程 · SIT 等结构化方法实操 · vibe coding、音乐与视频工具 · 含小组项目与期末展示,不止四天 · 👤 Nave 获 Wharton 教学卓越奖(2020)与 P&Q 40岁以下最佳教授(2021)" } },
      { code:"MKTG 8530", meta:"🟢 신청 가능 · PHL · 10/12–15 · Karol/Norton · ADD 10/5",
        title:{ kr:"Designing & Deploying AI Agents", en:"Designing & Deploying AI Agents", cn:"AI 代理设计与部署" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"MGMT 7640", meta:"🟢 신청 가능 · SFO · 10/12–14 (3일) · Rosenkopf · ADD 10/5",
        title:{ kr:"Tech in the SF Bay Area", en:"Tech in the SF Bay Area", cn:"湾区科技" },
        desc:{ kr:"⚠️ 3일이라 10/14 에 끝납니다 · Philly 코호트는 10/15 수업이 있어 10월 사이클 중 이 과목만 가능",
                en:"⚠️ Three days, ending Oct 14 · the Philly cohort has class Oct 15, so this is their only October option",
                cn:"⚠️ 仅三天,10/14 结束 · Philly 班 10/15 有课,10月只能选这门" } },
      { code:"LGST 7500", meta:"🟢 신청 가능 · PHL · 10/12–15 · Conti-Brown · ADD 10/5 · 30석 중 22석 여유",
        title:{ kr:"Global (Anti-)Money Laundering", en:"Global (Anti-)Money Laundering", cn:"全球反洗钱" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"OIDD 6530", meta:"🟢 신청 가능 · SFO · 10/12–15 · Katalan · ADD 10/5 · Audit O",
        title:{ kr:"Mathematical Modeling in Finance", en:"Mathematical Modeling and its Applications in Finance", cn:"金融数学建模" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"OIDD 6140", meta:"🟡 대기 74명 · SFO · 11/30–12/3 · Netessine · ADD 11/23 · Audit ✕",
        title:{ kr:"Innovation", en:"Innovation", cn:"创新" },
        desc:{ kr:"🔥 가을 블록위크 중 대기줄이 가장 깁니다 · 👤 Netessine 은 **Senior Vice Dean for Innovation and Global Initiatives** · FAA·싱가포르 정부·Lockheed Martin·P&G·McDonald's·Rolls Royce 협업 이력 · MBA·EMBA 교육상 다수 · **Audit 이 안 되므로 정식 등록만이 유일한 길**입니다",
                en:"🔥 The longest waitlist of the fall · 👤 Netessine is **Senior Vice Dean for Innovation and Global Initiatives**, has worked with the FAA, the Government of Singapore, Lockheed Martin, P&G, McDonald's and Rolls Royce, and holds multiple teaching awards · **audit is not allowed, so a seat is the only way in**",
                cn:"🔥 秋季候补最长 · 👤 Netessine 为 **Senior Vice Dean for Innovation and Global Initiatives**,曾与 FAA、新加坡政府、Lockheed Martin、P&G、McDonald's、Rolls Royce 合作,多次获教学奖 · **不可旁听,只能正式选上**" } },
      { code:"HCMG 8600", meta:"🟢 신청 가능 · PHL · 11/30–12/3 · Nembhard · ADD 11/23 · 78석 중 57석 여유",
        title:{ kr:"Leading Healthcare Organizations", en:"Leading Healthcare Organizations", cn:"医疗机构领导力" },
        desc:{ kr:"자리가 넉넉해 비교적 들어가기 쉽습니다", en:"Plenty of seats, so relatively easy to get into", cn:"席位充足,较易选入" } },
      { code:"LGST 6420", meta:"🟡 대기 41명 · SFO · 12/14–16 (3일) · Werbach · ADD 12/7 · Audit ✕",
        title:{ kr:"Big Data, Big Responsibilities: Toward Accountable AI", en:"Big Data, Big Responsibilities: Toward Accountable AI", cn:"大数据、大责任:迈向可问责的人工智能" },
        desc:{ kr:"🔥 이 과목으로 Aspen Institute **Ideas Worth Teaching Award(2021)** 수상 · 👤 Werbach 는 법학·기업윤리 학과장이자 **Wharton Accountable AI Lab** 총괄, Coursera 게이미피케이션 강의 수강생 50만 명 · **3일짜리로 가을 블록위크 중 가장 짧습니다**",
                en:"🔥 Won the Aspen Institute **Ideas Worth Teaching Award (2021)** for this course · 👤 Werbach chairs Legal Studies & Business Ethics, leads the **Wharton Accountable AI Lab**, and his Coursera gamification course has 500,000+ learners · **three days, the shortest block week of the fall**",
                cn:"🔥 本课获 Aspen Institute **Ideas Worth Teaching Award(2021)** · 👤 Werbach 为法学与商业伦理系主任、**Wharton Accountable AI Lab** 负责人,其 Coursera 游戏化课程学员逾50万 · **仅三天,秋季最短**" } },
      { code:"MGMT 8710 · OIDD 6540", meta:"🔴 마감됨 · Seoul · 12/7–10 · ADD 마감 7/27 경과",
        title:{ kr:"Advanced Global Strategy (Hernandez) · Product Management (Ulrich)", en:"Advanced Global Strategy (Hernandez) · Product Management (Ulrich)", cn:"高级全球战略(Hernandez)· 产品管理(Ulrich)" },
        desc:{ kr:"🇰🇷 **둘 다 서울 개최였는데 ADD 마감이 7월 27일로 이미 지났습니다.** 글로벌 블록위크는 항공·숙박 때문에 **반년 가까이 앞서 닫힙니다** — 내년 목록이 나오면 가장 먼저 확인하세요. OIDD 6540 은 **SFO 정규 버전(10/1–16, Ulrich, Audit O)** 이 따로 있습니다",
                en:"🇰🇷 **Both were held in Seoul, but the ADD deadline passed on Jul 27.** Global block weeks close nearly six months ahead because of travel and lodging — check next year's list the moment it appears. OIDD 6540 also runs as a **regular SFO course (Oct 1–16, Ulrich, audit allowed)**",
                cn:"🇰🇷 **两门均在首尔,ADD 已于 7月27日截止。** 全球 Block Week 因机票住宿提前近半年关闭 — 明年名单一出请第一时间查看。OIDD 6540 另有 **SFO 常规版(10/1–16,Ulrich,可旁听)**" } },
    ],
  },

  /* ── 수업 주말 일정표 ─────────────────────────────────────────────── */
  schedule: {
    notes: { kr:"⚠️ 두 섹션이 **같은 시간에 서로 다른 과목**을 듣습니다. 강의실은 과목 기준 고정 — LGST 6120 = Room 612 · FNCE 6130 = Room 615. 🏨 숙소 = Hyatt Regency SF (5 Embarcadero Ctr).",
            en:"⚠️ The two sections take **different courses at the same hour.** Rooms are fixed by course — LGST 6120 = Room 612, FNCE 6130 = Room 615. 🏨 Hotel: Hyatt Regency SF (5 Embarcadero Ctr).",
            cn:"⚠️ 两个班在**同一时段上不同课程。** 教室按课程固定 — LGST 6120 = Room 612、FNCE 6130 = Room 615。🏨 住宿:Hyatt Regency SF(5 Embarcadero Ctr)。" },
    weekends: [
      {
        start:"2026-08-28", end:"2026-08-29",
        label: { kr:"8월 28일(금)–29일(토) · SFO · Term 2 첫 주말 · 📸 클래스 사진 · ⚠️ LGST Quiz #1", en:"Fri Aug 28 – Sat Aug 29 · SFO · first weekend of Term 2 · 📸 class photo · ⚠️ LGST Quiz #1", cn:"8月28日(周五)–29日(周六) · SFO · 第二学期首个周末 · 📸 班级合影 · ⚠️ LGST Quiz #1" },
        days: [
          {
            label: { kr:"금요일 8/28", en:"Friday 8/28", cn:"周五 8/28" },
            rows: [
              { time:"8:30–9:30",  both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:30–12:30",
                s1:{ kr:"LGST 6120 · Feinstein · Room 612", en:"LGST 6120 · Feinstein · Room 612", cn:"LGST 6120 · Feinstein · Room 612",
                     read:{ kr:"Personal Responsibility · 리딩 3편 · Values Paper 제출 마감", en:"Personal Responsibility · 3 readings · Values Paper due", cn:"Personal Responsibility · 3篇阅读 · Values Paper 截止" } },
                s2:{ kr:"FNCE 6130 · Landry · Room 615", en:"FNCE 6130 · Landry · Room 615", cn:"FNCE 6130 · Landry · Room 615" } },
              { time:"12:30–2:00", both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
              { time:"12:45–1:45", both:{ kr:"📸 WEMBA 52 클래스 사진 · Dining Room", en:"📸 WEMBA 52 class photo · Dining Room", cn:"📸 WEMBA 52 班级合影 · Dining Room",
                                          read:{ kr:"비즈니스 정장 권장 · 점심시간 안에 들어 있으니 식사 순서를 조정하세요", en:"Business attire recommended · it sits inside the lunch block", cn:"建议商务着装 · 时间在午餐内" } } },
              { time:"2:00–5:00",
                s1:{ kr:"FNCE 6130 · Landry · Room 615", en:"FNCE 6130 · Landry · Room 615", cn:"FNCE 6130 · Landry · Room 615" },
                s2:{ kr:"LGST 6120 · Feinstein · Room 612", en:"LGST 6120 · Feinstein · Room 612", cn:"LGST 6120 · Feinstein · Room 612",
                     read:{ kr:"Personal Responsibility · 리딩 3편 · Values Paper 는 이 전까지 제출", en:"Personal Responsibility · 3 readings · Values Paper due before this", cn:"Personal Responsibility · 3篇阅读 · Values Paper 须在此前提交" } } },
              { time:"5:00–6:30", both:{ kr:"석식 · Dining Room", en:"Dinner · Dining Room", cn:"晚餐 · Dining Room" } },
              { time:"5:00–11:00 PM", both:{ kr:"📚 스터디룸 · Hyatt Board Rooms A·B·C", en:"📚 Study rooms · Hyatt Board Rooms A, B, C", cn:"📚 自习室 · Hyatt Board Rooms A·B·C" } },
              { time:"8:30–11:30 PM", both:{ kr:"🍺 Wharton Pub · Hyatt Eclipse Bar (자유)", en:"🍺 Wharton Pub · Hyatt Eclipse Bar (optional)", cn:"🍺 Wharton Pub · Hyatt Eclipse Bar(自由)" } },
            ],
          },
          {
            label: { kr:"토요일 8/29", en:"Saturday 8/29", cn:"周六 8/29" },
            rows: [
              { time:"8:00–9:00",  both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:00–12:00",
                s1:{ kr:"FNCE 6130 · Landry · Room 615", en:"FNCE 6130 · Landry · Room 615", cn:"FNCE 6130 · Landry · Room 615" },
                s2:{ kr:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1", en:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1", cn:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1",
                     read:{ kr:"Corporate Responsibility · 리딩 7편 · 클로즈드북 퀴즈(10%)", en:"Corporate Responsibility · 7 readings · closed-book quiz (10%)", cn:"Corporate Responsibility · 7篇阅读 · 闭卷测验(10%)" } } },
              { time:"12:00–1:00", both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
              { time:"1:00–4:00",
                s1:{ kr:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1", en:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1", cn:"LGST 6120 · Feinstein · Room 612 · ⚠️ Quiz #1",
                     read:{ kr:"Corporate Responsibility · 리딩 7편 · 클로즈드북 퀴즈(10%)", en:"Corporate Responsibility · 7 readings · closed-book quiz (10%)", cn:"Corporate Responsibility · 7篇阅读 · 闭卷测验(10%)" } },
                s2:{ kr:"FNCE 6130 · Landry · Room 615", en:"FNCE 6130 · Landry · Room 615", cn:"FNCE 6130 · Landry · Room 615" } },
              { time:"예약제", both:{ kr:"🎯 Len Lodish 어드바이징 (VIP 공동리더 · 신청은 Canvas 공지)", en:"🎯 Advising with Len Lodish (VIP co-Leader · signup via Canvas)", cn:"🎯 Len Lodish 咨询(VIP 联合负责人 · 报名见 Canvas)" } },
            ],
          },
        ],
      },
    ],
  },

  /* ── 자료 맵 준비 중 안내 (삽화 인라인) ─────────────────────────── */
  canvasSoon: {
    svg: `<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="공사중 · to be updated"> <rect x="0" y="0" width="680" height="270" rx="12" fill="#f8f1e2"/> <g stroke="#2b2320" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <!-- ── Sally (정본 스펙 v3 · 가리키기 포즈) ── --> <g transform="translate(24,20)"> <ellipse cx="90" cy="92" rx="22" ry="24" fill="#3a2e28"/> <path d="M107 102 C118 108 122 124 117 140 C112 128 108 116 103 110 Z" fill="#3a2e28"/> <circle cx="107" cy="107" r="2.6" fill="#f2a9c4" stroke-width="1.1"/> <ellipse cx="90" cy="102" rx="18" ry="20" fill="#fdf6ea"/> <path d="M90 82 L90 87" fill="none" stroke-width="1.3"/> <path d="M76 96 C78 94 82 93 85 94" fill="none" stroke-width="1.3"/> <path d="M95 94 C98 93 102 94 104 96" fill="none" stroke-width="1.3"/> <path d="M79 104 C81 107 85 107 87 104" fill="none" stroke-width="1.6"/> <path d="M93 104 C95 107 99 107 101 104" fill="none" stroke-width="1.6"/> <path d="M86 114 C89 117 91 117 94 114" fill="none" stroke-width="1.5"/> <circle cx="77" cy="110" r="3" fill="#f4b8c8" stroke="none" opacity="0.75"/> <circle cx="103" cy="110" r="3" fill="#f4b8c8" stroke="none" opacity="0.75"/> <path d="M72 128 C62 132 60 148 62 178 L118 178 C120 148 118 132 108 128 C100 124 80 124 72 128 Z" fill="#7ba05b"/> <path d="M84 128 C87 133 93 133 96 128" fill="none" stroke="#c9a227" stroke-width="1.2"/> <circle cx="90" cy="134" r="1.6" fill="#c9a227" stroke="none"/> <!-- 왼팔: 아래 + 연필 --> <path d="M70 134 C60 141 56 152 55 162" fill="none" stroke="#7ba05b" stroke-width="6.5"/> <circle cx="54" cy="165" r="4.2" fill="#fdf6ea" stroke-width="1.4"/> <path d="M48 176 L60 156" fill="none" stroke="#f2a9c4" stroke-width="4"/> <path d="M47 179 L49 173 L52 175 Z" fill="#2b2320" stroke-width="1.1"/> <!-- 오른팔: 표지판 쪽으로 --> <path d="M110 132 C122 126 132 116 137 106" fill="none" stroke="#7ba05b" stroke-width="6.5"/> <circle cx="140" cy="103" r="4.2" fill="#fdf6ea" stroke-width="1.4"/> <path d="M80 178 L78 222 M100 178 L102 222" fill="none"/> <ellipse cx="74" cy="226" rx="8" ry="3.6" fill="#2b2320" stroke="none"/> <ellipse cx="106" cy="226" rx="8" ry="3.6" fill="#2b2320" stroke="none"/> </g> <!-- ── 공사중 표지판 ── --> <g transform="translate(258,42)"> <!-- 다리 --> <path d="M46 128 L34 186 M212 128 L224 186" fill="none" stroke-width="3"/> <!-- 판 --> <rect x="14" y="24" width="230" height="106" rx="9" fill="#fffdf6" stroke-width="2.4"/> <!-- 상단 사선 스트라이프 띠 --> <rect x="14" y="24" width="230" height="20" rx="9" fill="#f2a9c4" stroke="none"/> <rect x="14" y="35" width="230" height="9" fill="#f2a9c4" stroke="none"/> <path d="M22 44 L38 24 M52 44 L68 24 M82 44 L98 24 M112 44 L128 24 M142 44 L158 24 M172 44 L188 24 M202 44 L218 24" fill="none" stroke="#fffdf6" stroke-width="6"/> <rect x="14" y="24" width="230" height="20" rx="9" fill="none" stroke-width="2.2"/> <!-- 문구 --> <text x="129" y="82" font-family="'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR','PingFang SC',sans-serif" font-weight="800" font-size="26" letter-spacing="2" fill="#2b2320" stroke="none" text-anchor="middle">공사중</text> <text x="129" y="108" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="17" fill="#c14e78" stroke="none" text-anchor="middle">to be updated</text> </g> <!-- ── 라바콘 ── --> <g transform="translate(536,150)"> <ellipse cx="34" cy="76" rx="34" ry="8" fill="#f2a9c4" stroke-width="2"/> <path d="M22 72 L34 10 L46 72 Z" fill="#f2a9c4" stroke-width="2.2"/> <path d="M27 48 L41 48" fill="none" stroke="#fffdf6" stroke-width="6"/> <path d="M30 32 L38 32" fill="none" stroke="#fffdf6" stroke-width="5"/> </g> </g> </svg>`,
    text: {
      kr:"과목 사이트가 순차적으로 열리는 중이라 **자료 위치는 계속 채워 나갑니다.** 지금은 **LGST 6120 · STAT 6130** 만 확인됐고, FNCE 6130 과 MKTG 6110 은 사이트가 열리는 대로 추가할게요.",
      en:"Course sites are opening one by one, so **this map is still being filled in.** Only **LGST 6120 and STAT 6130** are confirmed so far; FNCE 6130 and MKTG 6110 will be added as soon as their sites go live.",
      cn:"课程网站正陆续开放,**本资料图仍在持续补充。** 目前仅确认 **LGST 6120 与 STAT 6130**,FNCE 6130 与 MKTG 6110 将在网站上线后补上。" },
  },

  /* ── Canvas 자료 위치 (열린 과목만) ─────────────────────────────────── */
  canvasMap:[
    {
      subject:"LGST 6120 ✅",
      where:{ kr:"⚠️ **세 곳으로 갈립니다** — ① 리딩 = **Course Materials @ Penn Libraries** ② 리딩 = **Study.Net Materials** ③ 연습문제 핸드아웃 = **Files** · 실라버스는 **Syllabus 탭**에 docx 링크로",
              en:"⚠️ **Three places** — ① readings in **Course Materials @ Penn Libraries** ② readings in **Study.Net Materials** ③ exercise handouts in **Files** · the syllabus is a docx linked from the **Syllabus tab**",
              cn:"⚠️ **分三处** — ① 阅读在 **Course Materials @ Penn Libraries** ② 阅读在 **Study.Net Materials** ③ 练习讲义在 **Files** · 大纲为 **Syllabus 标签**中的 docx 链接" },
      submit:{ kr:"**Assignments 탭** (텍스트 입력·파일 업로드 둘 다 가능)", en:"**Assignments tab** (text entry or file upload)", cn:"**Assignments 标签**(文本或上传均可)" },
      watch:{ kr:"🔴 **교수 메일에 리딩 목록이 없습니다.** 실라버스를 직접 열어야 주말별 지정 리딩이 나옵니다 · 같은 안내가 여러 번 재발송되는데 **밑줄로 새 정보**가 표시되니 익숙해 보여도 열어보세요",
              en:"🔴 **The professor's emails do not list the readings.** You have to open the syllabus itself · the same email is re-sent as students join, with **new information underlined**, so open it even if it looks familiar",
              cn:"🔴 **教授邮件不含阅读清单**,须自行打开大纲 · 同一封邮件会多次重发,**新增内容以下划线标出**,即使看似相同也请打开" },
    },
    {
      subject:"STAT 6130 ✅",
      where:{ kr:"**Files** 에 실라버스(`Syllabus_West_2026.v1.pdf`)와 **기출 세트**(Exam 1·2·3 문제·정답·분포, example exam·정답)가 이미 올라와 있습니다",
              en:"**Files** already holds the syllabus (`Syllabus_West_2026.v1.pdf`) and a **full past-exam set** (Exams 1, 2, 3 with solutions and distributions, plus an example exam with answers)",
              cn:"**Files** 已上传大纲(`Syllabus_West_2026.v1.pdf`)与**历年试题全套**(Exam 1·2·3 试题·答案·分布,及样卷与答案)" },
      submit:{ kr:"9/11 개강 후 확인", en:"Confirm after the Sep 11 start", cn:"9/11 开课后确认" },
      watch:{ kr:"⚠️ **모든 메일 제목에 \"WEMBA WEST\" 를 넣으라**고 실라버스에 명시 · TA 는 아직 TBD",
              en:"⚠️ The syllabus asks for **\"WEMBA WEST\" in the subject line of every email** · the TA is still TBD",
              cn:"⚠️ 大纲要求**所有邮件主题含 \"WEMBA WEST\"** · 助教待定" },
    },
    {
      subject:"FNCE 6130 · MKTG 6110 ⏳",
      where:{ kr:"**8/23 기준 아직 열리지 않았습니다.** FNCE 는 8/28 개강인데도 미개설 상태예요 — 목요일 밤에 다시 확인하세요",
              en:"**Not open as of Aug 23.** FNCE starts Aug 28 and the site is still not up — check again Thursday night",
              cn:"**截至 8/23 尚未开放。** FNCE 8/28 开课但网站未上线 — 请周四晚再确认" },
      submit:{ kr:"미정", en:"TBD", cn:"待定" },
      watch:{ kr:"⚠️ **코스 사이트가 안 보인다고 등록이 안 된 게 아닙니다.** 실제 수강 목록은 Course Match ▸ Drop/Add 에서 확인",
              en:"⚠️ **A missing course site does not mean you are not registered.** Check Course Match ▸ Drop/Add for your actual enrollment",
              cn:"⚠️ **网站未显示不代表未注册。** 请在 Course Match ▸ Drop/Add 确认实际选课" },
    },
    {
      subject:"Cohort Communication",
      where:{ kr:"**Files ▸ Weekend Schedule** 에 주말 일정표 PDF · **Files ▸ Course Materials ▸ Term 5** 에 Add/Drop 안내와 Booklist",
              en:"Weekend schedule PDFs in **Files ▸ Weekend Schedule** · add/drop instructions and the booklist in **Files ▸ Course Materials ▸ Term 5**",
              cn:"周末日程 PDF 在 **Files ▸ Weekend Schedule** · 加退选说明与书单在 **Files ▸ Course Materials ▸ Term 5**" },
      submit:{ kr:"제출물 없음 (공지 전용)", en:"Nothing to submit — announcements only", cn:"无需提交(仅公告)" },
      watch:{ kr:"🔔 **가장 잘 놓치는 채널입니다.** 등록 마감·특강·워크숍·비자 공지가 전부 여기로 옵니다 · ⚠️ 가을 자료가 **'Term 5'** 로 표기돼 있는데 우리 Term 2 와 같은 것입니다",
              en:"🔔 **The easiest channel to miss.** Registration deadlines, guest sessions, workshops and visa notices all land here · ⚠️ the fall materials are labelled **'Term 5'**, which is the same as our Term 2",
              cn:"🔔 **最易漏看的频道。** 报名截止、讲座、工作坊与签证通知均在此 · ⚠️ 秋季资料标为 **'Term 5'**,与我们的第二学期相同" },
    },
    {
      subject:"Course Match (등록·섹션)",
      where:{ kr:"`apps.wharton.upenn.edu/coursematch` ▸ **Drop / Add** — 실제 수강 목록, 과목별 ADD·DROP·P/F 마감, **대기 순번**이 전부 여기",
              en:"`apps.wharton.upenn.edu/coursematch` ▸ **Drop / Add** — actual enrollment, per-course ADD/DROP/PF deadlines and **your waitlist position**",
              cn:"`apps.wharton.upenn.edu/coursematch` ▸ **Drop / Add** — 实际选课、各课 ADD/DROP/PF 截止与**候补顺位**" },
      submit:{ kr:"섹션 확인은 **Wharton Reports ▸ My Class Lists** — 과목 코드 끝자리가 섹션 번호", en:"Section check: **Wharton Reports ▸ My Class Lists** — last digit of the course code", cn:"分班查询:**Wharton Reports ▸ My Class Lists** — 课程代码末位" },
      watch:{ kr:"⭐ 각 과목 설명줄에 **ADD·DROP·P/F 마감이 개별로** 적혀 있습니다. 시스템 종료일(12/19)과 헷갈리지 마세요",
              en:"⭐ Each course line carries **its own ADD, DROP and P/F dates**. Do not confuse them with the system close date of Dec 19",
              cn:"⭐ 每门课的说明行标注**各自的 ADD·DROP·P/F 截止**,勿与系统关闭日(12/19)混淆" },
    },
  ],

  /* ── 소셜 ─────────────────────────────────────────────────────────── */
  social: {
    url: "https://wemba52sfsocial.netlify.app/",
    embedUrl: "https://wemba52sfsocial.netlify.app/#dinners",
    embed: false,
    desc: {
      kr:"금요일 디너는 동네·Afters 를 함께 정하고 그룹(최대 8명)별로 식당을 골라요. 그룹에 참여하거나 직접 만들 수 있고, 팀 캡틴이 예약을 맡습니다. (목요일 도착·토요일 수업 후 모임도)",
      en:"For Friday dinner, pick a shared neighborhood/Afters, then each group (max 8) chooses its restaurant. Join a group or start your own; a team captain books it. (Thursday arrivals & Saturday after-class too.)",
      cn:"周五聚餐先共同选定街区·Afters,各组(最多8人)自选餐厅。可加入或自建小组,由队长负责预订。(也有周四抵达与周六课后活动。)",
    },
    cta: { kr:"디너 약속 정하러 가기", en:"Open the dinner planner", cn:"去安排聚餐" },
  },
};
