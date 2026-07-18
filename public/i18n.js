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
        autonoticeDescription: "AutoNotice 0.2 是一个轻量模块化自动提醒 App，提供天气提醒、到期提醒与 Developer Webhook。",
        autonoticeSupportTitle: "AutoNotice 技术支持",
        autonoticeSupportDescription: "AutoNotice 技术支持页面，包含常见问题、反馈信息和联系邮箱。",
        autonoticeWebhookTitle: "AutoNotice Webhook 使用方法",
        autonoticeWebhookDescription: "AutoNotice Developer Webhook 使用引导，面向希望用脚本、Connector 或自动化服务向自己设备发送通知的用户。",
        autonoticePrivacyTitle: "AutoNotice 隐私政策",
        autonoticePrivacyDescription: "AutoNotice 隐私政策，说明精确位置、设备标识、Webhook 内容、到期提醒加密与通知投递的数据处理方式。",
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
        testFlight: "加入 TestFlight",
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
        autonoticeStatus: "TestFlight",
        autonoticeDesc: "通用轻量自动提醒 App。0.2 把天气变化、到期事项与 Developer Webhook 放进统一的模块、历史和设置体验。",
        autonoticePoint1: "Weather Notice：降水、降温、升温、大风、官方预警，含分钟级降雨与雷达/云图。",
        autonoticePoint2: "Expiry Notice：本地通知优先，个人标题与备注端侧加密。",
        autonoticePoint3: "Developer Webhook：让脚本或 Connector 向自己的设备发送标准通知。",
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
        badge: "AutoNotice 0.2 · 首个公开版本候选",
        navWeather: "天气提醒",
        navExpiry: "到期提醒",
        navHistory: "历史",
        heroTitle: "变化发生之前，先收到一条清楚的提醒。",
        heroLead: "AutoNotice 不是待办清单，也不是天气信息流。0.2 把天气变化、到期事项和 Developer Webhook 放进同一套通知、历史与设置体验。",
        viewCapabilities: "查看当前能力",
        heroNote: "当前为 0.2 TestFlight 候选版本。无需账号，也无需公开个人资料。",
        step1Title: "设定关心的变化",
        step1Body: "选择天气类型、到期时间或自己的 Webhook 事件。",
        step2Title: "仅在命中时提醒",
        step2Body: "阈值、冷却、静默与去重共同减少重复打扰。",
        step3Title: "按日期回看与导出",
        step3Body: "历史按日期分组，支持详情查看与记录导出。",
        weatherTitle: "五类天气变化，提前知道。",
        weatherLead: "分区检查降水、温度与风力变化，并在官方预警命中时及时通知。",
        weatherRainTitle: "降水",
        weatherRainBody: "降雨概率、预计开始时间与分钟级趋势。",
        weatherDropTitle: "降温",
        weatherDropBody: "未来数小时达到阈值时提醒。",
        weatherRiseTitle: "升温",
        weatherRiseBody: "显著升温或高温达到阈值时提醒。",
        weatherWindTitle: "大风",
        weatherWindBody: "风速或阵风超过阈值时提醒。",
        weatherAlertTitle: "官方预警",
        weatherAlertBody: "所在地区出现生效预警时及时通知。",
        expiryTitle: "证件与事项到期，本地优先提醒。",
        expiryLead: "为订阅、证件和其他到期事项设置提前量与重复周期；标题与备注在设备端加密。",
        expiryFact1Title: "本地安排",
        expiryFact1Body: "iOS 优先安排到期通知。",
        expiryFact2Title: "灵活提前",
        expiryFact2Body: "支持多阶段提前量与有限重复。",
        expiryFact3Title: "内容加密",
        expiryFact3Body: "个人标题和备注不以明文同步。",
        webhookTitle: "你的系统事件，通过统一通道送达。",
        webhookLead: "脚本或 Connector 发送标准 payload，AutoNotice 负责设备鉴权、去重、APNs 投递与历史记录。",
        webhookAction: "查看 Webhook 使用指南",
        webhookExample: "新的系统事件已经送达。",
        historyKicker: "统一历史",
        historySectionTitle: "一处记录，多端查看。按日期自动归档。",
        historyTitle: "一处记录，多端查看。按日期自动归档。",
        historyLead: "天气、到期与 Webhook 进入同一份历史；iPhone 与 iPad 都能查看详情，并导出记录。",
        historyPoint1: "今天、昨天及更早记录清晰分组",
        historyPoint2: "通知时间与触发证据保留在详情中",
        historyPoint3: "支持导出历史，便于排查和归档",
        galleryKicker: "当前构建",
        galleryTitle: "当前 0.2 的完整界面。",
        privacyTitle: "隐私与安全",
        privacy1Title: "本地优先处理",
        privacy1Body: "到期内容在设备端加密，通知由最小数据驱动。",
        privacy2Title: "只处理必要数据",
        privacy2Body: "只处理已启用模块所需的位置、规则与投递信息。",
        privacy3Title: "无需账号",
        privacy3Body: "无需公开个人资料，也不用于广告跟踪。",
        finalTitle: "加入 TestFlight，体验 AutoNotice 0.2。",
        finalBody: "参与首个公开版本候选，帮助我们把提醒做得更少、更清楚。",
        signal1Title: "三个可用入口",
        signal1Body: "天气、到期事项与 Developer Webhook。",
        signal2Title: "只在需要时打扰",
        signal2Body: "阈值、冷却、静默、去重与时效性预警。",
        signal3Title: "无需账号",
        signal3Body: "本地优先，只处理已启用模块所需的最小数据。",
        sectionTitle: "一个 App，管理不同来源的提醒。",
        sectionLead: "每个模块负责自己的输入与规则，最终进入同一套通知投递与历史链路。你看到的是结果，而不是后台复杂度。",
        weatherOverviewTitle: "Weather Notice",
        weatherOverviewBody: "分别设置降水、降温、升温、大风和官方天气预警；下雨时可查看分钟级趋势与雷达/云图。",
        rulesTitle: "Expiry Notice",
        rulesBody: "为订阅、证件和其他到期事项设置提前量与重复周期；本地通知优先，个人内容端侧加密。",
        historyTitle: "Developer Webhook",
        historyBody: "让自己的脚本或 Connector 发送标准 payload，AutoNotice 负责设备鉴权、APNs 投递与历史记录。",
        workerTitle: "统一投递与历史",
        workerBody: "天气触发、到期事项和 Webhook 都归入统一 Notice Event。最近历史优先加载，可查看详情并导出记录。",
        proTitle: "从 Free 模块到 Pro",
        proBody: "0.x 继续完善开箱即用的 Free 模块；未来 Pro Lifetime 将解锁 Custom Notice Builder，官方专业模块则可作为 Module Pack 提供。",
        screenshotEyebrow: "真实界面",
        screenshotTitle: "提醒状态、规则与设置，一眼可读。",
        screenshotLead: "以下界面来自当前 0.2 TestFlight 截图管线，并随简体中文或英文自动切换。",
        screenshotStatus: "状态：分钟级降雨、天气模块与到期事项。",
        screenshotRules: "规则：五类天气变化分别开关。",
        screenshotSettings: "设置：语言、主题、支持与开发者工具。",
      },
      support: {
        eyebrow: "AutoNotice Support",
        title: "技术支持",
        lead: "如果你在使用天气提醒、到期提醒、Developer Webhook、通知历史或支持型 IAP 时遇到问题，可以先查看下方说明，也可以直接通过邮箱联系。",
        version: "适用版本：0.2",
        updated: "最后更新：2026-07-15",
        contactTitle: "联系邮箱",
        contactBody: "如需反馈问题、提交建议或说明审核测试情况，请通过邮箱联系：",
        testFlightBody: "如果你要安装内部测试版本，可以通过 TestFlight 链接加入：",
        webhookGuideBody: "开发者可以查看完整的 Webhook 请求格式、安全边界与 curl 示例：",
        webhookGuideAction: "打开 Webhook 使用指南",
        cards: [
          {
            title: "通知没有到达怎么办？",
            items: [
              "确认系统通知权限已经允许 AutoNotice 发送通知。",
              "天气提醒需要选择位置并至少开启一种天气变化；修改位置、阈值或开关后会自动同步，也可使用“强制更新提醒规则”。",
              "到期提醒优先使用本地通知，请检查到期时间、提前量和重复周期。",
              "TestFlight 与 App Store 版本使用 APNs production；Xcode 直接运行的 Debug 版本使用 APNs sandbox。",
            ],
          },
          {
            title: "天气、位置或雷达数据不准确怎么办？",
            items: [
              "使用当前位置时，请确认系统定位权限可用。",
              "手动选择城市时，AutoNotice 会使用 Common API 的国家和地区、城市及区县基础目录。",
              "WeatherKit 提供基础天气，和风天气补充中国官方预警与分钟级降水，RainViewer 提供雷达瓦片；不同来源可能存在更新时间差异。",
              "偶发网络或数据源问题可稍后刷新天气概览。",
            ],
          },
          {
            title: "到期提醒没有按预期出现怎么办？",
            items: [
              "确认提醒已启用，并检查到期时间、提前量、重复方式和工作日/星期设置。",
              "到期事项优先由 iOS 本地安排通知，不依赖 Worker 定时推送。",
              "标题与备注会在设备端加密后再同步；服务端无法读取个人内容。",
              "删除 App 或清除本机数据可能移除本地通知安排。",
            ],
          },
          {
            title: "Developer Webhook 排查",
            items: [
              "先在设置的 Webhook 区域发送测试 payload，确认当前设备可以收到通知。",
              "请求必须携带当前 Webhook Token，并至少包含 title；建议提供稳定 dedupKey。",
              "Webhook Token 应像密码一样保存，泄露后请重新签发。",
            ],
          },
          {
            title: "反馈时建议提供的信息",
            items: [
              "设备型号、iOS 版本和 AutoNotice 版本号。",
              "是否来自 TestFlight、App Store 或 Xcode Debug 版本。",
              "问题所属模块，以及发生前的位置、规则、时间和重复设置。",
              "如方便，可附带脱敏后的界面截图或错误提示。",
            ],
          },
          {
            title: "支持型 IAP",
            items: [
              "AutoNotice 的支持型 IAP 是自愿支持开发者的 consumable 商品。",
              "购买不会解锁额外功能，也不会影响天气、到期提醒、Webhook、历史记录或设置。",
              "购买、退款和付款方式由 Apple App Store 处理。",
            ],
          },
        ],
      },
      webhookSupport: {
        eyebrow: "AutoNotice Webhook",
        title: "Webhook 使用方法",
        lead: "AutoNotice Webhook 面向有一定程序开发能力的用户。你可以用自己的脚本、Connector 或自动化服务向自己的 iPhone 发送标准通知。",
        version: "适用版本：AutoNotice v0.2 TestFlight",
        updated: "最后更新：2026-07-09",
        boundaryTitle: "能力边界",
        boundaryBody: "基础 Webhook 免费提供，不属于 AutoNotice 付费门槛。它只负责把符合格式的通知投递到用户自己的设备，不负责代替第三方服务抓取数据、保存业务账号或判断业务条件。",
        locateTitle: "在 App 中找到 Webhook",
        locateSteps: [
          "安装 AutoNotice v0.2 TestFlight 版本。",
          "打开 AutoNotice，进入设置。",
          "找到 Webhook 通知 section。",
          "复制 Webhook 地址和 Webhook Token。",
          "把它们填入你的脚本、Connector 或本地自动化工具。",
        ],
        fieldsTitle: "请求字段",
        fields: [
          ["title", "通知标题。"],
          ["body", "通知正文。"],
          ["module", "模块名称，例如 life、utility、developer。"],
          ["type", "事件类型，例如 state_grid_balance_low。"],
          ["severity", "info、warning、critical 等严重级别。"],
          ["dedupKey", "用于去重和冷却的稳定键。"],
          ["payload", "可选 JSON 对象，用于保存业务上下文。"],
        ],
        curlTitle: "curl 示例",
        curlExample: `curl -X POST "$AUTONOTICE_WEBHOOK_URL" \\
  -H "Authorization: Bearer $AUTONOTICE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "电费余额不足",
    "body": "当前电费余额低于 50 元，记得充值。",
    "module": "life",
    "type": "utility_balance",
    "severity": "warning",
    "dedupKey": "stategrid-home-balance-low-20260709",
    "payload": {
      "source": "StateGridConnector"
    }
  }'`,
        cards: [
          {
            title: "安全建议",
            items: [
              "Webhook Token 是敏感凭据，请像密码一样保存。",
              "不要把 Token 提交到 GitHub、日志、截图或公开 issue。",
              "如果 Token 泄露，请在 AutoNotice 中重新生成或停用旧凭据。",
            ],
          },
          {
            title: "适合的场景",
            items: [
              "本地脚本完成判断后推送通知。",
              "个人自托管 Connector 发出状态变化提醒。",
              "可信小范围自动化服务向自己的设备发送低频通知。",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "AutoNotice Privacy Policy",
        title: "隐私政策",
        lead: "AutoNotice 0.2 提供天气提醒、到期提醒与 Developer Webhook。本政策说明精确位置、设备标识、用户提交内容和加密到期内容如何被处理。",
        product: "适用产品：AutoNotice",
        updated: "最后更新：2026-07-15",
        noAccount: "无需账号",
        sections: [
          {
            title: "一、我们是谁",
            body: [
              "AutoNotice 是 darkrio Studio 提供的轻量自动提醒工具。当前 0.2 版本提供 Weather Notice、Expiry Notice、Developer Webhook、统一通知历史和可选支持开发者 IAP。",
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
              "精确位置：当前位置或手动选择地点对应的经纬度、国家和地区、城市或区县名称及时区。",
              "设备标识：Keychain 中生成的稳定 Device ID、APNs device token、Bundle ID、App 版本和 APNs environment。",
              "天气模块数据：提醒开关、阈值、冷却与静默时间、天气概览、触发证据、通知历史和错误状态。",
              "到期模块数据：到期时间、提前量、重复规则等调度 metadata，以及在设备端加密后的标题和备注 envelope。",
              "其他用户内容：你通过 Developer Webhook 主动提交的通知标题、正文、module、type、severity、dedupKey 和可选 payload。",
              "可选支持型 IAP 的 StoreKit 商品状态、购买结果和本机记录。",
            ],
            bodyAfter: [
              "App Store 隐私标签将精确位置、设备 ID 和其他用户内容标记为与用户关联，因为它们会关联到用于投递的稳定设备身份；这些数据不用于跟踪。",
              "我们只在运行你启用的模块、发送通知、展示历史、排查故障和防滥用所必需的范围内处理信息，不出售个人数据，不投放广告，也不建立跨 App 或网站画像。",
            ],
          },
          {
            title: "三、位置与天气数据",
            list: [
              "当你选择“当前位置”时，App 会请求系统定位权限，用于更新所在区县、天气网格和提醒规则。",
              "当你手动选择地点时，App 可调用 Common API 的国家和地区、城市及区县基础目录，并使用对应经纬度。",
              "AutoNotice Notice Engine 以 Apple WeatherKit 作为基础天气源，和风天气补充中国官方天气预警与分钟级降水，RainViewer 提供雷达瓦片。",
              "不同天气来源可能具有不同更新时间和空间分辨率；App 会在使用数据的位置展示相应来源说明。",
              "AutoNotice 不提供社交定位、实时轨迹分享或广告定位能力。",
            ],
          },
          {
            title: "四、设备、通知与 Notice Engine",
            body: ["AutoNotice Worker 运行在 Cloudflare 基础设施上，负责设备注册、通用 Notice Rule、天气触发、Notice Event、APNs 投递、通知历史和测试通知。"],
            list: [
              "Debug / Xcode 直接运行版本注册 APNs development token。",
              "TestFlight / App Store 版本注册 APNs production token。",
              "官方天气预警可能使用 iOS 时效性通知；普通天气、到期和 Webhook 通知使用各自配置的常规投递级别。",
              "通知只用于你启用或主动触发的提醒，不包含广告内容。",
              "你可以在 iOS 系统设置中关闭 AutoNotice 通知权限。",
            ],
          },
          {
            title: "五、到期提醒与端侧加密",
            list: [
              "Expiry Notice 优先由 iOS 在本机安排通知，不依赖 Worker 定时轮询才能准时提醒。",
              "标题、备注等个人内容在设备端使用 Keychain 管理的密钥加密后再同步；服务端只保存 encrypted envelope 和必要调度 metadata，无法读取或解析明文个人内容。",
              "到期时间、提前量、重复规则和来源关系可能以可调度 metadata 形式同步，用于历史、跨 App 来源和后续同步能力。",
            ],
          },
          {
            title: "六、Developer Webhook",
            list: [
              "Webhook 只投递你或你的 Connector 主动提交的标准通知，不替你抓取第三方账号数据，也不判断外部业务条件。",
              "Webhook 明文 token 与设备鉴权 secret 只保存在本机 Keychain；Worker 只保存不可逆 token hash 和用于识别的短前缀。",
              "你应像密码一样保护 Webhook Token；如发生泄露，可在 App 内重新签发并停用旧凭据。",
            ],
          },
          {
            title: "七、支持型 IAP",
            body: ["AutoNotice 提供可选的支持开发者 consumable IAP。购买、退款、付款方式和交易基础记录由 Apple App Store 处理，AutoNotice 不接触你的银行卡号或完整付款信息。"],
            list: [
              "支持型 IAP 不解锁额外功能。",
              "不购买也可以使用天气提醒、到期提醒、Webhook、通知历史和设置。",
              "App 可能在本机记录最近一次支持商品和支持时间，用于展示感谢状态。",
            ],
          },
          {
            title: "八、数据保留与删除",
            list: [
              "本机设置、提醒规则、位置偏好、加密密钥和本地通知安排由你在设备上管理。",
              "服务端只在运行模块、投递、历史审计和防滥用所需范围内保留设备、规则、事件与错误状态。",
              "删除 App 或清除 App 数据可能移除本机副本和本地通知安排，但不会自动向所有远程服务发出删除请求。",
              "关闭通知权限后，系统将阻止 AutoNotice 继续展示通知。",
              "如需请求排查或删除服务端关联状态，可通过支持邮箱联系开发者。",
            ],
          },
          {
            title: "九、第三方与基础设施服务",
            list: [
              "Apple：WeatherKit、APNs、StoreKit、App Store 和系统权限。",
              "Cloudflare：官网托管、AutoNotice Worker、D1 数据库和相关提醒基础设施。",
              "和风天气：面向中国地区的官方天气预警与分钟级降水补充数据。",
              "RainViewer：雷达历史瓦片及其元数据。",
              "Common API：手动选择国家和地区、城市及区县所需的共享只读基础资料。",
            ],
          },
          {
            title: "十、未成年人保护",
            body: ["AutoNotice 面向一般工具类使用场景设计。我们不会故意面向未满 14 周岁的未成年人提供服务或收集其个人信息。"],
          },
          {
            title: "十一、政策更新",
            body: ["我们可能会根据产品功能、法律法规或服务配置变化更新本隐私政策。更新后的版本将在本页面发布，并自发布之日起生效。"],
          },
          {
            title: "十二、联系我们",
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
        autonoticeDescription: "AutoNotice 0.2 is a lightweight modular notice app for weather changes, expiry dates, and Developer Webhook.",
        autonoticeSupportTitle: "AutoNotice Support",
        autonoticeSupportDescription: "AutoNotice support page with common questions, feedback guidance, and contact information.",
        autonoticeWebhookTitle: "AutoNotice Webhook Usage Guide",
        autonoticeWebhookDescription: "A practical guide to AutoNotice Developer Webhook for users who want scripts, connectors, or automation services to send notices to their own device.",
        autonoticePrivacyTitle: "AutoNotice Privacy Policy",
        autonoticePrivacyDescription: "AutoNotice privacy policy covering precise location, device identifiers, Webhook content, encrypted expiry content, and notification delivery.",
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
        testFlight: "Join TestFlight",
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
        autonoticeStatus: "TestFlight",
        autonoticeDesc: "A lightweight general-purpose notice app. Version 0.2 brings weather changes, expiry dates, and Developer Webhook into one modular history and settings experience.",
        autonoticePoint1: "Weather Notice: precipitation, temperature shifts, wind, official alerts, minute rain, and radar/cloud views.",
        autonoticePoint2: "Expiry Notice: local delivery first, with personal titles and notes encrypted on device.",
        autonoticePoint3: "Developer Webhook: send standard notices from your own scripts or connectors.",
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
        badge: "AutoNotice 0.2 · First public release candidate",
        navWeather: "Weather",
        navExpiry: "Expiry",
        navHistory: "History",
        heroTitle: "Get one clear notice before the change matters.",
        heroLead: "AutoNotice is neither a to-do list nor a weather feed. Version 0.2 brings weather changes, expiry dates, and Developer Webhook into one notification, history, and settings experience.",
        viewCapabilities: "View current capabilities",
        heroNote: "Version 0.2 is currently a TestFlight release candidate. No account or public profile required.",
        step1Title: "Choose what matters",
        step1Body: "Select weather changes, expiry timing, or your own Webhook events.",
        step2Title: "Notify only on a match",
        step2Body: "Thresholds, cooldown, quiet hours, and deduplication reduce repeated interruptions.",
        step3Title: "Review by date and export",
        step3Body: "History is grouped by date, with details and export available.",
        weatherTitle: "Five weather changes, known early.",
        weatherLead: "Check precipitation, temperature, and wind by area, with timely official-alert delivery.",
        weatherRainTitle: "Rain",
        weatherRainBody: "Probability, expected start time, and minute-level trends.",
        weatherDropTitle: "Cooling",
        weatherDropBody: "Notify when the next few hours cross your threshold.",
        weatherRiseTitle: "Warming",
        weatherRiseBody: "Notify on significant warming or high-temperature thresholds.",
        weatherWindTitle: "Wind",
        weatherWindBody: "Notify when wind or gust speed exceeds the threshold.",
        weatherAlertTitle: "Official alerts",
        weatherAlertBody: "Notify when an active alert covers your area.",
        expiryTitle: "Documents and plans, with local-first expiry notices.",
        expiryLead: "Set lead times and repeat schedules for subscriptions, documents, and other dates. Titles and notes are encrypted on device.",
        expiryFact1Title: "Local scheduling",
        expiryFact1Body: "iOS schedules expiry notifications first.",
        expiryFact2Title: "Flexible lead time",
        expiryFact2Body: "Use multiple lead times and limited repeats.",
        expiryFact3Title: "Encrypted content",
        expiryFact3Body: "Personal titles and notes do not sync in plaintext.",
        webhookTitle: "Your system events, delivered through one channel.",
        webhookLead: "A script or Connector sends a standard payload; AutoNotice handles device authentication, deduplication, APNs delivery, and history.",
        webhookAction: "Read the Webhook guide",
        webhookExample: "A new system event has arrived.",
        historyKicker: "Unified history",
        historySectionTitle: "One history, across devices. Grouped by date.",
        historyTitle: "One history, across devices. Grouped by date.",
        historyLead: "Weather, expiry, and Webhook events share one history. View details on iPhone or iPad and export the record.",
        historyPoint1: "Clear groups for today, yesterday, and earlier dates",
        historyPoint2: "Delivery time and trigger evidence stay in the details",
        historyPoint3: "Export history for diagnostics and archiving",
        galleryKicker: "Current build",
        galleryTitle: "The complete AutoNotice 0.2 interface.",
        privacyTitle: "Privacy and security",
        privacy1Title: "Local-first processing",
        privacy1Body: "Expiry content is encrypted on device and notices use the minimum data required.",
        privacy2Title: "Necessary data only",
        privacy2Body: "Only the location, rules, and delivery data needed by enabled modules are processed.",
        privacy3Title: "No account required",
        privacy3Body: "No public profile and no advertising tracking.",
        finalTitle: "Join TestFlight and try AutoNotice 0.2.",
        finalBody: "Help test the first public release candidate and make notices fewer and clearer.",
        signal1Title: "Three useful entry points",
        signal1Body: "Weather, expiry dates, and Developer Webhook.",
        signal2Title: "Interrupt only when needed",
        signal2Body: "Thresholds, cooldowns, quiet hours, deduplication, and timely official alerts.",
        signal3Title: "No account required",
        signal3Body: "Local-first, with only the minimum data needed by enabled modules.",
        sectionTitle: "One app for notices from different sources.",
        sectionLead: "Each module owns its input and rules, then enters the same delivery and history pipeline. You see the result, not the backend complexity.",
        weatherOverviewTitle: "Weather Notice",
        weatherOverviewBody: "Control precipitation, temperature drop, temperature rise, wind, and official alerts separately, with minute rain and radar/cloud views when it rains.",
        rulesTitle: "Expiry Notice",
        rulesBody: "Set lead times and repeat schedules for subscriptions, documents, and other expiry dates. Local delivery comes first and personal content is encrypted on device.",
        historyTitle: "Developer Webhook",
        historyBody: "Send a standard payload from your own script or connector; AutoNotice handles device authentication, APNs delivery, and history.",
        workerTitle: "Unified delivery and history",
        workerBody: "Weather triggers, expiry dates, and Webhooks become a common Notice Event. Recent history loads first, with details and export available.",
        proTitle: "From Free modules to Pro",
        proBody: "The 0.x line keeps improving ready-to-use Free modules. A future Pro Lifetime purchase will unlock Custom Notice Builder, while maintained professional modules may ship as Module Packs.",
        screenshotEyebrow: "Real interface",
        screenshotTitle: "Status, rules, and settings at a glance.",
        screenshotLead: "These screens come from the current 0.2 TestFlight screenshot pipeline and switch with Simplified Chinese or English.",
        screenshotStatus: "Status: minute rain, Weather Notice, and expiry dates.",
        screenshotRules: "Rules: five weather changes with separate controls.",
        screenshotSettings: "Settings: language, themes, support, and developer tools.",
      },
      support: {
        eyebrow: "AutoNotice Support",
        title: "Support",
        lead: "If you run into issues with Weather Notice, Expiry Notice, Developer Webhook, notification history, or support IAP, start with the notes below or contact the developer by email.",
        version: "Applies to version: 0.2",
        updated: "Last updated: July 15, 2026",
        contactTitle: "Contact email",
        contactBody: "For bug reports, suggestions, or review-test details, contact:",
        testFlightBody: "To install the internal testing build, join through TestFlight:",
        webhookGuideBody: "Developers can review the full Webhook request format, security boundary, and curl example:",
        webhookGuideAction: "Open Webhook usage guide",
        cards: [
          {
            title: "What if notifications do not arrive?",
            items: [
              "Confirm iOS notification permission allows AutoNotice to send notifications.",
              "Weather Notice needs a location and at least one enabled weather change. Location, threshold, and switch changes sync automatically; Force Update Notice Rules remains available.",
              "Expiry Notice uses local notifications first, so verify the due date, lead times, and repeat schedule.",
              "TestFlight and App Store builds use APNs production; Debug builds run directly from Xcode use APNs sandbox.",
            ],
          },
          {
            title: "What if weather, location, or radar data looks wrong?",
            items: [
              "When using current location, confirm iOS location permission is available.",
              "When choosing a place manually, AutoNotice uses Common API Country/Region, city, and district basics.",
              "WeatherKit provides baseline weather, QWeather adds China official alerts and minute precipitation, and RainViewer provides radar tiles. Their update times may differ.",
              "For occasional network or provider issues, refresh the weather overview later.",
            ],
          },
          {
            title: "What if an expiry notice does not appear as expected?",
            items: [
              "Confirm the notice is enabled and verify its due date, lead times, repeat mode, and weekday settings.",
              "Expiry items are scheduled locally by iOS first and do not depend on Worker polling.",
              "Titles and notes are encrypted on device before sync; the server cannot read personal content.",
              "Deleting the app or clearing local data may remove locally scheduled notifications.",
            ],
          },
          {
            title: "Developer Webhook troubleshooting",
            items: [
              "Send the test payload from the Webhook section in Settings to confirm delivery to the current device.",
              "Requests need the current Webhook Token and at least a title; a stable dedupKey is recommended.",
              "Treat the Webhook Token like a password and reissue it if exposed.",
            ],
          },
          {
            title: "Helpful details for feedback",
            items: [
              "Device model, iOS version, and AutoNotice version.",
              "Whether the build came from TestFlight, App Store, or Xcode Debug.",
              "The affected module and its location, rule, time, and repeat settings before the issue.",
              "If possible, include a redacted screenshot or error message.",
            ],
          },
          {
            title: "Support IAP",
            items: [
              "AutoNotice support IAP items are voluntary consumable products for supporting development.",
              "Purchases do not unlock extra features and do not affect weather, expiry notices, Webhook, history, or settings.",
              "Purchases, refunds, and payment methods are handled by Apple App Store.",
            ],
          },
        ],
      },
      webhookSupport: {
        eyebrow: "AutoNotice Webhook",
        title: "Webhook Usage Guide",
        lead: "AutoNotice Webhook is intended for users with some programming experience. Your own scripts, connectors, or automation services can send standard notices to your iPhone.",
        version: "Applies to: AutoNotice v0.2 TestFlight",
        updated: "Last updated: July 9, 2026",
        boundaryTitle: "Scope",
        boundaryBody: "Basic Webhook is free and is not behind an AutoNotice payment gate. It only delivers valid notification payloads to the user's own device. It does not fetch third-party data, store business accounts, or decide business conditions for you.",
        locateTitle: "Find Webhook in the App",
        locateSteps: [
          "Install the AutoNotice v0.2 TestFlight build.",
          "Open AutoNotice and go to Settings.",
          "Find the Webhook Notifications section.",
          "Copy the Webhook URL and Webhook Token.",
          "Paste them into your script, connector, or local automation tool.",
        ],
        fieldsTitle: "Request Fields",
        fields: [
          ["title", "Notification title."],
          ["body", "Notification body."],
          ["module", "Module name, for example life, utility, or developer."],
          ["type", "Event type, for example state_grid_balance_low."],
          ["severity", "Severity such as info, warning, or critical."],
          ["dedupKey", "Stable key used for deduplication and cooldown."],
          ["payload", "Optional JSON object for business context."],
        ],
        curlTitle: "curl Example",
        curlExample: `curl -X POST "$AUTONOTICE_WEBHOOK_URL" \\
  -H "Authorization: Bearer $AUTONOTICE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Electricity balance is low",
    "body": "Current electricity balance is below 50 CNY.",
    "module": "life",
    "type": "utility_balance",
    "severity": "warning",
    "dedupKey": "stategrid-home-balance-low-20260709",
    "payload": {
      "source": "StateGridConnector"
    }
  }'`,
        cards: [
          {
            title: "Security Notes",
            items: [
              "The Webhook Token is a secret. Store it like a password.",
              "Do not commit the token to GitHub, logs, screenshots, or public issues.",
              "If a token leaks, regenerate or disable the old credential in AutoNotice.",
            ],
          },
          {
            title: "Good Fits",
            items: [
              "A local script sends a notice after it makes its own decision.",
              "A personal self-hosted connector sends low-frequency state changes.",
              "A trusted small-scope automation service sends notices to your own device.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "AutoNotice Privacy Policy",
        title: "Privacy Policy",
        lead: "AutoNotice 0.2 provides Weather Notice, Expiry Notice, and Developer Webhook. This policy explains how precise location, device identifiers, submitted content, and encrypted expiry content are processed.",
        product: "Product: AutoNotice",
        updated: "Last updated: July 15, 2026",
        noAccount: "No account required",
        sections: [
          {
            title: "1. Who We Are",
            body: [
              "AutoNotice is a lightweight automatic notice tool provided by darkrio Studio. Version 0.2 provides Weather Notice, Expiry Notice, Developer Webhook, unified notice history, and optional support IAP.",
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
              "Precise location: coordinates, Country/Region, city or district name, and time zone for your current or manually selected place.",
              "Device identifiers: a stable Keychain-generated Device ID, APNs device token, Bundle ID, app version, and APNs environment.",
              "Weather module data: enabled rules, thresholds, cooldown and quiet hours, weather overview, trigger evidence, notice history, and error state.",
              "Expiry module data: scheduling metadata such as due date, lead times, and repeat rules, plus an on-device encrypted envelope for title and notes.",
              "Other User Content: notification title, body, module, type, severity, dedupKey, and optional payload you intentionally submit through Developer Webhook.",
              "StoreKit product state, purchase result, and local records for optional support IAP.",
            ],
            bodyAfter: [
              "App Store privacy labels mark Precise Location, Device ID, and Other User Content as linked to the user because they are associated with the stable device identity used for delivery. They are not used for tracking.",
              "We process information only as needed to run enabled modules, deliver notices, show history, troubleshoot issues, and prevent abuse. We do not sell personal data, show ads, or build cross-app or cross-site profiles.",
            ],
          },
          {
            title: "3. Location and Weather Data",
            list: [
              "When you choose Current Location, the app requests iOS location permission to update the district, weather grid, and notice rules.",
              "When you manually choose a place, the app may use Common API Country/Region, city, and district basics and their coordinates.",
              "AutoNotice Notice Engine uses Apple WeatherKit as the baseline source, QWeather for China official alerts and minute precipitation, and RainViewer for radar tiles.",
              "Weather sources can have different update times and spatial resolution. The app shows source attribution where their data is used.",
              "AutoNotice does not provide social location, live route sharing, or advertising-location features.",
            ],
          },
          {
            title: "4. Devices, Notifications, and Notice Engine",
            body: ["AutoNotice Worker runs on Cloudflare infrastructure and handles device registration, generic Notice Rules, weather triggers, Notice Events, APNs delivery, history, and test notifications."],
            list: [
              "Debug builds run directly from Xcode register APNs development tokens.",
              "TestFlight and App Store builds register APNs production tokens.",
              "Official weather alerts may use iOS Time Sensitive delivery. Ordinary weather, expiry, and Webhook notices use their configured standard delivery levels.",
              "Notifications are only used for modules you enable or payloads you intentionally submit, and do not contain ads.",
              "You can disable AutoNotice notification permission in iOS Settings.",
            ],
          },
          {
            title: "5. Expiry Notices and On-Device Encryption",
            list: [
              "Expiry Notice schedules iOS local notifications first and does not require Worker polling to be timely.",
              "Personal titles and notes are encrypted on device with a Keychain-managed key before sync. The server stores only the encrypted envelope and required scheduling metadata and cannot read or parse the plaintext content.",
              "Due dates, lead times, repeat rules, and source relationships may sync as scheduling metadata for history, cross-app sources, and future synchronization.",
            ],
          },
          {
            title: "6. Developer Webhook",
            list: [
              "Webhook only delivers standard notices intentionally submitted by you or your connector. It does not fetch third-party account data or decide external business conditions.",
              "The plaintext Webhook token and device authentication secret stay in the device Keychain. Worker stores only an irreversible token hash and a short identifying prefix.",
              "Protect the Webhook Token like a password. If exposed, reissue it in the app to disable the old credential.",
            ],
          },
          {
            title: "7. Support IAP",
            body: ["AutoNotice offers optional consumable IAP items to support development. Purchases, refunds, payment methods, and base transaction records are handled by Apple App Store. AutoNotice does not receive your card number or full payment information."],
            list: [
              "Support IAP does not unlock extra features.",
              "Weather notices, expiry notices, Webhook, history, and settings remain usable without purchase.",
              "The app may keep a local record of the latest support item and time to show a thank-you state.",
            ],
          },
          {
            title: "8. Retention and Deletion",
            list: [
              "Local settings, notice rules, location preferences, encryption keys, and local notification schedules are managed on your device.",
              "Server-side device, rule, event, and error state is retained only as needed for module operation, delivery, history audit, and abuse prevention.",
              "Deleting the app or clearing app data may remove local copies and local notification schedules, but does not automatically send deletion requests to every remote service.",
              "Disabling notification permission prevents iOS from showing new AutoNotice notifications.",
              "To request troubleshooting or deletion of service-side associated state, contact the developer by email.",
            ],
          },
          {
            title: "9. Third Parties and Infrastructure",
            list: [
              "Apple: WeatherKit, APNs, StoreKit, App Store, and system permissions.",
              "Cloudflare: website hosting, AutoNotice Worker, D1 database, and related notice infrastructure.",
              "QWeather: China official weather alerts and minute-level precipitation supplements.",
              "RainViewer: historical radar tiles and metadata.",
              "Common API: shared read-only Country/Region, city, and district basics for manual place selection.",
            ],
          },
          {
            title: "10. Children",
            body: ["AutoNotice is designed as a general utility. We do not knowingly provide services to or collect personal information from children under 14."],
          },
          {
            title: "11. Updates",
            body: ["We may update this policy as product features, laws, or service configuration change. Updates will be posted on this page and take effect from the posting date."],
          },
          {
            title: "12. Contact Us",
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
    if (path.startsWith("/autonotice/support/webhook")) return "autonoticeWebhook";
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
        <p>${data.testFlightBody}</p>
        <p><a class="contact-box" href="https://testflight.apple.com/join/bvvmBE3t" target="_blank" rel="noopener noreferrer">${(messages[locale] || messages["zh-Hans"]).action.testFlight}</a></p>
        <p>${data.webhookGuideBody}</p>
        <p><a class="contact-box" href="/autonotice/support/webhook/">${data.webhookGuideAction}</a></p>
      </section>
      <section class="grid section" aria-label="Support topics">
        ${cards}
      </section>
    `;
  }

  function renderWebhookSupport(locale) {
    const data = (messages[locale] || messages["zh-Hans"]).webhookSupport;
    const container = document.querySelector("[data-autonotice-webhook-sections]");
    if (!container || !data) return;

    const steps = data.locateSteps.map((item) => `<li>${item}</li>`).join("");
    const fields = data.fields
      .map(([name, description]) => `<div><dt>${name}</dt><dd>${description}</dd></div>`)
      .join("");
    const cards = data.cards
      .map((card) => {
        const items = card.items.map((item) => `<li>${item}</li>`).join("");
        return `<article class="card wide"><h3>${card.title}</h3><ul>${items}</ul></article>`;
      })
      .join("");

    container.innerHTML = `
      <section class="doc-card">
        <h2>${data.boundaryTitle}</h2>
        <p>${data.boundaryBody}</p>
      </section>
      <section class="doc-card">
        <h2>${data.locateTitle}</h2>
        <ol>${steps}</ol>
      </section>
      <section class="doc-card">
        <h2>${data.fieldsTitle}</h2>
        <dl class="field-list">${fields}</dl>
      </section>
      <section class="doc-card">
        <h2>${data.curlTitle}</h2>
        <pre><code>${data.curlExample}</code></pre>
      </section>
      <section class="grid section" aria-label="Webhook guidance">
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

    document.querySelectorAll("[data-locale-src]").forEach((node) => {
      const source = node.getAttribute(current === "zh-Hans" ? "data-src-zh" : "data-src-en");
      if (source) node.setAttribute("src", source);
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
    renderWebhookSupport(current);
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
