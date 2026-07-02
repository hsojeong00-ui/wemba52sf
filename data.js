/* ============================================================================
   WEMBA 52 생존 대시보드 — 데이터 파일
   ----------------------------------------------------------------------------
   매주 발행할 때 이 파일만 수정하면 됩니다. (index.html은 건드릴 필요 없음)

   업데이트 순서
   1) meta.weekLabel / meta.asOf 를 이번 주로 변경
   2) deadlines[] 에 새 일정 추가 / 지난 일정 삭제(원하면 그대로 둬도 자동으로
      "지남" 처리됩니다)
   3) 필요하면 courses / blockWeek / actions / canvasMap 갱신

   날짜 형식: "YYYY-MM-DDTHH:mm" (시간 있음) 또는 "YYYY-MM-DD" (종일).
   모든 시간은 자동으로 미 태평양시(PT)로 계산됩니다.
   모든 텍스트는 { kr:"한국어", en:"English", cn:"中文" } 세 언어를 같이 적습니다.
   (cn 을 비워두면 화면에서 해당 언어 선택 시 kr 로 대체 표시됩니다.)
   ============================================================================ */

const DATA = {
  meta: {
    cohort: "WEMBA 52",
    lastUpdated: "2026-07-02",   // ← 업데이트할 때마다 이 날짜만 바꾸세요 (YYYY-MM-DD)
    author:   "Sally",
    tzLabel:  "PT",
  },

  /* ── 업데이트 내역 ───────────────────────────────────────────────────────
     헤더의 "업데이트 내역" 링크를 누르면 대시보드 안에서 이 목록이 떠요.
     매번 업데이트할 때 맨 위에 새 날짜 블록을 추가하세요 (최신이 위로).
     비워두면([]) 헤더에 링크가 안 보입니다. */
  changelog: [
    { date:"2026-07-02", items:[
      { kr:"Fall Block Week 등록·드롭(W) 정책·라인업 추가 · 7/6 Course Match add/drop 일정", en:"Added Fall Block Week registration, drop/W policy & lineup · Jul 6 Course Match add/drop", cn:"新增 Fall Block Week 报名·退课(W)政策·课程清单 · 7/6 Course Match 加退" },
      { kr:"BEPP RS4는 목요일(7/9) · L12–14 인쇄 지참 안내 · 오리엔테이션 설문", en:"BEPP RS4 is Thursday (Jul 9) · bring printed L12–14 · orientation survey", cn:"BEPP RS4 为周四(7/9)· 携带打印的 L12–14 · 迎新问卷" },
      { kr:"지난 항목 정리 + 최종 업데이트 7/2", en:"Cleaned up past items + last updated Jul 2", cn:"清理过期条目 + 最近更新 7/2" },
    ]},
    { date:"2026-06-30", items:[
      { kr:"HSC Day 1(7/3) JDS 사전과제 강조, BEPP L12·13·14 게시·RS3 정정 반영", en:"Emphasized HSC Day 1 (Jul 3) JDS pre-work; added BEPP L12·13·14 + RS3 correction", cn:"强调 HSC Day 1(7/3)JDS 课前作业;新增 BEPP L12·13·14 + RS3 更正" },
      { kr:"7/30 Family Day · 8/5 팀 페이퍼 TA 미팅(Zorina) 일정 추가", en:"Added Jul 30 Family Day and Aug 5 team-paper TA meeting (Zorina)", cn:"新增 7/30 Family Day 与 8/5 团队论文 TA 会议(Zorina)" },
      { kr:"7/3–4 주말 일정표: 섹션별 순서 다름 안내 추가", en:"Weekend schedule: noted Section 1/2 order differs", cn:"周末课表: 标注第1/2班顺序不同" },
    ]},
    { date:"2026-06-26", items:[
      { kr:"⚠️ BEPP 미드텀 날짜 정정 — Canvas의 8·9월 날짜는 작년 잔재, 실제 미드텀 7/17·기말 8/15", en:"⚠️ BEPP exam dates fixed — Canvas Aug/Sep dates are last year's; real midterm 7/17, final 8/15", cn:"⚠️ 修正 BEPP 考试日期 — Canvas 的 8/9月为去年残留,实际期中 7/17、期末 8/15" },
      { kr:"ACCT 중간 리뷰 시간 확정(6/29 7:30 PM), Pras 세션5·가격차별 6/30 연기, ePortfolios 6/30 삭제 반영", en:"ACCT review time set (Jun 29 7:30 PM), Pras Session 5 / Price Discrim moved to 6/30, ePortfolios deletion 6/30", cn:"确定 ACCT 复习时间(6/29 7:30 PM)、Pras 第5课·价格歧视移至6/30、ePortfolios 6/30删除" },
      { kr:"Block Week 등록 마감 처리", en:"Block Week registration marked closed", cn:"Block Week 选课标记为已截止" },
      { kr:"52 Family Day 설문(7/6) + 등록·성적 모드 확인 PDF 추가", en:"Added 52 Family Day survey (Jul 6) + registration/grade-modes PDF", cn:"新增 52 Family Day 问卷(7/6)+ 注册/成绩模式 PDF" },
    ]},
    { date:"2026-06-24", items:[
      { kr:"ACCT Quiz 4·5 마감(7/3) 추가", en:"Added ACCT Quiz 4·5 deadline (Jul 3)", cn:"新增 ACCT Quiz 4·5 截止(7/3)" },
      { kr:"MGMT 제안서 피드백 공개·Lead TA·Siggelkow 팁 2개 반영", en:"Added MGMT proposal feedback, Lead TAs, Siggelkow's 2 tips", cn:"新增 MGMT 提案反馈、助教组长、Siggelkow 两个提示" },
      { kr:"업데이트 내역 보기 추가", en:"Added this update-history view", cn:"新增更新记录查看" },
    ]},
    { date:"2026-06-22", items:[
      { kr:"Excel 라이브 세션(7/29) 추가", en:"Added Excel live session (Jul 29)", cn:"新增 Excel 直播课(7/29)" },
    ]},
    { date:"2026-06-21", items:[
      { kr:"대시보드 최초 발행 (생존노트 #3 기준)", en:"Dashboard launched (from Survival Note #3)", cn:"看板首次发布(基于生存笔记 #3)" },
    ]},
  ],

  /* ── What's New (기존 섹션에 안 맞는 새 소식 · 최신이 위로) ────────────────
     해결되거나 오래된 항목은 지우면 됩니다. date 는 화면에 작은 날짜로 표시. */
  whatsNew: [
    { date:"2026-07-02", kr:"🏫 Fall Block Week 등록 폼 마감(오늘 7/2 9 AM PT) — 제출자만 추첨 대상. 놓쳤으면 7/6 주부터 Course Match add/drop로 추가 가능(빈자리·대기자). Oct(PHL·SFO)·Dec 과목", en:"🏫 Fall Block Week form due today (Jul 2, 9 AM PT) — only submitters enter the lottery. Missed it? Add later via Course Match (open seats/waitlist) from week of Jul 6. Covers Oct (PHL·SFO) & Dec", cn:"🏫 Fall Block Week 报名表今天截止(7/2 上午9点 PT)— 仅提交者参与抽签。错过可从7/6当周经 Course Match 加课(空位/候补)。涵盖10月(PHL·SFO)与12月课程" },
    { date:"2026-07-02", kr:"📋 Fall BW 드롭 정책(그룹챗 질문 답): add/drop 기간 내 드롭=기록 없음 / 이후=W · 대기자 있는 과목은 'Add' 마감 후 드롭=즉시 W · P/F 변경은 과목 Day1까지 · 마감은 과목별(Course Match 확인). add/drop은 7/6 주 오픈", en:"📋 Fall BW drop policy: drop within add/drop = nothing on transcript / after = W · waitlisted course: drop after the 'Add' deadline = W immediately · P/F changes until the course's Day 1 · deadlines are per course (check Course Match). Add/drop opens week of Jul 6", cn:"📋 Fall BW 退课政策: 加退期内退=无记录 / 之后=W · 有候补的课在'Add'截止后退=立即 W · P/F 可改到课程 Day1 · 截止按课程(查 Course Match)。加退于7/6当周开放" },
    { date:"2026-07-02", kr:"🏫 Fall BW 라인업: MGMT 7640 Tech in SF(SFO 10/12–14) · MKTG 7340 Creativity · LGST 7500 AML(PHL) · MKTG 8530 AI Agents(PHL) · LGST 6420 Accountable AI(SFO 12/14–16) 등 — 상세: Canvas ▸ Files ▸ Block Week ▸ Term 2. ⚠️ Philly는 MGMT 7640만(10/15 수업) · ⚠️ P/F 과목은 전공 미인정", en:"🏫 Fall BW lineup: MGMT 7640 Tech in SF (SFO 10/12–14) · MKTG 7340 Creativity · LGST 7500 AML (PHL) · MKTG 8530 AI Agents (PHL) · LGST 6420 Accountable AI (SFO 12/14–16), etc. — details: Canvas ▸ Files ▸ Block Week ▸ Term 2. ⚠️ Philly can only take MGMT 7640 (class Oct 15) · ⚠️ P/F courses don't count toward a major", cn:"🏫 Fall BW 课程: MGMT 7640 Tech in SF(SFO 10/12–14)· MKTG 7340 Creativity · LGST 7500 AML(PHL)· MKTG 8530 AI Agents(PHL)· LGST 6420 Accountable AI(SFO 12/14–16)等 — 详情: Canvas ▸ Files ▸ Block Week ▸ Term 2。⚠️ Philly 只能选 MGMT 7640(10/15有课)· ⚠️ P/F 课程不计入专业" },
    { date:"2026-07-02", kr:"🖨️ 이번 주말 BEPP 수업에 Lecture 12·13·14 인쇄해서 지참 (Smetters 6/29 공지)", en:"🖨️ Bring printed Lectures 12, 13 & 14 to this weekend's BEPP class (Smetters, 6/29)", cn:"🖨️ 本周末 BEPP 课带上打印好的 Lecture 12·13·14(Smetters 6/29)" },
  ],

  /* ── 마감 / 일정 ──────────────────────────────────────────────────────────
     type: registration | exam | paper | quiz | session | milestone
     hard: true 이면 "놓치면 아픈" 빨간 강조
  ----------------------------------------------------------------------------*/
  deadlines: [
    {
      date:"2026-07-06", type:"milestone", course:"Cohort",
      title:{ kr:"52 Family Day 설문 마감", en:"52 Family Day survey due", cn:"52 Family Day 问卷截止" },
      detail:{ kr:"Parklab Gardens 행사(7/30) 준비용 설문 — 7/6(월)까지 작성", en:"Prep survey for the Parklab Gardens event (Jul 30) — fill out by Mon Jul 6", cn:"Parklab Gardens 活动(7/30)筹备问卷 — 7/6(周一)前填写" },
    },
    {
      date:"2026-07-06", type:"milestone", course:"Block Week", new:true,
      title:{ kr:"Fall BW Course Match add/drop 오픈", en:"Fall BW Course Match add/drop opens", cn:"Fall BW Course Match 加退开放" },
      detail:{ kr:"이번 주부터 추가·변경 가능 · 드롭은 기간 내=기록 없음, 이후=W · P/F 변경은 과목 Day1까지 (마감은 과목별)", en:"Add/change from this week · drop within window = no transcript mark, after = W · P/F changes until Day 1 (deadlines per course)", cn:"本周起可加/改 · 加退期内退=无记录,之后=W · P/F 可改到 Day1(截止按课程)" },
    },
    {
      date:"2026-07-03T09:30", type:"exam", course:"ACCT", hard:true,
      title:{ kr:"ACCT 중간고사", en:"ACCT midterm", cn:"ACCT 期中考试" },
      detail:{ kr:"9:30–11:30 AM · Room 660 · 합반 · 범위=매출채권까지 · 오픈북(ChatGPT 금지)", en:"9:30–11:30 AM · Room 660 · both sections · scope through A/R · open book (no ChatGPT)", cn:"上午9:30–11:30 · 660室 · 两班合并 · 范围=至应收账款 · 开卷(禁用ChatGPT)" },
    },
    {
      date:"2026-07-03", type:"quiz", course:"ACCT",
      title:{ kr:"ACCT Quiz 4·5 마감", en:"ACCT Quiz 4·5 due", cn:"ACCT Quiz 4·5 截止" },
      detail:{ kr:"중간고사와 같은 날 · Quiz 1–3은 이미 마감", en:"Same day as the midterm · Quizzes 1–3 already closed", cn:"与期中同一天 · Quiz 1–3 已截止" },
    },
    {
      date:"2026-07-03", type:"milestone", course:"HSC",
      title:{ kr:"HSC 모듈 Day 1 (사전과제 필수)", en:"HSC module Day 1 (pre-work required)", cn:"HSC 模块 Day 1 (课前作业必做)" },
      detail:{ kr:"오후 진행 · JDS Short Form(첫 직장) + MPS 점수 수업 전 완료 · Netflix 덱 훑기 · 양식: MGMT 6130 ▸ Files ▸ H&SC Extras", en:"Afternoon · finish JDS Short Form (first job) + MPS before class · skim Netflix deck · forms in MGMT 6130 ▸ Files ▸ H&SC Extras", cn:"下午 · 课前完成 JDS Short Form(第一份工作)+ MPS · 浏览 Netflix 讲义 · 表单: MGMT 6130 ▸ Files ▸ H&SC Extras" },
    },
    {
      date:"2026-07-09T19:00", type:"session", course:"BEPP",
      title:{ kr:"BEPP Review Session 4 (Inkoo)", en:"BEPP Review Session 4 (Inkoo)", cn:"BEPP 复习课 4 (Inkoo)" },
      detail:{ kr:"7 PM PT · ⚠️ 목요일 (평소 수요일 아님) · 워크시트 게시됨", en:"7 PM PT · ⚠️ Thursday (not the usual Wednesday) · worksheet posted", cn:"7 PM PT · ⚠️ 周四(非往常周三)· 练习题已发布" },
    },
    {
      date:"2026-07-17T09:30", type:"exam", course:"BEPP", hard:true,
      title:{ kr:"BEPP 중간고사", en:"BEPP midterm", cn:"BEPP 期中考试" },
      detail:{ kr:"9:30–11:30 AM · 합반 · 5문제/120분 · 치트시트 제공", en:"9:30–11:30 AM · joint · 5 problems/120 min · cheat sheet provided", cn:"上午9:30–11:30 · 合并班 · 5题/120分钟 · 提供速查表" },
    },
    {
      date:"2026-07-27", type:"paper", course:"HSC",
      title:{ kr:"HSC 페이퍼 마감", en:"HSC paper due", cn:"HSC 论文截止" },
      detail:{ kr:"", en:"", cn:"" },
    },
    {
      date:"2026-07-29T13:00", type:"session", course:"Excel",
      title:{ kr:"라이브 세션: Using AI with Excel", en:"Live session: Using AI with Excel", cn:"直播课: Using AI with Excel" },
      detail:{ kr:"1:00–2:00 PM PT · 선택 · 엑셀 스킬자료(Level 1·2 가이드 + 연습파일 + 단축키)는 Cohort Comm > Files에 1년간 상시", en:"1:00–2:00 PM PT · optional · Excel skill kit (Level 1·2 guides + practice files + shortcuts) is in Cohort Comm > Files for a year", cn:"下午1:00–2:00 PT · 选修 · Excel 技能资料(Level 1·2 指南 + 练习文件 + 快捷键)在 Cohort Comm > Files,保留一年" },
    },
    {
      date:"2026-07-30T17:30", type:"milestone", course:"Cohort",
      title:{ kr:"52 Family Day @ Parklab Gardens", en:"52 Family Day @ Parklab Gardens", cn:"52 Family Day @ Parklab Gardens" },
      detail:{ kr:"5:30–8:30 PM · 준비 설문은 7/6까지", en:"5:30–8:30 PM · prep survey due Jul 6", cn:"5:30–8:30 PM · 筹备问卷 7/6 前" },
    },
    {
      date:"2026-08-05", type:"milestone", course:"MGMT",
      title:{ kr:"팀 페이퍼 TA 미팅 예약 마감", en:"Team-paper TA meeting booked", cn:"团队论文 TA 会议预约截止" },
      detail:{ kr:"⚠️ 우리 팀 배정 TA 확인 후 예약 · 팀당 Calendly 1슬롯 · 팀 조율 먼저 (리드 Zorina Chen · 전략→Emily, 글로벌→Na Hyun)", en:"⚠️ Confirm your team's assigned TA, then book · 1 Calendly slot per team · coordinate first (Lead Zorina Chen · Strategy→Emily, Global→Na Hyun)", cn:"⚠️ 先确认本队分配的 TA 再预约 · 每队 Calendly 1个名额 · 先组内协调(组长 Zorina Chen · 战略→Emily,全球→Na Hyun)" },
    },
    {
      date:"2026-08-03", type:"milestone", course:"Block Week",
      title:{ kr:"8월 Block Week (SFO)", en:"August Block Week (SFO)", cn:"8月 Block Week (SFO)" },
      detail:{ kr:"8/3–6 · 신청한 과목 진행", en:"Aug 3–6 · your registered course", cn:"8/3–6 · 进行已选课程" },
    },
    {
      date:"2026-08-24", type:"milestone", course:"HSC",
      title:{ kr:"팀 기말 프로젝트 마감", en:"Final team project due", cn:"团队期末项目截止" },
      detail:{ kr:"팀 TA 체크인(필수)은 7/24–8/5 사이에 미리 잡아두기", en:"Mandatory team TA check-in must happen Jul 24–Aug 5 — book it early", cn:"团队 TA 签到(必须)需在 7/24–8/5 之间预约" },
    },
  ],

  /* ── 과목 카드 ───────────────────────────────────────────────────────────*/
  courses: [
    {
      code:"ACCT", color:"#e8590c",
      name:{ kr:"회계 (Lambert)", en:"Accounting (Lambert)", cn:"会计 (Lambert)" },
      headline:{ kr:"중간고사가 생각보다 가까워요 — 7/3", en:"Midterm is closer than you think — Jul 3", cn:"期中考试比你想的更近 — 7/3" },
      points:[
        { kr:"7/3(금) 9:30–11:30, Room 660 · 양 섹션 합반 · 종이·시간압박 시험", en:"Fri Jul 3, 9:30–11:30, Room 660 · both sections · paper-based, time-pressured", cn:"7/3(周五) 9:30–11:30, 660室 · 两班合并 · 纸笔·限时考试" },
        { kr:"범위 = 매출채권까지(현금 회수 역산 포함). 장기자산은 얕은 부분만 — 깊은 감가상각은 기말", en:"Scope = through A/R (incl. cash-collected reversal). Long-lived assets: shallow part only — deep depreciation is for the final", cn:"范围=至应收账款(含现金回收倒推)。长期资产只考浅层 — 深入折旧留到期末" },
        { kr:"오픈북·노트·랩탑·옛 시험 OK · 단 ChatGPT/인터넷 검색 금지 · 연필만", en:"Open book/notes/laptop/old exams OK · but NO ChatGPT/internet · pencil only", cn:"可带书·笔记·笔记本电脑·往年卷 · 但禁用ChatGPT/网络搜索 · 仅用铅笔" },
        { kr:"LIFO/FIFO 'reserve' 슬라이드는 출력해서 손 닿는 곳에 (외울 필요 X)", en:"Print the LIFO/FIFO 'reserve' slide and keep it handy (no need to memorize)", cn:"把 LIFO/FIFO 'reserve' 幻灯片打印出来放手边(无需背)" },
      ],
      traps:[
        { kr:"대손상각비↑ → 세금은 안 줄어든다 (세무책≠주주책)", en:"Higher bad-debt expense does NOT lower taxes (two books: tax ≠ shareholder)", cn:"坏账费用↑ → 税不会减少(税务账≠股东账)" },
        { kr:"재고회전율 보정 = 분모를 고친다 (Vulcan 8.5회→5.4회)", en:"Inventory-turnover restatement = fix the denominator (Vulcan 8.5×→5.4×)", cn:"存货周转率修正=改分母(Vulcan 8.5次→5.4次)" },
        { kr:"고객 회수현금 = 순채권 + 현금흐름표 조정값 (인수효과 이미 제거됨)", en:"Cash collected = net receivables + cash-flow-statement figure (acquisitions already stripped)", cn:"客户回收现金=净应收+现金流量表数值(已剔除并购影响)" },
      ],
    },
    {
      code:"MGMT", color:"#1971c2",
      name:{ kr:"전략 6130 (Siggelkow)", en:"Strategy 6130 (Siggelkow)", cn:"战略 6130 (Siggelkow)" },
      headline:{ kr:"개인 페이퍼 마감(6/29) 끝 · 이제 팀 기말 (8/24)", en:"Individual paper done (Jun 29) · now the team final (Aug 24)", cn:"个人论文已交(6/29)· 现在团队期末(8/24)" },
      points:[
        { kr:"팀 페이퍼 TA 미팅 — 우리 팀 배정 TA 확인 후 Calendly로 8/5까지 (팀당 1슬롯 · 리드 Zorina Chen)", en:"Team-paper TA meeting — confirm your team's assigned TA, then book Calendly by Aug 5 (1 slot/team · Lead Zorina Chen)", cn:"团队论文 TA 会议 — 先确认本队 TA,8/5前用 Calendly 预约(每队1个 · 组长 Zorina Chen)" },
        { kr:"팀 기말(8/24) 핵심 = 전략·HSC·글로벌 3모듈 통합 — 한 영역 이슈가 다른 영역에 주는 영향 연결, 가로지르는 결론", en:"Team final (Aug 24) key = integrate the Strategy/HSC/Global modules — link how one area affects another, with a cross-cutting conclusion", cn:"团队期末(8/24)关键 = 整合战略/HSC/全球三模块 — 串联各领域相互影响,给出贯穿性结论" },
        { kr:"팀 제안서 코멘트·점수는 Canvas Grades에 공개됨", en:"Team-proposal comments & scores are posted on Canvas (Grades)", cn:"团队提案评语与分数已在 Canvas(Grades)公布" },
        { kr:"전략 모듈 자료(toolkit·Disney/TJ/Philips·Philips 계산)는 Files에 — 팀 분석에 재활용 가능", en:"Strategy module materials (toolkit · Disney/TJ/Philips · Philips calcs) are in Files — reuse for the team analysis", cn:"战略模块资料(toolkit·Disney/TJ/Philips·Philips 计算)在 Files — 可用于团队分析" },
      ],
      traps:[
        { kr:"개념·프레임워크는 소수만 골라 깊게 (다 넣으면 깊이가 사라짐)", en:"Pick a few concepts/frameworks and go deep (cramming everything kills depth)", cn:"少选几个概念/框架深入(全塞进去会失去深度)" },
        { kr:"유추 빌리기 전에 '이게 왜 통했나?' 먼저 묻기", en:"Ask 'why did this actually work?' before borrowing any analogy", cn:"借用类比前先问'它当初为何奏效?'" },
        { kr:"two tests: 함께 가치 창출? / 그 가치 거두려고 꼭 소유해야?", en:"Two tests: create value together? / must you own it to capture that value?", cn:"两个检验: 是否共同创造价值? / 是否必须拥有才能获取该价值?" },
      ],
    },
    {
      code:"BEPP", color:"#2f9e44",
      name:{ kr:"미시경제 MGEC (Smetters)", en:"Microecon MGEC (Smetters)", cn:"微观经济 MGEC (Smetters)" },
      headline:{ kr:"보물이 떴어요 · 중간고사 7/17", en:"A goldmine dropped · midterm Jul 17", cn:"宝藏上线了 · 期中 7/17" },
      points:[
        { kr:"과거 중간고사 5개년 + 솔루션(2021–2025) Files에 게시 · 정답본 강의노트(L5/L8/L9/L10–11)도", en:"5 years of past midterms + solutions (2021–2025) now in Files · plus filled-in notes (L5/L8/L9/L10–11)", cn:"5年期中真题+答案(2021–2025)已上传 Files · 还有带答案讲义(L5/L8/L9/L10–11)" },
        { kr:"Smetters 공부 순서: 추가문제·recitation 먼저 충분히 → 과거 미드텀은 ~7/6부터 (맥락 없이 기출부터 점프 금지)", en:"Smetters' order: do the Additional Problems & recitations first → start past midterms ~Jul 6 (don't jump to old exams without context)", cn:"Smetters 顺序: 先做附加题与 recitation → 历年期中约从7/6开始(别无背景就跳到真题)" },
        { new:true, kr:"L12·13·14 — 이번 주말 수업에 인쇄해서 지참(Smetters) · 번들링은 기출 빈출이라 혼합번들 최적화 꼭 숙지", en:"L12·13·14 — bring them printed to this weekend's class (Smetters) · bundling is common on past exams, master mixed-bundling optimization", cn:"L12·13·14 — 本周末课带上打印版(Smetters)· 捆绑销售是真题高频,务必掌握混合捆绑优化" },
        { kr:"가격차별→2부요금제→번들링 마무리 (동질 회원비 $18 / 이질 P*=$1.5, F*≈$1.13)", en:"Finished price-discrim → two-part tariff → bundling (homog. fee $18 / heterog. P*=$1.5, F*≈$1.13)", cn:"价格歧视→两部定价→捆绑销售已讲完(同质会员费$18 / 异质 P*=$1.5, F*≈$1.13)" },
        { kr:"남은 리뷰: RS4 (7/9 7 PM) · 지난 Pras·RS 세션 자료는 Dropbox/공지 페이지에", en:"Remaining review: RS4 (Jul 9, 7 PM) · past Pras/RS session materials are on Dropbox / the announcement page", cn:"剩余复习: RS4(7/9 7 PM)· 往期 Pras/RS 资料在 Dropbox/公告页" },
      ],
      traps:[
        { kr:"⚠️ Canvas 시험 날짜 함정 — Aug 22/Sep 7은 작년(2025) 잔재. 실제 미드텀 7/17 · 기말 8/15", en:"⚠️ Canvas date trap — Aug 22/Sep 7 are last year's (2025). Real midterm Jul 17, final Aug 15", cn:"⚠️ Canvas 日期陷阱 — 8/22、9/7 为去年(2025)残留。实际期中 7/17、期末 8/15" },
        { kr:"⚠️ Inkoo는 새 공지 대신 기존 공지를 수정 (메일 안 옴) — 공지 페이지 재방문", en:"⚠️ Inkoo edits the existing announcement silently (no email) — re-visit the page", cn:"⚠️ Inkoo 会直接改旧公告而非发新公告(无邮件)— 请重访公告页" },
      ],
    },
    {
      code:"HSC", color:"#9c36b5",
      name:{ kr:"인적·사회적 자본 (MacDuffie)", en:"Human & Social Capital (MacDuffie)", cn:"人力与社会资本 (MacDuffie)" },
      headline:{ kr:"7/3 시작 — 안 당하려면 미리", en:"Starts Jul 3 — don't get ambushed", cn:"7/3 开始 — 提前准备,别措手不及" },
      points:[
        { new:true, kr:"7/3 Day1 사전과제(필수): JDS Short Form을 '대학 졸업 후 첫 직장' 기준으로 작성 → MPS 점수 계산해 오기. 양식: MGMT 6130 ▸ Files ▸ H&SC Extras", en:"Jul 3 Day-1 pre-work (required): fill the JDS Short Form for your 'first job after college' → compute your MPS. Forms: MGMT 6130 ▸ Files ▸ H&SC Extras", cn:"7/3 Day1 课前作业(必做): 以'大学毕业后第一份工作'填写 JDS Short Form → 算出 MPS。表单: MGMT 6130 ▸ Files ▸ H&SC Extras" },
        { kr:"Netflix Freedom & Responsibility 덱(Study.Net) 모듈 전 훑기", en:"Skim the Netflix Freedom & Responsibility deck (Study.Net) before the module", cn:"模块前浏览 Netflix Freedom & Responsibility 讲义(Study.Net)" },
        { kr:"Study.Net 코스팩 일찍 받았으면 다시 받기 (HSC 리딩 나중에 추가됨)", en:"Re-download the Study.Net coursepack if you got it early (HSC readings added later)", cn:"若早前已下载 Study.Net 课程包请重新下载(HSC 阅读材料后来才加)" },
        { kr:"HSC 페이퍼 7/27 · 팀 기말 8/24 · 팀 TA 체크인(필수) 7/24–8/5", en:"HSC paper Jul 27 · final team project Aug 24 · mandatory TA check-in Jul 24–Aug 5", cn:"HSC 论文 7/27 · 团队期末 8/24 · 团队 TA 签到(必须) 7/24–8/5" },
      ],
      traps:[],
    },
  ],

  /* ── 액션 체크리스트 (체크 상태는 브라우저에 저장됨) ──────────────────────*/
  actions:[
    { id:"a5", by:"2026-07-03", label:{ kr:"ACCT 옛 중간고사 시간재고 풀이 + LIFO/FIFO 슬라이드 출력", en:"Time-drill old ACCT midterms + print LIFO/FIFO slide", cn:"限时做 ACCT 往年期中卷 + 打印 LIFO/FIFO 幻灯片" } },
    { id:"a10", by:"2026-07-03", label:{ kr:"BEPP Lecture 12·13·14 인쇄해서 주말 수업에 지참", en:"Print BEPP Lectures 12·13·14 and bring to the weekend class", cn:"打印 BEPP Lecture 12·13·14 带去周末课" } },
    { id:"a6", by:"2026-07-03", label:{ kr:"HSC 사전과제: Job Diagnostic Survey + MPS 점수", en:"HSC pre-work: Job Diagnostic Survey + MPS score", cn:"HSC 课前作业: Job Diagnostic Survey + MPS 分数" } },
    { id:"a7", by:"2026-07-06", label:{ kr:"BEPP 과거 중간고사(2021–25) 풀기 시작", en:"Start BEPP past midterms (2021–25)", cn:"开始做 BEPP 往年期中卷(2021–25)" } },
    { id:"a9", by:"2026-07-06", label:{ kr:"52 Family Day 설문 작성 (Parklab Gardens)", en:"Fill out the 52 Family Day survey (Parklab Gardens)", cn:"填写 52 Family Day 问卷(Parklab Gardens)" } },
    { id:"a8", by:"2026-08-05", label:{ kr:"팀 페이퍼 TA 미팅 — 우리 팀 배정 TA 확인 후 Calendly 예약(팀당 1개), 8/5까지", en:"Team-paper TA meeting — confirm our team's TA, then book on Calendly (1 per team), by Aug 5", cn:"团队论文 TA 会议 — 确认本队 TA 后用 Calendly 预约(每队1个),8/5前" } },
  ],

  /* ── Canvas 자료 위치 맵 ─────────────────────────────────────────────────*/
  canvasMap:[
    {
      subject:"BEPP (MGEC)",
      where:{ kr:"Files > 1-Lectures: 'with blanks'(수업 전) → 'filled-in'(수업 후) + Additional Problems", en:"Files > 1-Lectures: 'with blanks' (pre) → 'filled-in' (post) + Additional Problems", cn:"Files > 1-Lectures: 'with blanks'(课前) → 'filled-in'(课后) + Additional Problems" },
      submit:{ kr:"시험은 지면", en:"Exams on paper", cn:"考试为纸笔" },
      watch:{ kr:"건너뛴 토픽은 Class Recordings 영상 · Inkoo는 공지를 조용히 수정", en:"Skipped topics in Class Recordings · Inkoo edits announcements silently", cn:"跳过的内容看 Class Recordings 录像 · Inkoo 会悄悄改公告" },
    },
    {
      subject:"ACCT",
      where:{ kr:"Files > 세션별 번호 폴더 01–21 (핸드아웃+케이스 풀이)", en:"Files > numbered session folders 01–21 (handouts + case solutions)", cn:"Files > 各课时编号文件夹 01–21(讲义+案例答案)" },
      submit:{ kr:"퀴즈는 Assignments 탭", en:"Quizzes in Assignments tab", cn:"测验在 Assignments 标签" },
      watch:{ kr:"폴더 31/32 = 기출, 93 = 교과서 솔루션", en:"Folders 31/32 = past exams, 93 = textbook solutions", cn:"文件夹 31/32=往年卷, 93=教材答案" },
    },
    {
      subject:"MGMT 6130",
      where:{ kr:"Files > Slides · 실라버스/FAQ/Fisher 메모는 Files 루트 · 리딩·케이스는 Study.Net 탭", en:"Files > Slides · syllabus/FAQ/Fisher memo in Files root · readings & cases in Study.Net tab", cn:"Files > Slides · 大纲/FAQ/Fisher 备忘在 Files 根目录 · 阅读与案例在 Study.Net 标签" },
      submit:{ kr:"Assignments 탭 (페이퍼·프로포절)", en:"Assignments tab (papers & proposals)", cn:"Assignments 标签(论文与提案)" },
      watch:{ kr:"두 섹션(751/752)이 한 사이트 공유 · Study.Net 팩 늦게 업데이트(재다운로드)", en:"Both sections (751/752) share one site · Study.Net pack updates late (re-download)", cn:"两个班(751/752)共用一个站点 · Study.Net 包更新较晚(需重新下载)" },
    },
    {
      subject:"Cohort Communication",
      where:{ kr:"Files > Weekend Schedule(매 수업 주말), Orientation, Resource Guides", en:"Files > Weekend Schedule (each class weekend), Orientation, Resource Guides", cn:"Files > Weekend Schedule(每个上课周末)、Orientation、Resource Guides" },
      submit:{ kr:"—", en:"—", cn:"—" },
      watch:{ kr:"물류(버스·호텔·행사) · 테크/도서관 세션 녹화는 Class Recordings", en:"Logistics (bus/hotel/events) · tech/library session recordings in Class Recordings", cn:"后勤(班车·酒店·活动) · 技术/图书馆课录像在 Class Recordings" },
    },
  ],

  /* ── 다음 수업 주말 일정표 ───────────────────────────────────────────────
     rows: { time, both } = 양 섹션 공통(한 칸) / { time, s1, s2 } = 섹션별
     각 칸 텍스트는 { kr, en, cn }. 강의명·교수·강의실은 보통 3언어 동일하게.
  ----------------------------------------------------------------------------*/
  schedule: {
    weekend: { kr:"7월 3일(금)–4일(토) · SFO", en:"Fri Jul 3 – Sat Jul 4 · SFO", cn:"7月3日(周五)–4日(周六) · SFO" },
    days: [
      {
        label: { kr:"금요일 7/3", en:"Friday 7/3", cn:"周五 7/3" },
        rows: [
          { time:"8:30–9:30",  both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
          { time:"9:30–11:30", both:{ kr:"ACCT 6130 중간고사 · Lambert · Room 660 (합반)", en:"ACCT 6130 Midterm · Lambert · Room 660 (both sections)", cn:"ACCT 6130 期中 · Lambert · Room 660 (两班合并)" } },
          { time:"11:30–1:00", both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
          { time:"1:00–4:00",  s1:{ kr:"MGMT 6130 · MacDuffie · Room 612", en:"MGMT 6130 · MacDuffie · Room 612", cn:"MGMT 6130 · MacDuffie · Room 612" }, s2:{ kr:"BEPP 6110 · Smetters · Room 615", en:"BEPP 6110 · Smetters · Room 615", cn:"BEPP 6110 · Smetters · Room 615" } },
          { time:"4:00–5:00",  both:{ kr:"Evening Starters · 612/615 Break Area", en:"Evening Starters · 612/615 Break Area", cn:"Evening Starters · 612/615 Break Area" } },
          { time:"4:15–6:15",  s1:{ kr:"BEPP 6110 · Smetters · Room 615", en:"BEPP 6110 · Smetters · Room 615", cn:"BEPP 6110 · Smetters · Room 615" }, s2:{ kr:"MGMT 6130 · MacDuffie · Room 612", en:"MGMT 6130 · MacDuffie · Room 612", cn:"MGMT 6130 · MacDuffie · Room 612" } },
          { time:"6:30–8:00",  both:{ kr:"석식 · Dining Room", en:"Dinner · Dining Room", cn:"晚餐 · Dining Room" } },
        ],
      },
      {
        label: { kr:"토요일 7/4", en:"Saturday 7/4", cn:"周六 7/4" },
        rows: [
          { time:"8:00–9:00",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
          { time:"9:00–12:00",  s1:{ kr:"BEPP 6120 · Smetters · Room 615", en:"BEPP 6120 · Smetters · Room 615", cn:"BEPP 6120 · Smetters · Room 615" }, s2:{ kr:"MGMT 6130 · MacDuffie · Room 612", en:"MGMT 6130 · MacDuffie · Room 612", cn:"MGMT 6130 · MacDuffie · Room 612" } },
          { time:"12:00–1:00",  both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
          { time:"1:00–4:00",   s1:{ kr:"MGMT 6130 · MacDuffie · Room 612", en:"MGMT 6130 · MacDuffie · Room 612", cn:"MGMT 6130 · MacDuffie · Room 612" }, s2:{ kr:"BEPP 6120 · Smetters · Room 615", en:"BEPP 6120 · Smetters · Room 615", cn:"BEPP 6120 · Smetters · Room 615" } },
        ],
      },
    ],
    notes: [
      { kr:"⚠️ 섹션 1·2가 BEPP/MGMT 순서 반대 — 본인 섹션 꼭 확인 · 금 오후 MGMT 6130 = HSC 모듈 Day 1 (MacDuffie)", en:"⚠️ Sections 1 & 2 run BEPP/MGMT in opposite order — check your section · Fri PM MGMT 6130 = HSC module Day 1 (MacDuffie)", cn:"⚠️ 第1/2班 BEPP/MGMT 顺序相反 — 请确认自己的班 · 周五下午 MGMT 6130 = HSC 模块 Day 1 (MacDuffie)" },
      { kr:"🏨 호텔: The Hyatt Regency SF (5 Embarcadero Ctr)", en:"🏨 Hotel: The Hyatt Regency SF (5 Embarcadero Ctr)", cn:"🏨 酒店: The Hyatt Regency SF (5 Embarcadero Ctr)" },
      { kr:"📚 스터디룸: Board Rooms A·B·C · 금 5:00–11:00 PM", en:"📚 Study rooms: Board Rooms A·B·C · Fri 5:00–11:00 PM", cn:"📚 自习室: Board Rooms A·B·C · 周五 5:00–11:00 PM" },
      { kr:"🍻 Wharton Pub: Hyatt Eclipse Bar · 금 8:30–11:30 PM", en:"🍻 Wharton Pub: Hyatt Eclipse Bar · Fri 8:30–11:30 PM", cn:"🍻 Wharton Pub: Hyatt Eclipse Bar · 周五 8:30–11:30 PM" },
      { kr:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM", en:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM", cn:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM" },
    ],
  },

  /* ── 디너 & 소셜 (외부 플래너 사이트 연동) ───────────────────────────────
     url 사이트를 카드 + (embed:true 면) 화면에 바로 임베드해서 보여줍니다.
     사이트가 임베드를 막으면 빈 칸이 보일 수 있는데, 그땐 embed:false 로 바꾸면
     버튼만 남습니다. */
  social: {
    url: "https://wemba52sfsocial.netlify.app/",        // 버튼이 여는 전체 사이트
    embedUrl: "https://wemba52sfsocial.netlify.app/#dinners", // (embed:true 일 때만 사용)
    embed: false,   // 외부 사이트라 임베드하면 불필요한 정보가 따라옴 → 버튼만 표시
    desc: {
      kr:"금요일 디너는 동네·Afters를 함께 정하고 그룹(최대 8명)별로 식당을 골라요. 그룹에 참여하거나 직접 만들 수 있고, 팀 캡틴이 예약을 맡습니다. (목요일 도착·토요일 수업 후 모임도)",
      en:"For Friday dinner, pick a shared neighborhood/Afters, then each group (max 8) chooses its restaurant. Join a group or start your own; a team captain books it. (Thursday arrivals & Saturday after-class too.)",
      cn:"周五聚餐先共同选定街区·Afters,各组(最多8人)自选餐厅。可加入或自建小组,由队长负责预订。(也有周四抵达与周六课后活动。)",
    },
    cta: { kr:"디너 약속 정하러 가기", en:"Open the dinner planner", cn:"去安排聚餐" },
  },
};
