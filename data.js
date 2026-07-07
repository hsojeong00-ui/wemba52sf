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
    lastUpdated: "2026-07-06",   // ← 업데이트할 때마다 이 날짜만 바꾸세요 (YYYY-MM-DD)
    author:   "Sally",
    tzLabel:  "PT",
    // 예외: 시험이 없어도 이 날(PST) 하루만 '수고했어요' 축하 삽화를 강제 표시 (자정에 자동으로 사라짐).
    // 안 쓸 땐 date를 "" 로 비워두면 됩니다.
    cheerOverride: {
      date: "2026-07-06",
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
    { date:"2026-07-06", kr:"✅ BEPP 미드텀 확정 — 범위 L1–8 · closed book + 직접 만든 치트시트 1장(8.5×11 양면). L12–14·L10–11 영상은 기말. 번들링(L9)은 교수가 수업에서 언급 → 미드텀보다 기말에 나올 가능성이 큼", en:"✅ BEPP midterm confirmed — scope L1–8 · closed book + one self-made cheat sheet (8.5×11, both sides). L12–14 & L10–11 video are for the final. Bundling (L9) came up in class → more likely on the final than the midterm", cn:"✅ BEPP 期中确定 — 范围 L1–8 · 闭卷 + 自制速查表1页(8.5×11双面)。L12–14 与 L10–11 视频属期末。捆绑(L9)教授课上提过 → 更可能出现在期末而非期中" },
    { date:"2026-07-06", kr:"📚 BEPP 기출 7세트 완성(2019–25) + Shivani 문제맵(2019 이후 5개 핵심주제가 매 미드텀 출제) + Concept Refresher(마지막 점검용). Kruthika 치트시트팩으로 시작하면 빈 페이지보다 빠름", en:"📚 BEPP practice set complete (2019–25, 7 exams) + Shivani's problem map (5 core topics on every midterm since 2019) + Concept Refresher (final check). Start from Kruthika's cheat-sheet pack, not a blank page", cn:"📚 BEPP 真题7套(2019–25)+ Shivani 题图(2019年起5大核心主题每次期中都考)+ Concept Refresher(最后清点)。用 Kruthika 速查表包起步更快" },
    { date:"2026-07-06", kr:"📊 ACCT 중간 통계 — 평균 118.85/147·중앙 121.5(≈80%)·N=72·최고 142. 하위권은 미완성 답안 → '모든 문항 완료'가 완벽보다 중요. Lambert: 기말 더 잘 보면 가중치를 실라버스보다 높게, 점수 불만 시 상담 환영", en:"📊 ACCT midterm stats — mean 118.85/147, median 121.5 (≈80%), N=72, high 142. The low tail was mostly incomplete papers → finishing every question beats perfection. Lambert: do better on the final and he'll weight it more heavily; open to conversations", cn:"📊 ACCT 期中统计 — 均分118.85/147·中位121.5(≈80%)·N=72·最高142。低分多为未完成答卷 → '答完每题'胜过完美。Lambert: 期末更好会加大权重,不满意欢迎面谈" },
    { date:"2026-07-06", kr:"🗣 MacDuffie가 7/17–18 수업에 녹일 '여러분 조직의 성과평가·창업 청사진 사례'를 수집 중 — 주말 전 이메일/공지 답글로 보내면 내 맥락이 수업에 반영됨 · Day1–2 슬라이드(Class1–4)는 Canvas Files ▸ Slides", en:"🗣 MacDuffie is collecting performance-appraisal & founder-blueprint examples from your own orgs for the 7/17–18 classes — email or reply before the weekend to get your context into class · Day 1–2 slides (Class 1–4) on Canvas Files ▸ Slides", cn:"🗣 MacDuffie 征集你所在组织的绩效评估与创始蓝图案例(用于7/17–18课)— 周末前邮件/回复公告即可把你的情境带进课堂 · Day1–2 幻灯(Class1–4)在 Canvas Files ▸ Slides" },
    { date:"2026-07-06", kr:"📝 HSC 페이퍼(7/27, 16%) — 팁: ~1,000단어, 이론 4개 엮기, '케이스=본인 직무', 길게 쓰고 줄이기 · Fisher 첨삭 선착순(빨리 예약)", en:"📝 HSC paper (Jul 27, 16%) — tips: ~1,000 words, weave in 4 theories, 'the case is you & your job', draft long then cut · Fisher coaching slots first-come — book early", cn:"📝 HSC 论文(7/27,16%)— 提示: ~1,000词、融入4个理论、'案例就是你的工作'、先写长再删 · Fisher 批改先到先得,尽早预约" },
    { date:"2026-07-06", kr:"🧳 Pras 출장 — 이번 주 화요일 도움 세션은 없을 수 있음(슬랙 확인)", en:"🧳 Pras is traveling — Tuesday's usual help session may not happen this week (watch Slack)", cn:"🧳 Pras 出差 — 本周二的答疑可能取消(留意 Slack)" },
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
      date:"2026-07-06", type:"milestone", course:"Block Week",
      title:{ kr:"Fall BW Course Match add/drop 오픈", en:"Fall BW Course Match add/drop opens", cn:"Fall BW Course Match 加退开放" },
      detail:{ kr:"7/6 주부터 추가·변경 가능 · 드롭은 기간 내=기록 없음, 이후=W · P/F 변경은 과목 Day1까지 (마감은 과목별)", en:"Add/change from the week of Jul 6 · drop within window = no transcript mark, after = W · P/F changes until Day 1 (deadlines per course)", cn:"7/6当周起可加/改 · 加退期内退=无记录,之后=W · P/F 可改到 Day1(截止按课程)" },
    },
    {
      date:"2026-07-09", type:"milestone", course:"MGMT", new:true,
      title:{ kr:"MGMT 6130 강의평가 마감", en:"MGMT 6130 course evaluation closes", cn:"MGMT 6130 课程评估截止" },
      detail:{ kr:"11:59 PM ET (동부시간) 까지 제출", en:"submit by 11:59 PM ET (Eastern)", cn:"美东时间 11:59 PM 前提交" },
    },
    {
      date:"2026-07-09T19:00", type:"session", course:"BEPP", new:true,
      title:{ kr:"BEPP Review Session 4 (Inkoo)", en:"BEPP Review Session 4 (Inkoo)", cn:"BEPP 复习课 4 (Inkoo)" },
      detail:{ kr:"7 PM PT · ⚠️ 목요일 (평소 수요일 아님) · 워크시트 먼저 · 번들링(L9)은 기말 예상", en:"7 PM PT · ⚠️ Thursday (not the usual Wednesday) · do the worksheet first · bundling (L9) likely on the final", cn:"7 PM PT · ⚠️ 周四(非往常周三)· 先做练习题 · 捆绑(L9)预计期末" },
    },
    {
      date:"2026-07-16", type:"milestone", course:"HSC", new:true,
      title:{ kr:"MacDuffie 사례 제출 (주말 전)", en:"Send MacDuffie your examples (before the weekend)", cn:"提交 MacDuffie 案例(周末前)" },
      detail:{ kr:"7/17–18 수업에 녹일 '내 조직의 성과평가·창업 청사진' 사례 — 이메일 또는 공지 답글. 내 맥락을 수업에 넣는 쉬운 방법", en:"Performance-appraisal & founder-blueprint examples from your own org for the 7/17–18 classes — email or reply to the announcement. Easy way to get your context into class", cn:"用于7/17–18课的'本组织绩效评估·创始蓝图'案例 — 邮件或回复公告。把你的情境带进课堂的简单方式" },
    },
    {
      date:"2026-07-17T09:30", type:"exam", course:"BEPP", hard:true, new:true,
      title:{ kr:"BEPP 중간고사", en:"BEPP midterm", cn:"BEPP 期中考试" },
      detail:{ kr:"9:30–11:30 AM · 합반 · 5문제/120분 · 강의실 추후 공지 · ✅범위 L1–8 · closed book + 자작 치트시트 1장(8.5×11 양면) · 번들링(L9)은 기말 예상", en:"9:30–11:30 AM · joint · 5 problems/120 min · room TBA · ✅ scope L1–8 · closed book + one self-made cheat sheet (8.5×11, both sides) · bundling (L9) likely on the final", cn:"上午9:30–11:30 · 合并班 · 5题/120分钟 · 教室待公布 · ✅范围 L1–8 · 闭卷 + 自制速查表1页(8.5×11双面)· 捆绑(L9)预计期末" },
    },
    {
      date:"2026-07-27", type:"paper", course:"HSC", hard:true, new:true,
      title:{ kr:"HSC 페이퍼 마감", en:"HSC paper due", cn:"HSC 论文截止" },
      detail:{ kr:"11:59 PM PDT · 성적 16% · ⚠️ 27일 (29일 아님) · ~1,000단어 · 이론 4개 녹여서(나열 X) · '케이스=나와 내 직무' · 길게 쓰고 줄이기 · Janice Fisher 라이팅코치=선착순 → 일찍 예약", en:"11:59 PM PDT · 16% of grade · ⚠️ the 27th (not 29th) · ~1,000 words · weave in 4 theories (not a list) · 'the case is you & your job' · draft long then cut · Janice Fisher writing coach = first-come → book early", cn:"11:59 PM PDT · 占16% · ⚠️ 27号(非29号)· ~1,000字 · 融入4个理论(非罗列)· '案例就是你和你的工作' · 先写长再精简 · Janice Fisher 写作辅导=先到先得 → 尽早预约" },
    },
    {
      date:"2026-07-29T20:50", type:"quiz", course:"ACCT", new:true,
      title:{ kr:"ACCT Quiz 6·7 마감", en:"ACCT Quiz 6·7 due", cn:"ACCT Quiz 6·7 截止" },
      detail:{ kr:"8:50 PM PT · 오픈 7/19 · ⚠️ HSC 페이퍼(7/27)와 같은 주 — 열리면 미리 처리 권장", en:"8:50 PM PT · opens Jul 19 · ⚠️ same week as the HSC paper (7/27) — knock them out when they open", cn:"8:50 PM PT · 7/19开放 · ⚠️ 与 HSC 论文(7/27)同周 — 开放即做" },
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
      date:"2026-08-10", type:"paper", course:"MGMT", new:true,
      title:{ kr:"Global Strategy 메모 마감", en:"Global Strategy memo due", cn:"Global Strategy 备忘录截止" },
      detail:{ kr:"11:59 PM PDT · 성적 16% · 케이스·지침은 Global 주말(8/7–8)에 게시", en:"11:59 PM PDT · 16% of grade · case & instructions posted during the Global weekend (Aug 7–8)", cn:"11:59 PM PDT · 占16% · 案例与说明在 Global 周末(8/7–8)发布" },
    },
    {
      date:"2026-08-13T20:50", type:"quiz", course:"ACCT", new:true,
      title:{ kr:"ACCT Quiz 8 마감", en:"ACCT Quiz 8 due", cn:"ACCT Quiz 8 截止" },
      detail:{ kr:"8:50 PM PT · 오픈 8/1 · 기말 하루 전", en:"8:50 PM PT · opens Aug 1 · day before the final", cn:"8:50 PM PT · 8/1开放 · 期末前一天" },
    },
    {
      date:"2026-08-14T09:30", type:"exam", course:"ACCT", hard:true, new:true,
      title:{ kr:"ACCT 기말고사", en:"ACCT final", cn:"ACCT 期末考试" },
      detail:{ kr:"금요일 · 종이 채점 반환 방식(중간과 동일)", en:"Friday · hand-graded paper exam (same as midterm)", cn:"周五 · 纸质手批返还(与期中相同)" },
    },
    {
      date:"2026-08-15T09:30", type:"exam", course:"BEPP", hard:true, new:true,
      title:{ kr:"BEPP 기말고사", en:"BEPP final", cn:"BEPP 期末考试" },
      detail:{ kr:"토요일 · 합반", en:"Saturday · joint section", cn:"周六 · 合并班" },
    },
    {
      date:"2026-08-24", type:"milestone", course:"HSC", hard:true,
      title:{ kr:"팀 기말 프로젝트 마감", en:"Final team project due", cn:"团队期末项目截止" },
      detail:{ kr:"11:59 PM PDT · 성적 31% · 팀 TA 체크인(필수)은 7/24–8/5 사이에 미리 잡아두기", en:"11:59 PM PDT · 31% of grade · mandatory team TA check-in must happen Jul 24–Aug 5 — book it early", cn:"11:59 PM PDT · 占31% · 团队 TA 签到(必须)需在 7/24–8/5 之间预约" },
    },
  ],

  /* ── 과목 카드 ───────────────────────────────────────────────────────────*/
  courses: [
    {
      code:"ACCT", color:"#e8590c",
      name:{ kr:"회계 (Lambert)", en:"Accounting (Lambert)", cn:"会计 (Lambert)" },
      headline:{ kr:"중간 성적 반환 완료 · 다음은 퀴즈·기말 8/14", en:"Midterm graded & returned · next: quizzes + final Aug 14", cn:"期中已批返还 · 下一步: 小测+期末 8/14" },
      points:[
        { new:true, kr:"성적 채점 완료, 수고했어요 🎉 기말고사까지 모두 화이팅!", en:"Grades are all in — great work 🎉 Let's keep the momentum through the final!", cn:"成绩已全部批完,辛苦了 🎉 一起加油冲到期末考!" },
        { new:true, kr:"중간 통계(Files ▸ Midterm Exams ▸ 2026): 평균 118.85/147·중앙 121.5(≈80%)·N=72·최고 142 — 하위권은 미완성 답안 → '모든 문항 완료'가 완벽보다 중요. Lambert: 기말 더 잘 보면 가중치를 실라버스보다 높게, 점수 불만족 시 상담 환영(솔루션은 전원 응시 후 게시)", en:"Midterm stats (Files ▸ Midterm Exams ▸ 2026): mean 118.85/147, median 121.5 (≈80%), N=72, high 142 — the low tail was mostly incomplete papers → finishing every question beats perfection. Lambert: do better on the final and he'll weight it more than the syllabus; open to conversations (solution posted once everyone has taken it)", cn:"期中统计(Files ▸ Midterm Exams ▸ 2026): 均分118.85/147·中位121.5(≈80%)·N=72·最高142 — 低分多为未完成答卷 → '答完每题'胜过完美。Lambert: 期末更好会加大权重,不满意欢迎面谈(全员考完后发答案)" },
        { kr:"남은 퀴즈: Quiz 6·7 오픈 7/19→마감 7/29(8:50PM PT) · Quiz 8 오픈 8/1→마감 8/13(기말 하루 전)", en:"Remaining quizzes: Quiz 6·7 open 7/19 → due 7/29 (8:50PM PT) · Quiz 8 open 8/1 → due 8/13 (day before the final)", cn:"剩余小测: Quiz 6·7 开7/19→截7/29(8:50PM PT) · Quiz 8 开8/1→截8/13(期末前一天)" },
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
      headline:{ kr:"마감 러시 — 강의평가 7/9 · 메모 8/10 · 팀 기말 8/24", en:"Deadline rush — course eval Jul 9 · memo Aug 10 · team final Aug 24", cn:"截止密集 — 课评 7/9 · 备忘 8/10 · 团队期末 8/24" },
      points:[
        { new:true, kr:"MGMT 6130 강의평가 마감 7/9 (11:59 PM ET)", en:"MGMT 6130 course evaluation closes Jul 9 (11:59 PM ET)", cn:"MGMT 6130 课程评估 7/9 截止(11:59 PM ET)" },
        { new:true, kr:"Global Strategy 메모(16%) 8/10 마감 — 케이스·지침은 Global 주말(8/7–8)에 게시", en:"Global Strategy memo (16%) due Aug 10 — case & instructions posted during the Global weekend (Aug 7–8)", cn:"Global Strategy 备忘录(16%)8/10 截止 — 案例与说明在 Global 周末(8/7–8)发布" },
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
      headline:{ kr:"미드텀 7/17 · 기말 8/15 — 기출부터", en:"Midterm Jul 17 · final Aug 15 — start with past exams", cn:"期中 7/17 · 期末 8/15 — 先做真题" },
      points:[
        { new:true, kr:"✅ 미드텀 확정 — 범위 L1–8 · closed book + 직접 만든 치트시트 1장(8.5×11 양면). L12–14·L10–11 영상은 기말 범위. 번들링(L9)은 교수가 수업에서 언급 → 미드텀보다 기말에 나올 가능성이 큼. 치트시트는 Kruthika 팩으로 시작하면 빠름", en:"✅ Midterm confirmed — scope L1–8 · closed book + one self-made cheat sheet (8.5×11, both sides). L12–14 & L10–11 video are final material. Bundling (L9) came up in class → more likely on the final than the midterm. Start your sheet from Kruthika's pack", cn:"✅ 期中确定 — 范围 L1–8 · 闭卷 + 自制速查表1页(8.5×11双面)。L12–14 与 L10–11 视频属期末。捆绑(L9)教授课上提过 → 更可能出现在期末而非期中。速查表用 Kruthika 包起步更快" },
        { new:true, kr:"기출 7세트 완성(2019–25)+솔루션 · Shivani 문제맵: 2019 이후 5개 핵심주제가 매 미드텀 출제 → 주제 마스터 후 매핑된 문제 풀기 · Concept Refresher는 마지막 1–2일 점검용(주 가이드 X, 모든 개념을 동일 비중으로 봄)", en:"Practice set complete (2019–25, 7 exams) + solutions · Shivani's problem map: all 5 core topics have appeared on every midterm since 2019 → master a topic, then work its mapped problems · Concept Refresher = a last-1–2-days inventory check (not your main guide — it weighs all concepts equally, the exam doesn't)", cn:"真题7套(2019–25)+答案 · Shivani 题图: 2019年起5大核心主题每次期中都考 → 掌握一个主题就做其对应题 · Concept Refresher 用于最后1–2天清点(非主指南,它对所有概念等权重)" },
        { kr:"\"시험문제가 현실, 추가문제는 실전보다 쉽다\" · 2019부터 차례로", en:"\"Exam problems are the reality — the additional problems are easier\" · start with 2019 and work forward", cn:"\"真题才是现实,附加题比实战简单\" · 从2019开始按序做" },
        { kr:"계산문제 핵심 = 3차 가격차별 (1·2차는 개념으로만 출제)", en:"Calc problems are built on 3rd-degree price discrimination (1st/2nd degree appear conceptually only)", cn:"计算题核心 = 三级价格歧视(一/二级只考概念)" },
        { kr:"정확한 최적가격을 물으면 무조건 MR=MC (\"절대 틀리지 않는다\") · 탄력성은 방향(올릴까/내릴까)·근사값용", en:"Asked for the exact optimal price? Set MR = MC (\"you will never be wrong\") · elasticity only gives direction or an approximation", cn:"问最优价格就用 MR=MC(\"永远不会错\")· 弹性只判断方向或近似" },
        { kr:"시그니처: 문제에 수요곡선이 2개 = 가격차별 문제 예고 (차별 가능한가부터 판단)", en:"Signature: two demand curves in a problem = a price-discrimination question is coming (first ask: can they discriminate?)", cn:"信号: 题里有两条需求曲线 = 价格歧视题(先判断能否歧视)" },
        { kr:"차별 불가 시: 수요를 반드시 수량형으로 합산(가격형 금지) + 킹크 포인트 확인 — Q나 P가 음수면 구간을 잘못 고른 것", en:"No discrimination possible: add demands in quantity form (never price form) + check the kink point — a negative Q or P means you picked the wrong segment", cn:"不能歧视时: 需求务必按数量形式相加(禁止价格形式)+ 检查拐点 — Q或P为负说明选错区间" },
        { kr:"부분점수 후함 — 케이스 나열 + 근거만 써도 ≈90%. 얼지 말고 경우의 수를 적기", en:"Partial credit is generous — writing the options + your reasoning ≈ 90% of the points. Don't freeze; list the cases", cn:"部分分很慷慨 — 列出情形+理由 ≈ 90% 分。别卡住,把情况写下来" },
        { new:true, kr:"RS4 = 7/9(목) 7 PM — 워크시트 먼저 풀고 참석 · 번들링(L9)은 기말 예상 · RS 일정: …6/24·7/9(목)·8/5(기말용)", en:"RS4 = Thu Jul 9, 7 PM — do the worksheet first · bundling (L9) likely a final topic · RS schedule: …6/24 · 7/9 (Thu) · 8/5 (for the final)", cn:"RS4 = 7/9(周四)7 PM — 先做练习题 · 捆绑(L9)预计期末 · 复习课: …6/24·7/9(周四)·8/5(期末用)" },
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
      headline:{ kr:"페이퍼 7/27 (16%) — 새 자료·팁 도착", en:"Paper Jul 27 (16%) — new materials & tips are in", cn:"论文 7/27 (16%) — 新资料与提示已到" },
      points:[
        { new:true, kr:"페이퍼 팁(수업에서 직접): ~1,000단어 · 이론 4개를 층층이 녹여서(나열·미인대회 X) · \"케이스는 나와 내 직무\" · 길게 쓰고 줄이기", en:"Paper tips (straight from class): ~1,000 words · weave in 4 theories in layers (not a list / beauty contest) · \"the case is you and your job\" · draft long then cut", cn:"论文提示(课上原话): ~1,000字 · 4个理论层层融入(非罗列/选美)· \"案例就是你和你的工作\" · 先写长再精简" },
        { new:true, kr:"⏱ Janice Fisher 라이팅 코치 = 선착순 (중복 이용 허용) — 피드백 받고 싶으면 일찍 예약", en:"⏱ Janice Fisher writing-coach slots = first-come, first-served (double-dipping allowed) — book early if you want feedback", cn:"⏱ Janice Fisher 写作辅导 = 先到先得(允许重复使用)— 想要反馈就尽早预约" },
        { new:true, kr:"🗣 MacDuffie가 7/17–18 수업에 녹일 '내 조직의 성과평가·창업 청사진' 사례를 수집 중 — 주말 전 이메일 또는 공지 답글. 내 맥락을 수업에 넣는 쉬운 방법", en:"🗣 MacDuffie is collecting performance-appraisal & founder-blueprint examples from your own org for the 7/17–18 classes — email or reply to the announcement before the weekend. Easy way to get your context into class", cn:"🗣 MacDuffie 征集你所在组织的绩效评估·创始蓝图案例(用于7/17–18课)— 周末前邮件或回复公告。把你的情境带进课堂的简单方式" },
        { new:true, kr:"슬라이드는 Canvas Files ▸ Slides (Study.Net 아님): Class 1–4(Motivating Performance·Designing Jobs·Building/Sustaining Culture·Recruiting & Selecting) + AI×HR 리딩(Nyberg)", en:"Slides are in Canvas Files ▸ Slides (not Study.Net): Class 1–4 (Motivating Performance · Designing Jobs · Building/Sustaining Culture · Recruiting & Selecting) + the AI×HR reading (Nyberg)", cn:"幻灯在 Canvas Files ▸ Slides(非 Study.Net): Class 1–4(Motivating Performance·Designing Jobs·Building/Sustaining Culture·Recruiting & Selecting)+ AI×HR 阅读(Nyberg)" },
        { kr:"팀 기말과의 연결: HSC 이슈가 전략·글로벌에 주는 영향이 팀 페이퍼 핵심 축 (상세는 MGMT 카드)", en:"Link to the team final: how HSC issues affect Strategy/Global is a core axis of the team paper (details in the MGMT card)", cn:"与团队期末的联系: HSC 议题对战略/全球的影响是团队论文核心(详见 MGMT 卡)" },
      ],
      traps:[],
    },
  ],

  /* ── 액션 체크리스트 (체크 상태는 브라우저에 저장됨) ──────────────────────*/
  actions:[
    { id:"a11", by:"2026-07-09", label:{ kr:"RS4 워크시트 미리 풀기 (7/9 목 세션 전)", en:"Do the RS4 worksheet before Thursday's session (Jul 9)", cn:"RS4 练习题提前做完(7/9 周四课前)" } },
    { id:"a7", by:"2026-07-11", label:{ kr:"BEPP 기출(2019–25, 7세트) 풀기 — 문제맵 활용, 2019부터 차례로", en:"Work BEPP past exams (2019–25, 7 sets) — use the problem map, start with 2019", cn:"做 BEPP 真题(2019–25,7套)— 用题图,从2019按序做" } },
    { id:"a13", by:"2026-07-16", label:{ kr:"BEPP 치트시트 1장 만들기 (8.5×11 양면) — Kruthika 팩에서 시작", en:"Build your BEPP cheat sheet (8.5×11, both sides) — start from Kruthika's pack", cn:"制作 BEPP 速查表1页(8.5×11双面)— 从 Kruthika 包起步" } },
    { id:"a14", by:"2026-07-16", label:{ kr:"MacDuffie에게 내 조직 성과평가·창업 청사진 사례 보내기 (주말 전)", en:"Send MacDuffie your org's performance-appraisal & founder-blueprint examples (before the weekend)", cn:"把本组织绩效评估·创始蓝图案例发给 MacDuffie(周末前)" } },
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

  /* ── Block Week (Fall 2026) ──────────────────────────────────────────────
     options: code / meta(캠퍼스·날짜) / title / desc. 사이클 바뀌면 통째로 교체. */
  blockWeek: {
    note: { kr:"3–4일 압축 선택과목(보통 0.5 CU, 졸업 19 CU에 포함) · ⚠️ 전공(concentration)엔 Graded만 인정(P/F 불인정) · PHL·SFO 혼합 수강 가능 · Course Match add/drop 7/6 주 오픈 — 기간 내 드롭=무기록, 마감 후=W, P/F 변경은 과목 Day1까지 · 상세·실라버스·Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 프리뷰: AI in Seattle·Luxury Branding in Paris·PM·Executive Leadership 등 (전체 캘린더: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")",
            en:"Electives compressed into 3–4 days (usually 0.5 CU, count toward the 19-CU graduation req) · ⚠️ only Graded courses count toward a major (not P/F) · mix PHL & SFO campuses · Course Match add/drop opens week of Jul 6 — drop within window = no record, after = W, P/F changes until Day 1 · details, syllabi & Booklist: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 peek: AI in Seattle, Luxury Branding in Paris, PM, Executive Leadership & more (full calendar: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")",
            cn:"3–4天压缩选修(通常 0.5 CU,计入毕业19 CU)· ⚠️ 专业只认 Graded(P/F 不算)· 可混选 PHL·SFO 校区 · Course Match 加退 7/6 当周开放 — 期内退=无记录,之后=W,P/F 可改到 Day1 · 详情·大纲·书单: Canvas ▸ Files ▸ Classes-Block Week ▸ Term 2 Fall 2026 · 👀 Spring '27 预告: AI in Seattle·Luxury Branding in Paris·PM·Executive Leadership 等(完整日历: Cohort Comm ▸ Files, \"Cal_51_All_BW_V14\")" },
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
        start:"2026-07-03", end:"2026-07-04",
        label: { kr:"7월 3일(금)–4일(토) · SFO", en:"Fri Jul 3 – Sat Jul 4 · SFO", cn:"7月3日(周五)–4日(周六) · SFO" },
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
      },
      {
        start:"2026-07-17", end:"2026-07-18",
        label: { kr:"7월 17일(금)–18일(토) · SFO", en:"Fri Jul 17 – Sat Jul 18 · SFO", cn:"7月17日(周五)–18日(周六) · SFO" },
        days: [
          {
            label: { kr:"금요일 7/17", en:"Friday 7/17", cn:"周五 7/17" },
            rows: [
              { time:"9:30–11:30", both:{ kr:"BEPP 중간고사 · 합반 · 5문제/120분 · closed book+치트시트 1장 · Room 추후 공지", en:"BEPP Midterm · both sections · 5 problems/120 min · closed book + 1-page cheat sheet · Room TBA", cn:"BEPP 期中 · 两班合并 · 5题/120分钟 · 闭卷+速查表1页 · 教室待公布" } },
              { time:"오후~", both:{ kr:"이후 일정·강의실 미게시 — 공식 주말 일정표 나오면 업데이트", en:"Rest of schedule & rooms TBA — will update when the official weekend schedule posts", cn:"其余日程与教室待公布 — 官方周末课表发布后更新" } },
            ],
          },
        ],
      },
    ],
    notes: [
      { kr:"⚠️ 섹션 1·2는 보통 BEPP/MGMT 순서가 반대 — 일정표 나오면 본인 섹션 확인", en:"⚠️ Sections 1 & 2 usually run BEPP/MGMT in opposite order — check your section when the schedule posts", cn:"⚠️ 第1/2班 BEPP/MGMT 顺序通常相反 — 课表发布后确认自己的班" },
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
