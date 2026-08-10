/* ============================================================================
   WEMBA 52 생존 대시보드 — 데이터 파일
   ----------------------------------------------------------------------------
   매주 발행할 때 이 파일만 수정하면 됩니다. (index.html은 건드릴 필요 없음)

   업데이트 순서
   1) meta.lastUpdated 를 갱신한 날짜로 변경
   2) deadlines[] 에 새 일정 추가 (지난 일정은 화면에서 자동 숨김 — 정리 시 삭제)
   3) 필요하면 whatsNew / courses / blockWeek / actions / canvasMap / schedule 갱신
      + changelog 맨 위에 새 날짜 블록 추가

   날짜 형식: "YYYY-MM-DDTHH:mm" (시간 있음) 또는 "YYYY-MM-DD" (종일).
   모든 시간은 자동으로 미 태평양시(PT)로 계산됩니다.
   모든 텍스트는 { kr:"한국어", en:"English", cn:"中文" } 세 언어를 같이 적습니다.
   (cn 을 비워두면 화면에서 해당 언어 선택 시 kr 로 대체 표시됩니다.)
   ============================================================================ */

const DATA = {
  meta: {
    cohort: "WEMBA 52",
    lastUpdated: "2026-08-10",   // ← 업데이트할 때마다 이 날짜만 바꾸세요 (YYYY-MM-DD)
    author:   "Sally",
    tzLabel:  "PT",
    // 예외: 시험이 없어도 이 날(PST) 하루만 '수고했어요' 축하 삽화를 강제 표시 (자정에 자동으로 사라짐).
    // 안 쓸 땐 date를 "" 로 비워두면 됩니다.
    cheerOverride: {
      date: "",
      sub: { kr:"다들 시험 수고 많았어요 🎉 남은 여정도 함께 화이팅!",
             en:"Great work on the exams, everyone! 🎉\nLet's finish strong together!",
             cn:"大家考试辛苦了 🎉 剩下的旅程一起加油!" },
    },
  },

  /* ── 업데이트 내역 ───────────────────────────────────────────────────────
     헤더의 "업데이트 내역" 링크를 누르면 대시보드 안에서 이 목록이 떠요.
     매번 업데이트할 때 맨 위에 새 날짜 블록을 추가하세요 (최신이 위로).
     비워두면([]) 헤더에 링크가 안 보입니다. */
  changelog: [
    { date:"2026-08-10", items:[
      { kr:"🔄 **BEPP 전범위 리뷰 세션 날짜 변경 반영 — 8/9(일) → 8/12(수) 저녁**(Pras 8/10 공지, Zoom 링크 별도 안내). 마감 목록·BEPP 카드·할 일 전부 갱신", en:"🔄 BEPP full-review session rescheduled — Sun 8/9 → Wed 8/12 evening (Pras, 8/10; Zoom link to follow). Updated across the deadline list, the BEPP card and the action list", cn:"🔄 BEPP 全范围复习课改期 — 8/9(周日)→ 8/12(周三)晚(Pras 8/10 通知,Zoom 链接另行通知)。截止列表·BEPP 卡·待办已同步" },
      { kr:"⚠️ **기말 기출 정답 키 오류 4건 등재** — 2025 Q4 Swatters(Pc=$9·Pr=$6, 최종 답이 뒤집힘) · 2023 Q1(c) 결론 문장 반대 · 2023 Q5(c) $21,029.20 · 2025 Q5(a) wealth 10,000. 자세한 내용은 What's New 참조", en:"⚠️ Logged 4 answer-key errors in the past finals — 2025 Q4 Swatters (Pc=$9, Pr=$6; the final answer flips) · 2023 Q1(c) opposite conclusion sentence · 2023 Q5(c) $21,029.20 · 2025 Q5(a) wealth 10,000. Details in What's New", cn:"⚠️ 记录4处真题答案错误 — 2025 Q4 Swatters(Pc=$9·Pr=$6,最终答案颠倒)· 2023 Q1(c) 结论句相反 · 2023 Q5(c) $21,029.20 · 2025 Q5(a) 财富 10,000。详见 What's New" },
      { kr:"📕 Pras 티칭 노트(보험·시장 비대칭 11p) 배포 소식 추가 · 📝 **강의평가 마감 8/28(금) 11:59 PM ET** 신규 등재(ACCT 6130·BEPP 6110·BEPP 6120)", en:"📕 Added Pras's teaching note (Insurance and Market Asymmetry, 11 pages) · 📝 New deadline: course evaluations due Fri 8/28, 11:59 PM ET (ACCT 6130 · BEPP 6110 · BEPP 6120)", cn:"📕 新增 Pras 教学笔记(保险与市场不对称,11页)· 📝 新增截止: 课程评估 8/28(周五)11:59 PM ET(ACCT 6130·BEPP 6110·BEPP 6120)" },
    ]},
    { date:"2026-08-06", items:[
      { kr:"🆕 ACCT 기말 Zoom 리뷰 세션 추가 — 8/10(월) 7:30 PM PT, 녹화 제공 · BEPP RS5 자료(문제+연습+풀이) 게시 반영", en:"🆕 Added the ACCT final-exam Zoom review — Mon 8/10, 7:30 PM PT, recorded · BEPP RS5 materials (problems + practice + solutions) posted", cn:"🆕 新增 ACCT 期末 Zoom 复习课 — 8/10(周一)7:30 PM PT,有录像 · BEPP RS5 资料(题+练习+答案)已发" },
      { kr:"🧹 대시보드 대청소 — 과목 카드에서 미드텀 시절 정보 정리(ACCT 중간통계 → 기말 관점 · BEPP Shivani 맵/3차 가격차별은 L1–8 파트로 한정) · ⚠️ ACCT Quiz 7 마감시각 8:50 PM → **11:50 PM PT**로 정정(7월 연장분 반영)", en:"🧹 Dashboard cleanup — retired midterm-era info from the course cards (ACCT midterm stats → finals framing · BEPP Shivani map/3rd-degree PD scoped to the L1–8 part) · ⚠️ ACCT Quiz 7 deadline corrected 8:50 PM → 11:50 PM PT (the July extension)", cn:"🧹 看板大扫除 — 清理科目卡中的期中时代信息(ACCT 期中统计 → 期末视角 · BEPP Shivani 题图/三级价格歧视限定于 L1–8 部分)· ⚠️ ACCT Quiz 7 截止时间更正 8:50 PM → 11:50 PM PT(7月已延长)" },
      { kr:"🌏 과목 카드 개편 — HSC 카드(모듈 종료)를 **Global 카드(Hernandez/Zeke)**로 교체: Luckin 메모·C24 McKinsey 리딩·메모 접근법·함정 3개. MGMT 카드는 팀 기말(8/24) 전담", en:"🌏 Course cards reshuffled — the HSC card (module over) is now the Global card (Hernandez/Zeke): Luckin memo · C24 McKinsey reading · memo approach · 3 traps. The MGMT card now focuses on the team final (8/24)", cn:"🌏 科目卡改组 — HSC 卡(模块结束)换为 Global 卡(Hernandez/Zeke): Luckin 备忘·C24 McKinsey 阅读·备忘方法·3个陷阱。MGMT 卡专注团队期末(8/24)" },
    ]},
    { date:"2026-08-05", items:[
      { kr:"📅 기말 주말 8/14(금)–15(토) 공식 일정표 공개 — 양 섹션 합반, Room 660. 금: ACCT 기말 9:30–12:30 → Global(Hernandez) 2:00–5:00 · 토: BEPP 기말 9:00–12:00 → Global 마지막 세션 1:00–4:00 → 종강 토스트 4:00–5:00", en:"📅 Finals weekend Aug 14 (Fri)–15 (Sat) official schedule out — both sections together, Room 660. Fri: ACCT final 9:30–12:30 → Global (Hernandez) 2:00–5:00 · Sat: BEPP final 9:00–12:00 → Global last session 1:00–4:00 → End of Term Toast 4:00–5:00", cn:"📅 期末周末 8/14(周五)–15(周六)官方课表公布 — 两班合并,Room 660。周五: ACCT 期末 9:30–12:30 → Global(Hernandez)2:00–5:00 · 周六: BEPP 期末 9:00–12:00 → Global 末节 1:00–4:00 → 期末 Toast 4:00–5:00" },
      { kr:"💼 Luckin 메모 마감 = **8/10(월) 11:59 PM PT 확정** — Zeke가 구두로 '8/11' 했지만 8/3 이메일이 8/10로 확정(이메일 우선). 창의적 글쓰기 X, ADDING·CAGE·AAA·BBB 팩에 그대로 적용", en:"💼 Luckin memo due = Mon 8/10, 11:59 PM PT (confirmed) — Zeke said '8/11' verbally but his 8/3 email confirms 8/10 (the email governs). Not a creative-writing exercise; straight application of ADDING·CAGE·AAA·BBB to the packet", cn:"💼 Luckin 备忘截止 = 8/10(周一)11:59 PM PT(确认)— Zeke 口头说'8/11'但 8/3 邮件确认 8/10(以邮件为准)。非创意写作,直接把 ADDING·CAGE·AAA·BBB 应用于资料包" },
      { kr:"🎯 BEPP 기말 스프린트 — Pras가 후반부 세션 4개 전부 게시(S8 게임이론·S9 효용극대·S10 워런티/정보비대칭·S11 경매) · ⚠️ 일 8/9 저녁 '전범위 리뷰 세션'(평소보다 이른 시작) — 딱 한 번만 라이브 참석한다면 이거", en:"🎯 BEPP final sprint — Pras posted all 4 post-midterm sessions (S8 game theory · S9 utility max · S10 warranties/asymmetry · S11 auctions) · ⚠️ Sun 8/9 evening full-review session (earlier than usual) — if you attend one live session, make it this", cn:"🎯 BEPP 期末冲刺 — Pras 已发全部4节后半课(S8 博弈论·S9 效用最大·S10 保修/信息不对称·S11 拍卖)· ⚠️ 周日 8/9 晚全范围复习课(比平时早)— 只参加一次直播就选它" },
      { kr:"📗 ACCT 기말 — 기출상 예년엔 오픈북·누적(단, Lambert/TA에 현재 규칙 재확인) · 배점 큰 토픽 = Income Taxes·Bonds·Shareholders' Equity(신규 덱 3개) · 📝 팀 페이퍼(8/24) TA 팁: 범위 좁혀도 OK(모듈당 프레임 2개·깊이 우선), 통합/종합 섹션이 점수, 인터뷰 불필요", en:"📗 ACCT final — past exams show prior years were open-book & cumulative (confirm current rules with Lambert/TA) · heaviest topics = Income Taxes·Bonds·Shareholders' Equity (the 3 new decks) · 📝 Team paper (8/24) TA tips: narrowing scope is safe (~2 frameworks/module, depth > coverage), integration/synthesis is the grade, interviews not required", cn:"📗 ACCT 期末 — 真题显示往年为开卷·累积(向 Lambert/TA 确认当前规则)· 高分主题 = Income Taxes·Bonds·Shareholders' Equity(3套新讲义)· 📝 团队论文(8/24)TA 提示: 可缩小范围(每模块约2个框架·深度优先),整合/综合部分是得分点,无需访谈" },
      { kr:"📖 기말 주말 필독 — MGMT 마지막 세션(C24)용 McKinsey 'Multinationals at a crossroads'(실라버스 밖·Zeke 8/3 이메일 지정). 10개 지정학 요인 사이드바까지 전부 읽기 · Class Photo 8/28 12:45–1:45로 시간 확정", en:"📖 Finals-weekend required reading — McKinsey 'Multinationals at a crossroads' for MGMT's last session (C24) (outside the syllabus; Zeke's 8/3 email). Read the whole thing incl. the 10 geopolitical-factor sidebars · Class Photo confirmed 8/28 12:45–1:45", cn:"📖 期末周末必读 — MGMT 末节(C24)的 McKinsey 'Multinationals at a crossroads'(大纲外·Zeke 8/3 邮件)。含10个地缘政治要素边栏全读 · Class Photo 确定 8/28 12:45–1:45" },
    ]},
    { date:"2026-07-26", items:[
      { kr:"⚠️ ACCT Quiz 6·7 분리 — Quiz 6만 7/29(TP 문제 포함, TP 슬라이드 먼저), Quiz 7은 8/12로 이동. #12의 '6·7 7/29'는 더 이상 유효하지 않음", en:"⚠️ ACCT Quiz 6·7 split — Quiz 6 only on 7/29 (includes a Transfer Pricing question, skim TP slides first), Quiz 7 moved to 8/12. #12's '6·7 on 7/29' is no longer true", cn:"⚠️ ACCT Quiz 6·7 拆分 — 仅 Quiz 6 在 7/29(含转让定价题,先看 TP 幻灯),Quiz 7 移至 8/12。#12 的'6·7 在7/29'已失效" },
      { kr:"📚 다음 수업 주말 7/30(목)–8/1(토) 일정표 추가 — Global 모듈 시작(Hernandez). 목요일 시작·Family Day(7/30)·Convene 투어·개인 브랜딩 워크샵. Global 케이스 C17–20 사전 리딩 매핑", en:"📚 Added the next class weekend Jul 30 (Thu)–Aug 1 (Sat) — Global module begins (Hernandez). Thursday start · Family Day (7/30) · Convene tour · Personal Branding workshop. Global cases C17–20 mapped as pre-reading", cn:"📚 新增下个上课周末 7/30(周四)–8/1(周六)— Global 模块开始(Hernandez)。周四开始·Family Day(7/30)·Convene 参观·个人品牌工作坊。Global 案例 C17–20 映射为预读" },
      { kr:"🎯 BEPP 기말 상세 확정(Kent 7/23): 8/15 · L1–17(L1–8 약 1/3·L9–17 약 2/3) · 3시간·8문항 전부 · closed book + 치트시트 2장(양면=4면) · 계산기 O·폰 X · 기출 2021–25 게시", en:"🎯 BEPP final details out (Kent 7/23): 8/15 · L1–17 (~1/3 on L1–8, ~2/3 on L9–17) · 3 hours · all 8 questions · closed book + TWO cheat sheets (both sides = 4 faces) · calculator yes, phone no · past finals 2021–25 posted", cn:"🎯 BEPP 期末细节公布(Kent 7/23): 8/15 · L1–17(L1–8 约1/3·L9–17 约2/3)· 3小时·全部8题 · 闭卷+2张速查表(双面=4面)· 可用计算器·禁手机 · 真题 2021–25 已发布" },
      { kr:"💼 Global 메모 = Luckin Coffee(8/10) — ADDING·CAGE·AAA·BBB 4개 프레임(각 25%)을 프레스 팩에 적용 · 외부 리서치 금지·AI 사용 시 전체 프롬프트 부록 공개 필수 · 팩은 주말 전에 읽기 · 강의평가 마감 7/27(ET) · 등록금 7/31 · Quiz 7→8/12", en:"💼 Global memo = Luckin Coffee (8/10) — apply ADDING·CAGE·AAA·BBB (25% each) to the press packet · no outside research · any AI use must disclose full prompts in an appendix · read the packet before the weekend · course eval due 7/27 (ET) · tuition 7/31 · Quiz 7→8/12", cn:"💼 Global 备忘 = Luckin Coffee(8/10)— 将 ADDING·CAGE·AAA·BBB(各25%)应用于新闻资料包 · 禁止外部研究 · 用 AI 须在附录公开完整提示词 · 周末前读资料包 · 课评截止 7/27(ET)· 学费 7/31 · Quiz 7→8/12" },
    ]},
  ],

  /* ── What's New (기존 섹션에 안 맞는 새 소식 · 최신이 위로) ────────────────
     해결되거나 오래된 항목은 지우면 됩니다. date 는 화면에 작은 날짜로 표시. */
  whatsNew: [
    { date:"2026-08-10", kr:"🔄 **BEPP 전범위 리뷰 세션이 8/9(일) → 8/12(수) 저녁으로 변경**(Pras 8/10 공지) — Zoom 링크는 별도 안내 예정. ⚠️ 같은 날이 ACCT Quiz 7 마감(11:50 PM PT)이니 퀴즈를 먼저 끝내두세요", en:"🔄 The BEPP full-review session moved from Sun 8/9 to Wed 8/12 evening (Pras, 8/10) — Zoom link to follow. ⚠️ ACCT Quiz 7 is due the same day (11:50 PM PT), so finish the quiz first", cn:"🔄 BEPP 全范围复习课由 8/9(周日)改为 8/12(周三)晚(Pras 8/10 通知)— Zoom 链接另行通知。⚠️ 当日 ACCT Quiz 7 截止(11:50 PM PT),请先做完小测" },
    { date:"2026-08-10", kr:"📕 **Pras 티칭 노트 배포 — 보험·시장 비대칭(Insurance and Market Asymmetry, 11p)**: 2020–2025 기출 6개년의 해당 문제를 전부 모아 완전 풀이한 자료. Pras 왈 기말에서 **가장 많이 출제되는 영역** · 기말 8토픽 중 ⑥보험·역선택 + ⑦레몬·워런티 커버 · 반응이 좋으면 나머지 토픽도 같은 방식으로 제작 예정(동기방 요청 가능)", en:"📕 Pras released a teaching note — Insurance and Market Asymmetry (11 pages): every related question from the 2020–2025 finals, fully worked. Pras calls it one of the most heavily tested areas on the final · covers topics ⑥ insurance/adverse selection and ⑦ lemons/warranties · he'll build the same for other topics if there's demand", cn:"📕 Pras 发布教学笔记 — 保险与市场不对称(11页): 汇总 2020–2025 六年真题相关题目的完整解答。Pras 称这是期末考查最多的领域之一 · 覆盖八大主题中的⑥保险/逆向选择与⑦柠檬市场/保修 · 若反响好会继续制作其他主题" },
    { date:"2026-08-10", kr:"⚠️ **기말 기출 정답 키 오류 4건 확인** — 그대로 외우면 틀립니다. ① **2025 Q4 Swatters Pickleball (a): Pc=$9(Competitive)·Pr=$6(Recreational)** — 배포 키는 뒤바뀜(최종 답이 뒤집히는 유일한 건, Inkoo 확인 요청 중) ② 2023 Q1(c) Baseball Card: 키 마지막 문장이 정반대 — 정답은 **Hanson 유지**(3127.82 > 3126.39) ③ 2023 Q5(c) ACAWOG: 풀이 중간 '$21,092.2' → **$21,029.20**(자릿수 전치) ④ 2025 Q5(a) Travel Lite: 식의 부(wealth) '1,000' → **10,000** · ②③④는 최종 답은 맞고 서술/식만 어긋난 유형이니, 셀프 채점 때 키를 믿고 내 풀이를 고치지 마세요", en:"⚠️ Four errors found in the final-exam answer keys — don't memorize them as-is. ① 2025 Q4 Swatters Pickleball (a): Pc=$9 (Competitive), Pr=$6 (Recreational) — the distributed key has these reversed (the only one where the final answer flips; confirmation requested from Inkoo) ② 2023 Q1(c) Baseball Card: the key's last sentence states the opposite — the answer is to stay with Hanson (3127.82 > 3126.39) ③ 2023 Q5(c) ACAWOG: '$21,092.2' mid-solution → $21,029.20 (transposed digits) ④ 2025 Q5(a) Travel Lite: wealth printed as '1,000' → 10,000 · In ②③④ the bolded final answers are correct — only the narration/equation slips, so don't 'fix' your own correct work when self-grading", cn:"⚠️ 期末真题答案发现4处错误 — 照抄会错。① 2025 Q4 Swatters Pickleball (a): Pc=$9(Competitive)·Pr=$6(Recreational)— 发布的答案颠倒(唯一影响最终答案的一处,已请 Inkoo 确认)② 2023 Q1(c): 答案末句结论相反 — 正解是保留 Hanson(3127.82 > 3126.39)③ 2023 Q5(c): 解题中的 '$21,092.2' → $21,029.20(数字转置)④ 2025 Q5(a): 式中财富 '1,000' → 10,000 · ②③④ 最终粗体答案正确,仅叙述/公式有误,自评时不要据此改掉自己正确的解法" },
    { date:"2026-08-10", kr:"📝 **강의평가 열림 — ACCT 6130 · BEPP 6110 · BEPP 6120 (마감 8/28 금 11:59 PM ET)**. upenn.edu/eval · 과목당 2–5분, 10–12문항 · 익명 · Teaching Excellence Award 수상자 선정에도 반영됩니다 · 기술문의 wh-course-eval@wharton.upenn.edu", en:"📝 Course evaluations are open — ACCT 6130 · BEPP 6110 · BEPP 6120 (due Fri 8/28, 11:59 PM ET). upenn.edu/eval · 2–5 min each, 10–12 questions · confidential · also feeds the Teaching Excellence Award selection · tech support: wh-course-eval@wharton.upenn.edu", cn:"📝 课程评估已开放 — ACCT 6130 · BEPP 6110 · BEPP 6120(截止 8/28 周五 11:59 PM ET)。upenn.edu/eval · 每门2–5分钟、10–12题 · 匿名 · 也用于 Teaching Excellence Award 评选 · 技术支持 wh-course-eval@wharton.upenn.edu" },
    { date:"2026-08-07", kr:"💼 기말 주말에 **Shannon Connelly 커리어 1:1 상담** 진행 — 캠퍼스 상주, **careerpath에서 사전 예약** 필요(8/7 Ian 공지) · ⏰ ACCT **Quiz 8 마감 = 8/13(목) 8:50 PM PT 확정**(Quiz 7의 11:50과 다르니 주의!)", en:"💼 Shannon Connelly is on campus for 1:1 career chats during the finals weekend — sign up on careerpath (Ian, 8/7) · ⏰ ACCT Quiz 8 deadline confirmed: Thu 8/13, 8:50 PM PT (note: different from Quiz 7's 11:50!)", cn:"💼 期末周末 Shannon Connelly 提供一对一职业咨询 — 需在 careerpath 预约(8/7 Ian 公告)· ⏰ ACCT Quiz 8 截止确认: 8/13(周四)8:50 PM PT(与 Quiz 7 的 11:50 不同,注意!)" },
    { date:"2026-08-06", kr:"🆕 ACCT 기말 **Zoom 리뷰 세션 — 8/10(월) 7:30 PM PT** 신규 공지(녹화본 Canvas 제공) · ⚠️ 같은 날 밤이 Luckin 메모 마감(11:59 PT) — 메모는 주말에 끝내두기 · 📄 BEPP RS5 자료 게시(INKOO 문제+PRACTICE+Solutions)", en:"🆕 New: ACCT final-exam Zoom review — Mon 8/10, 7:30 PM PT (recorded & posted to Canvas) · ⚠️ same evening as the Luckin memo deadline (11:59 PT) — finish the memo over the weekend · 📄 BEPP RS5 materials posted (INKOO problems + PRACTICE + Solutions)", cn:"🆕 新: ACCT 期末 Zoom 复习课 — 8/10(周一)7:30 PM PT(有录像上传 Canvas)· ⚠️ 与 Luckin 备忘截止(11:59 PT)同晚 — 备忘请周末完成 · 📄 BEPP RS5 资料已发(INKOO 题+PRACTICE+答案)" },
    { date:"2026-08-05", kr:"🔴 마감 레드존 — 월 8/10 11:59 PT: **Luckin 메모**(Zeke가 구두로 '8/11' 했지만 8/3 이메일=8/10 확정) · 수 8/12: ACCT Quiz 7 · 목 8/13: ACCT Quiz 8(시험주에 퀴즈 2개, 미리 처리) · BEPP Quiz 1–5는 8/14까지 재응시 연습용", en:"🔴 Deadline red zone — Mon 8/10 11:59 PT: Luckin memo (Zeke said '8/11' verbally but his 8/3 email confirms 8/10) · Wed 8/12: ACCT Quiz 7 · Thu 8/13: ACCT Quiz 8 (two quizzes in exam week — knock them out early) · BEPP Quizzes 1–5 stay open until 8/14 as practice", cn:"🔴 截止红区 — 周一 8/10 11:59 PT: Luckin 备忘(Zeke 口头说'8/11'但 8/3 邮件确认 8/10)· 周三 8/12: ACCT Quiz 7 · 周四 8/13: ACCT Quiz 8(考试周两个小测,尽早做)· BEPP Quiz 1–5 开放至 8/14 供练习" },
    { date:"2026-08-05", kr:"📅 기말 주말 8/14(금)–15(토) 공식 일정표 공개 — 양 섹션 합반·**Room 660**. 금: ACCT 기말 9:30–12:30 → 점심+Convene 투어 → Global(Hernandez) 2:00–5:00. 토: BEPP 기말 9:00–12:00 → Global 마지막 세션 1:00–4:00 → 🥂종강 토스트 4:00–5:00(52GLO 합류). 아래 일정표에 반영", en:"📅 Finals weekend Aug 14 (Fri)–15 (Sat) official schedule out — both sections together, Room 660. Fri: ACCT final 9:30–12:30 → lunch + Convene tour → Global (Hernandez) 2:00–5:00. Sat: BEPP final 9:00–12:00 → Global last session 1:00–4:00 → 🥂 End of Term Toast 4:00–5:00 (52GLO joining). See the schedule below", cn:"📅 期末周末 8/14(周五)–15(周六)官方课表公布 — 两班合并·Room 660。周五: ACCT 期末 9:30–12:30 → 午餐+Convene 参观 → Global(Hernandez)2:00–5:00。周六: BEPP 期末 9:00–12:00 → Global 末节 1:00–4:00 → 🥂期末 Toast 4:00–5:00(52GLO 加入)。见下方课表" },
    { date:"2026-08-05", kr:"📖 기말 주말 **필독** — MGMT 마지막 세션(C24 'Global Strategy in a Changing World Order')용 McKinsey **'Multinationals at a crossroads'**. 실라버스 밖·Zeke 8/3 이메일 지정 · **10개 지정학 요인 사이드바까지 전부** 읽기 · 링크는 8/3 Canvas 공지('Global Memo Tips + Class 24 Reading')", en:"📖 Finals-weekend required reading — McKinsey 'Multinationals at a crossroads' for MGMT's last session (C24 'Global Strategy in a Changing World Order'). Outside the syllabus; Zeke's 8/3 email · read the whole thing incl. the 10 geopolitical-factor sidebars · link is in the 8/3 Canvas announcement ('Global Memo Tips + Class 24 Reading')", cn:"📖 期末周末必读 — MGMT 末节(C24 'Global Strategy in a Changing World Order')的 McKinsey 'Multinationals at a crossroads'。大纲外·Zeke 8/3 邮件 · 含10个地缘政治要素边栏全读 · 链接在 8/3 Canvas 公告('Global Memo Tips + Class 24 Reading')" },
    { date:"2026-08-05", kr:"🎯 BEPP 기말 — Pras가 후반부 세션 4개 전부 게시(S8 게임이론·S9 효용극대/보험·S10 워런티/정보비대칭·S11 경매 → L9–17 커버 완료) · ⚠️ 전범위 리뷰 세션 — ~~일 8/9~~ → **수 8/12 저녁으로 변경**(8/10 공지) · S11 경매=공식 2개(수입등가·입찰셰이딩)만 암기 · 치트시트 2장(4면)", en:"🎯 BEPP final — Pras posted all 4 post-midterm sessions (S8 game theory · S9 utility max/insurance · S10 warranties/asymmetry · S11 auctions → L9–17 fully covered) · ⚠️ Full-review session moved from Sun 8/9 to Wed 8/12 evening (announced 8/10) · S11 auctions = memorize just 2 formulas (revenue equivalence / bid shading) · two cheat sheets (4 sides)", cn:"🎯 BEPP 期末 — Pras 已发全部4节后半课(S8 博弈论·S9 效用最大/保险·S10 保修/信息不对称·S11 拍卖 → L9–17 全覆盖)· ⚠️ 全范围复习课由 8/9(周日)改为 8/12(周三)晚(8/10 通知)· S11 拍卖=只背2个公式(收入等价/出价收缩)· 2张速查表(4面)" },
    { date:"2026-08-05", kr:"📗 ACCT 기말 — 기출상 예년엔 **오픈북·누적**(단 현재 규칙은 Lambert/TA에 재확인!) · 배점 큰 토픽 = **Income Taxes·Bonds·Shareholders' Equity**(새 덱 3개) · 8/14 금 오전", en:"📗 ACCT final — past exams indicate prior years were open-book & cumulative (but confirm current rules with Lambert/TA!) · heaviest topics = Income Taxes·Bonds·Shareholders' Equity (the 3 new decks) · Fri 8/14 morning", cn:"📗 ACCT 期末 — 真题显示往年为开卷·累积(但当前规则请向 Lambert/TA 确认!)· 高分主题 = Income Taxes·Bonds·Shareholders' Equity(3套新讲义)· 8/14 周五上午" },
    { date:"2026-08-05", kr:"📝 팀 페이퍼(8/24) — Zorina TA 미팅(8/4) 요점: ① 범위 좁혀도 감점 X(모듈당 프레임 ~2개·깊이>커버리지) ② 통합이 점수 — 렌즈 간 연결 + 권고를 이끄는 종합 섹션 ③ 1차 인터뷰 불필요(공개자료 잘 코딩하면 충분, 시험주에 인터뷰 쫓지 말 것)", en:"📝 Team paper (8/24) — from the Zorina TA meeting (8/4): ① narrowing scope won't cost points (~2 frameworks/module, depth > coverage) ② integration is the grade — bridges between lenses + a synthesis section carrying the recommendations ③ primary interviews not required (good coding of public sources is enough; don't chase interviews in exam week)", cn:"📝 团队论文(8/24)— Zorina TA 会议(8/4)要点: ① 缩小范围不扣分(每模块约2个框架·深度>覆盖)② 整合是得分 — 跨视角衔接+承载建议的综合部分 ③ 无需一手访谈(公开资料编码到位即可;考试周别追访谈)" },
  ],

  /* ── 마감 / 일정 ──────────────────────────────────────────────────────────
     type: registration | exam | paper | quiz | session | milestone
     hard: true 이면 "놓치면 아픈" 빨간 강조
  ----------------------------------------------------------------------------*/
  deadlines: [
    {
      date:"2026-08-12", type:"session", course:"BEPP", hard:true, new:true,
      title:{ kr:"BEPP 전범위 리뷰 세션 (수 저녁) ⚠️날짜 변경", en:"BEPP full-review session (Wed eve) ⚠️date changed", cn:"BEPP 全范围复习课(周三晚)⚠️日期变更" },
      detail:{ kr:"🔄 **8/9(일) → 8/12(수) 저녁으로 변경**(Pras 8/10 공지) · Zoom 링크는 별도 안내 예정 · 후반부(L9–17) 전범위 · 한 학기 딱 한 번 라이브면 이거! · ⚠️ 같은 날 ACCT Quiz 7 마감(11:50 PM PT)이니 퀴즈 먼저 끝내두기", en:"🔄 Moved from Sun 8/9 to Wed 8/12 evening (Pras, 8/10) · Zoom link to follow · full post-midterm (L9–17) review · the one live session to attend all term · ⚠️ ACCT Quiz 7 is due the same day (11:50 PM PT) — finish the quiz first", cn:"🔄 由 8/9(周日)改为 8/12(周三)晚(Pras 8/10 通知)· Zoom 链接另行通知 · 后半程(L9–17)全范围 · 一学期只参加一次直播就选它 · ⚠️ 当日 ACCT Quiz 7 截止(11:50 PM PT),先做完小测" },
    },
    {
      date:"2026-08-10T19:30", type:"session", course:"ACCT", new:true,
      title:{ kr:"ACCT 기말 Zoom 리뷰 세션 (Lambert)", en:"ACCT final-exam Zoom review (Lambert)", cn:"ACCT 期末 Zoom 复习课 (Lambert)" },
      detail:{ kr:"월 7:30 PM PT · Zoom(공지 8/5) · 녹화본 Canvas 제공 — 못 들어가면 녹화로 · ⚠️ 같은 날 밤 Luckin 메모 마감(11:59 PT)과 겹침 → 메모는 주말에 미리", en:"Mon 7:30 PM PT · Zoom (announced 8/5) · recorded & posted on Canvas — catch the recording if you can't join · ⚠️ same evening as the Luckin memo deadline (11:59 PT) → finish the memo over the weekend", cn:"周一 7:30 PM PT · Zoom(8/5 公告)· 有录像上传 Canvas — 进不去可看录像 · ⚠️ 与 Luckin 备忘截止(11:59 PT)同晚 → 备忘请周末提前完成" },
    },
    {
      date:"2026-08-10T23:59", type:"paper", course:"MGMT", hard:true, new:true,
      title:{ kr:"Global 메모 마감 (Luckin Coffee)", en:"Global memo due (Luckin Coffee)", cn:"Global 备忘截止 (Luckin Coffee)" },
      detail:{ kr:"11:59 PM PT · ⚠️ Zeke 구두로 '8/11' 했지만 8/3 이메일=8/10 확정(이메일 우선) · 창의적 글쓰기 X — ADDING·CAGE·AAA·BBB(각 25%)를 프레스 팩에 그대로 적용 · 지침+팩=Canvas Global Module · 외부 리서치 금지(체크)·AI 쓰면 전체 프롬프트 부록 필수", en:"11:59 PM PT · ⚠️ Zeke said '8/11' verbally but his 8/3 email confirms 8/10 (email governs) · not creative writing — straight application of ADDING·CAGE·AAA·BBB (25% each) to the packet · instructions+packet = Canvas Global Module · no outside research (they check) · AI use must disclose full prompts in an appendix", cn:"11:59 PM PT · ⚠️ Zeke 口头说'8/11'但 8/3 邮件确认 8/10(以邮件为准)· 非创意写作 — 直接把 ADDING·CAGE·AAA·BBB(各25%)应用于资料包 · 说明+资料包=Canvas Global Module · 禁外部研究(核查)· 用 AI 须附录公开完整提示词" },
    },
    {
      date:"2026-08-12T23:50", type:"quiz", course:"ACCT", new:true,
      title:{ kr:"ACCT Quiz 7 마감", en:"ACCT Quiz 7 due", cn:"ACCT Quiz 7 截止" },
      detail:{ kr:"⚠️ 7/24에 7/29 → 8/12로 이동됨(Quiz 6에서 분리) · Quiz 1–5도 8/14까지 재오픈(기말 복습 재응시)", en:"⚠️ moved from 7/29 to 8/12 on 7/24 (split off from Quiz 6) · Quizzes 1–5 also re-open until 8/14 (re-attempt as final review)", cn:"⚠️ 7/24 从 7/29 移至 8/12(与 Quiz 6 拆分)· Quiz 1–5 也重开至 8/14(可重做作期末复习)" },
    },
    {
      date:"2026-08-13T20:50", type:"quiz", course:"ACCT",
      title:{ kr:"ACCT Quiz 8 마감", en:"ACCT Quiz 8 due", cn:"ACCT Quiz 8 截止" },
      detail:{ kr:"8:50 PM PT ✔확정(과제 공지 기준 — Quiz 7과 달리 연장 없음) · 오픈 8/1 · 기말 하루 전", en:"8:50 PM PT (confirmed — no extension, unlike Quiz 7) · opens Aug 1 · day before the final", cn:"8:50 PM PT(已确认 — 与 Quiz 7 不同,无延长)· 8/1开放 · 期末前一天" },
    },
    {
      date:"2026-08-13", type:"paper", course:"MGMT", new:true,
      title:{ kr:"📖 기말 주말 필독 — McKinsey (C24)", en:"📖 Finals-weekend required reading — McKinsey (C24)", cn:"📖 期末周末必读 — McKinsey (C24)" },
      detail:{ kr:"MGMT 마지막 세션(C24 'Global Strategy in a Changing World Order')용 · McKinsey 'Multinationals at a crossroads' — 실라버스 밖, Zeke 8/3 이메일 지정 · **10개 지정학 요인 사이드바까지 전부** 읽기 · 링크는 8/3 Canvas 공지", en:"For MGMT's last session (C24 'Global Strategy in a Changing World Order') · McKinsey 'Multinationals at a crossroads' — outside the syllabus, from Zeke's 8/3 email · read the whole thing incl. the 10 geopolitical-factor sidebars · link in the 8/3 Canvas announcement", cn:"用于 MGMT 末节(C24 'Global Strategy in a Changing World Order')· McKinsey 'Multinationals at a crossroads' — 大纲外,Zeke 8/3 邮件 · 含10个地缘政治要素边栏全读 · 链接在 8/3 Canvas 公告" },
    },
    {
      date:"2026-08-13", type:"registration", course:"Cohort", new:true,
      title:{ kr:"커리어 1:1 상담 예약 (기말 주말)", en:"Book a 1:1 career chat (finals weekend)", cn:"预约一对一职业咨询(期末周末)" },
      detail:{ kr:"Shannon Connelly가 8/14–15 캠퍼스 상주 — **careerpath에서 사전 예약**(8/7 Ian 공지) · 관심 있으면 시험 주간 전에 잡아둘 것", en:"Shannon Connelly is on campus 8/14–15 — sign up on careerpath (Ian, 8/7) · grab a slot before exam week if you want one", cn:"Shannon Connelly 8/14–15 在校 — 在 careerpath 预约(8/7 Ian 公告)· 有意者请在考试周前预约" },
    },
    {
      date:"2026-08-14T09:30", type:"exam", course:"ACCT", hard:true, new:true,
      title:{ kr:"ACCT 기말고사", en:"ACCT final", cn:"ACCT 期末考试" },
      detail:{ kr:"금 9:30–12:30 · Room 660(합반) · 기출상 예년엔 오픈북·누적 → 현재 규칙은 Lambert/TA에 재확인! · 배점 큰 토픽=Income Taxes·Bonds·Shareholders' Equity(새 덱 3개)", en:"Fri 9:30–12:30 · Room 660 (joint) · past exams suggest prior years were open-book & cumulative → confirm current rules with Lambert/TA! · heaviest topics = Income Taxes·Bonds·Shareholders' Equity (the 3 new decks)", cn:"周五 9:30–12:30 · Room 660(合班)· 真题显示往年开卷·累积 → 当前规则请向 Lambert/TA 确认!· 高分主题=Income Taxes·Bonds·Shareholders' Equity(3套新讲义)" },
    },
    {
      date:"2026-08-15T09:00", type:"exam", course:"BEPP", hard:true, new:true,
      title:{ kr:"BEPP 기말고사", en:"BEPP final", cn:"BEPP 期末考试" },
      detail:{ kr:"토 9:00–12:00 · Room 660(합반) · 3시간 · 범위 L1–17(L1–8 약1/3·L9–17 약2/3) · 8문항 전부 · closed book + **치트시트 2장(양면=4면)** · 계산기 O·폰 X · Pras 후반부 세션 S8–S11(게임이론·효용·워런티·경매) 전부 게시 · 기출 2021–25", en:"Sat 9:00–12:00 · Room 660 (joint) · 3 hours · scope L1–17 (~1/3 on L1–8, ~2/3 on L9–17) · all 8 questions · closed book + TWO cheat sheets (4 sides) · calculator yes, phone no · Pras post-midterm sessions S8–S11 (game theory · utility · warranties · auctions) all posted · past finals 2021–25", cn:"周六 9:00–12:00 · Room 660(合班)· 3小时 · 范围 L1–17(L1–8 约1/3·L9–17 约2/3)· 全部8题 · 闭卷 + **2张速查表(4面)**· 可用计算器·禁手机 · Pras 后半课 S8–S11(博弈论·效用·保修·拍卖)全部已发 · 真题 2021–25" },
    },
    {
      date:"2026-08-24", type:"milestone", course:"MGMT", hard:true,
      title:{ kr:"팀 기말 프로젝트 마감", en:"Final team project due", cn:"团队期末项目截止" },
      detail:{ kr:"11:59 PM PDT · 성적 31% · TA 팁(8/4): 범위 좁혀도 감점 X(모듈당 프레임 ~2개·깊이>커버리지)·통합/종합 섹션이 점수·1차 인터뷰 불필요(공개자료 코딩으로 충분)", en:"11:59 PM PDT · 31% of grade · TA tips (8/4): narrowing scope won't cost points (~2 frameworks/module, depth > coverage) · integration/synthesis is the grade · primary interviews not required (coding public sources is enough)", cn:"11:59 PM PDT · 占31% · TA 提示(8/4): 缩小范围不扣分(每模块约2框架·深度>覆盖)· 整合/综合是得分 · 无需一手访谈(公开资料编码即可)" },
    },
    {
      date:"2026-08-15T16:00", type:"milestone", course:"Cohort", new:true,
      title:{ kr:"🥂 종강 토스트 (End of Term Toast)", en:"🥂 End of Term Toast", cn:"🥂 期末 Toast" },
      detail:{ kr:"4:00–5:00 PM · Dining Room · BEPP 기말 직후 · 52GLO도 합류 · 한 텀 마무리 축하 🎉", en:"4:00–5:00 PM · Dining Room · right after the BEPP final · 52GLO joining · celebrate wrapping the term 🎉", cn:"4:00–5:00 PM · Dining Room · BEPP 期末后 · 52GLO 加入 · 庆祝学期结束 🎉" },
    },
    {
      date:"2026-08-28T23:59", type:"registration", course:"Cohort", new:true,
      title:{ kr:"📝 강의평가 마감 (3과목)", en:"📝 Course evaluations due (3 courses)", cn:"📝 课程评估截止(3门)" },
      detail:{ kr:"금 11:59 PM **ET** · upenn.edu/eval · 대상 = ACCT 6130 · BEPP 6110 · BEPP 6120 · 과목당 2–5분(10–12문항)·익명 · Teaching Excellence Award 선정에 반영 · 기술문의 wh-course-eval@wharton.upenn.edu (Penn ID 기재)", en:"Fri 11:59 PM ET · upenn.edu/eval · ACCT 6130 · BEPP 6110 · BEPP 6120 · 2–5 min each (10–12 questions), confidential · feeds the Teaching Excellence Award selection · tech support: wh-course-eval@wharton.upenn.edu (include your Penn ID)", cn:"周五 11:59 PM ET · upenn.edu/eval · ACCT 6130 · BEPP 6110 · BEPP 6120 · 每门2–5分钟(10–12题)·匿名 · 用于 Teaching Excellence Award 评选 · 技术支持 wh-course-eval@wharton.upenn.edu(请附 Penn ID)" },
    },
    {
      date:"2026-08-28T12:45", type:"milestone", course:"Cohort",
      title:{ kr:"클래스 단체 사진", en:"Class photo", cn:"班级合照" },
      detail:{ kr:"12:45–1:45 (점심시간) · Dining Room", en:"12:45–1:45 (at lunch) · Dining Room", cn:"12:45–1:45(午餐时间)· Dining Room" },
    },
  ],

  /* ── 과목 카드 ───────────────────────────────────────────────────────────*/
  courses: [
    {
      code:"ACCT", color:"#e8590c",
      name:{ kr:"회계 (Lambert)", en:"Accounting (Lambert)", cn:"会计 (Lambert)" },
      headline:{ kr:"기말 8/14 9:30 Room 660 — 오픈북·누적?(재확인)", en:"Final Aug 14, 9:30, Room 660 — open-book & cumulative? (confirm)", cn:"期末 8/14 9:30 Room 660 — 开卷·累积?(确认)" },
      points:[
        { new:true, kr:"🖥 기말 Zoom 리뷰 세션 = 8/10(월) 7:30 PM PT (공지 8/5) — 녹화본 Canvas 제공. ⚠️ 같은 날 밤 Luckin 메모 마감과 겹침 → 메모는 주말에 미리", en:"🖥 Final-exam Zoom review = Mon 8/10, 7:30 PM PT (announced 8/5) — recorded & posted to Canvas. ⚠️ overlaps the Luckin memo deadline that night → finish the memo over the weekend", cn:"🖥 期末 Zoom 复习课 = 8/10(周一)7:30 PM PT(8/5 公告)— 有录像上传 Canvas。⚠️ 与当晚 Luckin 备忘截止重叠 → 备忘请周末提前完成" },
        { new:true, kr:"📗 기말 = 8/14 금 9:30–12:30 Room 660 · 기출상 예년엔 **오픈북·누적** → 현재 규칙은 Lambert/TA에 꼭 재확인! · 배점 큰 토픽 = **Income Taxes · Bonds · Shareholders' Equity**(새 덱 3개, 후반부가 핵심)", en:"📗 Final = Fri 8/14, 9:30–12:30, Room 660 · past exams indicate prior years were open-book & cumulative → confirm current rules with Lambert/TA! · heaviest topics = Income Taxes · Bonds · Shareholders' Equity (the 3 new decks — the back half is where it lives)", cn:"📗 期末 = 周五 8/14 9:30–12:30 Room 660 · 真题显示往年开卷·累积 → 务必向 Lambert/TA 确认当前规则!· 高分主题 = Income Taxes · Bonds · Shareholders' Equity(3套新讲义,后半程为重点)" },
        { new:true, kr:"⚠️ 시험주 퀴즈 2개 — Quiz 7 마감 8/12(수), Quiz 8 마감 8/13(목, 기말 전날). 미리 처리 · Quiz 1–5는 8/14까지 재오픈(복습 재응시)", en:"⚠️ Two quizzes in exam week — Quiz 7 due Wed 8/12, Quiz 8 due Thu 8/13 (day before the final). Knock them out early · Quizzes 1–5 re-open until 8/14 (re-attempt review)", cn:"⚠️ 考试周两个小测 — Quiz 7 截 8/12(周三),Quiz 8 截 8/13(周四,期末前一天)。尽早做 · Quiz 1–5 重开至 8/14(复习重做)" },
        { kr:"미드텀 자료(Files ▸ Midterm Exam ▸ Midterm–2026): 문제 PDF·풀이 docx·Quiz 1–5 통계 — 반환 시험지와 대조해 복기", en:"Midterm set (Files ▸ Midterm Exam ▸ Midterm–2026): questions PDF · solution docx · Quiz 1–5 stats — review against your returned paper", cn:"期中资料(Files ▸ Midterm Exam ▸ Midterm–2026): 试题 PDF·答案 docx·Quiz 1–5 统计 — 对照返还卷复盘" },
        { kr:"중간이 아쉬웠다면 기회: Lambert가 '기말을 더 잘 보면 실라버스보다 가중치를 높여주겠다' 언급 · 중간 하위권 대부분 = 미완성 답안 → 기말에선 '모든 문항 완료'가 완벽보다 중요", en:"If the midterm stung, there's upside: Lambert said he'll weight the final more than the syllabus if you do better · most low midterm scores were incomplete papers → on the final, finishing every question beats perfection", cn:"期中不理想也有机会: Lambert 说期末更好会加大其权重 · 期中低分多为未完成答卷 → 期末'答完每题'胜过完美" },
        { kr:"범위 참고: 중간에서 얕게 다룬 감가상각·장기자산도 기말에서 본격화 (누적 범위·종이 채점) — 다만 배점 우선순위는 위의 빅3(Income Taxes·Bonds·SE)", en:"Scope note: depreciation & long-lived assets (only skimmed at the midterm) go deep on the final (cumulative, hand-graded) — but the point-weight priority is still the big three above (Income Taxes·Bonds·SE)", cn:"范围提示: 期中浅涉的折旧与长期资产在期末深入(累积范围·纸质手批)— 但分值优先级仍是上面三大主题(Income Taxes·Bonds·SE)" },
      ],
      traps:[
        { kr:"대손상각비↑ → 세금은 안 줄어든다 (세무책≠주주책) — 기말에도 유효", en:"Higher bad-debt expense does NOT lower taxes (two books: tax ≠ shareholder) — still true for the final", cn:"坏账费用↑ → 税不会减少(税务账≠股东账)— 期末仍适用" },
        { kr:"고객 회수현금 = 순채권 + 현금흐름표 조정값 (인수효과 이미 제거됨)", en:"Cash collected = net receivables + cash-flow-statement figure (acquisitions already stripped)", cn:"客户回收现金=净应收+现金流量表数值(已剔除并购影响)" },
      ],
    },
    {
      code:"MGMT", color:"#1971c2",
      name:{ kr:"전략 6130 (Siggelkow)", en:"Strategy 6130 (Siggelkow)", cn:"战略 6130 (Siggelkow)" },
      headline:{ kr:"팀 기말 8/24 — 3모듈 통합이 점수 (Luckin·C24는 Global 카드)", en:"Team final Aug 24 — cross-module integration is the grade (Luckin & C24 → Global card)", cn:"团队期末 8/24 — 跨模块整合是得分(Luckin·C24 见 Global 卡)" },
      points:[
        { kr:"✅ 전략·HSC 모듈 완료(HSC 페이퍼 7/27 제출) — 이제 두 모듈의 이슈를 Global과 함께 팀 기말에서 통합", en:"✅ Strategy & HSC modules wrapped (HSC paper submitted 7/27) — now integrate both with Global in the team final", cn:"✅ 战略·HSC 模块已结束(HSC 论文 7/27 已交)— 接下来与 Global 一起在团队期末整合" },
        { new:true, kr:"📝 팀 페이퍼(8/24) — Zorina TA 미팅(8/4) 요점: ① 범위 좁혀도 감점 X(모듈당 프레임 ~2개·깊이>커버리지) ② 통합이 점수 — 렌즈 간 연결+권고를 이끄는 종합 섹션 ③ 1차 인터뷰 불필요(공개자료 코딩으로 충분, 시험주에 인터뷰 쫓지 말기)", en:"📝 Team paper (8/24) — from the Zorina TA meeting (8/4): ① narrowing scope won't cost points (~2 frameworks/module, depth > coverage) ② integration is the grade — bridges between lenses + a synthesis section carrying the recommendations ③ primary interviews not required (coding public sources is enough; don't chase interviews in exam week)", cn:"📝 团队论文(8/24)— Zorina TA 会议(8/4): ① 缩小范围不扣分(每模块约2框架·深度>覆盖)② 整合是得分 — 跨视角衔接+承载建议的综合部分 ③ 无需一手访谈(公开资料编码即可;考试周别追访谈)" },
        { kr:"📊 전략 페이퍼 정답 가이드('6130_Strategy Answer Guide', Files) — 점수 12.5–16(평균 ≈14.5) · 채점 5축=Theory·Data·Analysis·Organization·Application(HSC·팀 기말도 동일 예상)", en:"📊 Strategy answer guide ('6130_Strategy Answer Guide', Files) — scores 12.5–16 (mean ≈14.5) · 5 grading axes = Theory·Data·Analysis·Organization·Application (likely same for HSC & team final)", cn:"📊 战略答案指南('6130_Strategy Answer Guide', Files)— 分数 12.5–16(均分 ≈14.5)· 5项标准=Theory·Data·Analysis·Organization·Application(HSC 与团队期末预计相同)" },
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
      headline:{ kr:"기말 8/15 집중 — L9–17·치트시트 2장", en:"Final Aug 15 focus — L9–17 · two cheat sheets", cn:"主攻期末 8/15 — L9–17·两张速查表" },
      points:[
        { new:true, kr:"🎯 기말 상세(Kent 7/23): 8/15 · 3시간 · L1–17(**L1–8 약1/3 · L9–17 약2/3** — 후반부가 배점 큼) · 8문항 전부 · closed book + **치트시트 2장(8.5×11 양면=4면)** — 미드텀의 2배 · 계산기 O·폰 X", en:"🎯 Final details (Kent 7/23): 8/15 · 3 hours · L1–17 (~1/3 on L1–8, ~2/3 on L9–17 — the back half carries the points) · all 8 questions · closed book + TWO cheat sheets (8.5×11, both sides = 4 faces) — double the midterm · calculator yes, phone no", cn:"🎯 期末细节(Kent 7/23): 8/15 · 3小时 · L1–17(**L1–8 约1/3 · L9–17 约2/3** — 后半占分多)· 全部8题 · 闭卷 + **2张速查表(8.5×11双面=4面)** — 期中的两倍 · 可用计算器·禁手机" },
        { new:true, kr:"📌 후반부 세션 4개 전부 게시(슬라이드+영상): S8 게임이론 · S9 효용극대/보험 · S10 워런티/정보비대칭 · S11 경매 → L9–17 커버 완료 · 세션6(이부가격·번들링)=기말 최소 2문항, 세션7(과점)=추가 예상", en:"📌 All 4 post-midterm sessions posted (slides+video): S8 game theory · S9 utility max/insurance · S10 warranties/asymmetry · S11 auctions → L9–17 fully covered · Session 6 (two-part tariffs + bundling) = ≥2 questions, Session 7 (oligopoly) = ~2 more likely", cn:"📌 后半4节全发(幻灯+视频): S8 博弈论 · S9 效用最大/保险 · S10 保修/信息不对称 · S11 拍卖 → L9–17 全覆盖 · 第6课(二部收费+捆绑)=至少2题,第7课(寡头)=预计再2题" },
        { new:true, kr:"🔄 **전범위 리뷰 세션이 8/9(일) → 8/12(수) 저녁으로 변경**(Pras 8/10 공지, Zoom 링크 별도 안내) — 딱 한 번 라이브면 이거! · 💡 S11 경매=공식 2개(수입등가·입찰셰이딩)만 암기, 나머지는 세팅 인식 · S10=계산 전에 '어떤 개념 묻는지' 먼저 파악(Scoot 2021 자습)", en:"🔄 The full-review session moved from Sun 8/9 to Wed 8/12 evening (Pras, 8/10; Zoom link to follow) — if you attend one live session, make it this · 💡 S11 auctions = memorize just 2 formulas (revenue equivalence / bid shading), the rest is setup recognition · S10 = recognize which concept before you compute (Scoot 2021 self-study)", cn:"🔄 全范围复习课由 8/9(周日)改为 8/12(周三)晚(Pras 8/10 通知,Zoom 链接另行通知)— 只参加一次直播就选它 · 💡 S11 拍卖=只背2个公式(收入等价/出价收缩),其余是套路识别 · S10=计算前先判断'考哪个概念'(Scoot 2021 自学)" },
        { new:true, kr:"📚 기출 기말 **2021–25**(정답 포함) Canvas에 게시 — 2025 새로 추가(드롭박스는 2020–24였음). Kent 순서: 노트 → 리뷰세션 → 연습문제 → 기출(\"기출만 보지 말 것\")", en:"📚 Past finals 2021–25 (with answers) now on Canvas — 2025 is new (the Dropbox set was 2020–24). Kent's order: notes → review sessions → practice problems → past exams (\"do not simply look at past exams\")", cn:"📚 期末真题 2021–25(含答案)已在 Canvas — 2025 新增(Dropbox 曾为 2020–24)。Kent 顺序: 笔记 → 复习课 → 练习题 → 真题(\"别只看真题\")" },
        { kr:"📐 채점 규칙(TA 확인): 유도 없는 답 = **0점** · 적용 없는 개념 = **0점** · 소수점 그대로 OK(반올림 감점 없음) · 접근을 보여주면 부분점수 후함", en:"📐 Grading rules (TA-confirmed): answers without derivation = ZERO · concepts without application = ZERO · decimals are fine (no rounding penalty) · partial credit is generous if you show your approach", cn:"📐 评分规则(TA确认): 无推导的答案=**0分** · 无应用的概念=**0分** · 小数可保留(不扣分)· 展示思路给分慷慨" },
        { kr:"🔧 기출 정오표 — 2023 Q1a: 중간점은 17이 아니라 **15** · 2024 Q2a: 총비용 합계 **3,260,328** · 2025 Q2b/c: 장기이윤 **$0**, 가격 **$20** · ⚠️ 오타 아님: 2025 Q3b는 가격이 **$4.20→$3.50** · 2022 Q4c에서 Pras와 Canvas 풀이가 다르면 **Canvas가 채점 기준**", en:"🔧 Past-exam errata — 2023 Q1a: midpoint uses 15, not 17 · 2024 Q2a: total cost adds to 3,260,328 · 2025 Q2b/c: LR profit = $0, price = $20 · ⚠️ NOT a typo: 2025 Q3b the price change is $4.20→$3.50 · 2022 Q4c: where Pras and Canvas solutions disagree, Canvas is the grading standard", cn:"🔧 真题勘误 — 2023 Q1a: 中点用 **15** 而非17 · 2024 Q2a: 总成本合计 **3,260,328** · 2025 Q2b/c: 长期利润 **$0**,价格 **$20** · ⚠️ 非笔误: 2025 Q3b 价格变化为 **$4.20→$3.50** · 2022 Q4c 若 Pras 与 Canvas 答案不一致,**以 Canvas 为评分标准**" },
        { kr:"미드텀 때 쓰던 Shivani 문제맵·Concept Refresher는 L1–8 파트(≈1/3) 복습용으로만 — 기말 메인은 기출 기말 2021–25(정답 포함)+Pras S6–S11 · Concept Refresher는 마지막 1–2일 점검용(모든 개념 동일 비중이라 주 가이드 X)", en:"Shivani's midterm problem map & the Concept Refresher are now just for the L1–8 part (≈1/3) — the finals mains are past finals 2021–25 (with answers) + Pras S6–S11 · Concept Refresher = last-1–2-days inventory only (it weighs all concepts equally; the exam doesn't)", cn:"期中用的 Shivani 题图·Concept Refresher 现仅用于 L1–8 部分(≈1/3)— 期末主力是期末真题 2021–25(含答案)+ Pras S6–S11 · Concept Refresher 仅供最后1–2天清点(对概念等权重,非主指南)" },
        { kr:"L1–8 파트(≈1/3) 계산 핵심 = 3차 가격차별 (1·2차는 개념으로만) — 후반부 계산은 S6–S11 유형(이부가격·번들링·게임이론·보험·워런티·경매)", en:"For the L1–8 part (≈1/3), calc = 3rd-degree price discrimination (1st/2nd conceptual only) — back-half calc follows the S6–S11 patterns (two-part tariffs·bundling·game theory·insurance·warranties·auctions)", cn:"L1–8 部分(≈1/3)计算核心 = 三级价格歧视(一/二级只考概念)— 后半计算按 S6–S11 套路(二部收费·捆绑·博弈论·保险·保修·拍卖)" },
        { kr:"정확한 최적가격을 물으면 무조건 MR=MC (\"절대 틀리지 않는다\") · 탄력성은 방향(올릴까/내릴까)·근사값용", en:"Asked for the exact optimal price? Set MR = MC (\"you will never be wrong\") · elasticity only gives direction or an approximation", cn:"问最优价格就用 MR=MC(\"永远不会错\")· 弹性只判断方向或近似" },
        { kr:"시그니처: 문제에 수요곡선이 2개 = 가격차별 문제 예고 (차별 가능한가부터 판단)", en:"Signature: two demand curves in a problem = a price-discrimination question is coming (first ask: can they discriminate?)", cn:"信号: 题里有两条需求曲线 = 价格歧视题(先判断能否歧视)" },
        { kr:"차별 불가 시: 수요를 반드시 수량형으로 합산(가격형 금지) + 킹크 포인트 확인 — Q나 P가 음수면 구간을 잘못 고른 것", en:"No discrimination possible: add demands in quantity form (never price form) + check the kink point — a negative Q or P means you picked the wrong segment", cn:"不能歧视时: 需求务必按数量形式相加(禁止价格形式)+ 检查拐点 — Q或P为负说明选错区间" },
        { kr:"부분점수 후함 — 케이스 나열 + 근거만 써도 ≈90%. 얼지 말고 경우의 수를 적기", en:"Partial credit is generous — writing the options + your reasoning ≈ 90% of the points. Don't freeze; list the cases", cn:"部分分很慷慨 — 列出情形+理由 ≈ 90% 分。别卡住,把情况写下来" },
        { kr:"🗓 기말 준비 도구: 기말 토픽 리스트(8개) + RS5 풀세트 게시 8/6(INKOO 문제+PRACTICE+Solutions · 세션은 8/5 완료) · L12–17 'filled in' PDF 전부 게시(게임이론~경매 = 기말 후반부)", en:"🗓 Finals toolkit: finals topic list (8 topics) + RS5 full set posted 8/6 (INKOO problems + PRACTICE + Solutions · session held 8/5) · L12–17 'filled in' PDFs all posted (game theory through auctions = the final's back half)", cn:"🗓 期末工具: 期末主题清单(8个)+ RS5 全套已发 8/6(INKOO 题+PRACTICE+答案 · 8/5 已上课)· L12–17 'filled in' PDF 已全发(博弈论至拍卖 = 期末后半)" },
      ],
      traps:[
        { kr:"⚠️ 단위 함정 — 모든 비용을 수요의 단위에 맞추기 (연간 라이선스→일당 · 에이커당→단위당)", en:"⚠️ Units trap — match every cost to the demand's unit (per-year license → per-day · per-acre → per-unit)", cn:"⚠️ 单位陷阱 — 所有成本要换算成需求的单位(年费→按天 · 每英亩→每单位)" },
        { kr:"⚠️ Canvas 시험 날짜 함정 — Aug 22/Sep 7은 작년(2025) 잔재. 실제 기말은 8/15(토) 9:00", en:"⚠️ Canvas date trap — Aug 22/Sep 7 are last year's (2025). The real final is Sat 8/15, 9:00", cn:"⚠️ Canvas 日期陷阱 — 8/22、9/7 为去年(2025)残留。实际期末为 8/15(周六)9:00" },
        { kr:"⚠️ Inkoo는 새 공지 대신 기존 공지를 수정 (메일 안 옴) — 공지 페이지 재방문", en:"⚠️ Inkoo edits the existing announcement silently (no email) — re-visit the page", cn:"⚠️ Inkoo 会直接改旧公告而非发新公告(无邮件)— 请重访公告页" },
      ],
    },
    {
      code:"GLOBAL", color:"#0c8599",
      name:{ kr:"글로벌 전략 (Hernandez/Zeke)", en:"Global Strategy (Hernandez/Zeke)", cn:"全球战略 (Hernandez/Zeke)" },
      headline:{ kr:"Luckin 메모 8/10 · C24 McKinsey 리딩 · 기말 주말 오후 수업", en:"Luckin memo Aug 10 · C24 McKinsey reading · finals-weekend afternoons", cn:"Luckin 备忘 8/10 · C24 McKinsey 阅读 · 期末周末下午上课" },
      points:[
        { new:true, kr:"💼 Luckin Coffee 메모 = **8/10(월) 11:59 PT 확정** — Zeke 구두 '8/11'이지만 8/3 이메일이 8/10로 확정(이메일 우선). 창의적 글쓰기 X, ADDING·CAGE·AAA·BBB(각 25%) 팩에 그대로 적용 · 외부 리서치 금지(체크)·AI 쓰면 전체 프롬프트 부록 공개 · Na Hyun TA 온라인 오피스아워는 **8/7(금)까지만** — 프레임 점검은 이번 주 안에(Calendly)", en:"💼 Luckin Coffee memo = Mon 8/10, 11:59 PT confirmed — Zeke said '8/11' verbally but his 8/3 email confirms 8/10 (email governs). Not creative writing; straight application of ADDING·CAGE·AAA·BBB (25% each) to the packet · no outside research (they check) · AI use must disclose full prompts in an appendix · Na Hyun's virtual office hours end Fri 8/7 — get your framework sanity-check this week (Calendly)", cn:"💼 Luckin Coffee 备忘 = 8/10(周一)11:59 PT 确认 — Zeke 口头'8/11'但 8/3 邮件确认 8/10(以邮件为准)。非创意写作,直接把 ADDING·CAGE·AAA·BBB(各25%)应用于资料包 · 禁外部研究(核查)· 用 AI 须附录公开完整提示词 · Na Hyun TA 线上答疑仅到 8/7(周五)— 框架检查请本周内(Calendly)" },
        { new:true, kr:"📖 기말 주말 필독(MGMT 마지막 세션 C24 'Global Strategy in a Changing World Order'): McKinsey **'Multinationals at a crossroads'** — 실라버스 밖, Zeke 8/3 이메일 · **10개 지정학 요인 사이드바까지 전부** 읽기 · 링크는 8/3 Canvas 공지", en:"📖 Finals-weekend required reading (MGMT's last session C24 'Global Strategy in a Changing World Order'): McKinsey 'Multinationals at a crossroads' — outside the syllabus, Zeke's 8/3 email · read all incl. the 10 geopolitical-factor sidebars · link in the 8/3 Canvas announcement", cn:"📖 期末周末必读(MGMT 末节 C24 'Global Strategy in a Changing World Order'): McKinsey 'Multinationals at a crossroads' — 大纲外,Zeke 8/3 邮件 · 含10个地缘政治要素边栏全读 · 链接在 8/3 Canvas 公告" },
        { kr:"🗓 남은 수업 = 기말 주말 오후 2번(금 8/14 2:00–5:00 · 토 8/15 1:00–4:00, C24) — 프레임워크 수업(C17–20)은 완료, 케이스는 실라버스·팩은 Canvas Global Module 폴더", en:"🗓 Remaining classes = the two finals-weekend afternoons (Fri 8/14 2:00–5:00 · Sat 8/15 1:00–4:00, C24) — framework classes (C17–20) are done; cases in the syllabus, packet in the Canvas Global Module folder", cn:"🗓 剩余课程 = 期末周末两个下午(周五 8/14 2:00–5:00 · 周六 8/15 1:00–4:00,C24)— 框架课(C17–20)已结束;案例在大纲,资料包在 Canvas Global Module 文件夹" },
        { kr:"💡 메모 접근법(Zeke 8/3 이메일): 각 수업의 결론 슬라이드+핵심 개념 슬라이드가 '올바른 적용'의 가이드 — 수업 노트·전사에서 강조점도 함께 복습", en:"💡 Memo approach (Zeke's 8/3 email): each class's conclusion slides + key concept slides are the guide to applying frameworks 'the right way' — also review your class notes/transcripts for his emphases", cn:"💡 备忘方法(Zeke 8/3 邮件): 每节课的结论幻灯+核心概念幻灯是'正确应用'的指南 — 同时复习课堂笔记/逐字稿中的强调点" },
      ],
      traps:[
        { kr:"'too cute' 금지 — 창의성 과제가 아니라 프레임 적용 그 자체가 과제 (\"If you try to get too cute, you'll miss the point\")", en:"Don't get 'too cute' — it's a framework-application exercise, not a creativity one (\"If you try to get too cute, you'll miss the point\")", cn:"别'耍花样' — 这是框架应用作业,不是创意作业(\"If you try to get too cute, you'll miss the point\")" },
        { kr:"Zeke 슬라이드는 수업 후 게시(정답 포함) · 핵심 개념은 수업에서만 전달 — 놓친 부분은 녹화·노트로", en:"Zeke posts slides after class (they contain answers) · key concepts are delivered only in class — catch up via recordings/notes", cn:"Zeke 课后才发幻灯(含答案)· 核心概念只在课上讲 — 缺漏用录像/笔记补" },
        { kr:"TA·교수는 초안 pre-grade 안 함 — 개념 질문만 답변, Luckin에 적용하는 건 본인 몫", en:"The TA & prof won't pre-grade drafts — they answer concept questions only; applying them to Luckin is on you", cn:"TA·教授不会预批草稿 — 只回答概念问题,应用到 Luckin 靠自己" },
      ],
    },
  ],

  /* ── 액션 체크리스트 (체크 상태는 브라우저에 저장됨) ──────────────────────*/
  actions:[
    { id:"a23", by:"2026-08-12", label:{ kr:"BEPP 전범위 리뷰 세션 참석 (🔄수 8/12 저녁으로 변경) — 한 학기 딱 한 번이면 이거", en:"Attend the BEPP full-review session (🔄moved to Wed 8/12 evening) — the one to catch all term", cn:"参加 BEPP 全范围复习课(🔄改为 8/12 周三晚)— 一学期只参加一次就选它" } },
    { id:"a24", by:"2026-08-10", label:{ kr:"Luckin 메모 제출 (8/10 11:59 PT, ADDING·CAGE·AAA·BBB · AI 쓰면 프롬프트 부록)", en:"Submit the Luckin memo (8/10, 11:59 PT · ADDING·CAGE·AAA·BBB · AI prompts in an appendix)", cn:"提交 Luckin 备忘(8/10 11:59 PT · ADDING·CAGE·AAA·BBB · 用 AI 附录提示词)" } },
    { id:"a31", by:"2026-08-10", label:{ kr:"ACCT 기말 Zoom 리뷰 참석 or 녹화 시청 (8/10 7:30 PM PT)", en:"Join or watch the ACCT final Zoom review (8/10, 7:30 PM PT)", cn:"参加或补看 ACCT 期末 Zoom 复习(8/10 7:30 PM PT)" } },
    { id:"a25", by:"2026-08-12", label:{ kr:"ACCT Quiz 7 완료 (8/12 11:50 PT)", en:"Finish ACCT Quiz 7 (8/12, 11:50 PT)", cn:"完成 ACCT Quiz 7(8/12 11:50 PT)" } },
    { id:"a26", by:"2026-08-13", label:{ kr:"ACCT Quiz 8 완료 (8/13, 기말 전날) · 📖 McKinsey C24 리딩(사이드바까지 전부)", en:"Finish ACCT Quiz 8 (8/13, day before the final) · 📖 read the McKinsey C24 piece (incl. sidebars)", cn:"完成 ACCT Quiz 8(8/13,期末前一天)· 📖 读 McKinsey C24(含边栏)" } },
    { id:"a27", by:"2026-08-13", label:{ kr:"BEPP 치트시트 2장(양면=4면) 완성 + ACCT 기말 규칙(오픈북?) TA에 확인", en:"Finish 2 BEPP cheat sheets (4 sides) + confirm the ACCT final rules (open-book?) with the TA", cn:"完成 BEPP 2张速查表(4面)+ 向 TA 确认 ACCT 期末规则(是否开卷)" } },
    { id:"a28", by:"2026-08-14", label:{ kr:"📗 ACCT 기말 (금 8/14 9:30 Room 660)", en:"📗 ACCT final (Fri 8/14, 9:30, Room 660)", cn:"📗 ACCT 期末(周五 8/14 9:30 Room 660)" } },
    { id:"a29", by:"2026-08-15", label:{ kr:"🎯 BEPP 기말 (토 8/15 9:00 Room 660) → 🥂 종강 토스트 4:00", en:"🎯 BEPP final (Sat 8/15, 9:00, Room 660) → 🥂 End of Term Toast 4:00", cn:"🎯 BEPP 期末(周六 8/15 9:00 Room 660)→ 🥂 期末 Toast 4:00" } },
    { id:"a30", by:"2026-08-24", label:{ kr:"팀 페이퍼 마감 (8/24 · 통합/종합이 점수 · 인터뷰 불필요)", en:"Team paper due (8/24 · integration/synthesis is the grade · no interviews needed)", cn:"团队论文截止(8/24 · 整合/综合是得分 · 无需访谈)" } },
  ],

  /* ── Canvas 자료 위치 맵 ─────────────────────────────────────────────────*/
  canvasMap:[
    {
      subject:"BEPP (MGEC)",
      where:{ kr:"Files > 1-Lectures: 'with blanks'(수업 전) → 'filled-in'(수업 후) + Additional Problems · L12–17 filled 전부 게시(기말 후반부 = 게임이론~경매)", en:"Files > 1-Lectures: 'with blanks' (pre) → 'filled-in' (post) + Additional Problems · L12–17 filled all posted (final back half = game theory through auctions)", cn:"Files > 1-Lectures: 'with blanks'(课前) → 'filled-in'(课后) + Additional Problems · L12–17 filled 已全发(期末后半 = 博弈论至拍卖)" },
      submit:{ kr:"시험은 지면", en:"Exams on paper", cn:"考试为纸笔" },
      watch:{ kr:"🆕 기말 기출 2021–25(정답 포함)는 이제 Canvas에도 게시(2025 신규) · Pras 세션6–11 전부 게시(6 이부가격·번들링 · 7 과점 · 8 게임이론 · 9 효용/보험 · 10 워런티 · 11 경매) 슬라이드+영상 · 기말 토픽 리스트(8개)·RS5 풀세트(문제+연습+풀이, 8/6) · 미드텀 기출·드롭박스 자료도 유효 · 건너뛴 토픽은 Class Recordings · Inkoo는 공지를 조용히 수정", en:"🆕 Past finals 2021–25 (w/ answers) now on Canvas too (2025 new) · Pras Sessions 6–11 all posted (6 two-part tariffs/bundling · 7 oligopoly · 8 game theory · 9 utility/insurance · 10 warranties · 11 auctions) slides + video · finals topic list (8) · RS5 full set (problems+practice+solutions, 8/6) · midterm past exams & Dropbox set still valid · skipped topics in Class Recordings · Inkoo edits announcements silently", cn:"🆕 期末真题 2021–25(含答案)现也在 Canvas(2025 新增)· Pras 第6–11课全部已发(6 二部收费/捆绑 · 7 寡头 · 8 博弈论 · 9 效用/保险 · 10 保修 · 11 拍卖)幻灯+视频· 期末主题清单(8个)·RS5 全套(题+练习+答案,8/6)· 期中真题与 Dropbox 资料仍有效 · 跳过的内容看 Class Recordings · Inkoo 会悄悄改公告" },
    },
    {
      subject:"ACCT",
      where:{ kr:"Files > 세션별 번호 폴더 01–21 (핸드아웃+케이스 풀이) · 🆕 신규 덱: Income Taxes·Shareholders' Equity·Investments in Financial Assets + Transfer Pricing(TP) 슬라이드(누적 범위 — 기말에도 유효) · 미드텀 세트는 Files ▸ Midterm Exam ▸ Midterm–2026", en:"Files > numbered session folders 01–21 (handouts + case solutions) · 🆕 new decks: Income Taxes · Shareholders' Equity · Investments in Financial Assets + Transfer Pricing (TP) slides (cumulative — still final material) · midterm set in Files ▸ Midterm Exam ▸ Midterm–2026", cn:"Files > 各课时编号文件夹 01–21(讲义+案例答案)· 🆕 新讲义: Income Taxes·Shareholders' Equity·Investments in Financial Assets + Transfer Pricing(TP)幻灯(累积范围 — 期末仍适用)· 期中资料在 Files ▸ Midterm Exam ▸ Midterm–2026" },
      submit:{ kr:"퀴즈는 Assignments 탭 (Quiz 1–5는 8/14까지 재오픈)", en:"Quizzes in Assignments tab (Quizzes 1–5 re-open until Aug 14)", cn:"测验在 Assignments 标签(Quiz 1–5 重开至 8/14)" },
      watch:{ kr:"폴더 31/32 = 기출, 93 = 교과서 솔루션 · 시험은 종이 채점 후 반환(147점 만점)", en:"Folders 31/32 = past exams, 93 = textbook solutions · exams hand-graded on paper & returned (out of 147)", cn:"文件夹 31/32=往年卷, 93=教材答案 · 考试纸质手批返还(满分147)" },
    },
    {
      subject:"MGMT 6130 (전략·HSC)",
      where:{ kr:"슬라이드=Files ▸ Slides · 실라버스/FAQ/정답 가이드=Files 루트 · 케이스=Study.Net 탭 · ⚠️ 세션별 리딩·스터디 질문은 **실라버스(v1.6)**에(공지 X)", en:"Slides = Files ▸ Slides · syllabus/FAQ/answer guide = Files root · cases = Study.Net tab · ⚠️ per-session readings & study questions live in the syllabus (v1.6), not announcements", cn:"幻灯=Files ▸ Slides · 大纲/FAQ/答案指南=Files 根目录 · 案例=Study.Net 标签 · ⚠️ 各节预读与思考题在**大纲(v1.6)**(非公告)" },
      submit:{ kr:"Assignments 탭 (페이퍼·프로포절)", en:"Assignments tab (papers & proposals)", cn:"Assignments 标签(论文与提案)" },
      watch:{ kr:"두 섹션(751/752)이 한 사이트 공유 · Study.Net 팩 늦게 업데이트(재다운로드) · 채점 5축=Theory·Data·Analysis·Organization·Application", en:"Both sections (751/752) share one site · Study.Net pack updates late (re-download) · grading axes = Theory·Data·Analysis·Organization·Application", cn:"两个班(751/752)共用一个站点 · Study.Net 包更新较晚(需重新下载)· 评分5轴=Theory·Data·Analysis·Organization·Application" },
    },
    {
      subject:"Global 모듈 (Hernandez/Zeke)",
      where:{ kr:"🆕 케이스=실라버스 Classes 17–20(C17 Manchester City·C18 Impossible Foods·C19 AAA·C20 BBB) · 프레스 팩(Luckin)·메모 지침 = Canvas ▸ Global Module 폴더 · ⚠️ Zeke는 슬라이드를 수업 후 게시(정답 포함), 핵심 개념은 수업에서만", en:"🆕 Cases = syllabus Classes 17–20 (C17 Manchester City · C18 Impossible Foods · C19 AAA · C20 BBB) · press packet (Luckin) & memo instructions = Canvas ▸ Global Module folder · ⚠️ Zeke posts slides after class (they contain answers); key concepts only in class", cn:"🆕 案例=大纲 Classes 17–20(C17 Manchester City·C18 Impossible Foods·C19 AAA·C20 BBB)· 新闻资料包(Luckin)·备忘说明 = Canvas ▸ Global Module 文件夹 · ⚠️ Zeke 课后才发幻灯(含答案),核心概念只在课上" },
      submit:{ kr:"메모는 Assignments 탭 (Luckin, 8/10)", en:"Memo via Assignments tab (Luckin, Aug 10)", cn:"备忘在 Assignments 标签(Luckin,8/10)" },
      watch:{ kr:"프레임 ADDING·CAGE·AAA·BBB(각 25%) · ⚠️ 외부 리서치 금지·AI는 전체 프롬프트 부록 공개 · TA Na Hyun Kim 온라인 오피스아워는 **8/7(금)까지만**(Calendly) — 메모 질문은 이번 주 안에", en:"Frameworks ADDING·CAGE·AAA·BBB (25% each) · ⚠️ no outside research · AI must disclose full prompts in an appendix · TA Na Hyun Kim's virtual office hours end Fri 8/7 (Calendly) — memo questions this week", cn:"框架 ADDING·CAGE·AAA·BBB(各25%)· ⚠️ 禁外部研究·用 AI 须附录公开完整提示词 · TA Na Hyun Kim 线上答疑仅到 8/7(周五)(Calendly)— 备忘问题请本周内提" },
    },
    {
      subject:"성적·납부 (Path@Penn · Penn.Pay)",
      where:{ kr:"최종 letter grade·비공식 성적표 = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript) · 등록금 명세서·분납 플랜 = Penn.Pay ▸ Payment Plans", en:"Final letter grades & unofficial transcript = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript) · tuition statements & installment plans = Penn.Pay ▸ Payment Plans", cn:"最终等级成绩·非正式成绩单 = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript)· 学费账单·分期计划 = Penn.Pay ▸ Payment Plans" },
      submit:{ kr:"등록금 납부는 Penn.Pay", en:"Pay tuition on Penn.Pay", cn:"在 Penn.Pay 缴费" },
      watch:{ kr:"💰 등록금 납부·분납 마감(7/31) 종료 — 분납 가입자는 첫 출금 8/15 확인 · 국제 은행은 PayMyTuition", en:"💰 Tuition/plan enrollment (7/31) closed — on the 4-month plan, watch the first withdrawal 8/15 · international bank → PayMyTuition", cn:"💰 学费缴纳·分期报名(7/31)已截止 — 分期者注意首次扣款 8/15 · 海外银行用 PayMyTuition" },
    },
    {
      subject:"Cohort Communication",
      where:{ kr:"Files > Weekend Schedule(매 수업 주말), Orientation, Resource Guides · Block Week Instructions PDF = Files ▸ Classes–Block Week ▸ Term 2", en:"Files > Weekend Schedule (each class weekend), Orientation, Resource Guides · Block Week Instructions PDF = Files ▸ Classes–Block Week ▸ Term 2", cn:"Files > Weekend Schedule(每个上课周末)、Orientation、Resource Guides · Block Week Instructions PDF = Files ▸ Classes–Block Week ▸ Term 2" },
      submit:{ kr:"—", en:"—", cn:"—" },
      watch:{ kr:"물류(버스·호텔·행사) · 테크/도서관 세션 녹화는 Class Recordings · Excel 스킬킷(Level 1·2)도 여기 Files", en:"Logistics (bus/hotel/events) · tech/library session recordings in Class Recordings · Excel skill kit (Level 1·2) is here in Files too", cn:"后勤(班车·酒店·活动) · 技术/图书馆课录像在 Class Recordings · Excel 技能包(Level 1·2)也在此 Files" },
    },
  ],

  /* ── Block Week (Fall 2026) ──────────────────────────────────────────────
     options: code / meta(캠퍼스·날짜) / title / desc. 사이클 바뀌면 통째로 교체. */
  blockWeek: {
    note: { kr:"3–4일 압축 선택과목(보통 0.5 CU, 졸업 19 CU에 포함) · ⚠️ 전공(concentration)엔 Graded만 인정(P/F 불인정) · PHL·SFO 혼합 수강 가능 · Course Match add/drop 진행 중(추가=선착순) — ADD 마감 전 드롭=무기록, 이후=W, P/F 변경은 과목 Day1까지 · ADD 마감은 과목별 블록위크 직전(10/9·11/27·12/11) → 대기줄 늦가을까지 · 대기줄 김(WEMBA51 우선), 'locked'는 정상 · 상세·실라버스·Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 변경(8/5 공지): MGMT 7830 IBW·HCMG 8500 제외, MGMT 6710(Michael Parke) 신설 · SF 추가 과목 검토 중 — AI in Seattle·Luxury Branding in Paris·PM 등 유지 (전체 캘린더: Cohort Comm ▸ Files, \"Cal_51_All_BW_V15_08042026\")",
            en:"Electives compressed into 3–4 days (usually 0.5 CU, count toward the 19-CU graduation req) · ⚠️ only Graded courses count toward a major (not P/F) · mix PHL & SFO campuses · Course Match add/drop is open (adds first-come) — drop before the ADD deadline = no record, after = W, P/F changes until Day 1 · ADD deadlines per course right before each block week (10/9 · 11/27 · 12/11) → waitlists alive until late fall · long waitlists (WEMBA51 priority), 'locked' is normal · details, syllabi & Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 changes (announced 8/5): MGMT 7830 IBW & HCMG 8500 removed, MGMT 6710 (Michael Parke) added · more SF courses under review — AI in Seattle, Luxury Branding in Paris, PM etc. remain (full calendar: Cohort Comm ▸ Files, \"Cal_51_All_BW_V15_08042026\")",
            cn:"3–4天压缩选修(通常 0.5 CU,计入毕业19 CU)· ⚠️ 专业只认 Graded(P/F 不算)· 可混选 PHL·SFO 校区 · Course Match 加退进行中(加课先到先得)— ADD 截止前退=无记录,之后=W,P/F 可改到 Day1 · ADD 截止按课程各在其 block week 前(10/9·11/27·12/11)→ 候补持续到晚秋 · 等待名单长(WEMBA51 优先),'locked' 属正常 · 详情·大纲·书单: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 变更(8/5 公告): MGMT 7830 IBW·HCMG 8500 取消,新增 MGMT 6710(Michael Parke)· SF additional courses 审核中(完整日历: Cohort Comm ▸ Files, \"Cal_51_All_BW_V15_08042026\")" },
    options: [
      { code:"MKTG 8530", meta:"PHL · 10/12–15 · Karol/Norton",
        title:{ kr:"Designing & Deploying AI Agents", en:"Designing & Deploying AI Agents", cn:"Designing & Deploying AI Agents(AI 代理设计与部署)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"LGST 7500", meta:"PHL · 10/12–15 · Conti-Brown",
        title:{ kr:"Global (Anti-)Money Laundering", en:"Global (Anti-)Money Laundering", cn:"Global (Anti-)Money Laundering(全球反洗钱)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"MGMT 7640", meta:"SFO · 10/12–14 · Rosenkopf",
        title:{ kr:"Tech in the SF Bay Area", en:"Tech in the SF Bay Area", cn:"Tech in the SF Bay Area(湾区科技)" },
        desc:{ kr:"⚠️ Philly 코호트는 10/15 수업이 있어 10월 사이클 중 이 과목만 가능(10/14 종료)", en:"⚠️ Philly cohort has class Oct 15, so this is their only October option (ends Oct 14)", cn:"⚠️ Philly 班 10/15 有课,10月周期只能选这门(10/14 结束)" } },
      { code:"MKTG 7340", meta:"SFO · 10/12–15 · Nave",
        title:{ kr:"Creativity", en:"Creativity", cn:"Creativity(创造力)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"OIDD 6530", meta:"SFO · 10/12–15 · Katalan",
        title:{ kr:"Mathematical Modeling & its Application in Finance", en:"Mathematical Modeling & its Application in Finance", cn:"Mathematical Modeling & its Application in Finance(金融数学建模)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"HCMG 8600", meta:"PHL · 11/30–12/3 · Nembhard",
        title:{ kr:"Leading Healthcare Organizations", en:"Leading Healthcare Organizations", cn:"Leading Healthcare Organizations(医疗组织领导力)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"OIDD 6140", meta:"SFO · 11/30–12/3 · Netessine",
        title:{ kr:"Innovation", en:"Innovation", cn:"Innovation(创新)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"MGMT 8710", meta:"Global · 12/7–10 · Hernandez",
        title:{ kr:"Advanced Global Strategy", en:"Advanced Global Strategy", cn:"Advanced Global Strategy(高级全球战略)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"OIDD 6540", meta:"Global · 12/7–10 · Ulrich",
        title:{ kr:"Product Management", en:"Product Management", cn:"Product Management(产品管理)" },
        desc:{ kr:"", en:"", cn:"" } },
      { code:"LGST 6420", meta:"SFO · 12/14–16 · Werbach",
        title:{ kr:"Big Data, Big Responsibilities: Toward Accountable AI", en:"Big Data, Big Responsibilities: Toward Accountable AI", cn:"Big Data, Big Responsibilities(负责任的 AI)" },
        desc:{ kr:"", en:"", cn:"" } },
    ],
  },

  /* ── 수업 주말 일정표 (자동 전환) ─────────────────────────────────────────
     weekends[] 에 아는 주말을 전부 넣어두면, 사이트가 "진행 중이거나 다음으로
     다가오는 주말"을 자동으로 골라 보여줍니다 (end 지나면 다음 주말로 전환).
     start/end: "YYYY-MM-DD" · rows: {time, both} = 공통 / {time, s1, s2} = 섹션별
  ----------------------------------------------------------------------------*/
  schedule: {
    weekends: [
      {
        start:"2026-08-14", end:"2026-08-15",
        label: { kr:"8월 14일(금)–15일(토) · SFO · 기말 주말 (합반 · Room 660)", en:"Fri Aug 14 – Sat Aug 15 · SFO · finals weekend (joint · Room 660)", cn:"8月14日(周五)–15日(周六) · SFO · 期末周末(合班 · Room 660)" },
        days: [
          {
            label: { kr:"금요일 8/14", en:"Friday 8/14", cn:"周五 8/14" },
            rows: [
              { time:"8:30–9:30",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:30–12:30",  both:{ kr:"📗 ACCT 6130 기말고사 · Room 660 (합반)", en:"📗 ACCT 6130 FINAL · Room 660 (joint)", cn:"📗 ACCT 6130 期末 · Room 660(合班)", read:{ kr:"예년 오픈북·누적(재확인!) · 배점 큰 토픽=Income Taxes·Bonds·Shareholders' Equity", en:"prior years open-book & cumulative (confirm!) · heaviest topics = Income Taxes·Bonds·Shareholders' Equity", cn:"往年开卷·累积(请确认!)· 高分主题=Income Taxes·Bonds·Shareholders' Equity" } } },
              { time:"12:30–2:00",  both:{ kr:"중식 · Convene 캠퍼스 투어(40 O'Farrell St)", en:"Lunch · Convene campus tour (40 O'Farrell St)", cn:"午餐 · Convene 校区参观(40 O'Farrell St)" } },
              { time:"2:00–5:00",   both:{ kr:"MGMT 6130 Global · Hernandez · Room 660", en:"MGMT 6130 Global · Hernandez · Room 660", cn:"MGMT 6130 Global · Hernandez · Room 660", read:{ kr:"프레임 노트가 Luckin 메모(8/10) 원자재 · 슬라이드는 수업 후 게시", en:"your framework notes are the Luckin memo (8/10) raw material · slides posted after class", cn:"框架笔记是 Luckin 备忘(8/10)原料 · 幻灯课后才发" } } },
              { time:"5:00–6:30",   both:{ kr:"석식 · Dining Room", en:"Dinner · Dining Room", cn:"晚餐 · Dining Room" } },
            ],
          },
          {
            label: { kr:"토요일 8/15", en:"Saturday 8/15", cn:"周六 8/15" },
            rows: [
              { time:"8:00–9:00",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:00–12:00",  both:{ kr:"🎯 BEPP 6120 기말고사 · Room 660 (합반)", en:"🎯 BEPP 6120 FINAL · Room 660 (joint)", cn:"🎯 BEPP 6120 期末 · Room 660(合班)", read:{ kr:"3시간 · L1–17(L9–17 약2/3) · 8문항 · 치트시트 2장(4면) · S8–S11 복습", en:"3 hours · L1–17 (~2/3 on L9–17) · 8 questions · two cheat sheets (4 sides) · review S8–S11", cn:"3小时 · L1–17(L9–17 约2/3)· 8题 · 2张速查表(4面)· 复习 S8–S11" } } },
              { time:"12:00–1:00",  both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
              { time:"1:00–4:00",   both:{ kr:"MGMT 6130 Global 마지막 세션 · Hernandez · Room 660", en:"MGMT 6130 Global last session · Hernandez · Room 660", cn:"MGMT 6130 Global 末节 · Hernandez · Room 660", read:{ kr:"C24 'Global Strategy in a Changing World Order' · 📖 McKinsey 'Multinationals at a crossroads'(10개 지정학 요인 사이드바까지 전부 읽기)", en:"C24 'Global Strategy in a Changing World Order' · 📖 McKinsey 'Multinationals at a crossroads' (read all incl. the 10 geopolitical-factor sidebars)", cn:"C24 'Global Strategy in a Changing World Order' · 📖 McKinsey 'Multinationals at a crossroads'(含10个地缘政治要素边栏全读)" } } },
              { time:"4:00–5:00",   both:{ kr:"🥂 종강 토스트 · Dining Room (52GLO 합류)", en:"🥂 End of Term Toast · Dining Room (52GLO joining)", cn:"🥂 期末 Toast · Dining Room(52GLO 加入)" } },
            ],
          },
        ],
      },
    ],
    notes: [
      { kr:"⚠️ 기말 주말 = 양 섹션 합반, 전부 Room 660 · 시작 시각 요일별 다름(금 9:30 · 토 9:00) · 📗ACCT 기말 금 오전, 🎯BEPP 기말 토 오전, 사이 오후엔 Global", en:"⚠️ Finals weekend = both sections together, all in Room 660 · start times differ (Fri 9:30 · Sat 9:00) · 📗 ACCT final Fri morning, 🎯 BEPP final Sat morning, Global in the afternoons between", cn:"⚠️ 期末周末 = 两班合并,全在 Room 660 · 开始时间按天不同(周五 9:30 · 周六 9:00)· 📗ACCT 期末周五上午,🎯BEPP 期末周六上午,下午为 Global" },
      { kr:"📖 = 그 수업 자료 (Global 케이스=실라버스·C24 McKinsey 리딩=Canvas 8/3 공지 · ACCT 배점 Income Taxes·Bonds·Shareholders' Equity). 상세는 과목 카드", en:"📖 = that session's materials (Global cases = syllabus · C24 McKinsey reading = Canvas 8/3 announcement · ACCT weights Income Taxes·Bonds·Shareholders' Equity). More in the course cards", cn:"📖 = 该节课资料(Global 案例=大纲·C24 McKinsey 阅读=Canvas 8/3 公告 · ACCT 高分 Income Taxes·Bonds·Shareholders' Equity)。详情见科目卡" },
      { kr:"🏨 호텔: The Hyatt Regency SF (5 Embarcadero Ctr)", en:"🏨 Hotel: The Hyatt Regency SF (5 Embarcadero Ctr)", cn:"🏨 酒店: The Hyatt Regency SF (5 Embarcadero Ctr)" },
      { kr:"📚 스터디룸: Board Rooms A·B·C · 금 5:00–11:00 PM · 🍻 Wharton Pub: Hyatt Eclipse Bar · 금 8:30–11:30 PM", en:"📚 Study rooms: Board Rooms A·B·C · Fri 5:00–11:00 PM · 🍻 Wharton Pub: Hyatt Eclipse Bar · Fri 8:30–11:30 PM", cn:"📚 自习室: Board Rooms A·B·C · 周五 5:00–11:00 PM · 🍻 Wharton Pub: Hyatt Eclipse Bar · 周五 8:30–11:30 PM" },
      { kr:"🥂 종강 토스트 토 4:00–5:00 (52GLO 합류) · 📸 Class Photo 8/28 12:45–1:45", en:"🥂 End of Term Toast Sat 4:00–5:00 (52GLO joining) · 📸 Class Photo 8/28 12:45–1:45", cn:"🥂 期末 Toast 周六 4:00–5:00(52GLO 加入)· 📸 Class Photo 8/28 12:45–1:45" },
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
