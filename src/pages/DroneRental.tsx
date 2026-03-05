import React, { useEffect, useMemo, useState } from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  Wrench,
  TrendingDown,
  Building2,
  Cpu,
  MapPin,
  HardHat,
  MessageSquare,
  ChevronDown,
  Settings,
  Eye,
  Factory,
  ShoppingCart,
  FileText,
  Users,
  Phone,
  Mail,
  ArrowRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FlyingDrone } from "@/components/icons/DroneIcon";
import { toast } from "sonner";

// ─── Data ────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: "m4t",
    name: "Matrice 4T (Extended Warranty)",
    type: "Drone",
    costExTax: 127530,
    insuranceYear: 20000,
    highlights: ["งานตรวจการณ์/ความปลอดภัย", "Thermal Camera", "เริ่มต้นเร็ว"],
    bestFor: ["patrol", "inspection"],
  },
  {
    id: "m4e",
    name: "Matrice 4E (Extended Warranty)",
    type: "Drone",
    costExTax: 93380,
    insuranceYear: 18000,
    highlights: ["งานสำรวจ/แผนที่", "4/3 CMOS", "งบประหยัด"],
    bestFor: ["mapping", "inspection"],
  },
  {
    id: "dock3_m4td",
    name: "Dock 3 + M4TD (Extended Warranty)",
    type: "Automation Bundle",
    costExTax: 348190,
    insuranceYear: 30000,
    highlights: ["อัตโนมัติ 24/7", "เหมาะ 36 เดือน", "มี SLA"],
    bestFor: ["dock", "patrol"],
  },
  {
    id: "dock3_m4td_rc",
    name: "Dock 3 + M4TD + RC Plus 2 (Extended Warranty)",
    type: "Automation Bundle",
    costExTax: 385890,
    insuranceYear: 30000,
    highlights: ["แพ็กเต็ม RC Plus 2", "เหมาะไซต์ใหญ่", "มี SLA"],
    bestFor: ["dock", "patrol"],
  },
];

const PACKAGES = [
  {
    id: "standard",
    name: "Rent Standard",
    badge: "เริ่มต้น",
    badgeVariant: "default",
    desc: "เหมาะสำหรับเริ่มต้นใช้งานและคุมงบ",
    features: [
      "เครื่อง + อุปกรณ์มาตรฐาน DJI",
      "PM ตามรอบ",
      "Remote Support (เวลาทำการ)",
      "ประกันชั้น 1 + Deductible มาตรฐาน",
    ],
  },
  {
    id: "pro",
    name: "Rent Pro",
    badge: "แนะนำ",
    badgeVariant: "primary",
    desc: "เหมาะสำหรับงานหน้างานจริง — เน้น SLA และการตอบรับเคส",
    features: [
      "ทุกอย่างใน Standard",
      "SLA ตอบรับเคส",
      "เงื่อนไขเครื่องสำรอง",
      "Third-party Liability",
      "รายงานสถานะรายเดือน",
    ],
  },
  {
    id: "managed",
    name: "Rent Managed",
    badge: "Enterprise",
    badgeVariant: "navy",
    desc: "เหมาะสำหรับภาครัฐ/โรงงาน/ระบบเฝ้าระวัง — ให้ทีมเราดูแลทั้งระบบ",
    features: [
      "ทุกอย่างใน Pro",
      "On-site Support ตามโควตา",
      "Training + SOP หน้างาน",
      "รายงานผู้บริหาร",
      "วางแผน PM/Spare ให้",
    ],
  },
];

const TERMS = [12, 24, 36];

const USE_CASES = [
  {
    id: "patrol",
    icon: Eye,
    title: "ความปลอดภัย/เฝ้าระวัง",
    desc: "ตรวจรอบพื้นที่, เหตุฉุกเฉิน, งานรักษาความปลอดภัย",
  },
  {
    id: "inspection",
    icon: Factory,
    title: "Inspection โรงงาน/พลังงาน/โครงสร้าง",
    desc: "ลดการขึ้นที่สูง ลดความเสี่ยงคน",
  },
  {
    id: "mapping",
    icon: MapPin,
    title: "สำรวจ/แผนที่/ก่อสร้าง",
    desc: "ติดตามความคืบหน้า รายงานเร็ว ลดงานซ้ำ",
  },
  {
    id: "dock",
    icon: Settings,
    title: "ระบบอัตโนมัติ (Dock)",
    desc: "งานตรวจซ้ำรายวัน/รายชั่วโมง เพิ่มความต่อเนื่อง",
  },
];

const WHY_US = [
  {
    icon: TrendingDown,
    title: "คุมงบได้",
    desc: "ค่าใช้จ่ายรายเดือนชัดเจน ไม่ต้องลงทุนก้อนใหญ่",
  },
  {
    icon: Shield,
    title: "ลดความเสี่ยง",
    desc: "รวมประกันชั้น 1 และเงื่อนไขชัดเจน",
  },
  {
    icon: Settings,
    title: "ใช้งานต่อเนื่อง",
    desc: "มี PM + ทีมซัพพอร์ต + (Pro/Managed) SLA/เครื่องสำรอง",
  },
  {
    icon: Clock,
    title: "ได้ผลลัพธ์เร็ว",
    desc: "ส่งมอบ + เทรน + SOP พร้อมเริ่มงาน",
  },
];

const TRUST_STATS = [
  { value: "50+", label: "ลูกค้าองค์กร" },
  { value: "100%", label: "ครบจบในที่เดียว" },
  { value: "24/7", label: "พร้อมซัพพอร์ต" },
  { value: "9+", label: "ปีประสบการณ์" },
];

const TRUST_CARDS = [
  {
    icon: FileText,
    title: "กระบวนการส่งมอบมาตรฐาน",
    desc: "Checklist + เทรน + SOP",
  },
  {
    icon: Clock,
    title: "รายงานประจำเดือน",
    desc: "(Pro/Managed) สรุปการใช้งาน/PM/สถานะเครื่อง",
  },
  {
    icon: Users,
    title: "ทีมซัพพอร์ต",
    desc: "13 STORE Co., Ltd.",
  },
];

const BUY_OR_RENT = [
  {
    icon: ShoppingCart,
    title: "ซื้อขาด (ทางหลัก)",
    desc: "เหมาะกับหน่วยงานที่มีงบลงทุนและต้องการถือทรัพย์สิน",
    cta: "ดูราคาซื้อขาด",
    href: "/enterprise",
  },
  {
    icon: Wrench,
    title: "ซื้อขาด + Service Care",
    desc: "เพิ่ม PM/อะไหล่/ประกัน/SLA เพื่อความต่อเนื่องหลังซื้อ",
    cta: "ดูแพ็กเกจบริการ",
    href: "/contact",
  },
  {
    icon: Clock,
    title: "เช่า (รวมประกันชั้น 1)",
    desc: "เหมาะกับเริ่มเร็ว/คุมงบรายเดือน/โครงการระยะยาวหรือ Dock",
    cta: "ดูแพ็กเกจเช่า",
    href: "#packages",
    highlight: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "เช่ารวมประกันชั้น 1 แล้วต้องจ่ายเพิ่มไหม?",
    a: "รวมเบี้ยในค่าเช่าแล้ว อาจมีส่วนร่วมจ่าย (Deductible) ตามเงื่อนไขเพื่อความเป็นธรรมครับ",
  },
  {
    q: "สัญญาขั้นต่ำกี่ปี?",
    a: "1–3 ปี (12/24/36 เดือน) ครับ",
  },
  {
    q: "มีเครื่องสำรองไหม?",
    a: "มีตามแพ็กเกจ Pro/Managed และ SLA ที่ระบุในข้อเสนอครับ",
  },
  {
    q: "ถ้าต้องการซื้อขาด?",
    a: "ได้ครับ เรามีราคาซื้อขาดและแพ็กเกจบริการ/ประกัน/ดูแลต่อเนื่องให้เลือกครับ",
  },
  {
    q: "ใช้ได้กับงานภาครัฐ / TOR ได้ไหม?",
    a: "ได้ครับ เรามีประสบการณ์รองรับ TOR ของหน่วยงานภาครัฐ และสามารถจัดทำเอกสารครบชุดได้",
  },
];

const PACKAGE_MULTIPLIER = { standard: 1.6, pro: 1.9, managed: 2.3 };

// ─── Helpers ─────────────────────────────────────────────────────────────────

function thb(n: number) {
  if (Number.isNaN(n) || n === null || n === undefined) return "-";
  return new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(Math.round(n));
}

function clampNum(v: string | number, fallback = 0) {
  const n = Number(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : fallback;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      {desc && (
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{desc}</p>
      )}
    </div>
  );
}

function Card({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-sm",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  suffix,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
  required?: boolean;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-medium text-muted-foreground">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </p>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-input bg-background px-3 py-2 pr-14 text-sm text-foreground outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-ring"
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{answer}</p>}
    </div>
  );
}

// ─── Recommendation logic ─────────────────────────────────────────────────────

function recommend({
  useCase,
  opsNeed,
  riskLevel,
  preferredTerm,
  product,
}: {
  useCase: string;
  opsNeed: string;
  riskLevel: string;
  preferredTerm: number | null;
  product?: (typeof PRODUCTS)[0];
}) {
  let pkg = "pro";
  if (opsNeed === "basic") pkg = "standard";
  if (opsNeed === "sla") pkg = "pro";
  if (opsNeed === "spare" || opsNeed === "managed") pkg = "managed";
  if (riskLevel === "high" && pkg === "pro") pkg = "managed";

  let term = preferredTerm || 24;
  if (useCase === "dock" || product?.type === "Automation Bundle") term = 36;

  return { pkg, term };
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DroneRental() {
  // Recommendation state
  const [productId, setProductId] = useState("m4t");
  const [useCase, setUseCase] = useState("patrol");
  const [opsNeed, setOpsNeed] = useState("sla");
  const [riskLevel, setRiskLevel] = useState("med");
  const [preferredTerm, setPreferredTerm] = useState("");

  // Advanced calculator overrides
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [gmSell, setGmSell] = useState("30");
  const [vat, setVat] = useState("7");
  const [opsMonth, setOpsMonth] = useState("0");
  const [adminClaimMonth, setAdminClaimMonth] = useState("0");
  const [riskBufferMonth, setRiskBufferMonth] = useState("0");
  const [setupFee, setSetupFee] = useState("20000");
  const [insuranceAdminMonth, setInsuranceAdminMonth] = useState("500");
  const [serviceStandard, setServiceStandard] = useState("1500");
  const [servicePro, setServicePro] = useState("3000");
  const [serviceManaged, setServiceManaged] = useState("8000");

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadOrg, setLeadOrg] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const product = useMemo(() => PRODUCTS.find((p) => p.id === productId), [productId]);

  // Auto-adjust defaults for Automation Bundle
  useEffect(() => {
    if (!product) return;
    if (product.type === "Automation Bundle") {
      setSetupFee((prev) => (prev === "20000" ? "80000" : prev));
      setServiceStandard((prev) => (prev === "1500" ? "2500" : prev));
      setServicePro((prev) => (prev === "3000" ? "5000" : prev));
      setServiceManaged((prev) => (prev === "8000" ? "12000" : prev));
    }
  }, [productId, product]);

  const rec = useMemo(() => {
    const term = preferredTerm ? Number(preferredTerm) : null;
    return recommend({ useCase, opsNeed, riskLevel, preferredTerm: term, product });
  }, [useCase, opsNeed, riskLevel, preferredTerm, product]);

  const calc = useMemo(() => {
    const cost = product?.costExTax ?? 0;
    const insYear = product?.insuranceYear ?? 0;
    const vatRate = clampNum(vat, 7) / 100;
    const gm = clampNum(gmSell, 30) / 100;
    const sellExVat = cost / (1 - gm);
    const sellIncVat = sellExVat * (1 + vatRate);
    const term = rec.term;

    const ops = clampNum(opsMonth, 0);
    const admin = clampNum(adminClaimMonth, 0);
    const risk = clampNum(riskBufferMonth, 0);
    const setup = clampNum(setupFee, 0);
    const insAdmin = clampNum(insuranceAdminMonth, 0);
    const svcStd = clampNum(serviceStandard, 0);
    const svcPro = clampNum(servicePro, 0);
    const svcMng = clampNum(serviceManaged, 0);

    const rent = (mult: number, svc: number) =>
      (cost * mult) / term + insYear / 12 + insAdmin + svc + ops + admin + risk;

    const standard = rent(PACKAGE_MULTIPLIER.standard, svcStd);
    const pro = rent(PACKAGE_MULTIPLIER.pro, svcPro);
    const managed = rent(PACKAGE_MULTIPLIER.managed, svcMng);

    const pkg = rec.pkg;
    const monthlySelected =
      pkg === "standard" ? standard : pkg === "pro" ? pro : managed;

    const depositMonths = 2;
    const deposit = monthlySelected * depositMonths;
    const upfront = deposit + setup;
    const contractValue = monthlySelected * term + setup;
    const multSelected =
      pkg === "standard"
        ? PACKAGE_MULTIPLIER.standard
        : pkg === "pro"
        ? PACKAGE_MULTIPLIER.pro
        : PACKAGE_MULTIPLIER.managed;
    const svcSelected = pkg === "standard" ? svcStd : pkg === "pro" ? svcPro : svcMng;
    const grossProfitHardware = cost * (multSelected - 1);
    const grossProfitService = (insAdmin + svcSelected) * term + setup;
    const grossProfitEstimate = grossProfitHardware + grossProfitService;

    return {
      cost,
      sellExVat,
      sellIncVat,
      term,
      standard,
      pro,
      managed,
      depositMonths,
      deposit,
      setup,
      upfront,
      monthlySelected,
      contractValue,
      grossProfitEstimate,
    };
  }, [
    product,
    gmSell,
    vat,
    opsMonth,
    adminClaimMonth,
    riskBufferMonth,
    setupFee,
    insuranceAdminMonth,
    serviceStandard,
    servicePro,
    serviceManaged,
    rec,
  ]);

  const useCaseLabel =
    useCase === "patrol"
      ? "เฝ้าระวัง/ความปลอดภัย"
      : useCase === "mapping"
      ? "สำรวจ/แผนที่"
      : useCase === "inspection"
      ? "ตรวจสอบ/ตรวจสภาพ"
      : "Dock automation";

  const pkgLabel =
    rec.pkg === "standard" ? "Rent Standard" : rec.pkg === "pro" ? "Rent Pro" : "Rent Managed";

  const offerMessage =
    `ขอใบเสนอราคาโครงการโดรนเช่า (รวมประกันชั้น 1)\n\n` +
    `สรุปความต้องการ\n` +
    `- รุ่น/ชุด: ${product?.name}\n` +
    `- Use case: ${useCaseLabel}\n` +
    `- แพ็กเกจแนะนำ: ${pkgLabel}\n` +
    `- ระยะสัญญา: ${calc.term} เดือน\n` +
    `- ค่าเช่า/เดือน (ประมาณการ): ${thb(calc.monthlySelected)} บาท\n` +
    `- มัดจำ: ${calc.depositMonths} เดือน ≈ ${thb(calc.deposit)} บาท\n` +
    `- Setup/Onboarding (ครั้งเดียว): ≈ ${thb(calc.setup)} บาท\n` +
    `- รวมจ่ายวันแรก (ประมาณ): ≈ ${thb(calc.upfront)} บาท\n` +
    `- มูลค่าสัญญา (รวม Setup): ≈ ${thb(calc.contractValue)} บาท\n\n` +
    `ข้อมูลติดต่อ\n` +
    `- ชื่อ: ${leadName || "-"}\n` +
    `- องค์กร: ${leadOrg || "-"}\n` +
    `- โทร: ${leadPhone || "-"}\n` +
    `- อีเมล: ${leadEmail || "-"}\n`;

  const handleCopyLine = async () => {
    try {
      await navigator.clipboard.writeText(offerMessage);
      toast.success("คัดลอกข้อความเรียบร้อย", {
        description: "เอาไปส่ง LINE ได้เลยครับ",
      });
    } catch {
      toast.error("คัดลอกไม่สำเร็จ", {
        description: "กรุณาคัดลอกด้วยมือจากกล่องข้อความด้านล่าง",
      });
    }
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(
      "ขอใบเสนอราคาโครงการโดรนเช่า (รวมประกันชั้น 1)"
    );
    const body = encodeURIComponent(offerMessage);
    window.location.href = `mailto:contact@dji13store.com?subject=${subject}&body=${body}`;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim()) {
      toast.error("กรุณากรอกชื่อผู้ติดต่อ");
      return;
    }
    if (!leadPhone.trim() && !leadEmail.trim()) {
      toast.error("กรุณากรอกเบอร์โทรหรืออีเมลอย่างน้อย 1 อย่าง");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success("ส่งข้อมูลเรียบร้อย!", {
      description: "ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ",
    });
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased relative overflow-hidden">
      {/* Animated Drones */}
      <FlyingDrone
        className="w-11 h-11"
        pathX={[80, 300, 520, 380, 140, 80]}
        pathY={[140, 200, 120, 220, 160, 140]}
        rotation={[0, 8, -10, 12, -6, 0]}
        duration={19}
        color="text-primary/20"
      />
      <FlyingDrone
        className="w-9 h-9"
        pathX={[480, 260, 60, 180, 420, 480]}
        pathY={[280, 220, 260, 320, 240, 280]}
        rotation={[0, -10, 8, -8, 6, 0]}
        duration={16}
        delay={5}
        color="text-amber-500/20"
      />

      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-secondary pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>รวมประกันชั้น 1 ทุกสัญญา</Pill>
              <Pill>สัญญา 1–3 ปี (12/24/36 เดือน)</Pill>
              <Pill>Setup + Service + Insurance Admin</Pill>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              เช่าโดรนพร้อมใช้งาน{" "}
              <span className="text-primary">โดรนเช่ารายเดือน</span>
              <br />
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                ผู้นำด้านโซลูชันโดรนสำหรับองค์กร
              </span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              เริ่มใช้งานได้ทันทีแบบรายเดือน — ได้เครื่อง + บริการ + PM + ซัพพอร์ต
              พร้อมประกันชั้น 1 ช่วยคุมความเสี่ยงและคุมงบได้ชัดเจน
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("calculator")}
                className="btn-hero-primary"
              >
                คำนวณค่าเช่า / ขอใบเสนอราคา
              </button>
              <a
                href="https://line.me/R/ti/p/@357kaaxa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <MessageSquare size={18} />
                ทัก LINE OA
              </a>
            </div>

            {/* Quick nav */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: "ดูแพ็กเกจ", id: "packages" },
                { label: "คำนวณค่าเช่า", id: "calculator" },
                { label: "ซื้อหรือเช่า?", id: "buy-or-rent" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
                >
                  {item.label}
                  <ArrowRight size={12} />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {["ส่งมอบ+เทรน", "PM ตามรอบ", "ระบบแจ้งเคส", "เอกสารครบชุด"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl bg-card p-4 shadow-sm border border-border"
                >
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    มาตรฐานเดียวกันทุกโครงการ
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Smart Recommend Card */}
          <Card className="relative overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  ข้อเสนอแนะนำ (Realtime)
                </p>
                <p className="text-xs text-muted-foreground">
                  ระบบแนะนำแพ็กเกจที่เหมาะสมตามความต้องการ
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                Smart Recommend
              </span>
            </div>
            <hr className="border-border my-3" />
            <div className="space-y-3">
              <FormSelect
                label="รุ่นโดรน/ชุดระบบ"
                value={productId}
                onChange={setProductId}
                options={PRODUCTS.map((p) => ({ value: p.id, label: p.name }))}
              />
              <FormSelect
                label="Use Case"
                value={useCase}
                onChange={setUseCase}
                options={[
                  { value: "patrol", label: "เฝ้าระวัง/ความปลอดภัย" },
                  { value: "mapping", label: "สำรวจ/แผนที่" },
                  { value: "inspection", label: "ตรวจสอบ/ตรวจสภาพ" },
                  { value: "dock", label: "Dock automation" },
                ]}
              />
              <FormSelect
                label="ระดับความต้องการ Ops"
                value={opsNeed}
                onChange={setOpsNeed}
                options={[
                  { value: "basic", label: "ปกติ (ไม่ต้อง SLA)" },
                  { value: "sla", label: "ต้องการ SLA ตอบรับเคส" },
                  { value: "spare", label: "ต้องการเครื่องสำรอง" },
                  { value: "managed", label: "ให้ดูแลแบบ Managed" },
                ]}
              />
              <FormSelect
                label="ความเสี่ยงหน้างาน"
                value={riskLevel}
                onChange={setRiskLevel}
                options={[
                  { value: "low", label: "ต่ำ (สภาพดี)" },
                  { value: "med", label: "กลาง" },
                  { value: "high", label: "สูง (สภาพรุนแรง)" },
                ]}
              />
              <FormSelect
                label="ระยะสัญญาที่สนใจ"
                value={preferredTerm}
                onChange={setPreferredTerm}
                options={[
                  { value: "", label: "ให้ระบบแนะนำ" },
                  ...TERMS.map((m) => ({ value: String(m), label: `${m} เดือน` })),
                ]}
              />
              <div className="rounded-xl bg-secondary p-3">
                <p className="text-xs text-muted-foreground">แพ็กเกจแนะนำ</p>
                <p className="text-lg font-bold text-primary">{pkgLabel}</p>
                <p className="text-xs text-muted-foreground">
                  ระยะสัญญา: {rec.term} เดือน
                </p>
              </div>
            </div>
            <hr className="border-border my-3" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">ค่าเช่า/เดือน (ประมาณการ)</p>
                  <p className="text-xl font-bold text-foreground">
                    {thb(calc.monthlySelected)} บาท
                  </p>
                  <p className="text-xs text-muted-foreground">
                    รวม Service + Insurance admin
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    มัดจำ ({calc.depositMonths} เดือน)
                  </p>
                  <p className="font-semibold text-foreground">
                    ≈ {thb(calc.deposit)} บาท
                  </p>
                  <p className="text-xs text-muted-foreground">Setup ครั้งเดียว</p>
                  <p className="font-semibold text-foreground">
                    ≈ {thb(calc.setup)} บาท
                  </p>
                  <p className="text-xs text-muted-foreground">รวมจ่ายวันแรก</p>
                  <p className="font-bold text-primary">≈ {thb(calc.upfront)} บาท</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                * ตัวเลขเป็นประมาณการ — ราคาจริงอาจปรับตามเงื่อนไขโครงการ
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => scrollTo("packages")}
                className="btn-hero-secondary text-sm px-4 py-2"
              >
                ดูแพ็กเกจทั้งหมด
              </button>
              <button
                onClick={() => scrollTo("lead")}
                className="btn-hero-primary text-sm px-4 py-2"
              >
                ขอใบเสนอราคา
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* ── Why Us ───────────────────────────────────────────────────────── */}
      <div id="why-us" className="py-16 bg-muted/30 border-y border-border">
        <SectionTitle eyebrow="WHY US" title="ความคุ้มค่า ที่วัดผลได้จริง" />
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => (
            <Card key={item.title} className="text-center hover:border-primary/30 transition-colors">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground italic px-4">
          "ไม่ใช่แค่เช่าโดรน แต่ได้ระบบที่พร้อมทำงานและดูแลต่อเนื่องครับ"
        </p>
      </div>

      {/* ── Use Cases ────────────────────────────────────────────────────── */}
      <div id="use-cases" className="py-16 bg-background">
        <SectionTitle
          eyebrow="USE CASES"
          title="เหมาะกับงานแบบไหน"
          desc="คลิกเลือกประเภทงานเพื่อดูค่าเช่าที่เหมาะสม"
        />
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((uc) => (
            <Card
              key={uc.id}
              className={cn(
                "hover:border-primary/50 transition-colors",
                useCase === uc.id && "border-primary bg-primary/5"
              )}
              onClick={() => {
                setUseCase(uc.id);
                scrollTo("packages");
              }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <uc.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{uc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{uc.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Packages ─────────────────────────────────────────────────────── */}
      <div id="packages" className="py-16 bg-muted/30">
        <SectionTitle
          eyebrow="PACKAGES"
          title="เลือกแพ็กเกจให้เหมาะกับความสำคัญของงาน"
          desc="ทุกแพ็กเกจรวมประกันชั้น 1 — ต่างกันที่ระดับ SLA, ความเร็วในการซ่อม/ทดแทน และการดูแลหน้างานครับ"
        />
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "flex flex-col",
                pkg.id === "pro" && "border-2 border-primary",
                pkg.id === "managed" && "card-navy"
              )}
            >
              <div className="mb-3 flex items-center gap-2">
                <p
                  className={cn(
                    "text-lg font-bold",
                    pkg.id === "managed" ? "text-white" : "text-foreground"
                  )}
                >
                  {pkg.name}
                </p>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-semibold",
                    pkg.id === "standard" && "bg-secondary text-muted-foreground",
                    pkg.id === "pro" && "bg-primary/10 text-primary",
                    pkg.id === "managed" && "bg-white/20 text-white"
                  )}
                >
                  {pkg.badge}
                </span>
              </div>
              <p
                className={cn(
                  "mb-4 text-sm",
                  pkg.id === "managed" ? "text-white/90" : "text-muted-foreground"
                )}
              >
                {pkg.desc}
              </p>
              <ul className="space-y-2 text-sm flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle
                      className={cn(
                        "h-4 w-4 flex-shrink-0",
                        pkg.id === "managed" ? "text-primary" : "text-primary"
                      )}
                    />
                    <span className={pkg.id === "managed" ? "text-white/90" : "text-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("calculator")}
                className={cn(
                  "mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition",
                  pkg.id === "managed"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : pkg.id === "pro"
                    ? "btn-hero-primary justify-center"
                    : "btn-hero-secondary justify-center"
                )}
              >
                คำนวณค่าเช่า
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Insurance ────────────────────────────────────────────────────── */}
      <div id="insurance" className="py-16 bg-background">
        <SectionTitle
          eyebrow="INSURANCE"
          title="คุมความเสี่ยงให้ชัด ตั้งแต่วันแรก"
          desc="ค่าเช่ารวมประกันชั้น 1 (Hull + Third-party) ครอบคลุมตามเงื่อนไขกรมธรรม์"
        />
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              title: "ค่าเช่ารวมประกันชั้น 1",
              desc: "รายละเอียดตามรุ่น/กรมธรรม์ ไม่ต้องจัดการเอง",
            },
            {
              title: "Deductible ชัดเจน",
              desc: "มีส่วนร่วมจ่ายตามเงื่อนไข เพื่อคุมค่าใช้จ่ายอย่างเป็นธรรม",
            },
            {
              title: "กระบวนการเคลมชัด",
              desc: "แจ้งเหตุ/เคลมตามขั้นตอน ลดเวลาหยุดงาน",
            },
          ].map((item) => (
            <Card key={item.title}>
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground italic px-4">
          "ทีมเราช่วยดูแลเอกสารเคลมและกระบวนการซ่อมให้ตามขั้นตอนครับ"
        </p>
      </div>

      {/* ── Calculator (full section) ─────────────────────────────────────── */}
      <div id="calculator" className="py-16 bg-muted/30">
        <SectionTitle
          eyebrow="CALCULATOR"
          title="ลองคำนวณแผนเช่าใน 30 วินาที"
          desc="ปรับค่าตัวแปรด้านล่างเพื่อดูประมาณการค่าเช่าแบบ Realtime"
        />
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <Card>
              <p className="text-sm font-semibold text-foreground mb-4">ตัวแปรหลัก</p>
              <div className="space-y-3">
                <FormSelect
                  label="รุ่นโดรน/ชุดระบบ"
                  value={productId}
                  onChange={setProductId}
                  options={PRODUCTS.map((p) => ({ value: p.id, label: p.name }))}
                />
                <FormSelect
                  label="ระยะสัญญา"
                  value={preferredTerm}
                  onChange={setPreferredTerm}
                  options={[
                    { value: "", label: "ให้ระบบแนะนำ" },
                    ...TERMS.map((m) => ({
                      value: String(m),
                      label: `${m} เดือน`,
                    })),
                  ]}
                />
                <FormSelect
                  label="แพ็กเกจ"
                  value={opsNeed}
                  onChange={setOpsNeed}
                  options={[
                    { value: "basic", label: "Rent Standard" },
                    { value: "sla", label: "Rent Pro (แนะนำ)" },
                    { value: "managed", label: "Rent Managed" },
                  ]}
                />
              </div>

              {/* Advanced toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="mt-4 flex items-center gap-1 text-xs text-primary font-medium hover:underline"
              >
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform",
                    showAdvanced && "rotate-180"
                  )}
                />
                {showAdvanced ? "ซ่อน" : "แสดง"} Advanced inputs
              </button>

              {showAdvanced && (
                <div className="mt-4 space-y-3 p-4 rounded-xl bg-background border border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    ปรับตัวแปรเพิ่มเติม
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <FormInput
                      label="GM ขาย (%)"
                      value={gmSell}
                      onChange={setGmSell}
                      suffix="%"
                    />
                    <FormInput label="VAT (%)" value={vat} onChange={setVat} suffix="%" />
                    <FormInput
                      label="Insurance Admin/เดือน"
                      value={insuranceAdminMonth}
                      onChange={setInsuranceAdminMonth}
                      suffix="฿"
                    />
                    <FormInput
                      label="Setup Fee"
                      value={setupFee}
                      onChange={setSetupFee}
                      suffix="฿"
                    />
                    <FormInput
                      label="Service Standard/เดือน"
                      value={serviceStandard}
                      onChange={setServiceStandard}
                      suffix="฿"
                    />
                    <FormInput
                      label="Service Pro/เดือน"
                      value={servicePro}
                      onChange={setServicePro}
                      suffix="฿"
                    />
                    <FormInput
                      label="Service Managed/เดือน"
                      value={serviceManaged}
                      onChange={setServiceManaged}
                      suffix="฿"
                    />
                    <FormInput
                      label="Risk Buffer/เดือน"
                      value={riskBufferMonth}
                      onChange={setRiskBufferMonth}
                      suffix="฿"
                    />
                  </div>
                </div>
              )}
            </Card>

            {/* Output */}
            <Card className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  ผลลัพธ์ประมาณการ
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {product?.name} · {pkgLabel} · {calc.term} เดือน
                </p>

                <div className="space-y-3">
                  {[
                    { label: "ค่าเช่า/เดือน (ประมาณการ)", value: `${thb(calc.monthlySelected)} บาท`, highlight: true },
                    { label: `มัดจำ (${calc.depositMonths} เดือน)`, value: `≈ ${thb(calc.deposit)} บาท` },
                    { label: "Setup/Onboarding (ครั้งเดียว)", value: `≈ ${thb(calc.setup)} บาท` },
                    { label: "รวมจ่ายวันแรก", value: `≈ ${thb(calc.upfront)} บาท`, bold: true },
                    { label: "มูลค่าสัญญา (รวม Setup)", value: `≈ ${thb(calc.contractValue)} บาท` },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={cn(
                        "flex items-center justify-between py-2 border-b border-border/50 last:border-0",
                        row.highlight && "bg-primary/5 rounded-lg px-3"
                      )}
                    >
                      <span className="text-sm text-muted-foreground">{row.label}</span>
                      <span
                        className={cn(
                          "text-sm",
                          row.highlight
                            ? "text-xl font-bold text-primary"
                            : row.bold
                            ? "font-bold text-foreground"
                            : "font-medium text-foreground"
                        )}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs text-muted-foreground">
                  * ตัวเลขเป็นประมาณการ — ราคาจริงอาจปรับตามเงื่อนไขโครงการ
                </p>
              </div>

              <button
                onClick={() => scrollTo("lead")}
                className="btn-hero-primary mt-6 justify-center w-full"
              >
                ขอใบเสนอราคาอย่างเป็นทางการ
              </button>
            </Card>
          </div>
        </div>
      </div>

      {/* ── Buy or Rent ───────────────────────────────────────────────────── */}
      <div id="buy-or-rent" className="py-16 bg-background">
        <SectionTitle
          eyebrow="OPTIONS"
          title="ซื้อขาดก็ได้ เช่าก็ได้"
          desc="เลือกรูปแบบที่เหมาะกับงบประมาณและความต้องการขององค์กร"
        />
        <div className="mx-auto grid max-w-4xl gap-6 px-4 md:grid-cols-3">
          {BUY_OR_RENT.map((opt) => (
            <Card
              key={opt.title}
              className={cn(
                "flex flex-col transition-all hover:shadow-md",
                opt.highlight && "border-2 border-primary ring-2 ring-primary/10"
              )}
            >
              {opt.highlight && (
                <span className="inline-block mb-3 text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary self-start">
                  แนะนำสำหรับเริ่มต้น
                </span>
              )}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <opt.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{opt.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{opt.desc}</p>
              {opt.href.startsWith("#") ? (
                <button
                  onClick={() => scrollTo(opt.href.slice(1))}
                  className="mt-5 text-sm text-primary font-medium hover:underline flex items-center gap-1"
                >
                  {opt.cta} <ArrowRight size={14} />
                </button>
              ) : (
                <a
                  href={opt.href}
                  className="mt-5 text-sm text-primary font-medium hover:underline flex items-center gap-1"
                >
                  {opt.cta} <ArrowRight size={14} />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* ── Trust ────────────────────────────────────────────────────────── */}
      <div id="trust" className="py-16 bg-muted/30">
        <SectionTitle eyebrow="TRUST" title="มาตรฐานที่คุณวางใจได้" />

        {/* Stats */}
        <div className="mx-auto grid max-w-3xl gap-6 px-4 grid-cols-2 md:grid-cols-4 mb-12">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {TRUST_CARDS.map((card) => (
            <Card key={card.title} className="text-center hover:border-primary/30 transition-colors">
              <card.icon className="mx-auto h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <div id="faq" className="py-16 bg-background">
        <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
        <div className="mx-auto max-w-3xl px-4">
          <Card>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </Card>
        </div>
      </div>

      {/* ── Lead / Contact Form ───────────────────────────────────────────── */}
      <div id="lead" className="py-16 bg-muted/30">
        <SectionTitle
          eyebrow="CONTACT"
          title="ขอใบเสนอราคาโครงการโดรนเช่า"
          desc="กรอกข้อมูลด้านล่าง — เราจะติดต่อกลับภายใน 1 วันทำการ"
        />
        <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-2">
          {/* Form */}
          <Card>
            <form onSubmit={handleLeadSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormInput
                  label="ชื่อผู้ติดต่อ"
                  value={leadName}
                  onChange={setLeadName}
                  placeholder="ชื่อ-นามสกุล"
                  required
                />
                <FormInput
                  label="หน่วยงาน/องค์กร"
                  value={leadOrg}
                  onChange={setLeadOrg}
                  placeholder="ชื่อบริษัท/หน่วยงาน"
                />
                <FormInput
                  label="เบอร์โทร"
                  value={leadPhone}
                  onChange={setLeadPhone}
                  placeholder="08x-xxx-xxxx"
                />
                <FormInput
                  label="อีเมล"
                  value={leadEmail}
                  onChange={setLeadEmail}
                  placeholder="name@company.com"
                />
              </div>

              <div className="mt-5 rounded-xl bg-secondary p-4">
                <p className="mb-2 text-xs font-semibold text-muted-foreground">สรุปข้อเสนอ</p>
                <p className="font-semibold text-foreground">{product?.name}</p>
                <p className="text-sm text-muted-foreground">
                  แพ็กเกจ: {pkgLabel} · ระยะสัญญา: {calc.term} เดือน
                </p>
                <p className="mt-2 text-sm text-foreground">
                  ค่าเช่า/เดือน (ประมาณ):{" "}
                  <span className="font-semibold">{thb(calc.monthlySelected)} บาท</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  มัดจำ: {calc.depositMonths} เดือน ≈ {thb(calc.deposit)} บาท · Setup ≈{" "}
                  {thb(calc.setup)} บาท
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero-primary disabled:opacity-60"
                >
                  {isSubmitting ? "กำลังส่ง..." : "ขอใบเสนอราคา"}
                </button>
                <button
                  type="button"
                  onClick={handleCopyLine}
                  className="btn-hero-secondary"
                >
                  คัดลอกส่ง LINE
                </button>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="btn-hero-secondary"
                >
                  <Mail size={16} />
                  ส่งอีเมล
                </button>
              </div>
            </form>
          </Card>

          {/* Offer preview + contacts */}
          <div className="space-y-6">
            <Card>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">
                ข้อความที่จะส่ง (คัดลอกส่ง LINE ได้เลย)
              </p>
              <textarea
                readOnly
                value={offerMessage}
                className="h-56 w-full resize-none rounded-xl border border-input bg-secondary p-3 text-sm text-foreground"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ
              </p>
            </Card>

            {/* LINE + Contact info */}
            <div className="rounded-3xl card-navy p-6">
              <p className="text-base font-semibold text-white">ติดต่อโดยตรง</p>
              <div className="mt-4 space-y-3">
                <a
                  href="https://line.me/R/ti/p/@357kaaxa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-[#00B900]" />
                  <span>
                    LINE:{" "}
                    <span className="font-bold text-primary">@dji13enterprise</span>
                  </span>
                </a>
                <a
                  href="tel:0614176015"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>061-417-6015</span>
                </a>
                <a
                  href="mailto:contact@dji13store.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@dji13store.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl card-navy p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              พร้อมเริ่มต้นโครงการของคุณ?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              ติดต่อทีมเราวันนี้ รับคำปรึกษาฟรี พร้อมใบเสนอราคาแบบครบวงจร
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://line.me/R/ti/p/@357kaaxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00B900] text-white font-semibold hover:bg-[#00B900]/90 transition"
              >
                <MessageSquare size={20} />
                ทัก LINE
              </a>
              <button
                onClick={handleSendEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20"
              >
                <Mail size={20} />
                ส่งอีเมล
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
