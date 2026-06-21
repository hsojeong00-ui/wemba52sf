# WEMBA 52 생존 대시보드

생존노트 데이터를 기반으로 한 웹 대시보드입니다.

- `index.html` — 화면(앱). **건드릴 필요 없음.**
- `data.js` — 데이터. **이 파일만 수정**하면 됩니다.

---

## 처음 한 번: GitHub Pages에 올리기 (무료, 고정 URL)

1. **github.com 가입/로그인** → 우상단 **+** → **New repository**
2. Repository name 에 `wemba52` 입력 → **Public** → **Create repository**
3. **uploading an existing file** 클릭 → `index.html`, `data.js`, `README.md` 드래그&드롭 → **Commit changes**
4. 상단 **Settings** → 왼쪽 **Pages** → Source: **Deploy from a branch** / Branch: **main** / **/(root)** → **Save**
5. 1~2분 뒤 주소 생성: **`https://<내아이디>.github.io/wemba52/`** ← 이걸 동기들에게 공유

---

## 매주 발행 (운영 방식 A — Claude가 data.js 업데이트)

1. 새 주차 내용(노트 초안이든 "이거 추가/수정"이든)을 **Claude에게 전달**
   → Claude가 `data.js` 를 갱신해 줌
2. Sally는 GitHub에서 갱신된 `data.js` 를 **Commit** (또는 Claude가 만든 파일을 업로드)
3. 약 1분 뒤 사이트 자동 반영

> 직접 고치고 싶을 때를 위한 형식:
> - `meta.weekLabel`, `meta.asOf` → 이번 주로 변경
> - `deadlines[]` → 새 일정 추가. 날짜는 `"2026-07-09T19:00"`(시간 있음) 또는 `"2026-07-09"`(종일).
>   `type`: `registration`/`exam`/`paper`/`quiz`/`session`/`milestone`, `hard:true` 면 빨간 "필수" 강조.
> - 지난 일정은 지워도 되고 둬도 자동으로 "지남" 처리됩니다.
> - 모든 시간은 **미 태평양시(PT)** 기준으로 자동 카운트다운.
> - 문구는 `{ kr, en, cn }` 세 칸. 중국어를 모르면 cn 칸을 비워도 됩니다(→ 한국어로 대체).

---

## 댓글 기능 켜기 (Enable comments) — Cusdis, 처음 한 번

동기들이 **로그인 없이 이름+내용**으로 정정·제안 댓글을 남길 수 있어요. 무료.

1. [cusdis.com](https://cusdis.com) 가입 (이메일 또는 GitHub)
2. 대시보드에서 **Add new website** → 이름 `WEMBA 52` 입력 → 생성
3. 생성된 사이트의 **App ID** 복사 (embed 코드 안 `data-app-id` 값)
4. GitHub에서 `data.js` 열기 → 맨 위
   `const CUSDIS_APP_ID = "";` → `const CUSDIS_APP_ID = "복사한값";` → **Commit changes**
5. 끝! 사이트 맨 아래 **"피드백 · 댓글"** 영역에 댓글창이 나타납니다.

> **관리(승인/삭제)**: Cusdis는 기본적으로 새 댓글이 *승인 대기* 상태예요.
> cusdis.com 대시보드(또는 이메일 알림)에서 **Approve** 하면 공개됩니다.
> 승인 없이 바로 공개하려면 사이트 설정에서 *Approve new comment automatically* 를 켜세요.
> 설정 전(App ID 가 비어 있을 때)에는 댓글 영역에 안내 문구만 표시됩니다.

---

## 기능
- 🧭 **상단 고정 바로가기 바** — 섹션으로 한 번에 이동 (현재 위치 자동 강조)
- 🔴 가장 임박한 마감 **실시간 D-day 카운트다운** (페이지 열 때마다 오늘 기준 재계산)
- 📅 다가오는 일정 자동 정렬 (**월별 구분**, 긴급도 색상, 지난 일정 자동 흐림)
- 🗓️ **다음 수업 주말 일정표** (섹션 1/2 시간표 + 호텔·이벤트 안내)
- 🍽️ **디너 & 소셜** — 외부 디너 플래너(wemba52sfsocial)의 **디너 섹션만** 임베드(`#dinners`로 자동 스크롤) + 전체 사이트 바로가기 (data.js `social`에서 `url`/`embedUrl`/`embed` 설정)
- 📚 과목별 카드 (시험·과제·함정 정리)
- ✅ 액션 체크리스트 (체크 상태는 각자 브라우저에 저장)
- 🗺️ Canvas 자료 위치 맵
- 💬 **피드백·댓글** (Cusdis — 로그인 없이 이름+내용, Sally가 승인/삭제 관리)
- 🌐 **한국어 / English / 中文** 언어 토글 (우상단)
- ☀️/🌙 **라이트 / 다크 테마** 토글 (우상단, 기본은 시스템 설정 따름)

미리 보고 싶으면 `index.html`을 더블클릭해서 브라우저로 열면 됩니다.
