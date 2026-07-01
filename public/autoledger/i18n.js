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
          "AutoLedger 以本地优先为核心设计，并为 AutoLedger Pro 提供可选的自动化能力。本页面说明我们会处理哪些信息、为什么处理，以及您可以如何管理这些信息。",
        product: "适用产品：AutoLedger",
        updated: "最后更新：2026-07-01",
        localFirst: "本地优先，云端能力可选",
        footer: "© 2026 AutoLedger · 隐私政策",
        sections: [
          {
            title: "一、我们是谁",
            body: [
              "AutoLedger 是一款面向个人用户的记账应用，功能包括截图识别、拍照识别、一句话记账、酒店水单导入、多账本、订阅管理、月报统计和 AutoLedger Pro 自动化能力。",
              "本隐私政策适用于 AutoLedger App、相关 Apple 平台版本，以及 getautoledger.app 上与 AutoLedger 直接相关的服务页面。",
            ],
          },
          {
            title: "二、我们处理哪些信息",
            body: [
              "AutoLedger 默认不要求您注册账号，也不会主动收集您的姓名、手机号、身份证号等个人身份信息。",
              "根据您主动使用的功能，AutoLedger 可能处理以下信息：",
            ],
            list: [
              "您主动导入的截图、照片、PDF、小票或酒店水单附件",
              "图片或 PDF 中可能包含的账单文本，例如金额、商户、酒店名称、入住日期、时间、支付渠道和币种",
              "您手动新增或编辑的账单、酒店消费、订阅、账本、分类、商户别名、备注和标签",
              "您通过快捷指令、分享扩展、剪贴板、语音输入或 App Intents 提供的文本或图片",
              "您选择启用同步、备份、Pro 订阅或云端水单收件箱时所需的最小状态信息",
            ],
            callout: "我们只在记账、识别、整理、同步、订阅校验、云端候选下载、故障排查和安全防滥用所必需的范围内处理信息，不出售个人数据，也不用于广告画像。",
          },
          {
            title: "三、本地处理、iCloud 与设备同步",
            body: [
              "AutoLedger 采用<strong>本地优先</strong>设计。默认情况下，账单识别、解析、分类、展示和编辑会优先在您的设备上完成，账本数据也优先保存在本机。",
            ],
            list: [
              "OCR、账单解析、分类、去重和月报统计默认在设备本地执行",
              "邮箱授权码或应用专用密码仅保存在本机 Keychain，不上传到 AutoLedger 服务器",
              "如果您启用 iCloud 同步或备份，相关数据会通过您的 Apple iCloud 账号同步，开发者无法直接读取您的 iCloud 内容",
              "如果您关闭同步或删除本地数据，App 将按系统能力和用户操作停止新的同步或移除本机副本",
            ],
          },
          {
            title: "四、AutoLedger Pro 与订阅校验",
            body: [
              "AutoLedger Pro 通过 App Store 提供订阅。购买、续订、退款、账单和付款方式由 Apple 处理，AutoLedger 不接触您的银行卡号或完整付款信息。",
              "为了判断 Pro 是否有效，App 会读取 StoreKit 提供的本机订阅状态；在使用云端水单收件箱等服务端能力时，App 可能会把 Apple 签名的交易凭证发送给 AutoLedger Worker，由 Worker 通过 App Store Server API 校验商品 ID、Bundle ID、撤销状态和到期时间。",
            ],
            list: [
              "服务端只保存必要的订阅状态、到期时间和由原始交易号生成的哈希标识",
              "Pro 到期后不会锁住您已经保存的历史账单、酒店消费、PDF 或基础导出能力",
              "当前版本不使用 App Store Server Notifications 主动接收订阅生命周期事件；后续版本接入时会继续遵循最小化和哈希化原则",
            ],
          },
          {
            title: "五、本地邮箱扫描与云端水单收件箱",
            body: [
              "AutoLedger 提供两种酒店水单整理路径：本地邮箱扫描和 AutoLedger Pro 云端专属水单收件箱。",
            ],
            list: [
              "本地邮箱扫描在您的设备上连接您配置的邮箱，只查找可能相关的酒店水单邮件和附件；邮箱授权码或应用专用密码仅保存在本机 Keychain，不上传到服务器",
              "云端专属水单收件箱只处理投递到 folio+token@getautoledger.app 这类专属地址的邮件，不登录您的 QQ、Gmail、Outlook、iCloud Mail 或其它个人邮箱",
              "云端 Worker 会提取 PDF 附件或必要的正文水单内容，保存候选 PDF 和经过精简的候选元数据，以便 App 下载后在设备上复核",
              "云端候选不会自动写入正式账本；下载到 App 后仍需您确认，才会生成酒店消费和账单记录",
              "云端通知使用 APNs 发送通用提醒和 deep link，不在推送内容中包含酒店名、金额、订单号、附件文件名或收件箱 token",
            ],
            warning:
              "请只将需要 AutoLedger 处理的酒店水单邮件转发到专属地址；不匹配专属地址的邮件不会作为您的水单候选处理。",
          },
          {
            title: "六、我们如何使用这些信息",
            body: ["我们仅会将相关信息用于以下目的："],
            list: [
              "识别您主动导入或转发的账单、截图、照片、PDF 或酒店水单内容",
              "生成待确认账单、酒店消费、订阅或月报统计，并支持编辑、搜索、导出和备份",
              "提供本地邮箱扫描、云端水单候选、批量候选整理、去重和其它 Pro 自动化能力",
              "完成 App Store 订阅校验、服务端 token 发放、到期控制和安全防滥用",
              "发送您主动启用的通知、状态反馈或云端候选提醒",
              "排查故障、改进识别准确性和提升产品稳定性",
            ],
          },
          {
            title: "七、权限使用说明",
            body: ["根据您所使用的功能，AutoLedger 可能会请求以下系统权限："],
            list: [
              "<strong>照片/相册权限</strong>：读取您主动选择的截图或照片，用于账单识别。",
              "<strong>相机权限</strong>：拍摄账单、小票、票据或支付页面用于识别。",
              "<strong>麦克风/语音输入</strong>：在您主动使用语音或一句话记账时接收输入。",
              "<strong>通知权限</strong>：展示记账结果、提醒、订阅提示或云端候选状态。",
              "<strong>剪贴板访问</strong>：仅在您主动触发粘贴导入时读取文本或图片。",
              "<strong>iCloud</strong>：在您启用同步或备份时，通过 Apple iCloud 保存和同步相关数据。",
            ],
            after: ["所有权限均仅在对应功能需要时使用。您可以随时在系统设置中关闭相关权限。"],
          },
          {
            title: "八、第三方与基础设施服务",
            body: [
              "AutoLedger 会尽量在设备本地完成处理。某些您主动启用的能力需要依赖 Apple、Cloudflare 或您配置的外部服务。",
            ],
            list: [
              "Apple：App Store 订阅、StoreKit 校验、iCloud 同步 / 备份、APNs 推送和系统权限",
              "Cloudflare：getautoledger.app 网站托管、Email Routing、Worker、D1、R2 和 Queue，用于云端水单收件箱候选处理",
              "邮箱服务商：仅在您配置本地邮箱扫描时，由您的设备连接相应邮箱服务",
              "可选外部识别或 AI 服务：仅在您主动配置或开启相关能力时使用，并以完成该功能所需的最小数据为限",
            ],
          },
          {
            title: "九、数据存储、保留与删除",
            body: [
              "本地账本、酒店消费、订阅和设置由您在设备上管理。云端水单收件箱只为提供候选下载和复核而保存必要材料。",
            ],
            list: [
              "本地数据的保留时长由您决定；删除 App 或数据可能会移除本机副本",
              "iCloud 数据由您的 Apple 账号和系统设置管理",
              "本地邮箱授权可在 App 中移除，移除后会停止新的邮箱扫描并删除本机保存的授权码",
              "云端水单候选可在 App 中标记为已处理或删除；候选 PDF 和元数据会按用户操作、订阅状态或服务端清理策略删除或过期",
              "收件箱 raw token 只返回给 App 一次，服务端保存的是 token 哈希；轮换地址后旧 token 会被标记为不可继续使用",
            ],
          },
          {
            title: "十、数据安全",
            body: [
              "我们会采取合理措施保护您的信息安全，包括使用 iOS Keychain、系统权限控制、哈希化 token、最小化云端元数据、服务端订阅校验、访问 token 和传输加密等。",
              "但任何网络传输或电子存储都无法保证绝对安全。如您处理高度敏感的财务信息，请谨慎选择导入或转发的内容，并定期检查 App 设置和系统权限。",
            ],
          },
          {
            title: "十一、未成年人保护",
            body: ["AutoLedger 主要面向具有独立财务管理需求的用户设计。我们不会故意面向未满 14 周岁的未成年人提供服务或收集其个人信息。"],
          },
          {
            title: "十二、您的选择与权利",
            body: ["在适用法律允许的范围内，您可以："],
            list: [
              "查看、编辑、导出或删除您在本地保存的账单和酒店消费记录",
              "关闭照片、相机、通知、麦克风、iCloud 等系统权限",
              "移除本机邮箱授权、轮换云端专属收件箱地址或停止转发邮件",
              "通过 App Store 管理、取消或恢复 Pro 订阅",
              "停止使用相关功能或卸载 App",
            ],
          },
          {
            title: "十三、隐私政策的更新",
            body: [
              "我们可能会根据产品功能、法律法规或服务配置变化更新本隐私政策。更新后的版本将在本页面发布，并自发布之日起生效。",
              "如果更新涉及重大变更，我们会通过应用更新说明、应用内提示或其他合理方式提醒您。",
            ],
          },
          {
            title: "十四、联系我们",
            body: [
              "如果您对本隐私政策有任何疑问、建议或投诉，可通过以下方式联系开发者：",
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
      "AutoLedger 以本機優先為核心設計，並為 AutoLedger Pro 提供可選的自動化能力。本頁面說明我們會處理哪些資訊、為什麼處理，以及您可以如何管理這些資訊。",
    product: "適用產品：AutoLedger",
    updated: "最後更新：2026-07-01",
    localFirst: "本機優先，雲端能力可選",
    footer: "© 2026 AutoLedger · 隱私政策",
  });

  messages.en.privacy = {
    heading: "Privacy Policy",
    intro:
      "AutoLedger is designed to be local-first and offers optional automation through AutoLedger Pro. This page explains what information may be processed, why it is processed, and how you can manage it.",
    product: "Product: AutoLedger",
    updated: "Last updated: 2026-07-01",
    localFirst: "Local-first, optional cloud automation",
    footer: "© 2026 AutoLedger · Privacy Policy",
    sections: [
      {
        title: "1. Who we are",
        body: [
          "AutoLedger is a personal ledger app for screenshot recognition, camera recognition, quick text entry, hotel folio import, multiple ledgers, subscription tracking, monthly reports, and AutoLedger Pro automation.",
          "This policy applies to the AutoLedger app, related Apple platform versions, and service pages directly related to AutoLedger on getautoledger.app.",
        ],
      },
      {
        title: "2. Information we process",
        body: [
          "AutoLedger does not require an account by default and does not actively collect identity information such as your name, phone number, or government ID.",
          "Depending on the features you choose to use, AutoLedger may process:",
        ],
        list: [
          "Screenshots, photos, PDFs, receipts, or hotel folio attachments you import",
          "Bill text that may appear in those files, such as amount, merchant, hotel name, stay dates, time, payment channel, and currency",
          "Ledger entries, hotel stays, subscriptions, ledgers, categories, merchant aliases, notes, and tags you add or edit",
          "Text or images you provide through Shortcuts, share extensions, clipboard import, voice input, or App Intents",
          "Minimal status information needed when you enable sync, backup, Pro subscription features, or the cloud hotel folio inbox",
        ],
        callout:
          "We process information only as needed for logging, recognition, organization, sync, subscription verification, cloud candidate download, troubleshooting, and abuse prevention. We do not sell personal data or use it for advertising profiles.",
      },
      {
        title: "3. Local processing, iCloud, and device sync",
        body: [
          "AutoLedger is designed to be <strong>local-first</strong>. By default, recognition, parsing, categorization, display, and editing run on your device first, and ledger data is stored locally first.",
        ],
        list: [
          "OCR, parsing, categorization, deduplication, and monthly reports run locally by default",
          "Email app passwords or authorization codes are stored only in the local Keychain and are not uploaded to AutoLedger servers",
          "If you enable iCloud sync or backup, related data syncs through your Apple iCloud account; the developer cannot directly read your iCloud content",
          "If you turn off sync or delete local data, the app follows system capabilities and your action to stop new syncs or remove local copies",
        ],
      },
      {
        title: "4. AutoLedger Pro and subscription verification",
        body: [
          "AutoLedger Pro is offered through App Store subscriptions. Purchases, renewals, refunds, billing, and payment methods are handled by Apple. AutoLedger does not receive your card number or full payment details.",
          "To determine whether Pro is active, the app reads StoreKit entitlement status on your device. When you use server-backed features such as the cloud hotel folio inbox, the app may send Apple's signed transaction information to the AutoLedger Worker, which verifies product ID, bundle ID, revocation status, and expiration date through App Store Server API.",
        ],
        list: [
          "The server stores only the necessary subscription status, expiration time, and a hashed identifier derived from the original transaction ID",
          "When Pro expires, your saved historical ledger data, hotel stays, PDFs, and basic export features remain accessible",
          "The current version does not use App Store Server Notifications for proactive subscription lifecycle events; if added later, the same minimization and hashing principles will apply",
        ],
      },
      {
        title: "5. Local email scan and cloud hotel folio inbox",
        body: [
          "AutoLedger provides two hotel folio workflows: local email scanning and the AutoLedger Pro cloud hotel folio inbox.",
        ],
        list: [
          "Local email scanning connects to the mailbox you configure on your device and searches for likely hotel folio messages and attachments; email app passwords or authorization codes stay in the local Keychain and are not uploaded to servers",
          "The cloud hotel folio inbox only processes mail delivered to a dedicated address such as folio+token@getautoledger.app. It does not log in to your QQ, Gmail, Outlook, iCloud Mail, or other personal mailbox",
          "The cloud Worker extracts PDF attachments or necessary body folio content, stores candidate PDFs and reduced candidate metadata so the app can download and review them",
          "Cloud candidates are never automatically written to the official ledger. After download, you still review and confirm them in the app before a hotel stay or ledger entry is created",
          "APNs notifications use a generic message and deep link. They do not include hotel name, amount, order number, attachment filename, or inbox token",
        ],
        warning:
          "Forward only the hotel folio emails you want AutoLedger to process to your dedicated address. Unmatched mail is not treated as your hotel folio candidate.",
      },
      {
        title: "6. How we use information",
        body: ["Information is used only to:"],
        list: [
          "Recognize bills, screenshots, photos, PDFs, or hotel folio content you import or forward",
          "Create pending entries, hotel stays, subscriptions, monthly summaries, and related review screens",
          "Provide local email scanning, cloud folio candidates, batch candidate organization, deduplication, and other Pro automation",
          "Verify App Store subscriptions, issue service tokens, enforce expiration, and prevent abuse",
          "Send notifications, status feedback, or cloud candidate reminders when you enable them",
          "Troubleshoot issues, improve recognition quality, and improve stability",
        ],
      },
      {
        title: "7. Permissions",
        body: ["Depending on the features you use, AutoLedger may request:"],
        list: [
          "<strong>Photos access</strong>: to read screenshots or photos you select for bill recognition.",
          "<strong>Camera access</strong>: to capture receipts, bills, tickets, or payment pages.",
          "<strong>Microphone / voice input</strong>: to receive input when you actively use voice or one-sentence logging.",
          "<strong>Notifications</strong>: to show results, reminders, subscription notices, or cloud candidate status.",
          "<strong>Clipboard access</strong>: to read text or images only when you actively trigger clipboard import.",
          "<strong>iCloud</strong>: to save and sync related data through Apple iCloud when you enable sync or backup.",
        ],
        after: ["Permissions are used only when needed for the corresponding feature. You can disable them in system settings at any time."],
      },
      {
        title: "8. Third-party and infrastructure services",
        body: [
          "AutoLedger tries to process data locally whenever possible. Some features you choose to enable depend on Apple, Cloudflare, or external services you configure.",
        ],
        list: [
          "Apple: App Store subscriptions, StoreKit verification, iCloud sync / backup, APNs notifications, and system permissions",
          "Cloudflare: getautoledger.app hosting, Email Routing, Workers, D1, R2, and Queues for the cloud hotel folio inbox",
          "Email providers: only when you configure local email scanning, your device connects to the relevant mailbox provider",
          "Optional external recognition or AI services: only when you configure or enable such features, limited to the minimum data needed for that feature",
        ],
      },
      {
        title: "9. Storage, retention, and deletion",
        body: [
          "You manage local ledger data, hotel stays, subscriptions, and settings on your device. The cloud hotel folio inbox stores only the materials needed to provide candidate download and review.",
        ],
        list: [
          "Local data retention is controlled by you; deleting the app or data may remove local copies",
          "iCloud data is managed through your Apple account and system settings",
          "Local email authorization can be removed in the app, which stops new scans and removes the locally stored credential",
          "Cloud folio candidates can be marked processed or deleted in the app; candidate PDFs and metadata are deleted or expired according to your action, subscription state, or service cleanup rules",
          "The raw inbox token is returned to the app only once. The server stores a token hash, and old tokens are disabled when you rotate the address",
        ],
      },
      {
        title: "10. Data security",
        body: [
          "We take reasonable measures to protect your information, including iOS Keychain, system permission controls, token hashing, minimized cloud metadata, server-side subscription verification, access tokens, and encrypted transport.",
          "No network transmission or electronic storage method can be guaranteed absolutely secure. If your financial data is highly sensitive, choose imported or forwarded content carefully and review app settings and system permissions regularly.",
        ],
      },
      { title: "11. Children", body: ["AutoLedger is intended for users with independent personal finance needs. We do not knowingly provide services to, or collect personal information from, children under 14."] },
      {
        title: "12. Your choices and rights",
        body: ["Where permitted by law, you can:"],
        list: [
          "View, edit, export, or delete locally stored ledger and hotel stay records",
          "Disable Photos, Camera, Notifications, Microphone, iCloud, and other system permissions",
          "Remove local email authorization, rotate the cloud inbox address, or stop forwarding mail",
          "Manage, cancel, or restore Pro subscriptions through the App Store",
          "Stop using related features or uninstall the app",
        ],
      },
      {
        title: "13. Updates to this policy",
        body: [
          "We may update this policy as product features, legal requirements, or service configuration changes. Updated versions will be published on this page and become effective on publication.",
          "For material changes, we will notify you through release notes, in-app prompts, or other reasonable methods.",
        ],
      },
      {
        title: "14. Contact",
        body: [
          "If you have questions, suggestions, or complaints about this policy, contact the developer:",
          'Website: <a href="https://getautoledger.app/" target="_blank" rel="noopener noreferrer">https://getautoledger.app/</a>',
          "If dedicated support channels are added later, we will update this page.",
        ],
      },
    ],
  };

  messages.ja.privacy = {
    heading: "プライバシーポリシー",
    intro:
      "AutoLedger はローカル優先の設計を中心にしつつ、AutoLedger Pro の任意の自動化機能を提供します。このページでは、処理される可能性のある情報、その目的、利用者が管理できる内容について説明します。",
    product: "対象製品：AutoLedger",
    updated: "最終更新：2026-07-01",
    localFirst: "ローカル優先、クラウド機能は任意",
    footer: "© 2026 AutoLedger · プライバシーポリシー",
    sections: [
      {
        title: "1. 私たちについて",
        body: [
          "AutoLedger は個人向けの支出記録アプリです。スクリーンショット認識、カメラ認識、テキスト入力、ホテル明細の取り込み、複数台帳、サブスクリプション管理、月次レポート、AutoLedger Pro 自動化機能を提供します。",
          "本ポリシーは AutoLedger アプリ、関連する Apple プラットフォーム版、および getautoledger.app 上の AutoLedger 関連サービスページに適用されます。",
        ],
      },
      {
        title: "2. 処理する情報",
        body: [
          "AutoLedger は初期設定ではアカウント登録を必要とせず、氏名、電話番号、身分証番号などの個人識別情報を積極的に収集しません。",
          "利用者が選択した機能に応じて、以下の情報を処理する場合があります。",
        ],
        list: [
          "利用者が取り込むスクリーンショット、写真、PDF、レシート、ホテル明細の添付ファイル",
          "それらのファイルに含まれる可能性のある金額、店舗、ホテル名、宿泊日、時刻、支払い方法、通貨などの明細テキスト",
          "利用者が追加または編集する記録、ホテル滞在、サブスクリプション、台帳、分類、店舗別名、メモ、タグ",
          "ショートカット、共有拡張、クリップボード、音声入力、App Intents を通じて提供されるテキストまたは画像",
          "同期、バックアップ、Pro サブスクリプション機能、クラウドホテル明細受信箱を有効にした場合に必要な最小限の状態情報",
        ],
        callout:
          "記録、認識、整理、同期、サブスクリプション確認、クラウド候補のダウンロード、不具合調査、不正利用防止に必要な範囲でのみ処理します。個人データを販売したり、広告プロファイルに利用したりしません。",
      },
      {
        title: "3. ローカル処理、iCloud、端末同期",
        body: [
          "AutoLedger は<strong>ローカル優先</strong>の設計です。初期設定では、認識、解析、分類、表示、編集は端末上で優先的に実行され、記録データもまず端末内に保存されます。",
        ],
        list: [
          "OCR、解析、分類、重複排除、月次レポートは初期設定ではローカルで実行されます",
          "メールのアプリパスワードや認可コードはローカル Keychain のみに保存され、AutoLedger サーバーへアップロードされません",
          "iCloud 同期またはバックアップを有効にした場合、関連データは利用者の Apple iCloud アカウントを通じて同期されます。開発者が iCloud の内容を直接読むことはできません",
          "同期を無効化したりローカルデータを削除した場合、アプリはシステム機能と利用者の操作に従って新しい同期を停止、またはローカルコピーを削除します",
        ],
      },
      {
        title: "4. AutoLedger Pro とサブスクリプション確認",
        body: [
          "AutoLedger Pro は App Store のサブスクリプションとして提供されます。購入、更新、返金、請求、支払い方法は Apple が処理します。AutoLedger がカード番号や完全な支払い情報を受け取ることはありません。",
          "Pro の有効性を判断するため、アプリは端末上の StoreKit 権利情報を読み取ります。クラウドホテル明細受信箱などサーバー側機能を利用する場合、アプリは Apple が署名した取引情報を AutoLedger Worker に送信することがあります。Worker は App Store Server API を通じて商品 ID、Bundle ID、取り消し状態、有効期限を確認します。",
        ],
        list: [
          "サーバーには必要なサブスクリプション状態、有効期限、元取引 ID から生成したハッシュ識別子のみを保存します",
          "Pro の期限が切れても、保存済みの履歴記録、ホテル滞在、PDF、基本エクスポート機能は引き続き利用できます",
          "現在のバージョンでは App Store Server Notifications によるサブスクリプションライフサイクルの能動受信は使用していません。後日追加する場合も、同じ最小化とハッシュ化の原則に従います",
        ],
      },
      {
        title: "5. ローカルメールスキャンとクラウドホテル明細受信箱",
        body: [
          "AutoLedger には、ローカルメールスキャンと AutoLedger Pro クラウドホテル明細受信箱という二つのホテル明細ワークフローがあります。",
        ],
        list: [
          "ローカルメールスキャンは端末上で設定したメールボックスに接続し、ホテル明細らしいメールと添付ファイルを探します。メールのアプリパスワードや認可コードはローカル Keychain に保存され、サーバーへアップロードされません",
          "クラウドホテル明細受信箱は folio+token@getautoledger.app のような専用アドレスに届いたメールのみを処理します。QQ、Gmail、Outlook、iCloud Mail などの個人メールボックスへログインすることはありません",
          "クラウド Worker は PDF 添付ファイルまたは必要な本文明細を抽出し、アプリがダウンロードして確認できるよう、候補 PDF と最小化された候補メタデータを保存します",
          "クラウド候補は正式な台帳へ自動登録されません。ダウンロード後も、利用者がアプリ内で確認してからホテル滞在または記録が作成されます",
          "APNs 通知には一般的なメッセージと deep link のみを使用し、ホテル名、金額、注文番号、添付ファイル名、受信箱 token は含めません",
        ],
        warning:
          "AutoLedger に処理させたいホテル明細メールだけを専用アドレスへ転送してください。専用アドレスに一致しないメールはホテル明細候補として処理されません。",
      },
      {
        title: "6. 情報の利用目的",
        body: ["情報は以下の目的にのみ使用します。"],
        list: [
          "利用者が取り込む、または転送する明細、スクリーンショット、写真、PDF、ホテル明細を認識するため",
          "確認待ち記録、ホテル滞在、サブスクリプション、月次サマリー、確認画面を作成するため",
          "ローカルメールスキャン、クラウド明細候補、候補の一括整理、重複排除、その他 Pro 自動化機能を提供するため",
          "App Store サブスクリプション確認、サービストークン発行、有効期限管理、不正利用防止のため",
          "利用者が有効にした通知、状態フィードバック、クラウド候補リマインダーを送信するため",
          "不具合調査、認識品質の改善、安定性向上のため",
        ],
      },
      {
        title: "7. 権限について",
        body: ["利用する機能に応じて、AutoLedger は以下のシステム権限を要求する場合があります。"],
        list: [
          "<strong>写真/アルバム権限</strong>：選択したスクリーンショットや写真を読み取り、明細内容を認識するため。",
          "<strong>カメラ権限</strong>：レシート、明細、チケット、支払い画面を撮影するため。",
          "<strong>マイク/音声入力</strong>：音声入力または一文記録を利用者が明示的に使用する場合に入力を受け取るため。",
          "<strong>通知権限</strong>：記録結果、リマインダー、サブスクリプション通知、クラウド候補状態を表示するため。",
          "<strong>クリップボードアクセス</strong>：利用者が貼り付け取り込みを明示的に実行した場合のみ、テキストや画像を読み取るため。",
          "<strong>iCloud</strong>：同期またはバックアップを有効にした場合、Apple iCloud を通じて関連データを保存・同期するため。",
        ],
        after: ["すべての権限は該当機能に必要な場合のみ使用されます。システム設定からいつでも無効にできます。"],
      },
      {
        title: "8. 第三者およびインフラサービス",
        body: [
          "AutoLedger は可能な限り端末内で処理します。一部の任意機能は、Apple、Cloudflare、または利用者が設定した外部サービスに依存します。",
        ],
        list: [
          "Apple：App Store サブスクリプション、StoreKit 確認、iCloud 同期 / バックアップ、APNs 通知、システム権限",
          "Cloudflare：getautoledger.app のホスティング、Email Routing、Workers、D1、R2、Queues によるクラウドホテル明細受信箱",
          "メールプロバイダ：ローカルメールスキャンを設定した場合のみ、端末が該当メールサービスへ接続します",
          "任意の外部認識または AI サービス：利用者が設定または有効化した場合のみ使用し、該当機能に必要な最小限のデータに限定します",
        ],
      },
      {
        title: "9. 保存、保持、削除",
        body: [
          "ローカルの記録データ、ホテル滞在、サブスクリプション、設定は利用者が端末上で管理します。クラウドホテル明細受信箱は、候補のダウンロードと確認に必要な素材のみを保存します。",
        ],
        list: [
          "ローカルデータの保持期間は利用者が管理します。アプリやデータを削除するとローカルコピーも削除される場合があります",
          "iCloud データは利用者の Apple アカウントとシステム設定で管理されます",
          "ローカルメール認可はアプリ内で削除でき、削除すると新しいスキャンが停止し、ローカルに保存された認証情報も削除されます",
          "クラウド明細候補はアプリ内で処理済みまたは削除にできます。候補 PDF とメタデータは利用者の操作、サブスクリプション状態、またはサービスのクリーンアップ規則に従って削除または期限切れになります",
          "raw 受信箱 token はアプリに一度だけ返されます。サーバーは token ハッシュを保存し、アドレスをローテーションすると古い token は無効化されます",
        ],
      },
      {
        title: "10. データの安全性",
        body: [
          "iOS Keychain、システム権限、token のハッシュ化、クラウドメタデータの最小化、サーバー側サブスクリプション確認、アクセストークン、暗号化通信など、合理的な保護措置を講じます。",
          "ただし、ネットワーク送信や電子保存に絶対的な安全はありません。機密性の高い財務情報を扱う場合は、取り込みまたは転送する内容を慎重に選び、アプリ設定とシステム権限を定期的に確認してください。",
        ],
      },
      { title: "11. 未成年者", body: ["AutoLedger は独立した家計管理ニーズを持つ利用者向けです。14 歳未満の未成年者に意図的にサービスを提供したり、個人情報を収集したりすることはありません。"] },
      {
        title: "12. 利用者の選択肢と権利",
        body: ["適用法で認められる範囲で、利用者は以下を行えます。"],
        list: [
          "端末内に保存された記録とホテル滞在を確認、編集、エクスポート、削除する",
          "写真、カメラ、通知、マイク、iCloud などのシステム権限を無効化する",
          "ローカルメール認可を削除し、クラウド受信箱アドレスをローテーションし、メール転送を停止する",
          "App Store を通じて Pro サブスクリプションを管理、キャンセル、復元する",
          "関連機能の利用を停止、またはアプリをアンインストールする",
        ],
      },
      {
        title: "13. ポリシーの更新",
        body: [
          "製品機能、法令、サービス構成の変更に応じて本ポリシーを更新する場合があります。更新版は本ページに掲載され、掲載時点から有効になります。",
          "重要な変更がある場合は、更新説明、アプリ内表示、またはその他の合理的な方法でお知らせします。",
        ],
      },
      {
        title: "14. お問い合わせ",
        body: [
          "本ポリシーに関する質問、提案、苦情がある場合は、開発者までご連絡ください。",
          'Web サイト：<a href="https://getautoledger.app/" target="_blank" rel="noopener noreferrer">https://getautoledger.app/</a>',
          "専用サポート窓口などを追加した場合は、本ページでお知らせします。",
        ],
      },
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
