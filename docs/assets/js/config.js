/**
 * ═════════════════════════════════════════════════════════════
 * 설정 파일 (config.js)
 * ═════════════════════════════════════════════════════════════
 *
 * ⚠️ GAS_URL 교체 시 이 파일만 수정하면 됨.
 *    다른 .js 파일은 건드릴 필요 없음.
 * ═════════════════════════════════════════════════════════════
 */

const CONFIG = {
  // ⬇️ GAS Web App URL (v2 재배포)
  GAS_URL: 'https://script.google.com/macros/s/AKfycbw4ToimVLx0Q_qTwaJyGw0Z0-NBcbl89NrYb3w_aUI_eknj9iJ3CsRMH_fM5kQ7SQcluQ/exec',

  // ─── 동작 옵션 ───────────────────────────────────────────
  DEFAULT_TAB: 'couple',
  AUTO_REFRESH_SEC: 0,
  CHART_HISTORY_MONTHS: 18,
  CURRENCY: '₩',
  LOCALE: 'ko-KR',
  TZ: 'Asia/Seoul'
};
