(function () {
  const locales = ["zh-Hans", "en"];
  const localeNames = {
    "zh-Hans": "简中",
    en: "EN",
  };

  const messages = {
    "zh-Hans": {
      meta: {
        homeTitle: "darkrio326 Apps · AutoLedger 与 AutoNotice",
        homeDescription: "darkrio326 Apps 的轻量产品入口，包含 AutoLedger 与 AutoNotice 的产品、技术支持和隐私政策链接。",
        autonoticeTitle: "AutoNotice - 自动提醒",
        autonoticeDescription: "AutoNotice 是一个轻量模块化提醒 App。0.1 先从 Weather Notice 开始，后续扩展更多提醒模块与 Pro 自定义模块。",
        autonoticeSupportTitle: "AutoNotice 技术支持",
        autonoticeSupportDescription: "AutoNotice 技术支持页面，包含常见问题、反馈信息和联系邮箱。",
        autonoticePrivacyTitle: "AutoNotice 隐私政策",
        autonoticePrivacyDescription: "AutoNotice 隐私政策，说明位置、通知、天气提醒和支持型 IAP 相关数据处理方式。",
      },
      nav: {
        appHome: "Apps",
        home: "首页",
        apps: "应用",
        autoledgerSupport: "AutoLedger 支持",
        autonoticeSupport: "AutoNotice 支持",
        support: "技术支持",
        privacy: "隐私政策",
        contact: "联系开发者",
      },
      action: {
        openAutoLedger: "打开 AutoLedger",
        openAutoNotice: "打开 AutoNotice",
        product: "产品",
        support: "支持",
        privacy: "隐私",
        contact: "联系",
        getHelp: "获取帮助",
        copyEmail: "复制支持邮箱",
      },
      state: {
        ready: "就绪",
        copied: "已复制",
      },
      footer: {
        autoledgerPrivacy: "AutoLedger 隐私",
        autonoticePrivacy: "AutoNotice 隐私",
      },
      home: {
        eyebrow: "独立原生工具",
        heroTitle: "处理日常小摩擦的轻量 App。",
        heroLead: "darkrio326 构建贴近日常流程的 Apple 平台工具：少打字也能记账，在小问题变成待办之前收到合适的提醒。",
        snapshotAutoLedger: "从截图开始的个人账本",
        snapshotAutoNotice: "轻量模块化提醒工具",
        snapshotSupportTitle: "支持入口清晰可见",
        snapshotSupportBody: "每个应用都保留产品、技术支持与隐私政策链接。",
        appsEyebrow: "当前产品",
        appsTitle: "两个一等入口，一个克制主页。",
        appsIntro: "根首页只承担清晰分流，不做冗长营销漏斗：每张产品卡说明应用定位、当前支持路径和隐私政策路径。",
        autoledgerCategory: "财务工具",
        autoledgerStatus: "已上线",
        autoledgerDesc: "一个围绕截图导入、快捷指令和本机整理构建的个人记账 App。适合想保留消费记录、但不想把每次消费都变成手填表单的人。",
        autoledgerPoint1: "记录入口：截图、相机或快速文本。",
        autoledgerPoint2: "账本工作台：流水、分类、报表、订阅和酒店账单。",
        autoledgerPoint3: "隐私姿态：本地优先处理，并提供清晰的支持与政策页面。",
        autonoticeCategory: "提醒工具",
        autonoticeStatus: "新应用",
        autonoticeDesc: "一个面向通知流程的轻量 iOS 提醒 App。0.1 先落地 Weather Notice，后续可以继续扩展更多提醒模块，并在审计闭环后加入 Pro 自定义模块。",
        autonoticePoint1: "0.1 Weather Notice：位置、降雨阈值、静默时间和冷却时间。",
        autonoticePoint2: "0.2+ 模块路径：新增提醒类型时，不改变 AutoNotice 的产品身份。",
        autonoticePoint3: "Pro 方向：审计闭环成熟后，用买断解锁用户自定义提醒模块。",
        standardsEyebrow: "产品标准",
        standardsTitle: "为静态托管和真实支持流程准备。",
        standardStaticTitle: "默认静态",
        standardStaticBody: "主页保持静态 HTML/CSS，仅保留极轻量的复制邮箱增强，不依赖构建步骤。",
        standardRoutesTitle: "稳定路径",
        standardRoutesBody: "AutoNotice 的产品、支持、隐私、图标资源和 redirect 路径保持独立可追踪。",
        standardNativeTitle: "原生 App 克制感",
        standardNativeBody: "布局优先清晰层级、紧凑控件、产品卡和直接链接，而不是泛化的落地页填充。",
        supportTitle: "需要应用支持？",
        supportBody: "可以打开上方产品支持页，也可以复制统一开发者支持邮箱。",
      },
      autonotice: {
        badge: "AutoNotice 0.1 · Weather Notice",
        heroTitle: "一个轻量、可扩展的提醒工具。",
        heroLead: "AutoNotice 把提醒拆成一个个小模块。0.1 先做 Weather Notice：当你选择的位置在未来 1-2 小时内可能下雨时，通过通知提前提醒你。",
        signal1Title: "当前位置或城市",
        signal1Body: "可使用当前位置，也可手动选择城市。",
        signal2Title: "少打扰",
        signal2Body: "支持阈值、冷却时间和静默时间。",
        signal3Title: "模块化扩展",
        signal3Body: "未来提醒类型可以作为 Notice 模块增加。",
        sectionTitle: "它不是另一个天气信息流。",
        sectionLead: "AutoNotice 不追求复杂地图、资讯流或连续刷新的面板。它只处理一类更具体的问题：重要变化发生前，把提醒送到你面前。",
        weatherOverviewTitle: "天气概览",
        weatherOverviewBody: "在 App 内查看当前位置或所选城市的天气概览，快速确认接下来是否有降雨风险。",
        rulesTitle: "提醒规则",
        rulesBody: "配置降雨提醒开关、概率阈值、冷却时间和静默时间，并同步到 AutoNotice WeatherWorker。",
        historyTitle: "通知历史",
        historyBody: "查看最近的提醒记录，确认哪些提醒已经发送，以及提醒触发的大致原因。",
        workerTitle: "独立提醒链路",
        workerBody: "AutoNotice 使用独立 WeatherWorker 处理设备注册、天气规则、天气概览、通知日志和测试通知。Common API 只用于手动选择城市这类共享基础资料。",
        proTitle: "从模块到 Pro",
        proBody: "0.2 之后可以继续增加新的提醒模块；等审计、投递和用户配置闭环稳定后，Pro 买断可以用于解锁用户自定义 Notice 模块。",
      },
      support: {
        eyebrow: "AutoNotice Support",
        title: "技术支持",
        lead: "如果你在使用 AutoNotice 时遇到天气概览、位置、通知、提醒规则或支持型 IAP 相关问题，可以先查看下方说明，也可以直接通过邮箱联系。",
        version: "适用版本：0.1",
        updated: "最后更新：2026-07-03",
        contactTitle: "联系邮箱",
        contactBody: "如需反馈问题、提交建议或说明审核测试情况，请通过邮箱联系：",
        cards: [
          {
            title: "通知没有到达怎么办？",
            items: [
              "确认系统通知权限已经允许 AutoNotice 发送通知。",
              "确认已选择位置或城市，并已开启天气提醒。",
              "进入天气提醒模块后，使用“强制更新提醒规则”同步当前规则。",
              "TestFlight 与 App Store 版本使用 APNs production；Xcode 直接运行的 Debug 版本使用 APNs sandbox。",
            ],
          },
          {
            title: "天气概览或城市不准确怎么办？",
            items: [
              "使用当前位置时，请确认系统定位权限可用。",
              "手动选择城市时，AutoNotice 会使用 Common API 的城市基础目录及经纬度。",
              "天气概览由 AutoNotice WeatherWorker 提供，偶发网络问题可稍后重试。",
            ],
          },
          {
            title: "反馈时建议提供的信息",
            items: [
              "设备型号、iOS 版本和 AutoNotice 版本号。",
              "是否来自 TestFlight、App Store 或 Xcode Debug 版本。",
              "问题发生前的位置选择、提醒开关、阈值、冷却时间和静默时间设置。",
              "如方便，可附带脱敏后的界面截图或错误提示。",
            ],
          },
          {
            title: "支持型 IAP",
            items: [
              "AutoNotice 的支持型 IAP 是自愿支持开发者的 consumable 商品。",
              "购买不会解锁额外功能，也不会影响天气提醒、通知投递、历史记录或设置。",
              "购买、退款和付款方式由 Apple App Store 处理。",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "AutoNotice Privacy Policy",
        title: "隐私政策",
        lead: "AutoNotice 是一个轻量自动提醒 App。第一版专注天气提醒，本政策说明我们会处理哪些信息、为什么处理，以及你可以如何管理这些信息。",
        product: "适用产品：AutoNotice",
        updated: "最后更新：2026-07-03",
        noAccount: "无需账号",
        sections: [
          {
            title: "一、我们是谁",
            body: [
              "AutoNotice 是 darkrio Studio 提供的自动提醒工具。当前版本主要提供天气提醒、天气概览、位置选择、通知历史、测试通知和可选支持开发者 IAP。",
              "本政策适用于 AutoNotice App 以及 app.darkrio326.top 上与 AutoNotice 直接相关的支持页面。",
            ],
          },
          {
            title: "二、我们处理哪些信息",
            body: [
              "AutoNotice 不要求注册账号，也不会主动收集姓名、手机号、身份证号等个人身份信息。",
              "根据你主动使用的功能，AutoNotice 可能处理以下信息：",
            ],
            list: [
              "你选择的当前位置或手动选择城市对应的经纬度、城市名称和时区。",
              "天气提醒规则，包括提醒开关、降雨阈值、冷却时间和静默时间。",
              "用于发送通知的 APNs device token、Bundle ID、App 版本和 APNs environment。",
              "天气概览、提醒同步、测试通知和通知日志所需的最小请求状态。",
              "可选支持型 IAP 的 StoreKit 商品状态、购买结果和本机记录。",
            ],
            bodyAfter: [
              "我们只在提供天气提醒、发送通知、展示历史记录、排查故障和防滥用所必需的范围内处理信息，不出售个人数据，也不用于广告画像。",
            ],
          },
          {
            title: "三、位置与天气数据",
            list: [
              "当你选择“当前位置”时，App 会请求系统定位权限，用于获得提醒规则所需的大致位置。",
              "当你手动选择城市时，App 可调用 Common API 的国家/城市基础目录，使用城市记录中的经纬度写入本机天气提醒规则。",
              "AutoNotice WeatherWorker 会基于经纬度向 Apple WeatherKit 查询天气，并判断是否需要发送提醒。",
              "AutoNotice 不提供社交定位、实时轨迹分享或广告定位能力。",
            ],
          },
          {
            title: "四、通知与 WeatherWorker",
            body: ["AutoNotice 使用独立 WeatherWorker 处理设备注册、天气规则、天气概览、通知日志、测试通知和定时检查。WeatherWorker 运行在 Cloudflare 基础设施上。"],
            list: [
              "Debug / Xcode 直接运行版本注册 APNs development token。",
              "TestFlight / App Store 版本注册 APNs production token。",
              "通知内容用于提醒天气变化，不包含广告内容。",
              "你可以在 iOS 系统设置中关闭 AutoNotice 通知权限。",
            ],
          },
          {
            title: "五、支持型 IAP",
            body: ["AutoNotice 提供可选的支持开发者 consumable IAP。购买、退款、付款方式和交易基础记录由 Apple App Store 处理，AutoNotice 不接触你的银行卡号或完整付款信息。"],
            list: [
              "支持型 IAP 不解锁额外功能。",
              "不购买也可以使用天气提醒、通知、历史记录和设置。",
              "App 可能在本机记录最近一次支持商品和支持时间，用于展示感谢状态。",
            ],
          },
          {
            title: "六、数据保留与删除",
            list: [
              "本机设置、提醒规则、位置偏好和历史记录由你在设备上管理。",
              "删除 App 或清除 App 数据可能会移除本机副本。",
              "关闭通知权限后，系统将阻止 AutoNotice 继续展示通知。",
              "如需请求排查或删除服务端关联状态，可通过支持邮箱联系开发者。",
            ],
          },
          {
            title: "七、第三方与基础设施服务",
            list: [
              "Apple：WeatherKit、APNs、StoreKit、App Store 和系统权限。",
              "Cloudflare：app.darkrio326.top 页面托管，以及 AutoNotice WeatherWorker、D1 等提醒服务基础设施。",
              "Common API：仅用于手动城市选择这类共享只读基础资料查询。",
            ],
          },
          {
            title: "八、未成年人保护",
            body: ["AutoNotice 面向一般工具类使用场景设计。我们不会故意面向未满 14 周岁的未成年人提供服务或收集其个人信息。"],
          },
          {
            title: "九、政策更新",
            body: ["我们可能会根据产品功能、法律法规或服务配置变化更新本隐私政策。更新后的版本将在本页面发布，并自发布之日起生效。"],
          },
          {
            title: "十、联系我们",
            body: ["如果你对本隐私政策或 AutoNotice 的数据处理有任何疑问、建议或投诉，可以通过以下方式联系开发者："],
            contact: true,
          },
        ],
      },
    },
    en: {
      meta: {
        homeTitle: "darkrio326 Apps · AutoLedger and AutoNotice",
        homeDescription: "A quiet product hub for darkrio326 apps, including AutoLedger and AutoNotice with product, support, and privacy links.",
        autonoticeTitle: "AutoNotice - Lightweight Notices",
        autonoticeDescription: "AutoNotice is a lightweight modular reminder app. Version 0.1 starts with Weather Notice, with room for more notice modules and Pro custom modules.",
        autonoticeSupportTitle: "AutoNotice Support",
        autonoticeSupportDescription: "AutoNotice support page with common questions, feedback guidance, and contact information.",
        autonoticePrivacyTitle: "AutoNotice Privacy Policy",
        autonoticePrivacyDescription: "AutoNotice privacy policy covering location, notifications, weather notices, and support IAP data handling.",
      },
      nav: {
        appHome: "Apps",
        home: "Home",
        apps: "Apps",
        autoledgerSupport: "AutoLedger support",
        autonoticeSupport: "AutoNotice support",
        support: "Support",
        privacy: "Privacy",
        contact: "Contact developer",
      },
      action: {
        openAutoLedger: "Open AutoLedger",
        openAutoNotice: "Open AutoNotice",
        product: "Product",
        support: "Support",
        privacy: "Privacy",
        contact: "Contact",
        getHelp: "Get help",
        copyEmail: "Copy support email",
      },
      state: {
        ready: "Ready",
        copied: "Copied",
      },
      footer: {
        autoledgerPrivacy: "AutoLedger privacy",
        autonoticePrivacy: "AutoNotice privacy",
      },
      home: {
        eyebrow: "Independent native utilities",
        heroTitle: "Small apps for everyday friction.",
        heroLead: "darkrio326 builds focused Apple-platform tools that stay close to real routines: capture spending with less typing, or get the right reminder before a small problem becomes one more thing to remember.",
        snapshotAutoLedger: "Screenshot-led personal ledger",
        snapshotAutoNotice: "Lightweight modular reminders",
        snapshotSupportTitle: "Support stays visible",
        snapshotSupportBody: "Every listed app exposes product, support, and privacy links.",
        appsEyebrow: "Live app entries",
        appsTitle: "Two first-class products, one quiet hub.",
        appsIntro: "The root page is intentionally a launch surface, not a long marketing funnel: each product card gives the app promise, the current support path, and the privacy path.",
        autoledgerCategory: "Finance utility",
        autoledgerStatus: "Available",
        autoledgerDesc: "A privacy-first personal ledger app built around screenshot import, Shortcuts, and on-device reasoning. It is for people who want spending records without turning every purchase into a manual form.",
        autoledgerPoint1: "Capture flow: screenshot, camera, or quick text entry.",
        autoledgerPoint2: "Ledger workspace: transactions, categories, reports, subscriptions, and hotel folios.",
        autoledgerPoint3: "Privacy posture: local-first processing with clear support and policy pages.",
        autonoticeCategory: "Reminder utility",
        autonoticeStatus: "New",
        autonoticeDesc: "A lightweight iOS reminder app built around small, modular notice workflows. Version 0.1 ships Weather Notice first, while later releases can add more notice modules and Pro custom modules.",
        autonoticePoint1: "0.1 Weather Notice: location choice, rain probability threshold, quiet hours, and cooldown windows.",
        autonoticePoint2: "0.2+ module path: new notice types can be added without changing the product identity.",
        autonoticePoint3: "Pro direction: a one-time purchase can unlock user-defined notice modules after the audit loop is ready.",
        standardsEyebrow: "Product standards",
        standardsTitle: "Built for static hosting and real support flows.",
        standardStaticTitle: "Static by default",
        standardStaticBody: "The hub stays static HTML/CSS with only a tiny support-email enhancement. No build step is required.",
        standardRoutesTitle: "Stable routes",
        standardRoutesBody: "AutoNotice keeps its product, support, privacy, icon asset, and redirect paths independent and traceable.",
        standardNativeTitle: "Native-app restraint",
        standardNativeBody: "The layout favors clear hierarchy, compact controls, product cards, and direct links over broad launch-page filler.",
        supportTitle: "Need help with an app?",
        supportBody: "Use the product support pages above, or copy the shared developer support email.",
      },
      autonotice: {
        badge: "AutoNotice 0.1 · Weather Notice",
        heroTitle: "A lightweight, extensible notice tool.",
        heroLead: "AutoNotice breaks reminders into small modules. Version 0.1 starts with Weather Notice: when rain may arrive at your selected location in the next 1-2 hours, AutoNotice can notify you early.",
        signal1Title: "Current location or city",
        signal1Body: "Use your current location or manually choose a city.",
        signal2Title: "Less interruption",
        signal2Body: "Set thresholds, cooldown windows, and quiet hours.",
        signal3Title: "Modular expansion",
        signal3Body: "Future reminder types can be added as Notice modules.",
        sectionTitle: "It is not another weather feed.",
        sectionLead: "AutoNotice does not try to be a complex map, news stream, or constantly refreshed dashboard. It handles one more specific job: sending the right notice before a meaningful change reaches you.",
        weatherOverviewTitle: "Weather overview",
        weatherOverviewBody: "Check the weather for your current location or selected city and quickly see upcoming rain risk.",
        rulesTitle: "Notice rules",
        rulesBody: "Configure the rain notice switch, probability threshold, cooldown, and quiet hours, then sync the rule to AutoNotice WeatherWorker.",
        historyTitle: "Notice history",
        historyBody: "Review recent notices, confirm what was sent, and understand the rough reason behind a trigger.",
        workerTitle: "Independent notice pipeline",
        workerBody: "AutoNotice uses a dedicated WeatherWorker for device registration, weather rules, overviews, notification logs, and test notifications. Common API is reserved for shared basics like manual city selection.",
        proTitle: "From modules to Pro",
        proBody: "After 0.2, more notice modules can be added. Once audit, delivery, and user-configuration loops are stable, a one-time Pro purchase can unlock user-defined Notice modules.",
      },
      support: {
        eyebrow: "AutoNotice Support",
        title: "Support",
        lead: "If you run into issues with weather overview, location, notifications, notice rules, or support IAP, start with the notes below or contact the developer by email.",
        version: "Applies to version: 0.1",
        updated: "Last updated: July 3, 2026",
        contactTitle: "Contact email",
        contactBody: "For bug reports, suggestions, or review-test details, contact:",
        cards: [
          {
            title: "What if notifications do not arrive?",
            items: [
              "Confirm iOS notification permission allows AutoNotice to send notifications.",
              "Confirm you have selected a location or city and enabled Weather Notice.",
              "Open the Weather Notice module and use Force Update Notice Rules to sync the current rule.",
              "TestFlight and App Store builds use APNs production; Debug builds run directly from Xcode use APNs sandbox.",
            ],
          },
          {
            title: "What if weather overview or city data looks wrong?",
            items: [
              "When using current location, confirm iOS location permission is available.",
              "When choosing a city manually, AutoNotice uses Common API city basics and coordinates.",
              "Weather overview is provided by AutoNotice WeatherWorker. For occasional network issues, try again later.",
            ],
          },
          {
            title: "Helpful details for feedback",
            items: [
              "Device model, iOS version, and AutoNotice version.",
              "Whether the build came from TestFlight, App Store, or Xcode Debug.",
              "Location choice, notice switch, threshold, cooldown, and quiet-hours settings before the issue.",
              "If possible, include a redacted screenshot or error message.",
            ],
          },
          {
            title: "Support IAP",
            items: [
              "AutoNotice support IAP items are voluntary consumable products for supporting development.",
              "Purchases do not unlock extra features and do not affect weather notices, delivery, history, or settings.",
              "Purchases, refunds, and payment methods are handled by Apple App Store.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "AutoNotice Privacy Policy",
        title: "Privacy Policy",
        lead: "AutoNotice is a lightweight reminder app. Version 0.1 focuses on Weather Notice. This policy explains what information is processed, why it is processed, and how you can manage it.",
        product: "Product: AutoNotice",
        updated: "Last updated: July 3, 2026",
        noAccount: "No account required",
        sections: [
          {
            title: "1. Who We Are",
            body: [
              "AutoNotice is an automatic reminder tool provided by darkrio Studio. The current version provides Weather Notice, weather overview, location selection, notification history, test notifications, and optional support IAP.",
              "This policy applies to the AutoNotice app and the AutoNotice-related support pages on app.darkrio326.top.",
            ],
          },
          {
            title: "2. Information We Process",
            body: [
              "AutoNotice does not require account registration and does not intentionally collect names, phone numbers, government IDs, or similar identity information.",
              "Depending on the features you choose to use, AutoNotice may process:",
            ],
            list: [
              "Coordinates, city name, and time zone for your current location or manually selected city.",
              "Weather notice rules, including enable state, rain threshold, cooldown, and quiet hours.",
              "APNs device token, Bundle ID, app version, and APNs environment used to send notifications.",
              "Minimum request state needed for weather overview, rule sync, test notifications, and notification logs.",
              "StoreKit product state, purchase result, and local records for optional support IAP.",
            ],
            bodyAfter: [
              "We process information only as needed to provide weather notices, send notifications, show history, troubleshoot issues, and prevent abuse. We do not sell personal data or use it for advertising profiles.",
            ],
          },
          {
            title: "3. Location and Weather Data",
            list: [
              "When you choose Current Location, the app requests iOS location permission to obtain the approximate location needed for notice rules.",
              "When you manually choose a city, the app may call Common API country/city basics and use the city coordinates for local weather notice rules.",
              "AutoNotice WeatherWorker uses coordinates to query Apple WeatherKit and decide whether a notice should be sent.",
              "AutoNotice does not provide social location, live route sharing, or advertising-location features.",
            ],
          },
          {
            title: "4. Notifications and WeatherWorker",
            body: ["AutoNotice uses a dedicated WeatherWorker for device registration, weather rules, weather overview, notification logs, test notifications, and scheduled checks. WeatherWorker runs on Cloudflare infrastructure."],
            list: [
              "Debug builds run directly from Xcode register APNs development tokens.",
              "TestFlight and App Store builds register APNs production tokens.",
              "Notification content is used for weather-change reminders and does not contain ads.",
              "You can disable AutoNotice notification permission in iOS Settings.",
            ],
          },
          {
            title: "5. Support IAP",
            body: ["AutoNotice offers optional consumable IAP items to support development. Purchases, refunds, payment methods, and base transaction records are handled by Apple App Store. AutoNotice does not receive your card number or full payment information."],
            list: [
              "Support IAP does not unlock extra features.",
              "Weather notices, notifications, history, and settings remain usable without purchase.",
              "The app may keep a local record of the latest support item and time to show a thank-you state.",
            ],
          },
          {
            title: "6. Retention and Deletion",
            list: [
              "Local settings, notice rules, location preference, and history are managed on your device.",
              "Deleting the app or clearing app data may remove local copies.",
              "Disabling notification permission prevents iOS from showing new AutoNotice notifications.",
              "To request troubleshooting or deletion of service-side associated state, contact the developer by email.",
            ],
          },
          {
            title: "7. Third Parties and Infrastructure",
            list: [
              "Apple: WeatherKit, APNs, StoreKit, App Store, and system permissions.",
              "Cloudflare: app.darkrio326.top hosting, AutoNotice WeatherWorker, D1, and related reminder infrastructure.",
              "Common API: shared read-only basics such as manual city selection.",
            ],
          },
          {
            title: "8. Children",
            body: ["AutoNotice is designed as a general utility. We do not knowingly provide services to or collect personal information from children under 14."],
          },
          {
            title: "9. Updates",
            body: ["We may update this policy as product features, laws, or service configuration change. Updates will be posted on this page and take effect from the posting date."],
          },
          {
            title: "10. Contact Us",
            body: ["If you have questions, suggestions, or complaints about this policy or AutoNotice data handling, contact the developer:"],
            contact: true,
          },
        ],
      },
    },
  };

  const storageKey = "darkrio.apphome.locale";

  function get(obj, path) {
    return path.split(".").reduce((value, key) => (value && value[key] != null ? value[key] : undefined), obj);
  }

  function normalizeLocale(value) {
    if (!value) return null;
    const lower = value.toLowerCase();
    if (lower.startsWith("zh")) return "zh-Hans";
    if (lower.startsWith("en")) return "en";
    return null;
  }

  function preferredLocale() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLocale(params.get("lang"));
    if (fromQuery) return fromQuery;
    const saved = normalizeLocale(localStorage.getItem(storageKey));
    if (saved) return saved;
    const browserLocale = (navigator.languages || [navigator.language]).map(normalizeLocale).find(Boolean);
    return browserLocale || "zh-Hans";
  }

  function pageMetaKey() {
    const path = window.location.pathname;
    if (path.startsWith("/autonotice/support")) return "autonoticeSupport";
    if (path.startsWith("/autonotice/privacy")) return "autonoticePrivacy";
    if (path.startsWith("/autonotice")) return "autonotice";
    return "home";
  }

  function renderSupport(locale) {
    const data = (messages[locale] || messages["zh-Hans"]).support;
    const container = document.querySelector("[data-autonotice-support-sections]");
    if (!container || !data) return;

    const cards = data.cards
      .map((card) => {
        const items = card.items.map((item) => `<li>${item}</li>`).join("");
        return `<article class="card wide"><h3>${card.title}</h3><ul>${items}</ul></article>`;
      })
      .join("");

    container.innerHTML = `
      <section class="doc-card">
        <h2>${data.contactTitle}</h2>
        <p>${data.contactBody}</p>
        <p><a class="contact-box" href="mailto:support@darkrio326.top">support@darkrio326.top</a></p>
      </section>
      <section class="grid section" aria-label="Support topics">
        ${cards}
      </section>
    `;
  }

  function renderPrivacy(locale) {
    const data = (messages[locale] || messages["zh-Hans"]).privacy;
    const container = document.querySelector("[data-autonotice-privacy-sections]");
    if (!container || !data) return;

    container.innerHTML = data.sections
      .map((section) => {
        const body = (section.body || []).map((text) => `<p>${text}</p>`).join("");
        const list = section.list ? `<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
        const bodyAfter = (section.bodyAfter || []).map((text) => `<p>${text}</p>`).join("");
        const contact = section.contact
          ? '<p><a class="contact-box" href="mailto:support@darkrio326.top">support@darkrio326.top</a></p>'
          : "";
        return `<section class="doc-card"><h2>${section.title}</h2>${body}${list}${bodyAfter}${contact}</section>`;
      })
      .join("");
  }

  function applyLocale(locale) {
    const current = messages[locale] ? locale : "zh-Hans";
    const dict = messages[current];
    document.documentElement.lang = current;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = get(dict, node.getAttribute("data-i18n"));
      if (value != null) node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const value = get(dict, node.getAttribute("data-i18n-html"));
      if (value != null) node.innerHTML = value;
    });

    document.querySelectorAll("[data-locale-select]").forEach((select) => {
      if (!select.options.length) {
        locales.forEach((item) => {
          const option = document.createElement("option");
          option.value = item;
          option.textContent = localeNames[item];
          select.appendChild(option);
        });
      }
      select.value = current;
      select.setAttribute("aria-label", `Language: ${localeNames[current]}`);
    });

    const metaKey = pageMetaKey();
    const title = dict.meta[`${metaKey}Title`];
    const description = dict.meta[`${metaKey}Description`];
    if (title) document.title = title;
    if (description) {
      const descriptionNode = document.querySelector('meta[name="description"]');
      if (descriptionNode) descriptionNode.setAttribute("content", description);
      const ogDescriptionNode = document.querySelector('meta[property="og:description"]');
      if (ogDescriptionNode) ogDescriptionNode.setAttribute("content", description);
    }

    renderSupport(current);
    renderPrivacy(current);
  }

  function setLocale(locale) {
    const normalized = normalizeLocale(locale) || "zh-Hans";
    localStorage.setItem(storageKey, normalized);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", normalized);
    window.history.replaceState({}, "", url);
    applyLocale(normalized);
  }

  document.querySelectorAll("[data-locale-select]").forEach((select) => {
    select.innerHTML = "";
    locales.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = localeNames[item];
      select.appendChild(option);
    });
    select.addEventListener("change", (event) => setLocale(event.target.value));
  });

  window.AutoNoticeI18n = {
    setLocale,
    t(key) {
      return get(messages[preferredLocale()], key) || key;
    },
  };

  setLocale(preferredLocale());
})();
