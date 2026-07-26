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
    lastUpdated: "2026-07-26",   // ← 업데이트할 때마다 이 날짜만 바꾸세요 (YYYY-MM-DD)
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
    { date:"2026-07-26", items:[
      { kr:"⚠️ ACCT Quiz 6·7 분리 — Quiz 6만 7/29(TP 문제 포함, TP 슬라이드 먼저), Quiz 7은 8/12로 이동. #12의 '6·7 7/29'는 더 이상 유효하지 않음", en:"⚠️ ACCT Quiz 6·7 split — Quiz 6 only on 7/29 (includes a Transfer Pricing question, skim TP slides first), Quiz 7 moved to 8/12. #12's '6·7 on 7/29' is no longer true", cn:"⚠️ ACCT Quiz 6·7 拆分 — 仅 Quiz 6 在 7/29(含转让定价题,先看 TP 幻灯),Quiz 7 移至 8/12。#12 的'6·7 在7/29'已失效" },
      { kr:"📚 다음 수업 주말 7/30(목)–8/1(토) 일정표 추가 — Global 모듈 시작(Hernandez). 목요일 시작·Family Day(7/30)·Convene 투어·개인 브랜딩 워크샵. Global 케이스 C17–20 사전 리딩 매핑", en:"📚 Added the next class weekend Jul 30 (Thu)–Aug 1 (Sat) — Global module begins (Hernandez). Thursday start · Family Day (7/30) · Convene tour · Personal Branding workshop. Global cases C17–20 mapped as pre-reading", cn:"📚 新增下个上课周末 7/30(周四)–8/1(周六)— Global 模块开始(Hernandez)。周四开始·Family Day(7/30)·Convene 参观·个人品牌工作坊。Global 案例 C17–20 映射为预读" },
      { kr:"🎯 BEPP 기말 상세 확정(Kent 7/23): 8/15 · L1–17(L1–8 약 1/3·L9–17 약 2/3) · 3시간·8문항 전부 · closed book + 치트시트 2장(양면=4면) · 계산기 O·폰 X · 기출 2021–25 게시", en:"🎯 BEPP final details out (Kent 7/23): 8/15 · L1–17 (~1/3 on L1–8, ~2/3 on L9–17) · 3 hours · all 8 questions · closed book + TWO cheat sheets (both sides = 4 faces) · calculator yes, phone no · past finals 2021–25 posted", cn:"🎯 BEPP 期末细节公布(Kent 7/23): 8/15 · L1–17(L1–8 约1/3·L9–17 约2/3)· 3小时·全部8题 · 闭卷+2张速查表(双面=4面)· 可用计算器·禁手机 · 真题 2021–25 已发布" },
      { kr:"💼 Global 메모 = Luckin Coffee(8/10) — ADDING·CAGE·AAA·BBB 4개 프레임(각 25%)을 프레스 팩에 적용 · 외부 리서치 금지·AI 사용 시 전체 프롬프트 부록 공개 필수 · 팩은 주말 전에 읽기 · 강의평가 마감 7/27(ET) · 등록금 7/31 · Quiz 7→8/12", en:"💼 Global memo = Luckin Coffee (8/10) — apply ADDING·CAGE·AAA·BBB (25% each) to the press packet · no outside research · any AI use must disclose full prompts in an appendix · read the packet before the weekend · course eval due 7/27 (ET) · tuition 7/31 · Quiz 7→8/12", cn:"💼 Global 备忘 = Luckin Coffee(8/10)— 将 ADDING·CAGE·AAA·BBB(各25%)应用于新闻资料包 · 禁止外部研究 · 用 AI 须在附录公开完整提示词 · 周末前读资料包 · 课评截止 7/27(ET)· 学费 7/31 · Quiz 7→8/12" },
    ]},
    { date:"2026-07-17", items:[
      { kr:"✅ 번들링·이부가격제(two-part tariff)는 미드텀 범위 제외 — Pras가 서면 확인. 둘 다 기말 토픽 (오랜 TBC 해소)", en:"✅ Bundling & two-part tariffs are OUT of the midterm — confirmed in writing by Pras. Both are final-exam topics (the long-running TBC is resolved)", cn:"✅ 捆绑与二部收费不在期中范围 — Pras 书面确认。两者均属期末主题(长期待确认事项已解决)" },
      { kr:"⚠️ HSC 이번 주말 수업엔 사전 리딩이 있음 — 공지가 아니라 실라버스(v1.6)에 케이스·아티클·스터디 질문이 수업별로 정리됨. 금 #5 Naukri · 금 #6 Automated Travel Systems · 토 #7 케이스 2개(Deluge of Documents + AI Scribe) · 토 #8 Southwest", en:"⚠️ HSC classes this weekend DO have pre-readings — they're in the syllabus (v1.6), not announcements: cases + articles + study questions per class. Fri #5 Naukri · Fri #6 Automated Travel Systems · Sat #7 two cases (Deluge of Documents + AI Scribe) · Sat #8 Southwest", cn:"⚠️ HSC 本周末课程有预读 — 在大纲(v1.6)而非公告: 每节课的案例+文章+思考题。周五 #5 Naukri · 周五 #6 Automated Travel Systems · 周六 #7 两个案例(Deluge of Documents + AI Scribe)· 周六 #8 Southwest" },
      { kr:"💰 가을 등록금 7/31 마감(연체료 주의) · 4개월 분납 플랜도 7/31까지 신청($50, ACH 무료·카드 +3%, 첫 출금 8/15) — 할일에 추가", en:"💰 Fall tuition due 7/31 (late penalty!) · 4-month payment plan open until 7/31 ($50 fee; ACH free, card +3%; first withdrawal 8/15) — added to the to-do list", cn:"💰 秋季学费 7/31 截止(注意滞纳金)· 4个月分期计划也在 7/31 前申请($50,ACH 免费·信用卡 +3%,首次扣款 8/15)— 已加入待办" },
      { kr:"⚠️ ACCT Quiz 6·7 마감 조용히 연장 — 7/29 8:50 PM → 11:50 PM PT · Quiz 1–5는 8/14까지 재오픈(기말 복습용 재응시 가능)", en:"⚠️ ACCT Quiz 6·7 quietly extended — 7/29 8:50 PM → 11:50 PM PT · Quizzes 1–5 re-opened until 8/14 (re-attempt as final review)", cn:"⚠️ ACCT Quiz 6·7 悄悄延长 — 7/29 8:50 PM → 11:50 PM PT · Quiz 1–5 重开至 8/14(可重做作期末复习)" },
      { kr:"BEPP 기출 정오표·채점 규칙 반영(유도 없는 답=0점) · MGMT 6100 종강, 성적·5개 평가축 공개 · Excel 워크샵 7/29는 ET 시간대 정정 · 팀 페이퍼 TA 체크인 창구 7/24 오픈", en:"Added BEPP past-exam errata & grading rules (answer without derivation = zero) · MGMT 6100 wrapped, grades + the 5 grading criteria out · Excel workshop 7/29 times corrected to ET · team-paper TA check-in window opens 7/24", cn:"新增 BEPP 真题勘误与评分规则(无推导=0分)· MGMT 6100 结课,成绩与5项评分标准公布 · Excel 工作坊 7/29 时区更正为 ET · 团队论文 TA 签到窗口 7/24 开放" },
    ]},
    { date:"2026-07-10", items:[
      { kr:"⚠️ Block Week add/drop 시각 정정 — '금 7/16'이 아니라 목요일 7/16 정오 PT(3 PM ET), 추가=선착순 · ADD 마감은 과목별 블록위크 직전(10/9·11/27·12/11)이라 대기줄은 늦가을까지 → 지금 급히 드롭 X · 대기 순번=Course Match ▸ My Requests · P/F 전공 미인정·학기당 1 CU 한도", en:"⚠️ Block Week add/drop time fix — Thu 7/16 noon PT (3 PM ET), not 'Fri'; adds first-come · ADD deadlines are per course right before each block week (10/9·11/27·12/11) so waitlists live until late fall → don't panic-drop · position: Course Match ▸ My Requests · P/F not for majors, 1 CU cap/term", cn:"⚠️ Block Week 加退时间更正 — 周四 7/16 中午 PT(3 PM ET),非'周五';加课先到先得 · ADD 截止按课程各在其 block week 前(10/9·11/27·12/11),候补持续到晚秋 → 别急退 · 顺位: Course Match ▸ My Requests · P/F 不计专业,每学期1 CU 上限" },
      { kr:"ACCT 미드텀 자료 완비 — 문제 PDF+풀이 docx(7/9)+Quiz 1–5 통계(7/10) · MGMT 전략 페이퍼 성적·정답 가이드 반환(7/6, 12.5–16·평균14.5) · BEPP RS4 풀이+RS5 워크시트+L12·13 filled PDF 게시", en:"ACCT midterm set complete — questions PDF + solution docx (7/9) + Quiz 1–5 stats (7/10) · MGMT Strategy paper grades + answer guide back (7/6, 12.5–16, mean 14.5) · BEPP RS4 solutions + RS5 worksheet + L12·13 filled PDFs posted", cn:"ACCT 期中资料齐全 — 试题 PDF+答案 docx(7/9)+Quiz 1–5 统计(7/10)· MGMT 战略论文成绩+答案指南返还(7/6,12.5–16,均分14.5)· BEPP RS4 答案+RS5 练习题+L12·13 filled PDF 已发" },
      { kr:"번들링(L9) — 서면 확답 아직 없음(RS4 노트에도 언급 X). 기말 토픽 가능성 크지만 안전하게 미드텀 치트시트에 포함 권장으로 문구 조정", en:"Bundling (L9) — still unanswered in writing (RS4 notes don't mention it). Reworded to: likely a final topic, but keep it on your midterm cheat sheet to be safe", cn:"捆绑(L9)— 仍无书面确认(RS4 笔记也没提)。措辞调整为: 更可能是期末主题,但稳妥起见放进期中速查表" },
      { kr:"행정 소식 반영 — WEMBA Careers Jill Huggett 합류 · Penn.Pay 새 명세서 · Course Match 좌석 알림 메일 안내", en:"Admin round-up — Jill Huggett joined WEMBA Careers · new Penn.Pay statement · Course Match seat-notification emails explained", cn:"行政简讯 — Jill Huggett 加入 WEMBA Careers · Penn.Pay 新账单 · 说明 Course Match 座位通知邮件" },
    ]},
    { date:"2026-07-09", items:[
      { kr:"7/17–18 수업 주말 일정표 공개 — BEPP 미드텀 9:30–11:30 Room 660(합반), 직후 점심+Town Hall 11:45–1:00(신임 리더십 Christensen·Werbach Q&A), 오후 섹션별 로테이션(ACCT 615·MGMT/HSC 612)", en:"7/17–18 weekend schedule out — BEPP midterm 9:30–11:30 Room 660 (joint), then lunch + Town Hall 11:45–1:00 (new leadership Christensen·Werbach Q&A), afternoon rotation by section (ACCT 615 · MGMT/HSC 612)", cn:"7/17–18 周末课表公布 — BEPP 期中 9:30–11:30 Room 660(合班),随后午餐+Town Hall 11:45–1:00(新领导 Christensen·Werbach Q&A),下午按班轮换(ACCT 615·MGMT/HSC 612)" },
      { kr:"⚠️ Block Week add/drop 정정 — '7/6 주 오픈'이 아니라 추첨 결과 이메일 먼저(7/8) → Add/Drop은 7/16(목) 오픈. 대기줄 김(WEMBA51 우선), Course Match 'locked'는 정상", en:"⚠️ Block Week add/drop correction — not 'week of 7/6'; lottery results by email first (7/8) → add/drop opens Thu 7/16. Long waitlists (WEMBA51 priority); 'locked' Course Match is normal", cn:"⚠️ Block Week 加退更正 — 非'7/6当周';先邮件抽签结果(7/8)→ 加退 7/16(周四)开放。等待名单长(WEMBA51 优先),Course Match 'locked' 属正常" },
      { kr:"ACCT 미드텀 문제 PDF 게시(7/9, 23p, Files ▸ Midterm Exams ▸ 2026) — 반환 시험지와 대조 복습 · Class Photo 8/28(금) 점심 신규 일정", en:"ACCT midterm questions PDF posted (7/9, 23p, Files ▸ Midterm Exams ▸ 2026) — review against your returned paper · new: Class Photo Fri 8/28 at lunch", cn:"ACCT 期中试题 PDF 发布(7/9,23页,Files ▸ Midterm Exams ▸ 2026)— 对照返还卷复习 · 新增: Class Photo 8/28(周五)午餐" },
    ]},
    { date:"2026-07-06", items:[
      { kr:"BEPP 미드텀 확정 — 범위 L1–8 · closed book + 직접 만든 치트시트 1장(8.5×11 양면). L12–14·L10–11 영상은 기말 범위. 번들링(L9)은 수업에서 언급 → 미드텀보다 기말에 나올 가능성", en:"BEPP midterm confirmed — scope L1–8 · closed book + one self-made cheat sheet (8.5×11, both sides). L12–14 & L10–11 video are final material. Bundling (L9) came up in class → more likely a final topic than a midterm one", cn:"BEPP 期中确定 — 范围 L1–8 · 闭卷 + 自制速查表1页(8.5×11双面)。L12–14 与 L10–11 视频属期末。捆绑(L9)课上提过 → 更可能属期末而非期中" },
      { kr:"BEPP 기출 7세트 완성(2019–25) + Shivani 문제맵(2019 이후 5개 핵심주제 매 미드텀 출제) + Concept Refresher(마지막 점검용)", en:"BEPP practice set complete (2019–25, 7 exams) + Shivani's problem map (5 core topics on every midterm since 2019) + Concept Refresher (final inventory check)", cn:"BEPP 真题7套(2019–25)+ Shivani 题图(2019年起5大核心主题每次期中都考)+ Concept Refresher(最后清点)" },
      { kr:"ACCT 중간 통계 공개 — 평균 118.85/147·중앙 121.5(≈80%)·N=72·최고 142 · Lambert: 기말 잘 보면 가중치 상향, 상담 환영", en:"ACCT midterm stats out — mean 118.85/147, median 121.5 (≈80%), N=72, high 142 · Lambert: do better on the final and he'll weight it more; open to conversations", cn:"ACCT 期中统计公布 — 均分118.85/147·中位121.5(≈80%)·N=72·最高142 · Lambert: 期末更好会加大权重,欢迎面谈" },
      { kr:"MGMT/HSC Day1–2 슬라이드(Class1–4) Canvas Files ▸ Slides · MacDuffie가 여러분 조직의 성과평가·창업 청사진 사례 수집(7/17 주말 전)", en:"MGMT/HSC Day 1–2 slides (Class 1–4) on Canvas Files ▸ Slides · MacDuffie is collecting performance-appraisal & founder-blueprint examples from your orgs (before the Jul 17 weekend)", cn:"MGMT/HSC Day1–2 幻灯(Class1–4)在 Canvas Files ▸ Slides · MacDuffie 征集你所在组织的绩效评估与创始蓝图案例(7/17周末前)" },
    ]},
    { date:"2026-07-05", items:[
      { kr:"학기 후반 마감 대거 확정 — ACCT Quiz 6·7(7/29)·Quiz 8(8/13)·기말(8/14) · Global Strategy 메모(8/10) · BEPP 기말(8/15)", en:"Locked in the back-half deadlines — ACCT Quiz 6·7 (7/29)·Quiz 8 (8/13)·final (8/14) · Global Strategy memo (8/10) · BEPP final (8/15)", cn:"敲定学期后半截止 — ACCT Quiz 6·7(7/29)·Quiz 8(8/13)·期末(8/14)· 全球战略备忘(8/10)· BEPP 期末(8/15)" },
      { kr:"ACCT 성적=시험지 당일 반납(147점 만점) · Quiz 4·5 마감 7/6로 연장 · HSC 페이퍼는 7/27(7/29 아님) 재확인", en:"ACCT graded on the returned paper same day (out of 147) · Quiz 4·5 extended to Jul 6 · HSC paper is Jul 27 (not 29)", cn:"ACCT 当天返还试卷即成绩(满分147)· Quiz 4·5 延至 7/6 · HSC 论文为 7/27(非29)" },
      { kr:"HSC 새 자료(Class1·2 슬라이드+AI×HR 리딩) Canvas Files · 페이퍼 팁 4개 이론 · Fisher 첨삭 선착순", en:"HSC new materials (Class 1·2 slides + AI×HR reading) in Canvas Files · paper: weave in 4 theories · Fisher slots first-come", cn:"HSC 新资料(Class1·2幻灯片+AI×HR阅读)在 Canvas Files · 论文融入4个理论 · Fisher 批改先到先得" },
    ]},
    { date:"2026-07-04", items:[
      { kr:"ACCT 중간 완료 처리 · BEPP 미드텀 인텔(3차 가격차별·MR=MC·킹크 등) 반영", en:"ACCT midterm marked done · added BEPP midterm intel (3rd-degree PD, MR=MC, kink, etc.)", cn:"ACCT 期中已完成 · 新增 BEPP 期中情报(三级价格歧视·MR=MC·拐点等)" },
      { kr:"Block Week 1분 해설 추가 · 지난 7/3 일정·할일 정리", en:"Added 1-min Block Week explainer · cleaned up past Jul 3 items", cn:"新增 Block Week 一分钟说明 · 清理已过的 7/3 条目" },
      { kr:"BEPP 범위(L12–14)·치트시트 정책 TBC 표시", en:"Marked BEPP scope (L12–14) & cheat-sheet policy as TBC", cn:"BEPP 范围(L12–14)与速查表政策标记为待确认" },
      { kr:"Block Week 섹션 신설(Fall 라인업·규칙) · 일정표를 다음 주말(7/17)로 교체 · 지난 시간 표현 정리", en:"New Block Week section (Fall lineup & rules) · schedule switched to next weekend (Jul 17) · cleaned stale time wording", cn:"新增 Block Week 板块(Fall 课程与规则)· 课表切换到下个周末(7/17)· 清理过时时间表述" },
      { kr:"Fall BW 전체 10과목으로 보완(교수·날짜 포함) + Spring '27 프리뷰 추가", en:"Completed Fall BW lineup to all 10 courses (profs & dates) + Spring '27 peek", cn:"补全 Fall BW 全部10门课(含教授·日期)+ Spring '27 预告" },
      { kr:"일정표 자동 전환 — 주말이 끝나야 다음 주말로 넘어가요 (수업 중엔 그 주말 표시)", en:"Schedule now auto-switches — shows the current weekend until it ends, then the next one", cn:"课表自动切换 — 周末结束前显示当前周末,结束后自动切到下一个" },
      { kr:"수업 주말엔 '다음 수업+강의실' 안내 배너 · 시험 주간(D-6~) 응원 그림 · 7/17 강의실 TBA 표기", en:"Class weekends now show a 'next class + room' banner · exam-week (D-6) cheer illustration · Jul 17 room marked TBA", cn:"上课周末显示'下一节课+教室'提示 · 考试周(D-6起)加油插画 · 7/17 教室标记待公布" },
      { kr:"시험 끝난 날엔 '수고했어요!' 축하 그림으로 자동 전환 (다음날까지)", en:"On exam day, the illustration switches to a 'Great job!' celebration after the exam (through the next day)", cn:"考试当天考完后插画自动切换为'辛苦了!'祝贺版(持续到次日)" },
      { kr:"시간 기준 갱신 — 일정표는 마지막 수업이 끝나면 다음 주말로, 지난 시각의 일정은 목록에서 자동 제외", en:"Time-based updates — the schedule flips to the next weekend once the last class ends; items past their time drop off the list", cn:"按时间更新 — 最后一节课结束后课表切到下个周末,过点的日程自动移出列表" },
      { kr:"다음 수업 배너를 맨 위로 이동 · 수업 종료 3시간 후 자동 숨김(밤새 안 남게)", en:"Moved the next-class banner to the top · auto-hides 3h after the last class (no overnight lingering)", cn:"下一节课提示移到最上方 · 末课后3小时自动隐藏(不留过夜)" },
      { kr:"Block Week 섹션에 바로가기 링크 추가 — 코스 등록 포털·Course Match·Path@Penn", en:"Added quick links to the Block Week section — course registration, Course Match, Path@Penn", cn:"Block Week 板块新增快捷链接 — 选课门户·Course Match·Path@Penn" },
      { kr:"상단 바로가기에 '과목' 추가 · 중국어 표현 점검(치트시트=速查表 통일) · nav 중복 버그 수정", en:"Added 'Courses' to the top nav · Chinese wording pass (cheat sheet = 速查表) · fixed a nav duplicate", cn:"顶部导航新增'科目' · 中文表述校订(cheat sheet 统一为速查表)· 修复导航重复" },
    ]},
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
    { date:"2026-07-26", kr:"🔴 이번 주 마감 레드존 — 월 7/27: 강의평가 마감(11:59 ET, MGMT6130 M2 · 지난주 시스템 장애 복구됐지만 마감 그대로) + HSC 페이퍼(11:59 PDT) · 수 7/29: ACCT Quiz 6(11:50 PT) · 금 7/31: 등록금", en:"🔴 Deadline red zone this week — Mon 7/27: course eval (11:59 ET, MGMT6130 M2 · system was down last week but deadline did NOT move) + HSC paper (11:59 PDT) · Wed 7/29: ACCT Quiz 6 (11:50 PT) · Fri 7/31: tuition", cn:"🔴 本周截止红区 — 周一 7/27: 课评(11:59 ET, MGMT6130 M2 · 上周系统故障已恢复但截止不变)+ HSC 论文(11:59 PDT)· 周三 7/29: ACCT Quiz 6(11:50 PT)· 周五 7/31: 学费" },
    { date:"2026-07-26", kr:"⚠️ ACCT Quiz 정정 — 이번 주는 **Quiz 6 하나만**(7/29). Quiz 7은 8/12로 분리됨(#12의 '6·7 7/29'는 무효). Quiz 6엔 **Transfer Pricing 문제** 포함 → TP 슬라이드(Files) 먼저 훑기", en:"⚠️ ACCT Quiz correction — only Quiz 6 this week (7/29). Quiz 7 was split off to 8/12 (#12's '6·7 on 7/29' is void). Quiz 6 includes a Transfer Pricing question → skim the TP slides (Files) first", cn:"⚠️ ACCT Quiz 更正 — 本周只有 Quiz 6(7/29)。Quiz 7 拆分至 8/12(#12 的'6·7 在7/29'无效)。Quiz 6 含转让定价题 → 先看 TP 幻灯(Files)" },
    { date:"2026-07-26", kr:"📚 다음 수업 주말은 **목요일(7/30) 시작** — Global 모듈 개막(Hernandez). 목: BEPP↔ACCT·Convene 투어·Family Day(온캠퍼스 디너 취소) · 금: Global 개막·개인 브랜딩 워크샵·ACCT 합반 4:15 · 토: Global↔BEPP. BEPP는 3일 내내(기말 스프린트). 아래 일정표에 케이스까지 반영", en:"📚 Next class weekend starts THURSDAY (7/30) — Global module opens (Hernandez). Thu: BEPP↔ACCT · Convene tour · Family Day (on-campus dinner cancelled) · Fri: Global opens · Personal Branding workshop · ACCT joint 4:15 · Sat: Global↔BEPP. BEPP meets all 3 days (final sprint). Cases mapped in the schedule below", cn:"📚 下个上课周末**周四(7/30)开始** — Global 模块开幕(Hernandez)。周四: BEPP↔ACCT·Convene 参观·Family Day(校内晚餐取消)· 周五: Global 开幕·个人品牌工作坊·ACCT 合班 4:15 · 周六: Global↔BEPP。BEPP 三天都有(期末冲刺)。案例已映射到下方课表" },
    { date:"2026-07-26", kr:"💼 Global 메모 = **Luckin Coffee**(8/10) — ADDING·CAGE·AAA·BBB 4개 프레임(각 25%)을 프레스 팩에 적용. 팩은 **주말 전에** 읽기(Zeke가 미리 보라고 명시) · ⚠️ 외부 리서치 금지(체크함)·AI 쓰면 전체 프롬프트를 부록에 공개 필수 · 금/토 프레임 노트가 메모 원자재", en:"💼 Global memo = Luckin Coffee (8/10) — apply ADDING·CAGE·AAA·BBB (25% each) to the press packet. Read the packet BEFORE the weekend (Zeke explicitly says to preview) · ⚠️ no outside research (they check) · any AI use must disclose full prompts in an appendix · your Fri/Sat frameworks notes are the memo's raw material", cn:"💼 Global 备忘 = Luckin Coffee(8/10)— 将 ADDING·CAGE·AAA·BBB(各25%)应用于新闻资料包。周末前读资料包(Zeke 明确要求预习)· ⚠️ 禁止外部研究(会核查)· 用 AI 须在附录公开完整提示词 · 周五/六的框架笔记是备忘原料" },
    { date:"2026-07-26", kr:"🎯 BEPP 기말 상세(Kent 7/23): 8/15 · L1–17(**L1–8 약1/3 · L9–17 약2/3** — 미드텀 이후가 배점 큼)·3시간·8문항 전부·closed book+**치트시트 2장(양면=4면)**·계산기 O·폰 X · 기출 **2021–25**(2025 새로 추가) 게시 · Pras 세션6(이부가격·번들링)=기말 최소 2문항, 세션7(과점)=추가 2문항 예상", en:"🎯 BEPP final details (Kent 7/23): 8/15 · L1–17 (~1/3 on L1–8, ~2/3 on L9–17 — the post-midterm half carries the points) · 3 hrs · all 8 questions · closed book + TWO cheat sheets (both sides = 4 faces) · calculator yes, phone no · past finals 2021–25 posted (2025 new) · Pras Session 6 (two-part tariffs + bundling) = ≥2 final questions, Session 7 (oligopoly) = ~2 more likely", cn:"🎯 BEPP 期末细节(Kent 7/23): 8/15 · L1–17(**L1–8 约1/3 · L9–17 约2/3** — 期中后占分多)·3小时·全部8题·闭卷+**2张速查表(双面=4面)**·可用计算器·禁手机 · 真题 2021–25 已发(2025 新增)· Pras 第6课(二部收费+捆绑)=期末至少2题,第7课(寡头)=预计再2题" },
    { date:"2026-07-26", kr:"🏫 캠퍼스 이전 — FAQ 이메일 7/20 도착(Convene 사진 링크 포함) · 학생 설문 7/24 마감(결과 공유·협상위원회 구성 중) · 📅 종강 토스트 8/15(52GLO 합류) · Class Photo 8/28 12:45 · Convene 투어 7/30 점심·8/14 점심(등록 마감 7/26)", en:"🏫 Campus move — FAQ email arrived 7/20 (with a Convene photos link) · student survey closed 7/24 (results to be shared, a negotiating committee is forming) · 📅 End-of-Term Toast 8/15 (52GLO joining) · Class Photo 8/28 12:45 · Convene tours 7/30 lunch & 8/14 lunch (registration closed 7/26)", cn:"🏫 校区搬迁 — FAQ 邮件 7/20 送达(含 Convene 照片链接)· 学生问卷 7/24 截止(将共享结果·正组建谈判委员会)· 📅 期末 Toast 8/15(52GLO 加入)· Class Photo 8/28 12:45 · Convene 参观 7/30 午餐·8/14 午餐(报名 7/26 截止)" },
    { date:"2026-07-26", kr:"📇 소소하지만 필수 — Penn 'Update Your Contact Information'(7/24 Action Required 메일, Path@Penn에서 5분) · WEMBA 학생 설문(waterman@)도 아직이면", en:"📇 Small but required — Penn 'Update Your Contact Information' (Action Required email 7/24, 5 min via Path@Penn) · the WEMBA student survey (waterman@) if you haven't", cn:"📇 小事但必做 — Penn 'Update Your Contact Information'(7/24 Action Required 邮件,Path@Penn 5分钟)· WEMBA 学生问卷(waterman@)若还没填" },
  ],

  /* ── 마감 / 일정 ──────────────────────────────────────────────────────────
     type: registration | exam | paper | quiz | session | milestone
     hard: true 이면 "놓치면 아픈" 빨간 강조
  ----------------------------------------------------------------------------*/
  deadlines: [
    {
      date:"2026-07-27T20:59", type:"milestone", course:"MGMT", hard:true, new:true,
      title:{ kr:"MGMT6130 M2 강의평가 마감", en:"MGMT6130 M2 course eval closes", cn:"MGMT6130 M2 课评截止" },
      detail:{ kr:"11:59 PM ET · 지난주 시스템 장애 복구됨 — 마감은 안 미뤄졌으니 유예 없다고 보기. 5분", en:"11:59 PM ET · the system had an outage last week and is back up — the deadline did NOT move, so don't assume grace. 5 minutes", cn:"11:59 PM ET · 上周系统故障已恢复 — 截止未推迟,别指望宽限。5分钟" },
    },
    {
      date:"2026-07-27T23:59", type:"paper", course:"HSC", hard:true, pin:true,
      title:{ kr:"🔴 HSC 페이퍼 마감 임박!", en:"🔴 HSC paper due — imminent!", cn:"🔴 HSC 论文即将截止!" },
      detail:{ kr:"⏰ 7/27(월) 11:59 PM PDT · 성적 16% · 아직 제출 안 했으면 지금 바로! · ~1,000단어 · 이론 4개 녹여서(나열 X) · '케이스=나와 내 직무' · 제출은 Canvas ▸ Assignments", en:"⏰ Mon 7/27, 11:59 PM PDT · 16% of grade · if it's not in yet, submit NOW · ~1,000 words · weave in 4 theories (not a list) · 'the case is you & your job' · submit via Canvas ▸ Assignments", cn:"⏰ 7/27(周一)11:59 PM PDT · 占16% · 还没交就现在马上交!· ~1,000字 · 融入4个理论(非罗列)· '案例就是你和你的工作' · 在 Canvas ▸ Assignments 提交" },
    },
    {
      date:"2026-07-29T23:50", type:"quiz", course:"ACCT", new:true,
      title:{ kr:"ACCT Quiz 6 마감", en:"ACCT Quiz 6 due", cn:"ACCT Quiz 6 截止" },
      detail:{ kr:"11:50 PM PT · ⚠️ 이번 주는 Quiz 6 하나만(Quiz 7은 8/12로 분리) · **Transfer Pricing 문제 포함** → TP 슬라이드(Files) 먼저 훑기", en:"11:50 PM PT · ⚠️ only Quiz 6 this week (Quiz 7 split off to 8/12) · includes a Transfer Pricing question → skim the TP slides (Files) first", cn:"11:50 PM PT · ⚠️ 本周只有 Quiz 6(Quiz 7 拆分至 8/12)· 含转让定价题 → 先看 TP 幻灯(Files)" },
    },
    {
      date:"2026-07-29T10:00", type:"session", course:"Excel", new:true,
      title:{ kr:"워크샵: Using AI with Excel (Craig Brody)", en:"Workshop: Using AI with Excel (Craig Brody)", cn:"工作坊: Using AI with Excel (Craig Brody)" },
      detail:{ kr:"⚠️ ET 기준 두 세션 중 택1 — 1–2 PM ET(=10–11 AM PT) 또는 8–9 PM ET(=5–6 PM PT) · 선택 · 엑셀 스킬자료(Level 1·2 가이드 + 연습파일 + 단축키)는 Cohort Comm > Files에 1년간 상시", en:"⚠️ two sessions, ET — pick one: 1–2 PM ET (=10–11 AM PT) or 8–9 PM ET (=5–6 PM PT) · optional · Excel skill kit (Level 1·2 guides + practice files + shortcuts) is in Cohort Comm > Files for a year", cn:"⚠️ ET 时区两场任选 — 1–2 PM ET(=10–11 AM PT)或 8–9 PM ET(=5–6 PM PT)· 选修 · Excel 技能资料(Level 1·2 指南 + 练习文件 + 快捷键)在 Cohort Comm > Files,保留一年" },
    },
    {
      date:"2026-07-30T17:30", type:"milestone", course:"Cohort", new:true,
      title:{ kr:"52 Family Day @ Parklab Gardens", en:"52 Family Day @ Parklab Gardens", cn:"52 Family Day @ Parklab Gardens" },
      detail:{ kr:"5:30–8:30 PM · Parklab Gardens · 가족·파트너 환영 · ⚠️ 그날 온캠퍼스 디너는 취소", en:"5:30–8:30 PM · Parklab Gardens · families & partners welcome · ⚠️ on-campus dinner is cancelled that night", cn:"5:30–8:30 PM · Parklab Gardens · 欢迎家人·伴侣 · ⚠️ 当晚校内晚餐取消" },
    },
    {
      date:"2026-07-31", type:"milestone", course:"💰 Tuition", hard:true, new:true,
      title:{ kr:"가을 등록금 납부 마감", en:"Fall tuition due", cn:"秋季学费截止" },
      detail:{ kr:"💰 7/8 명세서 금액 · 이후 연체료 발생 — 여행·휴가 중 놓치지 않기! 분납은 4개월 플랜만 7/31까지 신청 가능($50 신청료 · ACH 무료, 카드 +3% · 첫 출금 8/15) · 해외 은행은 PayMyTuition · Penn.Pay ▸ Payment Plans", en:"💰 amount on the 7/8 statement · late penalty after this — don't let it slip during travel! Installments: only the 4-month plan is open, until 7/31 ($50 enrollment fee · ACH free, card +3% · first withdrawal 8/15) · international bank → PayMyTuition · Penn.Pay ▸ Payment Plans", cn:"💰 金额见 7/8 账单 · 之后收滞纳金 — 别在旅行中错过!分期: 仅4个月计划开放至 7/31($50 手续费 · ACH 免费,信用卡 +3% · 首次扣款 8/15)· 海外银行用 PayMyTuition · Penn.Pay ▸ Payment Plans" },
    },
    {
      date:"2026-08-05T19:00", type:"session", course:"BEPP", new:true,
      title:{ kr:"BEPP Review Session 5 (기말 대비)", en:"BEPP Review Session 5 (for the final)", cn:"BEPP 复习课 5(备期末)" },
      detail:{ kr:"7 PM PT · 워크시트는 이미 게시됨 · 기말 대비용", en:"7 PM PT · worksheet already posted · aimed at the final", cn:"7 PM PT · 练习题已发布 · 针对期末" },
    },
    {
      date:"2026-08-05", type:"milestone", course:"MGMT",
      title:{ kr:"팀 페이퍼 TA 체크인 마감", en:"Team-paper TA check-in done", cn:"团队论文 TA 签到截止" },
      detail:{ kr:"⚠️ 창구 7/24–8/5 · 우리 팀 배정 TA 확인 후 예약 · 팀당 Calendly 1슬롯 · 팀 조율 먼저 (리드 Zorina Chen · 전략→Emily, 글로벌→Na Hyun)", en:"⚠️ window 7/24–8/5 · confirm your team's assigned TA, then book · 1 Calendly slot per team · coordinate first (Lead Zorina Chen · Strategy→Emily, Global→Na Hyun)", cn:"⚠️ 窗口 7/24–8/5 · 先确认本队分配的 TA 再预约 · 每队 Calendly 1个名额 · 先组内协调(组长 Zorina Chen · 战略→Emily,全球→Na Hyun)" },
    },
    {
      date:"2026-08-03", type:"milestone", course:"Block Week",
      title:{ kr:"8월 Block Week (SFO)", en:"August Block Week (SFO)", cn:"8月 Block Week (SFO)" },
      detail:{ kr:"8/3–6 · 신청한 과목 진행", en:"Aug 3–6 · your registered course", cn:"8/3–6 · 进行已选课程" },
    },
    {
      date:"2026-08-10", type:"paper", course:"MGMT", hard:true,
      title:{ kr:"Global 메모 마감 (Luckin Coffee)", en:"Global memo due (Luckin Coffee)", cn:"Global 备忘截止 (Luckin Coffee)" },
      detail:{ kr:"11:59 PM PDT · 케이스=Luckin Coffee · ADDING·CAGE·AAA·BBB 4개 프레임(각 25%)을 프레스 팩에 적용 · 지침+팩은 Canvas Global Module 폴더 · ⚠️ 외부 리서치 금지(체크)·AI 쓰면 전체 프롬프트 부록 필수 · 팩은 주말(7/30–8/1) 전에 읽기", en:"11:59 PM PDT · case = Luckin Coffee · apply ADDING·CAGE·AAA·BBB (25% each) to the press packet · instructions + packet in the Canvas Global Module folder · ⚠️ no outside research (they check) · any AI use must disclose full prompts in an appendix · read the packet before the weekend (Jul 30–Aug 1)", cn:"11:59 PM PDT · 案例=Luckin Coffee · 将 ADDING·CAGE·AAA·BBB(各25%)应用于新闻资料包 · 说明+资料包在 Canvas Global Module 文件夹 · ⚠️ 禁外部研究(核查)· 用 AI 须附录公开完整提示词 · 周末(7/30–8/1)前读资料包" },
    },
    {
      date:"2026-08-12T20:50", type:"quiz", course:"ACCT", new:true,
      title:{ kr:"ACCT Quiz 7 마감", en:"ACCT Quiz 7 due", cn:"ACCT Quiz 7 截止" },
      detail:{ kr:"⚠️ 7/24에 7/29 → 8/12로 이동됨(Quiz 6에서 분리) · Quiz 1–5도 8/14까지 재오픈(기말 복습 재응시)", en:"⚠️ moved from 7/29 to 8/12 on 7/24 (split off from Quiz 6) · Quizzes 1–5 also re-open until 8/14 (re-attempt as final review)", cn:"⚠️ 7/24 从 7/29 移至 8/12(与 Quiz 6 拆分)· Quiz 1–5 也重开至 8/14(可重做作期末复习)" },
    },
    {
      date:"2026-08-13T20:50", type:"quiz", course:"ACCT",
      title:{ kr:"ACCT Quiz 8 마감", en:"ACCT Quiz 8 due", cn:"ACCT Quiz 8 截止" },
      detail:{ kr:"8:50 PM PT · 오픈 8/1 · 기말 하루 전", en:"8:50 PM PT · opens Aug 1 · day before the final", cn:"8:50 PM PT · 8/1开放 · 期末前一天" },
    },
    {
      date:"2026-08-14T09:30", type:"exam", course:"ACCT", hard:true,
      title:{ kr:"ACCT 기말고사", en:"ACCT final", cn:"ACCT 期末考试" },
      detail:{ kr:"금요일 · 종이 채점 반환 방식(중간과 동일)", en:"Friday · hand-graded paper exam (same as midterm)", cn:"周五 · 纸质手批返还(与期中相同)" },
    },
    {
      date:"2026-08-15T09:30", type:"exam", course:"BEPP", hard:true, new:true,
      title:{ kr:"BEPP 기말고사", en:"BEPP final", cn:"BEPP 期末考试" },
      detail:{ kr:"토요일 · 3시간 · 범위 L1–17(L1–8 약1/3·L9–17 약2/3) · 8문항 전부 · closed book + **치트시트 2장(양면=4면)** · 계산기 O·폰 X · 기출 2021–25(정답 포함) Canvas에 · Pras 세션6(이부가격·번들링)=최소 2문항, 세션7(과점)=추가 예상", en:"Saturday · 3 hours · scope L1–17 (~1/3 on L1–8, ~2/3 on L9–17) · all 8 questions · closed book + TWO cheat sheets (both sides = 4 faces) · calculator yes, phone no · past finals 2021–25 (w/ answers) on Canvas · Pras Session 6 (two-part tariffs + bundling) = ≥2 questions, Session 7 (oligopoly) = ~2 more likely", cn:"周六 · 3小时 · 范围 L1–17(L1–8 约1/3·L9–17 约2/3)· 全部8题 · 闭卷 + **2张速查表(双面=4面)**· 可用计算器·禁手机 · 真题 2021–25(含答案)在 Canvas · Pras 第6课(二部收费+捆绑)=至少2题,第7课(寡头)=预计再2题" },
    },
    {
      date:"2026-08-24", type:"milestone", course:"HSC", hard:true,
      title:{ kr:"팀 기말 프로젝트 마감", en:"Final team project due", cn:"团队期末项目截止" },
      detail:{ kr:"11:59 PM PDT · 성적 31% · 팀 TA 체크인(필수)은 7/24–8/5 사이에 미리 잡아두기", en:"11:59 PM PDT · 31% of grade · mandatory team TA check-in must happen Jul 24–Aug 5 — book it early", cn:"11:59 PM PDT · 占31% · 团队 TA 签到(必须)需在 7/24–8/5 之间预约" },
    },
    {
      date:"2026-08-15T18:00", type:"milestone", course:"Cohort", new:true,
      title:{ kr:"종강 토스트 (End of Term Toast)", en:"End of Term Toast", cn:"期末 Toast" },
      detail:{ kr:"BEPP 기말 끝난 토요일 저녁 · 52GLO도 합류 · 한 텀 마무리 축하", en:"Saturday evening after the BEPP final · 52GLO joining · celebrate wrapping the term", cn:"BEPP 期末后的周六晚 · 52GLO 加入 · 庆祝学期结束" },
    },
    {
      date:"2026-08-28", type:"milestone", course:"Cohort",
      title:{ kr:"클래스 단체 사진", en:"Class photo", cn:"班级合照" },
      detail:{ kr:"12:45 (점심시간) · Dining Room", en:"12:45 (at lunch) · Dining Room", cn:"12:45(午餐时间)· Dining Room" },
    },
  ],

  /* ── 과목 카드 ───────────────────────────────────────────────────────────*/
  courses: [
    {
      code:"ACCT", color:"#e8590c",
      name:{ kr:"회계 (Lambert)", en:"Accounting (Lambert)", cn:"会计 (Lambert)" },
      headline:{ kr:"퀴즈 러시 · 기말 8/14 — 신규 덱 3개 도착", en:"Quiz rush · final Aug 14 — 3 new decks in", cn:"小测密集 · 期末 8/14 — 新讲义3套" },
      points:[
        { new:true, kr:"⚠️ Quiz 일정 정정 — Quiz 6만 7/29(11:50 PM PT, **Transfer Pricing 문제 포함** → TP 슬라이드 먼저) · Quiz 7은 8/12로 분리 · Quiz 8은 오픈 8/1→마감 8/13(기말 하루 전) · Quiz 1–5는 8/14까지 재오픈(기말 복습 재응시)", en:"⚠️ Quiz schedule corrected — Quiz 6 only on 7/29 (11:50 PM PT, includes a Transfer Pricing question → skim TP slides first) · Quiz 7 split to 8/12 · Quiz 8 opens 8/1 → due 8/13 (day before the final) · Quizzes 1–5 re-open until 8/14 (re-attempt as final review)", cn:"⚠️ Quiz 日程更正 — 仅 Quiz 6 在 7/29(11:50 PM PT,含转让定价题 → 先看 TP 幻灯)· Quiz 7 拆至 8/12 · Quiz 8 开8/1→截8/13(期末前一天)· Quiz 1–5 重开至 8/14(可重做作期末复习)" },
        { new:true, kr:"📑 새 덱 게시 — Income Taxes · Shareholders' Equity · Investments in Financial Assets(이번 주말 자료) + TP 미니케이스 예고. 기말은 감가상각·장기자산까지 = 후반부가 핵심", en:"📑 Fresh decks posted — Income Taxes · Shareholders' Equity · Investments in Financial Assets (this weekend's material) + a promised TP mini-case. The final reaches into depreciation & long-lived assets — the back half is where it lives", cn:"📑 新讲义已发 — Income Taxes · Shareholders' Equity · Investments in Financial Assets(本周末资料)+ 预告 TP 迷你案例。期末含折旧与长期资产 — 后半程是重点" },
        { kr:"미드텀 자료(Files ▸ Midterm Exam ▸ Midterm–2026): 문제 PDF·풀이 docx·Quiz 1–5 통계 — 반환 시험지와 대조해 복기", en:"Midterm set (Files ▸ Midterm Exam ▸ Midterm–2026): questions PDF · solution docx · Quiz 1–5 stats — review against your returned paper", cn:"期中资料(Files ▸ Midterm Exam ▸ Midterm–2026): 试题 PDF·答案 docx·Quiz 1–5 统计 — 对照返还卷复盘" },
        { kr:"중간 통계: 평균 118.85/147·중앙 121.5(≈80%)·N=72·최고 142 — 하위권은 미완성 답안 → '모든 문항 완료'가 완벽보다 중요. Lambert: 기말 더 잘 보면 가중치를 실라버스보다 높게, 점수 불만족 시 상담 환영", en:"Midterm stats: mean 118.85/147, median 121.5 (≈80%), N=72, high 142 — the low tail was mostly incomplete papers → finishing every question beats perfection. Lambert: do better on the final and he'll weight it more than the syllabus; open to conversations", cn:"期中统计: 均分118.85/147·中位121.5(≈80%)·N=72·最高142 — 低分多为未完成答卷 → '答完每题'胜过完美。Lambert: 期末更好会加大权重,不满意欢迎面谈" },
        { kr:"기말 예고: 깊은 감가상각·장기자산이 기말 범위 — 중간에서 얕게 다룬 부분이 본격화됨 (기말 8/14, 종이 채점)", en:"Final preview: deep depreciation & long-lived assets are final territory — the parts only skimmed at the midterm (final Aug 14, hand-graded)", cn:"期末预告: 深入折旧与长期资产属期末范围 — 期中只浅涉的部分将成重点(期末8/14,纸质手批)" },
      ],
      traps:[
        { kr:"대손상각비↑ → 세금은 안 줄어든다 (세무책≠주주책) — 기말에도 유효", en:"Higher bad-debt expense does NOT lower taxes (two books: tax ≠ shareholder) — still true for the final", cn:"坏账费用↑ → 税不会减少(税务账≠股东账)— 期末仍适用" },
        { kr:"고객 회수현금 = 순채권 + 현금흐름표 조정값 (인수효과 이미 제거됨)", en:"Cash collected = net receivables + cash-flow-statement figure (acquisitions already stripped)", cn:"客户回收现金=净应收+现金流量表数值(已剔除并购影响)" },
      ],
    },
    {
      code:"MGMT", color:"#1971c2",
      name:{ kr:"전략 6130 (Siggelkow)", en:"Strategy 6130 (Siggelkow)", cn:"战略 6130 (Siggelkow)" },
      headline:{ kr:"마감 러시 — Global 메모 8/10 · 팀 기말 8/24", en:"Deadline rush — Global memo Aug 10 · team final Aug 24", cn:"截止密集 — 全球备忘 8/10 · 团队期末 8/24" },
      points:[
        { new:true, kr:"💼 Global 메모 = **Luckin Coffee**(8/10 마감) — ADDING·CAGE·AAA·BBB 4개 프레임(각 25%)을 프레스 팩에 적용. ⚠️ **팩은 7/30 주말 전에 읽기**(Zeke 지시) · 외부 리서치 금지(체크)·AI 쓰면 전체 프롬프트를 부록에 공개 필수 · 금/토 프레임 노트가 메모 원자재. 지침+팩=Canvas Global Module 폴더", en:"💼 Global memo = Luckin Coffee (due 8/10) — apply ADDING·CAGE·AAA·BBB (25% each) to the press packet. ⚠️ Read the packet BEFORE the Jul 30 weekend (Zeke's instruction) · no outside research (they check) · any AI use must disclose full prompts in an appendix · your Fri/Sat frameworks notes are the raw material. Instructions + packet = Canvas Global Module folder", cn:"💼 Global 备忘 = Luckin Coffee(8/10 截止)— 将 ADDING·CAGE·AAA·BBB(各25%)应用于新闻资料包。⚠️ 周末(7/30)前读资料包(Zeke 要求)· 禁外部研究(核查)· 用 AI 须附录公开完整提示词 · 周五/六框架笔记是原料。说明+资料包=Canvas Global Module 文件夹" },
        { new:true, kr:"🧑‍🏫 Global TA(Na Hyun Kim) — 대면 오피스아워 7/31–8/1(Office 675) + 다음 주 온라인 8/3–7(Calendly). 초안 사전 검토는 안 해주지만 프레임 적용 점검은 해줌 → 메모 주간에 예약하기 좋은 슬롯", en:"🧑‍🏫 Global TA (Na Hyun Kim) — in-person office hours 7/31–8/1 (Office 675) + virtual next week 8/3–7 (Calendly). Won't pre-read drafts but will sanity-check framework application → a smart slot to book for memo week", cn:"🧑‍🏫 Global TA(Na Hyun Kim)— 线下答疑 7/31–8/1(Office 675)+ 下周线上 8/3–7(Calendly)。不预读草稿但会检查框架应用 → 备忘周值得预约" },
        { kr:"📊 전략 페이퍼 성적·코멘트 반환 + 상세 정답 가이드('6130_Strategy Answer Guide', Files) — 점수 12.5–16(평균 ≈14.5) · 채점 5축=Theory·Data·Analysis·Organization·Application(HSC·팀 기말도 동일 예상)", en:"📊 Strategy paper grades & comments back + a detailed answer guide ('6130_Strategy Answer Guide', Files) — scores 12.5–16 (mean ≈14.5) · 5 grading axes = Theory·Data·Analysis·Organization·Application (likely same for HSC & team final)", cn:"📊 战略论文成绩·评语返还 + 详细答案指南('6130_Strategy Answer Guide', Files)— 分数 12.5–16(均分 ≈14.5)· 5项标准=Theory·Data·Analysis·Organization·Application(HSC 与团队期末预计相同)" },
        { new:true, kr:"팀 페이퍼 TA 체크인(필수) — 창구 7/24~8/5 오픈 · 우리 팀 배정 TA 확인 후 Calendly 예약(팀당 1슬롯 · 리드 Zorina Chen) → 일찍 잡을수록 유리", en:"Team-paper TA check-in (mandatory) — window opens 7/24 through 8/5 · confirm your team's assigned TA, then book Calendly (1 slot/team · Lead Zorina Chen) → earlier is better", cn:"团队论文 TA 签到(必须)— 窗口 7/24~8/5 · 先确认本队 TA 再用 Calendly 预约(每队1个 · 组长 Zorina Chen)→ 越早越好" },
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
      headline:{ kr:"기말 8/15 집중 — L9–17·치트시트 2장", en:"Final Aug 15 focus — L9–17 · two cheat sheets", cn:"主攻期末 8/15 — L9–17·两张速查表" },
      points:[
        { new:true, kr:"🎯 기말 상세(Kent 7/23): 8/15 · 3시간 · L1–17(**L1–8 약1/3 · L9–17 약2/3** — 후반부가 배점 큼) · 8문항 전부 · closed book + **치트시트 2장(8.5×11 양면=4면)** — 미드텀의 2배 · 계산기 O·폰 X", en:"🎯 Final details (Kent 7/23): 8/15 · 3 hours · L1–17 (~1/3 on L1–8, ~2/3 on L9–17 — the back half carries the points) · all 8 questions · closed book + TWO cheat sheets (8.5×11, both sides = 4 faces) — double the midterm · calculator yes, phone no", cn:"🎯 期末细节(Kent 7/23): 8/15 · 3小时 · L1–17(**L1–8 约1/3 · L9–17 约2/3** — 后半占分多)· 全部8题 · 闭卷 + **2张速查表(8.5×11双面=4面)** — 期中的两倍 · 可用计算器·禁手机" },
        { new:true, kr:"📌 Pras 예측 — 세션6(이부가격제+번들링) = 기말 **최소 2문항**(슬라이드·영상 게시), 세션7(과점모델, 7/21 라이브) = 추가 2문항 예상(1 단독 + 1 게임이론 결합). 다음 라이브는 화 9pm ET", en:"📌 Pras's read — Session 6 (two-part tariffs + bundling) = ≥2 final questions (slides + video posted), Session 7 (oligopoly models, live 7/21) = likely 2 more (one standalone, one combined with game theory). Next live sessions Tuesdays 9pm ET", cn:"📌 Pras 预测 — 第6课(二部收费+捆绑)=期末**至少2题**(幻灯·视频已发),第7课(寡头模型,7/21直播)=预计再2题(1独立 + 1结合博弈论)。下次直播周二 9pm ET" },
        { new:true, kr:"📚 기출 기말 **2021–25**(정답 포함) Canvas에 게시 — 2025 새로 추가(드롭박스는 2020–24였음). Kent 순서: 노트 → 리뷰세션 → 연습문제 → 기출(\"기출만 보지 말 것\")", en:"📚 Past finals 2021–25 (with answers) now on Canvas — 2025 is new (the Dropbox set was 2020–24). Kent's order: notes → review sessions → practice problems → past exams (\"do not simply look at past exams\")", cn:"📚 期末真题 2021–25(含答案)已在 Canvas — 2025 新增(Dropbox 曾为 2020–24)。Kent 顺序: 笔记 → 复习课 → 练习题 → 真题(\"别只看真题\")" },
        { kr:"📐 채점 규칙(TA 확인): 유도 없는 답 = **0점** · 적용 없는 개념 = **0점** · 소수점 그대로 OK(반올림 감점 없음) · 접근을 보여주면 부분점수 후함", en:"📐 Grading rules (TA-confirmed): answers without derivation = ZERO · concepts without application = ZERO · decimals are fine (no rounding penalty) · partial credit is generous if you show your approach", cn:"📐 评分规则(TA确认): 无推导的答案=**0分** · 无应用的概念=**0分** · 小数可保留(不扣分)· 展示思路给分慷慨" },
        { kr:"🔧 기출 정오표 — 2023 Q1a: 중간점은 17이 아니라 **15** · 2024 Q2a: 총비용 합계 **3,260,328** · 2025 Q2b/c: 장기이윤 **$0**, 가격 **$20** · ⚠️ 오타 아님: 2025 Q3b는 가격이 **$4.20→$3.50** · 2022 Q4c에서 Pras와 Canvas 풀이가 다르면 **Canvas가 채점 기준**", en:"🔧 Past-exam errata — 2023 Q1a: midpoint uses 15, not 17 · 2024 Q2a: total cost adds to 3,260,328 · 2025 Q2b/c: LR profit = $0, price = $20 · ⚠️ NOT a typo: 2025 Q3b the price change is $4.20→$3.50 · 2022 Q4c: where Pras and Canvas solutions disagree, Canvas is the grading standard", cn:"🔧 真题勘误 — 2023 Q1a: 中点用 **15** 而非17 · 2024 Q2a: 总成本合计 **3,260,328** · 2025 Q2b/c: 长期利润 **$0**,价格 **$20** · ⚠️ 非笔误: 2025 Q3b 价格变化为 **$4.20→$3.50** · 2022 Q4c 若 Pras 与 Canvas 答案不一致,**以 Canvas 为评分标准**" },
        { kr:"기출 7세트 완성(2019–25)+솔루션 · Shivani 문제맵: 2019 이후 5개 핵심주제가 매 미드텀 출제 → 주제 마스터 후 매핑된 문제 풀기 · Concept Refresher는 마지막 1–2일 점검용(주 가이드 X, 모든 개념을 동일 비중으로 봄)", en:"Practice set complete (2019–25, 7 exams) + solutions · Shivani's problem map: all 5 core topics have appeared on every midterm since 2019 → master a topic, then work its mapped problems · Concept Refresher = a last-1–2-days inventory check (not your main guide — it weighs all concepts equally, the exam doesn't)", cn:"真题7套(2019–25)+答案 · Shivani 题图: 2019年起5大核心主题每次期中都考 → 掌握一个主题就做其对应题 · Concept Refresher 用于最后1–2天清点(非主指南,它对所有概念等权重)" },
        { kr:"\"시험문제가 현실, 추가문제는 실전보다 쉽다\" · 2019부터 차례로", en:"\"Exam problems are the reality — the additional problems are easier\" · start with 2019 and work forward", cn:"\"真题才是现实,附加题比实战简单\" · 从2019开始按序做" },
        { kr:"계산문제 핵심 = 3차 가격차별 (1·2차는 개념으로만 출제)", en:"Calc problems are built on 3rd-degree price discrimination (1st/2nd degree appear conceptually only)", cn:"计算题核心 = 三级价格歧视(一/二级只考概念)" },
        { kr:"정확한 최적가격을 물으면 무조건 MR=MC (\"절대 틀리지 않는다\") · 탄력성은 방향(올릴까/내릴까)·근사값용", en:"Asked for the exact optimal price? Set MR = MC (\"you will never be wrong\") · elasticity only gives direction or an approximation", cn:"问最优价格就用 MR=MC(\"永远不会错\")· 弹性只判断方向或近似" },
        { kr:"시그니처: 문제에 수요곡선이 2개 = 가격차별 문제 예고 (차별 가능한가부터 판단)", en:"Signature: two demand curves in a problem = a price-discrimination question is coming (first ask: can they discriminate?)", cn:"信号: 题里有两条需求曲线 = 价格歧视题(先判断能否歧视)" },
        { kr:"차별 불가 시: 수요를 반드시 수량형으로 합산(가격형 금지) + 킹크 포인트 확인 — Q나 P가 음수면 구간을 잘못 고른 것", en:"No discrimination possible: add demands in quantity form (never price form) + check the kink point — a negative Q or P means you picked the wrong segment", cn:"不能歧视时: 需求务必按数量形式相加(禁止价格形式)+ 检查拐点 — Q或P为负说明选错区间" },
        { kr:"부분점수 후함 — 케이스 나열 + 근거만 써도 ≈90%. 얼지 말고 경우의 수를 적기", en:"Partial credit is generous — writing the options + your reasoning ≈ 90% of the points. Don't freeze; list the cases", cn:"部分分很慷慨 — 列出情形+理由 ≈ 90% 分。别卡住,把情况写下来" },
        { kr:"🗓 기말 준비 도구: 기말 토픽 리스트(8개) + RS5 워크시트(세션 8/5 7 PM PT) · L12·13 'filled in' PDF는 게임이론(기말) 자료 · RS4 풀이+Inkoo 노트는 catch-up용", en:"🗓 Finals toolkit: finals topic list (8 topics) + RS5 worksheet (session 8/5, 7 PM PT) · L12·13 'filled in' PDFs cover game theory (final material) · RS4 solutions + Inkoo's notes for catch-up", cn:"🗓 期末工具: 期末主题清单(8个)+ RS5 练习题(8/5 7 PM PT)· L12·13 'filled in' PDF 为博弈论(期末资料)· RS4 答案+Inkoo 笔记可补课" },
      ],
      traps:[
        { kr:"⚠️ 단위 함정 — 모든 비용을 수요의 단위에 맞추기 (연간 라이선스→일당 · 에이커당→단위당)", en:"⚠️ Units trap — match every cost to the demand's unit (per-year license → per-day · per-acre → per-unit)", cn:"⚠️ 单位陷阱 — 所有成本要换算成需求的单位(年费→按天 · 每英亩→每单位)" },
        { kr:"⚠️ Canvas 시험 날짜 함정 — Aug 22/Sep 7은 작년(2025) 잔재. 실제 미드텀 7/17 · 기말 8/15", en:"⚠️ Canvas date trap — Aug 22/Sep 7 are last year's (2025). Real midterm Jul 17, final Aug 15", cn:"⚠️ Canvas 日期陷阱 — 8/22、9/7 为去年(2025)残留。实际期中 7/17、期末 8/15" },
        { kr:"⚠️ Inkoo는 새 공지 대신 기존 공지를 수정 (메일 안 옴) — 공지 페이지 재방문", en:"⚠️ Inkoo edits the existing announcement silently (no email) — re-visit the page", cn:"⚠️ Inkoo 会直接改旧公告而非发新公告(无邮件)— 请重访公告页" },
      ],
    },
    {
      code:"HSC", color:"#9c36b5",
      name:{ kr:"인적·사회적 자본 (MacDuffie)", en:"Human & Social Capital (MacDuffie)", cn:"人力与社会资本 (MacDuffie)" },
      headline:{ kr:"페이퍼 7/27 마감 (16%) · 이후 팀 기말로", en:"Paper due Jul 27 (16%) · then the team final", cn:"论文 7/27 截止 (16%)· 之后团队期末" },
      points:[
        { new:true, kr:"📝 HSC 페이퍼 = 오늘 7/27 11:59 PM PDT 마감 · 팁: ~1,000단어 · 이론 4개를 층층이(나열 X) · \"케이스는 나와 내 직무\" · 길게 쓰고 줄이기 · ⚠️ MGMT 6100의 5개 평가축(Theory·Data·Analysis·Organization·Application)으로 채점될 가능성", en:"📝 HSC paper = due today 7/27, 11:59 PM PDT · tips: ~1,000 words · weave in 4 theories in layers (not a list) · \"the case is you and your job\" · draft long then cut · ⚠️ likely graded on MGMT 6100's 5 criteria (Theory·Data·Analysis·Organization·Application)", cn:"📝 HSC 论文 = 今天 7/27 11:59 PM PDT 截止 · 提示: ~1,000字 · 4个理论层层融入(非罗列)· \"案例就是你和你的工作\" · 先写长再精简 · ⚠️ 可能按 MGMT 6100 的5项标准评分(Theory·Data·Analysis·Organization·Application)" },
        { kr:"⏱ Janice Fisher 라이팅 코치 = 선착순 (중복 이용 허용) — 피드백 받고 싶으면 일찍 예약", en:"⏱ Janice Fisher writing-coach slots = first-come, first-served (double-dipping allowed) — book early if you want feedback", cn:"⏱ Janice Fisher 写作辅导 = 先到先得(允许重复使用)— 想要反馈就尽早预约" },
        { kr:"슬라이드는 Canvas Files ▸ Slides (Study.Net 아님): Class 1–4(Motivating Performance·Designing Jobs·Building/Sustaining Culture·Recruiting & Selecting) + AI×HR 리딩(Nyberg)", en:"Slides are in Canvas Files ▸ Slides (not Study.Net): Class 1–4 (Motivating Performance · Designing Jobs · Building/Sustaining Culture · Recruiting & Selecting) + the AI×HR reading (Nyberg)", cn:"幻灯在 Canvas Files ▸ Slides(非 Study.Net): Class 1–4(Motivating Performance·Designing Jobs·Building/Sustaining Culture·Recruiting & Selecting)+ AI×HR 阅读(Nyberg)" },
        { kr:"팀 기말과의 연결: HSC 이슈가 전략·글로벌에 주는 영향이 팀 페이퍼 핵심 축 (상세는 MGMT 카드)", en:"Link to the team final: how HSC issues affect Strategy/Global is a core axis of the team paper (details in the MGMT card)", cn:"与团队期末的联系: HSC 议题对战略/全球的影响是团队论文核心(详见 MGMT 卡)" },
      ],
      traps:[],
    },
  ],

  /* ── 액션 체크리스트 (체크 상태는 브라우저에 저장됨) ──────────────────────*/
  actions:[
    { id:"a20", by:"2026-07-27", label:{ kr:"MGMT6130 M2 강의평가 제출 (7/27 11:59 ET · 5분 · 장애 복구됨, 유예 없음)", en:"Submit the MGMT6130 M2 course eval (7/27, 11:59 ET · 5 min · system's back up, no grace)", cn:"提交 MGMT6130 M2 课评(7/27 11:59 ET · 5分钟 · 系统已恢复,无宽限)" } },
    { id:"a18", by:"2026-07-27", label:{ kr:"HSC 페이퍼 제출 (7/27 11:59 PDT, 16%)", en:"Submit the HSC paper (7/27, 11:59 PDT, 16%)", cn:"提交 HSC 论文(7/27 11:59 PDT,16%)" } },
    { id:"a21", by:"2026-07-29", label:{ kr:"Luckin Coffee 프레스 팩 읽기 (Global 주말 7/30 전에 · Zeke 권장) — 메모 준비", en:"Read the Luckin Coffee press packet before the Global weekend (7/30 · Zeke suggests) — memo prep", cn:"读 Luckin Coffee 新闻资料包(Global 周末 7/30 前 · Zeke 建议)— 备忘准备" } },
    { id:"a19", by:"2026-07-29", label:{ kr:"ACCT Quiz 6 완료 — 7/29 11:50 PM PT · TP 슬라이드 먼저(Transfer Pricing 문제 포함) · Quiz 7은 8/12", en:"Finish ACCT Quiz 6 — 7/29, 11:50 PM PT · skim TP slides first (has a Transfer Pricing question) · Quiz 7 is 8/12", cn:"完成 ACCT Quiz 6 — 7/29 11:50 PM PT · 先看 TP 幻灯(含转让定价题)· Quiz 7 在 8/12" } },
    { id:"a22", by:"2026-07-31", label:{ kr:"Penn 연락처 정보 업데이트 (Path@Penn · Action Required · 5분)", en:"Update Penn contact info (Path@Penn · Action Required · 5 min)", cn:"更新 Penn 联系信息(Path@Penn · Action Required · 5分钟)" } },
    { id:"a16", by:"2026-07-31", label:{ kr:"💰 가을 등록금 납부 (7/31 마감 · 연체료!) — 분납 원하면 4개월 플랜도 7/31까지 Penn.Pay ▸ Payment Plans", en:"💰 Pay fall tuition (due 7/31 · late penalty!) — want installments? the 4-month plan also closes 7/31: Penn.Pay ▸ Payment Plans", cn:"💰 缴秋季学费(7/31 截止 · 有滞纳金!)— 想分期?4个月计划也在 7/31 截止: Penn.Pay ▸ Payment Plans" } },
    { id:"a8", by:"2026-08-05", label:{ kr:"팀 페이퍼 TA 체크인 — 팀 배정 TA 확인 후 Calendly 예약(팀당 1개), 8/5까지", en:"Team-paper TA check-in — confirm our team's TA, then book on Calendly (1 per team), by Aug 5", cn:"团队论文 TA 签到 — 确认本队 TA 后用 Calendly 预约(每队1个),8/5前" } },
  ],

  /* ── Canvas 자료 위치 맵 ─────────────────────────────────────────────────*/
  canvasMap:[
    {
      subject:"BEPP (MGEC)",
      where:{ kr:"Files > 1-Lectures: 'with blanks'(수업 전) → 'filled-in'(수업 후) + Additional Problems · L12·13 filled = 기말(게임이론)", en:"Files > 1-Lectures: 'with blanks' (pre) → 'filled-in' (post) + Additional Problems · L12·13 filled = final (game theory)", cn:"Files > 1-Lectures: 'with blanks'(课前) → 'filled-in'(课后) + Additional Problems · L12·13 filled = 期末(博弈论)" },
      submit:{ kr:"시험은 지면", en:"Exams on paper", cn:"考试为纸笔" },
      watch:{ kr:"📦 기출·기말 자료는 Pras 드롭박스(기출 미드텀 2019–25 · 기말 5세트 2020–24 · 정답 포함) + RS 풀이/노트 · 기말 토픽 리스트(8개) · 건너뛴 토픽은 Class Recordings · Inkoo는 공지를 조용히 수정", en:"📦 Past/final materials in Pras's Dropbox (midterms 2019–25 · 5 finals 2020–24 w/ answers) + RS solutions/notes · finals topic list (8) · skipped topics in Class Recordings · Inkoo edits announcements silently", cn:"📦 真题·期末资料在 Pras Dropbox(期中 2019–25 · 期末5套 2020–24,含答案)+ RS 答案/笔记 · 期末主题清单(8个)· 跳过的内容看 Class Recordings · Inkoo 会悄悄改公告" },
    },
    {
      subject:"ACCT",
      where:{ kr:"Files > 세션별 번호 폴더 01–21 (핸드아웃+케이스 풀이) · 미드텀 세트는 Files ▸ Midterm Exam ▸ Midterm–2026 (문제 PDF·풀이 docx·Quiz1–5 통계)", en:"Files > numbered session folders 01–21 (handouts + case solutions) · midterm set in Files ▸ Midterm Exam ▸ Midterm–2026 (questions PDF · solution docx · Quiz 1–5 stats)", cn:"Files > 各课时编号文件夹 01–21(讲义+案例答案)· 期中资料在 Files ▸ Midterm Exam ▸ Midterm–2026(试题 PDF·答案 docx·Quiz1–5 统计)" },
      submit:{ kr:"퀴즈는 Assignments 탭 (Quiz 1–5는 8/14까지 재오픈)", en:"Quizzes in Assignments tab (Quizzes 1–5 re-open until Aug 14)", cn:"测验在 Assignments 标签(Quiz 1–5 重开至 8/14)" },
      watch:{ kr:"폴더 31/32 = 기출, 93 = 교과서 솔루션 · 시험은 종이 채점 후 반환(147점 만점)", en:"Folders 31/32 = past exams, 93 = textbook solutions · exams hand-graded on paper & returned (out of 147)", cn:"文件夹 31/32=往年卷, 93=教材答案 · 考试纸质手批返还(满分147)" },
    },
    {
      subject:"MGMT 6130 (전략·HSC)",
      where:{ kr:"슬라이드=Files ▸ Slides(Class 1–4) · 실라버스/FAQ/Fisher 메모·정답 가이드=Files 루트 · 케이스=Study.Net 탭 · ⚠️ HSC 사전 리딩·스터디 질문은 **실라버스(v1.6)**에(공지 X)", en:"Slides = Files ▸ Slides (Class 1–4) · syllabus/FAQ/Fisher memo & answer guide = Files root · cases = Study.Net tab · ⚠️ HSC pre-readings & study questions live in the syllabus (v1.6), not announcements", cn:"幻灯=Files ▸ Slides(Class 1–4)· 大纲/FAQ/Fisher 备忘·答案指南=Files 根目录 · 案例=Study.Net 标签 · ⚠️ HSC 预读与思考题在**大纲(v1.6)**(非公告)" },
      submit:{ kr:"Assignments 탭 (페이퍼·프로포절)", en:"Assignments tab (papers & proposals)", cn:"Assignments 标签(论文与提案)" },
      watch:{ kr:"두 섹션(751/752)이 한 사이트 공유 · Study.Net 팩 늦게 업데이트(재다운로드) · 채점 5축=Theory·Data·Analysis·Organization·Application", en:"Both sections (751/752) share one site · Study.Net pack updates late (re-download) · grading axes = Theory·Data·Analysis·Organization·Application", cn:"两个班(751/752)共用一个站点 · Study.Net 包更新较晚(需重新下载)· 评分5轴=Theory·Data·Analysis·Organization·Application" },
    },
    {
      subject:"성적·납부 (Path@Penn · Penn.Pay)",
      where:{ kr:"최종 letter grade·비공식 성적표 = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript) · 등록금 명세서·분납 플랜 = Penn.Pay ▸ Payment Plans", en:"Final letter grades & unofficial transcript = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript) · tuition statements & installment plans = Penn.Pay ▸ Payment Plans", cn:"最终等级成绩·非正式成绩单 = Path@Penn (path.at.upenn.edu ▸ unofficialTranscript)· 学费账单·分期计划 = Penn.Pay ▸ Payment Plans" },
      submit:{ kr:"등록금 납부는 Penn.Pay", en:"Pay tuition on Penn.Pay", cn:"在 Penn.Pay 缴费" },
      watch:{ kr:"💰 가을 등록금 7/31 마감(연체료) · 4개월 분납 플랜도 7/31까지 · 국제 은행은 PayMyTuition", en:"💰 Fall tuition due 7/31 (late penalty) · 4-month plan also closes 7/31 · international bank → PayMyTuition", cn:"💰 秋季学费 7/31 截止(滞纳金)· 4个月分期也在 7/31 前 · 海外银行用 PayMyTuition" },
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
    note: { kr:"3–4일 압축 선택과목(보통 0.5 CU, 졸업 19 CU에 포함) · ⚠️ 전공(concentration)엔 Graded만 인정(P/F 불인정) · PHL·SFO 혼합 수강 가능 · 추첨 결과는 이메일(7/8) · Course Match add/drop 목 7/16 정오 PT 오픈(추가=선착순) — 기간 내 드롭=무기록, 마감 후=W, P/F 변경은 과목 Day1까지 · ADD 마감은 과목별 블록위크 직전(10/9·11/27·12/11) → 대기줄 늦가을까지 · 대기줄 김(WEMBA51 우선), 'locked'는 정상 · 상세·실라버스·Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 프리뷰: AI in Seattle·Luxury Branding in Paris·PM·Executive Leadership 등 (전체 캘린더: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")",
            en:"Electives compressed into 3–4 days (usually 0.5 CU, count toward the 19-CU graduation req) · ⚠️ only Graded courses count toward a major (not P/F) · mix PHL & SFO campuses · lottery results by email (7/8) · Course Match add/drop opens Thu 7/16 noon PT (adds first-come) — drop within window = no record, after = W, P/F changes until Day 1 · ADD deadlines per course right before each block week (10/9 · 11/27 · 12/11) → waitlists alive until late fall · long waitlists (WEMBA51 priority), 'locked' is normal · details, syllabi & Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 peek: AI in Seattle, Luxury Branding in Paris, PM, Executive Leadership & more (full calendar: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")",
            cn:"3–4天压缩选修(通常 0.5 CU,计入毕业19 CU)· ⚠️ 专业只认 Graded(P/F 不算)· 可混选 PHL·SFO 校区 · 抽签结果邮件(7/8)· Course Match 加退 周四 7/16 中午 PT 开放(加课先到先得)— 期内退=无记录,之后=W,P/F 可改到 Day1 · ADD 截止按课程各在其 block week 前(10/9·11/27·12/11)→ 候补持续到晚秋 · 等待名单长(WEMBA51 优先),'locked' 属正常 · 详情·大纲·书单: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 预告: AI in Seattle·Luxury Branding in Paris·PM·Executive Leadership 等(完整日历: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")" },
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
        start:"2026-07-30", end:"2026-08-01",
        label: { kr:"7월 30일(목)–8월 1일(토) · SFO · Global 모듈 개막", en:"Thu Jul 30 – Sat Aug 1 · SFO · Global module opens", cn:"7月30日(周四)–8月1日(周六) · SFO · Global 模块开幕" },
        days: [
          {
            label: { kr:"목요일 7/30", en:"Thursday 7/30", cn:"周四 7/30" },
            rows: [
              { time:"8:30–9:30",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:30–12:30",  s1:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · 치트시트 2장·기출 2021–25 (상세 BEPP 카드)", en:"Final prep — focus L9–17 · two cheat sheets · past finals 2021–25 (see BEPP card)", cn:"备期末 — 主攻 L9–17 · 两张速查表·真题 2021–25(见 BEPP 卡)" } }, s2:{ kr:"ACCT · Lambert", en:"ACCT · Lambert", cn:"ACCT · Lambert", read:{ kr:"새 덱: Income Taxes · Shareholders' Equity · Investments in Financial Assets + TP 미니케이스", en:"Fresh decks: Income Taxes · Shareholders' Equity · Investments in Financial Assets + a TP mini-case", cn:"新讲义: Income Taxes · Shareholders' Equity · Investments in Financial Assets + TP 迷你案例" } } },
              { time:"12:30–2:00",  both:{ kr:"중식 · Convene 투어(등록자, 12:30–2:00)", en:"Lunch · Convene tour (registered, 12:30–2:00)", cn:"午餐 · Convene 参观(报名者,12:30–2:00)" } },
              { time:"2:00–5:00",   s1:{ kr:"ACCT · Lambert", en:"ACCT · Lambert", cn:"ACCT · Lambert", read:{ kr:"새 덱: Income Taxes · Shareholders' Equity · Investments in Financial Assets + TP 미니케이스", en:"Fresh decks: Income Taxes · Shareholders' Equity · Investments in Financial Assets + a TP mini-case", cn:"新讲义: Income Taxes · Shareholders' Equity · Investments in Financial Assets + TP 迷你案例" } }, s2:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · 치트시트 2장·기출 2021–25 (상세 BEPP 카드)", en:"Final prep — focus L9–17 · two cheat sheets · past finals 2021–25 (see BEPP card)", cn:"备期末 — 主攻 L9–17 · 两张速查表·真题 2021–25(见 BEPP 卡)" } } },
              { time:"5:30–8:30",   both:{ kr:"👨‍👩‍👧 Family Day @ Parklab Gardens · ⚠️ 온캠퍼스 디너 취소", en:"👨‍👩‍👧 Family Day @ Parklab Gardens · ⚠️ on-campus dinner cancelled", cn:"👨‍👩‍👧 Family Day @ Parklab Gardens · ⚠️ 校内晚餐取消" } },
            ],
          },
          {
            label: { kr:"금요일 7/31", en:"Friday 7/31", cn:"周五 7/31" },
            rows: [
              { time:"8:30–9:30",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:00–11:45",  s1:{ kr:"Global · Hernandez (개막)", en:"Global · Hernandez (opens)", cn:"Global · Hernandez(开幕)", read:{ kr:"C17 Manchester City (+ADDING, NPV 복습) · C18 Impossible Foods (+CAGE, Ghemawat 'Distance Still Matters')", en:"C17 Manchester City (+ADDING, NPV refresher) · C18 Impossible Foods (+CAGE, Ghemawat 'Distance Still Matters')", cn:"C17 Manchester City(+ADDING,NPV 复习)· C18 Impossible Foods(+CAGE,Ghemawat 'Distance Still Matters')" } }, s2:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · Pras 세션6·7", en:"Final prep — focus L9–17 · Pras Sessions 6·7", cn:"备期末 — 主攻 L9–17 · Pras 第6·7课" } } },
              { time:"11:45–1:00",  both:{ kr:"Personal Branding 워크샵 · Room 660", en:"Personal Branding Workshop · Room 660", cn:"个人品牌工作坊 · Room 660" } },
              { time:"1:00–4:00",   s1:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · Pras 세션6·7", en:"Final prep — focus L9–17 · Pras Sessions 6·7", cn:"备期末 — 主攻 L9–17 · Pras 第6·7课" } }, s2:{ kr:"Global · Hernandez", en:"Global · Hernandez", cn:"Global · Hernandez", read:{ kr:"C17 Manchester City (+ADDING) · C18 Impossible Foods (+CAGE)", en:"C17 Manchester City (+ADDING) · C18 Impossible Foods (+CAGE)", cn:"C17 Manchester City(+ADDING)· C18 Impossible Foods(+CAGE)" } } },
              { time:"4:15–6:15",   both:{ kr:"ACCT 합반 · Room 660 (양 섹션)", en:"ACCT joint session · Room 660 (both sections)", cn:"ACCT 合班 · Room 660(两班)" } },
            ],
          },
          {
            label: { kr:"토요일 8/1", en:"Saturday 8/1", cn:"周六 8/1" },
            rows: [
              { time:"8:00–9:00",   both:{ kr:"조식 · Dining Room", en:"Breakfast · Dining Room", cn:"早餐 · Dining Room" } },
              { time:"9:00–12:00",  s1:{ kr:"Global · Hernandez", en:"Global · Hernandez", cn:"Global · Hernandez", read:{ kr:"C19 AAA (Amazon India·Netflix India·R&D 글로벌화) · C20 BBB (Yahoo–Alibaba·Harry's·Lyft/Didi/Ola/Grab)", en:"C19 AAA (Amazon India · Netflix India · R&D globalization) · C20 BBB (Yahoo–Alibaba · Harry's · Lyft/Didi/Ola/Grab)", cn:"C19 AAA(Amazon India·Netflix India·研发全球化)· C20 BBB(Yahoo–Alibaba·Harry's·Lyft/Didi/Ola/Grab)" } }, s2:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · 기출 2021–25", en:"Final prep — focus L9–17 · past finals 2021–25", cn:"备期末 — 主攻 L9–17 · 真题 2021–25" } } },
              { time:"12:00–1:00",  both:{ kr:"중식 · Dining Room", en:"Lunch · Dining Room", cn:"午餐 · Dining Room" } },
              { time:"1:00–4:00",   s1:{ kr:"BEPP · Smetters (기말 스프린트)", en:"BEPP · Smetters (final sprint)", cn:"BEPP · Smetters(期末冲刺)", read:{ kr:"기말 대비 — L9–17 집중 · 기출 2021–25", en:"Final prep — focus L9–17 · past finals 2021–25", cn:"备期末 — 主攻 L9–17 · 真题 2021–25" } }, s2:{ kr:"Global · Hernandez", en:"Global · Hernandez", cn:"Global · Hernandez", read:{ kr:"C19 AAA (3 미니케이스) · C20 BBB (3 미니케이스)", en:"C19 AAA (3 mini-cases) · C20 BBB (3 mini-cases)", cn:"C19 AAA(3个迷你案例)· C20 BBB(3个迷你案例)" } } },
            ],
          },
        ],
      },
    ],
    notes: [
      { kr:"⚠️ 목요일 시작 · 위는 섹션 1·2를 나눠서 표기(순서 반대) · 강의실은 공식 Weekend Schedule 폴더에서 본인 섹션 확인", en:"⚠️ Thursday start · Sections 1 & 2 shown separately (reversed order) · confirm your section & rooms in the official Weekend Schedule folder", cn:"⚠️ 周四开始 · 上表已分第1/2班(顺序相反)· 教室请在官方 Weekend Schedule 文件夹按班确认" },
      { kr:"📖 = 그 수업 자료·사전 케이스 (Global 케이스=실라버스 C17–20·프레스 팩은 Canvas Global Module · HSC=Study.Net · ACCT=Files 세션 폴더). 상세는 과목 카드", en:"📖 = that session's materials / pre-class cases (Global cases = syllabus C17–20 · press packet in Canvas Global Module · HSC = Study.Net · ACCT = Files session folders). More in the course cards", cn:"📖 = 该节课的资料·课前案例(Global 案例=大纲 C17–20·资料包在 Canvas Global Module · HSC=Study.Net · ACCT=Files 课时文件夹)。详情见科目卡" },
      { kr:"⚠️ Global(Zeke): 슬라이드는 수업 후 게시(정답 포함)·핵심 개념은 수업에서만 전달 → 출석·프레임 노트가 곧 Luckin 메모 원자재. 팩은 주말 전에 읽기", en:"⚠️ Global (Zeke): slides posted after class (they contain case answers) · key concepts delivered only in class → attendance & your framework notes are the Luckin memo's raw material. Read the packet before the weekend", cn:"⚠️ Global(Zeke): 幻灯课后才发(含案例答案)· 核心概念只在课上讲 → 出勤与框架笔记就是 Luckin 备忘的原料。周末前读资料包" },
      { kr:"🏨 호텔: The Hyatt Regency SF (5 Embarcadero Ctr)", en:"🏨 Hotel: The Hyatt Regency SF (5 Embarcadero Ctr)", cn:"🏨 酒店: The Hyatt Regency SF (5 Embarcadero Ctr)" },
      { kr:"📚 스터디룸: Board Rooms A·B·C · 금 5:00–11:00 PM", en:"📚 Study rooms: Board Rooms A·B·C · Fri 5:00–11:00 PM", cn:"📚 自习室: Board Rooms A·B·C · 周五 5:00–11:00 PM" },
      { kr:"🍻 Wharton Pub: Hyatt Eclipse Bar · 금 8:30–11:30 PM", en:"🍻 Wharton Pub: Hyatt Eclipse Bar · Fri 8:30–11:30 PM", cn:"🍻 Wharton Pub: Hyatt Eclipse Bar · 周五 8:30–11:30 PM" },
      { kr:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM · 📸 Class Photo 8/28 점심", en:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM · 📸 Class Photo 8/28 at lunch", cn:"👨‍👩‍👧 Family Day @ Parklab Gardens · 7/30 5:30–8:30 PM · 📸 Class Photo 8/28 午餐" },
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
