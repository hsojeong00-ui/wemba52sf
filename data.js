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
    lastUpdated: "2026-06-22",   // ← 업데이트할 때마다 이 날짜만 바꾸세요 (YYYY-MM-DD)
    author:   "Sally",
    tzLabel:  "PT",
  },

  /* ── 마감 / 일정 ──────────────────────────────────────────────────────────
     type: registration | exam | paper | quiz | session | milestone
     hard: true 이면 "놓치면 아픈" 빨간 강조
  ----------------------------------------------------------------------------*/
  deadlines: [
    {
      date:"2026-06-23T18:00", type:"session", course:"BEPP",
      title:{ kr:"Pras MGEC 도우미 세션", en:"Pras MGEC help session", cn:"Pras MGEC 辅导课" },
      detail:{ kr:"~6–8 PM PT · 치트시트 + 기출 연습", en:"~6–8 PM PT · cheat sheet + past-exam drills", cn:"~下午6–8点 PT · 速查表 + 历年真题练习" },
    },
    {
      date:"2026-06-24T09:00", type:"registration", course:"Block Week", hard:true,
      title:{ kr:"여름 Block Week 수강신청 마감", en:"Summer Block Week registration", cn:"暑期 Block Week 选课截止" },
      detail:{ kr:"9 AM PT / 12 PM ET · 코스등록 포털 · 8월 SFO 과목 둘 중 하나 선택", en:"9 AM PT / 12 PM ET · registration portal · pick one of two Aug SFO courses", cn:"上午9点 PT / 中午12点 ET · 选课门户 · 8月 SFO 两门课二选一" },
    },
    {
      date:"2026-06-24T19:00", type:"session", course:"BEPP",
      title:{ kr:"BEPP Review Session 3 (Inkoo)", en:"BEPP Review Session 3 (Inkoo)", cn:"BEPP 复习课 3 (Inkoo)" },
      detail:{ kr:"7:00–8:30 PM PT · RS3 워크시트 먼저 풀고 가기", en:"7:00–8:30 PM PT · solve the RS3 worksheet first", cn:"晚7:00–8:30 PT · 先做完 RS3 练习题再来" },
    },
    {
      date:"2026-06-29T23:59", type:"paper", course:"MGMT", hard:true,
      title:{ kr:"MGMT Strategy 페이퍼 마감", en:"MGMT Strategy paper due", cn:"MGMT 战略论文截止" },
      detail:{ kr:"11:59 PM PT · 개인 ≤1,000단어 · 본인 회사 전략 이니셔티브 1개", en:"11:59 PM PT · individual ≤1,000 words · one initiative at your firm", cn:"晚11:59 PT · 个人 ≤1,000词 · 分析本公司一项战略举措" },
    },
    {
      date:"2026-06-29T19:00", type:"session", course:"ACCT",
      title:{ kr:"ACCT 중간 리뷰 세션 (Lambert)", en:"ACCT midterm review (Lambert)", cn:"ACCT 期中复习课 (Lambert)" },
      detail:{ kr:"월 저녁 · Zoom · 옛 중간고사 풀이 · 정확한 시간 추후 공지", en:"Mon eve · Zoom · works through an old midterm · exact time TBA", cn:"周一晚 · Zoom · 讲解往年期中卷 · 具体时间待定" },
    },
    {
      date:"2026-07-03T09:30", type:"exam", course:"ACCT", hard:true,
      title:{ kr:"ACCT 중간고사", en:"ACCT midterm", cn:"ACCT 期中考试" },
      detail:{ kr:"9:30–11:30 AM · Room 660 · 합반 · 범위=매출채권까지 · 오픈북(ChatGPT 금지)", en:"9:30–11:30 AM · Room 660 · both sections · scope through A/R · open book (no ChatGPT)", cn:"上午9:30–11:30 · 660室 · 两班合并 · 范围=至应收账款 · 开卷(禁用ChatGPT)" },
    },
    {
      date:"2026-07-03", type:"milestone", course:"HSC",
      title:{ kr:"HSC 모듈 시작 (사전과제)", en:"HSC module starts (pre-work)", cn:"HSC 模块开始 (课前作业)" },
      detail:{ kr:"Job Diagnostic Survey + MPS 점수 수업 전 작성 · Netflix 덱 훑기", en:"Complete Job Diagnostic Survey + MPS score before class · skim Netflix deck", cn:"课前完成 Job Diagnostic Survey + MPS 分数 · 浏览 Netflix 讲义" },
    },
    {
      date:"2026-07-09", type:"session", course:"BEPP",
      title:{ kr:"BEPP Review Session 4 (Inkoo)", en:"BEPP Review Session 4 (Inkoo)", cn:"BEPP 复习课 4 (Inkoo)" },
      detail:{ kr:"", en:"", cn:"" },
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
      headline:{ kr:"Strategy 페이퍼 6/29 마감", en:"Strategy paper due Jun 29", cn:"战略论文 6/29 截止" },
      points:[
        { kr:"개인 ≤1,000단어, 더블스페이스 · 본인 회사의 전략 이니셔티브 1개 분석", en:"Individual ≤1,000 words, double-spaced · analyze one strategic initiative at your firm", cn:"个人 ≤1,000词, 双倍行距 · 分析本公司一项战略举措" },
        { kr:"산업분석은 6 forces(5+보완재) 전부 · WTP/비용은 개념 논증이면 충분", en:"Industry analysis must cover all 6 forces (5+complementors) · WTP/cost can be conceptual", cn:"行业分析须涵盖全部6力(5力+互补者) · WTP/成本用概念论证即可" },
        { kr:"Canvas 신규: 'toolkit'(Strategy Omni) 핸드아웃 + Disney/TJ/Philips 슬라이드 + Philips 계산 문서", en:"New on Canvas: 'toolkit' (Strategy Omni) handout + Disney/TJ/Philips slides + Philips calculations", cn:"Canvas 新增: 'toolkit'(Strategy Omni) 讲义 + Disney/TJ/Philips 幻灯片 + Philips 计算文档" },
        { kr:"Janice Fisher(글쓰기 코치) 무료 첨삭 — Files 메모에서 슬롯 확인", en:"Janice Fisher (writing coach) free reviews — check her memo in Files for a slot", cn:"Janice Fisher(写作教练)免费批改 — 在 Files 备忘中查看名额" },
      ],
      traps:[
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
        { kr:"Smetters: ~7/6(2주 전)부터 과거 시험 풀기 시작 · 슬라이드 재독보다 문제 풀이가 본체", en:"Smetters: start past midterms ~Jul 6 (2 wks out) · problems > re-reading slides", cn:"Smetters: 约从7/6(考前2周)开始做真题 · 做题比重读幻灯片更重要" },
        { kr:"가격차별→2부요금제→번들링 마무리 (동질 회원비 $18 / 이질 P*=$1.5, F*≈$1.13)", en:"Finished price-discrim → two-part tariff → bundling (homog. fee $18 / heterog. P*=$1.5, F*≈$1.13)", cn:"价格歧视→两部定价→捆绑销售已讲完(同质会员费$18 / 异质 P*=$1.5, F*≈$1.13)" },
        { kr:"Pras 도우미 세션(6/23) + RS3(6/24)·RS4(7/9)", en:"Pras help session (Jun 23) + RS3 (Jun 24)·RS4 (Jul 9)", cn:"Pras 辅导课(6/23) + RS3(6/24)·RS4(7/9)" },
      ],
      traps:[
        { kr:"⚠️ Inkoo는 새 공지 대신 기존 공지를 수정 (메일 안 옴) — 공지 페이지 재방문", en:"⚠️ Inkoo edits the existing announcement silently (no email) — re-visit the page", cn:"⚠️ Inkoo 会直接改旧公告而非发新公告(无邮件)— 请重访公告页" },
      ],
    },
    {
      code:"HSC", color:"#9c36b5",
      name:{ kr:"인적·사회적 자본 (MacDuffie)", en:"Human & Social Capital (MacDuffie)", cn:"人力与社会资本 (MacDuffie)" },
      headline:{ kr:"7/3 시작 — 안 당하려면 미리", en:"Starts Jul 3 — don't get ambushed", cn:"7/3 开始 — 提前准备,别措手不及" },
      points:[
        { kr:"MGMT 교수 교체(MacDuffie) · 7/3 사전과제: Job Diagnostic Survey + MPS 점수 수업 전 계산", en:"Professor switches (MacDuffie) · Jul 3 pre-work: Job Diagnostic Survey + MPS score before class", cn:"MGMT 换教授(MacDuffie) · 7/3 课前作业: 课前算好 Job Diagnostic Survey + MPS 分数" },
        { kr:"Netflix Freedom & Responsibility 덱(Study.Net) 모듈 전 훑기", en:"Skim the Netflix Freedom & Responsibility deck (Study.Net) before the module", cn:"模块前浏览 Netflix Freedom & Responsibility 讲义(Study.Net)" },
        { kr:"Study.Net 코스팩 일찍 받았으면 다시 받기 (HSC 리딩 나중에 추가됨)", en:"Re-download the Study.Net coursepack if you got it early (HSC readings added later)", cn:"若早前已下载 Study.Net 课程包请重新下载(HSC 阅读材料后来才加)" },
        { kr:"HSC 페이퍼 7/27 · 팀 기말 8/24 · 팀 TA 체크인(필수) 7/24–8/5", en:"HSC paper Jul 27 · final team project Aug 24 · mandatory TA check-in Jul 24–Aug 5", cn:"HSC 论文 7/27 · 团队期末 8/24 · 团队 TA 签到(必须) 7/24–8/5" },
      ],
      traps:[],
    },
  ],

  /* ── Block Week 선택 ─────────────────────────────────────────────────────*/
  blockWeek:{
    due:"2026-06-24T09:00",
    note:{ kr:"둘 다 Pass/Fail · 교재 없음 · 추가 등록금 없음(22 CU 내). 8월 SFO(8/3–6). 관심으로 고르면 돼요.",
           en:"Both Pass/Fail · no textbooks · no extra tuition (within 22 CU). Aug SFO (Aug 3–6). Pick by interest.",
           cn:"两门都是 Pass/Fail · 无教材 · 无额外学费(22 CU 内)。8月 SFO(8/3–6)。按兴趣选即可。" },
    options:[
      {
        code:"LGST 8090", prof:"Rob DiGisi",
        title:{ kr:"Sport Business Management", en:"Sport Business Management", cn:"Sport Business Management(体育商业管理)" },
        desc:{ kr:"스포츠 산업 전략, 스트리밍·프랜차이즈 경제, 스폰서십. Oracle Park 투어 + 자이언츠 CTO/CRO 면담으로 마무리. 청강 가능.",
               en:"Sports industry strategy, streaming/franchise economics, sponsorship. Ends with an Oracle Park tour + Giants CTO/CRO visit. Audit allowed.",
               cn:"体育产业战略、流媒体与特许经营经济、赞助。以 Oracle Park 参观 + 巨人队 CTO/CRO 会面收尾。可旁听。" },
      },
      {
        code:"MKTG 8530", prof:"Americus Reed",
        title:{ kr:"Sales 3.0 & Future of Revenue Growth", en:"Sales 3.0 & Future of Revenue Growth", cn:"Sales 3.0 & Future of Revenue Growth(销售3.0与营收增长未来)" },
        desc:{ kr:"심리학 + AI + 고객 영향력, 7개 셀링 프레임워크. 기말시험 없음(참여 + 성찰과제).",
               en:"Psychology + AI + customer influence, 7 selling frameworks. No final exam (participation + reflections).",
               cn:"心理学 + AI + 客户影响力,7个销售框架。无期末考(参与 + 反思作业)。" },
      },
    ],
  },

  /* ── 액션 체크리스트 (체크 상태는 브라우저에 저장됨) ──────────────────────*/
  actions:[
    { id:"a1", by:"2026-06-24", label:{ kr:"Block Week 과목 결정 후 등록 (수 9 AM PT 전)", en:"Decide & register Block Week course (before Wed 9 AM PT)", cn:"确定并完成 Block Week 选课(周三上午9点 PT 前)" } },
    { id:"a2", by:"2026-06-24", label:{ kr:"RS3 워크시트 풀고 BEPP 리뷰 세션 참석", en:"Solve RS3 worksheet & attend BEPP review session", cn:"做完 RS3 练习题并参加 BEPP 复习课" } },
    { id:"a3", by:"2026-06-29", label:{ kr:"Strategy 페이퍼 작성 (필요시 Fisher 첨삭 슬롯 예약)", en:"Write Strategy paper (book Fisher review if wanted)", cn:"撰写战略论文(需要时预约 Fisher 批改)" } },
    { id:"a4", by:"2026-06-29", label:{ kr:"MGMT 6130 강의평가 작성 (upenn.edu/eval)", en:"Submit MGMT 6130 course eval (upenn.edu/eval)", cn:"填写 MGMT 6130 课程评价(upenn.edu/eval)" } },
    { id:"a5", by:"2026-07-03", label:{ kr:"ACCT 옛 중간고사 시간재고 풀이 + LIFO/FIFO 슬라이드 출력", en:"Time-drill old ACCT midterms + print LIFO/FIFO slide", cn:"限时做 ACCT 往年期中卷 + 打印 LIFO/FIFO 幻灯片" } },
    { id:"a6", by:"2026-07-03", label:{ kr:"HSC 사전과제: Job Diagnostic Survey + MPS 점수", en:"HSC pre-work: Job Diagnostic Survey + MPS score", cn:"HSC 课前作业: Job Diagnostic Survey + MPS 分数" } },
    { id:"a7", by:"2026-07-06", label:{ kr:"BEPP 과거 중간고사(2021–25) 풀기 시작", en:"Start BEPP past midterms (2021–25)", cn:"开始做 BEPP 往年期中卷(2021–25)" } },
    { id:"a8", by:"2026-08-05", label:{ kr:"팀 TA 체크인 일정 잡기 (7/24–8/5)", en:"Schedule team TA check-in (Jul 24–Aug 5)", cn:"预约团队 TA 签到(7/24–8/5)" } },
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
