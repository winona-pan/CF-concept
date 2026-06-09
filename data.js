// Auto-generated course data. Do not edit by hand.
window.LESSONS = [
 {
  "id": "ch13",
  "code": "Ch 13",
  "lecture": "Lecture 6",
  "title_en": "Risk, Cost of Capital, and Valuation",
  "title_zh": "風險、資本成本與評價",
  "intro_en": "How a firm decides the minimum return a project must earn — the cost of capital — using CAPM, beta, the dividend model, and the weighted average cost of capital (WACC).",
  "intro_zh": "公司如何決定一個投資計畫「最低該賺多少」——也就是資本成本。用到 CAPM、beta、股利折現模型(DDM)，以及加權平均資本成本(WACC)。",
  "cards": [
   {
    "t": "concept",
    "term_en": "Why a cost of capital exists",
    "term_zh": "為什麼會有「資本成本」",
    "en": "A firm with excess cash can either pay a dividend or invest in a project. Because shareholders could reinvest that dividend in a financial asset of comparable risk, a project must be expected to return at least as much as that financial asset. That hurdle return is the cost of capital.",
    "zh": "「資本成本」就是公司投資一個專案時，最低應該賺到的報酬率，也常被叫做「門檻報酬率 (hurdle rate)」。\n\n為什麼會有這個門檻？想像公司手上有一筆閒錢，它有兩條路：一是把錢當股利發給股東，二是拿去投資專案。\n\n如果發股利，股東可以把這筆錢投到「風險相當」的金融資產上，賺到某個報酬。所以公司自己投資的專案，至少要賺得跟「股東自己投資同風險資產」一樣多，否則股東寧可拿股利自己投。\n\n結論：專案的期望報酬 ≥ 同風險金融資產的期望報酬，這個下限就是資本成本。低於它的專案會損害股東利益，應該被拒絕。"
   },
   {
    "t": "formula",
    "name_en": "CAPM — Cost of equity",
    "name_zh": "CAPM — 權益資本成本",
    "latex": "R_S = R_f + \\beta \\times (R_M - R_f)",
    "en": "The required return on equity equals the risk-free rate plus beta times the market risk premium.",
    "zh": "CAPM（資本資產定價模型）是估計「權益資本成本」最常用的方法，也就是股東要求的報酬率 R_S。\n\n公式拆成兩塊：\n• R_f（無風險利率）：不冒風險也能拿到的報酬，例如國庫券利率。這是「基本盤」。\n• β × (R_M − R_f)：因為承擔了市場風險，額外要求的補償。β 越大、市場風險溢酬越高，要求的報酬就越多。\n\n例如：R_f = 3%，市場風險溢酬 (R_M − R_f) = 7%，某股票 β = 1.2，則\nR_S = 3% + 1.2 × 7% = 3% + 8.4% = 11.4%。\n\n直覺：β = 1 代表跟大盤一樣風險，要求報酬 = 市場報酬；β > 1 風險較大、要求更高；β < 1 較保守、要求較低。",
    "vars_en": "R_f = risk-free rate (proxy: Treasury bill rate); R_M − R_f = market risk premium; β = stock beta.",
    "vars_zh": "R_f＝無風險利率（常用國庫券利率代替）；R_M − R_f＝市場風險溢酬；β＝個股 beta。"
   },
   {
    "t": "concept",
    "term_en": "Three inputs the CAPM needs",
    "term_zh": "CAPM 需要的三個輸入值",
    "en": "To use the CAPM you need (1) the risk-free rate, (2) the market risk premium, and (3) the stock's beta. The market risk premium can be estimated from historical data or from the dividend model.",
    "zh": "要用 CAPM 算權益成本，必須先估出三個輸入值：\n\n1. 無風險利率 R_f：通常用國庫券利率當代理變數，例如一年期國庫券利率。\n\n2. 市場風險溢酬 (R_M − R_f)：兩種估法——\n   • 歷史資料法：用過去長期的市場平均報酬減去無風險利率。\n   • 股利折現模型 (DDM) 法：以整體市場的股利殖利率加上股利成長率推估市場報酬 R_M，再減 R_f。\n\n3. 個股的 β：衡量該股票對市場波動的敏感度（下一張卡片會講怎麼算）。\n\n三個都到位，代入 R_S = R_f + β(R_M − R_f) 即可。"
   },
   {
    "t": "formula",
    "name_en": "Beta of a security",
    "name_zh": "個股 beta 定義",
    "latex": "\\beta_i = \\frac{\\mathrm{Cov}(R_i, R_M)}{\\mathrm{Var}(R_M)} = \\frac{\\sigma_{i,M}}{\\sigma_M^2}",
    "en": "Beta measures how much a stock's return co-moves with the market relative to the market's own variance. It is the systematic-risk measure.",
    "zh": "β（貝它）衡量「個股報酬跟著大盤一起波動的程度」，是系統性風險（無法靠分散消除的風險）的指標。\n\n公式是「個股與市場報酬的共變異數」除以「市場報酬的變異數」。可以想成：個股漲跌有多少是被大盤帶動的。\n\n怎麼取得 β？\n• 迴歸法：拿個股的歷史報酬對市場報酬做迴歸，斜率就是 β。\n• 產業 β：直接引用如 Value Line 提供的同業 β。\n\n解讀：β = 1 與大盤同步；β = 1.5 大盤漲 1%、個股平均漲 1.5%（也跌得更兇）；β = 0.5 波動只有大盤一半，相對抗跌。",
    "vars_zh": "Cov(R_i, R_M) = 個股與市場報酬的共變異數；Var(R_M) = 市場報酬的變異數。"
   },
   {
    "t": "concept",
    "term_en": "Problems & fixes when estimating beta",
    "term_zh": "估 beta 的問題與解法",
    "en": "Betas vary over time, samples may be too small, and beta is affected by financial leverage and business risk. Fixes: better statistics, adjust for business/financial risk, and use the average beta of comparable industry firms.",
    "zh": "用歷史資料估 β 會遇到三個問題：\n\n1. β 會隨時間改變——過去的 β 不一定代表未來。\n2. 樣本數可能不足——資料太少，估出來的 β 不可靠。\n3. β 受「財務槓桿」與「營運(商業)風險」影響——公司借更多錢、或本業風險改變，都會讓 β 跑掉。\n\n對應的解法：\n• 問題 1、2：用更精細的統計方法（例如調整、加權）來緩解。\n• 問題 3：依商業與財務風險的變化做調整。\n• 通用做法：參考「同產業多家可比公司」的平均 β，比單押一家公司穩定得多。"
   },
   {
    "t": "concept",
    "term_en": "Determinants of beta",
    "term_zh": "決定 beta 的因素",
    "badge": "重點",
    "en": "Beta is driven by firm characteristics: (1) Cyclicality of revenues — more cyclical → higher beta. (2) Operating leverage — high fixed / low variable costs → higher beta. (3) Financial leverage — more debt → higher equity beta.",
    "zh": "β 由公司本身的三項特質決定，這也是考試最愛問的「β 的決定因素」：\n\n1. 營收的景氣循環性 (cyclicality)：產品銷售跟著景氣大起大落的公司（如航空、汽車、奢侈品），β 高；民生必需品（如水電、食品）需求穩定，β 低。\n\n2. 營運槓桿 (operating leverage)：固定成本高、變動成本低的公司營運槓桿高 → β 高。因為一旦營收下滑，固定成本照付，獲利會被放大地往下掉。\n\n3. 財務槓桿 (financial leverage)：負債越多，利息這種「財務固定成本」越重，會把股東報酬的波動放大 → 股東 β（權益 β）越高。\n\n一句話記：循環性高、固定成本高、借錢多 → β 高、風險大。"
   },
   {
    "t": "formula",
    "name_en": "Levering equity beta (zero debt beta)",
    "name_zh": "財務槓桿與權益 beta",
    "latex": "\\beta_{Equity} = \\beta_{Asset}\\left(1 + \\frac{B}{S}\\right)",
    "en": "With riskless debt (β_debt ≈ 0), the levered equity beta equals the asset beta scaled up by leverage. A levered firm's equity beta is always greater than an all-equity firm's beta.",
    "zh": "這條公式講「財務槓桿如何放大股東的 β」。\n\n先理解：整間公司（資產）的 β 是「股東 β」與「債權人 β」依市值權重的加權平均。當公司的負債近乎無風險時，債權人的 β ≈ 0，整理後就得到這條式子。\n\n意義：有借錢（有槓桿）公司的「權益 β」= 資產 β ×（1 + 負債/權益）。因為 (1 + B/S) 一定大於 1，所以——\n\n有槓桿公司的股東 β，永遠大於同樣資產但「全用股權、零負債」公司的 β。借越多錢，B/S 越大，股東承擔的風險被放大得越厲害。\n\n例如：資產 β = 0.8，B/S = 1（負債和權益一樣多），則權益 β = 0.8 × (1 + 1) = 1.6，整整放大一倍。",
    "vars_en": "B = market value of debt; S = market value of equity.",
    "vars_zh": "β_Asset = 資產(未槓桿)β；B = 負債市值；S = 權益市值；B/S = 負債權益比。"
   },
   {
    "t": "formula",
    "name_en": "Dividend Discount Model (DDM) cost of equity",
    "name_zh": "股利折現模型(DDM)",
    "latex": "R_S = \\frac{Div_1}{P_0} + g",
    "en": "An alternative to CAPM: required equity return = next year's dividend yield + dividend growth rate. Growth g = retention ratio × ROE, or the historical dividend growth rate.",
    "zh": "DDM（股利折現模型）是 CAPM 之外，估權益成本的另一種方法。\n\n公式：股東要求報酬 = 下一年的股利殖利率 (Div₁/P₀) + 股利成長率 g。\n\n成長率 g 怎麼來？兩種：\n• g = 保留盈餘比率 × ROE（公司把多少盈餘留下來再投資，乘上再投資的報酬率）。\n• 或直接用歷史的股利平均成長率。\n\n例如：目前股價 P₀ = $50，預期明年股利 Div₁ = $2，股利成長率 g = 5%，則\nR_S = 2/50 + 5% = 4% + 5% = 9%。\n\n直覺：股東報酬一部分來自每年領的股利（殖利率），一部分來自股利逐年成長（資本利得）。",
    "vars_en": "Div_1/P_0 = next-year dividend yield; g = dividend growth rate.",
    "vars_zh": "Div₁ = 下一期(明年)股利；P₀ = 目前股價；g = 股利成長率。"
   },
   {
    "t": "concept",
    "term_en": "DDM vs CAPM",
    "term_zh": "DDM 與 CAPM 的比較",
    "en": "Both are internally consistent, but academics and companies tend to favor the CAPM. DDM suffers from measurement error in estimating growth, and cannot handle low- or no-dividend stocks.",
    "zh": "DDM 和 CAPM 兩種方法在理論上都自洽，但實務與學界較偏好 CAPM，原因在於 DDM 有兩個明顯弱點：\n\n1. 成長率 g 很難估準，估錯一點點，算出的報酬就差很多（測量誤差大）。\n\n2. DDM 無法處理「低股利或不發股利」的公司——分母邏輯整個失效，例如很多成長型科技股。\n\n相對地，CAPM 只要有 β 與市場參數就能用，適用範圍更廣，因此成為主流。但兩者可互相參照、交叉驗證。"
   },
   {
    "t": "formula",
    "name_en": "After-tax cost of debt & cost of preferred",
    "name_zh": "負債與特別股成本",
    "latex": "R_B(1-t_c)\\quad;\\quad R_P = \\frac{D}{PV}",
    "en": "Interest is tax-deductible, so the relevant cost of debt is the borrowing rate times (1 − tax rate). Cost of preferred stock = preferred dividend ÷ price (no tax adjustment, dividends are not deductible).",
    "zh": "這張卡片講「債務」與「特別股」的資本成本。\n\n債務成本（稅後）：因為利息可以「抵稅」，公司實際負擔的成本要打折。\n稅後債務成本 = 借款利率 R_B × (1 − 稅率 t_c)。\n例如：借款利率 8%、公司稅率 25%，則稅後成本 = 8% × (1 − 0.25) = 6%。利息抵稅替公司省下了 2%。\n\n特別股成本：R_P = 特別股股利 D ÷ 特別股價格。注意特別股股利「不能抵稅」，所以沒有 (1 − t_c) 這一項。\n例如：每年固定股利 $5、市價 $50，則 R_P = 5/50 = 10%。\n\n重點對比：債務利息可抵稅（要乘 1 − t_c）；特別股與普通股的股利都不能抵稅。",
    "vars_en": "R_B = borrowing rate; t_c = corporate tax rate; D = preferred dividend; PV = price.",
    "vars_zh": "R_B = 稅前借款利率；t_c = 公司稅率；D = 特別股每股股利；PV = 特別股價格。"
   },
   {
    "t": "formula",
    "name_en": "Weighted Average Cost of Capital (WACC)",
    "name_zh": "加權平均資本成本(WACC)",
    "latex": "R_{WACC} = \\frac{S}{S+B}R_S + \\frac{B}{S+B}R_B(1-t_c)",
    "en": "When a firm uses both debt and equity, its cost of capital is the market-value-weighted average of the cost of equity and the after-tax cost of debt. WACC is the discount rate for the firm's average-risk projects.",
    "zh": "WACC（加權平均資本成本）是公司同時用「股權」和「債務」融資時的整體資本成本，用市值權重把兩者加權平均。\n\n公式兩部分：\n• S/(S+B) × R_S：權益佔比 × 權益成本。\n• B/(S+B) × R_B(1−t_c)：債務佔比 × 稅後債務成本。\n\n例如：權益市值 S = 600、債務市值 B = 400（總值 1000），R_S = 12%、R_B = 8%、稅率 25%。\nWACC = (600/1000)×12% + (400/1000)×8%×(1−0.25)\n     = 0.6×12% + 0.4×6% = 7.2% + 2.4% = 9.6%。\n\n用途：WACC 是評估「公司平均風險專案」時的折現率。若專案風險與公司整體不同，就要另外調整，不能直接套 WACC。",
    "vars_en": "Weights use market values; only debt gets the (1 − t_c) tax shield.",
    "vars_zh": "S = 權益市值；B = 債務市值；R_S = 權益成本；R_B = 稅前債務成本；t_c = 稅率。權重一定用『市值』而非帳面值。"
   }
  ],
  "key": "ch13"
 },
 {
  "id": "ch18",
  "code": "Ch 18",
  "lecture": "Lecture 6",
  "title_en": "Valuation & Capital Budgeting for the Levered Firm",
  "title_zh": "槓桿公司的評價與資本預算",
  "intro_en": "Three equivalent ways to value a project that is partly financed by debt: APV, Flow-to-Equity (FTE), and WACC.",
  "intro_zh": "當計畫部分用『負債』融資時，三種等價的評價方法：APV、權益現金流量法(FTE)、WACC 法。並說明 beta 與槓桿的關係。",
  "cards": [
   {
    "t": "formula",
    "name_en": "Adjusted Present Value (APV)",
    "name_zh": "調整現值法 APV",
    "latex": "APV = NPV + NPVF",
    "en": "Value the project as if all-equity (NPV), then add the present value of financing side effects (NPVF). Side effects: the debt tax subsidy, issue costs of new securities, costs of financial distress, and subsidies to debt financing.",
    "zh": "APV（調整現值法）是評估「有舉債公司」專案的三大方法之一。\n\n核心想法：把專案先當成「完全用股權、沒有負債」來評價，算出基本 NPV；再把「融資帶來的副作用現值 (NPVF)」加回去。\n\nAPV = 全股權的 NPV + 融資副作用的現值。\n\n融資副作用有哪些？\n• 負債的利息「稅盾」（正面，增加價值）。\n• 發行新證券的發行成本（負面）。\n• 財務危機/破產成本（負面）。\n• 政府給的補貼性貸款（正面）。\n\n精神：把「本業價值」和「融資怎麼安排帶來的好壞」分開算，再相加，邏輯很清楚。",
    "vars_en": "NPV = all-equity value; NPVF = PV of financing side effects.",
    "vars_zh": "NPV = 假設全用股權的專案淨現值；NPVF = 融資副作用（稅盾、發行成本、危機成本等）的淨現值。"
   },
   {
    "t": "formula",
    "name_en": "APV with debt tax shield",
    "name_zh": "APV（含抵稅）",
    "latex": "APV = NPV + t_c \\times B",
    "en": "For perpetual debt, the present value of the interest tax shield is simply the tax rate times the amount of debt. A project rejected on NPV alone may be accepted once the tax benefit of debt is added.",
    "zh": "這是 APV 最常用的簡化版：當公司舉借「永久債務」時，利息稅盾的現值剛好等於「稅率 × 負債金額」。\n\nAPV = 全股權 NPV + t_c × B。\n\n例如：某專案全股權 NPV = −$50 萬（單看本業是虧的），但為它舉借了 $400 萬永久債、稅率 25%。\n稅盾現值 = 0.25 × 400 = $100 萬。\nAPV = −50 + 100 = +$50 萬 > 0 → 改為「接受」。\n\n重點觀念：一個只看 NPV 會被否決的專案，加進「借錢的抵稅好處」後，可能反而值得做。這就是 APV 想凸顯的——融資安排本身會創造價值。",
    "vars_en": "t_c = tax rate; B = amount of debt.",
    "vars_zh": "t_c = 公司稅率；B = 負債金額。此式假設『永久債務』，稅盾每年固定、可永續折現。"
   },
   {
    "t": "concept",
    "term_en": "Flow-to-Equity (FTE) — idea",
    "term_zh": "權益現金流量法 FTE—概念",
    "en": "Discount only the cash flow that belongs to equity holders (levered cash flow, LCF) at the cost of levered equity R_S. Steps: (1) compute LCF, (2) compute R_S, (3) discount LCF at R_S and subtract the equity portion of the investment.",
    "zh": "FTE（股權現金流量法）只關注「真正流到股東口袋」的現金流。\n\n做法分三步：\n1. 算出「槓桿後現金流 (LCF)」：扣掉付給債權人的稅後利息後，剩給股東的現金。\n2. 算出「槓桿後權益成本 R_S」：因為有負債，股東要求的報酬會比較高。\n3. 把 LCF 用 R_S 折現，再「只」扣掉股東出的那部分投資（不是全部投資，因為有一部分是借來的）。\n\n與另兩法的差別：APV、WACC 折現的是「全公司的未槓桿現金流」並扣全部投資；FTE 是「站在股東角度」，折現股東現金流、只扣股東投入。三者算對的話答案會一致。"
   },
   {
    "t": "formula",
    "name_en": "Levered cash flow (LCF)",
    "name_zh": "舉債後現金流量",
    "latex": "LCF = UCF - (1-t_c)\\,R_B B",
    "en": "Levered cash flow equals the unlevered cash flow minus the after-tax interest payment to debt holders.",
    "zh": "LCF（槓桿後現金流）就是「先還完債權人，剩下給股東」的現金流。\n\nLCF = 未槓桿現金流 UCF − 稅後利息 (1 − t_c)×R_B×B。\n\n為什麼利息要乘 (1 − t_c)？因為利息可抵稅，公司實際付出的利息負擔是稅後的。\n\n例如：UCF = $100、負債 B = $500、利率 R_B = 8%、稅率 25%。\n稅後利息 = (1 − 0.25) × 8% × 500 = 0.75 × 40 = $30。\nLCF = 100 − 30 = $70，這 $70 才是股東能分到的現金流。",
    "vars_en": "UCF = unlevered cash flow; R_B B = interest payment.",
    "vars_zh": "UCF = 未槓桿(全股權)現金流；t_c = 稅率；R_B = 利率；B = 負債。乘 (1−t_c) 是因利息可抵稅。"
   },
   {
    "t": "formula",
    "name_en": "Cost of levered equity (MM Prop II w/ taxes)",
    "name_zh": "有舉債權益成本",
    "latex": "R_S = R_0 + \\frac{B}{S}(1-t_c)(R_0 - R_B)",
    "en": "The cost of levered equity rises with leverage. R_0 is the all-equity (unlevered) cost of capital. This is MM Proposition II with corporate taxes.",
    "zh": "這是「MM 第二命題（含公司稅）」：槓桿後的權益成本 R_S 會隨著借錢變多而上升。\n\nR_S = R₀ + (B/S)(1 − t_c)(R₀ − R_B)。\n\n直覺：R₀ 是「完全不借錢」時的資本成本（基準）。一旦開始借錢，股東承擔的風險變大，因此要求更高的報酬，多出來的部分就是 (B/S)(1−t_c)(R₀−R_B)。\n\n例如：R₀ = 12%、R_B = 8%、稅率 25%、B/S = 0.5。\nR_S = 12% + 0.5 × 0.75 × (12% − 8%) = 12% + 0.5 × 0.75 × 4% = 12% + 1.5% = 13.5%。\n\n重點：借越多錢 (B/S 越大)，R_S 越高——股東要承擔的財務風險被放大。",
    "vars_en": "R_0 = unlevered cost of capital; R_B = cost of debt; B/S = debt-equity ratio.",
    "vars_zh": "R₀ = 全股權(未槓桿)資本成本；B/S = 負債權益比；t_c = 稅率；R_B = 債務成本。"
   },
   {
    "t": "formula",
    "name_en": "WACC method",
    "name_zh": "WACC 法",
    "latex": "NPV = \\sum_{t=1}^{\\infty}\\frac{UCF_t}{(1+R_{WACC})^t} - \\text{Initial investment}",
    "en": "Discount the project's unlevered cash flows at the WACC and subtract the full initial investment. The debt benefit is already inside the (1 − t_c) term of the WACC.",
    "zh": "WACC 法是實務上最常用的評價方式：直接把專案的「未槓桿現金流 (UCF)」用 WACC 折現，再扣掉「全部」的期初投資。\n\nNPV = Σ UCF_t /(1+WACC)^t − 期初投資。\n\n關鍵：借錢的好處（利息抵稅）已經藏在 WACC 公式裡的 (1 − t_c) 那一項了，所以這裡不用再另外加稅盾，否則會重複計算。\n\n例如：某永續專案每年 UCF = $120 萬，WACC = 10%，期初投資 $1000 萬。\n專案現值 = 120 / 0.10 = $1200 萬，NPV = 1200 − 1000 = +$200 萬。\n\n與 APV 的差異：APV 把稅盾「另外加」；WACC 法把稅盾「內含在折現率」裡。",
    "vars_en": "UCF discounted at WACC; subtract total initial investment.",
    "vars_zh": "UCF = 未槓桿現金流；R_WACC = 加權平均資本成本（已含利息抵稅效果）。"
   },
   {
    "t": "concept",
    "term_en": "Which method to use?",
    "term_zh": "三種方法怎麼選？",
    "badge": "重點",
    "en": "Use WACC or FTE when the firm holds a constant target debt-to-VALUE ratio over the project's life. Use APV when the LEVEL (dollar amount) of debt is known/constant. In practice WACC is by far the most widely used; FTE suits highly levered firms.",
    "zh": "三種方法（APV、FTE、WACC）什麼時候用？關鍵看「負債目標是固定金額還是固定比例」：\n\n• 當公司維持「固定的目標負債/價值比例」（負債占公司價值的%固定）→ 用 WACC 或 FTE。\n• 當公司的負債「金額(水準)」是已知、固定的（例如就借這 $500 萬）→ 用 APV。\n\n實務上 WACC 法用得最廣，因為多數公司是按目標比例調整負債；FTE 則特別適合「高度槓桿」的公司（如 LBO），因為它直接從股東現金流出發。\n\n口訣：比例固定用 WACC/FTE，金額固定用 APV。"
   },
   {
    "t": "concept",
    "term_en": "Summary table of the three methods",
    "term_zh": "三法整理表",
    "en": "APV: discounts UCF at R_0, subtracts full investment, adds PV of financing effects. FTE: discounts LCF at R_S, subtracts only the equity portion, no separate financing PV. WACC: discounts UCF at R_WACC, subtracts full investment, no separate financing PV.",
    "zh": "三種方法的對照整理（很適合做考前速記）：\n\nAPV：折現「未槓桿現金流 UCF」用 R₀（全股權成本）→ 扣「全部」投資 → 再「另外加」融資副作用的現值。\n\nFTE：折現「槓桿後現金流 LCF」用 R_S（槓桿後權益成本）→ 只扣「股東出的那部分」投資 → 不另外算融資現值（因為已反映在現金流與折現率中）。\n\nWACC：折現「未槓桿現金流 UCF」用 R_WACC → 扣「全部」投資 → 不另外算融資現值（稅盾已含在 WACC 裡）。\n\n記憶法：折現率搭配的現金流要「一致」——R₀/WACC 配 UCF，R_S 配 LCF。"
   },
   {
    "t": "formula",
    "name_en": "Beta & leverage — No-tax case",
    "name_zh": "beta 與槓桿（無稅）",
    "latex": "\\beta_{Equity} = \\beta_{Unlevered}\\left(1 + \\frac{B}{S}\\right)",
    "en": "Without taxes and with riskless debt, equity beta equals the unlevered (asset) beta scaled up by the debt-equity ratio.",
    "zh": "這是「無稅」情況下，財務槓桿對股東 β 的影響。\n\nβ_Equity = β_Unlevered × (1 + B/S)。\n\n意思：在沒有稅、且負債無風險的假設下，股東的權益 β = 資產（未槓桿）β，再乘上 (1 + 負債權益比) 放大。\n\n例如：資產 β = 0.9，B/S = 0.5，則\nβ_Equity = 0.9 × (1 + 0.5) = 0.9 × 1.5 = 1.35。\n\n借錢讓股東承擔更多風險，所以權益 β 被往上放大。這條式子和 Ch13 那條本質相同（無稅版本）。",
    "vars_en": "B/S = debt-equity ratio.",
    "vars_zh": "β_Unlevered = 資產(未槓桿)β；B/S = 負債權益比。無稅、負債無風險的假設下成立。"
   },
   {
    "t": "formula",
    "name_en": "Beta & leverage — With taxes",
    "name_zh": "beta 與槓桿（有稅）",
    "latex": "\\beta_{Equity} = \\left[1 + (1-t_c)\\frac{B}{S}\\right]\\beta_{Unlevered}",
    "en": "With corporate taxes and riskless debt, the (1 − t_c) factor reduces the leverage effect. Because the bracket exceeds 1 for a levered firm, equity beta still exceeds the unlevered beta. Unlevering: β_U = [S /(S + (1 − t_c)B)] × β_Equity.",
    "zh": "這是「有公司稅」版本的槓桿對 β 的影響，比無稅版多了一個 (1 − t_c) 折減項。\n\nβ_Equity = [1 + (1 − t_c) × B/S] × β_Unlevered。\n\n因為利息抵稅減輕了部分風險衝擊，所以槓桿放大的效果被 (1 − t_c) 打了折，比無稅版「溫和」一些。但對有借錢的公司來說，中括號仍 > 1，所以權益 β 還是大於資產 β。\n\n例如：β_Unlevered = 0.9、稅率 25%、B/S = 0.5。\nβ_Equity = [1 + 0.75 × 0.5] × 0.9 = (1 + 0.375) × 0.9 = 1.375 × 0.9 ≈ 1.24。\n（對照無稅版的 1.35，可見抵稅讓放大效果變小。）\n\n反推（去槓桿）：β_U = [S / (S + (1 − t_c)B)] × β_Equity，用來把市場上觀察到的權益 β 還原成資產 β。",
    "vars_en": "t_c = corporate tax rate.",
    "vars_zh": "t_c = 稅率；B/S = 負債權益比；β_Unlevered = 資產 β。去槓桿公式：β_U = [S/(S+(1−t_c)B)]×β_Equity。"
   }
  ],
  "key": "ch18"
 },
 {
  "id": "ch19",
  "code": "Ch 19",
  "lecture": "Lecture 7",
  "title_en": "Dividends and Other Payouts",
  "title_zh": "股利與其他發放方式",
  "intro_en": "How firms return cash to shareholders, why dividend policy is irrelevant in a perfect market, and the real-world tax, signaling, and clientele factors that matter.",
  "intro_zh": "公司如何把現金還給股東；在完美市場下為何股利政策『不重要』；以及現實中的稅負、訊號、客群等因素。",
  "cards": [
   {
    "t": "def",
    "term_en": "Types of payouts",
    "term_zh": "發放的種類",
    "en": "Cash payouts: regular cash dividends, extra dividends, and stock repurchases. Stock payouts: stock dividends and stock splits (these pay shares, not cash).",
    "zh": "公司把錢「發還給股東」的方式分兩大類：\n\n現金發放（真的給現金）：\n• 一般現金股利：定期固定發放。\n• 額外股利：景氣好時臨時多發的。\n• 股票回購 (repurchase)：公司買回自家股票，也等於把現金還給股東。\n\n股票發放（給股票，不是現金）：\n• 股票股利 (stock dividend)：配發額外股數。\n• 股票分割 (stock split)：把股票拆細，例如一股拆兩股。\n\n重點：前者是「真現金」出去；後者只是股數變多、不涉及現金流出。"
   },
   {
    "t": "def",
    "term_en": "Key dividend dates",
    "term_zh": "股利四大日期",
    "badge": "必背",
    "en": "Declaration date (board announces), Date of record (who is on the books gets paid), Ex-dividend date (buy on/after this date → no dividend; the cum-dividend day is the last day to buy WITH the dividend), Payment date.",
    "zh": "股利有四個關鍵日期，順序一定要記熟：\n\n1. 宣告日 (Declaration date)：董事會正式宣布要發多少股利。\n\n2. 除息日 (Ex-dividend date)：分界線！「當天(含)以後」才買進的人，領不到這次股利；想領股利，最晚要在除息日「前一天」（即附息日 cum-dividend）買進。\n\n3. 登記基準日 (Date of record)：以這天股東名冊上的人為準發放。\n\n4. 發放日 (Payment date)：實際把股利匯給股東。\n\n考點：除息日是「能不能領到股利」的界線，記住「除息日當天買→沒得領」。"
   },
   {
    "t": "concept",
    "term_en": "Price drop on the ex-dividend date",
    "term_zh": "除息日的股價下跌",
    "en": "In a world without taxes/transaction costs, on the ex-dividend date the stock price falls by exactly the amount of the dividend. If the dividend is $1, a stock priced at $(P+1) before becomes $P on the ex-date.",
    "zh": "在「沒有稅、沒有交易成本」的理想世界裡，除息日當天股價會「正好下跌一個股利的金額」。\n\n道理：除息日前買股票，你買到的是「股票本身 + 即將領到的股利」；除息日後買，只買到「股票本身」，少了股利那塊價值，所以股價要扣掉股利。\n\n例如：除息前股價 $51，這次發 $1 股利。除息日當天，股價會掉到 $50（= 51 − 1）。\n\n對股東而言其實沒賺沒賠：原本手上是價值 $51 的股票；除息後變成 $50 股票 + $1 股利 = 還是 $51。錢只是從「股價」換到「現金股利」的口袋而已。"
   },
   {
    "t": "concept",
    "term_en": "Dividend irrelevance (MM)",
    "term_zh": "股利無關論(MM)",
    "badge": "核心",
    "en": "Miller & Modigliani: in a perfect market, dividend policy does not change firm value, because investors can manufacture any cash-flow pattern they want using 'homemade dividends' (reinvesting unwanted dividends, or selling shares to create dividends).",
    "zh": "MM（Miller & Modigliani）的「股利無關論」：在完美市場中，公司的股利政策「不會改變公司價值」。\n\n為什麼？因為投資人可以自己用「自製股利 (homemade dividends)」做出任何想要的現金流型態：\n• 想要更多現金 → 賣掉一些股票，自己「製造」股利。\n• 不想要這麼多股利 → 把領到的股利再買回股票。\n\n既然投資人能自己調整，公司發多發少就不重要了——真正決定價值的是公司的「投資與獲利能力」，不是股利怎麼發。\n\n注意：這是在「沒有稅、沒有交易成本、資訊對稱」的完美市場假設下才成立。"
   },
   {
    "t": "concept",
    "term_en": "Homemade dividends",
    "term_zh": "自製股利",
    "en": "If a firm pays more (or less) than an investor wants, the investor reinvests the surplus or sells some shares to restore the preferred pattern. So no specific dividend policy is needed to satisfy investors.",
    "zh": "「自製股利」是 MM 無關論的關鍵機制：投資人不必依賴公司的股利政策，自己就能調出想要的現金流。\n\n兩種操作：\n• 公司發太多股利、你不需要 → 把多餘的股利「再投資買回股票」。\n• 公司發太少、你需要現金 → 「賣掉一部分持股」自己生出現金。\n\n例如：你想每年要 $1000 現金，但公司只發 $600。你可以再賣 $400 的股票補足；反之公司發 $1400，你可把多的 $400 買回股票。\n\n結論：因為人人都能自製股利，公司根本不需要為了「討好某種股利偏好」而特意設計股利政策。"
   },
   {
    "t": "concept",
    "term_en": "Dividends & investment policy",
    "term_zh": "股利與投資政策",
    "en": "Since dividends are irrelevant to value, a firm should NEVER cut positive-NPV projects (capital expenditure) just to raise or start a dividend.",
    "zh": "既然股利政策對公司價值無關緊要，那就推出一個重要原則：\n\n公司「絕對不該」為了發股利或提高股利，而砍掉「正 NPV 的投資專案（資本支出）」。\n\n因為正 NPV 專案才是真正創造價值的來源；為了發現金而放棄好專案，等於用「會增值的東西」去換「只是換口袋的現金」，得不償失。\n\n正確順序：先把所有正 NPV 專案做好，真的有「多餘的錢」再考慮發股利或回購。投資決策優先於股利決策。"
   },
   {
    "t": "def",
    "term_en": "Stock repurchase methods",
    "term_zh": "買回庫藏股的方式",
    "en": "Three ways: open-market purchase, tender offer, and targeted repurchase. In a perfect market the firm is indifferent between paying a dividend and repurchasing stock.",
    "zh": "公司回購（買回）自家股票有三種方式：\n\n1. 公開市場買回 (open-market)：像一般投資人一樣，在市場上慢慢買回自家股。\n\n2. 公開收購 (tender offer)：公開宣布以某個（通常溢價的）價格，向全體股東收購一定數量的股票。\n\n3. 標定回購 (targeted repurchase)：向「特定股東」買回，常見於趕走想併購的人（即綠郵）。\n\n重點觀念：在完美市場下，公司「發現金股利」與「回購股票」對股東而言是「無差異」的——兩者都是把現金還給股東，只是形式不同。"
   },
   {
    "t": "concept",
    "term_en": "Why personal taxes favor LOW dividends",
    "term_zh": "為何個人稅偏好『低股利』",
    "en": "For a firm that must issue stock to fund a dividend, paying $100 in dividends triggers dividend taxes (e.g. lose $15). With personal taxes, firms have an incentive to reduce dividends. But for a firm with excess cash, the payout decision depends on comparing personal vs corporate tax rates.",
    "zh": "從「個人所得稅」角度看，常會偏好「低股利」：\n\n對一家「必須發新股才能發股利」的公司來說，發 $100 股利會讓股東被課股利稅（例如稅率 15%，就被吃掉 $15）。既然發股利要繳稅、又要發新股募資，倒不如少發。\n\n所以在有個人稅的世界，公司有「降低股利」的誘因。\n\n但要注意：對一家「手上本來就有多餘現金」的公司，要不要發、發多少，取決於「個人稅率 vs 公司稅率」的比較——如果公司留著錢去投資反而被課更重的稅，那發給股東可能更好。所以結論並非一面倒。"
   },
   {
    "t": "concept",
    "term_en": "Real-world factors favoring HIGH dividends",
    "term_zh": "偏好『高股利』的現實因素",
    "en": "Desire for current income (e.g. retirees), behavioral self-control issues, and agency costs (free-cash-flow problem — dividends reduce cash managers could waste).",
    "zh": "現實世界中，也有不少因素「偏好高股利」：\n\n1. 想要當期收入：例如退休族、需要穩定現金流的人，偏好定期領股利。\n\n2. 行為面的自制問題：有些人怕自己亂花本金，靠「只花股利、不動本金」來管住自己。\n\n3. 代理成本（自由現金流問題）：公司留太多閒錢，經理人可能拿去亂投資、揮霍或建立個人帝國。把現金以股利發出去，能減少經理人浪費的空間，保護股東。\n\n所以股利政策在現實中是「偏好低股利的力量」與「偏好高股利的力量」拉扯後的平衡。"
   },
   {
    "t": "concept",
    "term_en": "Information content & dividend signaling",
    "term_zh": "資訊內涵與股利訊號",
    "badge": "重點",
    "en": "Stock prices generally RISE on a dividend increase and FALL on a dividend decrease. The market infers higher future earnings/cash flow from a dividend rise — this is the information content (signaling) effect.",
    "zh": "「資訊內涵 / 股利訊號」效果：股利的變動會傳遞公司未來的訊息。\n\n實證觀察：\n• 公司「提高股利」→ 股價通常「上漲」。\n• 公司「調降股利」→ 股價通常「下跌」。\n\n為什麼？因為市場把「敢提高股利」解讀為「管理層對未來盈餘/現金流有信心」的訊號；反之減股利常被視為公司營運轉壞的警訊。\n\n所以股價反應的其實不是股利本身，而是股利「洩漏出來的未來資訊」。這就是訊號（signaling）效果。"
   },
   {
    "t": "concept",
    "term_en": "The clientele effect",
    "term_zh": "客群效果",
    "en": "Different investor groups prefer different payout levels: high-tax individuals → low payout; low-tax individuals → low-to-medium; tax-free institutions → medium; corporations → high payout. Once clienteles are satisfied, changing dividend policy creates no value.",
    "zh": "「客戶效果 (clientele effect)」：不同投資族群偏好不同的股利水準，公司會吸引到「口味相符」的股東群。\n\n大致的偏好分布：\n• 高稅率個人 → 偏好低股利（避免被課重稅）。\n• 低稅率個人 → 偏好低到中等股利。\n• 免稅機構（如退休基金）→ 偏好中等股利。\n• 公司法人 → 偏好高股利（公司間股利常有稅務優惠）。\n\n關鍵結論：市場上各種股利水準的「客戶」一旦都被滿足了，某家公司再改變股利政策也「創造不了額外價值」——因為只是換一批口味相符的股東來持有而已。"
   },
   {
    "t": "concept",
    "term_en": "Dividend smoothing",
    "term_zh": "股利平滑化",
    "en": "Firms set long-run target payout ratios and only partially adjust dividends toward the target, because only part of any earnings change is permanent. ΔDiv = s × (t·EPS₁ − Div₀), where t = target payout ratio and s = speed of adjustment (0 ≤ s ≤ 1).",
    "zh": "「股利平滑 (dividend smoothing)」：公司不會讓股利跟著每年盈餘忽上忽下，而是設一個「長期目標發放率」，再慢慢往目標靠。\n\n為什麼要平滑？因為盈餘的變動只有「一部分是長久的」，另一部分是暫時的。貿然把暫時的高盈餘全發出去，之後發不出來被迫減股利，會被市場解讀成壞消息。\n\n調整公式：ΔDiv = s × (t × EPS₁ − Div₀)\n• t = 目標發放率，s = 調整速度 (0~1)。\n\n例如：目標發放率 t = 40%，今年 EPS₁ = $5（目標股利應為 $2），去年股利 Div₀ = $1.5，調整速度 s = 0.5。\nΔDiv = 0.5 × (0.4×5 − 1.5) = 0.5 × (2 − 1.5) = 0.5 × 0.5 = $0.25。\n所以今年只把股利從 $1.5 緩升到 $1.75，而非一次跳到 $2。",
    "vars_zh": "t = 目標發放率；s = 調整速度(0≤s≤1)；EPS₁ = 本期每股盈餘；Div₀ = 上期股利。s 越大調整越快。"
   },
   {
    "t": "def",
    "term_en": "Stock dividend vs stock split",
    "term_zh": "股票股利 vs 股票分割",
    "en": "Stock dividend: pay extra shares (small <20–25%, large >20–25%); increases shares but total equity unchanged (shifts retained earnings to paid-in capital). Stock split: expressed as a ratio (e.g. 2-for-1 = 100% stock dividend), lowers the par value and price, returns price to a 'desirable trading range'.",
    "zh": "股票股利 vs 股票分割——兩者都「只發股票、不發現金」，股東手上的總價值不變。\n\n股票股利 (stock dividend)：配發額外股數。\n• 小額 (<20~25%)、大額 (>20~25%) 之分。\n• 股數增加，但「股東權益總額不變」——只是把「保留盈餘」轉到「資本公積/實收資本」這個會計科目。\n\n股票分割 (stock split)：用比例表示，例如「1 拆 2 (2-for-1)」等同 100% 的股票股利。\n• 降低每股面值與股價，把股價拉回「理想交易區間」（太高的股價散戶不好買）。\n\n共同點：股數變多、每股價格等比下降，但公司總價值、你持股的總市值都不變——切披薩切更多片，披薩總量沒變。"
   }
  ],
  "key": "ch19"
 },
 {
  "id": "ch22",
  "code": "Ch 22",
  "lecture": "Lecture 8–9",
  "title_en": "Options and Corporate Finance",
  "title_zh": "選擇權與公司理財",
  "intro_en": "Calls, puts, payoffs, put-call parity, option valuation (binomial & Black-Scholes), and viewing a firm's equity and debt as options.",
  "intro_zh": "買權、賣權、報酬圖、買賣權平價、選擇權評價(二項式與 Black-Scholes)，以及把公司的股權與債權看成選擇權。",
  "cards": [
   {
    "t": "def",
    "term_en": "Option basics",
    "term_zh": "選擇權基本定義",
    "badge": "必背",
    "en": "An option gives its owner the RIGHT (not obligation) to buy or sell an asset at a fixed price on/before a date. Strike/exercise price = the fixed price. Expiration date = maturity. Exercising = actually buying/selling the underlying.",
    "zh": "選擇權 (option) 給「持有人」一個權利（但不是義務），可以在某個到期日「之前/當天」，用一個事先講好的固定價格，買進或賣出某項資產。\n\n幾個必背名詞：\n• 履約價/執行價 (strike / exercise price, E)：事先講好的那個固定買賣價格。\n• 到期日 (expiration date)：權利的最後期限。\n• 履約 (exercise)：真的去執行買進(買權)或賣出(賣權)的動作。\n\n關鍵字是「權利而非義務」：對你有利就行使，對你不利就放著讓它過期，最多損失當初付的權利金。\n\n買權 (call) = 用 E 買進的權利；賣權 (put) = 用 E 賣出的權利。"
   },
   {
    "t": "def",
    "term_en": "European vs American; moneyness",
    "term_zh": "歐式/美式；價內外",
    "en": "European = exercisable only at expiry; American = exercisable any time up to expiry. In-the-money = exercising gives positive payoff; At-the-money = zero (strike = spot); Out-of-the-money = exercising gives negative payoff.",
    "zh": "兩組基本分類：\n\n歐式 vs 美式（差在「何時能行使」）：\n• 歐式 (European)：只能在「到期日當天」行使。\n• 美式 (American)：到期日「之前任何時候」都能行使，彈性較大。\n\n價內/價平/價外（moneyness，看「現在行使划不划算」，以買權為例）：\n• 價內 (in-the-money)：現在行使有正報酬（買權：股價 > 履約價）。\n• 價平 (at-the-money)：剛好打平（股價 = 履約價）。\n• 價外 (out-of-the-money)：現在行使會虧（買權：股價 < 履約價），當然不會行使。\n\n賣權的價內外方向相反：股價 < 履約價才是價內。"
   },
   {
    "t": "formula",
    "name_en": "Call payoff at expiration",
    "name_zh": "買權到期報酬",
    "latex": "\\text{Call payoff} = \\max(S_T - E,\\ 0)",
    "en": "A call gives the right to BUY at strike E. If the stock S_T is above E, the call is worth S_T − E; otherwise it expires worthless (0).",
    "zh": "買權 (call) 給你「用履約價 E 買進」的權利。到期時的報酬看股價 S_T：\n\n買權報酬 = max(S_T − E, 0)。\n\n• 若到期股價 S_T > E：你用便宜的 E 買進、可用市價 S_T 賣出，賺 S_T − E。\n• 若 S_T ≤ E：市場上更便宜，何必用 E 買？放棄行使，報酬 = 0。\n\n例如：履約價 E = $50。到期股價 $70 → 報酬 = 70 − 50 = $20；到期股價 $40 → 報酬 = 0（不行使）。\n\n注意：這是「到期報酬」，還沒扣掉當初買買權付的權利金。看漲時買 call。",
    "vars_en": "S_T = stock price at expiry; E = exercise price.",
    "vars_zh": "S_T = 到期時的股價；E = 履約價。報酬永遠 ≥ 0（最差就是放棄、歸零）。"
   },
   {
    "t": "formula",
    "name_en": "Put payoff at expiration",
    "name_zh": "賣權到期報酬",
    "latex": "\\text{Put payoff} = \\max(E - S_T,\\ 0)",
    "en": "A put gives the right to SELL at strike E. If the stock S_T is below E, the put is worth E − S_T; otherwise it expires worthless (0).",
    "zh": "賣權 (put) 給你「用履約價 E 賣出」的權利。到期報酬：\n\n賣權報酬 = max(E − S_T, 0)。\n\n• 若到期股價 S_T < E：你能用較高的 E 把股票賣掉，賺 E − S_T。\n• 若 S_T ≥ E：直接用市價賣更好，放棄行使，報酬 = 0。\n\n例如：履約價 E = $50。到期股價 $30 → 報酬 = 50 − 30 = $20；到期股價 $60 → 報酬 = 0。\n\n賣權像「保險」：股價大跌時才賠你錢。看跌時買 put，或用來保護手中持股。",
    "vars_en": "S_T = stock price at expiry; E = exercise price.",
    "vars_zh": "S_T = 到期股價；E = 履約價。put 在股價低於 E 時才有價值。"
   },
   {
    "t": "concept",
    "term_en": "Selling (writing) options",
    "term_zh": "賣出(寫)選擇權",
    "en": "A call writer is OBLIGATED to deliver shares if the holder exercises; if S > E the writer loses (E − S). A put writer is obligated to BUY shares; if S < E the writer loses (S − E). The option market is a zero-sum game.",
    "zh": "「賣出（寫）選擇權」的一方，承擔的是「義務」，跟買方相反：\n\n• 賣出買權 (call writer)：若買方行使，你「有義務」用 E 交出股票。當 S > E 時你虧損 (E − S)（被迫用低價賣股）。\n\n• 賣出賣權 (put writer)：若買方行使，你「有義務」用 E 把股票買進。當 S < E 時你虧損 (S − E)（被迫用高價買股）。\n\n選擇權市場是「零和遊戲」：買方賺的，正好是賣方賠的；雙方損益相加為零（不算手續費）。\n\n賣方收的是權利金，賺的是「對方沒行使」時的權利金；但一旦行情大幅不利，賣方損失可能很大。"
   },
   {
    "t": "concept",
    "term_en": "Protective put & covered call",
    "term_zh": "保護性賣權與掩護性買權",
    "en": "Protective put = buy stock + buy put (floors your downside). The same payoff can be built from buy a call + buy a risk-free zero-coupon bond. Covered call = own stock + sell a call.",
    "zh": "兩種常見的「股票 + 選擇權」組合策略：\n\n保護性賣權 (Protective put) = 買股票 + 買賣權。\n• 賣權像保險，替你的持股設下「下檔保護」：股價大跌時，賣權的獲利補回股票的虧損。\n• 神奇的是，這個組合的報酬，也能用「買一個買權 + 買一張無風險零息債券」複製出來（這正是買賣權平價的雛形）。\n\n掩護性買權 (Covered call) = 持有股票 + 賣出買權。\n• 你手上有股票，再賣一個買權收權利金，增加收益。\n• 代價是：若股價大漲超過履約價，上檔獲利被「鎖住」（股票被以 E 買走），放棄了大漲的空間。\n\n一句話：保護性賣權=買保險防跌；掩護性買權=收租金、但讓出上漲空間。"
   },
   {
    "t": "formula",
    "name_en": "Put-Call Parity",
    "name_zh": "買賣權平價",
    "latex": "S_0 + P_0 = C_0 + \\frac{E}{(1+r)^t}",
    "en": "Buying stock + put has the same payoff as buying a call + risk-free bond with face value E. By no-arbitrage their costs are equal. Rearranging gives synthetic stock, synthetic T-bill, and covered-call relationships.",
    "zh": "買賣權平價 (Put-Call Parity) 是選擇權最重要的關係式：\n\nS₀ + P₀ = C₀ + E/(1+r)^t。\n\n意思：「買股票 + 買賣權」的到期報酬，跟「買買權 + 買一張面額為 E 的無風險債券」完全一樣。既然兩邊報酬相同，依「無套利原則」，今天的「成本」也必須相等。\n\n兩邊都驗一次到期報酬就懂：\n• 左邊（股票+賣權）：股價高時拿股票、股價低時靠賣權保底 E → 報酬 = max(S_T, E)。\n• 右邊（買權+債券）：債券到期拿回 E，加上買權 max(S_T−E,0) → 報酬 = max(S_T, E)。兩邊一致！\n\n把式子移項，可以「合成」出各種部位：\n• 合成股票：S₀ = C₀ − P₀ + E/(1+r)^t\n• 合成無風險債券、合成掩護性買權等。\n這也是套利與避險的基礎。",
    "vars_en": "S_0 stock; P_0 put; C_0 call; E/(1+r)^t = PV of strike.",
    "vars_zh": "S₀ = 現股價；P₀ = 賣權價;C₀ = 買權價；E = 履約價；r = 無風險利率；t = 到期期間。E/(1+r)^t 是履約價的現值。"
   },
   {
    "t": "def",
    "term_en": "Intrinsic value & time value",
    "term_zh": "內含價值與時間價值",
    "en": "Option premium = intrinsic value + time value. Intrinsic value = immediate-exercise value: call max(S−E,0), put max(E−S,0). Time value = premium − intrinsic value. A call's value must satisfy max(S−E,0) ≤ C ≤ S.",
    "zh": "選擇權的權利金（市價）可以拆成兩塊：\n\n權利金 = 內含價值 (intrinsic value) + 時間價值 (time value)。\n\n內含價值 = 「現在立刻行使」能拿到的價值：\n• 買權：max(S − E, 0)；賣權：max(E − S, 0)。\n\n時間價值 = 權利金 − 內含價值，代表「未來還有時間、行情可能更有利」這份期待的價值。離到期越久、波動越大，時間價值越高；到期時時間價值歸零。\n\n買權的價值界限：max(S − E, 0) ≤ C ≤ S。\n• 下限是內含價值（不會比立刻行使還低）；上限是股價本身（買權再值錢也不會超過直接持有股票）。\n\n例如：股價 $55、履約價 $50、買權市價 $8 → 內含 $5、時間價值 $3。"
   },
   {
    "t": "concept",
    "term_en": "Factors that determine option value",
    "term_zh": "影響選擇權價值的因素",
    "badge": "必背",
    "en": "Effect on CALL / PUT: Stock price +/−; Strike price −/+; Time to expiration +/+; Volatility +/+; Interest rate +/−. Higher volatility raises both because of greater chance of finishing in-the-money.",
    "zh": "影響選擇權價值的五大因素，務必記住對買權 (call) 與賣權 (put) 的方向（+ 表上升、− 表下降）：\n\n1. 股價 S↑：call +、put −。\n2. 履約價 E↑：call −、put +。\n3. 距到期時間 t↑：call +、put +（時間越長對雙方都越有利）。\n4. 波動率 σ↑：call +、put +。\n5. 無風險利率 r↑：call +、put −。\n\n重點直覺——波動率為何讓「買權和賣權都變貴」？因為波動越大，股價衝到「深價內」的機會越高；而下檔損失最多就是放棄、歸零（有保底）。上檔潛力放大、下檔有限，所以波動對兩種選擇權都是加分。"
   },
   {
    "t": "concept",
    "term_en": "Two-state (binomial) & replicating portfolio",
    "term_zh": "二項式與複製投資組合",
    "badge": "重點",
    "en": "With two possible future stock prices, you can replicate a call by buying Δ shares and borrowing. Δ (delta) = swing of call ÷ swing of stock. By no-arbitrage, the call price equals the cost of this replicating portfolio. Call delta > 0; put delta < 0.",
    "zh": "兩狀態（二項式）模型 + 複製投資組合：選擇權定價的核心邏輯。\n\n假設未來股價只有兩種可能（漲到 S(U) 或跌到 S(D)）。我們可以用「買 Δ 股股票 + 借一筆錢」來「複製」買權的報酬。\n\nΔ（避險比率/delta）= 買權報酬的變動 ÷ 股票價格的變動，也就是「一單位選擇權對應幾股股票」。\n\n依無套利原則：既然這個「複製組合」的未來報酬跟買權完全一樣，那今天買權的價格，就必須等於複製組合的成本。\n\ndelta 的方向：買權 delta > 0（股漲，買權跟著漲）；賣權 delta < 0（股漲，賣權跌）。\n\n例如：股票漲跌會讓買權報酬差 $20、股價差 $40，則 Δ = 20/40 = 0.5，代表每張買權相當於持有半股股票的曝險。",
    "vars_en": "Δ = (C_up − C_down)/(S_up − S_down).",
    "vars_zh": "Δ＝(買權上漲值−下跌值)/(股價上漲−下跌)。"
   },
   {
    "t": "formula",
    "name_en": "Risk-neutral probability",
    "name_zh": "風險中立機率",
    "latex": "q = \\frac{(1+r_f)\\,S_0 - S(D)}{S(U) - S(D)}",
    "en": "The risk-neutral 'up' probability q is backed out from today's stock price. Then the option value is V(0) = [q·V(U) + (1−q)·V(D)] / (1 + r_f).",
    "zh": "風險中立評價法：先從「今天的股價」倒推出一個「風險中立機率 q」，再用它替選擇權定價。\n\nq = [(1+r_f)·S₀ − S(D)] / [S(U) − S(D)]。\n\n算出 q 後，選擇權今天的價值：\nV(0) = [q·V(U) + (1−q)·V(D)] / (1 + r_f)。\n\n注意：q 不是「真實的上漲機率」，而是一個「為了讓股票期望報酬剛好等於無風險利率」而設計出來的虛擬機率。妙處在於——在這個世界裡所有資產都用無風險利率折現，計算大幅簡化，且結果與複製組合法一致。\n\n步驟：(1) 用今天股價解出 q → (2) 把選擇權兩種到期值用 q 加權平均 → (3) 用無風險利率折現回今天。",
    "vars_en": "S(U), S(D) = up/down prices; r_f = risk-free rate.",
    "vars_zh": "r_f = 無風險利率；S₀ = 現股價；S(U)、S(D) = 上漲/下跌後的股價；V(U)、V(D) = 對應的選擇權到期值。q 為風險中立(虛擬)機率。"
   },
   {
    "t": "formula",
    "name_en": "Black-Scholes call value",
    "name_zh": "Black-Scholes 買權公式",
    "latex": "C_0 = S\\,N(d_1) - E\\,e^{-Rt}N(d_2)",
    "en": "Black-Scholes prices a European call. d₁ = [ln(S/E) + (R + σ²/2)t] / (σ√t), and d₂ = d₁ − σ√t. N(d) = probability a standard normal is ≤ d (read from a table).",
    "zh": "Black-Scholes 模型替「歐式買權」定價，是連續時間版的選擇權公式。\n\nC₀ = S·N(d₁) − E·e^(−Rt)·N(d₂)。\n\n其中：\n• d₁ = [ln(S/E) + (R + σ²/2)t] / (σ√t)\n• d₂ = d₁ − σ√t\n• N(d) = 標準常態分配中「小於等於 d 的機率」（查表得到，介於 0~1）。\n\n怎麼理解這個式子？可粗略想成：S·N(d₁) 是「預期會拿到的股票價值」，E·e^(−Rt)·N(d₂) 是「預期要付出的履約價現值」，兩者相減就是買權今天的價值。\n\n輸入只要五個：股價 S、履約價 E、到期時間 t、波動率 σ、無風險利率 R。其中只有 σ 要估計，其餘都可直接觀察。",
    "vars_en": "S price; E strike; R risk-free; t years; σ² = variance of continuous returns.",
    "vars_zh": "S = 現股價；E = 履約價；R = 無風險利率；t = 到期時間；σ = 報酬波動率；N(·) = 標準常態累積機率(查表)。"
   },
   {
    "t": "concept",
    "term_en": "Equity & debt as options",
    "term_zh": "股權與債權看成選擇權",
    "badge": "核心",
    "en": "Equity = a CALL on the firm's assets with strike E = face value of debt: shareholders get S − E only if firm value exceeds debt, else 0. Risky debt = risk-free debt MINUS a put: bondholders are like owning the firm and selling a call, i.e. own a riskless bond and have written a put to shareholders.",
    "zh": "用選擇權的眼光看公司的「股權」與「負債」——這是把選擇權應用到公司理財的關鍵洞見。\n\n股權 = 一個「以公司資產為標的、履約價 = 負債面額 E」的買權。\n• 到期（債務到期）時，若公司價值 > 負債，股東還掉債、拿走剩下的 (資產 − E)；若公司價值 < 負債，股東選擇放棄（公司交給債權人），報酬 = 0（有限責任）。這正是買權 max(資產 − E, 0) 的型態。\n\n風險性負債 = 無風險負債 − 一個賣權。\n• 換個角度：債權人就像「擁有公司資產，但賣了一個買權給股東」；或說「持有無風險債券，同時賣了一個賣權給股東」。股東違約時，等於行使了這個賣權，把虧損丟給債權人。\n\n這個觀點解釋了為何股東有時會「賭一把」——下一張卡片會講。"
   },
   {
    "t": "concept",
    "term_en": "Options view: mergers & capital budgeting",
    "term_zh": "選擇權觀點：併購與資本預算",
    "en": "Diversification-only mergers lower asset-return volatility → lower the call (equity) value → transfer wealth from stockholders to bondholders (so not in shareholders' interest). In a highly levered firm, stockholders may even prefer a low- or negative-NPV project if it raises volatility, because higher volatility raises equity (call) value at bondholders' expense.",
    "zh": "用選擇權觀點看「併購」與「資本預算」，會得到反直覺的結論：\n\n1. 純為「分散風險」的併購：合併讓資產報酬的波動率下降 → 股權（買權）價值因此下降 → 財富從股東移轉給債權人（債券變更安全）。所以單純分散風險的併購「對股東不利」。\n\n2. 高度槓桿公司的「賭徒行為」：因為股權是買權、而買權「波動越大越值錢」，所以高負債公司的股東，可能會偏好「高風險甚至負 NPV」的專案——只要它能拉高波動率，就能墊高股權(買權)的價值，代價由債權人承擔。\n\n核心：把股權當買權，就能理解股東與債權人之間的「風險誘因衝突」——股東愛波動，債權人怕波動。"
   }
  ],
  "key": "ch22"
 },
 {
  "id": "ch23_24",
  "code": "Ch 23–24",
  "lecture": "Lecture 10",
  "title_en": "Options: Extensions & Applications",
  "title_zh": "選擇權的延伸與應用",
  "intro_en": "Executive stock options, valuing a start-up as a real option, warrants, and convertible bonds.",
  "intro_zh": "高階主管認股權(ESO)、用『實質選擇權』評價新創、認購權證(warrants)、可轉換公司債。",
  "cards": [
   {
    "t": "concept",
    "term_en": "Executive stock options (ESOs)",
    "term_zh": "高階主管認股權(ESO)",
    "en": "Firms grant options to executives because: they align executives' interests with shareholders; let the firm lower base pay; put pay at risk rather than guaranteeing it; and are tax-efficient (at-the-money ESOs are not taxable income to the employee when granted). They are valued with Black-Scholes.",
    "zh": "高管股票選擇權 (ESO)：公司發給高階主管的買權，常作為薪酬的一部分。公司為什麼愛用？\n\n1. 利益綁定：股價漲，主管才賺得到，把主管的利益跟股東綁在一起。\n2. 降低底薪：用選擇權當誘因，公司可以少付固定現金薪水、保留現金。\n3. 報酬承擔風險：不是保證給的獎金，而是「股價要表現好才有價值」，逼主管努力。\n4. 租稅效率：發放當下若是「平價 (at-the-money)」，對員工而言不算當期應稅所得。\n\n評價方式：因為 ESO 本質就是買權，所以用 Black-Scholes 模型來估它的價值。"
   },
   {
    "t": "concept",
    "term_en": "Valuing a start-up as a real option",
    "term_zh": "用實質選擇權評價新創",
    "badge": "觀念",
    "en": "A start-up's value can be the value of the OPTION to expand. Even if a pilot project has negative NPV, the option to roll out many more units if it succeeds can have large value. Value with Black-Scholes (S = PV of expansion's future cash flows, E = cost to expand) and add it to the base NPV.",
    "zh": "把新創公司「當成實質選擇權」評價：一家新創的價值，往往來自「未來可以擴張的選擇權」，而不是現在的獲利。\n\n關鍵想法：就算試水溫的試驗性專案 (pilot) 本身 NPV 是負的，但「如果成功、就大量複製推廣」的這個「擴張選擇權」可能價值很高，足以扭轉整體決策。\n\n怎麼算？用 Black-Scholes：\n• S（標的價格）= 擴張後未來現金流的「現值」。\n• E（履約價）= 擴張所需投入的成本。\n算出這個擴張選擇權的價值後，再「加回」基礎專案的 NPV。\n\n例如：試驗專案 NPV = −$200 萬，但擴張選擇權價值 = $900 萬 → 整體 = −200 + 900 = +$700 萬，值得做。這就是「先試小、成功再放大」的彈性價值。"
   },
   {
    "t": "def",
    "term_en": "Warrants",
    "term_zh": "認購權證",
    "en": "Warrants are call options issued by the COMPANY itself, giving the holder the right to buy newly issued shares directly from the firm at a fixed price. They have longer maturities than exchange-traded options and are often attached to bonds (bond-with-warrants); the loan agreement states if they are detachable.",
    "zh": "認股權證 (warrant)：由「公司本身」發行的買權，給持有人「直接向公司」用固定價格買進「新發行股票」的權利。\n\n和交易所掛牌的選擇權比，權證有兩個特色：\n1. 存續期間更長（常是數年）。\n2. 常「附在公司債上」一起發行（附認股權證債券 bond-with-warrants）；債券契約會載明權證能不能「分離 (detachable)」單獨買賣。\n\n關鍵差別在「誰發行、行使後股票哪裡來」：一般買權是投資人之間互相買賣既有股票；權證是「公司印新股」給你——這會牽涉到稀釋（下一張卡片）。"
   },
   {
    "t": "concept",
    "term_en": "Warrant vs call: dilution",
    "term_zh": "權證 vs 買權：稀釋",
    "badge": "重點",
    "en": "Call options are issued by exchanges/investors; exercising one just transfers existing shares — total shares outstanding don't change. A warrant is issued by the company; exercising it forces the firm to ISSUE NEW shares, increasing shares outstanding and DILUTING existing equity. Factors affecting price are the same direction as for calls.",
    "zh": "權證 vs 一般買權的核心差異：「稀釋 (dilution)」。\n\n一般買權：由交易所/投資人發行。行使時只是「既有股票」在市場上易手，公司流通在外股數「不變」。\n\n認股權證：由公司發行。行使時公司必須「發行新股」交給持有人 → 流通在外股數「增加」→ 原股東的持股比例與每股價值被「稀釋」。\n\n例如：原本 1000 股，200 張權證全部行使後變 1200 股，每位原股東的權益被攤薄。\n\n至於影響價格的因素（股價、履約價、波動率…），權證和買權的「方向相同」；差別只在權證多了稀釋這個扣分項，所以同條件下權證價值較低。"
   },
   {
    "t": "formula",
    "name_en": "Warrant value (dilution-adjusted)",
    "name_zh": "權證價值(調整稀釋)",
    "latex": "\\text{Warrant} = \\frac{\\#}{\\#+\\#_w}\\times \\text{Call}",
    "en": "A warrant's gain is less than an identical call's because of dilution. The warrant price equals the call price times the ratio of original shares to total shares after all warrants are exercised.",
    "zh": "因為行使權證會稀釋股權，所以「權證的獲利」會比「條件相同的買權」少一些。\n\n權證價值 = 買權價值 × 原始股數 / (原始股數 + 權證張數)。\n\n也就是用「稀釋比例」把買權的價值打個折。\n\n例如：公司原有 1000 股，發行 200 張權證，條件相同的買權值 $10，則\n權證 = 10 × 1000 / (1000 + 200) = 10 × 0.8333 ≈ $8.33。\n\n直覺：行使後股數從 1000 變 1200，你的獲利被「分母變大」攤薄，所以權證一定比同條件買權便宜。",
    "vars_en": "# = original shares; #_w = number of warrants.",
    "vars_zh": "# = 原始流通股數；#_w = 權證張數。比例 #/(#+#_w) < 1，所以權證價值低於同條件買權。"
   },
   {
    "t": "def",
    "term_en": "Convertible bonds",
    "term_zh": "可轉換公司債",
    "en": "A convertible bond lets the holder convert it into stock before maturity. Once converted, the bond/debt CEASES to exist and becomes equity (set by a conversion ratio). Contrast with bond-with-warrants: there the warrant is exercised separately and the original bond still exists (and warrant can be sold separately).",
    "zh": "可轉換公司債 (convertible bond)：讓持有人在到期前，依「轉換比率」把債券轉換成股票的債券。\n\n關鍵特性：一旦「轉換」，原本的「債務就消失」、變成股權。等於債權人變股東。\n\n務必和「附認股權證債券」分清楚：\n• 可轉債：轉換後「債券沒了」，整張變成股票。\n• 附權證債券：權證是「另外」行使的，行使後「原債券仍然存在」（若可分離，權證還能單獨拿去市場賣）。\n\n例如：轉換比率 = 20，表示一張可轉債可換 20 股。若轉換，這張債就註銷、換成 20 股股票。"
   },
   {
    "t": "formula",
    "name_en": "Value of a convertible bond",
    "name_zh": "可轉債的價值",
    "latex": "V_{CB} = \\max(\\text{Straight bond},\\ \\text{Conversion}) + \\text{Option value}",
    "en": "A convertible has three parts: (1) Straight bond value = PV of coupons + principal (a minimum/floor). (2) Conversion value = conversion ratio × current stock price (also a floor). (3) Option (waiting) value. The CB value exceeds both floors by the option value.",
    "zh": "可轉債的價值由三個部分組成：\n\nV_CB = max(純債券價值, 轉換價值) + 選擇權(等待)價值。\n\n三塊拆解：\n1. 純債券價值 (straight bond value)：把票息和本金折現，當作「就算不轉換、它至少是張債券」的價值——這是一個「地板(下限)」。\n2. 轉換價值 (conversion value) = 轉換比率 × 目前股價，代表「現在馬上轉換」能拿到的股票市值——這是「另一個地板」。\n3. 選擇權價值 = 「保留等待、未來再決定要不要轉」的時間價值。\n\n可轉債的實際價值，會「高於兩個地板的較大者」，高出來的部分就是選擇權價值。\n\n例如：純債券值 $900、轉換價值 $1050，市價 $1120 → 它至少值 max(900,1050)=$1050，多出的 $70 就是選擇權(時間)價值。",
    "vars_en": "Straight bond & conversion value are floors; option value = time value.",
    "vars_zh": "純債券價值與轉換價值都是『下限(地板)』；可轉債價值 = 兩地板取大 + 選擇權(時間)價值。"
   },
   {
    "t": "concept",
    "term_en": "Why issue warrants & convertibles",
    "term_zh": "為何發行權證與可轉債",
    "en": "Matching cash flows: young risky growth firms get a lower initial interest rate. Risk synergy: the option component self-adjusts for hard-to-evaluate project risk (riskier project → more valuable option). Agency cost: the equity component reduces bondholder wealth expropriation versus straight debt. In an efficient market, convertibles are neither cheaper nor more expensive than other instruments.",
    "zh": "公司為什麼要發行權證與可轉債？三個主要理由：\n\n1. 配合現金流 (matching cash flows)：年輕、高風險的成長型公司現金流前期較弱。因為這些工具內含選擇權價值，可以用「較低的初始利率」發行，減輕早期付息壓力。\n\n2. 風險綜效 (risk synergy)：當專案風險「難以評估」時，內含的選擇權成分會「自我調整」——專案越有風險，選擇權越值錢。這讓發行雙方比較不會因為錯估風險而吃大虧。\n\n3. 降低代理成本 (agency cost)：股權成分讓債權人也能分享公司上行的好處，減少「股東犧牲債權人」的財富掠奪問題，比純債券更能緩和股東與債權人的衝突。\n\n重要提醒：在效率市場中，可轉債「既不會比較便宜、也不會比較貴」——它的好處在上述三點，而不是「省利息」。"
   }
  ],
  "key": "ch23_24"
 },
 {
  "id": "ch26",
  "code": "Ch 26",
  "lecture": "Lecture 11",
  "title_en": "Short-Term Finance and Planning",
  "title_zh": "短期財務與規劃",
  "intro_en": "Net working capital, the operating and cash cycles, flexible vs restrictive policy, the cash budget, and short-term financing sources.",
  "intro_zh": "淨營運資金、營運循環與現金循環、彈性 vs 限制性政策、現金預算、以及短期融資來源。",
  "cards": [
   {
    "t": "def",
    "term_en": "Net working capital (NWC)",
    "term_zh": "淨營運資金(NWC)",
    "en": "NWC = Current assets − Current liabilities. It measures short-term liquidity — the firm's ability to meet near-term obligations. Current assets convert to cash within a year (cash, marketable securities, A/R, inventory); current liabilities require payment within a year (A/P, accrued wages/taxes, notes payable).",
    "zh": "淨營運資金 (NWC) = 流動資產 − 流動負債，是衡量公司「短期流動性」的指標，也就是「能不能順利付掉近期到期的帳」。\n\n流動資產：一年內可變現的東西，例如現金、有價證券、應收帳款 (A/R)、存貨。\n流動負債：一年內要付掉的義務，例如應付帳款 (A/P)、應付薪資/稅、短期票據。\n\nNWC > 0 通常代表短期償債較安全；NWC 太低甚至為負，可能週轉吃緊。\n\n例如：流動資產 $500 萬、流動負債 $300 萬 → NWC = $200 萬，表示扣掉短期要還的，還有 $200 萬的緩衝。"
   },
   {
    "t": "concept",
    "term_en": "What increases / decreases cash",
    "term_zh": "什麼會增加/減少現金",
    "en": "Cash increases when: long-term debt rises (issue bonds), equity rises (issue stock), fixed assets fall (sell assets), current liabilities rise, or non-cash current assets fall (collect A/R, sell inventory). The opposite movements decrease cash.",
    "zh": "什麼動作會讓「現金增加」？記住這份清單（資金來源）：\n\n現金「增加」：\n• 舉借長期負債（發債）。\n• 發行股票（增加股權）。\n• 出售固定資產（固定資產減少）。\n• 流動負債增加（例如延後付款、增加應付帳款）。\n• 非現金流動資產減少（收回應收帳款、賣掉存貨）。\n\n現金「減少」：以上反向操作——還債、買回股票、買固定資產、付掉應付帳款、增加存貨/放帳給客戶。\n\n口訣：「負債或股權變多、資產變少 → 現金進來」；反之現金出去。判斷現金流向時，這是最快的檢查法。"
   },
   {
    "t": "formula",
    "name_en": "Operating cycle",
    "name_zh": "營運循環",
    "latex": "\\text{Operating cycle} = \\text{Inventory period} + \\text{A/R period}",
    "en": "The operating cycle is the time from arrival of inventory until cash is collected from receivables. Inventory period = time to order, produce, and sell. A/R period = time to collect cash from credit sales.",
    "zh": "營運週期 (operating cycle) = 存貨期間 + 應收帳款期間。\n\n它衡量「從存貨進來，到最後收到貨款」這一整段時間。拆成兩段：\n• 存貨期間：從訂貨、生產到賣出所花的時間。\n• 應收帳款期間 (A/R period)：賣出後（賒銷）到實際收到現金的時間。\n\n例如：存貨期間 50 天 + 應收期間 30 天 = 營運週期 80 天，代表一批貨從進倉到收到錢，平均要 80 天。\n\n營運週期越長，資金被「卡在營運流程」裡的時間越久，越需要週轉資金。",
    "vars_en": "Inventory period = 365 / inventory turnover; A/R period = 365 / receivables turnover.",
    "vars_zh": "存貨期間 = 365 / 存貨週轉率；應收期間 = 365 / 應收帳款週轉率。"
   },
   {
    "t": "formula",
    "name_en": "Cash cycle",
    "name_zh": "現金循環",
    "latex": "\\text{Cash cycle} = \\text{Operating cycle} - \\text{A/P period}",
    "en": "The cash cycle starts when cash is PAID for materials and ends when cash is COLLECTED from receivables. A/P period = how long the firm can delay paying suppliers.",
    "zh": "現金週期 (cash cycle) = 營運週期 − 應付帳款期間。\n\n它衡量「從『付現金買原料』那一刻起，到『收到客戶貨款』為止」公司現金真正被卡住的時間。\n\n為什麼要減掉應付期間？因為公司向供應商進貨通常可以「先欠著、晚點付」，這段賒帳時間（應付帳款期間）等於供應商先幫你墊資，所以要從營運週期裡扣掉。\n\n例如：營運週期 80 天，應付帳款期間 40 天 → 現金週期 = 80 − 40 = 40 天。公司只需自籌 40 天的週轉資金。\n\n現金週期越短越好；甚至可能為負（先收到客戶錢、才付供應商），代表用供應商的錢在做生意，週轉效率極高。",
    "vars_en": "A/P period = 365 / payables turnover.",
    "vars_zh": "應付帳款期間 = 365 / 應付帳款週轉率，代表公司可延遲付款給供應商的天數。"
   },
   {
    "t": "def",
    "term_en": "Two elements of short-term policy",
    "term_zh": "短期政策的兩個構面",
    "en": "(1) Size of investment in current assets — measured as current assets relative to operating revenue. (2) Financing of current assets — measured as the proportion of short-term to long-term debt.",
    "zh": "短期財務政策由兩個要素構成：\n\n1. 流動資產的「投資規模」：公司要持有多少流動資產（現金、存貨、應收等），通常用「流動資產相對於營收」的比例來衡量。比例高 = 持有較多流動資產。\n\n2. 流動資產的「融資方式」：用多少短期負債、多少長期負債來支應流動資產，看「短期負債占的比例」。\n\n這兩個要素各有「彈性 vs 緊縮」兩種取向（下一張卡片詳述）。投資面決定「持有多少」，融資面決定「拿什麼錢來養」。"
   },
   {
    "t": "concept",
    "term_en": "Flexible vs restrictive policy",
    "term_zh": "彈性 vs 限制性政策",
    "badge": "重點",
    "en": "Flexible (investment): high current-assets-to-sales, large cash/securities, large inventory, liberal credit (high A/R). Restrictive: low ratios, little cash, small inventory, no credit sales. Financing: flexible = low proportion of short-term debt; restrictive = high proportion of short-term debt.",
    "zh": "彈性 (flexible) vs 緊縮 (restrictive) 政策的對比：\n\n投資面（持有多少流動資產）：\n• 彈性：流動資產/銷售比高、留大量現金與有價證券、囤大量存貨、給客戶寬鬆賒銷（應收帳款多）。\n• 緊縮：各項比例都低、現金少、存貨少、幾乎不賒銷。\n\n融資面（用什麼錢養流動資產）：\n• 彈性：短期負債「比例低」（多用長期、穩定的資金）。\n• 緊縮：短期負債「比例高」（成本通常較低，但展期/週轉風險高）。\n\n簡記：彈性=寬鬆、安全、成本高；緊縮=精簡、省成本、風險高。實務上是在兩者間取平衡。"
   },
   {
    "t": "concept",
    "term_en": "Carrying costs vs shortage costs",
    "term_zh": "持有成本 vs 短缺成本",
    "badge": "重點",
    "en": "Carrying costs RISE with investment in current assets (opportunity cost of low returns; warehousing cost). Shortage costs FALL with investment (order/trading costs; lost sales, lost goodwill, production disruption). The optimal level of current assets (CA*) is the minimum of the total-cost curve. If carrying costs low / shortage costs high → flexible policy; if carrying costs high / shortage costs low → restrictive policy.",
    "zh": "持有成本 vs 短缺成本——決定「最適流動資產水準」的兩股力量：\n\n• 持有成本 (carrying costs)：隨流動資產「增加」而「上升」。包括資金被低報酬資產佔住的機會成本、倉儲成本等。持有越多，這個成本越高。\n\n• 短缺成本 (shortage costs)：隨流動資產「增加」而「下降」。包括頻繁下單/交易的成本，以及缺貨、流失銷售、商譽受損、生產中斷等代價。持有越多，越不會短缺，這成本越低。\n\n最適流動資產水準 CA*：落在「持有成本 + 短缺成本」總成本曲線的「最低點」。\n\n政策選擇：\n• 持有成本低、短缺成本高 → 多備一點划算 → 採「彈性」政策。\n• 持有成本高、短缺成本低 → 精簡較好 → 採「緊縮」政策。"
   },
   {
    "t": "concept",
    "term_en": "Cash budget",
    "term_zh": "現金預算",
    "en": "A cash budget is the primary tool of short-run financial planning. It records estimated cash receipts (from sales, after the collection lag) and cash disbursements (A/P payments, wages/taxes, capital expenditures, long-term financing). Net cash flow and a minimum cash balance reveal the financing surplus or deficit each period.",
    "zh": "現金預算 (cash budget)：短期財務規劃「最主要的工具」，用來預估每一期會缺錢還是多錢。\n\n它記錄兩邊：\n• 現金「收入」：來自銷售，但要扣掉「收款延遲」——賒銷的錢常隔月才收到，所以當期現金收入未必等於當期銷售額。\n• 現金「支出」：付供應商 (應付帳款)、薪資與稅、資本支出、長期融資相關支出等。\n\n把收入減支出得到「淨現金流」，再對照公司設定的「最低現金餘額」，就能看出每一期是「資金有餘」還是「資金不足」，提前安排借款或投資。\n\n精神：先把未來幾期的現金進出攤開來看，避免臨時週轉開天窗。"
   },
   {
    "t": "def",
    "term_en": "Short-term financing sources",
    "term_zh": "短期融資來源",
    "en": "To finance a temporary cash deficit: unsecured loans (e.g. a bank line of credit); secured loans (using A/R or inventory as collateral); other sources (banker's acceptances, commercial paper).",
    "zh": "當公司出現「暫時性的現金不足」，可用的短期融資來源有三類：\n\n1. 無擔保借款 (unsecured)：不需抵押品，例如向銀行申請的「信用額度 (line of credit)」。\n\n2. 有擔保借款 (secured)：拿資產當抵押，常見以「應收帳款」或「存貨」作為擔保品向銀行借款。\n\n3. 其他來源：例如銀行承兌匯票 (banker's acceptances)、商業本票 (commercial paper)。\n\n選擇關鍵：信用好、規模大的公司能用較便宜的無擔保或商業本票；信用較弱的則可能需要拿應收/存貨來擔保。"
   }
  ],
  "key": "ch26"
 },
 {
  "id": "ch27_28",
  "code": "Ch 27–28",
  "lecture": "Lecture 12",
  "title_en": "Cash and Credit Management",
  "title_zh": "現金與信用管理",
  "intro_en": "Why firms hold cash, float, and the components of credit policy.",
  "intro_zh": "公司為何持有現金、浮差(float)、以及信用政策的組成。",
  "cards": [
   {
    "t": "def",
    "term_en": "Reasons for holding cash",
    "term_zh": "持有現金的動機",
    "badge": "必背",
    "en": "Speculative motive — hold cash to seize unexpected opportunities. Precautionary motive — hold cash for emergencies. Transaction motive — hold cash to pay day-to-day bills. There is a trade-off between the opportunity cost of holding cash and the transaction cost of converting securities to cash.",
    "zh": "公司為什麼要「持有現金」？三大動機（凱因斯的經典分類）：\n\n1. 投機動機 (speculative)：手上留現金，以便「突然出現好機會」時能立刻把握（如趁低價進貨、併購）。\n\n2. 預防動機 (precautionary)：留現金「以防萬一」，應付突發的緊急狀況。\n\n3. 交易動機 (transaction)：留現金支付「日常營運的帳單」（薪水、貨款等）。\n\n但持有現金有取捨：現金太多有「機會成本」（報酬低）；現金太少又得頻繁變賣證券換現金，產生「交易成本」。最適現金部位就在這兩者之間取得平衡。"
   },
   {
    "t": "def",
    "term_en": "Float",
    "term_zh": "浮差(float)",
    "en": "Book (ledger) balance = cash shown on the firm's books. Available (collected) balance = cash the bank shows as spendable. Float = available balance − book balance, the net effect of checks still clearing through the banking system.",
    "zh": "浮存 (float) 與兩種「餘額」的差別：\n\n• 帳面(分類帳)餘額 (book/ledger balance)：公司「自己帳上」記錄的現金。\n• 可用(已收妥)餘額 (available/collected balance)：銀行認定你「現在真正能動用」的現金。\n\n浮存 = 可用餘額 − 帳面餘額，反映「還在銀行系統裡清算中的支票」造成的淨差額。\n\n為什麼會有差？因為支票從開立到真正清算、入帳要花時間。在這段時間裡，公司帳上和銀行端看到的金額會不一樣，這個時間差就是浮存的來源。"
   },
   {
    "t": "concept",
    "term_en": "Disbursement vs collection float",
    "term_zh": "支出浮差 vs 收款浮差",
    "en": "Disbursement float: checks the firm WRITES decrease its book balance but not yet its available balance. Collection float: checks the firm RECEIVES increase book balance but not yet available balance. Float size depends on dollar amount and time delay.",
    "zh": "兩種浮存方向相反，要分清楚：\n\n• 支付浮存 (disbursement float)：公司「開出去」的支票，已讓「帳面餘額」減少，但對方還沒兌現，所以「可用餘額」還沒被扣。這段期間公司實際還能動用這筆錢 → 對公司「有利」。\n\n• 收款浮存 (collection float)：公司「收到」的支票，已讓「帳面餘額」增加，但還沒清算完成，所以「可用餘額」還不能用 → 對公司「不利」。\n\n浮存大小取決於兩件事：金額多大、時間延遲多久。\n\n實務目標：盡量「拉長」支付浮存（晚點被扣）、「縮短」收款浮存（快點能用），讓可動用資金最大化。"
   },
   {
    "t": "formula",
    "name_en": "Measuring float (delay)",
    "name_zh": "浮差衡量(延遲)",
    "latex": "\\text{Delay} = \\text{Mailing} + \\text{Processing} + \\text{Availability}",
    "en": "Total delay = mailing time + processing delay + availability delay. Average daily float = (delay days × amount) ÷ days in period.",
    "zh": "衡量浮存要先算「總延遲」：\n\n總延遲 = 郵寄時間 + 處理延遲 + 可用性延遲。\n• 郵寄時間：支票寄送的天數。\n• 處理延遲：收到後內部作業、存入銀行的時間。\n• 可用性延遲：銀行收到後，款項變成可動用所需的清算時間。\n\n平均每日浮存 = (延遲天數 × 金額) ÷ 期間天數。\n\n例如：一張 $10,000 的支票需 4 天清算，以這 4 天計算，平均每日浮存 = (4 × 10,000) / 4 = $10,000。\n\n降低收款浮存的方法，多半就是設法縮短上述三段延遲（如就近設收款點、加速內部處理）。",
    "vars_en": "Average daily float = (delay × amount)/days.",
    "vars_zh": "總延遲 = 郵寄 + 處理 + 可用性三段時間相加；平均每日浮存 = (延遲 × 金額) / 期間天數。"
   },
   {
    "t": "concept",
    "term_en": "Credit and receivables",
    "term_zh": "信用與應收帳款",
    "en": "Granting credit generally increases sales but creates the cost of bad debts (customers who don't pay). Credit management weighs the trade-off between extra sales and the cost of granting credit.",
    "zh": "信用（賒銷）與應收帳款管理的核心是一個「取捨」：\n\n提供賒銷（讓客戶先拿貨、之後再付款）通常能「增加銷售」——客戶更願意買。\n\n但代價是「呆帳成本」：總有一些客戶最後不付錢。\n\n所以信用管理就是在「多賺的銷售」與「授信帶來的成本（呆帳、資金被佔用）」之間做權衡：放得太寬，呆帳吃掉利潤；收得太緊，又流失生意。\n\n目標是找到讓「增額利潤 − 授信成本」最大的信用政策。"
   },
   {
    "t": "def",
    "term_en": "Components of credit policy",
    "term_zh": "信用政策的組成",
    "en": "(1) Terms of sale — credit period, cash discount & discount period, type of credit instrument. (2) Credit analysis — distinguishing 'good' payers from 'bad' (likely-to-default) customers. (3) Collection policy — effort spent collecting receivables.",
    "zh": "信用政策由三個要素組成：\n\n1. 銷售條件 (terms of sale)：\n   • 信用期：給客戶多少天付款。\n   • 現金折扣與折扣期：例如「2/10, net 30」= 10 天內付款打 98 折，否則 30 天內全額付清。\n   • 信用工具的種類（賒帳、票據等）。\n\n2. 信用分析 (credit analysis)：分辨「好客戶」（會準時付款）與「壞客戶」（很可能違約），決定要不要放帳、放多少。\n\n3. 收款政策 (collection policy)：花多少力氣去催收應收帳款（提醒、催繳、委外）。\n\n這三項一起決定了公司賒銷的鬆緊與風險。"
   }
  ],
  "key": "ch27_28"
 },
 {
  "id": "ch29",
  "code": "Ch 29",
  "lecture": "Lecture 13",
  "title_en": "Mergers, Acquisitions and Divestitures",
  "title_zh": "併購與分割",
  "intro_en": "Forms of acquisition, synergy, financial side effects, the NPV of a merger, takeover tactics, taxes/accounting, LBOs, and divestitures.",
  "intro_zh": "收購的形式、綜效、財務副作用、併購的 NPV、收購與防禦戰術、稅務/會計處理、槓桿收購(LBO)、以及分割。",
  "cards": [
   {
    "t": "def",
    "term_en": "Three basic forms of acquisition",
    "term_zh": "收購的三種基本形式",
    "badge": "必背",
    "en": "(1) Merger or Consolidation — merger: one firm absorbs another (acquirer keeps its name, target ceases); consolidation: a brand-new firm is created. (2) Acquisition of Stock — buy the target's voting stock (a tender offer is a public offer to shareholders). (3) Acquisition of Assets — buy all the target's assets.",
    "zh": "收購的三種基本形式：\n\n1. 合併 (Merger) 或 新設合併 (Consolidation)：\n   • 合併：一家公司「吸收」另一家，存續公司保留名稱，被併公司消失。\n   • 新設合併：兩家都消失，「重新成立一家全新公司」。\n\n2. 收購股權 (Acquisition of Stock)：直接買下目標公司的「有投票權股票」。常以「公開收購 (tender offer)」進行——公開向全體股東喊價買股。\n\n3. 收購資產 (Acquisition of Assets)：買下目標公司的「全部資產」，而不是買它的股票。\n\n三種方式在「是否需股東表決、是否留下少數股東、稅務」上各有差異（後面卡片詳述）。"
   },
   {
    "t": "concept",
    "term_en": "Stock vs asset acquisition trade-offs",
    "term_zh": "股票 vs 資產收購的取捨",
    "en": "Stock acquisition: no shareholder vote needed, deal directly with shareholders; but if target managers resist it costs more, and a minority can hold out (target not fully absorbed). Asset acquisition: leaves no minority shareholders; but requires a formal target shareholder vote.",
    "zh": "收購「股權」vs 收購「資產」的取捨：\n\n收購股權 (stock acquisition)：\n• 優點：不需要目標公司開股東會表決，可「直接向股東」買。\n• 缺點：若目標管理層抵抗，成本會墊高；而且可能有「少數股東不肯賣」而僵持（hold out），導致無法 100% 完全吸收。\n\n收購資產 (asset acquisition)：\n• 優點：買的是資產，「不會留下少數股東」的問題。\n• 缺點：需要目標公司「正式的股東會表決」通過，程序較繁複；資產過戶手續也較多。\n\n簡記：買股權免表決但可能卡少數股東；買資產沒少數股東但要表決。"
   },
   {
    "t": "def",
    "term_en": "Horizontal / vertical / conglomerate",
    "term_zh": "水平/垂直/複合收購",
    "en": "Horizontal — acquirer and target in the same industry. Vertical — firms at different steps of the same production process. Conglomerate — the two firms are unrelated.",
    "zh": "依「收購雙方的業務關係」分三類：\n\n• 水平併購 (Horizontal)：收購方與目標在「同一產業」（如兩家手機廠合併）。目的常是擴大市占、規模經濟。\n\n• 垂直併購 (Vertical)：兩家位於「同一生產流程的上下游」（如車廠併購輪胎廠）。目的是整合供應鏈、降低交易成本。\n\n• 複合(集團)併購 (Conglomerate)：兩家業務「互不相關」（如食品公司併購保險公司）。目的常是分散或進入新領域。\n\n這三類也對應不同的綜效來源與反托拉斯（公平競爭）審查強度——水平併購最容易被盯上。"
   },
   {
    "t": "formula",
    "name_en": "Synergy",
    "name_zh": "綜效",
    "latex": "\\text{Synergy} = V_{AB} - (V_A + V_B)",
    "en": "Synergy exists when the combined firm is worth more than the sum of the two stand-alone firms. It can be valued by the incremental cash flows: ΔCF = ΔRevenue − ΔCost − ΔTaxes − ΔCapital requirement, discounted appropriately.",
    "zh": "綜效 (synergy)：當「合併後的公司價值」大於「兩家獨立公司價值之和」時，就存在綜效。\n\nSynergy = V_AB − (V_A + V_B)。\n\n綜效是併購「真正創造價值」的來源；沒有綜效的併購，只是把兩塊錢併成兩塊錢，對股東沒好處。\n\n綜效可用「增額現金流」來評價：\nΔCF = Δ收入 − Δ成本 − Δ稅 − Δ資本需求，再用合適的折現率折現。\n\n例如：A 公司獨立值 $500、B 公司獨立值 $100，合併後整體值 $650，則綜效 = 650 − (500+100) = $50。這 $50 就是合併額外創造的價值。",
    "vars_en": "V_AB combined value; V_A, V_B stand-alone values.",
    "vars_zh": "V_AB = 合併後公司價值；V_A、V_B = 兩家各自獨立的價值。綜效 > 0 才值得併。"
   },
   {
    "t": "concept",
    "term_en": "Sources of synergy",
    "term_zh": "綜效的來源",
    "en": "Revenue enhancement (marketing gains, strategic benefits, monopoly power); Cost reduction (economies of scale/scope, vertical integration, technology transfer, complementary resources, removing weak managers); Tax gains (use net operating losses, more debt capacity → bigger tax shield, absorb surplus funds); Reduced capital requirements (eliminate duplicate facilities).",
    "zh": "綜效的四大來源（考試常考分類）：\n\n1. 收入增強 (Revenue enhancement)：行銷綜效、策略性利益、市場壟斷力（提高訂價能力）。\n\n2. 成本降低 (Cost reduction)：規模/範疇經濟、垂直整合、技術移轉、互補資源、撤換無能的經理人。\n\n3. 稅負利得 (Tax gains)：利用被併公司的「淨營業損失 (NOL)」抵稅、提高負債能力→更大的利息稅盾、消化多餘資金。\n\n4. 降低資本需求 (Reduced capital requirements)：合併後可裁撤重複的廠房、設備等，少投資也能運作。\n\n記憶法：收入↑、成本↓、稅↓、資本需求↓——四個方向都讓增額現金流變好。"
   },
   {
    "t": "concept",
    "term_en": "EPS growth can be an accounting illusion",
    "term_zh": "EPS 成長可能是會計幻覺",
    "badge": "重點",
    "en": "If a merger creates no synergy, any rise in EPS is just an artifact of combining a high-P/E firm with a low-P/E firm — not real growth. In an efficient market ('smart' investors), the combined value is just the sum of the two, the P/E falls, and per-share value is unchanged.",
    "zh": "「EPS 成長」可能只是會計假象，這是併購最經典的陷阱：\n\n如果一樁併購「沒有任何綜效」，但合併後每股盈餘 (EPS) 卻上升了，那這個上升不是真的成長，只是「高本益比 (P/E) 公司併購低本益比公司」所產生的算術效果。\n\n在效率市場（投資人夠精明）下會發生什麼？\n• 合併後的總價值就只是兩家之和（因為沒綜效）。\n• 合併後公司的 P/E 會「下降」。\n• 每股價值「不變」。\n\n換句話說，EPS 雖然帳面變漂亮，但因為 P/E 同步下滑，股價並不會因此上漲。真正能讓股東變富的只有「綜效」，不是 EPS 的數字遊戲。"
   },
   {
    "t": "concept",
    "term_en": "Diversification & the coinsurance effect",
    "term_zh": "分散與共同保險效果",
    "badge": "重點",
    "en": "Unsystematic risk can be diversified away by a merger, but shareholders can diversify more cheaply themselves, so risk reduction is not a benefit to them. With debt, a merger reduces bankruptcy probability — the coinsurance effect transfers wealth FROM stockholders TO bondholders.",
    "zh": "分散風險與「共同保險效果」——兩個常被誤會成併購好處的東西：\n\n1. 分散非系統風險：合併確實能分散掉一些非系統性風險，但「股東自己在股市分散投資的成本更低」，不需要公司花大錢併購來代勞。所以「為了分散風險而併購」對股東「不是好處」。\n\n2. 共同保險效果 (coinsurance effect)：當公司有負債時，合併會降低整體破產機率，讓「既有債券變得更安全、更值錢」。但這份好處是「從股東移轉給債權人」——債券增值的代價由股東承擔。\n\n兩點的共同結論：單純為了「降低風險」而併購，受惠的往往不是股東。"
   },
   {
    "t": "formula",
    "name_en": "NPV of a cash merger",
    "name_zh": "現金併購的 NPV",
    "latex": "\\text{NPV} = \\text{Synergy} - \\text{Premium}",
    "en": "For a cash offer: NPV to acquirer = Synergy − Premium, where Premium = Cash paid − V_B. Equivalently NPV = (V_B + Synergy) − Cash.",
    "zh": "現金併購對「收購方」的 NPV：\n\nNPV = 綜效 − 溢價，其中 溢價 = 支付的現金 − V_B。\n（等價寫法：NPV = (V_B + 綜效) − 支付現金。）\n\n白話：你付出去的錢，超過目標公司「原本獨立價值 V_B」的部分叫溢價；只有當你創造的「綜效」大於「溢價」時，這樁併購對收購方才划算。\n\n例如：B 獨立值 $100、綜效 $50，A 付現金 $130。\n溢價 = 130 − 100 = $30；NPV = 綜效 − 溢價 = 50 − 30 = +$20，值得做。\n但若 A 付到 $160，溢價 = $60 > 綜效 $50，NPV = −$10，反而是「買貴了」、傷害收購方股東。",
    "vars_en": "Premium = cash paid − V_B.",
    "vars_zh": "溢價 = 支付現金 − V_B（目標獨立價值）；只有綜效 > 溢價，收購方才獲利。"
   },
   {
    "t": "concept",
    "term_en": "Cash vs stock acquisition",
    "term_zh": "現金 vs 換股收購",
    "en": "With a stock offer, the target's shareholders end up owning a fraction of the combined firm, so the cost depends on that fraction × combined value. Firms are more likely to pay with stock when their own shares are OVERVALUED; hence the acquirer's stock price usually FALLS on announcement of a stock-for-stock deal.",
    "zh": "用「現金」還是「股票」支付，差別很大：\n\n現金併購：付固定金額現金，目標股東拿錢走人，跟合併後公司的好壞無關。\n\n股票併購（換股）：目標股東換得「合併後公司的一部分股權」，所以收購的真實成本 = 那個持股比例 × 合併後公司價值，會隨合併後表現浮動。\n\n關鍵訊號：公司比較會在「自家股價被高估」時，選擇用股票支付（等於用『貴的貨幣』付帳）。因此市場常把「換股併購」解讀為「收購方認為自己股價偏高」的訊號——\n\n結果：宣布換股併購時，收購方的股價「通常會下跌」。"
   },
   {
    "t": "def",
    "term_en": "Friendly vs hostile; tender offer & proxy fight",
    "term_zh": "善意 vs 敵意；公開收購與委託書爭奪",
    "en": "Friendly merger: both managements are receptive. Hostile merger: the acquirer tries to gain control without target management's approval, usually via a tender offer (public offer to shareholders) or a proxy fight (battle for shareholder votes).",
    "zh": "友善 vs 敵意併購，以及兩種敵意手段：\n\n• 友善併購 (friendly)：雙方管理層都樂意、坐下來談。\n\n• 敵意併購 (hostile)：收購方在「未經目標管理層同意」下，硬要取得控制權。常用兩種手段：\n   1. 公開收購 (tender offer)：跳過管理層，「直接向股東」公開喊價買股。\n   2. 委託書爭奪戰 (proxy fight)：爭取「股東的投票委託權」，在股東會上改組董事會、奪取控制權。\n\n簡記：敵意併購 = 繞過管理層，要嘛直接買股東的股(tender offer)，要嘛搶股東的票(proxy fight)。"
   },
   {
    "t": "def",
    "term_en": "Defensive tactics",
    "term_zh": "防禦戰術",
    "badge": "重點",
    "en": "Before being in play: corporate charter amendments (classified/staggered board, supermajority voting), golden parachutes (costly management packages on takeover), poison pills (let existing holders buy shares cheaply). After in play: targeted repurchase/greenmail, standstill agreements, white knight (friendly buyer), leveraged recapitalization, exclusionary self-tenders, asset restructuring (sell 'crown jewels').",
    "zh": "目標公司的防禦戰術，分「被盯上前」與「被盯上後」：\n\n被盯上「之前」的預防措施：\n• 公司章程修訂：分期(交錯)改選董事會 (staggered board)、超級多數決 (supermajority)，讓收購方難以一次掌控。\n• 黃金降落傘 (golden parachute)：被併時給管理層高額補償，墊高收購成本。\n• 毒藥丸 (poison pill)：讓現有股東能以超低價大量認股，稀釋收購方、墊高成本。\n\n已被盯上「之後」的反制：\n• 標定回購/綠郵 (greenmail)：溢價向收購者買回持股請他走人。\n• 停戰協議 (standstill)、找白衣騎士 (white knight 友善買家)。\n• 槓桿資本重組 (leveraged recap)、排除性自我收購、出售「皇冠上的珠寶 (crown jewels)」核心資產讓自己變得沒吸引力。"
   },
   {
    "t": "concept",
    "term_en": "Have mergers added value?",
    "term_zh": "併購有創造價值嗎？",
    "en": "Target shareholders earn excess returns (more in a tender offer than a straight merger, partly because target managers resist and push the price up). Bidding-firm shareholders earn a small excess return in a tender offer but roughly none in a straight merger.",
    "zh": "併購到底有沒有創造價值？實證結果（誰賺到超額報酬）：\n\n• 目標公司股東：賺到「明顯的超額報酬」。其中「公開收購」賺得比「一般合併」更多——部分原因是目標管理層的抵抗，反而把收購價格往上推高了。\n\n• 收購方股東：在「公開收購」中只賺到「少少的」超額報酬；在「一般合併」中則「幾乎沒有」超額報酬。\n\n總結：併購的好處大多被「目標公司股東」拿走；收購方股東往往沒佔到便宜，甚至在出價過高時受損。這也呼應前面「別付過高溢價」的教訓。"
   },
   {
    "t": "def",
    "term_en": "Taxes, accounting, LBO",
    "term_zh": "稅務、會計、槓桿收購",
    "en": "Tax-free acquisition: sellers are treated as exchanging old shares for new of equal value → no capital gain/loss. Taxable: capital gain = price − original investment is taxed. Purchase method: acquired assets at fair value; excess paid over fair value = goodwill. LBO (going private): a cash offer financed with large debt; value comes from the debt tax shield and improved efficiency from concentrated ownership incentives.",
    "zh": "併購的稅務、會計與 LBO：\n\n稅務：\n• 免稅併購：賣方被視為「用舊股換等值新股」，當下不認列資本利得或損失。\n• 應稅併購：賣方須就「售價 − 原始投資成本」的資本利得課稅。\n\n會計（購買法 purchase method）：取得的資產以「公允價值」入帳；支付價格「超過公允價值」的部分認列為「商譽 (goodwill)」。\n\n槓桿收購 (LBO，下市/going private)：用「大量負債」融資的現金收購。價值來源有二——\n1. 負債的「利息稅盾」。\n2. 股權集中後，經營者誘因改善帶來的「效率提升」。"
   },
   {
    "t": "def",
    "term_en": "Divestitures",
    "term_zh": "分割/出售",
    "badge": "重點",
    "en": "Sell-off: sell a division to another company (shareholders' firm gets cash; no longer controlled by same shareholders). Equity carve-out: create a new firm from a subsidiary and sell a minority stake to the public via IPO (parent receives cash). Spin-off: create a new firm from a subsidiary and DISTRIBUTE its shares to existing parent shareholders (no cash to shareholders; still controlled by the same shareholders).",
    "zh": "分割/處分 (divestitures) 的三種方式，差別在「公司拿不拿到現金、還是不是原股東控制」：\n\n• 出售 (Sell-off)：把一個部門「賣給另一家公司」。公司(股東的公司)拿到「現金」；該部門不再由原股東控制。\n\n• 股權分拆 (Equity carve-out)：把子公司獨立，透過 IPO「向大眾出售少數股權」。母公司收到「現金」，但仍保有多數控制權。\n\n• 分割 (Spin-off)：把子公司獨立，並把其股票「直接分配給原母公司股東」。股東「沒拿到現金」，且該公司「仍由相同的股東控制」，只是變成獨立掛牌。\n\n對照記憶：出售=賣掉換現金、易主；carve-out=賣少數股權換現金、不易主；spin-off=不換現金、股票分給原股東。"
   }
  ],
  "key": "ch29"
 }
];

window.QUESTIONS = [
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "In the CAPM, the cost of equity equals the risk-free rate plus beta times which term?",
  "opts": [
   "The dividend yield",
   "The market risk premium (R_M − R_f)",
   "The corporate tax rate",
   "The debt-equity ratio"
  ],
  "ans": 1,
  "exp": "CAPM 公式為 R_S = R_f + β×(R_M − R_f)。beta 乘上的是『市場風險溢酬』(R_M − R_f)，代表承擔市場風險所要求的額外報酬。",
  "id": 1
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Which three inputs are required to apply the CAPM to estimate the cost of equity?",
  "opts": [
   "Risk-free rate, market risk premium, and beta",
   "Dividend, growth rate, and price",
   "ROE, retention ratio, and payout",
   "Debt, equity, and tax rate"
  ],
  "ans": 0,
  "exp": "使用 CAPM 必須知道：無風險利率 R_f、市場風險溢酬 (R_M−R_f)、以及個股 beta。其餘選項屬於 DDM 或 WACC 的輸入。",
  "id": 2
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Beta is best described as a measure of:",
  "opts": [
   "Total risk of a stock",
   "Unsystematic (diversifiable) risk",
   "Systematic risk — co-movement with the market",
   "Default risk of the firm's bonds"
  ],
  "ans": 2,
  "exp": "beta＝Cov(R_i,R_M)/Var(R_M)，衡量個股報酬與市場一起變動的程度，也就是『系統性風險』，並非總風險或可分散的非系統風險。",
  "id": 3
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "A common proxy for the risk-free rate is the:",
  "opts": [
   "S&P 500 return",
   "Treasury bill rate",
   "Corporate bond yield",
   "Average stock dividend yield"
  ],
  "ans": 1,
  "exp": "無風險利率常用『國庫券(Treasury bill)利率』作為代理變數，因其違約風險極低。",
  "id": 4
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "All else equal, a firm whose revenues are HIGHLY cyclical will tend to have:",
  "opts": [
   "A lower beta",
   "A higher beta",
   "A beta of exactly 1",
   "A negative beta"
  ],
  "ans": 1,
  "exp": "營收景氣循環性越高，公司報酬越隨景氣大幅波動，系統性風險越大，因此 beta 越高。",
  "id": 5
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Operating leverage is highest when a firm has:",
  "opts": [
   "High fixed costs and low variable costs",
   "Low fixed costs and high variable costs",
   "No fixed costs",
   "Equal fixed and variable costs"
  ],
  "ans": 0,
  "exp": "營運槓桿隨『固定成本上升、變動成本下降』而增加。固定成本高的公司，獲利對銷售變動更敏感，故 beta 較高。",
  "id": 6
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Increasing a firm's financial leverage generally:",
  "opts": [
   "Decreases the equity beta",
   "Has no effect on the equity beta",
   "Increases the equity beta",
   "Makes beta equal to zero"
  ],
  "ans": 2,
  "exp": "財務槓桿(負債)上升會放大股東報酬的波動，使權益 beta 增加。有舉債公司的權益 beta 一定大於全權益公司。",
  "id": 7
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "In the dividend discount model, the cost of equity is estimated as:",
  "opts": [
   "Dividend yield − growth rate",
   "Next-year dividend yield + dividend growth rate",
   "Beta × market premium",
   "Risk-free rate + tax rate"
  ],
  "ans": 1,
  "exp": "DDM：R_S = Div₁/P₀ + g，也就是『明年股利殖利率＋股利成長率』。",
  "id": 8
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "In the DDM, the sustainable growth rate g can be estimated as:",
  "opts": [
   "Retention ratio × ROE",
   "Payout ratio × ROE",
   "Dividend ÷ price",
   "Beta × ROE"
  ],
  "ans": 0,
  "exp": "g＝保留盈餘比率×ROE。保留越多盈餘再投資、且 ROE 越高，股利成長越快。",
  "id": 9
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Why is the cost of debt multiplied by (1 − tax rate) in the WACC?",
  "opts": [
   "Debt is riskless",
   "Interest payments are tax-deductible",
   "Dividends are tax-deductible",
   "Debt has no maturity"
  ],
  "ans": 1,
  "exp": "利息費用可抵稅，使負債的真正成本下降，故用稅後成本 R_B×(1−t_c)。股利則不可抵稅。",
  "id": 10
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "The weights used in the WACC formula should be based on:",
  "opts": [
   "Book values",
   "Market values",
   "Par values",
   "Historical cost"
  ],
  "ans": 1,
  "exp": "WACC 的權重應以負債與權益的『市值』計算，而非帳面價值，因為市值才反映目前的真實資本結構。",
  "id": 11
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "The cost of preferred stock is calculated as:",
  "opts": [
   "Preferred dividend × (1 − tax rate)",
   "Preferred dividend ÷ price",
   "Price ÷ preferred dividend",
   "Risk-free rate + beta"
  ],
  "ans": 1,
  "exp": "特別股成本 R_P = D/PV(股利÷價格)。因特別股股利不可抵稅，不做(1−t_c)調整。",
  "id": 12
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "The WACC is the appropriate discount rate for:",
  "opts": [
   "Any project regardless of risk",
   "Projects with risk similar to the firm's average",
   "Only all-equity projects",
   "Only government-subsidized projects"
  ],
  "ans": 1,
  "exp": "WACC 是評估『與公司平均風險相當』之計畫的折現率。風險明顯不同的計畫應用不同折現率。",
  "id": 13
 },
 {
  "unit": "ch13",
  "diff": "basic",
  "q": "Academics and companies generally favor the CAPM over the DDM mainly because the DDM:",
  "opts": [
   "Cannot use beta",
   "Has large measurement error in estimating growth and fails for no-dividend stocks",
   "Ignores the risk-free rate",
   "Requires the tax rate"
  ],
  "ans": 1,
  "exp": "DDM 在估『成長率』時誤差大，且對不發股利或低股利股票不適用；CAPM 較一致且可處理這類股票。",
  "id": 14
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A firm finances a project with the same risk as the firm itself but funds it entirely with retained earnings (no new debt). The correct discount rate is:",
  "opts": [
   "The after-tax cost of debt",
   "The cost of equity only, because no debt is used",
   "The WACC",
   "The risk-free rate"
  ],
  "ans": 2,
  "exp": "折現率取決於『計畫的風險』與公司的『目標資本結構』，而非該計畫實際用什麼錢支付。計畫風險與公司相同，仍應用 WACC，因為公司整體是用負債＋權益融資。",
  "id": 15
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "An all-equity firm has an asset beta of 0.9. It moves to a capital structure with debt-to-equity of 1.0 (assume riskless debt). The new equity beta is approximately:",
  "opts": [
   "0.45",
   "0.90",
   "1.80",
   "2.70"
  ],
  "ans": 2,
  "exp": "β_Equity = β_Asset×(1+B/S) = 0.9×(1+1) = 1.8。槓桿放大了權益的系統性風險。",
  "id": 16
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Two firms are in the same industry with the same business risk, but Firm A is unlevered and Firm B is levered. Which statement is correct?",
  "opts": [
   "A and B have the same equity beta",
   "B's equity beta exceeds A's equity beta",
   "A's equity beta exceeds B's",
   "Both have zero beta"
  ],
  "ans": 1,
  "exp": "同產業營運風險相同→資產 beta 相同。但有舉債的 B 因財務槓桿，其權益 beta 一定大於全權益的 A。",
  "id": 17
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A stock has beta 1.2, the risk-free rate is 3%, and the market risk premium is 7%. Its CAPM cost of equity is:",
  "opts": [
   "8.4%",
   "10.0%",
   "11.4%",
   "12.0%"
  ],
  "ans": 2,
  "exp": "R_S = 3% + 1.2×7% = 3% + 8.4% = 11.4%。",
  "id": 18
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A firm has 50% equity and 50% debt (market values). Cost of equity 12%, pre-tax cost of debt 6%, tax rate 25%. The WACC is:",
  "opts": [
   "6.0%",
   "8.25%",
   "9.0%",
   "11.25%"
  ],
  "ans": 1,
  "exp": "WACC = 0.5×12% + 0.5×6%×(1−0.25) = 6% + 0.5×4.5% = 6% + 2.25% = 8.25%。",
  "id": 19
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Why is it preferable to estimate beta from the AVERAGE beta of comparable industry firms rather than a single firm's regression beta?",
  "opts": [
   "Industry betas are always exactly 1",
   "It reduces measurement error and sample-size problems of a single estimate",
   "It eliminates systematic risk",
   "It removes the need for the risk-free rate"
  ],
  "ans": 1,
  "exp": "單一公司的迴歸 beta 有樣本不足、隨時間變動等誤差。取同業可比較公司的『平均 beta』可降低這類估計誤差。",
  "id": 20
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A no-dividend growth tech stock needs a cost of equity estimate. Which approach is more appropriate and why?",
  "opts": [
   "DDM, because it ignores beta",
   "DDM, because growth is easy to measure",
   "CAPM, because the DDM requires a dividend yield the firm does not have",
   "Neither can be used"
  ],
  "ans": 2,
  "exp": "DDM 需要股利殖利率 Div₁/P₀，不發股利的公司無法用；CAPM 不需股利，故較適合。",
  "id": 21
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Using the DDM, the market risk premium can be estimated as:",
  "opts": [
   "Market dividend yield + market dividend growth − risk-free rate",
   "Beta × historical return",
   "Risk-free rate − dividend yield",
   "Market P/E ratio"
  ],
  "ans": 0,
  "exp": "用 DDM 估市場期望報酬＝市場股利殖利率＋市場股利成長率，再減去無風險利率即得市場風險溢酬。",
  "id": 22
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A stock's dividend yield is 4% and dividends are expected to grow at 6%. Its DDM cost of equity is:",
  "opts": [
   "2%",
   "4%",
   "6%",
   "10%"
  ],
  "ans": 3,
  "exp": "R_S = Div₁/P₀ + g = 4% + 6% = 10%。",
  "id": 23
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Firm value beta is the weighted average of the betas of equity and debt. If debt beta is approximately zero, the asset beta equals:",
  "opts": [
   "The equity beta times (S+B)/S",
   "[S/(S+B)] × equity beta",
   "The equity beta times (1+B/S)",
   "The debt beta"
  ],
  "ans": 1,
  "exp": "資產 beta＝[S/(S+B)]×β_equity + [B/(S+B)]×β_debt。若 β_debt≈0，則資產 beta＝[S/(S+B)]×β_equity，即把權益 beta 依權益比例縮小。",
  "id": 24
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "A conglomerate uses a single firm-wide WACC to evaluate every division. The likely consequence is that it will:",
  "opts": [
   "Always reject every project",
   "Tend to accept too many high-risk projects and reject too many low-risk projects",
   "Have no effect on decisions",
   "Eliminate systematic risk"
  ],
  "ans": 1,
  "exp": "用單一 WACC 會低估高風險部門的折現率(門檻太低→易接受過多高風險計畫)，並高估低風險部門折現率(門檻太高→易否決好的低風險計畫)。應依各部門風險用不同折現率。",
  "id": 25
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Debt of $40m and equity of $60m (market values). After-tax cost of debt 3.3%, cost of equity 14.4%. The WACC is approximately:",
  "opts": [
   "8.85%",
   "9.96%",
   "11.85%",
   "14.40%"
  ],
  "ans": 1,
  "exp": "WACC = (60/100)×14.4% + (40/100)×3.3% = 8.64% + 1.32% = 9.96%。",
  "id": 26
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "Which change would, by itself, LOWER a firm's equity beta?",
  "opts": [
   "Increasing financial leverage",
   "Shifting to products with more cyclical revenues",
   "Increasing operating leverage (more fixed costs)",
   "Reducing financial leverage"
  ],
  "ans": 3,
  "exp": "營收循環性↑、營運槓桿↑、財務槓桿↑都會使 beta 上升。只有『降低財務槓桿』會使權益 beta 下降。",
  "id": 27
 },
 {
  "unit": "ch13",
  "diff": "hard",
  "q": "The expected return on a capital-budgeting project must be at least as high as the return on a comparable-risk financial asset because:",
  "opts": [
   "Of accounting rules",
   "Shareholders could otherwise take the dividend and earn that return themselves",
   "Debt is tax-deductible",
   "Beta must equal 1"
  ],
  "ans": 1,
  "exp": "資本成本的基本邏輯：股東能拿股利去買『同風險』金融資產賺取該報酬，所以公司計畫的期望報酬至少要不低於它，否則不如把現金發給股東。",
  "id": 28
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "The Adjusted Present Value (APV) of a project equals:",
  "opts": [
   "NPV of the all-equity project + PV of financing side effects",
   "NPV − financing costs",
   "Levered cash flow ÷ R_S",
   "UCF ÷ WACC"
  ],
  "ans": 0,
  "exp": "APV＝把計畫當全權益算出的 NPV ＋ 融資副作用現值(NPVF)。",
  "id": 29
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "Which of the following is a financing side effect counted in APV?",
  "opts": [
   "Depreciation",
   "The interest tax shield from debt",
   "Cost of goods sold",
   "Sales growth"
  ],
  "ans": 1,
  "exp": "APV 的融資副作用包含：負債抵稅利益、發行成本、財務困境成本、補貼性負債。負債抵稅是最常見的一項。",
  "id": 30
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "For perpetual debt, the present value of the interest tax shield equals:",
  "opts": [
   "The interest payment",
   "Tax rate × amount of debt (t_c × B)",
   "Debt ÷ tax rate",
   "Debt × interest rate"
  ],
  "ans": 1,
  "exp": "永續負債的抵稅現值＝t_c×B(稅率×負債金額)。",
  "id": 31
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "The Flow-to-Equity (FTE) method discounts which cash flow at which rate?",
  "opts": [
   "Unlevered cash flow at WACC",
   "Levered cash flow (LCF) at the cost of levered equity R_S",
   "Unlevered cash flow at R_0",
   "Dividends at R_B"
  ],
  "ans": 1,
  "exp": "FTE 折現『屬於股東的舉債後現金流量 LCF』，折現率用『有舉債權益成本 R_S』。",
  "id": 32
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "In the FTE method, the initial investment subtracted is:",
  "opts": [
   "The full investment",
   "Only the equity-financed portion of the investment",
   "Zero",
   "The debt portion only"
  ],
  "ans": 1,
  "exp": "FTE 只關注股東，故只扣掉『股東出資部分』＝總投資−借款金額。",
  "id": 33
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "The WACC method discounts:",
  "opts": [
   "Levered cash flow at R_S",
   "Unlevered cash flow at the WACC, subtracting the full investment",
   "Dividends at R_0",
   "Interest at R_B"
  ],
  "ans": 1,
  "exp": "WACC 法用 WACC 折現『全權益現金流量 UCF』，並扣掉全部投資。負債的好處已在 WACC 的(1−t_c)裡。",
  "id": 34
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "The cost of levered equity (MM Prop. II with taxes) is R_S = R_0 + (B/S)(1 − t_c)(R_0 − R_B). As leverage rises, R_S:",
  "opts": [
   "Falls",
   "Stays constant",
   "Rises",
   "Becomes negative"
  ],
  "ans": 2,
  "exp": "槓桿(B/S)上升使 R_S 增加，因為股東承擔的財務風險更高，要求更高報酬。",
  "id": 35
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "You should use the APV method when:",
  "opts": [
   "The debt-to-value ratio is constant",
   "The dollar level of debt is known/constant over the project's life",
   "The firm is all-equity",
   "Cash flows are zero"
  ],
  "ans": 1,
  "exp": "當『負債金額(固定)』已知時用 APV；當『負債/價值比固定』時用 WACC 或 FTE。",
  "id": 36
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "In practice, the most widely used of the three methods is:",
  "opts": [
   "APV",
   "FTE",
   "WACC",
   "None"
  ],
  "ans": 2,
  "exp": "實務上 WACC 法最常用。",
  "id": 37
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "Levered cash flow (LCF) equals unlevered cash flow (UCF) minus:",
  "opts": [
   "Depreciation",
   "The after-tax interest payment, (1 − t_c)R_B B",
   "The principal repayment",
   "Dividends"
  ],
  "ans": 1,
  "exp": "LCF＝UCF−稅後利息＝UCF−(1−t_c)·R_B·B。",
  "id": 38
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "In the no-tax case, the equity beta of a levered firm equals the unlevered beta times:",
  "opts": [
   "(1 − B/S)",
   "(1 + B/S)",
   "(1 − t_c)",
   "B/S"
  ],
  "ans": 1,
  "exp": "無稅時 β_Equity = β_Unlevered×(1+B/S)。",
  "id": 39
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "With corporate taxes and riskless debt, the equity beta equals β_Unlevered times:",
  "opts": [
   "(1 + B/S)",
   "[1 + (1 − t_c)(B/S)]",
   "(1 − t_c)",
   "(B/S)(1 − t_c)"
  ],
  "ans": 1,
  "exp": "有稅時 β_Equity = [1+(1−t_c)(B/S)]×β_Unlevered，(1−t_c)減弱了槓桿效果。",
  "id": 40
 },
 {
  "unit": "ch18",
  "diff": "basic",
  "q": "All three valuation methods (APV, FTE, WACC), when applied correctly, should give:",
  "opts": [
   "Different values depending on the method",
   "The same project value",
   "A value only for all-equity firms",
   "A value equal to the initial investment"
  ],
  "ans": 1,
  "exp": "三種方法只是不同切入角度，正確套用時算出的計畫價值應一致。",
  "id": 41
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A project has all-equity NPV of −$10,000. It will be financed with $100,000 of perpetual debt; the tax rate is 21%. The APV is:",
  "opts": [
   "−$10,000",
   "+$11,000",
   "+$21,000",
   "−$31,000"
  ],
  "ans": 1,
  "exp": "APV = NPV + t_c×B = −10,000 + 0.21×100,000 = −10,000 + 21,000 = +11,000。原本被否決的計畫，加上負債抵稅後變可接受。",
  "id": 42
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "UCF is $92,400. Debt is $121,900 at 10% interest, tax rate 21%. The levered cash flow (LCF) is approximately:",
  "opts": [
   "$80,210",
   "$82,770",
   "$92,400",
   "$104,772"
  ],
  "ans": 1,
  "exp": "LCF = UCF − (1−t_c)·R_B·B = 92,400 − 0.79×0.10×121,900 = 92,400 − 9,630 ≈ 82,770。",
  "id": 43
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A firm has R_0 = 20%, R_B = 10%, B/S = 1/3, t_c = 21%. The cost of levered equity R_S is approximately:",
  "opts": [
   "20.00%",
   "22.63%",
   "18.95%",
   "10.00%"
  ],
  "ans": 1,
  "exp": "R_S = R_0 + (B/S)(1−t_c)(R_0−R_B) = 20% + (1/3)(0.79)(10%) = 20% + 2.63% = 22.63%。",
  "id": 44
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "Why does the WACC method NOT add a separate PV of financing effects like APV does?",
  "opts": [
   "Because financing effects do not exist",
   "Because the debt tax benefit is already embedded in the (1 − t_c) term of the WACC",
   "Because the WACC uses LCF",
   "Because the WACC ignores debt"
  ],
  "ans": 1,
  "exp": "WACC 法把負債抵稅好處放進公式裡的(1−t_c)，所以不必再另外加融資效果現值；APV 則把它分開列示。",
  "id": 45
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A levered firm has equity $200m, riskless debt $100m, equity beta 2, tax rate 21%. The unlevered (asset) beta is approximately:",
  "opts": [
   "1.00",
   "1.43",
   "2.00",
   "2.79"
  ],
  "ans": 1,
  "exp": "β_U = [S/(S+(1−t_c)B)]×β_E = [200/(200+0.79×100)]×2 = (200/279)×2 ≈ 1.43。",
  "id": 46
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A firm uses WACC and FTE for a project. Which condition makes these methods appropriate?",
  "opts": [
   "The dollar amount of debt is fixed",
   "The firm maintains a constant target debt-to-value ratio over the project's life",
   "The project is risk-free",
   "The firm is all-equity"
  ],
  "ans": 1,
  "exp": "當公司維持『固定的負債/價值比』時，用 WACC 與 FTE 最恰當；負債金額固定時才用 APV。",
  "id": 47
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "In the APV method, flotation (issue) costs of new debt are treated as:",
  "opts": [
   "A positive side effect added to NPV",
   "A negative financing side effect that reduces APV",
   "Part of the unlevered cash flow",
   "Ignored"
  ],
  "ans": 1,
  "exp": "發行成本是融資的『負面』副作用，會降低 APV(發行費用本身扣掉，但其分期攤銷可產生少量抵稅)。",
  "id": 48
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A government grants a firm a loan at a BELOW-market interest rate. In the APV framework this subsidy:",
  "opts": [
   "Reduces APV",
   "Has no effect on APV",
   "Increases APV via a positive NPV of the loan",
   "Only affects the unlevered NPV"
  ],
  "ans": 2,
  "exp": "補貼性(低於市場利率)貸款使 NPV(loan)為正，是正面融資副作用，會提高 APV。",
  "id": 49
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "Summary of methods — which combination is correct?",
  "opts": [
   "APV discounts LCF at R_S",
   "FTE discounts UCF at WACC",
   "WACC discounts UCF at R_WACC and subtracts the full investment",
   "APV subtracts only the equity portion of investment"
  ],
  "ans": 2,
  "exp": "正確：WACC 法折現 UCF、用 R_WACC、扣全部投資。APV 折 UCF 用 R_0 扣全部投資；FTE 折 LCF 用 R_S 只扣股東出資。",
  "id": 50
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "With taxes, the bracket [1 + (1 − t_c)(B/S)] for any levered firm is:",
  "opts": [
   "Less than 1, so equity beta < unlevered beta",
   "Greater than 1, so equity beta > unlevered beta",
   "Exactly 1",
   "Negative"
  ],
  "ans": 1,
  "exp": "只要有負債，該括號值就>1，因此即使有稅，權益 beta 仍大於無舉債 beta。",
  "id": 51
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "A project's UCF is $300,000 in perpetuity, WACC is 14.95%, initial investment $1,000,000. The NPV (WACC method) is approximately:",
  "opts": [
   "−$1,000,000",
   "+$700,000",
   "+$1,007,000",
   "+$300,000"
  ],
  "ans": 2,
  "exp": "NPV = UCF/WACC − Investment = 300,000/0.1495 − 1,000,000 ≈ 2,007,000 − 1,000,000 = +1,007,000。",
  "id": 52
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "FTE is often described as a reasonable choice for which kind of firm?",
  "opts": [
   "An all-equity firm",
   "A highly levered firm",
   "A firm with no cash flows",
   "A government agency"
  ],
  "ans": 1,
  "exp": "FTE 直接評價股東現金流，對『高度舉債』的公司是合理的選擇。",
  "id": 53
 },
 {
  "unit": "ch18",
  "diff": "hard",
  "q": "Three competitors in a new industry are unlevered with betas 1.2, 1.3, 1.4. The best estimate of the asset beta for a new project in that industry is:",
  "opts": [
   "1.2",
   "1.3",
   "1.4",
   "2.33"
  ],
  "ans": 1,
  "exp": "取同業未舉債公司 beta 的平均：(1.2+1.3+1.4)/3 = 1.3，作為新計畫的資產 beta，再依自己的槓桿 relever。",
  "id": 54
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Which of the following is a CASH payout to shareholders?",
  "opts": [
   "Stock split",
   "Stock dividend",
   "Regular cash dividend",
   "Reverse split"
  ],
  "ans": 2,
  "exp": "現金發放包含：經常性現金股利、額外股利、買回庫藏股。股票股利與股票分割是『股票』發放，不是現金。",
  "id": 55
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "On which date does a buyer of the stock NO LONGER receive the declared dividend?",
  "opts": [
   "Declaration date",
   "Date of record",
   "On or after the ex-dividend date",
   "Payment date"
  ],
  "ans": 2,
  "exp": "除息/權日(ex-dividend date)當天或之後買進的股票就『不含』股利；前一天(cum-dividend)是最後含息可買日。",
  "id": 56
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "In a world with no taxes or transaction costs, on the ex-dividend date the stock price should fall by:",
  "opts": [
   "Zero",
   "Half the dividend",
   "Exactly the amount of the dividend",
   "Twice the dividend"
  ],
  "ans": 2,
  "exp": "無稅、無交易成本時，除息日股價會剛好下跌『等於股利』的金額。",
  "id": 57
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "The Miller–Modigliani dividend irrelevance proposition states that in a perfect market, dividend policy:",
  "opts": [
   "Maximizes firm value",
   "Minimizes firm value",
   "Does not affect firm value",
   "Only matters for growth firms"
  ],
  "ans": 2,
  "exp": "MM 股利無關論：完美市場下，股利政策不影響公司價值，因投資人可用『自製股利』調整現金流。",
  "id": 58
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "'Homemade dividends' refer to investors:",
  "opts": [
   "Forcing the firm to change policy",
   "Creating their preferred cash-flow pattern by reinvesting or selling shares",
   "Receiving stock instead of cash",
   "Avoiding all taxes"
  ],
  "ans": 1,
  "exp": "自製股利：投資人把多餘股利再投資、或賣股票自製現金，以調出自己想要的現金流型態。",
  "id": 59
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Given dividend irrelevance, a firm should:",
  "opts": [
   "Cut positive-NPV projects to pay dividends",
   "Never forgo positive-NPV projects just to pay a dividend",
   "Always maximize current dividends",
   "Never invest"
  ],
  "ans": 1,
  "exp": "既然股利對價值無關，公司絕不該為了發股利而砍掉正 NPV 的投資計畫。",
  "id": 60
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Which is NOT one of the three ways to repurchase stock?",
  "opts": [
   "Open-market purchase",
   "Tender offer",
   "Targeted repurchase",
   "Stock split"
  ],
  "ans": 3,
  "exp": "買回庫藏股有三種：公開市場買回、公開收購、針對性買回。股票分割不是買回方式。",
  "id": 61
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Considering personal taxes alone, firms generally have an incentive to:",
  "opts": [
   "Increase dividends",
   "Reduce dividends",
   "Stop investing",
   "Issue more equity"
  ],
  "ans": 1,
  "exp": "因為股利會被課個人稅，考慮個人稅後公司有動機『減少股利』(尤其需發新股才能發股利的公司)。",
  "id": 62
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Which real-world factor FAVORS a high dividend policy?",
  "opts": [
   "Desire for current income by retirees",
   "Higher personal taxes on dividends",
   "Flotation costs of issuing equity",
   "The need to fund positive-NPV projects"
  ],
  "ans": 0,
  "exp": "偏好高股利的因素：對當期收入的需求(如退休族)、行為自制力、代理成本。其餘屬於偏好低股利的因素。",
  "id": 63
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Empirically, when a firm announces a dividend INCREASE, its stock price usually:",
  "opts": [
   "Falls",
   "Rises",
   "Stays unchanged",
   "Goes to zero"
  ],
  "ans": 1,
  "exp": "宣布增加股利股價通常上漲；宣布減少股利股價通常下跌。這是『資訊內涵(訊號)效果』。",
  "id": 64
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "The information content effect refers to:",
  "opts": [
   "The cost of printing dividend checks",
   "The price reaction conveying information about future cash flows",
   "Taxes on dividends",
   "The clientele effect"
  ],
  "ans": 1,
  "exp": "資訊內涵效果：股利變動傳遞了公司未來盈餘/現金流的訊息，導致股價反應。",
  "id": 65
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "Under the clientele effect, high-tax-bracket individuals tend to prefer:",
  "opts": [
   "High payout stocks",
   "Zero-to-low payout stocks",
   "Only preferred stock",
   "Only bonds"
  ],
  "ans": 1,
  "exp": "客群效果：高稅率個人偏好低/零發放(避免股利稅)；免稅機構偏中；公司法人偏高發放。",
  "id": 66
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "A 2-for-1 stock split is equivalent to:",
  "opts": [
   "A 50% stock dividend",
   "A 100% stock dividend",
   "A cash dividend",
   "A repurchase"
  ],
  "ans": 1,
  "exp": "2配1股票分割＝100%股票股利，股數加倍、股價約減半。",
  "id": 67
 },
 {
  "unit": "ch19",
  "diff": "basic",
  "q": "A stock dividend, unlike a cash dividend:",
  "opts": [
   "Reduces total owners' equity",
   "Pays additional shares and leaves total equity unchanged",
   "Pays cash to shareholders",
   "Reduces shares outstanding"
  ],
  "ans": 1,
  "exp": "股票股利發放額外股數，股數增加但股東權益總額不變(只是把保留盈餘轉到資本公積)。",
  "id": 68
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "Investor X wants $10 per share at dates 0 and 1, but the firm pays $11 then $8.90. To replicate her desired pattern she should:",
  "opts": [
   "Sell shares at date 0",
   "Reinvest the extra $1 received at date 0",
   "Borrow money",
   "Demand a special dividend"
  ],
  "ans": 1,
  "exp": "公司多發$1，她把多的$1於 date 0 再投資(賺10%)，date 1 得$8.90+$1.10=$10，達到她想要的$10/$10。這就是自製股利。",
  "id": 69
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "A firm with excess cash decides between paying a dividend now vs retaining and investing in T-bills. The payout decision depends mainly on:",
  "opts": [
   "The firm's beta",
   "The comparison of personal vs corporate tax rates",
   "The dividend's declaration date",
   "The number of shares outstanding"
  ],
  "ans": 1,
  "exp": "對有多餘現金的公司，發不發股利取決於『個人稅率 vs 公司稅率』高低。個人稅率高→傾向少發；個人稅率低→傾向把多餘現金發掉。",
  "id": 70
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "In a perfect market, comparing a $3/share cash dividend with an equal-dollar repurchase, the firm and shareholders are:",
  "opts": [
   "Better off with the dividend",
   "Better off with the repurchase",
   "Indifferent between the two",
   "Unable to do either"
  ],
  "ans": 2,
  "exp": "完美市場中發股利與買回庫藏股價值相同，公司與股東無差異。例：發股利後股價$27、買回後股價$30，但持有人總財富相同。",
  "id": 71
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "A firm has a target payout ratio of 30%, last year's EPS $10 and dividend $3. EPS jumps to $20 with speed of adjustment s = 0.5. This year's dividend is:",
  "opts": [
   "$3.00",
   "$4.50",
   "$6.00",
   "$1.50"
  ],
  "ans": 1,
  "exp": "ΔDiv = s×(t·EPS₁−Div₀) = 0.5×(0.30×20 − 3) = 0.5×3 = 1.5。本年股利＝3+1.5=$4.50。公司只部分調整以平滑股利。",
  "id": 72
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "Why do firms 'smooth' dividends rather than fully adjusting them to current earnings?",
  "opts": [
   "To minimize taxes",
   "Because only part of any earnings change is viewed as permanent",
   "To increase flotation costs",
   "To dilute shareholders"
  ],
  "ans": 1,
  "exp": "經理人認為盈餘變動只有一部分是長久的，故只部分調整股利往目標走，避免日後被迫減股利(減股利會傷股價)。",
  "id": 73
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "The dividend-signaling 'trade-off' argument notes that since Cash flow = Capital expenditures + Dividends, raising dividends:",
  "opts": [
   "Always signals higher value",
   "May reduce funds for capital expenditure, so managers need not raise dividends to signal",
   "Has no cost",
   "Reduces taxes"
  ],
  "ans": 1,
  "exp": "因現金流＝資本支出＋股利，多發股利可能排擠資本支出(未來現金流)。這是當期與未來的取捨，故經理人不必然要用加股利來傳遞訊號。",
  "id": 74
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "Suppose personal tax rate on dividends is 15% and on interest 28%, corporate tax rate 21%. For a firm with extra cash, retaining and investing then later paying may beat paying now when:",
  "opts": [
   "The corporate tax rate exceeds the personal interest tax rate",
   "The personal interest tax rate exceeds the corporate tax rate (corporate compounding advantage)",
   "Dividends are tax-free",
   "There are no T-bills"
  ],
  "ans": 1,
  "exp": "當個人(利息)稅率28%高於公司稅率21%時，公司用稅後7.9%複利成長優於股東自己用稅後7.2%，因此保留再投資後再發放可能勝過現在就發。",
  "id": 75
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "A 'sensible' payout policy recommends a firm should NOT initiate dividends until it:",
  "opts": [
   "Has any positive earnings",
   "Is generating substantial free cash flow",
   "Has issued new equity",
   "Has a high beta"
  ],
  "ans": 1,
  "exp": "合理的發放政策：在公司能產生『大量自由現金流』之前不要開始發股利，且不要為發股利而砍正 NPV 計畫。",
  "id": 76
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "Which is listed as a CON of paying dividends?",
  "opts": [
   "Dividends appeal to investors wanting steady income",
   "Dividends keep cash from spendthrift managers",
   "Once established, dividend cuts are hard to make without hurting the stock price",
   "Dividends can signal optimism"
  ],
  "ans": 2,
  "exp": "發股利的缺點之一：一旦開始發，未來『減股利』很難而不傷股價。其餘三項都是優點。",
  "id": 77
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "After a stock dividend of 1,000 new shares at market price $66 (par $1), what happens on the balance sheet?",
  "opts": [
   "Total equity rises by $66,000",
   "Retained earnings fall and paid-in capital rises, total equity unchanged",
   "Cash falls by $66,000",
   "Liabilities rise"
  ],
  "ans": 1,
  "exp": "股票股利只是會計科目重分類：保留盈餘減少($66×1,000)，普通股與資本公積增加，股東權益『總額不變』。",
  "id": 78
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "A reason share repurchases have grown relative to dividends is:",
  "opts": [
   "They are mandatory",
   "Flexibility, offsetting dilution, executive compensation, and tax advantages",
   "They increase shares outstanding",
   "They are required by law each year"
  ],
  "ans": 1,
  "exp": "買回庫藏股相對成長的原因：彈性、抵銷員工選擇權稀釋、與經理人薪酬連動、低估時買回、以及租稅優勢。",
  "id": 79
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "For a firm WITHOUT sufficient cash that issues stock to pay a $100 dividend, shareholders effectively:",
  "opts": [
   "Gain $15",
   "Lose about $15 to dividend taxes",
   "Pay no taxes",
   "Receive $115"
  ],
  "ans": 1,
  "exp": "必須發新股才能發股利的公司，發$100股利會被課股利稅(例如損失$15)，這支持低股利政策。",
  "id": 80
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "Once a firm's dividend clientele is satisfied, changing its dividend policy will:",
  "opts": [
   "Always increase value",
   "Always decrease value",
   "Be unlikely to create value",
   "Eliminate taxes"
  ],
  "ans": 2,
  "exp": "客群效果的結論：各客群被滿足後，再改股利政策不太可能創造價值(只是換一批客群)。",
  "id": 81
 },
 {
  "unit": "ch19",
  "diff": "hard",
  "q": "A large stock dividend is generally defined as one that is:",
  "opts": [
   "Less than 5%",
   "Less than 20–25%",
   "More than 20–25%",
   "Exactly 50%"
  ],
  "ans": 2,
  "exp": "小型股票股利<20~25%；大型股票股利>20~25%。",
  "id": 82
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "An option gives its owner:",
  "opts": [
   "The obligation to buy or sell",
   "The right but not the obligation to buy or sell at a fixed price",
   "Ownership of the firm",
   "A fixed coupon"
  ],
  "ans": 1,
  "exp": "選擇權給持有人『權利』(非義務)，可在到期前/到期日以履約價買或賣標的。",
  "id": 83
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The fixed price at which an option can be exercised is the:",
  "opts": [
   "Spot price",
   "Strike (exercise) price",
   "Premium",
   "Intrinsic value"
  ],
  "ans": 1,
  "exp": "履約價/執行價(strike/exercise price)＝合約中可買或賣標的的固定價格。",
  "id": 84
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "A European option can be exercised:",
  "opts": [
   "Any time before expiry",
   "Only at expiry",
   "Only in Europe",
   "Never"
  ],
  "ans": 1,
  "exp": "歐式選擇權只能在『到期日』執行；美式選擇權則到期前隨時可執行。",
  "id": 85
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "A call option is 'in-the-money' when:",
  "opts": [
   "Stock price > strike price",
   "Stock price < strike price",
   "Stock price = strike price",
   "The option has expired"
  ],
  "ans": 0,
  "exp": "買權價內＝股價高於履約價(執行有正報酬)。價平＝相等；價外＝股價低於履約價。",
  "id": 86
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The payoff of a call option at expiration is:",
  "opts": [
   "max(E − S_T, 0)",
   "max(S_T − E, 0)",
   "S_T − E always",
   "E − S_T always"
  ],
  "ans": 1,
  "exp": "買權到期報酬＝max(S_T−E, 0)。股價高於履約價時值 S_T−E，否則作廢為0。",
  "id": 87
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The payoff of a put option at expiration is:",
  "opts": [
   "max(S_T − E, 0)",
   "max(E − S_T, 0)",
   "S_T − E",
   "Always zero"
  ],
  "ans": 1,
  "exp": "賣權到期報酬＝max(E−S_T, 0)。股價低於履約價時值 E−S_T，否則作廢為0。",
  "id": 88
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "A put option gives the owner the right to:",
  "opts": [
   "Buy an asset at a fixed price",
   "Sell an asset at a fixed price",
   "Receive dividends",
   "Vote on the board"
  ],
  "ans": 1,
  "exp": "賣權＝以履約價『賣出』標的的權利。",
  "id": 89
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The writer (seller) of a call option:",
  "opts": [
   "Has the right to buy the stock",
   "Is obligated to deliver shares if the holder exercises",
   "Always profits",
   "Owns a put"
  ],
  "ans": 1,
  "exp": "賣出買權者『有義務』在持有人執行時交出股票，獲利上限為收到的權利金。",
  "id": 90
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "A protective put strategy consists of:",
  "opts": [
   "Buying stock + buying a put",
   "Selling stock + buying a call",
   "Buying two calls",
   "Selling a put"
  ],
  "ans": 0,
  "exp": "保護性賣權＝買股票＋買賣權，替持股設下檔保護。",
  "id": 91
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "Put-call parity is written as:",
  "opts": [
   "S + C = P + PV(E)",
   "S + P = C + PV(E)",
   "S − P = C − PV(E)",
   "C + P = S + E"
  ],
  "ans": 1,
  "exp": "買賣權平價：S₀ + P₀ = C₀ + PV(E)。『買股＋買賣權』與『買買權＋買無風險債券(面額E)』報酬與成本相同。",
  "id": 92
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "An option's premium equals:",
  "opts": [
   "Intrinsic value only",
   "Time value only",
   "Intrinsic value + time value",
   "Strike − spot"
  ],
  "ans": 2,
  "exp": "權利金＝內含價值＋時間價值。內含價值是立即執行的價值；時間價值是權利金超出內含價值的部分。",
  "id": 93
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The intrinsic value of a call is:",
  "opts": [
   "max(S − E, 0)",
   "max(E − S, 0)",
   "S × E",
   "Zero"
  ],
  "ans": 0,
  "exp": "買權內含價值＝max(S−E,0)；賣權內含價值＝max(E−S,0)。",
  "id": 94
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "Higher volatility of the underlying stock makes:",
  "opts": [
   "Calls more valuable but puts less valuable",
   "Both calls and puts more valuable",
   "Both less valuable",
   "No change"
  ],
  "ans": 1,
  "exp": "波動率上升使買權與賣權『都』更值錢，因為更有機會變成價內。",
  "id": 95
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "An increase in the strike (exercise) price:",
  "opts": [
   "Raises call value, lowers put value",
   "Lowers call value, raises put value",
   "Raises both",
   "Lowers both"
  ],
  "ans": 1,
  "exp": "履約價上升使買權價值下降(更難價內)、使賣權價值上升(更易價內)。",
  "id": 96
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The delta of a call option is:",
  "opts": [
   "Negative",
   "Zero",
   "Positive",
   "Always 1"
  ],
  "ans": 2,
  "exp": "買權 delta>0(股價漲買權漲)；賣權 delta<0。delta＝買權變動÷股價變動。",
  "id": 97
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The Black-Scholes model prices which type of option?",
  "opts": [
   "An American put",
   "A European call",
   "A futures contract",
   "A bond"
  ],
  "ans": 1,
  "exp": "Black-Scholes 公式 C₀ = S·N(d₁) − E·e^(−Rt)·N(d₂) 用來評價『歐式買權』。",
  "id": 98
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "In the option-pricing view, a firm's equity can be viewed as:",
  "opts": [
   "A put on the firm's assets",
   "A call on the firm's assets with strike = face value of debt",
   "A risk-free bond",
   "A forward contract"
  ],
  "ans": 1,
  "exp": "股權＝對公司資產的買權，履約價＝負債面額。公司價值高於負債時股東得 S−E，否則為0。",
  "id": 99
 },
 {
  "unit": "ch22",
  "diff": "basic",
  "q": "The option market is best described as a:",
  "opts": [
   "Positive-sum game",
   "Negative-sum game",
   "Zero-sum game",
   "Risk-free game"
  ],
  "ans": 2,
  "exp": "買方的獲利等於賣方的損失(反之亦然)，選擇權市場是零和遊戲。",
  "id": 100
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "A call has strike $150. At expiry the stock is $120. The call's value is:",
  "opts": [
   "$30",
   "$0",
   "−$30",
   "$120"
  ],
  "ans": 1,
  "exp": "max(S−E,0)=max(120−150,0)=0。股價低於履約價，買權作廢。",
  "id": 101
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "A put has strike $50. At expiry the stock is $30. The put's value is:",
  "opts": [
   "$0",
   "$20",
   "$30",
   "$50"
  ],
  "ans": 1,
  "exp": "max(E−S,0)=max(50−30,0)=$20。",
  "id": 102
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Stock $80, a 3-month call (strike $85) costs $6, monthly risk-free 0.5%. By put-call parity, the matching put is approximately:",
  "opts": [
   "$6.00",
   "$9.74",
   "$1.00",
   "$85.00"
  ],
  "ans": 1,
  "exp": "P = −S + C + E/(1.005)³ = −80 + 6 + 85/1.0151 ≈ −80 + 6 + 83.74 = $9.74。",
  "id": 103
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Stock $110; a 1-year call (strike $110) is $15, the put is $5. The implied risk-free rate is:",
  "opts": [
   "5%",
   "10%",
   "15%",
   "0%"
  ],
  "ans": 1,
  "exp": "put-call parity：S+P−C＝PV(E) → 110+5−15＝$100＝PV(110)。110/(1+r)=100 → r=10%。",
  "id": 104
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "A stock is $50; next period it is $60 or $40; risk-free 10%; an at-the-money ($50) call. The hedge ratio (delta) is:",
  "opts": [
   "1",
   "1/2",
   "1/4",
   "2"
  ],
  "ans": 1,
  "exp": "delta＝(C_up−C_down)/(S_up−S_down)=(10−0)/(60−40)=10/20=½。",
  "id": 105
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Using the same two-state setup ($50→$60/$40, strike $50, r=10%), the call's value today is approximately:",
  "opts": [
   "$10.00",
   "$6.82",
   "$5.00",
   "$0"
  ],
  "ans": 1,
  "exp": "複製組合：買½股($25)、借$18.18 → 成本$6.82。或用風險中立 q=3/4：(¾×10+¼×0)/1.1=$6.82。",
  "id": 106
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "In the same setup, the risk-neutral probability q of an up move is:",
  "opts": [
   "1/4",
   "1/2",
   "3/4",
   "1"
  ],
  "ans": 2,
  "exp": "q＝[(1+r)S₀−S(D)]/[S(U)−S(D)]=[1.1×50−40]/[60−40]=15/20=3/4。",
  "id": 107
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "A 'synthetic stock' from put-call parity is created by:",
  "opts": [
   "Buying a call, selling a put, and lending PV(E)",
   "Buying a call, writing a put, and buying PV(E) of risk-free bonds",
   "Selling stock and buying a bond",
   "Buying two puts"
  ],
  "ans": 1,
  "exp": "重排 put-call parity：S = C − P + PV(E)。即買買權＋賣賣權＋買無風險債券(面額E)，得合成股票。",
  "id": 108
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Risky corporate debt can be viewed in option terms as:",
  "opts": [
   "A risk-free bond plus a call",
   "A risk-free bond minus a put written to shareholders",
   "A call on the firm's assets",
   "Two puts"
  ],
  "ans": 1,
  "exp": "風險性債權＝無風險債券『減去』一個賣權(債權人等於對股東賣出一個賣權)。公司破產時股東把公司丟給債權人＝執行賣權。",
  "id": 109
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "A merger purely for diversification reduces asset-return volatility. In option terms this:",
  "opts": [
   "Raises equity (call) value",
   "Lowers equity (call) value and transfers wealth to bondholders",
   "Has no effect",
   "Eliminates the debt"
  ],
  "ans": 1,
  "exp": "波動率下降→買權(股權)價值下降→財富從股東移轉給債權人。故純分散風險的合併不利股東。",
  "id": 110
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "In a highly LEVERED firm, stockholders may prefer a project with lower (or even negative) NPV if it:",
  "opts": [
   "Lowers volatility",
   "Substantially raises the volatility of asset returns",
   "Pays a dividend",
   "Reduces debt"
  ],
  "ans": 1,
  "exp": "股權＝買權，波動率上升使買權價值增加。高度舉債時股東『輸了也沒什麼可輸』，故可能偏好高波動的低/負 NPV 計畫，犧牲債權人。",
  "id": 111
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Which factor pair correctly shows the effect on a PUT option value?",
  "opts": [
   "Stock price + ; interest rate +",
   "Stock price − ; interest rate −",
   "Stock price + ; interest rate −",
   "Stock price − ; interest rate +"
  ],
  "ans": 1,
  "exp": "對賣權：股價↑→價值↓(−)；利率↑→價值↓(−)。因利率上升使未來賣得款項的現值下降。",
  "id": 112
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "The lower bound on a European call price is:",
  "opts": [
   "Stock price − exercise price",
   "Stock price − PV(exercise price)",
   "Zero only",
   "Exercise price"
  ],
  "ans": 1,
  "exp": "歐式買權下限＝股價−履約價現值；美式買權下限＝股價−履約價。上限皆為股價。",
  "id": 113
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "In Black-Scholes, N(d) represents:",
  "opts": [
   "The option's delta exactly",
   "The probability a standard normal variable is ≤ d",
   "The volatility",
   "The intrinsic value"
  ],
  "ans": 1,
  "exp": "N(d)＝標準常態分配的累積機率(隨機變數≤d 的機率)，由常態分配表查得。",
  "id": 114
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "In the replicating-portfolio approach to the two-state model, the call is duplicated by:",
  "opts": [
   "Buying stock and lending",
   "Buying delta shares of stock and borrowing",
   "Selling stock and borrowing",
   "Buying a bond only"
  ],
  "ans": 1,
  "exp": "用『買 Δ 股股票＋借款』複製買權報酬。依無套利，買權價格＝此複製組合的成本。",
  "id": 115
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Why does a higher interest rate INCREASE a call's value?",
  "opts": [
   "It raises the dividend",
   "It lowers the present value of the exercise price the holder must pay later",
   "It reduces volatility",
   "It increases the strike"
  ],
  "ans": 1,
  "exp": "買權可延後付款，利率上升使『未來才付的履約價』現值下降(成本變低)，故買權更值錢。",
  "id": 116
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "From the stockholders' view, equity equals firm value plus a put minus a risk-free bond. This is equivalent to which call-based view?",
  "opts": [
   "Equity = a call on the firm",
   "Equity = a put on the firm",
   "Equity = the firm",
   "Equity = a risk-free bond"
  ],
  "ans": 0,
  "exp": "兩種觀點等價：股權＝對公司的買權＝公司價值＋買權對應的賣權−無風險債券。皆指股東在公司價值>負債時才有剩餘價值。",
  "id": 117
 },
 {
  "unit": "ch22",
  "diff": "hard",
  "q": "Two strategies — (i) buy stock + buy put, (ii) buy call + buy risk-free bond (face value E) — must cost the same because:",
  "opts": [
   "They have the same payoff, so no-arbitrage forces equal cost",
   "Options are free",
   "Stocks and bonds are identical",
   "Of accounting rules"
  ],
  "ans": 0,
  "exp": "兩策略到期報酬完全相同，依無套利原理其成本必相等，這正是買賣權平價的由來。",
  "id": 118
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "A warrant is best described as a call option that is issued by whom?",
  "opts": [
   "Another investor on an options exchange",
   "The company itself",
   "A commercial bank",
   "The government"
  ],
  "ans": 1,
  "exp": "認購權證 (warrant) 是「公司本身」發行的買權，持有人可依固定價格向公司買進「新發行」的股票。這點與交易所/投資人發行的一般買權不同。",
  "id": 119
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "When a warrant is exercised, what happens to the number of shares outstanding?",
  "opts": [
   "It stays the same",
   "It increases because the firm issues new shares",
   "It decreases",
   "It depends on the strike price only"
  ],
  "ans": 1,
  "exp": "行使權證時，公司必須「發行新股」交給持有人，因此流通在外股數增加，造成原股東股權「稀釋 (dilution)」。一般買權則只是既有股票易手，股數不變。",
  "id": 120
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "A convertible bond gives the holder the right to do what?",
  "opts": [
   "Convert the bond into shares of stock before maturity",
   "Demand early repayment of principal at any time",
   "Receive a higher coupon if rates rise",
   "Sell the bond back to the firm at par"
  ],
  "ans": 0,
  "exp": "可轉換公司債 (convertible bond) 賦予持有人在到期前依轉換比率把債券「轉換成股票」的權利。一旦轉換，原本的債務就消失、變成股權。",
  "id": 121
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Once a convertible bond is converted into stock, the original debt:",
  "opts": [
   "Still exists alongside the new shares",
   "Ceases to exist and becomes equity",
   "Is doubled",
   "Becomes a warrant"
  ],
  "ans": 1,
  "exp": "可轉債轉換後，債務「消失」並轉為股權。這與「附認購權證債券」不同：後者權證單獨行使，原債券仍然存在。",
  "id": 122
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Compared with exchange-traded options, warrants typically have:",
  "opts": [
   "Shorter maturities",
   "Longer maturities",
   "No maturity",
   "The same maturity by law"
  ],
  "ans": 1,
  "exp": "權證的存續期間通常比交易所掛牌的選擇權「更長」，而且常附在公司債上一起發行 (bond-with-warrants)。",
  "id": 123
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Firms grant at-the-money executive stock options (ESOs) partly because, at the grant date, they are:",
  "opts": [
   "Guaranteed to be profitable",
   "Not taxable income to the employee",
   "Free to value",
   "Required by the SEC"
  ],
  "ans": 1,
  "exp": "平價 (at-the-money) 的高管股票選擇權在「授予當下」不算員工的應稅所得，具租稅效率；同時能把薪酬與股東利益綁在一起、降低底薪並讓報酬承擔風險。",
  "id": 124
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Which model is commonly used to value executive stock options?",
  "opts": [
   "The dividend discount model",
   "The Black-Scholes model",
   "The CAPM",
   "The payback rule"
  ],
  "ans": 1,
  "exp": "高管股票選擇權 (ESO) 通常用 Black-Scholes 模型評價，因為它本質上就是一個買權。",
  "id": 125
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "The straight bond value of a convertible bond acts as a:",
  "opts": [
   "Ceiling on its price",
   "Floor (minimum) on its price",
   "Substitute for the coupon",
   "Measure of dilution"
  ],
  "ans": 1,
  "exp": "可轉債的「純債券價值」(coupon 與本金的現值) 是它的價格下限之一；轉換價值也是另一個下限。可轉債實際價值會高於兩個下限，多出的部分即選擇權(時間)價值。",
  "id": 126
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Conversion value of a convertible bond equals:",
  "opts": [
   "Coupon ÷ yield",
   "Conversion ratio × current stock price",
   "Par value × coupon rate",
   "Shares outstanding × price"
  ],
  "ans": 1,
  "exp": "轉換價值 = 轉換比率 × 目前股價，代表「現在就轉換」能拿到的股票市值，是可轉債的另一個價格下限。",
  "id": 127
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "Valuing a start-up \"as a real option\" treats the firm's value as largely:",
  "opts": [
   "The book value of its assets",
   "The option to expand if the pilot succeeds",
   "The founders' salaries",
   "Its current accounting profit"
  ],
  "ans": 1,
  "exp": "新創公司的價值常常是「擴張選擇權」的價值：即使試驗性專案 NPV 為負，一旦成功就能大量複製推廣，這個擴張的選擇權可能價值很高。",
  "id": 128
 },
 {
  "unit": "ch23_24",
  "diff": "basic",
  "q": "In a bond-with-warrants, after the warrant is exercised the original bond:",
  "opts": [
   "Disappears",
   "Still exists",
   "Converts to equity automatically",
   "Loses its coupon"
  ],
  "ans": 1,
  "exp": "附認購權證債券中，權證是「單獨」行使的，行使後原債券「仍然存在」(且若可分離，權證也能單獨買賣)。這正是它與可轉債最大的差別。",
  "id": 129
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "A firm has 1,000 shares outstanding and issues 200 warrants. If an otherwise identical call is worth $10, the warrant is worth approximately:",
  "opts": [
   "$10.00",
   "$8.33",
   "$12.00",
   "$2.00"
  ],
  "ans": 1,
  "exp": "稀釋調整後權證價值 = 買權 × #/(#+#_w) = 10 × 1000/(1000+200) = 10 × 0.8333 ≈ $8.33。因行使權證會發新股稀釋，故權證價值低於同條件買權。",
  "id": 130
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "Why is a warrant worth less than an otherwise identical call option?",
  "opts": [
   "Warrants pay no dividends",
   "Exercising warrants dilutes equity by creating new shares",
   "Warrants always expire worthless",
   "Calls have longer maturities"
  ],
  "ans": 1,
  "exp": "行使權證會迫使公司「發新股」，使股數增加、股權被稀釋，故每單位獲利被攤薄，價值低於行使後股數不變的同條件買權。",
  "id": 131
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "A convertible bond has a straight-bond value of $900, a conversion value of $1,050, and trades at $1,120. The $70 difference reflects:",
  "opts": [
   "Accrued interest",
   "The option (time) value of waiting",
   "A pricing error",
   "The coupon payment"
  ],
  "ans": 1,
  "exp": "V_CB = max(純債券, 轉換價值) + 選擇權價值 = max(900,1050) + 選擇權價值。1120 − 1050 = $70 即為「等待轉換」的選擇權(時間)價值。",
  "id": 132
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "The \"risk synergy\" reason for issuing convertibles/warrants means the option component:",
  "opts": [
   "Eliminates all project risk",
   "Self-adjusts in value when project risk is hard to evaluate",
   "Lowers the firm's beta to zero",
   "Guarantees a fixed return"
  ],
  "ans": 1,
  "exp": "風險綜效：當專案風險難以評估時，內含的選擇權成分會「自動調整」——專案越有風險，選擇權越值錢，因此可轉債/權證對發行雙方都較不會因錯估風險而吃虧。",
  "id": 133
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "In an efficient market, a convertible bond is:",
  "opts": [
   "Always cheaper financing than straight debt",
   "Always more expensive than straight debt",
   "Neither cheaper nor more expensive than other instruments",
   "Risk-free"
  ],
  "ans": 2,
  "exp": "在效率市場中，可轉債「既不便宜也不昂貴」——其價格已公允反映債券與選擇權成分。它的好處在於配合現金流、風險綜效與降低代理成本，而非單純更便宜。",
  "id": 134
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "When valuing a start-up's expansion option with Black-Scholes, the \"stock price\" S corresponds to:",
  "opts": [
   "The cost to expand",
   "The PV of the expansion's future cash flows",
   "The risk-free rate",
   "The number of units sold"
  ],
  "ans": 1,
  "exp": "把擴張機會視為買權：S = 擴張未來現金流的現值，E (履約價) = 擴張所需成本。算出選擇權價值後，再加回基礎專案的 NPV。",
  "id": 135
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "The \"agency cost\" rationale for issuing convertibles is that the equity component:",
  "opts": [
   "Increases bondholder risk",
   "Reduces bondholders' wealth being expropriated versus straight debt",
   "Raises the coupon rate",
   "Forces early conversion"
  ],
  "ans": 1,
  "exp": "代理成本觀點：可轉債的股權成分讓債權人也能分享公司上行的好處，降低「股東犧牲債權人」的財富移轉問題，相較純債券更能緩和代理衝突。",
  "id": 136
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "A young, risky growth firm may prefer convertibles because they offer:",
  "opts": [
   "A higher initial coupon",
   "A lower initial interest rate (matching cash flows)",
   "Immediate dilution",
   "Guaranteed conversion"
  ],
  "ans": 1,
  "exp": "配合現金流：年輕高風險成長型公司現金流前期較弱，可轉債因含選擇權價值，可用「較低的初始利率」發行，減輕早期付息壓力。",
  "id": 137
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "Which statement correctly distinguishes a convertible bond from a bond-with-warrants?",
  "opts": [
   "Both keep the original bond after exercise",
   "On conversion the convertible's debt disappears, but a warrant is exercised separately and the bond remains",
   "Warrants cannot be detached, convertibles can",
   "They are economically identical"
  ],
  "ans": 1,
  "exp": "可轉債「轉換」後債務消失；附權證債券的權證是「分開行使」、原債券仍在。若可分離，權證還能單獨買賣，這是兩者的關鍵差異。",
  "id": 138
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "Granting ESOs lets a firm reduce cash base pay while:",
  "opts": [
   "Guaranteeing executives a fixed bonus",
   "Putting executive pay at risk and aligning it with shareholders",
   "Removing all executive incentives",
   "Avoiding Black-Scholes valuation"
  ],
  "ans": 1,
  "exp": "ESO 把高管報酬「置於風險中」(股價漲才有價值)，使其與股東利益一致，同時公司可降低底薪、保留現金，且授予時具租稅效率。",
  "id": 139
 },
 {
  "unit": "ch23_24",
  "diff": "hard",
  "q": "If a pilot project has NPV of −$2M but the option to expand is worth $9M, the project should be:",
  "opts": [
   "Rejected because NPV is negative",
   "Accepted, because total value = −2 + 9 = +$7M",
   "Accepted only if the option expires",
   "Deferred indefinitely"
  ],
  "ans": 1,
  "exp": "把擴張選擇權加回基礎 NPV：−2M + 9M = +7M > 0，應接受。實質選擇權正是用來捕捉「先試水溫、成功再擴張」的彈性價值。",
  "id": 140
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "Net working capital (NWC) is defined as:",
  "opts": [
   "Current assets − Current liabilities",
   "Total assets − Total liabilities",
   "Cash − Inventory",
   "Revenue − Costs"
  ],
  "ans": 0,
  "exp": "淨營運資金 NWC = 流動資產 − 流動負債，衡量公司短期流動性，即償付近期到期義務的能力。",
  "id": 141
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "Which action increases the firm's cash?",
  "opts": [
   "Buying fixed assets",
   "Issuing long-term bonds",
   "Paying off accounts payable",
   "Increasing inventory"
  ],
  "ans": 1,
  "exp": "現金增加的情況：發行長期債(或股票)、出售固定資產、流動負債增加、非現金流動資產減少(收回應收、賣存貨)。發行債券即屬此類，故現金增加。",
  "id": 142
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "The operating cycle equals:",
  "opts": [
   "Inventory period + Accounts receivable period",
   "Inventory period − A/P period",
   "A/R period − A/P period",
   "Cash cycle + A/P period"
  ],
  "ans": 0,
  "exp": "營運週期 = 存貨期間 + 應收帳款期間，是「存貨到貨」到「收到貨款」的整段時間。",
  "id": 143
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "The cash cycle is calculated as:",
  "opts": [
   "Operating cycle + A/P period",
   "Operating cycle − A/P period",
   "Inventory period + A/R period",
   "A/R period − Inventory period"
  ],
  "ans": 1,
  "exp": "現金週期 = 營運週期 − 應付帳款期間。它從「付出現金買料」起算，到「收到貨款」止，反映公司現金被卡住的時間。",
  "id": 144
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "A flexible short-term financial policy is characterized by:",
  "opts": [
   "Little cash and small inventory",
   "Large holdings of cash, securities, and inventory",
   "No credit sales",
   "High proportion of short-term debt"
  ],
  "ans": 1,
  "exp": "彈性(寬鬆)政策：持有大量現金與有價證券、大量存貨、寬鬆的賒銷(高應收)，並以低比例短期負債融資。緊縮政策則相反。",
  "id": 145
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "Carrying costs of current assets:",
  "opts": [
   "Fall as investment in current assets rises",
   "Rise as investment in current assets rises",
   "Are unrelated to investment",
   "Equal shortage costs always"
  ],
  "ans": 1,
  "exp": "持有成本(carrying costs)隨流動資產投資「增加」而上升，包括低報酬的機會成本、倉儲成本等。短缺成本則隨投資增加而下降。",
  "id": 146
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "Shortage costs include:",
  "opts": [
   "Warehousing costs",
   "Lost sales and lost goodwill",
   "Opportunity cost of idle cash",
   "Interest on long-term debt"
  ],
  "ans": 1,
  "exp": "短缺成本(shortage costs)指訂購/交易成本、以及缺貨造成的失去銷售、商譽損失、生產中斷等，會隨流動資產投資增加而下降。",
  "id": 147
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "The primary tool of short-run financial planning is the:",
  "opts": [
   "Income statement",
   "Cash budget",
   "Balance sheet",
   "Capital budget"
  ],
  "ans": 1,
  "exp": "現金預算(cash budget)是短期財務規劃的主要工具，記錄預估的現金收入(扣除收款延遲)與現金支出，再對照最低現金餘額算出每期的盈餘或不足。",
  "id": 148
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "Which is an example of a secured short-term loan?",
  "opts": [
   "A bank line of credit",
   "A loan collateralized by accounts receivable",
   "Commercial paper",
   "A banker's acceptance"
  ],
  "ans": 1,
  "exp": "有擔保短期借款是以應收帳款或存貨作為擔保品的借款。無擔保借款例如銀行信用額度；其他來源還有銀行承兌匯票、商業本票。",
  "id": 149
 },
 {
  "unit": "ch26",
  "diff": "basic",
  "q": "The two elements of short-term financial policy are the size of current-asset investment and:",
  "opts": [
   "The dividend payout ratio",
   "The financing of current assets (short- vs long-term debt mix)",
   "The firm's beta",
   "The tax rate"
  ],
  "ans": 1,
  "exp": "短期財務政策兩要素：(1)流動資產投資規模(相對營收)，(2)流動資產的融資方式(短期 vs 長期負債的比例)。",
  "id": 150
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "A firm has an inventory period of 50 days, an A/R period of 30 days, and an A/P period of 40 days. Its cash cycle is:",
  "opts": [
   "120 days",
   "40 days",
   "80 days",
   "20 days"
  ],
  "ans": 1,
  "exp": "營運週期 = 50+30 = 80 天；現金週期 = 營運週期 − 應付期間 = 80 − 40 = 40 天。",
  "id": 151
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "If a firm lengthens the time it takes to pay suppliers (longer A/P period), holding all else equal, its cash cycle will:",
  "opts": [
   "Lengthen",
   "Shorten",
   "Stay unchanged",
   "Become negative by definition"
  ],
  "ans": 1,
  "exp": "現金週期 = 營運週期 − 應付期間。拉長應付帳款期間會使現金週期「縮短」，因為公司可更久才付現金，被卡住的時間變少。",
  "id": 152
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "The optimal investment in current assets (CA*) occurs where:",
  "opts": [
   "Carrying costs are zero",
   "Shortage costs are zero",
   "Total of carrying + shortage costs is minimized",
   "Carrying costs are maximized"
  ],
  "ans": 2,
  "exp": "最適流動資產水準 CA* 落在「持有成本 + 短缺成本」總成本曲線的「最低點」。一方上升、一方下降，相加後的最小值即最適點。",
  "id": 153
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "A firm with low carrying costs and high shortage costs should adopt a:",
  "opts": [
   "Restrictive policy",
   "Flexible policy",
   "Zero-inventory policy",
   "Cash-only policy"
  ],
  "ans": 1,
  "exp": "當持有成本低、短缺成本高時，多投資於流動資產較划算 → 採「彈性(寬鬆)政策」(多現金、多存貨、寬鬆賒銷)。反之則採緊縮政策。",
  "id": 154
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "In a cash budget, why might cash receipts in a month be less than that month's sales?",
  "opts": [
   "Because of depreciation",
   "Because of a collection lag — some sales are collected later",
   "Because of interest expense",
   "Because sales are always overstated"
  ],
  "ans": 1,
  "exp": "現金預算中，銷售要扣除「收款延遲」才變成當期現金收入：賒銷的貨款常在之後月份才收到，故當月現金收入可能少於當月銷售額。",
  "id": 155
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "Selling inventory for cash has what effect on net working capital (assuming sold at book value)?",
  "opts": [
   "Increases NWC",
   "Decreases NWC",
   "No change in total NWC (one current asset replaces another)",
   "Doubles NWC"
  ],
  "ans": 2,
  "exp": "以帳面價值賣存貨換現金：存貨(流動資產)減少、現金(流動資產)等額增加，流動資產總額與 NWC「不變」，只是組成改變。",
  "id": 156
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "A restrictive financing policy relies on:",
  "opts": [
   "A low proportion of short-term debt",
   "A high proportion of short-term debt",
   "Only equity",
   "No external financing"
  ],
  "ans": 1,
  "exp": "融資面：緊縮政策用「高比例短期負債」(成本通常較低但展期風險高)；彈性政策則用低比例短期負債、較多長期融資。",
  "id": 157
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "A negative cash cycle (collecting from customers before paying suppliers) typically means the firm:",
  "opts": [
   "Is in financial distress",
   "Effectively finances operations using supplier credit",
   "Has very high inventory",
   "Cannot make sales"
  ],
  "ans": 1,
  "exp": "負的現金週期代表公司在「付款給供應商之前」就先收到客戶的錢，等於用供應商的賒帳替自己融資——零售業(如收現銷售+長賒帳)常見，是營運效率高的表現。",
  "id": 158
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "Which combination describes the operating cycle and cash cycle relationship?",
  "opts": [
   "Cash cycle is always longer than operating cycle",
   "Cash cycle = operating cycle only when A/P period is zero",
   "They are always equal",
   "Operating cycle excludes inventory"
  ],
  "ans": 1,
  "exp": "現金週期 = 營運週期 − 應付期間。只有當應付帳款期間為 0(立即付現)時，現金週期才等於營運週期；否則現金週期較短。",
  "id": 159
 },
 {
  "unit": "ch26",
  "diff": "hard",
  "q": "Issuing stock and then using the proceeds to buy fixed assets has what net effect on cash?",
  "opts": [
   "Net increase in cash",
   "Net decrease in cash",
   "Roughly no net change — cash in from equity, cash out for assets",
   "Cash is unaffected by either"
  ],
  "ans": 2,
  "exp": "發行股票使現金增加，但買固定資產又使現金減少，兩者金額相當時「淨效果接近零」——只是把募得資金轉成了固定資產。",
  "id": 160
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "Holding cash to take advantage of unexpected bargains reflects which motive?",
  "opts": [
   "Transaction motive",
   "Precautionary motive",
   "Speculative motive",
   "Tax motive"
  ],
  "ans": 2,
  "exp": "投機動機 (speculative motive)：持有現金以把握突如其來的好機會。另兩者為預防動機(應急)與交易動機(支付日常帳款)。",
  "id": 161
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "Float is defined as:",
  "opts": [
   "Book balance − available balance",
   "Available (collected) balance − book balance",
   "Cash + marketable securities",
   "Total receipts − total disbursements"
  ],
  "ans": 1,
  "exp": "浮存 (float) = 可用(銀行)餘額 − 帳面餘額，反映尚在銀行系統清算中的支票淨效果。",
  "id": 162
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "Granting credit to customers generally:",
  "opts": [
   "Reduces sales but eliminates bad debts",
   "Increases sales but creates the cost of bad debts",
   "Has no effect on sales",
   "Guarantees full collection"
  ],
  "ans": 1,
  "exp": "提供賒銷通常能「增加銷售」，但同時帶來呆帳成本(無法收款的客戶)。信用管理就是在額外銷售與授信成本之間權衡。",
  "id": 163
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "Which is NOT one of the three components of credit policy?",
  "opts": [
   "Terms of sale",
   "Credit analysis",
   "Collection policy",
   "Dividend policy"
  ],
  "ans": 3,
  "exp": "信用政策三要素：銷售條件(信用期、現金折扣、信用工具)、信用分析(分辨好壞客戶)、收款政策。股利政策與信用政策無關。",
  "id": 164
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "Disbursement float arises from checks that the firm:",
  "opts": [
   "Receives from customers",
   "Writes to others",
   "Deposits in securities",
   "Cancels"
  ],
  "ans": 1,
  "exp": "支付浮存(disbursement float)：公司「開出」的支票已使帳面餘額減少，但尚未從可用餘額扣除，形成對公司有利的浮存。",
  "id": 165
 },
 {
  "unit": "ch27_28",
  "diff": "basic",
  "q": "The book (ledger) balance is:",
  "opts": [
   "What the bank shows as spendable",
   "The cash shown on the firm's own books",
   "The total float",
   "The collected balance"
  ],
  "ans": 1,
  "exp": "帳面(分類帳)餘額是「公司自己帳上」顯示的現金；可用(已收妥)餘額才是銀行認定可動用的金額；兩者之差即浮存。",
  "id": 166
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "A firm writes a $10,000 check that takes 4 days to clear. The average daily disbursement float from this check over those days is:",
  "opts": [
   "$2,500",
   "$10,000",
   "$40,000",
   "$0"
  ],
  "ans": 1,
  "exp": "平均每日浮存 = (延遲天數 × 金額) / 期間天數 = (4 × 10,000)/4 = $10,000。在這 4 天期間，平均而言有 $10,000 的支付浮存。",
  "id": 167
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "To maximize beneficial disbursement float, a firm would prefer that its payment checks clear:",
  "opts": [
   "As quickly as possible",
   "As slowly as possible",
   "Instantly",
   "Before being mailed"
  ],
  "ans": 1,
  "exp": "支付浮存對公司有利(錢還在自己帳上)。因此公司希望開出的支票「越慢清算越好」，以延長可用資金的時間；收款浮存則相反，希望越快越好。",
  "id": 168
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "Total collection delay consists of mailing time, processing delay, and:",
  "opts": [
   "Coupon delay",
   "Availability delay",
   "Tax delay",
   "Inventory delay"
  ],
  "ans": 1,
  "exp": "總延遲 = 郵寄時間 + 處理延遲 + 可用性延遲。浮存大小取決於金額與時間延遲的長短。",
  "id": 169
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "The trade-off in cash management is between:",
  "opts": [
   "Sales growth and market share",
   "The opportunity cost of holding cash and the transaction cost of converting securities to cash",
   "Debt and equity",
   "Dividends and buybacks"
  ],
  "ans": 1,
  "exp": "持有現金的取捨：持有過多現金有「機會成本」(報酬低)；持有太少又需頻繁變賣證券換現金，產生「交易成本」。最適現金部位在兩者間取得平衡。",
  "id": 170
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "A \"good\" credit customer in credit analysis is one who:",
  "opts": [
   "Always pays late",
   "Is likely to pay (low default risk)",
   "Buys the most",
   "Demands the longest credit period"
  ],
  "ans": 1,
  "exp": "信用分析的目的是分辨「好」付款人(違約機率低、會付款)與「壞」付款人(很可能違約)。買得多但常違約並不算好客戶。",
  "id": 171
 },
 {
  "unit": "ch27_28",
  "diff": "hard",
  "q": "Collection float (from checks the firm receives) is something the firm wants to:",
  "opts": [
   "Maximize",
   "Minimize (speed up collection)",
   "Keep constant",
   "Ignore"
  ],
  "ans": 1,
  "exp": "收款浮存代表公司「已入帳但尚不可動用」的錢，對公司不利，故希望「縮短」——加速收款流程，讓資金盡快可用。",
  "id": 172
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "In a merger, the acquiring firm:",
  "opts": [
   "Is dissolved and a new firm is created",
   "Absorbs the target, which ceases to exist",
   "Buys only the target's assets",
   "Becomes a subsidiary of the target"
  ],
  "ans": 1,
  "exp": "合併(merger)中，收購方「吸收」目標公司並保留自己的名稱，目標公司消失。若是「新設合併(consolidation)」，則兩家都消失、新設一家公司。",
  "id": 173
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "A tender offer is:",
  "opts": [
   "A loan to the target firm",
   "A public offer to buy the target shareholders' stock",
   "A merger by board vote only",
   "A dividend to target shareholders"
  ],
  "ans": 1,
  "exp": "公開收購(tender offer)是直接向目標公司「股東」公開喊價買股，常用於股權收購或敵意併購，繞過目標管理層。",
  "id": 174
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "Two firms in the same industry combining is a:",
  "opts": [
   "Vertical merger",
   "Horizontal merger",
   "Conglomerate merger",
   "Spin-off"
  ],
  "ans": 1,
  "exp": "水平併購(horizontal)：收購方與目標在「同一產業」。垂直併購是生產流程上下游；複合(conglomerate)併購則兩者業務無關。",
  "id": 175
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "Synergy exists when the combined firm is worth:",
  "opts": [
   "Exactly the sum of the two stand-alone firms",
   "More than the sum of the two stand-alone firms",
   "Less than either firm alone",
   "Zero"
  ],
  "ans": 1,
  "exp": "綜效(synergy) = V_AB − (V_A + V_B) > 0，即合併後價值「大於」兩家獨立公司價值之和，多出來的部分就是綜效。",
  "id": 176
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "Which is a source of synergy through cost reduction?",
  "opts": [
   "Monopoly power",
   "Economies of scale",
   "Use of net operating losses",
   "Marketing gains"
  ],
  "ans": 1,
  "exp": "成本降低類綜效包括規模/範疇經濟、垂直整合、技術移轉、互補資源、撤換無能經理人等。規模經濟即屬此類。(壟斷力/行銷屬收入增強；淨營業損失屬稅負利得。)",
  "id": 177
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "For a cash acquisition, the NPV to the acquirer equals:",
  "opts": [
   "Synergy + Premium",
   "Synergy − Premium",
   "Premium − Synergy",
   "V_B − Synergy"
  ],
  "ans": 1,
  "exp": "現金併購對收購方 NPV = 綜效 − 溢價，其中溢價 = 支付現金 − V_B。等價地 NPV = (V_B + 綜效) − 現金。",
  "id": 178
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "A poison pill is a defensive tactic that:",
  "opts": [
   "Pays managers on takeover",
   "Lets existing shareholders buy shares cheaply to deter a takeover",
   "Sells the best assets",
   "Finds a friendly buyer"
  ],
  "ans": 1,
  "exp": "毒藥丸(poison pill)讓「現有股東」在被收購時能以低價大量買股，稀釋收購方持股、墊高收購成本，藉此嚇阻敵意併購。",
  "id": 179
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "A white knight refers to:",
  "opts": [
   "A hostile bidder",
   "A friendlier alternative buyer sought by the target",
   "A government regulator",
   "A type of poison pill"
  ],
  "ans": 1,
  "exp": "白衣騎士(white knight)是目標公司在面臨敵意併購時，主動尋找的「較友善的替代買家」，以避免落入敵意收購者之手。",
  "id": 180
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "In a spin-off, the parent firm:",
  "opts": [
   "Sells the subsidiary for cash",
   "Distributes the subsidiary's shares to existing parent shareholders",
   "Sells a minority stake via IPO",
   "Liquidates the subsidiary"
  ],
  "ans": 1,
  "exp": "分割(spin-off)：把子公司獨立出來，並把其股票「分配給原母公司股東」，不收現金，且仍由相同股東控制。",
  "id": 181
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "A leveraged buyout (LBO) / going private is financed mainly with:",
  "opts": [
   "New equity issues",
   "Large amounts of debt",
   "Retained earnings only",
   "A stock-for-stock swap"
  ],
  "ans": 1,
  "exp": "LBO(下市)是用「大量負債」融資的現金收購，價值來源主要是負債的稅盾，以及集中股權後改善經營效率的誘因。",
  "id": 182
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "A proxy fight is a battle to:",
  "opts": [
   "Buy the target's assets",
   "Win shareholder votes to gain control",
   "Issue new bonds",
   "Pay a special dividend"
  ],
  "ans": 1,
  "exp": "委託書爭奪戰(proxy fight)是透過爭取「股東投票權」來取得公司控制權，是敵意併購除公開收購外的另一手段。",
  "id": 183
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "An equity carve-out involves:",
  "opts": [
   "Distributing subsidiary shares to parent shareholders for free",
   "Selling a minority stake in a subsidiary to the public via IPO",
   "Selling an entire division to another firm",
   "Repurchasing parent shares"
  ],
  "ans": 1,
  "exp": "股權分拆(equity carve-out)：把子公司獨立並透過 IPO「向大眾出售少數股權」，母公司因此收到現金，但仍保有多數控制權。",
  "id": 184
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "In a stock acquisition (vs asset acquisition), a key advantage is:",
  "opts": [
   "No minority shareholders ever remain",
   "No formal shareholder vote of the target is required",
   "It is always cheaper",
   "It avoids dealing with shareholders"
  ],
  "ans": 1,
  "exp": "股權收購可直接向股東買股、「不需目標公司股東會正式表決」；缺點是若管理層抵抗成本高，且可能有少數股東不賣而無法完全吸收。",
  "id": 185
 },
 {
  "unit": "ch29",
  "diff": "basic",
  "q": "Golden parachutes are:",
  "opts": [
   "Cheap shares for all shareholders",
   "Costly compensation packages for managers triggered by a takeover",
   "Loans to the acquirer",
   "A type of tender offer"
  ],
  "ans": 1,
  "exp": "黃金降落傘(golden parachute)是當公司被併購時，提供給管理層的「高額補償方案」，會墊高收購成本，屬於事前的防禦措施之一。",
  "id": 186
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Firm A (V_A=$500) and Firm B (V_B=$100) combine into a firm worth $650. The synergy is:",
  "opts": [
   "$50",
   "$150",
   "$650",
   "$100"
  ],
  "ans": 0,
  "exp": "綜效 = V_AB − (V_A + V_B) = 650 − (500 + 100) = $50。",
  "id": 187
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Continuing: if A pays $130 in cash for B (V_B=$100, synergy=$50), the NPV to A is:",
  "opts": [
   "$50",
   "$30",
   "$20",
   "−$30"
  ],
  "ans": 2,
  "exp": "溢價 = 現金 − V_B = 130 − 100 = $30；NPV = 綜效 − 溢價 = 50 − 30 = $20。",
  "id": 188
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "The EPS of the combined firm rises with no synergy. In an efficient market this means:",
  "opts": [
   "Real value was created",
   "It is an accounting illusion; the P/E falls and per-share value is unchanged",
   "Shareholders are worse off",
   "The merger should be reversed"
  ],
  "ans": 1,
  "exp": "無綜效時 EPS 的上升只是「高本益比併低本益比公司」的會計假象。效率市場中合併價值僅為兩者之和，本益比下降，每股價值不變。",
  "id": 189
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "The coinsurance effect of a merger (with debt) generally transfers wealth:",
  "opts": [
   "From bondholders to stockholders",
   "From stockholders to bondholders",
   "From the firm to the government",
   "Among stockholders only"
  ],
  "ans": 1,
  "exp": "共同保險效果：合併降低破產機率，使既有債券更安全、更值錢，財富因而「從股東移轉給債權人」。這也是純為分散風險而合併對股東無益的原因之一。",
  "id": 190
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Why is risk reduction through diversification generally NOT a good reason to merge?",
  "opts": [
   "It increases systematic risk",
   "Shareholders can diversify more cheaply on their own",
   "It always destroys synergy",
   "Regulators forbid it"
  ],
  "ans": 1,
  "exp": "合併雖能分散非系統風險，但「股東自己在資本市場分散」成本更低，因此公司花錢併購來降風險，對股東並非真正的利益。",
  "id": 191
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "A firm is more likely to use stock (rather than cash) to pay for an acquisition when its own shares are:",
  "opts": [
   "Undervalued",
   "Overvalued",
   "Fairly valued",
   "Non-voting"
  ],
  "ans": 1,
  "exp": "當收購方認為自家股票被「高估」時，較傾向用股票支付(等於用貴的貨幣付帳)。因此宣布換股併購時，收購方股價通常會「下跌」。",
  "id": 192
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "On announcement of a stock-for-stock acquisition, the acquirer's stock price typically:",
  "opts": [
   "Rises sharply",
   "Falls",
   "Is unaffected",
   "Doubles"
  ],
  "ans": 1,
  "exp": "換股併購常被市場解讀為「收購方認為自家股價偏高」的訊號，故宣布時收購方股價通常「下跌」。",
  "id": 193
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Empirically, in acquisitions the group that earns the largest excess returns is:",
  "opts": [
   "Bidding-firm shareholders in a merger",
   "Target-firm shareholders",
   "Bidding-firm bondholders",
   "Investment bankers"
  ],
  "ans": 1,
  "exp": "實證上「目標公司股東」賺取最大的超額報酬(公開收購中又高於一般合併，因目標管理層抵抗推高了價格)；收購方股東報酬則很小甚至幾乎為零。",
  "id": 194
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "In a taxable acquisition, the target's selling shareholders:",
  "opts": [
   "Recognize no gain or loss",
   "Are taxed on capital gains (price − original cost)",
   "Receive tax-free new shares",
   "Pay the acquirer's taxes"
  ],
  "ans": 1,
  "exp": "應稅併購中，賣方股東須就「售價 − 原始投資成本」的資本利得課稅。免稅併購則視為等值換股，當下不認列資本利得/損失。",
  "id": 195
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Under the purchase method, goodwill is recorded as:",
  "opts": [
   "The target's total assets",
   "The excess of price paid over the fair value of acquired assets",
   "The acquirer's retained earnings",
   "The synergy value only"
  ],
  "ans": 1,
  "exp": "購買法下，併購方以公允價值認列取得的資產，支付價格「超過公允價值」的部分認列為商譽(goodwill)。",
  "id": 196
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "A tax gain from a merger can arise because the combined firm:",
  "opts": [
   "Pays higher dividends",
   "Can use net operating losses or add more debt for a bigger tax shield",
   "Has a higher P/E",
   "Issues more equity"
  ],
  "ans": 1,
  "exp": "稅負利得來源：運用被併公司的淨營業損失(NOL)抵稅、提高負債能力以擴大利息稅盾、消化多餘資金等。",
  "id": 197
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "Greenmail refers to:",
  "opts": [
   "A friendly merger offer",
   "A targeted repurchase of a potential acquirer's shares at a premium",
   "A poison pill",
   "An equity carve-out"
  ],
  "ans": 1,
  "exp": "綠郵(greenmail)是公司以溢價「向特定潛在收購者買回其持股」，請對方走人，屬於進入併購攻防後的防禦措施。",
  "id": 198
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "A sell-off differs from a spin-off in that a sell-off:",
  "opts": [
   "Distributes shares to existing shareholders",
   "Brings cash to the firm by selling a division to another company",
   "Creates a new public firm via IPO",
   "Keeps the division under the same shareholders"
  ],
  "ans": 1,
  "exp": "出售(sell-off)是把一個部門「賣給另一家公司換現金」，且不再由原股東控制；分割(spin-off)則是把股票分給原股東、不收現金、仍由相同股東控制。",
  "id": 199
 },
 {
  "unit": "ch29",
  "diff": "hard",
  "q": "A staggered (classified) board is a defensive tactic because it:",
  "opts": [
   "Pays a special dividend",
   "Slows an acquirer from replacing the whole board at once",
   "Sells crown-jewel assets",
   "Triggers a tender offer"
  ],
  "ans": 1,
  "exp": "分期改選(交錯)董事會：每年只改選部分董事，使收購方無法一次掌控整個董事會，拖慢敵意併購者取得控制的速度，屬事前的公司章程防禦。",
  "id": 200
 }
];
