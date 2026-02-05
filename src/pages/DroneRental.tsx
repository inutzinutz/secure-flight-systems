 import React, { useEffect, useMemo, useState } from "react";
 import { CheckCircle } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 const PRODUCTS = [
   {
     id: "m4t",
     name: "M4T (Extended Warranty)",
     type: "Drone",
     costExTax: 127530,
     highlights: ["งานตรวจการณ์/ความปลอดภัย", "เริ่มต้นเร็ว", "คุ้มค่า"],
   },
   {
     id: "m4e",
     name: "M4E (Extended Warranty)",
     type: "Drone",
     costExTax: 93380,
     highlights: ["งานสำรวจ/ภาพถ่าย", "งบประหยัด", "เริ่ม pilot"],
   },
   {
     id: "dock3_m4td_a",
     name: "Dock 3 + M4TD (Extended Warranty)",
     type: "Automation Bundle",
     costExTax: 348190,
     highlights: ["อัตโนมัติ/เฝ้าระวัง 24/7", "เหมาะ 36 เดือน", "มี SLA"],
   },
   {
     id: "dock3_m4td_b",
     name: "Dock 3 + Matrice 4TD (RC Plus 2, Extended Warranty)",
     type: "Automation Bundle",
     costExTax: 385890,
     highlights: ["แพ็กเต็ม", "เหมาะไซต์ใหญ่", "มี SLA"],
   },
 ];
 
 const PACKAGE_MULTIPLIER = {
   standard: 1.6,
   pro: 1.9,
   managed: 2.3,
 };
 
 const TERMS = [12, 24, 36];
 
 function thb(n: number) {
   if (Number.isNaN(n) || n === null || n === undefined) return "-";
   return new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(Math.round(n));
 }
 
 function clampNum(v: string | number, fallback = 0) {
   const n = Number(String(v).replace(/,/g, ""));
   return Number.isFinite(n) ? n : fallback;
 }
 
 function Pill({ children }: { children: React.ReactNode }) {
   return (
     <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
       {children}
     </span>
   );
 }
 
 function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
   return (
     <div className="mb-8 text-center">
       {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p> : null}
       <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
       {desc ? <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{desc}</p> : null}
     </div>
   );
 }
 
 function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
   return <div className={cn("rounded-3xl border border-border bg-card p-6 shadow-sm", className)}>{children}</div>;
 }
 
 function Input({ label, value, onChange, placeholder, suffix }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; suffix?: string }) {
   return (
     <div>
       <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
       <div className="relative">
         <input
           type="text"
           value={value}
           onChange={(e) => onChange(e.target.value)}
           placeholder={placeholder}
           className="w-full rounded-xl border border-input bg-background px-3 py-2 pr-14 text-sm text-foreground outline-none ring-0 focus:border-primary focus:ring-1 focus:ring-ring"
         />
         {suffix ? (
           <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
             {suffix}
           </span>
         ) : null}
       </div>
     </div>
   );
 }
 
 function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
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
 
 function Button({ children, onClick, variant = "primary" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "ghost" | "secondary" }) {
   const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";
   const styles =
     variant === "primary"
       ? "btn-navy"
       : variant === "ghost"
       ? "bg-transparent text-foreground hover:bg-accent"
       : "bg-secondary text-secondary-foreground hover:bg-accent";
   return (
     <button onClick={onClick} className={cn(base, styles)}>
       {children}
     </button>
   );
 }
 
 function Divider() {
   return <div className="my-4 h-px bg-border" />;
 }
 
 interface Product {
   id: string;
   name: string;
   type: string;
   costExTax: number;
   highlights: string[];
 }
 
 function recommend({ useCase, opsNeed, riskLevel, preferredTerm, product }: { useCase: string; opsNeed: string; riskLevel: string; preferredTerm: number | null; product?: Product }) {
   let pkg = "pro";
   if (opsNeed === "sla") pkg = "pro";
   if (opsNeed === "spare") pkg = "managed";
   if (opsNeed === "managed") pkg = "managed";
 
   let term = preferredTerm || 24;
   if (useCase === "dock" || product?.type === "Automation Bundle") term = 36;
 
   if (riskLevel === "high" && pkg === "pro") pkg = "managed";
 
   return { pkg, term };
 }
 
 export default function DroneRental() {
   const [productId, setProductId] = useState("m4t");
   const [useCase, setUseCase] = useState("patrol");
   const [opsNeed, setOpsNeed] = useState("sla");
   const [riskLevel, setRiskLevel] = useState("med");
   const [preferredTerm, setPreferredTerm] = useState("");
 
   const [gmSell, setGmSell] = useState("30");
   const [vat, setVat] = useState("7");
 
   const [insuranceYear, setInsuranceYear] = useState("0");
   const [opsMonth, setOpsMonth] = useState("0");
   const [adminClaimMonth, setAdminClaimMonth] = useState("0");
   const [riskBufferMonth, setRiskBufferMonth] = useState("0");
 
   const [setupFee, setSetupFee] = useState("20000");
   const [insuranceAdminMonth, setInsuranceAdminMonth] = useState("500");
   const [serviceStandard, setServiceStandard] = useState("1500");
   const [servicePro, setServicePro] = useState("3000");
   const [serviceManaged, setServiceManaged] = useState("8000");
 
   const [leadName, setLeadName] = useState("");
   const [leadOrg, setLeadOrg] = useState("");
   const [leadPhone, setLeadPhone] = useState("");
   const [leadEmail, setLeadEmail] = useState("");
 
   const product = useMemo(() => PRODUCTS.find((p) => p.id === productId), [productId]);
 
   useEffect(() => {
     if (!product) return;
     if (product.type === "Automation Bundle") {
       setSetupFee((prev) => (String(prev) === "20000" ? "80000" : prev));
       setServiceStandard((prev) => (String(prev) === "1500" ? "2500" : prev));
       setServicePro((prev) => (String(prev) === "3000" ? "5000" : prev));
       setServiceManaged((prev) => (String(prev) === "8000" ? "12000" : prev));
     }
   }, [productId, product]);
 
   const rec = useMemo(() => {
     const term = preferredTerm ? Number(preferredTerm) : null;
     return recommend({ useCase, opsNeed, riskLevel, preferredTerm: term, product });
   }, [useCase, opsNeed, riskLevel, preferredTerm, product]);
 
   const calc = useMemo(() => {
     const cost = product?.costExTax ?? 0;
     const gm = clampNum(gmSell, 30) / 100;
     const vatRate = clampNum(vat, 7) / 100;
     const sellExVat = cost / (1 - gm);
     const sellIncVat = sellExVat * (1 + vatRate);
 
     const term = rec.term;
 
     const insYear = clampNum(insuranceYear, 0);
     const ops = clampNum(opsMonth, 0);
     const admin = clampNum(adminClaimMonth, 0);
     const risk = clampNum(riskBufferMonth, 0);
 
     const setup = clampNum(setupFee, 0);
     const insAdmin = clampNum(insuranceAdminMonth, 0);
 
     const svcStd = clampNum(serviceStandard, 0);
     const svcPro = clampNum(servicePro, 0);
     const svcMng = clampNum(serviceManaged, 0);
 
     const rent = (mult: number, svc: number) => (cost * mult) / term + insYear / 12 + insAdmin + svc + ops + admin + risk;
 
     const standard = rent(PACKAGE_MULTIPLIER.standard, svcStd);
     const pro = rent(PACKAGE_MULTIPLIER.pro, svcPro);
     const managed = rent(PACKAGE_MULTIPLIER.managed, svcMng);
 
     const pkg = rec.pkg;
     const monthlySelected = pkg === "standard" ? standard : pkg === "pro" ? pro : managed;
 
     const depositMonths = term === 12 ? 3 : term === 24 ? 2 : 1;
     const deposit = monthlySelected * depositMonths;
     const upfront = deposit + setup;
 
     const contractValue = monthlySelected * term + setup;
 
     const multSelected = pkg === "standard" ? PACKAGE_MULTIPLIER.standard : pkg === "pro" ? PACKAGE_MULTIPLIER.pro : PACKAGE_MULTIPLIER.managed;
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
   }, [product, gmSell, vat, insuranceYear, opsMonth, adminClaimMonth, riskBufferMonth, setupFee, insuranceAdminMonth, serviceStandard, servicePro, serviceManaged, rec]);
 
   const offerMessage = useMemo(() => {
     const pkgName = rec.pkg === "standard" ? "Rent Standard" : rec.pkg === "pro" ? "Rent Pro" : "Rent Managed";
     const uc =
       useCase === "patrol"
         ? "เฝ้าระวัง/ความปลอดภัย"
         : useCase === "mapping"
         ? "สำรวจ/แผนที่"
         : useCase === "inspection"
         ? "ตรวจสอบ/ตรวจสภาพ"
         : "Dock automation";
 
     return (
       `ขอใบเสนอราคาโครงการโดรนเช่า (รวมประกันชั้น 1)\n` +
       `- รุ่น/ชุด: ${product?.name}\n` +
       `- Use case: ${uc}\n` +
       `- แพ็กเกจแนะนำ: ${pkgName}\n` +
       `- ระยะสัญญา: ${calc.term} เดือน\n` +
       `- ค่าเช่า/เดือน (ประมาณการ): ${thb(calc.monthlySelected)} บาท\n` +
       `- มัดจำ: ${calc.depositMonths} เดือน ≈ ${thb(calc.deposit)} บาท\n` +
       `- Setup/Onboarding (ครั้งเดียว): ≈ ${thb(calc.setup)} บาท\n` +
       `- รวมจ่ายวันแรก (ประมาณ): ≈ ${thb(calc.upfront)} บาท\n` +
       `- มูลค่าสัญญา (รวม Setup): ≈ ${thb(calc.contractValue)} บาท\n` +
       `\nข้อมูลติดต่อ\n` +
       `- ชื่อ: ${leadName || "-"}\n` +
       `- องค์กร: ${leadOrg || "-"}\n` +
       `- โทร: ${leadPhone || "-"}\n` +
       `- อีเมล: ${leadEmail || "-"}\n`
     );
   }, [rec, useCase, product, calc, leadName, leadOrg, leadPhone, leadEmail]);
 
   return (
     <div className="min-h-screen bg-background font-sans text-foreground antialiased">
       {/* Top bar */}
       <div className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-nav">
         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
           <div className="flex items-center gap-3">
             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-lg font-bold text-background">13</div>
             <div>
               <p className="text-sm font-bold leading-tight text-foreground">13 STORE — Drone Rental</p>
               <p className="text-xs text-muted-foreground">เช่าระบบโดรนแบบครบวงจร</p>
             </div>
           </div>
           <div className="flex items-center gap-2">
             <Button variant="ghost" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
               คำนวณแผนเช่า
             </Button>
             <Button onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}>ขอใบเสนอราคา</Button>
           </div>
         </div>
       </div>
 
       {/* Hero */}
       <div className="bg-secondary py-16 md:py-24">
         <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
           <div className="space-y-6">
             <div className="flex flex-wrap gap-2">
               <Pill>รวมประกันชั้น 1 ทุกสัญญา</Pill>
               <Pill>สัญญา 1–3 ปี (12/24/36 เดือน)</Pill>
               <Pill>Setup + Service Fee + Insurance Admin</Pill>
             </div>
             <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
               ระบบโดรนเช่าแบบ <span className="text-primary">พร้อมใช้งาน</span> สำหรับหน่วยงานและองค์กร
             </h1>
             <p className="max-w-xl text-lg text-muted-foreground">
               ไม่ต้องลงทุนก้อนใหญ่ — ได้เครื่อง, บริการ, PM, ซัพพอร์ต และประกันชั้น 1 รวมในโครงราคา พร้อมระบบแนะนำแพ็กเกจและคำนวณแผนเช่าแบบครบวงจร
             </p>
 
             <div className="flex flex-wrap gap-3">
               <Button onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>เริ่มคำนวณแผนเช่า</Button>
               <Button variant="secondary" onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}>
                 ดูแพ็กเกจ
               </Button>
             </div>
 
             <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
               {["ส่งมอบ+เทรน", "PM ตามรอบ", "ระบบแจ้งเคส", "เอกสารครบชุด"].map((t) => (
                 <div key={t} className="rounded-2xl bg-card p-4 shadow-sm border border-border">
                   <p className="text-sm font-semibold text-foreground">{t}</p>
                   <p className="mt-1 text-xs text-muted-foreground">มาตรฐานเดียวกันทุกโครงการ</p>
                 </div>
               ))}
             </div>
           </div>
 
           <Card className="relative overflow-hidden">
             <div className="mb-4 flex items-center justify-between">
               <div>
                 <p className="text-sm font-semibold text-muted-foreground">ข้อเสนอแนะนำ (Realtime)</p>
                 <p className="text-xs text-muted-foreground/70">ระบบแนะนำแพ็กเกจที่เหมาะสมตามความต้องการ</p>
               </div>
               <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">Smart Recommend</span>
             </div>
             <Divider />
             <div className="space-y-3">
               <Select
                 label="รุ่นโดรน/ชุดระบบ"
                 value={productId}
                 onChange={setProductId}
                 options={PRODUCTS.map((p) => ({ value: p.id, label: `${p.name} — ต้นทุน ${thb(p.costExTax)} (EX Tax)` }))}
               />
               <Select label="Use Case" value={useCase} onChange={setUseCase} options={[{ value: "patrol", label: "เฝ้าระวัง/ความปลอดภัย" }, { value: "mapping", label: "สำรวจ/แผนที่" }, { value: "inspection", label: "ตรวจสอบ/ตรวจสภาพ" }, { value: "dock", label: "Dock automation" }]} />
               <Select label="ระดับความต้องการ Ops" value={opsNeed} onChange={setOpsNeed} options={[{ value: "basic", label: "ปกติ (ไม่ต้อง SLA)" }, { value: "sla", label: "ต้องการ SLA ตอบรับเคส" }, { value: "spare", label: "ต้องการเครื่องสำรอง" }, { value: "managed", label: "ให้ดูแลแบบ Managed" }]} />
               <Select label="ความเสี่ยงหน้างาน" value={riskLevel} onChange={setRiskLevel} options={[{ value: "low", label: "ต่ำ (สภาพดี)" }, { value: "med", label: "กลาง" }, { value: "high", label: "สูง (สภาพรุนแรง)" }]} />
               <Select
                 label="ระยะสัญญาที่สนใจ"
                 value={preferredTerm}
                 onChange={setPreferredTerm}
                 options={[{ value: "", label: "ให้ระบบแนะนำ" }, ...TERMS.map((m) => ({ value: String(m), label: `${m} เดือน` }))]}
               />
               <div className="rounded-xl bg-secondary p-3">
                 <p className="text-xs text-muted-foreground">แพ็กเกจแนะนำ</p>
                 <p className="text-lg font-bold text-primary">
                   {rec.pkg === "standard" ? "Rent Standard" : rec.pkg === "pro" ? "Rent Pro" : "Rent Managed"}
                 </p>
                 <p className="text-xs text-muted-foreground">ระยะสัญญา: {rec.term} เดือน</p>
               </div>
             </div>
             <Divider />
             <div className="space-y-2">
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-xs text-muted-foreground">ค่าเช่า/เดือน (ประมาณการ)</p>
                   <p className="text-xl font-bold text-foreground">{thb(calc.monthlySelected)} บาท</p>
                   <p className="text-xs text-muted-foreground/70">ตัวคูณ: 1.60 / 1.90 / 2.30 + Service + Insurance admin</p>
                 </div>
                 <div className="text-right">
                   <p className="text-xs text-muted-foreground">มัดจำ ({calc.depositMonths} เดือน)</p>
                   <p className="font-semibold text-foreground">≈ {thb(calc.deposit)} บาท</p>
                   <p className="text-xs text-muted-foreground">Setup ครั้งเดียว</p>
                   <p className="font-semibold text-foreground">≈ {thb(calc.setup)} บาท</p>
                   <p className="text-xs text-muted-foreground">รวมจ่ายวันแรก</p>
                   <p className="font-bold text-primary">≈ {thb(calc.upfront)} บาท</p>
                 </div>
               </div>
               <p className="text-xs text-muted-foreground/70">
                 * ตัวเลขเป็น "ประมาณการขาย" — ปรับตามเบี้ยประกันจริง + SLA + ค่าใช้จ่ายหน้างานจริงได้
               </p>
             </div>
 
             <div className="mt-4 flex gap-2">
               <Button variant="ghost" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>ปรับตัวเลขละเอียด</Button>
               <Button onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}>
                 ขอใบเสนอราคา
               </Button>
             </div>
           </Card>
         </div>
       </div>
 
       {/* Packages */}
       <div id="packages" className="py-16 bg-background">
         <SectionTitle eyebrow="Packages" title="เลือกแพ็กเกจที่เหมาะกับองค์กร" desc="ทุกแพ็กเกจรวมประกันชั้น 1 และบริการพื้นฐาน — ต่างกันที่ SLA และระดับการดูแล" />
         <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
           <Card>
             <div className="mb-3 flex items-center gap-2">
               <p className="text-lg font-bold text-foreground">Rent Standard</p>
               <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">Multiplier 1.60</span>
             </div>
             <p className="mb-4 text-sm text-muted-foreground">เหมาะสำหรับเริ่มต้นใช้งานและคุมงบ</p>
             <ul className="space-y-2 text-sm">
               {["เครื่อง+อุปกรณ์", "ประกันชั้น 1", "Service fee (Basic)", "PM ตามรอบ (ตามสัญญา)"].map((x) => (
                 <li key={x} className="flex items-center gap-2 text-foreground">
                   <CheckCircle className="h-4 w-4 text-green-500" />
                   {x}
                 </li>
               ))}
             </ul>
           </Card>
           <Card className="border-2 border-primary">
             <div className="mb-3 flex items-center gap-2">
               <p className="text-lg font-bold text-foreground">Rent Pro</p>
               <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Multiplier 1.90</span>
             </div>
             <p className="mb-4 text-sm text-muted-foreground">เหมาะสำหรับงานหน้างานจริง — เน้น SLA และการตอบรับเคส</p>
             <ul className="space-y-2 text-sm">
               {["ทุกอย่างใน Standard", "SLA ตอบรับเคส", "รายงานสถานะรายเดือน", "เพิ่มเงื่อนไขเครื่องสำรอง (ตามตกลง)"].map((x) => (
                 <li key={x} className="flex items-center gap-2 text-foreground">
                   <CheckCircle className="h-4 w-4 text-green-500" />
                   {x}
                 </li>
               ))}
             </ul>
           </Card>
           <Card className="card-navy">
             <div className="mb-3 flex items-center gap-2">
               <p className="text-lg font-bold">Rent Managed</p>
               <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">Multiplier 2.30</span>
             </div>
             <p className="mb-4 text-sm text-white/70">เหมาะสำหรับภาครัฐ/โรงงาน/ระบบเฝ้าระวัง — ให้ทีมเราดูแลทั้งระบบ</p>
             <ul className="space-y-2 text-sm">
               {["ทุกอย่างใน Pro", "SOP + Training", "On-site ตามโควตา", "แผน PM/Spare", "รายงานผู้บริหาร"].map((x) => (
                 <li key={x} className="flex items-center gap-2">
                   <CheckCircle className="h-4 w-4 text-primary" />
                   {x}
                 </li>
               ))}
             </ul>
           </Card>
         </div>
       </div>
 
       {/* Calculator */}
       {/* Lead */}
       <div id="lead" className="py-16 bg-background">
         <SectionTitle eyebrow="Contact" title="ขอใบเสนอราคาหรือพูดคุยโครงการ" desc="กรอกข้อมูลด้านล่าง — เราจะติดต่อกลับภายใน 1 วันทำการ" />
         <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-2">
           <Card>
             <div className="grid gap-4 sm:grid-cols-2">
               <Input label="ชื่อผู้ติดต่อ" value={leadName} onChange={setLeadName} placeholder="ชื่อ-นามสกุล" />
               <Input label="หน่วยงาน/องค์กร" value={leadOrg} onChange={setLeadOrg} placeholder="ชื่อบริษัท" />
               <Input label="เบอร์โทร" value={leadPhone} onChange={setLeadPhone} placeholder="08x-xxx-xxxx" />
               <Input label="อีเมล" value={leadEmail} onChange={setLeadEmail} placeholder="name@company.com" />
             </div>
 
             <div className="mt-6 rounded-xl bg-secondary p-4">
               <p className="mb-2 text-xs font-semibold text-muted-foreground">สรุปข้อเสนอ</p>
               <p className="font-semibold text-foreground">{product?.name}</p>
               <p className="text-sm text-muted-foreground">
                 แพ็กเกจ: {rec.pkg === "standard" ? "Rent Standard" : rec.pkg === "pro" ? "Rent Pro" : "Rent Managed"} · ระยะสัญญา: {calc.term} เดือน
               </p>
               <p className="mt-2 text-sm text-foreground">ค่าเช่า/เดือน (ประมาณ): <span className="font-semibold">{thb(calc.monthlySelected)} บาท</span></p>
               <p className="text-sm text-muted-foreground">มัดจำ: {calc.depositMonths} เดือน ≈ {thb(calc.deposit)} บาท · Setup ≈ {thb(calc.setup)} บาท</p>
 
               <div className="mt-4 flex gap-2">
                 <Button
                   onClick={async () => {
                     try {
                       await navigator.clipboard.writeText(offerMessage);
                       alert("คัดลอกข้อความข้อเสนอเรียบร้อย (เอาไปส่ง LINE ได้เลย)");
                     } catch {
                       alert("คัดลอกไม่สำเร็จ: กรุณาคัดลอกด้วยมือจากกล่องข้อความด้านล่าง");
                     }
                   }}
                 >
                   คัดลอกข้อความไปส่ง LINE
                 </Button>
                 <Button
                   variant="secondary"
                   onClick={() => {
                     const subject = encodeURIComponent("ขอใบเสนอราคาโครงการโดรนเช่า (รวมประกันชั้น 1)");
                     const body = encodeURIComponent(offerMessage);
                     window.location.href = `mailto:?subject=${subject}&body=${body}`;
                   }}
                 >
                   ส่งเป็นอีเมล
                 </Button>
               </div>
             </div>
           </Card>
 
           <Card>
             <p className="mb-2 text-xs font-semibold text-muted-foreground">ข้อความที่จะส่ง</p>
             <textarea
               readOnly
               value={offerMessage}
               className="h-64 w-full resize-none rounded-xl border border-input bg-secondary p-3 text-sm text-foreground"
             />
             <div className="mt-3 text-xs text-muted-foreground">*ต่อยอดเก็บ Lead อัตโนมัติ: Make.com → Google Sheet/CRM แล้วยิง webhook</div>
           </Card>
         </div>
 
         <div className="mx-auto mt-10 max-w-5xl px-4">
           <div className="rounded-3xl card-navy p-6">
             <div className="grid gap-4 lg:grid-cols-3">
               <div>
                 <div className="text-lg font-semibold">พร้อมทำให้เป็นเว็บใช้งานจริง</div>
                 <div className="mt-2 text-sm text-white/70">เพิ่ม SEO, UTM, Lead to CRM, LINE OA auto-reply, และ KPI dashboard</div>
               </div>
               <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
                 {[
                   { t: "SEO Landing", d: "คีย์เวิร์ด + โครงสร้างหน้า" },
                   { t: "Lead to CRM", d: "Make.com → Sheet/HubSpot" },
                   { t: "SLA Templates", d: "เอกสารและ SOP" },
                 ].map((x) => (
                   <div key={x.t} className="rounded-2xl bg-white/10 p-4">
                     <div className="text-sm font-semibold">{x.t}</div>
                     <div className="mt-1 text-xs text-white/70">{x.d}</div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
 
       {/* Footer */}
       <div className="border-t border-border bg-card">
         <div className="mx-auto max-w-6xl px-4 py-8">
           <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
             <div>
               <div className="text-sm font-semibold text-foreground">13 STORE Co., Ltd.</div>
               <div className="text-xs text-muted-foreground">Drone Rental • High Profit Mode • Insurance Included</div>
             </div>
             <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} 13 STORE. All rights reserved.</div>
           </div>
         </div>
       </div>
     </div>
   );
 }