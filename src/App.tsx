import type { ReactNode } from "react";

type IconName = "floorplan" | "sky" | "band" | "diff" | "person" | "panorama";

type PainPoint = {
  title: string;
  detail: string;
  impact: string;
  icon: IconName;
};

type Feature = {
  title: string;
  flow: string;
  lead: string;
  copy: string;
  badge: string;
  icon: IconName;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

type Metric = {
  label: string;
  name: string;
  value: string;
};

type ClassicTool = {
  title: string;
  lead: string;
  copy: string;
  point: string;
  visual: "staging" | "erase";
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

const features: Feature[] = [
  {
    title: "間取り切り抜き",
    flow: "図面を整える",
    lead: "図面の切り抜きを約30秒で。",
    copy: "チラシやマイソク内の間取図を切り抜き、掲載用画像としてすばやく整えます。外注・手作業の削減に直結します。",
    badge: "外注費用削減",
    icon: "floorplan",
    imageSrc: "/images/feature-floorplan-clean.webp",
    imageAlt: "マイソクから間取り図を自動で切り抜く機能の紹介画像",
    imageWidth: 1674,
    imageHeight: 842,
  },
  {
    title: "青空加工",
    flow: "外観を整える",
    lead: "曇天写真を明るい第一印象へ。",
    copy: "天候待ち・再撮影の負担を減らし、外観写真の見栄えをワンクリックで改善します。",
    badge: "再撮影負担減",
    icon: "sky",
    imageSrc: "/images/feature-sky-clean.webp",
    imageAlt: "曇天の外観写真を青空に変換する青空加工機能の紹介画像",
    imageWidth: 1272,
    imageHeight: 591,
  },
  {
    title: "帯替え",
    flow: "マイソクを整える",
    lead: "会社情報・帯の差し替えを効率化。",
    copy: "手間のかかるマイソクの帯替えをカンタン操作で。流通物件の再利用や掲載準備の時間を短縮します。",
    badge: "営業現場の時短に強い",
    icon: "band",
    imageSrc: "/images/feature-band.webp",
    imageAlt: "販売図面の帯替えをワンクリックで完了する機能の紹介画像",
    imageWidth: 1447,
    imageHeight: 1087,
  },
  {
    title: "パノラマステージング",
    flow: "空間訴求を強める",
    lead: "360°でも暮らしのイメージを訴求。",
    copy: "パノラマ画像に家具配置イメージを加え、写真だけでは伝わりにくい空間の魅力をViewer上で伝えます。",
    badge: "差別化訴求に強い",
    icon: "panorama",
    imageSrc: "/images/feature-panorama-clean.webp",
    imageAlt: "空室パノラマに家具を自動配置するパノラマステージング機能の紹介画像",
    imageWidth: 1448,
    imageHeight: 646,
  },
];

const painPoints: PainPoint[] = [
  {
    title: "間取図の加工が手間",
    detail: "切り抜き作業を毎回外注・手作業している",
    impact: "外注待ち・作業時間が発生",
    icon: "floorplan",
  },
  {
    title: "外観写真の印象が弱い",
    detail: "曇り・雨天の写真で物件の第一印象が落ちる",
    impact: "再撮影や天候待ちが発生",
    icon: "sky",
  },
  {
    title: "帯替えに時間がかかる",
    detail: "マイソクの会社情報・帯の差し替えが面倒",
    impact: "掲載準備が後ろ倒しになる",
    icon: "band",
  },
  {
    title: "他社物件と差が出にくい",
    detail: "通常写真だけでは一覧上で埋もれやすい",
    impact: "クリックされる理由を作りにくい",
    icon: "diff",
  },
  {
    title: "作業が属人化している",
    detail: "担当者ごとに画像加工の品質・スピードが変わる",
    impact: "安定した掲載品質を保ちにくい",
    icon: "person",
  },
];

const benefits = [
  "外注費を削減",
  "掲載スピード改善",
  "掲載品質を平準化",
  "差別化を強化",
];

const metrics: Metric[] = [
  { label: "閲覧数", name: "PV", value: "1.5〜5.0倍" },
  { label: "クリック率", name: "CTR", value: "約2.8倍" },
  { label: "問合せ件数", name: "反響機会", value: "約2.0倍" },
  { label: "内見予約数", name: "来店前行動", value: "約4.3倍" },
];

const classicTools: ClassicTool[] = [
  {
    title: "AIホームステージング",
    lead: "空室写真に家具を配置し、暮らしのイメージを伝えやすく。",
    copy: "空室の写真だけでは伝わりにくい広さ・使い方・生活感を、AIによる家具配置で直感的に訴求できます。",
    point: "数十秒でAIが家具を自動生成",
    visual: "staging",
    imageSrc: "/images/classic-home-staging.webp",
    imageAlt: "空室写真に家具を配置するAIホームステージングのBefore After画像",
    imageWidth: 633,
    imageHeight: 487,
  },
  {
    title: "AI家具消し",
    lead: "既存家具や残置物を消して、すっきりした印象へ。",
    copy: "中古売買や入居中物件でも、生活感のある家具を自然に消すことで、広告掲載に使いやすい画像へ整えます。",
    point: "数十秒でAIが家具を自動削除",
    visual: "erase",
    imageSrc: "/images/classic-furniture-erase.webp",
    imageAlt: "家具が写った室内写真から家具を消すAI家具消しの説明画像",
    imageWidth: 617,
    imageHeight: 477,
  },
];

const documentItems = [
  "4機能の具体的な活用シーン",
  "料金プランとおすすめプラン",
  "無料デモアカウントの発行手順",
  "掲載時の注意点・利用ガイド",
];

const toolChips = [
  "AIホームステージング",
  "AI家具消し",
  "AIモザイク加工",
  "明るさ調整",
  "コントラスト調整",
  "ウォーターマーク",
  "画像圧縮",
];

const heroTags = ["間取り切り抜き", "青空加工", "パノラマ", "帯替え"];

function runSmokeTests() {
  console.assert(features.length === 4, "features should have 4 items");
  console.assert(metrics.length === 4, "metrics should have 4 items");
  console.assert(
    painPoints.every((item) => item.title && item.detail && item.impact),
    "painPoints should include title/detail/impact",
  );
  console.assert(classicTools.length === 2, "classicTools should have 2 items");
  console.assert(
    documentItems.some((item) => item.includes("無料デモ")),
    "documentItems should include an item about 無料デモ",
  );
  console.assert(
    features.every((item) => item.imageSrc && item.imageAlt),
    "features should include image assets",
  );
}

runSmokeTests();

function scrollToCampaign() {
  document.getElementById("campaign")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function IconMark({ name, className = "h-7 w-7" }: { name: IconName; className?: string }) {
  const baseProps = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "floorplan") {
    return (
      <svg {...baseProps}>
        <rect x="8" y="7" width="32" height="34" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M17 8v12h14V8M17 30h23M25 20v21M8 20h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 30v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "sky") {
    return (
      <svg {...baseProps}>
        <circle cx="17" cy="17" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M17 5v4M17 25v4M5 17h4M25 17h4M8.5 8.5l3 3M22.5 22.5l3 3M25.5 8.5l-3 3M11.5 22.5l-3 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 35h17.5a6.5 6.5 0 0 0 0-13c-.8 0-1.5.1-2.2.4A9.5 9.5 0 0 0 15 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "band") {
    return (
      <svg {...baseProps}>
        <rect x="7" y="9" width="34" height="30" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M7 29h34" stroke="currentColor" strokeWidth="3" />
        <path d="M14 17h13M14 23h20M14 34h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 32l3 3 6-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "diff") {
    return (
      <svg {...baseProps}>
        <path d="M10 33c7 0 10-18 18-18h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 9l6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15h7M10 24h11M10 39h25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      </svg>
    );
  }

  if (name === "person") {
    return (
      <svg {...baseProps}>
        <circle cx="18" cy="15" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M7 39c1.5-8 6-12 11-12s9.5 4 11 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M31 14h10M36 9v10M32 29h8M32 36h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M8 24c0-7 7-13 16-13s16 6 16 13-7 13-16 13S8 31 8 24Z" stroke="currentColor" strokeWidth="3" />
      <path d="M8 24h32M24 11c4 4 6 8 6 13s-2 9-6 13M24 11c-4 4-6 8-6 13s2 9 6 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 28h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9.5 7 13l8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrimaryButton({ children, compact = false, onClick }: { children: ReactNode; compact?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6103] font-bold text-white shadow-glow transition hover:bg-[#D95703] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ED6103] ${
        compact ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-sm sm:text-base"
      }`}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, compact = false, light = false, onClick }: { children: ReactNode; compact?: boolean; light?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ED6103] ${
        compact ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-sm sm:text-base"
      } ${
        light
          ? "border-white/45 bg-white text-slate-950 hover:bg-orange-50"
          : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-[#ED6103] hover:text-[#D95703]"
      }`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED6103]"
        >
          <div className="truncate text-sm font-black tracking-wide text-[#ED6103] sm:text-base">LIFULL HOME'S</div>
          <div className="truncate text-xs font-bold text-slate-700 sm:text-sm">らくらくデコルーム</div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex" aria-label="主要ナビゲーション">
          <a className="rounded-md hover:text-[#D95703] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED6103]" href="#features">
            機能
          </a>
          <a className="rounded-md hover:text-[#D95703] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED6103]" href="#benefits">
            メリット
          </a>
          <a className="rounded-md hover:text-[#D95703] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ED6103]" href="#campaign">
            キャンペーン
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <SecondaryButton compact onClick={scrollToCampaign}>資料請求</SecondaryButton>
          <PrimaryButton compact onClick={scrollToCampaign}>
            無料デモ発行
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}

function HeroVideoDemo() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[720px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-soft">
      <video
        className="h-full w-full object-contain object-center"
        src="/videos/feature-introduction.mp4"
        aria-label="らくらくデコルームの機能紹介動画"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        動画を再生できないブラウザです。
      </video>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
  oneLineTitle = false,
}: {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  light?: boolean;
  oneLineTitle?: boolean;
}) {
  const titleSizeClass = oneLineTitle ? "whitespace-nowrap text-[clamp(0.62rem,2.8vw,2.25rem)]" : "text-3xl sm:text-4xl";

  return (
    <div className={`mx-auto text-center ${oneLineTitle ? "max-w-6xl" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className={`mb-4 text-xs font-black uppercase tracking-[0.22em] ${light ? "text-orange-200" : "text-[#ED6103]"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`${titleSizeClass} font-black leading-tight tracking-normal ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {body && <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{body}</p>}
    </div>
  );
}

function PainPointCard({ item }: { item: PainPoint }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-orange-200">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#ED6103]">
        <IconMark name={item.icon} />
      </div>
      <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
      <div className="mt-6 rounded-2xl bg-slate-50 p-4">
        <div className="text-[11px] font-black tracking-[0.18em] text-slate-400">業務への影響</div>
        <p className="mt-2 font-bold text-slate-900">{item.impact}</p>
      </div>
    </article>
  );
}

function FeatureVisual({ feature }: { feature: Feature }) {
  const visualAspectByIcon: Record<IconName, string> = {
    floorplan: "1674 / 842",
    sky: "1674 / 842",
    band: "1447 / 1087",
    diff: "3 / 2",
    person: "3 / 2",
    panorama: "1447 / 1087",
  };

  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-orange-100 bg-gradient-to-br from-white via-white to-orange-50/80 p-1.5 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#ED6103]" />
      <div className="relative w-full overflow-hidden rounded-[1rem] border border-slate-100 bg-white" style={{ aspectRatio: visualAspectByIcon[feature.icon] }}>
        <img
          className="h-full w-full object-contain object-center [filter:contrast(1.06)_saturate(0.9)_brightness(1.02)]"
          src={feature.imageSrc}
          alt={feature.imageAlt}
          width={feature.imageWidth}
          height={feature.imageHeight}
          decoding="async"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#ED6103]/[0.025]" />
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-[#ED6103]">
          <IconMark name={feature.icon} className="h-4 w-4" />
          {feature.flow}
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{feature.badge}</span>
      </div>
      <h3 className="mt-5 text-2xl font-black text-slate-950">{feature.title}</h3>
      <p className="mt-2 text-lg font-bold text-slate-800">{feature.lead}</p>
      <div className="mt-5">
        <FeatureVisual feature={feature} />
      </div>
      <p className="mt-5 leading-7 text-slate-600">{feature.copy}</p>
    </article>
  );
}

function BenefitCard({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#ED6103]">
          <CheckIcon />
        </span>
        <span className="text-lg font-black text-slate-950">{label}</span>
      </div>
    </div>
  );
}

function ClassicToolVisual({ tool }: { tool: ClassicTool }) {
  const visualAspect = `${tool.imageWidth} / ${tool.imageHeight}`;

  return (
    <div className="relative overflow-hidden rounded-[1.25rem] border border-white/15 bg-white p-2 shadow-xl">
      <div className="relative w-full overflow-hidden rounded-[1rem] bg-white" style={{ aspectRatio: visualAspect }}>
        <img
          className="h-full w-full object-contain object-center"
          src={tool.imageSrc}
          alt={tool.imageAlt}
          width={tool.imageWidth}
          height={tool.imageHeight}
          decoding="async"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
      </div>
    </div>
  );
}

function MobileFixedCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <SecondaryButton compact onClick={scrollToCampaign}>資料請求</SecondaryButton>
        <PrimaryButton compact onClick={scrollToCampaign}>無料デモ発行</PrimaryButton>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 pb-24 text-slate-900 md:pb-0">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,97,3,0.10),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.18),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-black text-[#ED6103]">
                不動産会社向け 掲載準備AIツール
              </div>
              <p className="mb-4 text-sm font-black tracking-wide text-slate-600">LIFULL HOME'S らくらくデコルーム</p>
              <h1 className="text-[20px] font-black leading-[1.16] tracking-normal min-[360px]:text-[24px] min-[390px]:text-[25px] sm:text-[42px] lg:text-[40px] xl:text-[42px] 2xl:text-[44px]">
                <span className="block text-slate-950">ステージングだけじゃない。</span>
                <span className="block whitespace-nowrap text-[#ED6103]">物件掲載前の画像・図面作業を</span>
                <span className="block text-[#ED6103]">これ1つで。</span>
              </h1>
              <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800 shadow-sm ring-1 ring-slate-200">
                賃貸・売買仲介の掲載担当者が、外注待ちを減らして社内で整えられます。
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
                間取図切り抜き、青空加工、パノラマステージング、帯替えまで対応。外注・手作業・撮影待ちを減らし、掲載準備をもっとスムーズにします。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton onClick={scrollToCampaign}>無料デモアカウントを発行</PrimaryButton>
                <SecondaryButton onClick={scrollToCampaign}>資料請求する</SecondaryButton>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                まずは操作感を確認したい方は無料デモ、社内検討用には資料請求がおすすめです。
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <HeroVideoDemo />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionIntro
            title="掲載前の“ちょっと面倒”が、積み重なっていませんか？"
            body="ステージング・家具消しだけでは拾いきれない、日常の画像加工・図面加工・マイソク編集の負担にフォーカスします。"
            oneLineTitle
          />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((item) => (
              <PainPointCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="features" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionIntro
            eyebrow="主な機能"
            title="流通物件の掲載準備を進める4つの機能"
          />
          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>

        <section id="benefits" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 text-xs font-black tracking-[0.18em] text-[#ED6103]">導入メリット</div>
              <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">“画像をきれいにする”ではなく、“掲載準備を早くする”。</h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                らくデコの価値は、単発の画像加工ではなく、広告掲載までの一連の作業を社内で回しやすくすること。外注待ちや担当者依存を減らし、物件公開までのスピード改善を狙えます。
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {toolChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit} label={benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101827] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <SectionIntro
            eyebrow="成果イメージ"
            title="掲載画像の改善は、反響機会を増やす打ち手になります。"
            light
            oneLineTitle
          />
          <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
                <div className="text-sm font-bold text-orange-200">{metric.label}</div>
                <div className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">{metric.name}</div>
                <div className="mt-6 text-4xl font-black text-[#ED6103]">{metric.value}</div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-7xl text-sm leading-7 text-slate-400">
            ※数値は実績例であり、成果を保証するものではありません。物件条件や掲載時期により変動します。
          </p>

          <div className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200">
              定番機能も対応
            </div>
            <div className="mt-6 max-w-4xl">
              <h2 className="whitespace-nowrap text-[clamp(0.75rem,3vw,2.25rem)] font-black leading-tight text-white">
                AIホームステージング・家具消しも、もちろん使えます。
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                今回の主役は掲載準備を進める4機能。ただし、空室の魅力づけや入居中物件の見栄え改善まで、らくデコ内でまとめて対応できます。
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {classicTools.map((tool) => (
                <article key={tool.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
                  <ClassicToolVisual tool={tool} />
                  <h3 className="mt-5 text-xl font-black text-white">{tool.title}</h3>
                  <p className="mt-2 font-bold leading-7 text-orange-100">{tool.lead}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{tool.copy}</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black text-white">
                    <CheckIcon />
                    {tool.point}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="campaign" className="bg-[#ED6103] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-black tracking-[0.18em] text-white/75">キャンペーン</div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">今なら初期費用を抑えて、掲載準備の効率化を始められます。</h2>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
                ステージング提案の次の一手として、現場で使われやすい4機能を軸に導入検討を促します。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToCampaign}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#ED6103] shadow-xl transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
                >
                  無料デモアカウントを発行
                </button>
                <button
                  type="button"
                  onClick={scrollToCampaign}
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#D95703] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
                >
                  資料請求する
                </button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/25 bg-white p-6 text-slate-950 shadow-2xl">
              <h3 className="text-2xl font-black">無料デモ・資料請求でわかること</h3>
              <div className="mt-6 space-y-4">
                {documentItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#ED6103]">
                      <CheckIcon />
                    </span>
                    <span className="font-bold leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileFixedCta />
    </div>
  );
}
