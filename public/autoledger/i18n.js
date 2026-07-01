(function () {
  const locales = ["zh-Hans", "zh-Hant", "en", "ja"];

  const localeNames = {
    "zh-Hans": "简中",
    "zh-Hant": "繁中",
    en: "EN",
    ja: "日本語",
  };

  const messages = {
    "zh-Hans": {
      meta: {
        homeTitle: "AutoLedger - 一键记账",
        homeDescription: "AutoLedger 是一款基于截图与快捷指令的一键记账工具。按一下，就记好。",
        supportTitle: "AutoLedger 技术支持",
        supportDescription: "AutoLedger 技术支持页面，包含问题反馈、常见问题和联系信息。",
        privacyTitle: "AutoLedger 隐私政策",
        privacyDescription: "AutoLedger 隐私政策",
      },
      nav: {
        home: "首页",
        privacy: "隐私政策",
        support: "技术支持",
        contact: "联系开发者",
      },
      action: {
        privacy: "查看隐私政策",
        support: "技术支持",
        appStore: "App Store",
        goAppStore: "前往 App Store",
        testFlight: "申请新版测试资格",
      },
      home: {
        badge: "⚡ 一键记账 · 截图即入账",
        heroTitle: "长按一下，<br>就记好。",
        heroDesc:
          "AutoLedger 是一款基于截图、快捷指令和本地识别的一键记账工具。你只需要长按操作按钮，应用就会自动识别金额与商户并生成账单。",
        heroNote: "数据默认仅保存在本地设备中。",
        whyEyebrow: "为什么做它",
        whyTitle: "不是更方便地记账，<br>而是尽量不用记账。",
        whyBody:
          "很多人不是不想记账，而是每次都嫌麻烦。AutoLedger 的目标不是让你多点几步去记一笔账，而是把“记账”压缩成一个非常自然的动作。",
        quickTitle: "一键记账",
        quickBody: "配合快捷指令和操作按钮，按一下即可启动记账链路，减少打开 App、选图、输入金额等重复操作。",
        ocrTitle: "截图识别",
        ocrBody: "支持从支付截图、照片或分享内容中提取账单信息，自动识别金额、商户与时间，并生成记录。",
        localTitle: "本地优先",
        localBody: "账单数据默认存储在本地设备中。当前版本以本地处理为主，尽量减少不必要的数据外传。",
        flowEyebrow: "使用流程",
        flowTitle: "只保留最短路径",
        step1Title: "完成支付",
        step1Body: "用户按平时习惯完成支付，不需要额外打开记账工具。",
        step2Title: "长按操作按钮或运行快捷指令",
        step2Body: "触发一键记账入口，系统将截图传入识别流程。",
        step3Title: "自动识别并入账",
        step3Body: "AutoLedger 识别金额、商户、时间和分类，并给出“已记好”的结果反馈。",
        philosophyEyebrow: "产品理念",
        quote: "让“记账”这件事，<br>尽量消失。",
        philosophyBody:
          "我们不追求复杂的财务系统，也不试图一次做成大而全的记账平台。AutoLedger 只解决一个问题：",
        philosophyStrong: "如何让你几乎不费力地留下每一笔消费记录。",
        capabilitiesEyebrow: "当前版本能力",
        capability1: "快捷指令一键记账",
        capability2: "支付截图导入与识别",
        capability3: "拍照识别与剪贴板导入",
        capability4: "账本列表与基础月报",
        capability5: "调试页查看 OCR 原文和解析结果",
        audienceEyebrow: "适合谁",
        audience1: "想记账，但不想手动输入的人",
        audience2: "经常使用 iPhone 快捷指令和操作按钮的人",
        audience3: "希望快速记录小额支出和日常消费的人",
        audience4: "想先把消费记下来，后面再慢慢整理的人",
        ctaEyebrow: "现在开始",
        ctaBody:
          "如果你正在寻找一种更轻、更快、更接近无感的记账方式，欢迎通过邮件联系开发者获取测试资格或了解产品进展。",
      },
      support: {
        eyebrow: "AutoLedger 技术支持",
        title: "问题反馈、常见说明与联系入口",
        lead:
          "如果你在使用 AutoLedger 时遇到识别错误、模型下载失败、快捷指令异常、导入问题或其他体验问题，可以先查看下方说明，也可以直接联系我们。",
        contactTitle: "联系邮箱",
        contactBody: "如需反馈问题、提交建议或说明审核测试情况，请通过邮箱联系：",
        faqTitle: "常见问题",
        faq1: "<strong>识别结果不准确怎么办？</strong><br>你可以在 App 内查看并修改生成后的记录，后续也可通过分类、来源和商户别名管理进一步优化效果。",
        faq2: "<strong>为什么有些截图没有完全识别？</strong><br>不同支付界面、小票样式和截图内容差异较大，识别结果可能受截图清晰度、信息完整度和内容布局影响。",
        faq3: "<strong>快捷指令触发后没有看到结果？</strong><br>请确认快捷指令已正确授权，并检查 App 是否已完成首次配置与必要权限设置。",
        modelTitle: "模型与下载相关",
        model1: "<strong>本地模型下载失败怎么办？</strong><br>请检查网络连接、存储空间以及当前版本是否支持该功能，然后重试下载。",
        model2: "<strong>删除模型后会怎样？</strong><br>App 的基础功能仍可使用，但相关本地智能增强能力可能会受影响，需要重新下载后恢复。",
        model3: "<strong>导入后直接记账还能修改吗？</strong><br>可以。记录生成后，仍可在 App 内查看、确认和手动修正。",
        feedbackTitle: "建议反馈时提供的信息",
        feedback1: "设备型号与系统版本",
        feedback2: "App 版本号",
        feedback3: "问题发生前的操作步骤",
        feedback4: "是否通过截图、拍照、剪切板或快捷指令触发",
        feedback5: "如方便，可附带脱敏后的界面截图",
        privacyTitle: "关于隐私",
        privacyBody: "AutoLedger 以本地处理为核心，帮助你在设备上完成账单识别与整理。",
      },
      privacy: {
        heading: "隐私政策",
        intro:
          "AutoLedger 非常重视您的隐私与数据安全。本页面说明我们会收集哪些信息、如何处理这些信息，以及您在使用本应用时可享有的相关权利。",
        product: "适用产品：AutoLedger",
        updated: "最后更新：2026-03-27",
        localFirst: "默认本地优先",
        footer: "© 2026 AutoLedger · 隐私政策",
        sections: [
          {
            title: "一、我们是谁",
            body: [
              "AutoLedger 是一款面向个人用户的记账工具，核心功能包括截图识别、账单导入、自动分类、快捷指令一键记账与消费统计等。",
              "本隐私政策适用于 AutoLedger iOS 应用及与该应用直接相关的服务页面。",
            ],
          },
          {
            title: "二、我们收集哪些信息",
            body: [
              "AutoLedger 默认不要求您注册账号，也不会主动收集您的姓名、手机号、身份证号、邮箱地址等个人身份信息。",
              "在您主动使用相关功能时，您可能向本应用提供以下信息：",
            ],
            list: [
              "您主动导入的截图、照片或小票图像",
              "图像中可能包含的账单文本信息，例如金额、商户、时间、支付渠道",
              "您手动编辑或补充的账单备注、分类、来源信息",
              "您主动使用快捷指令、分享扩展或剪贴板导入时提供的文本或图片内容",
            ],
            callout: "我们只在实现记账、识别、分类、展示和调试功能所必需的范围内处理数据，不会无关收集。",
          },
          {
            title: "三、我们如何处理您的数据",
            body: [
              "AutoLedger 采用<strong>本地优先</strong>的设计思路。默认情况下，您的截图、照片和账单数据会优先在您的设备本地完成处理与存储。",
            ],
            list: [
              "OCR 识别可在本地完成时，将优先在本地执行",
              "账单解析、分类、去重、展示等逻辑默认在本地完成",
              "账单记录默认存储于您的设备本地数据库中",
            ],
            after: [
              "在部分功能场景中，如您启用了基于第三方服务的识别、解析或 AI 能力，相关截图文本或图片内容可能会被发送给第三方服务用于完成该功能。",
            ],
            warning:
              "如果未来版本新增云同步、远程 AI 解析、账号系统或服务器存储，我们会同步更新本隐私政策，并在需要时通过应用内提示或更新说明告知您。",
          },
          {
            title: "四、我们如何使用这些信息",
            body: ["我们仅会将相关信息用于以下目的："],
            list: [
              "识别您主动导入的截图或照片中的账单内容",
              "生成账单条目，包括金额、商户、时间、分类等信息",
              "帮助您进行账单展示、搜索、统计、月报与趋势分析",
              "支持快捷指令、分享扩展、拍照识别、剪贴板导入等功能",
              "在您主动进入调试或回归页面时，展示 OCR 原文、解析结果与导入状态以便核查",
              "改进应用稳定性、修复识别问题和提升产品体验",
            ],
          },
          {
            title: "五、权限使用说明",
            body: ["根据您所使用的功能，AutoLedger 可能会请求以下系统权限："],
            list: [
              "<strong>照片/相册权限</strong>：用于读取您主动选择的截图或照片，以识别账单内容。",
              "<strong>相机权限</strong>：用于拍摄账单、小票或支付页面内容并进行识别。",
              "<strong>通知权限</strong>：用于向您展示记账结果、提醒或相关状态反馈（如您主动开启）。",
              "<strong>剪贴板访问</strong>：用于在您主动触发粘贴导入时读取剪贴板中的文本或图片内容。",
            ],
            after: ["所有权限均仅在对应功能需要时使用，不会用于无关目的。您也可以随时在 iOS 系统设置中关闭相关权限。"],
          },
          {
            title: "六、第三方服务说明",
            body: [
              "为实现部分识别、解析或智能能力，AutoLedger 在未来版本中可能接入第三方服务，例如 OCR 服务、AI 文本解析服务或云端模型服务。",
              "如接入相关第三方服务，我们将遵循以下原则：",
            ],
            list: [
              "仅传输实现功能所必需的最小数据范围",
              "不将相关数据用于广告、画像或无关营销用途",
              "不出售您的个人数据",
              "在功能上线时同步更新本隐私政策及应用内说明",
            ],
          },
          {
            title: "七、数据存储与保留",
            body: ["您的账单数据默认保存在本地设备中。除非未来版本明确提供云同步功能并经您主动开启，否则我们不会将您的账单数据存储在开发者服务器。"],
            list: ["本地数据的保留时长由您自行决定", "您删除应用后，本地数据可能随应用一并删除", "如未来支持导出、备份或云同步，相关规则将另行说明"],
          },
          {
            title: "八、数据安全",
            body: [
              "我们会采取合理措施保护您的信息安全，包括但不限于使用 iOS 系统安全机制、最小化数据处理范围、减少不必要的外部传输等。",
              "但请您理解，任何网络传输或电子存储方式都无法保证绝对安全。如您对敏感财务信息有更高要求，建议您谨慎选择导入内容，并及时检查应用设置与系统权限。",
            ],
          },
          {
            title: "九、未成年人保护",
            body: ["AutoLedger 主要面向具有独立财务管理需求的用户设计。我们不会故意面向未满 14 周岁的未成年人提供服务或收集其个人信息。"],
          },
          {
            title: "十、您的权利",
            body: ["在适用法律允许的范围内，您可以："],
            list: ["查看和管理您在本地保存的账单数据", "删除您主动导入的账单信息", "关闭照片、相机、通知等系统权限", "停止使用相关功能或卸载应用"],
          },
          {
            title: "十一、隐私政策的更新",
            body: [
              "我们可能会根据产品功能变化、法律法规要求或业务调整更新本隐私政策。更新后的版本将在本页面发布，并自发布之日起生效。",
              "如果更新涉及重大变更，我们将通过应用更新说明、应用内提示或其他合理方式提醒您。",
            ],
          },
          {
            title: "十二、联系我们",
            body: [
              '如果您对本隐私政策有任何疑问、建议或投诉，可通过以下方式联系开发者：',
              '网站：<a href="https://getautoledger.app/" target="_blank" rel="noopener noreferrer">https://getautoledger.app/</a>',
              "如后续增加专门的支持邮箱或反馈渠道，我们会在本页面同步更新。",
            ],
          },
        ],
      },
    },
    "zh-Hant": {
      meta: {
        homeTitle: "AutoLedger - 一鍵記帳",
        homeDescription: "AutoLedger 是一款基於截圖與捷徑的一鍵記帳工具。按一下，就記好。",
        supportTitle: "AutoLedger 技術支援",
        supportDescription: "AutoLedger 技術支援頁面，包含問題回報、常見問題和聯絡資訊。",
        privacyTitle: "AutoLedger 隱私政策",
        privacyDescription: "AutoLedger 隱私政策",
      },
      nav: { home: "首頁", privacy: "隱私政策", support: "技術支援", contact: "聯絡開發者" },
      action: {
        privacy: "查看隱私政策",
        support: "技術支援",
        appStore: "App Store",
        goAppStore: "前往 App Store",
        testFlight: "申請新版測試資格",
      },
      home: {
        badge: "⚡ 一鍵記帳 · 截圖即入帳",
        heroTitle: "長按一下，<br>就記好。",
        heroDesc:
          "AutoLedger 是一款基於截圖、捷徑和本機辨識的一鍵記帳工具。你只需要長按操作按鈕，應用就會自動辨識金額與商戶並生成帳單。",
        heroNote: "資料預設僅保存在本機裝置中。",
        whyEyebrow: "為什麼做它",
        whyTitle: "不是更方便地記帳，<br>而是盡量不用記帳。",
        whyBody: "很多人不是不想記帳，而是每次都嫌麻煩。AutoLedger 的目標不是讓你多點幾步去記一筆帳，而是把「記帳」壓縮成一個非常自然的動作。",
        quickTitle: "一鍵記帳",
        quickBody: "配合捷徑和操作按鈕，按一下即可啟動記帳流程，減少打開 App、選圖、輸入金額等重複操作。",
        ocrTitle: "截圖辨識",
        ocrBody: "支援從支付截圖、照片或分享內容中提取帳單資訊，自動辨識金額、商戶與時間，並生成記錄。",
        localTitle: "本機優先",
        localBody: "帳單資料預設儲存在本機裝置中。當前版本以本機處理為主，盡量減少不必要的資料外傳。",
        flowEyebrow: "使用流程",
        flowTitle: "只保留最短路徑",
        step1Title: "完成支付",
        step1Body: "使用者按平時習慣完成支付，不需要額外打開記帳工具。",
        step2Title: "長按操作按鈕或執行捷徑",
        step2Body: "觸發一鍵記帳入口，系統將截圖傳入辨識流程。",
        step3Title: "自動辨識並入帳",
        step3Body: "AutoLedger 辨識金額、商戶、時間和分類，並給出「已記好」的結果回饋。",
        philosophyEyebrow: "產品理念",
        quote: "讓「記帳」這件事，<br>盡量消失。",
        philosophyBody: "我們不追求複雜的財務系統，也不試圖一次做成大而全的記帳平台。AutoLedger 只解決一個問題：",
        philosophyStrong: "如何讓你幾乎不費力地留下每一筆消費記錄。",
        capabilitiesEyebrow: "當前版本能力",
        capability1: "捷徑一鍵記帳",
        capability2: "支付截圖匯入與辨識",
        capability3: "拍照辨識與剪貼簿匯入",
        capability4: "帳本列表與基礎月報",
        capability5: "除錯頁查看 OCR 原文和解析結果",
        audienceEyebrow: "適合誰",
        audience1: "想記帳，但不想手動輸入的人",
        audience2: "經常使用 iPhone 捷徑和操作按鈕的人",
        audience3: "希望快速記錄小額支出和日常消費的人",
        audience4: "想先把消費記下來，後面再慢慢整理的人",
        ctaEyebrow: "現在開始",
        ctaBody: "如果你正在尋找一種更輕、更快、更接近無感的記帳方式，歡迎透過郵件聯絡開發者取得測試資格或了解產品進展。",
      },
      support: {
        eyebrow: "AutoLedger 技術支援",
        title: "問題回報、常見說明與聯絡入口",
        lead: "如果你在使用 AutoLedger 時遇到辨識錯誤、模型下載失敗、捷徑異常、匯入問題或其他體驗問題，可以先查看下方說明，也可以直接聯絡我們。",
        contactTitle: "聯絡信箱",
        contactBody: "如需回報問題、提交建議或說明審核測試情況，請透過信箱聯絡：",
        faqTitle: "常見問題",
        faq1: "<strong>辨識結果不準確怎麼辦？</strong><br>你可以在 App 內查看並修改生成後的記錄，後續也可透過分類、來源和商戶別名管理進一步優化效果。",
        faq2: "<strong>為什麼有些截圖沒有完全辨識？</strong><br>不同支付介面、小票樣式和截圖內容差異較大，辨識結果可能受截圖清晰度、資訊完整度和內容版面影響。",
        faq3: "<strong>捷徑觸發後沒有看到結果？</strong><br>請確認捷徑已正確授權，並檢查 App 是否已完成首次設定與必要權限設定。",
        modelTitle: "模型與下載相關",
        model1: "<strong>本機模型下載失敗怎麼辦？</strong><br>請檢查網路連線、儲存空間以及當前版本是否支援該功能，然後重試下載。",
        model2: "<strong>刪除模型後會怎樣？</strong><br>App 的基礎功能仍可使用，但相關本機智慧增強能力可能會受影響，需要重新下載後恢復。",
        model3: "<strong>匯入後直接記帳還能修改嗎？</strong><br>可以。記錄生成後，仍可在 App 內查看、確認和手動修正。",
        feedbackTitle: "建議回報時提供的資訊",
        feedback1: "裝置型號與系統版本",
        feedback2: "App 版本號",
        feedback3: "問題發生前的操作步驟",
        feedback4: "是否透過截圖、拍照、剪貼簿或捷徑觸發",
        feedback5: "如方便，可附上脫敏後的介面截圖",
        privacyTitle: "關於隱私",
        privacyBody: "AutoLedger 以本機處理為核心，幫助你在裝置上完成帳單辨識與整理。",
      },
      privacy: null,
    },
    en: {
      meta: {
        homeTitle: "AutoLedger - One-tap ledger",
        homeDescription: "AutoLedger turns screenshots and Shortcuts into a fast one-tap ledger flow.",
        supportTitle: "AutoLedger Support",
        supportDescription: "AutoLedger support, troubleshooting, and contact information.",
        privacyTitle: "AutoLedger Privacy Policy",
        privacyDescription: "AutoLedger privacy policy.",
      },
      nav: { home: "Home", privacy: "Privacy", support: "Support", contact: "Contact" },
      action: {
        privacy: "View privacy policy",
        support: "Support",
        appStore: "App Store",
        goAppStore: "Open App Store",
        testFlight: "Join TestFlight",
      },
      home: {
        badge: "⚡ One-tap ledger · Screenshot to entry",
        heroTitle: "Long press once.<br>Logged.",
        heroDesc:
          "AutoLedger is a one-tap ledger app powered by screenshots, Shortcuts, and on-device recognition. Hold the action button, and it identifies the amount and merchant to create a record.",
        heroNote: "Your ledger data is stored on your device by default.",
        whyEyebrow: "Why it exists",
        whyTitle: "Not easier bookkeeping.<br>Less bookkeeping.",
        whyBody:
          "Most people do not avoid budgeting because they dislike clarity. They avoid the friction. AutoLedger compresses expense logging into one natural action.",
        quickTitle: "One-tap flow",
        quickBody: "Use Shortcuts or the Action Button to start the logging flow without opening the app, picking an image, or typing the amount.",
        ocrTitle: "Screenshot recognition",
        ocrBody: "Extracts bill details from payment screenshots, photos, or shared content, then recognizes amount, merchant, and time.",
        localTitle: "Local first",
        localBody: "Ledger data is stored locally by default. The current version is designed around on-device processing and minimal external transfer.",
        flowEyebrow: "Flow",
        flowTitle: "The shortest path",
        step1Title: "Pay as usual",
        step1Body: "Finish a payment the way you normally do. No extra app launch required.",
        step2Title: "Long press or run a Shortcut",
        step2Body: "Trigger the one-tap entry point and pass the screenshot into recognition.",
        step3Title: "Recognize and log",
        step3Body: "AutoLedger reads the amount, merchant, time, and category, then confirms the entry is ready.",
        philosophyEyebrow: "Product idea",
        quote: "Make bookkeeping<br>almost disappear.",
        philosophyBody: "AutoLedger is not trying to become a giant finance platform. It focuses on one job:",
        philosophyStrong: "leaving an expense trail with almost no effort.",
        capabilitiesEyebrow: "Current capabilities",
        capability1: "Shortcut-based one-tap logging",
        capability2: "Payment screenshot import and recognition",
        capability3: "Camera recognition and clipboard import",
        capability4: "Ledger list and basic monthly report",
        capability5: "Debug view for OCR text and parsing results",
        audienceEyebrow: "Who it is for",
        audience1: "People who want records without manual entry",
        audience2: "iPhone users who rely on Shortcuts and the Action Button",
        audience3: "People who want to capture daily spending quickly",
        audience4: "People who prefer logging first and organizing later",
        ctaEyebrow: "Start now",
        ctaBody: "If you want a lighter, faster, almost invisible way to keep expenses, join TestFlight or contact the developer.",
      },
      support: {
        eyebrow: "AutoLedger Support",
        title: "Feedback, FAQ, and contact",
        lead:
          "If you run into recognition errors, model download issues, Shortcut problems, import failures, or other product issues, check the notes below or contact us directly.",
        contactTitle: "Email",
        contactBody: "For bug reports, suggestions, or review/testing context, contact:",
        faqTitle: "FAQ",
        faq1: "<strong>What if recognition is inaccurate?</strong><br>You can review and edit generated entries in the app. Category, source, and merchant alias management can further improve results over time.",
        faq2: "<strong>Why are some screenshots not fully recognized?</strong><br>Payment screens, receipt styles, and screenshot layouts vary. Results may depend on clarity, completeness, and layout.",
        faq3: "<strong>Why did nothing appear after running a Shortcut?</strong><br>Confirm that the Shortcut has the required permissions and that the app has completed its initial setup.",
        modelTitle: "Models and downloads",
        model1: "<strong>What if a local model fails to download?</strong><br>Check your network, available storage, and whether your current version supports the feature, then try again.",
        model2: "<strong>What happens if I delete a model?</strong><br>Core app features remain available, but related local intelligence features may be limited until the model is downloaded again.",
        model3: "<strong>Can I edit an entry after import?</strong><br>Yes. Generated records can still be reviewed, confirmed, and corrected in the app.",
        feedbackTitle: "Helpful details for reports",
        feedback1: "Device model and system version",
        feedback2: "App version",
        feedback3: "Steps before the issue happened",
        feedback4: "Whether it was triggered by screenshot, camera, clipboard, or Shortcut",
        feedback5: "A redacted screenshot if possible",
        privacyTitle: "Privacy",
        privacyBody: "AutoLedger is built around local processing to help recognize and organize records on your device.",
      },
      privacy: null,
    },
    ja: {
      meta: {
        homeTitle: "AutoLedger - ワンタップ家計記録",
        homeDescription: "AutoLedger はスクリーンショットとショートカットで支出記録をすばやく残せるアプリです。",
        supportTitle: "AutoLedger サポート",
        supportDescription: "AutoLedger のサポート、よくある質問、連絡先。",
        privacyTitle: "AutoLedger プライバシーポリシー",
        privacyDescription: "AutoLedger プライバシーポリシー。",
      },
      nav: { home: "ホーム", privacy: "プライバシー", support: "サポート", contact: "開発者に連絡" },
      action: {
        privacy: "プライバシーを見る",
        support: "サポート",
        appStore: "App Store",
        goAppStore: "App Store を開く",
        testFlight: "TestFlight に参加",
      },
      home: {
        badge: "⚡ ワンタップ記録 · スクショから自動入力",
        heroTitle: "長押し一回で、<br>記録完了。",
        heroDesc:
          "AutoLedger はスクリーンショット、ショートカット、端末内認識を使ったワンタップ家計記録アプリです。アクションボタンを長押しするだけで、金額と店舗を読み取り記録を作成します。",
        heroNote: "記録データは初期設定では端末内に保存されます。",
        whyEyebrow: "つくった理由",
        whyTitle: "記帳を便利にするより、<br>記帳しなくて済むように。",
        whyBody:
          "記録したくないのではなく、毎回の手間が重いだけ。AutoLedger は支出記録を、自然な一つの操作まで短くします。",
        quickTitle: "ワンタップ記録",
        quickBody: "ショートカットやアクションボタンから記録フローを起動し、アプリを開く、画像を選ぶ、金額を入力する手間を減らします。",
        ocrTitle: "スクリーンショット認識",
        ocrBody: "支払いスクリーンショット、写真、共有内容から金額・店舗・時間を読み取り、記録を作成します。",
        localTitle: "ローカル優先",
        localBody: "記録データは初期設定では端末内に保存されます。現在のバージョンは端末内処理を中心に設計されています。",
        flowEyebrow: "使い方",
        flowTitle: "最短の流れ",
        step1Title: "いつも通り支払う",
        step1Body: "普段通りに支払いを完了します。追加で記録アプリを開く必要はありません。",
        step2Title: "長押し、またはショートカット実行",
        step2Body: "ワンタップ入口を起動し、スクリーンショットを認識フローへ渡します。",
        step3Title: "自動認識して記録",
        step3Body: "AutoLedger が金額、店舗、時間、分類を読み取り、記録結果を返します。",
        philosophyEyebrow: "プロダクトの考え方",
        quote: "「記帳」という作業を、<br>できるだけ消す。",
        philosophyBody: "複雑な財務システムや大きな家計簿プラットフォームを目指しているわけではありません。AutoLedger が解くのは一つだけです：",
        philosophyStrong: "ほとんど手間なく、日々の支出を残すこと。",
        capabilitiesEyebrow: "現在の機能",
        capability1: "ショートカットによるワンタップ記録",
        capability2: "支払いスクリーンショットの取り込みと認識",
        capability3: "カメラ認識とクリップボード取り込み",
        capability4: "記録一覧と基本的な月次レポート",
        capability5: "OCR 原文と解析結果のデバッグ表示",
        audienceEyebrow: "向いている人",
        audience1: "手入力なしで支出を残したい人",
        audience2: "iPhone のショートカットやアクションボタンをよく使う人",
        audience3: "日々の小さな支出をすばやく記録したい人",
        audience4: "まず記録して、あとで整理したい人",
        ctaEyebrow: "今すぐ始める",
        ctaBody: "より軽く、速く、ほとんど意識しない記録方法を探している方は、TestFlight に参加するか開発者までご連絡ください。",
      },
      support: {
        eyebrow: "AutoLedger サポート",
        title: "フィードバック、FAQ、連絡先",
        lead:
          "認識エラー、モデルのダウンロード失敗、ショートカットの問題、取り込みの不具合などがある場合は、下記をご確認いただくか直接ご連絡ください。",
        contactTitle: "メール",
        contactBody: "不具合報告、提案、テスト状況の共有はこちらへ：",
        faqTitle: "よくある質問",
        faq1: "<strong>認識結果が正しくない場合は？</strong><br>生成された記録はアプリ内で確認・修正できます。分類、ソース、店舗別名の管理により、今後さらに改善できます。",
        faq2: "<strong>一部のスクリーンショットが完全に認識されないのはなぜ？</strong><br>支払い画面やレシートの形式、レイアウトはさまざまです。認識結果は画像の鮮明さ、情報量、構成に影響されます。",
        faq3: "<strong>ショートカット実行後に結果が出ない場合は？</strong><br>ショートカットの権限と、アプリの初期設定・必要な権限設定が完了しているか確認してください。",
        modelTitle: "モデルとダウンロード",
        model1: "<strong>ローカルモデルのダウンロードに失敗する場合は？</strong><br>ネットワーク、空き容量、現在のバージョンがその機能に対応しているかを確認してから再試行してください。",
        model2: "<strong>モデルを削除するとどうなりますか？</strong><br>基本機能は利用できますが、関連するローカル知能機能は再ダウンロードまで制限される場合があります。",
        model3: "<strong>取り込み後に記録を修正できますか？</strong><br>はい。生成後もアプリ内で確認、確定、手動修正できます。",
        feedbackTitle: "報告時にあると助かる情報",
        feedback1: "端末モデルと OS バージョン",
        feedback2: "アプリのバージョン",
        feedback3: "問題発生前の操作手順",
        feedback4: "スクリーンショット、カメラ、クリップボード、ショートカットのどれで起動したか",
        feedback5: "可能であれば個人情報を隠したスクリーンショット",
        privacyTitle: "プライバシー",
        privacyBody: "AutoLedger は端末内処理を中心に設計され、端末上で記録の認識と整理を行います。",
      },
      privacy: null,
    },
  };

  messages["zh-Hant"].privacy = transformPrivacy(messages["zh-Hans"].privacy, {
    heading: "隱私政策",
    intro:
      "AutoLedger 非常重視您的隱私與資料安全。本頁面說明我們會收集哪些資訊、如何處理這些資訊，以及您在使用本應用時可享有的相關權利。",
    product: "適用產品：AutoLedger",
    updated: "最後更新：2026-03-27",
    localFirst: "預設本機優先",
    footer: "© 2026 AutoLedger · 隱私政策",
  });

  messages.en.privacy = {
    heading: "Privacy Policy",
    intro:
      "AutoLedger takes privacy and data security seriously. This page explains what information may be processed, how it is handled, and what choices you have when using the app.",
    product: "Product: AutoLedger",
    updated: "Last updated: 2026-03-27",
    localFirst: "Local-first by default",
    footer: "© 2026 AutoLedger · Privacy Policy",
    sections: [
      { title: "1. Who we are", body: ["AutoLedger is a personal ledger app with screenshot recognition, bill import, automatic categorization, Shortcut-based one-tap logging, and spending summaries.", "This policy applies to the AutoLedger iOS app and service pages directly related to the app."] },
      { title: "2. What information we process", body: ["AutoLedger does not require an account by default and does not actively collect identity information such as your name, phone number, government ID, or email address.", "When you choose to use certain features, you may provide:"], list: ["Screenshots, photos, or receipt images you import", "Bill text that may appear in those images, such as amount, merchant, time, and payment channel", "Notes, categories, or source information that you edit or add manually", "Text or images provided when you use Shortcuts, share extensions, or clipboard import"], callout: "We process data only as needed for logging, recognition, categorization, display, and debugging. We do not collect unrelated data." },
      { title: "3. How we process your data", body: ["AutoLedger is designed to be <strong>local-first</strong>. By default, screenshots, photos, and ledger data are processed and stored on your device first."], list: ["OCR runs locally when local recognition is available", "Parsing, categorization, deduplication, and display logic are handled locally by default", "Ledger records are stored in your device's local database by default"], after: ["If you enable features backed by third-party recognition, parsing, or AI services, related screenshot text or image content may be sent to those services to complete the feature."], warning: "If future versions add cloud sync, remote AI parsing, accounts, or server storage, we will update this policy and notify you through app prompts or release notes when needed." },
      { title: "4. How we use this information", body: ["Information is used only for:"], list: ["Recognizing bill content in screenshots or photos you import", "Creating ledger entries with amount, merchant, time, category, and related fields", "Showing, searching, summarizing, and analyzing your records", "Supporting Shortcuts, share extensions, camera recognition, and clipboard import", "Showing OCR text, parsing results, and import status when you open debug or regression pages", "Improving stability, fixing recognition issues, and improving product experience"] },
      { title: "5. Permissions", body: ["Depending on the features you use, AutoLedger may request:"], list: ["<strong>Photos access</strong>: to read screenshots or photos you select for bill recognition.", "<strong>Camera access</strong>: to capture bills, receipts, or payment pages for recognition.", "<strong>Notifications</strong>: to show results, reminders, or status feedback if you enable them.", "<strong>Clipboard access</strong>: to read text or images when you actively trigger clipboard import."], after: ["Permissions are used only when needed for the corresponding feature. You can disable them in iOS Settings at any time."] },
      { title: "6. Third-party services", body: ["Future versions may integrate third-party services such as OCR, AI text parsing, or cloud model services for selected recognition or intelligence features.", "If such services are used, we will:"], list: ["Transmit only the minimum data required for the feature", "Not use the data for advertising, profiling, or unrelated marketing", "Not sell your personal data", "Update this policy and in-app explanations when the feature launches"] },
      { title: "7. Storage and retention", body: ["Your ledger data is stored locally by default. Unless a future cloud sync feature is clearly provided and you actively enable it, we will not store your ledger data on developer servers."], list: ["Local retention is controlled by you", "Deleting the app may also delete local data", "If export, backup, or cloud sync is added later, the relevant rules will be explained separately"] },
      { title: "8. Data security", body: ["We take reasonable measures to protect your information, including iOS security mechanisms, minimizing the scope of processing, and reducing unnecessary external transfer.", "No network transmission or electronic storage method can be guaranteed absolutely secure. If your financial data is highly sensitive, choose imported content carefully and review app settings and system permissions."] },
      { title: "9. Children", body: ["AutoLedger is intended for users with independent personal finance needs. We do not knowingly provide services to, or collect personal information from, children under 14."] },
      { title: "10. Your choices", body: ["Where permitted by law, you can:"], list: ["View and manage locally stored ledger data", "Delete bill information you imported", "Disable Photos, Camera, Notifications, and other system permissions", "Stop using related features or uninstall the app"] },
      { title: "11. Updates to this policy", body: ["We may update this policy as product features, legal requirements, or business needs change. Updated versions will be published on this page and become effective on publication.", "For material changes, we will notify you through release notes, in-app prompts, or other reasonable methods."] },
      { title: "12. Contact", body: ['If you have questions, suggestions, or complaints about this policy, contact the developer:', 'Website: <a href="https://getautoledger.app/" target="_blank" rel="noopener noreferrer">https://getautoledger.app/</a>', "If dedicated support channels are added later, we will update this page."] },
    ],
  };

  messages.ja.privacy = {
    heading: "プライバシーポリシー",
    intro:
      "AutoLedger はプライバシーとデータの安全性を重視しています。このページでは、処理される可能性のある情報、その扱い方、利用者の選択肢について説明します。",
    product: "対象製品：AutoLedger",
    updated: "最終更新：2026-03-27",
    localFirst: "初期設定ではローカル優先",
    footer: "© 2026 AutoLedger · プライバシーポリシー",
    sections: [
      { title: "1. 私たちについて", body: ["AutoLedger は個人向けの支出記録アプリです。主な機能には、スクリーンショット認識、明細取り込み、自動分類、ショートカットによるワンタップ記録、支出集計などがあります。", "本ポリシーは AutoLedger iOS アプリおよびアプリに直接関連するサービスページに適用されます。"] },
      { title: "2. 処理する情報", body: ["AutoLedger は初期設定ではアカウント登録を必要とせず、氏名、電話番号、身分証番号、メールアドレスなどの個人識別情報を積極的に収集しません。", "関連機能を利用する際、以下の情報をアプリに提供する場合があります。"], list: ["利用者が取り込むスクリーンショット、写真、レシート画像", "画像に含まれる可能性のある金額、店舗、時間、支払い方法などの明細テキスト", "利用者が手動で編集・追加するメモ、分類、ソース情報", "ショートカット、共有拡張、クリップボード取り込みを利用する際のテキストまたは画像"], callout: "記録、認識、分類、表示、デバッグに必要な範囲でのみデータを処理し、無関係な収集は行いません。" },
      { title: "3. データの処理方法", body: ["AutoLedger は<strong>ローカル優先</strong>の設計です。初期設定では、スクリーンショット、写真、記録データは端末内で優先的に処理・保存されます。"], list: ["ローカル OCR が利用できる場合は端末内で優先実行します", "解析、分類、重複排除、表示などは初期設定では端末内で行われます", "記録データは初期設定では端末内データベースに保存されます"], after: ["第三者サービスによる認識、解析、AI 機能を有効にした場合、その機能を完了するために関連するスクリーンショット内のテキストまたは画像が第三者サービスへ送信されることがあります。"], warning: "今後クラウド同期、リモート AI 解析、アカウント、サーバー保存を追加する場合、本ポリシーを更新し、必要に応じてアプリ内表示や更新説明でお知らせします。" },
      { title: "4. 情報の利用目的", body: ["関連情報は以下の目的にのみ使用します。"], list: ["利用者が取り込んだスクリーンショットまたは写真内の明細内容を認識するため", "金額、店舗、時間、分類などを含む記録を作成するため", "記録の表示、検索、集計、月次レポート、傾向分析を行うため", "ショートカット、共有拡張、カメラ認識、クリップボード取り込みを支援するため", "デバッグまたは検証ページを開いた場合に OCR 原文、解析結果、取り込み状態を表示するため", "安定性の改善、認識問題の修正、製品体験の向上のため"] },
      { title: "5. 権限について", body: ["利用する機能に応じて、AutoLedger は以下のシステム権限を要求する場合があります。"], list: ["<strong>写真/アルバム権限</strong>：選択したスクリーンショットや写真を読み取り、明細内容を認識するため。", "<strong>カメラ権限</strong>：明細、レシート、支払い画面を撮影して認識するため。", "<strong>通知権限</strong>：有効化した場合に記録結果、リマインダー、状態フィードバックを表示するため。", "<strong>クリップボードアクセス</strong>：利用者が貼り付け取り込みを明示的に実行した際に、テキストや画像を読み取るため。"], after: ["すべての権限は該当機能に必要な場合のみ使用されます。iOS の設定からいつでも無効にできます。"] },
      { title: "6. 第三者サービス", body: ["今後、認識、解析、または知能機能の一部を実現するため、OCR サービス、AI テキスト解析、クラウドモデルなどの第三者サービスを導入する場合があります。", "導入する場合、以下の方針に従います。"], list: ["機能実現に必要な最小限のデータのみ送信する", "広告、プロファイリング、無関係なマーケティングに利用しない", "個人データを販売しない", "機能公開時に本ポリシーとアプリ内説明を更新する"] },
      { title: "7. 保存と保持", body: ["記録データは初期設定では端末内に保存されます。将来クラウド同期機能を明示的に提供し、利用者が有効化しない限り、開発者サーバーに記録データを保存しません。"], list: ["ローカルデータの保持期間は利用者が管理します", "アプリを削除するとローカルデータも削除される場合があります", "エクスポート、バックアップ、クラウド同期を将来提供する場合は別途説明します"] },
      { title: "8. データの安全性", body: ["iOS のセキュリティ機構、処理範囲の最小化、不要な外部送信の削減など、合理的な保護措置を講じます。", "ただし、ネットワーク送信や電子保存に絶対的な安全はありません。機密性の高い財務情報を扱う場合は、取り込む内容を慎重に選び、アプリ設定とシステム権限を確認してください。"] },
      { title: "9. 未成年者", body: ["AutoLedger は独立した家計管理ニーズを持つ利用者向けです。14 歳未満の未成年者に意図的にサービスを提供したり、個人情報を収集したりすることはありません。"] },
      { title: "10. 利用者の選択肢", body: ["適用法で認められる範囲で、利用者は以下を行えます。"], list: ["端末内に保存された記録データを確認・管理する", "取り込んだ明細情報を削除する", "写真、カメラ、通知などのシステム権限を無効化する", "関連機能の利用を停止、またはアプリをアンインストールする"] },
      { title: "11. ポリシーの更新", body: ["製品機能、法令、事業上の必要に応じて本ポリシーを更新する場合があります。更新版は本ページに掲載され、掲載時点から有効になります。", "重要な変更がある場合は、更新説明、アプリ内表示、またはその他の合理的な方法でお知らせします。"] },
      { title: "12. お問い合わせ", body: ['本ポリシーに関する質問、提案、苦情がある場合は、開発者までご連絡ください。', 'Web サイト：<a href="https://getautoledger.app/" target="_blank" rel="noopener noreferrer">https://getautoledger.app/</a>', "専用サポート窓口などを追加した場合は、本ページでお知らせします。"] },
    ],
  };

  function transformPrivacy(source, overrides) {
    const replacements = [
      ["一、我们是谁", "一、我們是誰"],
      ["二、我们收集哪些信息", "二、我們收集哪些資訊"],
      ["三、我们如何处理您的数据", "三、我們如何處理您的資料"],
      ["四、我们如何使用这些信息", "四、我們如何使用這些資訊"],
      ["五、权限使用说明", "五、權限使用說明"],
      ["六、第三方服务说明", "六、第三方服務說明"],
      ["七、数据存储与保留", "七、資料儲存與保留"],
      ["八、数据安全", "八、資料安全"],
      ["九、未成年人保护", "九、未成年人保護"],
      ["十、您的权利", "十、您的權利"],
      ["十一、隐私政策的更新", "十一、隱私政策的更新"],
      ["十二、联系我们", "十二、聯絡我們"],
      ["我们", "我們"],
      ["谁", "誰"],
      ["这", "這"],
      ["该", "該"],
      ["于", "於"],
      ["与", "與"],
      ["为", "為"],
      ["个", "個"],
      ["时", "時"],
      ["后", "後"],
      ["发", "發"],
      ["让", "讓"],
      ["会", "會"],
      ["并", "並"],
      ["经过", "經過"],
      ["经", "經"],
      ["应", "應"],
      ["服务", "服務"],
      ["页面", "頁面"],
      ["未来", "未來"],
      ["如果", "如果"],
      ["说明", "說明"],
      ["保护", "保護"],
      ["选择", "選擇"],
      ["使用", "使用"],
      ["自动", "自動"],
      ["一键", "一鍵"],
      ["记录", "記錄"],
      ["记账", "記帳"],
      ["消费", "消費"],
      ["统计", "統計"],
      ["商户", "商戶"],
      ["金额", "金額"],
      ["时间", "時間"],
      ["支付渠道", "支付通道"],
      ["主动", "主動"],
      ["直接", "直接"],
      ["注册", "註冊"],
      ["账号", "帳號"],
      ["邮箱", "電子郵件"],
      ["身份", "身分"],
      ["类型", "類型"],
      ["范围", "範圍"],
      ["必要", "必要"],
      ["完成", "完成"],
      ["设备", "裝置"],
      ["远程", "遠端"],
      ["提示", "提示"],
      ["条目", "項目"],
      ["支持", "支援"],
      ["拍照", "拍照"],
      ["核查", "核查"],
      ["稳定性", "穩定性"],
      ["提升", "提升"],
      ["照片/相册", "照片/相簿"],
      ["读取", "讀取"],
      ["拍摄", "拍攝"],
      ["通知", "通知"],
      ["开启", "開啟"],
      ["粘贴", "貼上"],
      ["访问", "存取"],
      ["对应", "對應"],
      ["关闭", "關閉"],
      ["例如", "例如"],
      ["接入", "接入"],
      ["传输", "傳輸"],
      ["广告", "廣告"],
      ["画像", "畫像"],
      ["营销", "行銷"],
      ["上线", "上線"],
      ["保存", "儲存"],
      ["除非", "除非"],
      ["明确", "明確"],
      ["提供", "提供"],
      ["保留", "保留"],
      ["时长", "時長"],
      ["自行", "自行"],
      ["决定", "決定"],
      ["删除", "刪除"],
      ["另行", "另行"],
      ["采取", "採取"],
      ["措施", "措施"],
      ["包括", "包括"],
      ["机制", "機制"],
      ["减少", "減少"],
      ["外部", "外部"],
      ["网络", "網路"],
      ["电子", "電子"],
      ["绝对", "絕對"],
      ["财务", "財務"],
      ["建议", "建議"],
      ["检查", "檢查"],
      ["系统", "系統"],
      ["未满", "未滿"],
      ["范围内", "範圍內"],
      ["查看", "查看"],
      ["手动", "手動"],
      ["停止", "停止"],
      ["卸载", "解除安裝"],
      ["法律法规", "法律法規"],
      ["业务", "業務"],
      ["发布", "發布"],
      ["生效", "生效"],
      ["重大", "重大"],
      ["疑问", "疑問"],
      ["投诉", "投訴"],
      ["方式", "方式"],
      ["专门", "專門"],
      ["反馈", "回饋"],
      ["渠道", "通道"],
      ["同步", "同步"],
      ["隐私", "隱私"],
      ["数据", "資料"],
      ["信息", "資訊"],
      ["默认", "預設"],
      ["本地", "本機"],
      ["优先", "優先"],
      ["账单", "帳單"],
      ["账", "帳"],
      ["截图", "截圖"],
      ["照片", "照片"],
      ["识别", "辨識"],
      ["快捷指令", "捷徑"],
      ["应用", "應用"],
      ["联系", "聯絡"],
      ["开发者", "開發者"],
      ["更新", "更新"],
      ["开启", "開啟"],
      ["关闭", "關閉"],
      ["发送", "傳送"],
      ["相关", "相關"],
      ["处理", "處理"],
      ["存储", "儲存"],
      ["服务器", "伺服器"],
      ["权限", "權限"],
      ["导入", "匯入"],
      ["分类", "分類"],
      ["展示", "顯示"],
      ["调试", "除錯"],
      ["文本", "文字"],
      ["图像", "影像"],
      ["出售", "出售"],
      ["上传", "上傳"],
      ["云", "雲"],
      ["同步", "同步"],
      ["范围", "範圍"],
      ["主动", "主動"],
      ["适用", "適用"],
      ["产品", "產品"],
      ["用户", "使用者"],
      ["个人", "個人"],
      ["姓名", "姓名"],
      ["手机号", "手機號碼"],
      ["邮箱地址", "電子郵件地址"],
      ["支付", "支付"],
      ["渠道", "通道"],
      ["小票", "收據"],
      ["剪贴板", "剪貼簿"],
      ["目的", "目的"],
      ["提醒", "提醒"],
      ["体验", "體驗"],
      ["网络", "網路"],
      ["设置", "設定"],
      ["选择", "選擇"],
      ["查看", "查看"],
      ["管理", "管理"],
      ["删除", "刪除"],
      ["停止", "停止"],
      ["卸载", "解除安裝"],
    ];
    const convert = (value) => {
      if (typeof value !== "string") return value;
      return replacements.reduce((text, pair) => text.replaceAll(pair[0], pair[1]), value);
    };
    const mapSection = (section) => {
      const copy = {};
      Object.keys(section).forEach((key) => {
        if (Array.isArray(section[key])) copy[key] = section[key].map(convert);
        else copy[key] = convert(section[key]);
      });
      return copy;
    };
    return {
      ...source,
      ...overrides,
      sections: source.sections.map(mapSection),
    };
  }

  function normalizeLocale(value) {
    const lower = String(value || "").toLowerCase();
    if (lower === "zh-hans" || lower === "zh-cn" || lower === "zh-sg" || lower === "zh") return "zh-Hans";
    if (lower === "zh-hant" || lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo") return "zh-Hant";
    if (lower.startsWith("ja")) return "ja";
    if (lower.startsWith("en")) return "en";
    return "";
  }

  function initialLocale() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLocale(params.get("lang"));
    if (fromQuery) return fromQuery;
    const fromStorage = normalizeLocale(localStorage.getItem("autoledger-locale"));
    if (fromStorage) return fromStorage;
    const browserLocale = (navigator.languages || [navigator.language]).map(normalizeLocale).find(Boolean);
    return browserLocale || "zh-Hans";
  }

  function get(page, key, locale) {
    const root = messages[locale] || messages["zh-Hans"];
    const parts = key.split(".");
    let value = root;
    for (const part of parts) value = value && value[part];
    if (value == null && locale !== "zh-Hans") return get(page, key, "zh-Hans");
    return value;
  }

  function applyText(locale) {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = get("", node.dataset.i18n, locale);
      if (value != null) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const value = get("", node.dataset.i18nHtml, locale);
      if (value != null) node.innerHTML = value;
    });
  }

  function setMeta(page, locale) {
    const data = messages[locale] || messages["zh-Hans"];
    const title = data.meta[`${page}Title`];
    const description = data.meta[`${page}Description`];
    if (title) document.title = title;
    const descriptionNode = document.querySelector('meta[name="description"]');
    if (descriptionNode && description) descriptionNode.setAttribute("content", description);
  }

  function renderPrivacy(locale) {
    const data = messages[locale]?.privacy || messages["zh-Hans"].privacy;
    const container = document.querySelector("[data-privacy-sections]");
    if (!container || !data) return;

    container.innerHTML = data.sections
      .map((section) => {
        const body = (section.body || []).map((text) => `<p>${text}</p>`).join("");
        const list = section.list ? `<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
        const after = (section.after || []).map((text) => `<p class="muted">${text}</p>`).join("");
        const callout = section.callout ? `<div class="callout">${section.callout}</div>` : "";
        const warning = section.warning ? `<div class="callout warning">${section.warning}</div>` : "";
        return `<div class="section"><h2>${section.title}</h2>${body}${list}${after}${callout}${warning}</div>`;
      })
      .join("");
  }

  function syncLocaleControls(locale) {
    document.querySelectorAll("[data-locale-select]").forEach((select) => {
      select.value = locale;
      select.setAttribute("aria-label", `Language: ${localeNames[locale]}`);
    });
  }

  function updateLang(locale) {
    document.documentElement.lang = locale;
    localStorage.setItem("autoledger-locale", locale);
    syncLocaleControls(locale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", url);
  }

  function init(page) {
    let locale = initialLocale();
    if (!locales.includes(locale)) locale = "zh-Hans";

    const apply = (nextLocale) => {
      updateLang(nextLocale);
      setMeta(page, nextLocale);
      applyText(nextLocale);
      if (page === "privacy") renderPrivacy(nextLocale);
    };

    document.addEventListener("change", (event) => {
      const select = event.target.closest("[data-locale-select]");
      if (!select) return;
      apply(select.value);
    });

    apply(locale);
  }

  window.AutoLedgerI18n = { init };
})();
