import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  FileText,
  Printer,
  CheckCircle,
  AlertTriangle,
  Download,
  PenTool,
  Trash2,
  Calendar,
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  Shield,
  Wrench,
  Clock,
  Ban,
  Scale,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ContractFormData {
  contractNumber: string;
  contractDate: string;
  // ผู้ให้เช่า (Lessor)
  lessorName: string;
  lessorAddress: string;
  lessorTaxId: string;
  lessorPhone: string;
  lessorEmail: string;
  lessorRepresentative: string;
  lessorPosition: string;
  // ผู้เช่า (Lessee) - หน่วยงานภาครัฐ
  lesseeName: string;
  lesseeAddress: string;
  lesseeTaxId: string;
  lesseePhone: string;
  lesseeEmail: string;
  lesseeRepresentative: string;
  lesseePosition: string;
  lesseeAuthDoc: string;
  // รายละเอียดโดรน
  droneBrand: string;
  droneModel: string;
  droneSerial: string;
  droneAccessories: string;
  droneCondition: string;
  droneValue: string;
  // สัญญา
  rentalStartDate: string;
  rentalEndDate: string;
  rentalTermMonths: string;
  monthlyRentalFee: string;
  setupFee: string;
  depositMonths: string;
  depositAmount: string;
  totalContractValue: string;
  paymentDueDay: string;
  // ประกัน
  insuranceType: string;
  insurancePolicyNo: string;
  insuranceCoverage: string;
  deductibleAmount: string;
  // SLA
  packageType: string;
  slaResponseTime: string;
  slaResolutionTime: string;
  pmSchedule: string;
  // พยาน
  witness1Name: string;
  witness1Position: string;
  witness2Name: string;
  witness2Position: string;
}

// ─── Signature Canvas Component ──────────────────────────────────────────

function SignatureCanvas({
  label,
  onSave,
  savedSignature,
  onClear,
}: {
  label: string;
  onSave: (dataUrl: string) => void;
  savedSignature: string | null;
  onClear: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const getCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setIsDrawing(true);
    setHasDrawn(true);
    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getCoords(e);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1a1a2e";
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    onClear();
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    onSave(dataUrl);
    toast.success("บันทึกลายเซ็นเรียบร้อย");
  };

  if (savedSignature) {
    return (
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <div className="border-2 border-green-300 rounded-xl p-3 bg-green-50 dark:bg-green-950/20">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700 dark:text-green-400 font-medium">ลงนามแล้ว</span>
          </div>
          <img src={savedSignature} alt="ลายเซ็น" className="h-20 mx-auto" />
          <button
            onClick={() => {
              onClear();
              handleClear();
            }}
            className="mt-2 text-xs text-red-500 hover:underline flex items-center gap-1 mx-auto"
          >
            <Trash2 className="w-3 h-3" /> ลบลายเซ็นและเซ็นใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="border-2 border-dashed border-border rounded-xl p-3 bg-muted/30">
        <p className="text-xs text-muted-foreground mb-2 text-center">
          กรุณาเซ็นชื่อในกรอบด้านล่าง (ใช้เมาส์หรือนิ้วสัมผัส)
        </p>
        <canvas
          ref={canvasRef}
          width={400}
          height={150}
          className="w-full border border-border rounded-lg bg-white cursor-crosshair touch-none"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
        <div className="flex gap-2 mt-2 justify-center">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:bg-secondary transition"
          >
            <Trash2 className="w-3 h-3 inline mr-1" />
            ล้าง
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!hasDrawn}
            className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition disabled:opacity-50"
          >
            <PenTool className="w-3 h-3 inline mr-1" />
            บันทึกลายเซ็น
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Contract Section Component ──────────────────────────────────────────

function ContractSection({
  number,
  title,
  icon: Icon,
  children,
  collapsible = false,
}: {
  number: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  collapsible?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 print:mb-4">
      <div
        className={cn(
          "flex items-center gap-3 mb-3 pb-2 border-b-2 border-primary/30",
          collapsible && "cursor-pointer hover:bg-muted/30 rounded-t-lg px-2 py-1 -mx-2"
        )}
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center print:bg-gray-100">
          <Icon className="w-4 h-4 text-primary print:text-gray-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-foreground print:text-black">
            {number}. {title}
          </h3>
        </div>
        {collapsible && (
          <span className="print:hidden">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        )}
      </div>
      {isOpen && (
        <div className="pl-11 print:pl-8 space-y-2 text-sm leading-relaxed text-foreground/90 print:text-black">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Form Field Component ────────────────────────────────────────────────

function ContractField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1", className)}>
      <label className="text-xs font-medium text-muted-foreground print:text-gray-600">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring print:border-gray-300 print:bg-white"
      />
    </div>
  );
}

function ContractTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground print:text-gray-600">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring resize-none print:border-gray-300"
      />
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────

export default function DroneRentalAgreement() {
  const contractRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

  // Signatures
  const [lessorSignature, setLessorSignature] = useState<string | null>(null);
  const [lesseeSignature, setLesseeSignature] = useState<string | null>(null);
  const [witness1Signature, setWitness1Signature] = useState<string | null>(null);
  const [witness2Signature, setWitness2Signature] = useState<string | null>(null);

  // Form data with pre-filled lessor info
  const [form, setForm] = useState<ContractFormData>({
    contractNumber: "",
    contractDate: new Date().toISOString().split("T")[0],
    // ผู้ให้เช่า
    lessorName: "บริษัท 13 สโตร์ จำกัด",
    lessorAddress:
      "เลขที่ 99/99 หมู่ 1 ตำบลบางพลีใหญ่ อำเภอบางพลี จังหวัดสมุทรปราการ 10540",
    lessorTaxId: "0-1055-XXXXX-XX-X",
    lessorPhone: "061-417-6015",
    lessorEmail: "contact@dji13store.com",
    lessorRepresentative: "",
    lessorPosition: "กรรมการผู้จัดการ",
    // ผู้เช่า
    lesseeName: "",
    lesseeAddress: "",
    lesseeTaxId: "",
    lesseePhone: "",
    lesseeEmail: "",
    lesseeRepresentative: "",
    lesseePosition: "",
    lesseeAuthDoc: "",
    // โดรน
    droneBrand: "DJI",
    droneModel: "",
    droneSerial: "",
    droneAccessories: "",
    droneCondition: "ใหม่ สภาพสมบูรณ์ 100% พร้อมใช้งาน",
    droneValue: "",
    // สัญญา
    rentalStartDate: "",
    rentalEndDate: "",
    rentalTermMonths: "24",
    monthlyRentalFee: "",
    setupFee: "20,000",
    depositMonths: "2",
    depositAmount: "",
    totalContractValue: "",
    paymentDueDay: "5",
    // ประกัน
    insuranceType: "ประกันภัยชั้น 1 (All Risk)",
    insurancePolicyNo: "",
    insuranceCoverage: "คุ้มครองตัวเครื่องโดรน อุปกรณ์ และความรับผิดต่อบุคคลภายนอก",
    deductibleAmount: "",
    // SLA
    packageType: "Rent Pro",
    slaResponseTime: "4 ชั่วโมง (ในวันทำการ)",
    slaResolutionTime: "48 ชั่วโมง (ในวันทำการ)",
    pmSchedule: "ทุก 3 เดือน หรือทุก 100 ชั่วโมงบิน (แล้วแต่อย่างใดจะถึงก่อน)",
    // พยาน
    witness1Name: "",
    witness1Position: "",
    witness2Name: "",
    witness2Position: "",
  });

  const handleChange = useCallback((name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Auto-generate contract number
  useEffect(() => {
    if (!form.contractNumber) {
      const now = new Date();
      const year = now.getFullYear() + 543; // พ.ศ.
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const seq = String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0");
      handleChange("contractNumber", `SFS-RENT-${year}${month}-${seq}`);
    }
  }, []);

  const formatThaiDate = (dateStr: string) => {
    if (!dateStr) return "_______________";
    const date = new Date(dateStr);
    const thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
    ];
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `วันที่ ${day} เดือน ${month} พ.ศ. ${year}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const allSigned = lessorSignature && lesseeSignature && witness1Signature && witness2Signature;

  // ─── Render ────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-secondary to-background pt-20">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <FileText className="w-4 h-4" />
            สัญญาเช่าอากาศยานไร้คนขับ (โดรน)
          </div>
          <h1 className="text-3xl font-extrabold text-foreground md:text-4xl mb-3">
            สัญญาเช่าอากาศยานไร้คนขับ (Drone)
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            สัญญาเช่าโดรนฉบับสมบูรณ์ สำหรับหน่วยงานภาครัฐและองค์กร
            พร้อมลงนามดิจิทัลและพิมพ์เอกสาร
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-hero-secondary text-sm"
            >
              {showForm ? "ซ่อนแบบฟอร์มกรอกข้อมูล" : "แสดงแบบฟอร์มกรอกข้อมูล"}
            </button>
            <button onClick={handlePrint} className="btn-hero-primary text-sm">
              <Printer className="w-4 h-4 mr-1 inline" />
              พิมพ์สัญญา / PDF
            </button>
          </div>
        </div>
      </div>

      {/* ── Form Section (Collapsible) ─────────────────────────────────── */}
      {showForm && (
        <div className="mx-auto max-w-4xl px-4 pb-8 print:hidden">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <PenTool className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">กรอกข้อมูลสัญญา</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              กรอกข้อมูลด้านล่างเพื่อสร้างสัญญาเช่าโดรนอย่างละเอียด
              ข้อมูลจะถูกนำไปแสดงในเนื้อหาสัญญาด้านล่างโดยอัตโนมัติ
            </p>

            {/* ข้อมูลสัญญา */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ข้อมูลสัญญา</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <ContractField label="เลขที่สัญญา" name="contractNumber" value={form.contractNumber} onChange={handleChange} />
                <ContractField label="วันที่ทำสัญญา" name="contractDate" value={form.contractDate} onChange={handleChange} type="date" />
                <ContractField label="ระยะสัญญา (เดือน)" name="rentalTermMonths" value={form.rentalTermMonths} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="วันเริ่มสัญญา" name="rentalStartDate" value={form.rentalStartDate} onChange={handleChange} type="date" />
                <ContractField label="วันสิ้นสุดสัญญา" name="rentalEndDate" value={form.rentalEndDate} onChange={handleChange} type="date" />
              </div>
            </fieldset>

            {/* ผู้ให้เช่า */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ผู้ให้เช่า (Lessor)</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ชื่อบริษัท/หน่วยงาน" name="lessorName" value={form.lessorName} onChange={handleChange} required />
                <ContractField label="เลขประจำตัวผู้เสียภาษี" name="lessorTaxId" value={form.lessorTaxId} onChange={handleChange} />
              </div>
              <ContractField label="ที่อยู่" name="lessorAddress" value={form.lessorAddress} onChange={handleChange} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="โทรศัพท์" name="lessorPhone" value={form.lessorPhone} onChange={handleChange} />
                <ContractField label="อีเมล" name="lessorEmail" value={form.lessorEmail} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ผู้มีอำนาจลงนาม" name="lessorRepresentative" value={form.lessorRepresentative} onChange={handleChange} required />
                <ContractField label="ตำแหน่ง" name="lessorPosition" value={form.lessorPosition} onChange={handleChange} />
              </div>
            </fieldset>

            {/* ผู้เช่า */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ผู้เช่า / หน่วยงานภาครัฐ (Lessee)</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ชื่อหน่วยงาน" name="lesseeName" value={form.lesseeName} onChange={handleChange} required placeholder="เช่น กรมป้องกันและบรรเทาสาธารณภัย" />
                <ContractField label="เลขประจำตัวผู้เสียภาษี" name="lesseeTaxId" value={form.lesseeTaxId} onChange={handleChange} />
              </div>
              <ContractField label="ที่อยู่" name="lesseeAddress" value={form.lesseeAddress} onChange={handleChange} placeholder="ที่อยู่หน่วยงาน" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="โทรศัพท์" name="lesseePhone" value={form.lesseePhone} onChange={handleChange} />
                <ContractField label="อีเมล" name="lesseeEmail" value={form.lesseeEmail} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ผู้มีอำนาจลงนาม" name="lesseeRepresentative" value={form.lesseeRepresentative} onChange={handleChange} required placeholder="ชื่อ-นามสกุล" />
                <ContractField label="ตำแหน่ง" name="lesseePosition" value={form.lesseePosition} onChange={handleChange} placeholder="เช่น ผู้อำนวยการกอง" />
              </div>
              <ContractField label="หนังสือมอบอำนาจ/คำสั่งแต่งตั้งเลขที่" name="lesseeAuthDoc" value={form.lesseeAuthDoc} onChange={handleChange} placeholder="เลขที่คำสั่ง/หนังสือมอบอำนาจ" />
            </fieldset>

            {/* รายละเอียดโดรน */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">รายละเอียดอากาศยานไร้คนขับ (โดรน)</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <ContractField label="ยี่ห้อ" name="droneBrand" value={form.droneBrand} onChange={handleChange} />
                <ContractField label="รุ่น" name="droneModel" value={form.droneModel} onChange={handleChange} placeholder="เช่น Matrice 4T" />
                <ContractField label="หมายเลขเครื่อง (S/N)" name="droneSerial" value={form.droneSerial} onChange={handleChange} />
              </div>
              <ContractTextArea label="อุปกรณ์ประกอบ" name="droneAccessories" value={form.droneAccessories} onChange={handleChange} placeholder="เช่น รีโมทคอนโทรล 1 ตัว, แบตเตอรี่ 4 ก้อน, กระเป๋าขนส่ง 1 ใบ, ใบพัดสำรอง 2 ชุด ฯลฯ" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="สภาพเครื่อง" name="droneCondition" value={form.droneCondition} onChange={handleChange} />
                <ContractField label="มูลค่าทรัพย์สิน (บาท)" name="droneValue" value={form.droneValue} onChange={handleChange} placeholder="เช่น 350,000" />
              </div>
            </fieldset>

            {/* ค่าเช่าและค่าใช้จ่าย */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ค่าเช่าและค่าใช้จ่าย</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <ContractField label="ค่าเช่ารายเดือน (บาท)" name="monthlyRentalFee" value={form.monthlyRentalFee} onChange={handleChange} required placeholder="เช่น 15,000" />
                <ContractField label="ค่า Setup/Onboarding (บาท)" name="setupFee" value={form.setupFee} onChange={handleChange} />
                <ContractField label="เงินประกัน (จำนวนเดือน)" name="depositMonths" value={form.depositMonths} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <ContractField label="เงินประกัน (บาท)" name="depositAmount" value={form.depositAmount} onChange={handleChange} placeholder="เช่น 30,000" />
                <ContractField label="มูลค่าสัญญารวม (บาท)" name="totalContractValue" value={form.totalContractValue} onChange={handleChange} />
                <ContractField label="กำหนดชำระค่าเช่า (วันที่ของเดือน)" name="paymentDueDay" value={form.paymentDueDay} onChange={handleChange} />
              </div>
            </fieldset>

            {/* ประกันภัย */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ประกันภัย</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ประเภทประกัน" name="insuranceType" value={form.insuranceType} onChange={handleChange} />
                <ContractField label="เลขที่กรมธรรม์" name="insurancePolicyNo" value={form.insurancePolicyNo} onChange={handleChange} />
              </div>
              <ContractField label="ความคุ้มครอง" name="insuranceCoverage" value={form.insuranceCoverage} onChange={handleChange} />
              <ContractField label="ค่าเสียหายส่วนแรก / Deductible (บาท)" name="deductibleAmount" value={form.deductibleAmount} onChange={handleChange} placeholder="เช่น 10,000" />
            </fieldset>

            {/* SLA / บริการ */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">ระดับบริการ (SLA)</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">แพ็กเกจ</label>
                  <select
                    value={form.packageType}
                    onChange={(e) => handleChange("packageType", e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  >
                    <option value="Rent Standard">Rent Standard</option>
                    <option value="Rent Pro">Rent Pro (แนะนำ)</option>
                    <option value="Rent Managed">Rent Managed (Enterprise)</option>
                  </select>
                </div>
                <ContractField label="ระยะเวลาตอบรับเคส" name="slaResponseTime" value={form.slaResponseTime} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="ระยะเวลาแก้ไข/ซ่อม" name="slaResolutionTime" value={form.slaResolutionTime} onChange={handleChange} />
                <ContractField label="กำหนดการ PM" name="pmSchedule" value={form.pmSchedule} onChange={handleChange} />
              </div>
            </fieldset>

            {/* พยาน */}
            <fieldset className="border border-border rounded-xl p-4 space-y-3">
              <legend className="text-sm font-semibold text-primary px-2">พยาน</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="พยานฝ่ายผู้ให้เช่า (ชื่อ)" name="witness1Name" value={form.witness1Name} onChange={handleChange} />
                <ContractField label="ตำแหน่ง" name="witness1Position" value={form.witness1Position} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ContractField label="พยานฝ่ายผู้เช่า (ชื่อ)" name="witness2Name" value={form.witness2Name} onChange={handleChange} />
                <ContractField label="ตำแหน่ง" name="witness2Position" value={form.witness2Position} onChange={handleChange} />
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          CONTRACT DOCUMENT
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-4xl px-4 pb-16">
        <div
          ref={contractRef}
          className="rounded-2xl border border-border bg-white dark:bg-card p-8 md:p-12 shadow-lg print:shadow-none print:border-0 print:p-6 print:rounded-none"
        >
          {/* ── Contract Header ────────────────────────────────────────── */}
          <div className="text-center mb-8 print:mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-primary print:text-gray-700" />
              <div>
                <h1 className="text-2xl font-extrabold text-foreground print:text-black">
                  สัญญาเช่าอากาศยานไร้คนขับ (โดรน)
                </h1>
                <p className="text-sm text-muted-foreground print:text-gray-500">
                  UNMANNED AERIAL VEHICLE (DRONE) RENTAL AGREEMENT
                </p>
              </div>
            </div>
            <div className="border-t-2 border-b-2 border-primary/30 print:border-gray-400 py-3 mt-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span>
                  <strong>เลขที่สัญญา:</strong> {form.contractNumber || "_______________"}
                </span>
                <span>
                  <strong>วันที่:</strong> {formatThaiDate(form.contractDate)}
                </span>
              </div>
            </div>
          </div>

          {/* ── Preamble ───────────────────────────────────────────────── */}
          <div className="mb-8 text-sm leading-relaxed text-foreground/90 print:text-black space-y-3">
            <p className="indent-16">
              สัญญาฉบับนี้ทำขึ้นเมื่อ {formatThaiDate(form.contractDate)}{" "}
              ระหว่าง
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 print:bg-gray-50 print:border-gray-300">
              <p className="font-semibold text-blue-800 dark:text-blue-300 print:text-black mb-1">
                ฝ่ายที่หนึ่ง: ผู้ให้เช่า (Lessor)
              </p>
              <p>
                <strong>{form.lessorName || "_______________"}</strong>{" "}
                สำนักงานตั้งอยู่เลขที่ {form.lessorAddress || "_______________"}{" "}
                เลขประจำตัวผู้เสียภาษี {form.lessorTaxId || "_______________"}{" "}
                โดย {form.lessorRepresentative || "_______________"}{" "}
                ตำแหน่ง {form.lessorPosition || "_______________"}{" "}
                ผู้มีอำนาจลงนามผูกพัน ซึ่งต่อไปในสัญญานี้เรียกว่า{" "}
                <strong>"ผู้ให้เช่า"</strong>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800 print:bg-gray-50 print:border-gray-300">
              <p className="font-semibold text-green-800 dark:text-green-300 print:text-black mb-1">
                ฝ่ายที่สอง: ผู้เช่า (Lessee)
              </p>
              <p>
                <strong>{form.lesseeName || "_______________"}</strong>{" "}
                สำนักงานตั้งอยู่เลขที่ {form.lesseeAddress || "_______________"}{" "}
                เลขประจำตัวผู้เสียภาษี {form.lesseeTaxId || "_______________"}{" "}
                โดย {form.lesseeRepresentative || "_______________"}{" "}
                ตำแหน่ง {form.lesseePosition || "_______________"}{" "}
                {form.lesseeAuthDoc
                  ? `ตามหนังสือมอบอำนาจ/คำสั่งแต่งตั้งเลขที่ ${form.lesseeAuthDoc}`
                  : ""}{" "}
                ผู้มีอำนาจลงนามผูกพัน ซึ่งต่อไปในสัญญานี้เรียกว่า{" "}
                <strong>"ผู้เช่า"</strong>
              </p>
            </div>

            <p className="indent-16">
              คู่สัญญาทั้งสองฝ่ายตกลงทำสัญญาเช่าอากาศยานไร้คนขับ (โดรน)
              โดยมีข้อกำหนดและเงื่อนไขดังต่อไปนี้
            </p>
          </div>

          {/* ── Section 1: วัตถุประสงค์ ─────────────────────────────────── */}
          <ContractSection number="1" title="วัตถุประสงค์ของสัญญา" icon={BookOpen}>
            <p>
              1.1 ผู้ให้เช่าตกลงให้เช่า และผู้เช่าตกลงเช่าอากาศยานไร้คนขับ (โดรน) ตามรายละเอียดในข้อ 2
              เพื่อใช้ในภารกิจราชการ/ภารกิจของหน่วยงานผู้เช่า ภายใต้ข้อกำหนดและเงื่อนไขแห่งสัญญานี้
            </p>
            <p>
              1.2 สัญญาฉบับนี้เป็นสัญญาเช่าทรัพย์สินตามประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 537 ถึง มาตรา 571
              โดยกรรมสิทธิ์ในทรัพย์สินที่เช่าเป็นของผู้ให้เช่าตลอดอายุสัญญา
            </p>
            <p>
              1.3 ผู้เช่ารับทราบว่าอากาศยานไร้คนขับ (โดรน) ที่เช่าจะต้องใช้งานตามพระราชบัญญัติการเดินอากาศ พ.ศ. 2497
              กฎกระทรวง และประกาศสำนักงานการบินพลเรือนแห่งประเทศไทย (กพท.) ที่เกี่ยวข้องทุกประการ
            </p>
          </ContractSection>

          {/* ── Section 2: ทรัพย์สินที่เช่า ─────────────────────────────── */}
          <ContractSection number="2" title="ทรัพย์สินที่เช่า" icon={Shield}>
            <p>2.1 ผู้ให้เช่าตกลงให้เช่าอากาศยานไร้คนขับ (โดรน) ตามรายละเอียดดังนี้</p>
            <div className="bg-muted/50 rounded-xl p-4 border border-border print:bg-gray-50 my-2">
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <div><span className="text-muted-foreground">ยี่ห้อ:</span> <strong>{form.droneBrand || "___"}</strong></div>
                <div><span className="text-muted-foreground">รุ่น:</span> <strong>{form.droneModel || "___"}</strong></div>
                <div><span className="text-muted-foreground">หมายเลขเครื่อง (S/N):</span> <strong>{form.droneSerial || "___"}</strong></div>
                <div><span className="text-muted-foreground">สภาพเครื่อง:</span> <strong>{form.droneCondition || "___"}</strong></div>
                <div className="col-span-2"><span className="text-muted-foreground">มูลค่าทรัพย์สิน:</span> <strong>{form.droneValue || "___"} บาท</strong></div>
              </div>
            </div>
            <p>2.2 อุปกรณ์ประกอบที่รวมอยู่ในสัญญาเช่า:</p>
            <div className="bg-muted/50 rounded-xl p-4 border border-border print:bg-gray-50 my-2">
              <p>{form.droneAccessories || "(ระบุรายการอุปกรณ์)"}</p>
            </div>
            <p>
              2.3 ผู้เช่าจะต้องตรวจรับทรัพย์สินที่เช่าและอุปกรณ์ประกอบตามบัญชีรายการ (Checklist)
              ณ วันส่งมอบ โดยลงนามในใบรับมอบทรัพย์สิน (Delivery Acceptance Form) ร่วมกันทั้งสองฝ่าย
            </p>
            <p>
              2.4 ทรัพย์สินที่เช่าทั้งหมดเป็นกรรมสิทธิ์ของผู้ให้เช่า ผู้เช่าไม่มีสิทธิ์นำไปจำหน่าย จำนอง โอน
              หรือให้บุคคลอื่นใช้งานโดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรจากผู้ให้เช่า
            </p>
          </ContractSection>

          {/* ── Section 3: ระยะเวลาเช่า ────────────────────────────────── */}
          <ContractSection number="3" title="ระยะเวลาการเช่า" icon={Calendar}>
            <p>
              3.1 สัญญาเช่ามีระยะเวลา <strong>{form.rentalTermMonths || "___"} เดือน</strong>{" "}
              เริ่มตั้งแต่ {formatThaiDate(form.rentalStartDate)}{" "}
              ถึง {formatThaiDate(form.rentalEndDate)}
            </p>
            <p>
              3.2 กรณีผู้เช่ามีความประสงค์จะต่ออายุสัญญา ให้แจ้งผู้ให้เช่าเป็นลายลักษณ์อักษร
              ล่วงหน้าไม่น้อยกว่า 60 (หกสิบ) วัน ก่อนสัญญาสิ้นสุด
              ทั้งนี้การต่ออายุสัญญาต้องได้รับความเห็นชอบจากทั้งสองฝ่าย
            </p>
            <p>
              3.3 หากสัญญาครบกำหนดแล้วผู้เช่ายังไม่ส่งมอบทรัพย์สินที่เช่าคืน
              ผู้เช่าจะต้องชำระค่าเช่าในอัตราที่กำหนดไว้ในสัญญานี้ต่อไปจนกว่าจะส่งมอบคืนเรียบร้อย
              พร้อมทั้งค่าปรับในอัตราร้อยละ 0.1 (ศูนย์จุดหนึ่ง) ของค่าเช่ารายเดือน ต่อวัน
            </p>
          </ContractSection>

          {/* ── Section 4: ค่าเช่าและการชำระเงิน ──────────────────────── */}
          <ContractSection number="4" title="ค่าเช่าและการชำระเงิน" icon={FileText}>
            <p>4.1 ค่าเช่าและค่าใช้จ่ายมีรายละเอียดดังนี้:</p>
            <div className="bg-muted/50 rounded-xl p-4 border border-border print:bg-gray-50 my-2">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 text-muted-foreground">ค่าเช่ารายเดือน</td>
                    <td className="py-2 text-right font-semibold">{form.monthlyRentalFee || "___"} บาท/เดือน</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 text-muted-foreground">ค่า Setup/Onboarding (ชำระครั้งเดียว)</td>
                    <td className="py-2 text-right font-semibold">{form.setupFee || "___"} บาท</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 text-muted-foreground">เงินประกันการเช่า ({form.depositMonths || "___"} เดือน)</td>
                    <td className="py-2 text-right font-semibold">{form.depositAmount || "___"} บาท</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 text-muted-foreground">แพ็กเกจบริการ</td>
                    <td className="py-2 text-right font-semibold">{form.packageType}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">มูลค่าสัญญารวม</td>
                    <td className="py-2 text-right font-bold text-primary print:text-black">{form.totalContractValue || "___"} บาท</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic">* ค่าเช่ารายเดือนรวมเบี้ยประกันภัยชั้น 1 และค่าบริการ Insurance Admin แล้ว</p>

            <p>
              4.2 ผู้เช่าจะต้องชำระค่าเช่ารายเดือนภายในวันที่ <strong>{form.paymentDueDay || "___"}</strong> ของทุกเดือน
              โดยโอนเข้าบัญชีธนาคารของผู้ให้เช่าตามที่ระบุไว้ในเอกสารแนบ หรือตามวิธีการที่ผู้ให้เช่ากำหนด
            </p>
            <p>
              4.3 กรณีหน่วยงานภาครัฐ การชำระเงินจะดำเนินการตามระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้าง
              และการบริหารพัสดุภาครัฐ พ.ศ. 2560 และที่แก้ไขเพิ่มเติม
            </p>
            <p>
              4.4 ผู้ให้เช่าจะออกใบแจ้งหนี้ (Invoice) ให้แก่ผู้เช่าล่วงหน้าไม่น้อยกว่า 15 (สิบห้า) วัน
              ก่อนวันครบกำหนดชำระ พร้อมใบกำกับภาษี/ใบเสร็จรับเงินตามที่กฎหมายกำหนด
            </p>
            <p>
              4.5 กรณีชำระล่าช้า ผู้เช่าจะต้องชำระดอกเบี้ยในอัตราร้อยละ 7.5 (เจ็ดจุดห้า) ต่อปี
              ของจำนวนเงินที่ค้างชำระ นับแต่วันที่ครบกำหนดจนถึงวันที่ชำระเสร็จสิ้น
              ทั้งนี้ สำหรับหน่วยงานภาครัฐ ให้เป็นไปตามระเบียบที่เกี่ยวข้อง
            </p>
            <p>
              4.6 เงินประกันการเช่าจำนวน <strong>{form.depositAmount || "___"} บาท</strong>{" "}
              ผู้ให้เช่าจะคืนให้ผู้เช่าภายใน 30 (สามสิบ) วัน
              นับจากวันที่ผู้เช่าส่งมอบทรัพย์สินที่เช่าคืนในสภาพเรียบร้อย
              หลังหักค่าเสียหาย (ถ้ามี) ที่เกินกว่าการสึกหรอตามปกติ
            </p>
          </ContractSection>

          {/* ── Section 5: ประกันภัย ────────────────────────────────────── */}
          <ContractSection number="5" title="การประกันภัย" icon={Shield}>
            <p>5.1 ผู้ให้เช่าจะจัดทำประกันภัยสำหรับทรัพย์สินที่เช่า โดยมีรายละเอียดดังนี้:</p>
            <div className="bg-muted/50 rounded-xl p-4 border border-border print:bg-gray-50 my-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <div><span className="text-muted-foreground">ประเภทประกัน:</span> <strong>{form.insuranceType || "___"}</strong></div>
                <div><span className="text-muted-foreground">เลขที่กรมธรรม์:</span> <strong>{form.insurancePolicyNo || "(จะแจ้งภายหลัง)"}</strong></div>
                <div className="col-span-1 md:col-span-2"><span className="text-muted-foreground">ความคุ้มครอง:</span> <strong>{form.insuranceCoverage || "___"}</strong></div>
                <div><span className="text-muted-foreground">ค่าเสียหายส่วนแรก (Deductible):</span> <strong>{form.deductibleAmount || "___"} บาท/ครั้ง</strong></div>
              </div>
            </div>
            <p>
              5.2 ค่าเบี้ยประกันภัยรวมอยู่ในค่าเช่ารายเดือนแล้ว ผู้เช่าไม่ต้องจ่ายเพิ่มเติม
              ยกเว้นค่าเสียหายส่วนแรก (Deductible) ตามที่ระบุในกรมธรรม์
            </p>
            <p>
              5.3 กรณีเกิดเหตุให้ทรัพย์สินที่เช่าเสียหายหรือสูญหาย ผู้เช่าต้องแจ้งผู้ให้เช่าทันที
              ภายใน 24 ชั่วโมง พร้อมทำรายงานเหตุการณ์เป็นลายลักษณ์อักษร
              และให้ความร่วมมือในการดำเนินเรื่องเคลมประกัน
            </p>
            <p>
              5.4 ความเสียหายที่เกิดจากการใช้งานโดยจงใจหรือประมาทเลินเล่ออย่างร้ายแรง
              หรือการใช้งานผิดวัตถุประสงค์ตามสัญญา จะไม่อยู่ในความคุ้มครองของประกันภัย
              และผู้เช่าจะต้องรับผิดชอบค่าเสียหายเต็มจำนวน
            </p>
            <p>
              5.5 ค่าเสียหายส่วนแรก (Deductible) จำนวน <strong>{form.deductibleAmount || "___"} บาท/ครั้ง</strong>{" "}
              เป็นความรับผิดชอบของผู้เช่า โดยผู้ให้เช่าจะเรียกเก็บเมื่อมีการเคลมประกันแต่ละครั้ง
            </p>
          </ContractSection>

          {/* ── Section 6: การบำรุงรักษาและ SLA ─────────────────────────── */}
          <ContractSection number="6" title="การบำรุงรักษาและระดับบริการ (SLA)" icon={Wrench}>
            <p>6.1 แพ็กเกจบริการ: <strong>{form.packageType}</strong></p>
            <p>6.2 ระดับบริการ (Service Level Agreement) มีรายละเอียดดังนี้:</p>
            <div className="bg-muted/50 rounded-xl p-4 border border-border print:bg-gray-50 my-2">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">ระยะเวลาตอบรับเคส (Response Time)</span>
                  <strong>{form.slaResponseTime || "___"}</strong>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">ระยะเวลาแก้ไข/ซ่อม (Resolution Time)</span>
                  <strong>{form.slaResolutionTime || "___"}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">กำหนดการ PM (Preventive Maintenance)</span>
                  <strong>{form.pmSchedule || "___"}</strong>
                </div>
              </div>
            </div>
            <p>
              6.3 ผู้ให้เช่ามีหน้าที่ดำเนินการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance - PM)
              ตามกำหนดการข้างต้น โดยไม่คิดค่าใช้จ่ายเพิ่มเติม
            </p>
            <p>
              6.4 กรณีทรัพย์สินที่เช่าขัดข้อง ชำรุด หรือไม่สามารถใช้งานได้ ผู้เช่าจะต้องแจ้งผู้ให้เช่าผ่านช่องทาง
              ที่กำหนด (โทรศัพท์ / LINE OA / อีเมล) โดยผู้ให้เช่าจะดำเนินการตอบรับเคสและแก้ไขภายใน
              ระยะเวลาที่กำหนดตาม SLA
            </p>
            <p>
              6.5 กรณีแพ็กเกจ Rent Pro / Rent Managed: หากการซ่อมต้องใช้เวลาเกินกว่า SLA ที่กำหนด
              ผู้ให้เช่าจะจัดหาเครื่องสำรอง (Backup Unit) ให้ผู้เช่าใช้งานระหว่างรอซ่อม
              ตามเงื่อนไขที่ระบุไว้ในข้อตกลง SLA
            </p>
            <p>
              6.6 กรณีแพ็กเกจ Rent Managed: ผู้ให้เช่าจะจัดส่งรายงานสรุปสถานะเครื่อง
              ประวัติการบำรุงรักษา และชั่วโมงการบินให้แก่ผู้เช่าเป็นรายเดือน
            </p>
            <p>
              6.7 การบำรุงรักษาไม่รวมถึงความเสียหายที่เกิดจากการใช้งานผิดวัตถุประสงค์
              อุบัติเหตุจากความประมาทเลินเล่ออย่างร้ายแรง ภัยธรรมชาติรุนแรง
              หรือการแก้ไข/ดัดแปลงโดยไม่ได้รับอนุญาตจากผู้ให้เช่า
            </p>
          </ContractSection>

          {/* ── Section 7: หน้าที่ผู้เช่า ───────────────────────────────── */}
          <ContractSection number="7" title="หน้าที่และความรับผิดชอบของผู้เช่า" icon={User}>
            <p>ผู้เช่ามีหน้าที่และความรับผิดชอบดังต่อไปนี้:</p>
            <p>
              7.1 ใช้ทรัพย์สินที่เช่าตามวัตถุประสงค์ที่ระบุในสัญญาเท่านั้น
              และปฏิบัติตามคู่มือการใช้งานของผู้ผลิตอย่างเคร่งครัด
            </p>
            <p>
              7.2 จัดให้มีผู้ควบคุมอากาศยาน (นักบินโดรน) ที่มีความรู้ความสามารถ
              และได้รับการอบรมจากผู้ให้เช่าหรือมีใบอนุญาตที่เกี่ยวข้องตามที่กฎหมายกำหนด
            </p>
            <p>
              7.3 ปฏิบัติตามกฎหมาย ระเบียบ และข้อบังคับที่เกี่ยวข้องกับการบินอากาศยานไร้คนขับ
              รวมถึงการขออนุญาตบินจากสำนักงานการบินพลเรือนแห่งประเทศไทย (กพท.) ตามที่กฎหมายกำหนด
            </p>
            <p>
              7.4 ดูแลรักษาทรัพย์สินที่เช่าในสภาพดี ไม่แก้ไข ดัดแปลง หรือถอดชิ้นส่วนใดๆ
              โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากผู้ให้เช่า
            </p>
            <p>
              7.5 แจ้งผู้ให้เช่าทันทีเมื่อเกิดเหตุขัดข้อง ชำรุด สูญหาย หรืออุบัติเหตุ
              พร้อมจัดทำรายงานเหตุการณ์ตามแบบฟอร์มที่ผู้ให้เช่ากำหนด
            </p>
            <p>
              7.6 อนุญาตให้ผู้ให้เช่าหรือตัวแทนเข้าตรวจสอบสภาพทรัพย์สินที่เช่า
              และดำเนินการบำรุงรักษาตามกำหนด PM โดยผู้เช่าจะต้องอำนวยความสะดวกตามสมควร
            </p>
            <p>
              7.7 ไม่นำทรัพย์สินที่เช่าออกนอกประเทศไทย
              เว้นแต่ได้รับความยินยอมเป็นลายลักษณ์อักษรจากผู้ให้เช่า
            </p>
            <p>
              7.8 จัดให้มีผู้รับผิดชอบดูแลทรัพย์สินที่เช่า (Asset Custodian)
              และแจ้งรายชื่อให้ผู้ให้เช่าทราบ
            </p>
          </ContractSection>

          {/* ── Section 8: หน้าที่ผู้ให้เช่า ────────────────────────────── */}
          <ContractSection number="8" title="หน้าที่และความรับผิดชอบของผู้ให้เช่า" icon={Building2}>
            <p>ผู้ให้เช่ามีหน้าที่และความรับผิดชอบดังต่อไปนี้:</p>
            <p>
              8.1 ส่งมอบทรัพย์สินที่เช่าในสภาพพร้อมใช้งาน ณ สถานที่ที่ตกลงกัน
              พร้อมทั้งจัดอบรมการใช้งาน (Training) และจัดทำ SOP (Standard Operating Procedure)
              ให้แก่เจ้าหน้าที่ของผู้เช่า
            </p>
            <p>
              8.2 จัดทำประกันภัยชั้น 1 สำหรับทรัพย์สินที่เช่าตลอดอายุสัญญา
              และดำเนินการต่ออายุประกันภัยตามกำหนด
            </p>
            <p>
              8.3 ดำเนินการบำรุงรักษาเชิงป้องกัน (PM) และแก้ไขปัญหาตาม SLA ที่กำหนด
            </p>
            <p>
              8.4 ให้การสนับสนุนทางเทคนิค (Technical Support) ตามช่องทางและเวลาที่กำหนดในแพ็กเกจ
            </p>
            <p>
              8.5 จัดหาอะไหล่ทดแทนและดำเนินการซ่อมแซมตามระยะเวลาที่กำหนดใน SLA
            </p>
            <p>
              8.6 จัดทำเอกสารส่งมอบ ใบแจ้งหนี้ ใบกำกับภาษี/ใบเสร็จรับเงิน
              และเอกสารอื่นๆ ตามที่ผู้เช่าร้องขอตามสมควร
              เพื่อประกอบการเบิกจ่ายงบประมาณของหน่วยงานภาครัฐ
            </p>
            <p>
              8.7 กรณีแพ็กเกจ Rent Managed: จัดส่งรายงานประจำเดือน
              สรุปสถานะเครื่อง ประวัติ PM และสถิติการใช้งาน
            </p>
          </ContractSection>

          {/* ── Section 9: การส่งมอบ ────────────────────────────────────── */}
          <ContractSection number="9" title="การส่งมอบและการตรวจรับ" icon={CheckCircle}>
            <p>
              9.1 ผู้ให้เช่าจะส่งมอบทรัพย์สินที่เช่า ณ สถานที่ที่คู่สัญญาตกลงกัน
              ภายใน 15 (สิบห้า) วันทำการนับจากวันลงนามในสัญญา หรือตามกำหนดที่ตกลงกัน
            </p>
            <p>
              9.2 การส่งมอบจะดำเนินการพร้อมกับ:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>การตรวจสอบสภาพเครื่องและอุปกรณ์ตาม Checklist</li>
              <li>การทดสอบการทำงาน (Function Test)</li>
              <li>การอบรมการใช้งาน (Training) ให้แก่เจ้าหน้าที่ผู้เช่า</li>
              <li>การส่งมอบเอกสาร SOP คู่มือการใช้งาน และ Emergency Procedure</li>
              <li>การลงนามใบรับมอบทรัพย์สิน (Delivery Acceptance Form)</li>
            </ul>
            <p>
              9.3 ผู้เช่ามีเวลาตรวจรับ 7 (เจ็ด) วันทำการ นับจากวันส่งมอบ
              หากไม่แจ้งข้อบกพร่องภายในกำหนด ถือว่ารับมอบเรียบร้อย
            </p>
          </ContractSection>

          {/* ── Section 10: การเลิกสัญญา ───────────────────────────────── */}
          <ContractSection number="10" title="การเลิกสัญญาและการบอกเลิก" icon={Ban}>
            <p>
              10.1 <strong>การเลิกสัญญาโดยผู้ให้เช่า:</strong> ผู้ให้เช่ามีสิทธิ์บอกเลิกสัญญาได้ทันที
              หากผู้เช่ากระทำการอย่างใดอย่างหนึ่งดังต่อไปนี้:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ค้างชำระค่าเช่าเกินกว่า 60 (หกสิบ) วัน โดยไม่แจ้งเหตุอันสมควร</li>
              <li>ใช้ทรัพย์สินที่เช่าผิดวัตถุประสงค์ตามสัญญา หรือในทางที่ผิดกฎหมาย</li>
              <li>นำทรัพย์สินที่เช่าไปจำหน่าย จำนอง โอน หรือให้เช่าช่วง โดยไม่ได้รับอนุญาต</li>
              <li>ทำให้ทรัพย์สินที่เช่าเสียหายโดยจงใจหรือประมาทเลินเล่ออย่างร้ายแรง</li>
              <li>ฝ่าฝืนข้อกำหนดและเงื่อนไขในสัญญาอย่างมีนัยสำคัญ</li>
            </ul>
            <p>
              10.2 <strong>การเลิกสัญญาโดยผู้เช่า:</strong> ผู้เช่ามีสิทธิ์บอกเลิกสัญญาก่อนกำหนดได้
              โดยต้องแจ้งเป็นลายลักษณ์อักษรล่วงหน้าไม่น้อยกว่า 90 (เก้าสิบ) วัน
              และจะต้องชำระค่าเช่าที่เหลือตามสัญญา หรือค่าปรับเลิกสัญญาก่อนกำหนด
              เท่ากับค่าเช่า 3 (สาม) เดือน แล้วแต่จำนวนใดจะน้อยกว่า
            </p>
            <p>
              10.3 <strong>สำหรับหน่วยงานภาครัฐ:</strong> การเลิกสัญญาให้เป็นไปตาม
              พระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560
              และระเบียบกระทรวงการคลังที่เกี่ยวข้อง
            </p>
            <p>
              10.4 เมื่อสัญญาสิ้นสุดหรือถูกเลิกไม่ว่าด้วยเหตุใด ผู้เช่าจะต้องส่งมอบทรัพย์สินที่เช่าคืน
              แก่ผู้ให้เช่าในสภาพเรียบร้อย (สึกหรอตามปกติจากการใช้งานเป็นที่ยอมรับ)
              ภายใน 15 (สิบห้า) วัน นับจากวันที่สัญญาสิ้นสุด
            </p>
          </ContractSection>

          {/* ── Section 11: การรักษาความลับ ─────────────────────────────── */}
          <ContractSection number="11" title="การรักษาความลับ" icon={Shield}>
            <p>
              11.1 คู่สัญญาทั้งสองฝ่ายตกลงจะรักษาข้อมูลที่ได้รับจากอีกฝ่ายหนึ่ง
              อันเกี่ยวเนื่องกับสัญญานี้เป็นความลับ ไม่เปิดเผยต่อบุคคลภายนอก
              เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษร
              หรือเป็นการเปิดเผยตามที่กฎหมายกำหนด
            </p>
            <p>
              11.2 ข้อมูลการบิน ข้อมูลภาพ และข้อมูลอื่นๆ ที่ได้จากการใช้ทรัพย์สินที่เช่า
              เป็นทรัพย์สินทางปัญญาของผู้เช่า ผู้ให้เช่าจะไม่เข้าถึง ใช้ หรือเปิดเผยข้อมูลดังกล่าว
              โดยไม่ได้รับอนุญาต
            </p>
            <p>
              11.3 ข้อกำหนดเรื่องการรักษาความลับนี้มีผลบังคับต่อไปอีก 2 (สอง) ปี
              หลังจากสัญญาสิ้นสุดลง
            </p>
          </ContractSection>

          {/* ── Section 12: เหตุสุดวิสัย ──────────────────────────────── */}
          <ContractSection number="12" title="เหตุสุดวิสัย (Force Majeure)" icon={AlertTriangle}>
            <p>
              12.1 คู่สัญญาฝ่ายใดฝ่ายหนึ่งไม่ต้องรับผิดในความล่าช้าหรือการไม่สามารถปฏิบัติตามสัญญาได้
              อันเนื่องมาจากเหตุสุดวิสัย เช่น ภัยธรรมชาติ สงคราม จลาจล โรคระบาด การเปลี่ยนแปลงกฎหมาย
              หรือคำสั่งของรัฐบาล ที่อยู่นอกเหนือการควบคุมของฝ่ายนั้น
            </p>
            <p>
              12.2 ฝ่ายที่ประสบเหตุสุดวิสัยจะต้องแจ้งอีกฝ่ายหนึ่งเป็นลายลักษณ์อักษร
              ภายใน 7 (เจ็ด) วัน นับจากวันที่เกิดเหตุ พร้อมหลักฐานประกอบ
            </p>
            <p>
              12.3 หากเหตุสุดวิสัยดำเนินต่อเนื่องเกินกว่า 90 (เก้าสิบ) วัน คู่สัญญาฝ่ายใดฝ่ายหนึ่ง
              มีสิทธิ์บอกเลิกสัญญาได้โดยไม่ถือเป็นการผิดสัญญา
            </p>
          </ContractSection>

          {/* ── Section 13: ข้อกำหนดพิเศษสำหรับภาครัฐ ──────────────────── */}
          <ContractSection number="13" title="ข้อกำหนดพิเศษสำหรับหน่วยงานภาครัฐ" icon={Building2}>
            <p>
              13.1 สัญญานี้จัดทำขึ้นตามพระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560
              และระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560
              และที่แก้ไขเพิ่มเติม
            </p>
            <p>
              13.2 ผู้ให้เช่ายินยอมให้หน่วยงานตรวจสอบของรัฐ เช่น สำนักงานการตรวจเงินแผ่นดิน (สตง.)
              เข้าตรวจสอบเอกสารและข้อมูลที่เกี่ยวข้องกับสัญญานี้ได้
            </p>
            <p>
              13.3 ผู้ให้เช่าจะจัดทำเอกสารประกอบการเบิกจ่ายงบประมาณตามที่ระเบียบราชการกำหนด
              รวมถึงแต่ไม่จำกัดเพียง:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ใบแจ้งหนี้ / Invoice</li>
              <li>ใบกำกับภาษี / Tax Invoice</li>
              <li>ใบเสร็จรับเงิน</li>
              <li>หนังสือรับรองการหักภาษี ณ ที่จ่าย</li>
              <li>รายงานผลการปฏิบัติงาน / รายงานการส่งมอบงาน</li>
              <li>เอกสารอื่นๆ ตามที่ผู้เช่าร้องขอตามสมควร</li>
            </ul>
            <p>
              13.4 กรณีมีการหักภาษี ณ ที่จ่าย ให้เป็นไปตามประมวลรัษฎากร
              โดยผู้เช่ามีหน้าที่หักภาษี ณ ที่จ่ายตามอัตราที่กฎหมายกำหนด
              และออกหนังสือรับรองการหักภาษี ณ ที่จ่ายให้แก่ผู้ให้เช่า
            </p>
            <p>
              13.5 หลักประกันสัญญา (ถ้ามี) ให้เป็นไปตามระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้าง
              และการบริหารพัสดุภาครัฐ พ.ศ. 2560 ข้อ 168
            </p>
          </ContractSection>

          {/* ── Section 14: ความรับผิด ──────────────────────────────────── */}
          <ContractSection number="14" title="ข้อจำกัดความรับผิด" icon={Scale}>
            <p>
              14.1 ความรับผิดรวมสูงสุดของผู้ให้เช่าภายใต้สัญญานี้
              ไม่เกินมูลค่าสัญญารวม (Total Contract Value) ที่ระบุในข้อ 4.1
            </p>
            <p>
              14.2 ผู้ให้เช่าไม่รับผิดชอบต่อความเสียหายอันเป็นผลสืบเนื่อง (Consequential Damages)
              ความเสียหายทางอ้อม หรือการสูญเสียรายได้ของผู้เช่า
              อันเกิดจากการใช้หรือไม่สามารถใช้ทรัพย์สินที่เช่าได้
            </p>
            <p>
              14.3 ผู้เช่ารับผิดชอบต่อความเสียหายที่เกิดกับบุคคลภายนอก
              อันเนื่องมาจากการใช้ทรัพย์สินที่เช่าโดยเจ้าหน้าที่ของผู้เช่า
              ทั้งนี้ ภายใต้ความคุ้มครองของกรมธรรม์ประกันภัยที่ผู้ให้เช่าจัดทำไว้
            </p>
          </ContractSection>

          {/* ── Section 15: การระงับข้อพิพาท ────────────────────────────── */}
          <ContractSection number="15" title="การระงับข้อพิพาท" icon={Scale}>
            <p>
              15.1 ข้อพิพาทใดๆ ที่เกิดขึ้นจากสัญญานี้ คู่สัญญาจะใช้ความพยายามในการเจรจาไกล่เกลี่ย
              ระหว่างกันก่อน ภายในระยะเวลา 30 (สามสิบ) วัน นับจากวันที่แจ้งข้อพิพาท
            </p>
            <p>
              15.2 หากไม่สามารถตกลงกันได้ ให้ใช้อนุญาโตตุลาการตามข้อบังคับสถาบันอนุญาโตตุลาการ
              สำนักงานศาลยุติธรรม หรือนำคดีเสนอต่อศาลที่มีเขตอำนาจ
            </p>
            <p>
              15.3 สัญญานี้อยู่ภายใต้บังคับของกฎหมายไทย
            </p>
          </ContractSection>

          {/* ── Section 16: ข้อกำหนดทั่วไป ──────────────────────────────── */}
          <ContractSection number="16" title="ข้อกำหนดทั่วไป" icon={BookOpen}>
            <p>
              16.1 สัญญานี้รวมถึงเอกสารแนบท้าย (ถ้ามี) ถือเป็นส่วนหนึ่งของสัญญา
              และมีผลผูกพันคู่สัญญาทั้งสองฝ่าย
            </p>
            <p>
              16.2 การแก้ไขเพิ่มเติมสัญญาจะต้องทำเป็นลายลักษณ์อักษร
              และลงนามโดยผู้มีอำนาจของทั้งสองฝ่าย
            </p>
            <p>
              16.3 การที่ฝ่ายหนึ่งฝ่ายใดไม่ได้ใช้สิทธิ์ตามสัญญาข้อใดข้อหนึ่ง
              ไม่ถือว่าเป็นการสละสิทธิ์ในข้อนั้น
            </p>
            <p>
              16.4 หากข้อกำหนดใดในสัญญานี้ไม่สมบูรณ์หรือใช้บังคับไม่ได้
              ข้อกำหนดอื่นยังคงมีผลบังคับใช้ต่อไป
            </p>
            <p>
              16.5 การแจ้ง ติดต่อ หรือส่งเอกสารใดๆ ตามสัญญานี้ ให้ส่งไปยังที่อยู่ของคู่สัญญา
              ตามที่ระบุในสัญญา หรือที่อยู่ที่แจ้งเปลี่ยนแปลงเป็นลายลักษณ์อักษร
            </p>
            <p>
              16.6 สัญญานี้จัดทำขึ้นเป็นสองฉบับ มีข้อความถูกต้องตรงกัน
              คู่สัญญาแต่ละฝ่ายเก็บรักษาไว้ฝ่ายละหนึ่งฉบับ
            </p>
          </ContractSection>

          {/* ═══════════════════════════════════════════════════════════════
              SIGNATURE SECTION
              ═══════════════════════════════════════════════════════════════ */}
          <div className="mt-12 pt-8 border-t-2 border-primary/30 print:border-gray-400">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground print:text-gray-600 italic">
                คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อกำหนดและเงื่อนไขทั้งหมดแล้ว
                จึงได้ลงลายมือชื่อไว้เป็นหลักฐาน
              </p>
            </div>

            {/* Agreement checkbox */}
            <div className="mb-8 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 print:hidden">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-primary rounded"
                />
                <span className="text-sm text-foreground">
                  ข้าพเจ้าได้อ่าน ทำความเข้าใจ และยอมรับข้อกำหนดและเงื่อนไขทั้งหมดในสัญญาเช่าอากาศยานไร้คนขับ (โดรน) ฉบับนี้
                  รวมถึงเอกสารแนบท้าย (ถ้ามี) ทุกประการ
                  และยินยอมลงนามในสัญญาฉบับนี้โดยสมัครใจ
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ผู้ให้เช่า */}
              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-center border-b border-border pb-2">
                  ฝ่ายผู้ให้เช่า (Lessor)
                </h4>
                <div className="print:hidden">
                  <SignatureCanvas
                    label="ลายเซ็นผู้ให้เช่า"
                    onSave={setLessorSignature}
                    savedSignature={lessorSignature}
                    onClear={() => setLessorSignature(null)}
                  />
                </div>
                <div className="hidden print:block text-center py-8">
                  {lessorSignature ? (
                    <img src={lessorSignature} alt="ลายเซ็นผู้ให้เช่า" className="h-16 mx-auto" />
                  ) : (
                    <div className="border-b border-gray-400 w-48 mx-auto mb-2" />
                  )}
                </div>
                <div className="text-center text-sm space-y-1">
                  <p className="font-medium">ลงชื่อ .............................................</p>
                  <p>({form.lessorRepresentative || "_______________"})</p>
                  <p className="text-muted-foreground print:text-gray-600">
                    ตำแหน่ง: {form.lessorPosition || "_______________"}
                  </p>
                  <p className="text-muted-foreground print:text-gray-600">
                    {form.lessorName || "_______________"}
                  </p>
                  <p className="text-muted-foreground print:text-gray-600">
                    วันที่: {formatThaiDate(form.contractDate)}
                  </p>
                </div>

                {/* พยาน 1 */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="print:hidden">
                    <SignatureCanvas
                      label="ลายเซ็นพยาน (ฝ่ายผู้ให้เช่า)"
                      onSave={setWitness1Signature}
                      savedSignature={witness1Signature}
                      onClear={() => setWitness1Signature(null)}
                    />
                  </div>
                  <div className="hidden print:block text-center py-6">
                    {witness1Signature ? (
                      <img src={witness1Signature} alt="ลายเซ็นพยาน 1" className="h-14 mx-auto" />
                    ) : (
                      <div className="border-b border-gray-400 w-40 mx-auto mb-2" />
                    )}
                  </div>
                  <div className="text-center text-sm space-y-1">
                    <p className="font-medium">ลงชื่อ ............................... พยาน</p>
                    <p>({form.witness1Name || "_______________"})</p>
                    <p className="text-muted-foreground print:text-gray-600">
                      ตำแหน่ง: {form.witness1Position || "_______________"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ผู้เช่า */}
              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-center border-b border-border pb-2">
                  ฝ่ายผู้เช่า (Lessee)
                </h4>
                <div className="print:hidden">
                  <SignatureCanvas
                    label="ลายเซ็นผู้เช่า"
                    onSave={setLesseeSignature}
                    savedSignature={lesseeSignature}
                    onClear={() => setLesseeSignature(null)}
                  />
                </div>
                <div className="hidden print:block text-center py-8">
                  {lesseeSignature ? (
                    <img src={lesseeSignature} alt="ลายเซ็นผู้เช่า" className="h-16 mx-auto" />
                  ) : (
                    <div className="border-b border-gray-400 w-48 mx-auto mb-2" />
                  )}
                </div>
                <div className="text-center text-sm space-y-1">
                  <p className="font-medium">ลงชื่อ .............................................</p>
                  <p>({form.lesseeRepresentative || "_______________"})</p>
                  <p className="text-muted-foreground print:text-gray-600">
                    ตำแหน่ง: {form.lesseePosition || "_______________"}
                  </p>
                  <p className="text-muted-foreground print:text-gray-600">
                    {form.lesseeName || "_______________"}
                  </p>
                  <p className="text-muted-foreground print:text-gray-600">
                    วันที่: {formatThaiDate(form.contractDate)}
                  </p>
                </div>

                {/* พยาน 2 */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="print:hidden">
                    <SignatureCanvas
                      label="ลายเซ็นพยาน (ฝ่ายผู้เช่า)"
                      onSave={setWitness2Signature}
                      savedSignature={witness2Signature}
                      onClear={() => setWitness2Signature(null)}
                    />
                  </div>
                  <div className="hidden print:block text-center py-6">
                    {witness2Signature ? (
                      <img src={witness2Signature} alt="ลายเซ็นพยาน 2" className="h-14 mx-auto" />
                    ) : (
                      <div className="border-b border-gray-400 w-40 mx-auto mb-2" />
                    )}
                  </div>
                  <div className="text-center text-sm space-y-1">
                    <p className="font-medium">ลงชื่อ ............................... พยาน</p>
                    <p>({form.witness2Name || "_______________"})</p>
                    <p className="text-muted-foreground print:text-gray-600">
                      ตำแหน่ง: {form.witness2Position || "_______________"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Banner */}
            {allSigned && (
              <div className="mt-8 rounded-xl bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700 p-6 text-center print:bg-green-50 print:border-green-400">
                <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-green-800 dark:text-green-300">
                  สัญญาได้รับการลงนามครบถ้วนแล้ว
                </h3>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  เลขที่สัญญา: {form.contractNumber} | วันที่: {formatThaiDate(form.contractDate)}
                </p>
              </div>
            )}
          </div>

          {/* ── Footer / Stamp ──────────────────────────────────────────── */}
          <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted-foreground print:text-gray-500">
            <p>
              สัญญาเช่าอากาศยานไร้คนขับ (โดรน) เลขที่ {form.contractNumber || "___"} |{" "}
              {form.lessorName} | หน้า 1/{" "}1
            </p>
            <p className="mt-1">
              เอกสารนี้จัดทำขึ้นโดยระบบ Secure Flight Systems | www.dji13store.com
            </p>
          </div>
        </div>

        {/* ── Action Buttons (non-print) ─────────────────────────────── */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
          <button onClick={handlePrint} className="btn-hero-primary">
            <Printer className="w-4 h-4 mr-1 inline" />
            พิมพ์สัญญา / บันทึกเป็น PDF
          </button>
          <button
            onClick={() => {
              toast.success("บันทึกร่างสัญญาเรียบร้อย", {
                description: "สามารถกลับมาแก้ไขได้ภายหลัง",
              });
            }}
            className="btn-hero-secondary"
          >
            <Download className="w-4 h-4 mr-1 inline" />
            บันทึกร่างสัญญา
          </button>
        </div>
      </div>

      <Footer />

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            font-size: 11pt;
            line-height: 1.4;
            color: #000;
            background: #fff;
          }
          .print\\:hidden {
            display: none !important;
          }
          .hidden.print\\:block {
            display: block !important;
          }
          nav, footer, .print\\:hidden {
            display: none !important;
          }
          @page {
            margin: 1.5cm;
            size: A4;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
