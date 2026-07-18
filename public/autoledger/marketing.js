(function () {
  const locales = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  const copy = {
    en: {
      meta: { title: "AutoLedger — Capture less. Understand more.", description: "A local-first personal ledger for Apple devices, with screenshot recognition, voice capture, iCloud sync, reports, and hotel folio workflows." },
      nav: { capture: "Capture", hotels: "Hotels", privacyFirst: "Privacy", privacyPolicy: "Privacy Policy", support: "Support" },
      action: { appStore: "Download on the App Store", explore: "Explore the system" },
      home: { kicker: "AutoLedger 1.6 · Local-first automation", heroTitle: "Capture less. Understand more.", heroLead: "Turn screenshots, receipts, voice, Shortcuts, and hotel folios into records you can review—then understand the month without rebuilding it by hand.", heroNote: "No AutoLedger account required. Optional iCloud and cloud services stay under your control." },
      proof: { oneTitle: "Five languages", oneBody: "English, 简中, 繁中, 日本語, 한국어", twoTitle: "Local-first", twoBody: "Recognition and ledger work begin on device", threeTitle: "Apple ecosystem", threeBody: "Capture, review, and glance across devices", fourTitle: "Review before save", fourBody: "Automation stays inspectable and reversible" },
      capture: { kicker: "Capture", title: "A record starts wherever the expense appears.", lead: "Import a payment screenshot, photograph a receipt, speak one sentence, share from another app, or run a Shortcut. AutoLedger extracts a draft and keeps you in control of the final record.", ocrTitle: "Screenshots and receipts", ocrBody: "On-device OCR and parsing recognize amount, merchant, time, and useful context from the material you choose.", voiceTitle: "Voice and natural language", voiceBody: "Say a simple expense, confirm the parsed result, and keep moving. Local intelligence is used when available.", automationTitle: "Shortcuts and sharing", automationBody: "Use the Action Button, Shortcuts, App Intents, clipboard, camera, or Share Extension to remove repeated steps." },
      system: { kicker: "Organize and understand", title: "More than an inbox for expenses.", lead: "Multi-ledger organization, merchant aliases, categories, subscriptions, advanced search, cleanup tools, monthly reports, and export turn captured records into a usable financial memory.", ledgerTitle: "Multiple ledgers", ledgerBody: "Separate personal, travel, work, or family records while keeping capture fast.", reportTitle: "Reports that explain", reportBody: "See categories, trends, frequent merchants, subscriptions, and month-to-month changes.", cleanTitle: "Clean up in batches", cleanBody: "Find duplicates, normalize merchants, apply confirmed rules, and review cloud-assisted suggestions before using them." },
      hotel: { kicker: "Hotel folios", title: "Keep the stay, not the paperwork.", lead: "Import folio PDFs manually, scan a mailbox locally, or use a dedicated AutoLedger Pro cloud inbox. Candidates stay separate until you review and confirm them.", one: "PDF and email folio workflows", two: "Stay totals and ledger records stay linked", three: "Cloud candidates never write directly into your ledger" },
      eco: { kicker: "Apple ecosystem", title: "Start on one screen. Continue on the right one.", lead: "Capture and manage on iPhone, iPad, and Mac. Add quickly from Apple Watch. Use read-only dashboards on Apple TV and Apple Vision Pro when a glance is enough.", captureTitle: "Fast capture", captureBody: "Shortcuts, voice, camera, screenshots, sharing, and wrist-first quick add.", organizeTitle: "Room to organize", organizeBody: "Review ledgers, reports, cleanup, settings, and hotel records with more space.", syncTitle: "Optional continuity", syncBody: "When enabled, iCloud keeps supported records in step across your Apple devices." },
      privacy: { kicker: "Privacy by boundary", title: "Local-first, not cloud-blind.", lead: "Core recognition and ledger work begin on your device. Networked features are optional, purpose-specific, and documented instead of hidden behind an absolute promise.", localTitle: "On device", localBody: "OCR, parsing, classification, deduplication, reports, and ledger editing are designed around local processing.", cloudTitle: "When you opt in", cloudBody: "iCloud sync, the Pro folio inbox, Common API services, entitlement checks, and anonymous diagnostics use their specific cloud paths.", controlTitle: "Your control", controlBody: "Review drafts before saving, manage permissions, turn off optional services, export records, or delete local data." },
      cta: { title: "Spend your attention on the month, not every entry.", lead: "AutoLedger is free to start. AutoLedger Pro adds advanced automation while your saved records remain yours." }
    },
    "zh-Hans": {
      meta: { title: "AutoLedger — 少记一点，看懂更多", description: "面向 Apple 设备的本地优先个人账本，支持截图识别、语音记账、iCloud 同步、月报与酒店水单工作流。" },
      nav: { capture: "记录", hotels: "酒店水单", privacyFirst: "隐私", privacyPolicy: "隐私政策", support: "技术支持" },
      action: { appStore: "前往 App Store", explore: "了解完整能力" },
      home: { kicker: "AutoLedger 1.6 · 本地优先的自动化账本", heroTitle: "少记一点，看懂更多。", heroLead: "把截图、小票、语音、快捷指令和酒店水单变成可确认的记录，再在月底直接看懂消费，而不是重新整理一遍。", heroNote: "无需注册 AutoLedger 账号；iCloud 与云端服务均为可选能力，并由你控制。" },
      proof: { oneTitle: "五种语言", oneBody: "English、简中、繁中、日本語、한국어", twoTitle: "本地优先", twoBody: "识别与账本处理从设备端开始", threeTitle: "Apple 全平台", threeBody: "跨设备记录、整理与查看", fourTitle: "保存前确认", fourBody: "自动化过程可检查、可回退" },
      capture: { kicker: "记录", title: "消费出现在哪里，记录就从哪里开始。", lead: "导入支付截图、拍摄小票、说一句话、从其他 App 分享，或运行快捷指令。AutoLedger 会先生成草稿，最终记录仍由你确认。", ocrTitle: "截图与小票", ocrBody: "设备端 OCR 与解析会从你主动选择的材料中识别金额、商户、时间和必要上下文。", voiceTitle: "语音与自然语言", voiceBody: "说出一笔消费，确认解析结果即可继续；设备支持时会使用本地智能能力。", automationTitle: "快捷指令与分享", automationBody: "通过操作按钮、快捷指令、App Intents、剪贴板、相机或分享扩展减少重复步骤。" },
      system: { kicker: "整理与理解", title: "不只是账单收件箱。", lead: "多账本、商户别名、分类、订阅、进阶搜索、数据清洗、月报与导出，把零散记录变成可用的消费记忆。", ledgerTitle: "多账本", ledgerBody: "分开管理个人、旅行、工作或家庭记录，同时保持快速记账。", reportTitle: "能解释的月报", reportBody: "查看分类、趋势、常用商户、订阅和月度变化。", cleanTitle: "批量清洗", cleanBody: "查找重复项、统一商户、应用已确认规则，并在使用前审核云端辅助建议。" },
      hotel: { kicker: "酒店水单", title: "留下旅程，不留一堆票据。", lead: "手动导入水单 PDF、在设备端扫描邮箱，或使用 AutoLedger Pro 专属云收件箱。候选记录与你的正式账本保持分离，直到你确认。", one: "支持 PDF 与邮件水单流程", two: "入住汇总与账本记录保持关联", three: "云端候选不会直接写入正式账本" },
      eco: { kicker: "Apple 生态", title: "从一个屏幕开始，在合适的设备继续。", lead: "在 iPhone、iPad 与 Mac 上记录和管理，在 Apple Watch 上快速新增；Apple TV 与 Apple Vision Pro 提供只读总览。", captureTitle: "快速记录", captureBody: "快捷指令、语音、相机、截图、分享与手表快速新增。", organizeTitle: "更大的整理空间", organizeBody: "在 iPad 与 Mac 上查看账本、月报、清洗、设置和酒店记录。", syncTitle: "可选的连续体验", syncBody: "启用后，iCloud 会在你的 Apple 设备间同步受支持的记录。" },
      privacy: { kicker: "明确的隐私边界", title: "本地优先，也如实说明云端。", lead: "核心识别与账本处理从设备端开始；联网能力保持可选、用途明确，并在文档中公开，而不是藏在绝对承诺后面。", localTitle: "设备端", localBody: "OCR、解析、分类、去重、月报和账本编辑围绕本地处理设计。", cloudTitle: "由你主动启用", cloudBody: "iCloud 同步、Pro 水单收件箱、Common API、权益校验和匿名诊断分别使用对应的云端路径。", controlTitle: "你的控制权", controlBody: "保存前审核草稿、管理权限、关闭可选服务、导出记录或删除本地数据。" },
      cta: { title: "把注意力留给整个月，而不是每一笔输入。", lead: "AutoLedger 可免费开始使用；AutoLedger Pro 提供进阶自动化，已经保存的记录始终由你掌握。" }
    },
    "zh-Hant": {
      meta: { title: "AutoLedger — 少記一點，看懂更多", description: "面向 Apple 裝置的本機優先個人帳本，支援截圖辨識、語音記帳、iCloud 同步、月報與酒店水單流程。" },
      nav: { capture: "記錄", hotels: "酒店水單", privacyFirst: "隱私", privacyPolicy: "隱私政策", support: "技術支援" },
      action: { appStore: "前往 App Store", explore: "了解完整功能" },
      home: { kicker: "AutoLedger 1.6 · 本機優先的自動化帳本", heroTitle: "少記一點，看懂更多。", heroLead: "把截圖、收據、語音、捷徑和酒店水單變成可確認的記錄，月底直接看懂消費，不必再重整一次。", heroNote: "無需註冊 AutoLedger 帳號；iCloud 與雲端服務均為可選功能，並由你控制。" },
      proof: { oneTitle: "五種語言", oneBody: "English、簡中、繁中、日本語、한국어", twoTitle: "本機優先", twoBody: "辨識與帳本處理從裝置端開始", threeTitle: "Apple 生態", threeBody: "跨裝置記錄、整理與查看", fourTitle: "儲存前確認", fourBody: "自動化過程可檢查、可回復" },
      capture: { kicker: "記錄", title: "消費出現在哪裡，記錄就從哪裡開始。", lead: "匯入付款截圖、拍攝收據、說一句話、從其他 App 分享，或執行捷徑。AutoLedger 先產生草稿，最終記錄仍由你確認。", ocrTitle: "截圖與收據", ocrBody: "裝置端 OCR 與解析會從你主動選擇的資料中辨識金額、商戶、時間與必要脈絡。", voiceTitle: "語音與自然語言", voiceBody: "說出一筆消費，確認解析結果即可繼續；裝置支援時會使用本機智慧功能。", automationTitle: "捷徑與分享", automationBody: "透過動作按鈕、捷徑、App Intents、剪貼簿、相機或分享延伸功能減少重複步驟。" },
      system: { kicker: "整理與理解", title: "不只是帳單收件匣。", lead: "多帳本、商戶別名、分類、訂閱、進階搜尋、資料清理、月報與匯出，把零散記錄變成可用的消費記憶。", ledgerTitle: "多帳本", ledgerBody: "分開管理個人、旅行、工作或家庭記錄，同時維持快速記帳。", reportTitle: "能解釋的月報", reportBody: "查看分類、趨勢、常用商戶、訂閱與每月變化。", cleanTitle: "批次清理", cleanBody: "找出重複項目、統一商戶、套用已確認規則，並在使用前審核雲端輔助建議。" },
      hotel: { kicker: "酒店水單", title: "留下旅程，不留一堆票據。", lead: "手動匯入水單 PDF、在裝置端掃描信箱，或使用 AutoLedger Pro 專屬雲端收件匣。候選記錄會與正式帳本分開，直到你確認。", one: "支援 PDF 與郵件水單流程", two: "住宿彙總與帳本記錄保持關聯", three: "雲端候選不會直接寫入正式帳本" },
      eco: { kicker: "Apple 生態", title: "從一個螢幕開始，在合適的裝置繼續。", lead: "在 iPhone、iPad 與 Mac 上記錄和管理，在 Apple Watch 上快速新增；Apple TV 與 Apple Vision Pro 提供唯讀總覽。", captureTitle: "快速記錄", captureBody: "捷徑、語音、相機、截圖、分享與手錶快速新增。", organizeTitle: "更大的整理空間", organizeBody: "在 iPad 與 Mac 上查看帳本、月報、清理、設定和酒店記錄。", syncTitle: "可選的連續體驗", syncBody: "啟用後，iCloud 會在你的 Apple 裝置間同步支援的記錄。" },
      privacy: { kicker: "明確的隱私邊界", title: "本機優先，也如實說明雲端。", lead: "核心辨識與帳本處理從裝置端開始；連網功能維持可選、用途明確，並在文件中公開。", localTitle: "裝置端", localBody: "OCR、解析、分類、去重、月報與帳本編輯圍繞本機處理設計。", cloudTitle: "由你主動啟用", cloudBody: "iCloud 同步、Pro 水單收件匣、Common API、權益驗證與匿名診斷分別使用對應的雲端路徑。", controlTitle: "你的控制權", controlBody: "儲存前審核草稿、管理權限、關閉可選服務、匯出記錄或刪除本機資料。" },
      cta: { title: "把注意力留給整個月，而不是每一筆輸入。", lead: "AutoLedger 可免費開始使用；AutoLedger Pro 提供進階自動化，已儲存的記錄始終由你掌握。" }
    },
    ja: {
      meta: { title: "AutoLedger — 入力を減らし、もっと理解する", description: "スクリーンショット認識、音声入力、iCloud 同期、月次レポート、ホテル明細に対応した Apple デバイス向けローカルファースト家計簿。" },
      nav: { capture: "記録", hotels: "ホテル明細", privacyFirst: "プライバシー", privacyPolicy: "プライバシーポリシー", support: "サポート" },
      action: { appStore: "App Store で入手", explore: "機能を見る" },
      home: { kicker: "AutoLedger 1.6 · ローカルファースト自動化", heroTitle: "入力を減らし、もっと理解する。", heroLead: "スクリーンショット、レシート、音声、ショートカット、ホテル明細を確認可能な記録へ。月末にもう一度整理し直す手間を減らします。", heroNote: "AutoLedger アカウントは不要。iCloud とクラウドサービスは任意で、利用者が管理できます。" },
      proof: { oneTitle: "5 言語", oneBody: "English、簡中、繁中、日本語、한국어", twoTitle: "ローカル優先", twoBody: "認識と台帳処理は端末から開始", threeTitle: "Apple エコシステム", threeBody: "デバイスをまたいで記録・整理・確認", fourTitle: "保存前に確認", fourBody: "自動化は確認でき、元に戻せます" },
      capture: { kicker: "記録", title: "支出が現れた場所から、記録を始める。", lead: "支払い画面を取り込み、レシートを撮影し、一言話し、他の App から共有するか、ショートカットを実行。AutoLedger は下書きを作り、最終確認はあなたに残します。", ocrTitle: "スクリーンショットとレシート", ocrBody: "端末内 OCR と解析が、選んだ資料から金額、店舗、時刻、必要な文脈を読み取ります。", voiceTitle: "音声と自然言語", voiceBody: "支出を話して解析結果を確認。対応端末ではローカルの知能機能を利用します。", automationTitle: "ショートカットと共有", automationBody: "アクションボタン、ショートカット、App Intents、クリップボード、カメラ、共有拡張で繰り返し操作を減らします。" },
      system: { kicker: "整理して理解する", title: "支出台帳は、単なる受信箱ではありません。", lead: "複数台帳、店舗別名、分類、サブスクリプション、高度な検索、データ整理、月次レポート、書き出しで、記録を使える消費履歴にします。", ledgerTitle: "複数台帳", ledgerBody: "個人、旅行、仕事、家族の記録を分けながら、すばやい入力を保ちます。", reportTitle: "理解できるレポート", reportBody: "分類、傾向、よく使う店舗、サブスクリプション、月ごとの変化を確認できます。", cleanTitle: "まとめて整理", cleanBody: "重複を探し、店舗名を統一し、確認済みルールを適用。クラウド補助の提案は利用前に確認します。" },
      hotel: { kicker: "ホテル明細", title: "旅の記録を残し、書類は減らす。", lead: "PDF を手動で取り込み、端末上でメールボックスを確認するか、AutoLedger Pro 専用クラウド受信箱を利用。候補は確認するまで正式な台帳と分離されます。", one: "PDF とメール明細のワークフロー", two: "滞在集計と台帳記録を関連付け", three: "クラウド候補は台帳へ直接保存されません" },
      eco: { kicker: "Apple エコシステム", title: "一つの画面で始め、最適な端末で続ける。", lead: "iPhone、iPad、Mac で記録と管理。Apple Watch からすばやく追加。Apple TV と Apple Vision Pro では読み取り専用ダッシュボードを利用できます。", captureTitle: "すばやく記録", captureBody: "ショートカット、音声、カメラ、スクリーンショット、共有、手首からの追加。", organizeTitle: "広い画面で整理", organizeBody: "iPad と Mac で台帳、レポート、クリーンアップ、設定、ホテル記録を確認。", syncTitle: "任意の連携", syncBody: "有効にすると、対応する記録を iCloud が Apple デバイス間で同期します。" },
      privacy: { kicker: "明確なプライバシー境界", title: "ローカル優先。クラウドも正直に。", lead: "主要な認識と台帳処理は端末から始まります。ネットワーク機能は任意で用途を限定し、絶対的な約束ではなく文書で公開します。", localTitle: "端末上", localBody: "OCR、解析、分類、重複排除、レポート、台帳編集はローカル処理を中心に設計されています。", cloudTitle: "選んだときだけ", cloudBody: "iCloud 同期、Pro 明細受信箱、Common API、権利確認、匿名診断はそれぞれ固有のクラウド経路を使います。", controlTitle: "あなたの管理", controlBody: "保存前の確認、権限管理、任意サービスの停止、書き出し、ローカルデータ削除が可能です。" },
      cta: { title: "一件ずつの入力より、一か月の理解へ。", lead: "AutoLedger は無料で始められます。Pro は高度な自動化を追加し、保存した記録は引き続きあなたのものです。" }
    },
    ko: {
      meta: { title: "AutoLedger — 기록은 줄이고, 이해는 더하고", description: "스크린샷 인식, 음성 기록, iCloud 동기화, 월간 리포트, 호텔 명세서 흐름을 제공하는 Apple 기기용 로컬 우선 가계부." },
      nav: { capture: "기록", hotels: "호텔 명세서", privacyFirst: "개인정보", privacyPolicy: "개인정보 처리방침", support: "지원" },
      action: { appStore: "App Store에서 받기", explore: "전체 기능 보기" },
      home: { kicker: "AutoLedger 1.6 · 로컬 우선 자동화", heroTitle: "기록은 줄이고, 이해는 더하고.", heroLead: "스크린샷, 영수증, 음성, 단축어, 호텔 명세서를 확인 가능한 기록으로 바꾸고, 월말에 다시 손으로 정리하는 일을 줄입니다.", heroNote: "AutoLedger 계정이 필요하지 않습니다. iCloud와 클라우드 서비스는 선택 사항이며 사용자가 관리합니다." },
      proof: { oneTitle: "5개 언어", oneBody: "English, 简中, 繁中, 日本語, 한국어", twoTitle: "로컬 우선", twoBody: "인식과 장부 처리는 기기에서 시작", threeTitle: "Apple 생태계", threeBody: "여러 기기에서 기록·정리·확인", fourTitle: "저장 전 확인", fourBody: "자동화 과정을 검토하고 되돌릴 수 있음" },
      capture: { kicker: "기록", title: "지출이 보이는 곳에서 기록이 시작됩니다.", lead: "결제 화면을 가져오고, 영수증을 촬영하고, 한 문장을 말하거나 다른 앱에서 공유하고 단축어를 실행하세요. AutoLedger가 초안을 만들고 최종 기록은 사용자가 확인합니다.", ocrTitle: "스크린샷과 영수증", ocrBody: "기기 내 OCR과 분석이 사용자가 선택한 자료에서 금액, 가맹점, 시간과 필요한 맥락을 인식합니다.", voiceTitle: "음성과 자연어", voiceBody: "지출을 말하고 분석 결과를 확인하세요. 지원되는 기기에서는 로컬 지능 기능을 사용합니다.", automationTitle: "단축어와 공유", automationBody: "액션 버튼, 단축어, App Intents, 클립보드, 카메라, 공유 확장으로 반복 단계를 줄입니다." },
      system: { kicker: "정리와 이해", title: "지출을 모으는 받은편지함 그 이상.", lead: "다중 장부, 가맹점 별칭, 분류, 구독, 고급 검색, 데이터 정리, 월간 리포트와 내보내기로 흩어진 기록을 쓸 수 있는 소비 기억으로 만듭니다.", ledgerTitle: "다중 장부", ledgerBody: "개인, 여행, 업무, 가족 기록을 분리하면서 빠른 기록 흐름을 유지합니다.", reportTitle: "이해할 수 있는 리포트", reportBody: "분류, 추세, 자주 찾는 가맹점, 구독, 월별 변화를 확인합니다.", cleanTitle: "일괄 정리", cleanBody: "중복을 찾고 가맹점 이름을 통일하고 확인된 규칙을 적용하며, 클라우드 보조 제안은 사용 전에 검토합니다." },
      hotel: { kicker: "호텔 명세서", title: "여행은 남기고, 서류는 줄이세요.", lead: "명세서 PDF를 직접 가져오거나 기기에서 메일함을 스캔하고, AutoLedger Pro 전용 클라우드 받은편지함을 사용할 수 있습니다. 후보는 확인 전까지 정식 장부와 분리됩니다.", one: "PDF 및 이메일 명세서 흐름", two: "숙박 합계와 장부 기록을 연결", three: "클라우드 후보는 장부에 바로 저장되지 않음" },
      eco: { kicker: "Apple 생태계", title: "한 화면에서 시작해 알맞은 기기에서 계속하세요.", lead: "iPhone, iPad, Mac에서 기록하고 관리하세요. Apple Watch에서 빠르게 추가하고, Apple TV와 Apple Vision Pro에서는 읽기 전용 대시보드를 확인할 수 있습니다.", captureTitle: "빠른 기록", captureBody: "단축어, 음성, 카메라, 스크린샷, 공유, 손목에서 빠른 추가.", organizeTitle: "넓게 정리", organizeBody: "iPad와 Mac에서 장부, 리포트, 정리, 설정, 호텔 기록을 확인합니다.", syncTitle: "선택 가능한 연속성", syncBody: "활성화하면 iCloud가 지원되는 기록을 Apple 기기 사이에 동기화합니다." },
      privacy: { kicker: "명확한 개인정보 경계", title: "로컬 우선, 클라우드도 투명하게.", lead: "핵심 인식과 장부 처리는 기기에서 시작합니다. 네트워크 기능은 선택 사항이며 목적을 제한하고 문서에 공개합니다.", localTitle: "기기에서", localBody: "OCR, 분석, 분류, 중복 제거, 리포트, 장부 편집은 로컬 처리를 중심으로 설계됩니다.", cloudTitle: "선택했을 때", cloudBody: "iCloud 동기화, Pro 명세서 받은편지함, Common API, 권한 확인, 익명 진단은 각각의 클라우드 경로를 사용합니다.", controlTitle: "사용자 제어", controlBody: "저장 전 초안 검토, 권한 관리, 선택 서비스 끄기, 기록 내보내기, 로컬 데이터 삭제가 가능합니다." },
      cta: { title: "한 건씩 입력하기보다 한 달을 이해하는 데 집중하세요.", lead: "AutoLedger는 무료로 시작할 수 있습니다. Pro는 고급 자동화를 추가하며 저장한 기록은 계속 사용자의 것입니다." }
    }
  };

  function pathValue(object, path) { return path.split(".").reduce((value, key) => value && value[key], object); }
  function detectLocale() {
    const requested = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("autoledger-locale");
    const raw = requested || saved || navigator.language || "en";
    if (locales.includes(raw)) return raw;
    if (raw.toLowerCase().startsWith("zh")) return raw.toLowerCase().includes("tw") || raw.toLowerCase().includes("hk") || raw.toLowerCase().includes("hant") ? "zh-Hant" : "zh-Hans";
    if (raw.toLowerCase().startsWith("ja")) return "ja";
    if (raw.toLowerCase().startsWith("ko")) return "ko";
    return "en";
  }
  function apply(locale) {
    const messages = copy[locale] || copy.en;
    document.documentElement.lang = locale;
    localStorage.setItem("autoledger-locale", locale);
    document.title = messages.meta.title;
    document.querySelector('meta[name="description"]').content = messages.meta.description;
    document.querySelector('meta[property="og:title"]').content = messages.meta.title;
    document.querySelector('meta[property="og:description"]').content = messages.meta.description;
    document.querySelectorAll("[data-i18n]").forEach((node) => { const value = pathValue(messages, node.dataset.i18n); if (typeof value === "string") node.textContent = value; });
    document.querySelectorAll("[data-localized-image]").forEach((image) => { image.src = `/assets/screens/${locale}-${image.dataset.localizedImage}.webp`; });
    document.querySelectorAll("[data-locale-select]").forEach((select) => { select.value = locale; select.setAttribute("aria-label", `Language: ${locale}`); });
    const url = new URL(location.href); url.searchParams.set("lang", locale); history.replaceState({}, "", url);
  }
  document.addEventListener("change", (event) => { if (event.target.matches("[data-locale-select]")) apply(event.target.value); });
  apply(detectLocale());
})();
