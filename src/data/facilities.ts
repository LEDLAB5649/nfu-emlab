// 設備、安全規範、最新消息
import type { L } from '../i18n/ui';

export type Equipment = { name: L; desc: L; image: string; specs?: L[]; applications?: L[] };

// 儀器設備列表（全面採用實驗室學長姐親自拍攝之實體機台照片）
export const equipment: Equipment[] = [
  {
    name: {
      zh: '半導體微探針量測平台',
      en: 'Micro-Probe Measurement Station',
      ja: 'マイクロプローブ計測ステーション',
    },
    desc: {
      zh: '高倍率顯微鏡結合微米級探針位移平台與溫控載台，專門進行微電子晶片、薄膜元件微接觸量測與電氣特性 (I-V) 分析。',
      en: 'High-magnification microscope integrated with micron-level probe positioners and thermal stage for microelectronic chip and thin-film I-V characterization.',
      ja: '高倍率光学顕微鏡とマイクロプローブ移動機構、温度制御ステージを統合し、微小電子素子や薄膜の電気特性（I-V）を精密測定。',
    },
    image: '/images/equipment/probe-station.webp',
    specs: [
      { zh: '三軸微米級精細探針位移台（X-Y-Z 微動調整）', en: '3-axis micron-resolution probe positioners (X-Y-Z fine adjustment)', ja: '3軸マイクロプローブ位置調整ステージ（X-Y-Z微動）' },
      { zh: '高倍率立體光學顯微觀測與環形冷光源照明', en: 'High-magnification stereo optical microscope with ring illuminator', ja: '高倍率実体光学顕微鏡とリング型冷光源照明' },
      { zh: '可程式溫控吸真空晶圓／晶片載台', en: 'Temperature-controlled vacuum chuck stage', ja: '温度制御対応バキュームチャックステージ' },
    ],
    applications: [
      { zh: '微電子元件 I-V / C-V 電性特性曲線量測', en: 'I-V & C-V electrical characterization of microelectronic devices', ja: '微小電子素子のI-V・C-V電気特性測定' },
      { zh: '鈣鈦礦與半導體薄膜之歐姆／蕭特基接觸測試', en: 'Ohmic/Schottky contact analysis on perovskite & semiconductor films', ja: 'ペロブスカイト・半導体薄膜のオーミック／ショットキー接触評価' },
      { zh: '覆晶微凸塊與微封裝晶片導通驗證', en: 'Flip-chip micro-bump continuity verification', ja: 'フリップチップ微小バンプの導通検証' },
    ],
  },
  {
    name: {
      zh: '高速數位存儲示波器 (BK Precision 2565B)',
      en: 'BK Precision 2565B Digital Storage Oscilloscope',
      ja: 'BK Precision 2565B デジタルストレージオシロスコープ',
    },
    desc: {
      zh: '100 MHz 頻寬雙通道數位示波器，提供高速即時波形取樣、微弱信號捕捉、雜訊濾波與自動化頻率參數分析。',
      en: '100 MHz dual-channel digital oscilloscope for high-speed waveform acquisition, weak-signal capture, noise filtering and automated parametric analysis.',
      ja: '100MHz帯域のデジタルストレージオシロスコープ。高速波形サンプリング、微弱信号捕捉、ノイズ除去および自動パラメータ測定に対応。',
    },
    image: '/images/equipment/daq.webp',
    specs: [
      { zh: '類比頻寬：100 MHz 雙輸入通道', en: 'Analog Bandwidth: 100 MHz, Dual-Channel', ja: 'アナログ帯域：100 MHz 2チャンネル' },
      { zh: '即時取樣率高達 1 GSa/s，深儲存波形紀錄', en: 'Real-time sampling rate up to 1 GSa/s with deep memory', ja: 'リアルタイムサンプリング最大 1 GSa/s' },
      { zh: '內建 FFT 頻譜分析與多組自動波形參數統計', en: 'Built-in FFT spectrum analysis and automated waveform measurements', ja: 'FFTスペクトラム解析・自動パラメータ統計機能搭載' },
    ],
    applications: [
      { zh: 'AIoT 感測器類比前端訊號即時擷取與除錯', en: 'Real-time capture & debugging of AIoT sensor analog front-ends', ja: 'AIoTセンサーアナログフロントエンドの信号取得・デバッグ' },
      { zh: '高頻切換電源與 PWM 驅動器暫態響應測試', en: 'Transient response testing for switching power & PWM LED drivers', ja: 'スイッチング電源・PWM駆動回路の過渡応答測定' },
      { zh: '通訊協定訊號時序分析（UART / SPI / I²C）', en: 'Protocol timing verification (UART / SPI / I²C)', ja: '通信プロトコルタイミング解析（UART / SPI / I²C）' },
    ],
  },
  {
    name: {
      zh: '真空熱蒸鍍沉積機台',
      en: 'Vacuum Thermal Evaporation Deposition System',
      ja: '真空熱蒸着成膜システム',
    },
    desc: {
      zh: '配備 VD-7071 專用蒸鍍沉積電源供應器、精密切換電錶與高真空不鏽鋼腔體，專用於半導體電極金屬化（如 Al、Ag、Au）及光電薄膜熱蒸鍍製程。',
      en: 'Equipped with VD-7071 deposition power supply, precision AC meters, and stainless steel high-vacuum chamber for semiconductor electrode metallization and thin-film thermal evaporation.',
      ja: 'VD-7071蒸着用電源、高精度計器、ステンレス製高真空チャンバーを備え、半導体電極金属化（Al、Ag、Au）および光電子薄膜の熱蒸着製程に使用。',
    },
    image: '/images/equipment/vacuum-chamber.webp',
    specs: [
      { zh: '不鏽鋼高真空沉積腔體，搭配機械泵與高真空擴散／渦輪分子泵組', en: 'Stainless-steel high-vacuum chamber with dual-stage pumping', ja: 'ステンレス製高真空チャンバーと二段階排気ポンプ系' },
      { zh: 'VD-7071 高電流低電壓蒸鍍電源與精密電流／電壓指針切換監控錶', en: 'VD-7071 high-current deposition power supply & multi-point meter monitoring', ja: 'VD-7071 大電流蒸着電源および精密切替メーター監視' },
      { zh: '支援多蒸發舟切換，可進行金屬及有機薄膜雙層／多層蒸鍍', en: 'Multi-boat source configuration for metal and organic multilayer deposition', ja: '複数ボート切替による金属・有機多層膜蒸着に対応' },
    ],
    applications: [
      { zh: '鈣鈦礦與太陽能電池頂／底金屬電極製作（Au、Ag、Al）', en: 'Metal electrode fabrication (Au, Ag, Al) for perovskite & solar cells', ja: 'ペロブスカイト・太陽電池の上下部金属電極成膜（Au、Ag、Al）' },
      { zh: 'PEDOT:PSS 與光電元件金屬接觸介面歐姆層沉積', en: 'Ohmic contact metallization for optoelectronic thin-film devices', ja: '光電子薄膜デバイスのオーミック接触電極形成' },
      { zh: '有機半導體功能層熱蒸鍍製備', en: 'Thermal evaporation of functional organic semiconductor layers', ja: '有機半導体機能層の熱蒸着作製' },
    ],
  },
  {
    name: {
      zh: '射頻／直流磁控濺鍍與電漿鍍膜機台',
      en: 'RF/DC Magnetron Sputtering & Plasma Coating System',
      ja: '高周波・直流マグネトロンスパッタリング＆プラズマ成膜装置',
    },
    desc: {
      zh: '配備 Advanced Energy MDX-1K 磁控直流驅動電源、KYKY 複合真空監控計與氣體流量控制，執行高品質光電半導體薄膜濺鍍沉積與電漿表面改質。',
      en: 'Equipped with Advanced Energy MDX-1K DC magnetron drive, KYKY composite vacuum gauge, and gas flow control for high-quality semiconductor sputtering and plasma surface treatment.',
      ja: 'Advanced Energy MDX-1K DCドライブ、KYKY複合真空計、ガス流量制御を備え、高品質な半導体薄膜スパッタリング成膜およびプラズマ表面処理を実施。',
    },
    image: '/images/equipment/deposition-system.webp',
    specs: [
      { zh: 'Advanced Energy MDX-1K 穩定直流／脈衝磁控電源供應器', en: 'Advanced Energy MDX-1K regulated DC magnetron power supply', ja: 'Advanced Energy MDX-1K 安定直流マグネトロン電源' },
      { zh: 'KYKY 複合型真空計與多路精密質量流量控制器 (MFC)', en: 'KYKY composite vacuum gauge and precision gas mass flow controllers', ja: 'KYKY複合真空計・精密マスフローコントローラー搭載' },
      { zh: '支援 Ar / O₂ / N₂ 等多氣氛電漿表面改質與反應性濺鍍', en: 'Supports Ar / O₂ / N₂ reactive sputtering and plasma treatment', ja: 'Ar / O₂ / N₂ ガスによる反応性スパッタリング・プラズマ改質対応' },
    ],
    applications: [
      { zh: '透明導電氧化物薄膜（ITO、AZO）與金屬氧化物半導體濺鍍', en: 'Sputtering of TCO films (ITO, AZO) and metal oxide semiconductors', ja: '透明導電酸化物薄膜（ITO、AZO）・金属酸化物半導体の成膜' },
      { zh: '氬氣電漿處理對 MAPbI₃ 鈣鈦礦薄膜結晶與光電特性影響研究', en: 'Argon plasma treatment of MAPbI₃ perovskite thin films', ja: 'アルゴンプラズマ処理によるMAPbI₃ペロブスカイト膜の特性改質' },
      { zh: '寬能隙薄膜緩衝層與抗氧化保護層鍍膜', en: 'Buffer layer and passivation thin-film coating', ja: 'バッファ層・保護膜の成膜プロセス' },
    ],
  },
  {
    name: {
      zh: '大尺寸高功率照明積分球量測系統',
      en: 'Large-Aperture Luminaire Integrating Sphere System',
      ja: '大口径高出力照明積分球計測システム',
    },
    desc: {
      zh: '大口徑光度量測積分球（大球），專門用於大尺寸高功率 LED 燈具、照明模組、植物生長燈及路燈樣品之全光通量 (Lumen)、發光效率與空間光分佈之精密收集與分析。',
      en: 'Large-diameter photometric integrating sphere dedicated to total luminous flux, luminous efficacy, and spatial light collection for high-power LED luminaires, plant lights, and streetlamp modules.',
      ja: '大口径測光積分球。大型高出力LED照明器具、植物育成灯、街路灯モジュールの全光束（ルーメン）、発光効率および配光特性の精密測定に対応。',
    },
    image: '/images/equipment/integrating-sphere-large.webp',
    specs: [
      { zh: '大口徑高漫反射率內壁塗層積分球體，適合大型燈具全角度集光', en: 'Large-aperture sphere with high-diffuse-reflectance interior coating', ja: '高拡散反射率コーティングを備えた大口径積分球本体' },
      { zh: '整合輔助燈自我吸收校正與多種尺寸電源治具', en: 'Supports auxiliary lamp self-absorption correction and luminaire fixtures', ja: '補助ランプ自己吸収補正および各種照明治具に対応' },
      { zh: '支援全光通量 (lm)、發光效率 (lm/W) 與長時間熱穩定性光衰量測', en: 'Measures total luminous flux (lm), efficacy (lm/W), and thermal lumen depreciation', ja: '全光束（lm）、発光効率（lm/W）、長時間熱光束維持率を計測' },
    ],
    applications: [
      { zh: '高功率 LED 路燈、投光燈及農用植物生長燈具整燈測試', en: 'Full-luminaire testing for LED streetlights, floodlights, and grow lights', ja: 'LED街路灯・投光器・植物育成灯の製品全体評価' },
      { zh: '二次光學透鏡與散熱模組搭配後之實際光學效能驗證', en: 'Optical efficiency validation after secondary lens & heatsink integration', ja: '二次光学レンズ・放熱モジュール統合後の実効光効率検証' },
      { zh: '產學合作照明模組出貨與節能性能比對', en: 'Industry-academia lighting module qualification and energy benchmarking', ja: '産学連携照明モジュールの性能評価・省エネ検証' },
    ],
  },
  {
    name: {
      zh: 'OPTIMUM IS-250 精密元件積分球量測系統',
      en: 'OPTIMUM IS-250 Precision Integrating Sphere System',
      ja: 'OPTIMUM IS-250 精密素子積分球計測システム',
    },
    desc: {
      zh: 'OPTIMUM IS-250 專業高精度桌面型積分球機台（小球），專門針對單顆微光電晶片、覆晶封裝 LED 元件與微型顯示光源，精確量測全波長光譜、CIE 色度座標 (x, y)、相關色溫 (CCT) 與光學演色性。',
      en: 'OPTIMUM IS-250 high-precision benchtop integrating sphere with fiber spectrometer, customized for single optoelectronic dies and flip-chip LEDs to measure full spectra, CIE coordinates, CCT, and CRI.',
      ja: 'OPTIMUM IS-250 高精度ベンチトップ型積分球。単一光電子チップ、フリップチップ実装LED素子および微小光源の全波長スペクトル、CIE色度座標、相関色温度（CCT）を高精度に計測。',
    },
    image: '/images/equipment/integrating-sphere-small.webp',
    specs: [
      { zh: 'OPTIMUM IS-250 桌上型精密光學積分球（搭配高靈敏光纖光譜儀）', en: 'OPTIMUM IS-250 benchtop integrating sphere paired with fiber spectrometer', ja: 'OPTIMUM IS-250 卓上型精密積分球＋光ファイバ分光器' },
      { zh: '完整讀取 380–780 nm（涵蓋近紫外至近紅外）發光光譜分佈', en: 'Full spectral acquisition across 380–780 nm (UV-Vis-NIR capable)', ja: '380–780 nm（近紫外～近赤外対応）の精密発光スペクトル測定' },
      { zh: '即時輸出 CIE 1931 (x, y)、主波長 (λd)、半高寬 (FWHM)、CCT 與 Ra 演色性', en: 'Real-time output of CIE (x, y), dominant wavelength, FWHM, CCT & CRI (Ra)', ja: 'CIE色度座標、主波長、半値幅（FWHM）、CCT、演色性（Ra）を即時算出' },
    ],
    applications: [
      { zh: '單顆覆晶封裝 LED 晶粒與 UV-LED 封裝前後光效比較', en: 'Chip-level luminous & spectral evaluation for flip-chip and UV-LED packages', ja: 'フリップチップLED・UV-LED素子のパッケージ前後光特性比較' },
      { zh: '量子點 (QD) 與螢光粉薄膜色域與色座標偏移分析', en: 'Color gamut & chromaticity shift analysis of quantum dot & phosphor films', ja: '量子ドット（QD）・蛍光体薄膜の色域・色度シフト解析' },
      { zh: '微投影光學引擎光源均勻性與光譜純度檢驗', en: 'Spectral purity testing for micro-projector optical light engines', ja: 'マイクロプロジェクタ用光源のスペクトル純度評価' },
    ],
  },
  {
    name: {
      zh: '精密量測工作台（信號源・電表・程控電源）',
      en: 'Precision Multi-Instrument Test Bench',
      ja: '精密計測ベンチ（信号発生器・マルチメータ・直流電源）',
    },
    desc: {
      zh: '整合 BK Precision 4055 任意波形產生器、5491B 雙顯示五位半數位電表及 MOTECH 可程控直流電源，提供全方位電路激勵與精密量測。',
      en: 'Integrated BK Precision 4055 arbitrary waveform generator, 5491B 50,000-count DMM, and MOTECH programmable DC power supply.',
      ja: 'BK Precision 4055任意波形発生器、5491B高精度デジタルマルチメータおよびMOTECHプログラマブル直流電源を統合した総合計測ベンチ。',
    },
    image: '/images/equipment/instruments-rack-card.webp',
    specs: [
      { zh: 'BK Precision 4055 雙通道函數／任意波形產生器', en: 'BK Precision 4055 dual-channel function/arbitrary waveform generator', ja: 'BK Precision 4055 2chファンクション・任意波形発生器' },
      { zh: 'BK Precision 5491B 雙顯示五位半高精度桌上型數位電表', en: 'BK Precision 5491B dual-display 50,000-count benchtop DMM', ja: 'BK Precision 5491B デュアル表示5桁半卓上マルチメータ' },
      { zh: 'MOTECH 可程控直流電源供應器（定電壓／定電流精密輸出）', en: 'MOTECH programmable DC power supply with CV/CC regulation', ja: 'MOTECH プログラマブル直流電源（定電圧・定電流精密出力）' },
    ],
    applications: [
      { zh: '高功率 LED 與半導體模組精準定電流老化與偏壓測試', en: 'Precision constant-current driving and burn-in testing of LEDs', ja: '高出力LEDモジュールの定電流駆動・エージング試験' },
      { zh: '感測電路增益、線性度與微小電壓電流變化校正', en: 'Amplifier gain, linearity, and micro-current calibration', ja: 'センサー回路のゲイン・直線性・微小電流校正' },
      { zh: '搭配 LabVIEW 自動掃頻與電腦自動化量測腳本控制', en: 'LabVIEW-controlled automated frequency sweep & PC data logging', ja: 'LabVIEW連携による自動掃引・PCデータ収録' },
    ],
  },
  {
    name: {
      zh: '普羅森 Phrozen FDM 3D 列印機',
      en: 'Phrozen FDM 3D Printer',
      ja: 'Phrozen FDM 3Dプリンター',
    },
    desc: {
      zh: '普羅森（Phrozen）高速封閉式 FDM 3D 列印機，配備封閉保溫機箱與頂部耗材防潮烘乾加熱盒，專門用於實驗量測治具、感測器外殼、結構構件與專案實作樣機之快速成型。',
      en: 'Phrozen high-speed enclosed FDM 3D printer with temperature-retaining chamber and top filament dry-box heater for rapid fabrication of test fixtures, sensor enclosures, and prototypes.',
      ja: 'Phrozen高速密閉型FDM 3Dプリンター。保温チャンバーと上部フィラメント防潮乾燥加熱ボックスを備え、計測用治具・センサーケース・プロトタイプ機構部品の迅速な試作造形に使用。',
    },
    image: '/images/equipment/3d-printer-card.webp',
    specs: [
      { zh: '高速 CoreXY 運動架構，具備主動封閉式保溫列印腔體', en: 'High-speed enclosed build chamber for dimensionally stable prints', ja: '高速造形対応の密閉保温チャンバー構造' },
      { zh: '整合頂部多軸防潮烘乾線材保存箱，抑制吸濕斷絲與氣泡', en: 'Integrated top heated filament dry-box preventing moisture absorption', ja: '上部ヒーター内蔵フィラメント乾燥保存ボックス統合' },
      { zh: '支援 PLA、PETG、ABS、TPU 等多種工程材料（精度達 0.1 mm）', en: 'Supports PLA, PETG, ABS, and TPU engineering filaments', ja: 'PLA、PETG、ABS、TPU等の多様なエンジニアリング材料に対応' },
    ],
    applications: [
      { zh: '全國創新實作競賽與國際研討會實機展示機構外殼製造', en: 'Custom mechanical enclosures for national & IEEE competition prototypes', ja: '全国コンテスト・国際学会向け試作機ケースの設計製作' },
      { zh: '光電量測暗箱、積分球樣品固定夾具與感測器支架客製化', en: 'Custom optical dark-box mounts, sphere holders, and sensor brackets', ja: '光計測用暗箱・積分球サンプルホルダ・センサー治具の製作' },
      { zh: 'IoT 落球式油濃度檢測與復健踏板發電系統結構件快速迭代', en: 'Rapid mechanical iteration for IoT oil sensors & rehab prototypes', ja: 'IoT油濃度計・リハビリ機構部品の迅速な試作開発' },
    ],
  },
];

export const safetyRules: { icon: string; title: L; desc: L; details?: L[] }[] = [
  {
    icon: '⚡',
    title: { zh: '接地與靜態測試', en: 'Grounding & Pre-checks', ja: '接地と事前点検' },
    desc: {
      zh: '所有儀器必須具備標準接地保護，通電前務必進行靜態測試與線路檢查，未經指導老師允許嚴禁擅自送電。',
      en: 'All instruments must be properly grounded. Perform static tests and wiring checks before powering on; never energize without the advisor’s permission.',
      ja: 'すべての機器は適切に接地すること。通電前に静的試験と配線確認を行い、指導教員の許可なく通電しないこと。',
    },
    details: [
      { zh: '確認所有高壓／加熱設備及量測機台皆接妥三孔獨立接地線。', en: 'Verify third-pin grounding on all high-voltage, thermal, and measurement equipment.', ja: '高電圧・加熱機器および測定器の接地線が確実に接続されているか確認する。' },
      { zh: '接線完成後先以三用電表量測阻抗，確認無短路後再行上電。', en: 'Check circuit resistance/continuity with a multimeter before applying power.', ja: '配線後にテスターで短絡がないことを確認してから通電する。' },
      { zh: '初次操作大型真空鍍膜或高壓設備須有學長姐或指導教授在場指導。', en: 'First-time operation of vacuum or high-power gear requires advisor or senior supervision.', ja: '真空蒸着・高電圧装置の初回操作は必ず指導教員または先輩の立会いのもとで行う。' },
    ],
  },
  {
    icon: '💧',
    title: { zh: '禁止濕手操作', en: 'No Wet Hands', ja: '濡れた手での操作禁止' },
    desc: {
      zh: '嚴禁以沾濕的雙手操作電氣設備。',
      en: 'Never operate electrical equipment with wet hands.',
      ja: '濡れた手で電気機器を操作しないこと。',
    },
    details: [
      { zh: '接觸開關、插頭、電源供應器及高壓端點前，務必保持雙手與地面完全乾燥。', en: 'Ensure hands and surrounding floor are dry before touching switches or plugs.', ja: 'スイッチ・コンセント・電源装置に触れる前に手と床面が乾いていることを確認する。' },
      { zh: '若實驗涉及冷卻水循環或切削液樣品，請先擦乾雙手再操作電腦與儀器面板。', en: 'Dry hands completely after handling cooling water loops or fluid samples.', ja: '冷却水循環系や液体試料を扱った後は十分に手を拭いてから機器を操作する。' },
      { zh: '發現延長線或插座周邊滲水時，應立即通報並由總閘處斷電。', en: 'If liquid leaks near outlets, shut off power from the main breaker immediately.', ja: 'コンセント周辺に水漏れを発見した場合は直ちに元ブレーカーを遮断して報告する。' },
    ],
  },
  {
    icon: '🚫',
    title: { zh: '禁止飲食', en: 'No Food or Drink', ja: '飲食禁止' },
    desc: {
      zh: '實驗室內全面禁止攜帶食物與飲料。',
      en: 'Food and drinks are strictly prohibited in the lab.',
      ja: '研究室内への飲食物の持ち込みは禁止。',
    },
    details: [
      { zh: '所有餐盒、手搖飲料與水瓶請統一放置於實驗室外休息區或指定置物架。', en: 'Leave all meals and beverages outside the lab area or on designated shelves.', ja: '食事や飲み物は研究室外の休憩スペースまたは指定の棚に置くこと。' },
      { zh: '避免液體打翻造成精密示波器、探針台與電腦設備短路損毀或誘發感電事故。', en: 'Prevent liquid spills from short-circuiting oscilloscopes, probe stations, or PCs.', ja: '液体こぼれによるオシロスコープやプローブ台の故障・感電事故を防止する。' },
      { zh: '避免食物殘渣吸引蟲蟻進入精密光學腔體與 PCB 電路系統。', en: 'Prevent crumbs from attracting pests into optical chambers and electronic circuits.', ja: '食べかすによる虫の侵入や精密光学・電子回路の汚損を防ぐ。' },
    ],
  },
  {
    icon: '👟',
    title: { zh: '服裝規定', en: 'Dress Code', ja: '服装規定' },
    desc: {
      zh: '嚴禁穿著拖鞋、涼鞋或短褲進入實驗室。',
      en: 'No slippers, sandals, or shorts in the lab.',
      ja: 'スリッパ・サンダル・短パンでの入室禁止。',
    },
    details: [
      { zh: '應穿著包覆腳趾與腳背的運動鞋或工作鞋，以防器材掉落壓傷或靜電／溶液濺傷。', en: 'Wear closed-toe shoes to protect feet from falling tools or chemical splashes.', ja: '機材落下や薬液飛散から足を守るため、つま先が覆われた靴を着用する。' },
      { zh: '應穿著長褲進入實驗區，操作熱蒸鍍與電焊設備時須避免過於寬鬆衣物捲入。', en: 'Wear long pants in lab zones; avoid loose sleeves near thermal or soldering equipment.', ja: '実験エリアでは長ズボンを着用し、加熱・はんだ付け作業時は袖の巻き込みに注意する。' },
      { zh: '進行化學藥劑或高溫封裝作業時，應依規定配戴護目鏡與防熱手套。', en: 'Wear safety goggles and heat-resistant gloves during chemical or high-temp bonding work.', ja: '薬品処理や高温実装作業時は保護メガネ・耐熱手袋を着用する。' },
    ],
  },
  {
    icon: '🐾',
    title: { zh: '禁止飼養寵物', en: 'No Pets Allowed', ja: 'ペット飼育・持ち込み禁止' },
    desc: {
      zh: '實驗室內全面嚴禁飼養或攜帶任何寵物，以維護環境衛生與精密光電儀器設備安全。',
      en: 'Keeping or bringing pets into the lab is strictly prohibited to ensure hygiene and the safety of precision optical equipment.',
      ja: '環境衛生の維持および精密光電測定機器の保護のため、研究室内でのペットの飼育や持ち込みは一切禁止します。',
    },
    details: [
      { zh: '實驗室內配備高靈敏積分球、光學顯微鏡與高壓電源，寵物進入易導致碰撞、咬線或誤觸開關。', en: 'Sensitive integrating spheres, microscopes, and high-voltage lines require a pet-free space.', ja: '高感度積分球・顕微鏡・高圧電源保護のためペットの立入りは厳禁です。' },
      { zh: '動物毛髮與皮屑會附著於薄膜製程載台與光學反射腔體，影響真空潔淨度與量測精度。', en: 'Pet hair and dander degrade vacuum chamber cleanliness and optical surface accuracy.', ja: '毛やフケが真空チャンバーや光学面の清浄度・測定精度に悪影響を及ぼします。' },
      { zh: '請勿於 ATC 0102 及相鄰量測區域暫放或飼養任何活體動物。', en: 'Do not keep or temporarily house any animals in ATC 0102 or adjacent measurement zones.', ja: 'ATC 0102および周辺計測エリアでの動物の飼育・一時預かりを禁止します。' },
    ],
  },
  {
    icon: '🧯',
    title: { zh: '不導電滅火設備', en: 'Non-conductive Extinguishers', ja: '非導電性消火設備' },
    desc: {
      zh: '實驗室配有不導電滅火設備，以因應電氣火災。',
      en: 'Non-conductive extinguishers are provided for electrical fires.',
      ja: '電気火災に備え、非導電性の消火器を設置。',
    },
    details: [
      { zh: '電氣設備起火（C 類火災）嚴禁潑水搶救，以免造成強烈觸電與火災擴大。', en: 'Never use water on electrical fires (Class C) to prevent fatal electric shock.', ja: '電気火災（C火災）には感電拡大を防ぐため絶対に水をかけないこと。' },
      { zh: '每位新進研究生均須熟記實驗室門口與電源總開關旁乾粉／CO₂ 滅火器位置。', en: 'Every student must know the exact location of CO₂ / dry-powder extinguishers by the exits.', ja: '全メンバーは入口および主電源付近のCO₂・粉末消火器の設置場所を熟知すること。' },
      { zh: '發生異常冒煙或火花時應優先切斷總電源、使用滅火器撲滅初期火源並撥打校安與 119。', en: 'On smoke or sparks, cut main power first, use extinguishers on small fires, and alert campus security / 119.', ja: '発煙・火花発生時はまず主電源を遮断し、初期消火と119番・学内通報を行う。' },
    ],
  },
];

export const electricShockSOP: L[] = [
  { zh: '立即切斷電源', en: 'Cut off the power immediately', ja: 'ただちに電源を遮断する' },
  {
    zh: '以乾燥不導電棒移開電線',
    en: 'Move the wire away with a dry, non-conductive rod',
    ja: '乾いた非導電性の棒で電線を離す',
  },
  { zh: '保持患者呼吸道暢通', en: 'Keep the victim’s airway clear', ja: '傷病者の気道を確保する' },
  { zh: '撥打 119 緊急送醫', en: 'Call 119 and seek medical help', ja: '119番通報し救急搬送する' },
];

export type News = { date: string; title: L; body?: L; image?: string; url?: string };

// 最新消息：新的放最上面
export const news: News[] = [
  {
    date: '2026-11-15',
    title: {
      zh: '實驗室全新官方網站於 11/15 正式上線',
      en: 'New Official Lab Website Officially Launched on 11/15',
      ja: '研究室公式ウェブサイト 11/15 正式公開のお知らせ',
    },
    body: {
      zh: '電子量測實驗室全新官方網站自 2026-11-07 啟動規劃建置，並於 2026-11-15 上線發布！全面支援萬國語言切換與深色模式，完整收錄實驗室六大研究領域、精密量測設備、歷年研究成果與成員介紹。',
      en: 'Following planning and development initiated on 2026-11-07, the new official website of the Electronic Measurement Lab officially launched on 2026-11-15! Featuring world language support and dark mode, showcasing our research areas, facilities, achievements, and members.',
      ja: '2026-11-07より企画・構築を進めていた電子計測研究室の公式ウェブサイトが、2026-11-15 に公開されました。多言語切替およびダークモードに対応し、研究分野、計測設備、研究成果、メンバー紹介を掲載しています。',
    },
    image: '/images/news/website-launch.webp',
  },
  {
    date: '2026-09-01',
    title: {
      zh: '歡迎 115 學年度碩一新生加入實驗室',
      en: 'Welcome to our new M.S. students',
      ja: '新入修士生を歓迎します',
    },
    body: {
      zh: '歡迎劉峻瑋、洪梓瑜、許育人加入電子量測實驗室！',
      en: 'Welcome Jun-Wei Liu, Zi-Yu Hong, and Yu-Ren Xu to the Electronic Measurement Lab!',
      ja: '劉峻瑋さん、洪梓瑜さん、許育人さん、電子計測研究室へようこそ！',
    },
    image: '/images/news/admissions-2026.webp',
  },
  {
    date: '2026-03-30',
    title: {
      zh: '恭賀！本實驗室團隊榮獲 IEEE ICCT-Pacific 2026 最佳學生壁報論文獎',
      en: 'Congrats! Best Student Poster Award at IEEE ICCT-Pacific 2026',
      ja: '祝！IEEE ICCT-Pacific 2026 最優秀学生ポスター賞を受賞',
    },
    body: {
      zh: '陳文瑞教授指導本實驗室劉峻瑋、洪梓瑜、潘昱澤前往日本山口大學參加 ICCT-Pacific 2026 國際會議，發表論文「AIoT Base Smart Consumables Drying Cabinet」，榮獲 Best Student Poster Award！',
      en: 'Prof. Wen-Ray Chen and lab members Jun-Wei Liu, Zi-Yu Hong, and Yu-Zan Pan won the Best Student Poster Award at IEEE ICCT-Pacific 2026 in Yamaguchi, Japan.',
      ja: '陳文瑞教授の指導のもと、当研究室の劉峻瑋・洪梓瑜・潘昱澤が日本・山口大学で開催されたIEEE ICCT-Pacific 2026にて「AIoT Base Smart Consumables Drying Cabinet」を発表し、最優秀学生ポスター賞を受賞しました。',
    },
    image: '/images/seniors/icct-2026-award.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E9%9B%BB%E5%AD%90%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E5%8A%89%E5%B3%BB%E7%91%8B-%E6%B4%AA%E6%A2%93%E7%91%9C-%E6%BD%98%E6%98%B1%E6%BE%A4-%E7%9B%A7%E6%9A%90%E7%AB%91%E5%8F%83%E5%8A%A0-ICCT-Pacific-2026-2026-03-29-Yamaguchi-Japan-%E5%9C%8B%E9%9A%9B%E6%9C%83%E8%AD%B0-%E7%8D%B2%E5%BE%97%E6%9C%80%E4%BD%B3%E5%AD%B8%E7%94%9F%E5%A3%81%E5%A0%B1%E8%AB%96%E6%96%87%E7%8D%8EBest-Student-Poster-Award-%E8%AB%96%E6%96%87%E4%B8%BB%E9%A1%8C-AIoT-Base-Smart-Consumables-Drying-Cabinet-69367103',
  },
  {
    date: '2025-11-20',
    title: {
      zh: '恭賀！榮獲 2025 全國大專院校產學創新實作競賽「第三名」',
      en: 'Congrats! 3rd Place at 2025 National Intercollegiate Innovation Competition',
      ja: '祝！2025 全国大学産学イノベーション実装コンテスト「第3位」受賞',
    },
    body: {
      zh: '陳文瑞教授指導本實驗室陳昱琮、潘昱澤、許育人以「智慧型即時跌倒偵測系統之開發與應用」榮獲機械自動化及手工具創新組全國第三名！',
      en: 'Advised by Prof. Wen-Ray Chen, lab members Yu-Cong Chen, Yu-Zan Pan, and Yu-Ren Xu won 3rd Place with "Smart Real-Time Fall Detection System".',
      ja: '陳文瑞教授の指導のもと、当研究室の陳昱琮・潘昱澤・許育人が「スマートリアルタイム転倒検知システムの開発と応用」で第3位を受賞しました。',
    },
    image: '/images/news/innovation-2025.webp',
    url: 'https://eedept.ncue.edu.tw/innovation2025/s2.html#winning-list',
  },
  {
    date: '2024-11-26',
    title: {
      zh: '恭賀！榮獲 2024 全國大專院校產學創新實作競賽「手工具創新設計獎」',
      en: 'Hand-Tool Innovation Design Award at 2024 National Innovation Competition',
      ja: '2024 全国大学産学イノベーション実装コンテスト「ハンドツール革新デザイン賞」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊朱囿儒、林學澤、張翔袁、陳昱琮、潘昱澤參加 2024 全國大專院校產學創新實作競賽，以「踏板發電在智慧老年健康復健系統的應用」榮獲手工具創新設計獎。',
      en: 'Awarded for "Pedal Power Generation in Smart Elderly Rehabilitation Systems" advised by Prof. Wen-Ray Chen, team: Yu-Ru Zhu, Xue-Ze Lin, Xiang-Yuan Zhang, Yu-Cong Chen, Yu-Zan Pan.',
      ja: '陳文瑞教授が指導する学生チーム（朱囿儒、林學澤、張翔袁、陳昱琮、潘昱澤）が「ペダル発電を用いた高齢者スマート健康リハビリシステム」で受賞しました。',
    },
    image: '/images/seniors/innovation-2024-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%8F%83%E5%8A%A0%E3%80%8E2024%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F-%E6%A6%AE%E7%8D%B2%E6%89%8B%E5%B7%A5%E5%85%B7%E5%89%B5%E6%96%B0%E8%A8%AD%E8%A8%88%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-43444169',
  },
  {
    date: '2023-12-01',
    title: {
      zh: '恭賀！榮獲 2023 全國大專院校產學創新實作競賽「佳作獎」',
      en: 'Honorable Mention at 2023 National Innovation Competition',
      ja: '祝！2023 全国大学産学イノベーション実装コンテスト「佳作」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊林揚恩、陳靖中、林學澤、朱囿儒、張翔袁參加 2023 全國大專院校產學創新實作競賽，以「應用於金屬加工液的 IOT 落球式油濃度量測系統」榮獲佳作獎！',
      en: 'Advised by Prof. Wen-Ray Chen, students Yang-En Lin, Jing-Zhong Chen, Xue-Ze Lin, Yu-Ru Zhu, and Xiang-Yuan Zhang won Honorable Mention for IoT Falling-Ball Oil Concentration Measurement System.',
      ja: '陳文瑞教授の指導のもと、林揚恩・陳靖中・林學澤・朱囿儒・張翔袁が「金属加工液向けIoT落球式油濃度計測システム」で佳作を受賞しました。',
    },
    image: '/images/seniors/innovation-2023-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E6%9E%97%E6%8F%9A%E6%81%A9-%E9%99%B3%E9%9D%96%E4%B8%AD-%E6%9E%97%E5%AD%B8%E6%BE%A4-%E6%9C%B1%E5%9B%BF%E5%84%92-%E5%BC%B5%E7%BF%94%E8%A2%81%E5%8F%83%E5%8A%A0%E3%80%8E2023%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E9%99%A2%E6%A0%A1%E7%94%A2%E5%AD%B8%E5%89%B5%E6%96%B0%E5%AF%A6%E4%BD%9C%E7%AB%B6%E8%B3%BD%E3%80%8F%E6%A6%AE%E7%8D%B2%E4%BD%B3%E4%BD%9C%E7%8D%8E-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-70098888',
  },
  {
    date: '2021-10-27',
    title: {
      zh: '恭賀！榮獲 2021 台灣創新技術博覽會 (TIE) 發明競賽「銅牌獎」',
      en: 'Bronze Medal at 2021 Taiwan Innotech Expo (TIE)',
      ja: '祝！2021 台湾イノテックエキスポ「銅賞」受賞',
    },
    body: {
      zh: '陳文瑞教授指導學生團隊蕭宇良、陳彰、張日星、葉佩欣參加 2021 台灣創新技術博覽會 (TIE)，以「電池履歷系統」榮獲發明競賽銅牌獎！',
      en: 'Advised by Prof. Wen-Ray Chen, students Yu-Liang Xiao, Zhang Chen, Ri-Xing Zhang, and Pei-Xin Ye won the Bronze Medal for Battery History System at 2021 Taiwan Innotech Expo.',
      ja: '陳文瑞教授の指導のもと、蕭宇良・陳彰・張日星・葉佩欣が「バッテリー履歴管理システム」で2021 台湾イノテックエキスポ銅賞を受賞しました。',
    },
    image: '/images/seniors/tie-2021-team.webp',
    url: 'https://dee.nfu.edu.tw/zh_tw/news/Announcements/%E6%81%AD%E8%B3%80-%E6%9C%AC%E7%B3%BB%E9%99%B3%E6%96%87%E7%91%9E%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E8%95%AD%E5%AE%87%E8%89%AF-%E9%99%B3%E5%BD%B0-%E5%BC%B5%E6%97%A5%E6%98%9F-%E8%91%89%E4%BD%A9%E6%AC%A3%E5%8F%83%E5%8A%A0%E3%80%8E2021%E5%8F%B0%E7%81%A3%E5%89%B5%E6%96%B0%E6%8A%80%E8%A1%93%E5%8D%9A%E8%A6%BD%E6%9C%83%E3%80%8F%E6%9C%9F%E9%96%93110-10-14-110-10-16-%E4%BB%A5%E3%80%8E%E9%9B%BB%E6%B1%A0%E5%B1%A5%E6%AD%B7%E7%B3%BB%E7%B5%B1%E3%80%8F-%E6%A6%AE%E7%8D%B2%E9%8A%85%E7%89%8C-%E9%9B%BB%E5%AD%90%E7%B3%BB%E5%85%A8%E9%AB%94%E5%B8%AB%E7%94%9F%E6%81%AD%E8%B3%80-38391016',
  },
];
