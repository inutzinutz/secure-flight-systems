import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "13 STORE ไม่ได้แค่ส่งมอบอุปกรณ์ แต่นั่ง Workshop กับทีมเราตั้งแต่ต้น ออกแบบ Solution ให้ตรงกับ TOR จริงๆ ทำให้โครงการผ่านได้เลย",
    name: "พ.ต.ท. สมศักดิ์ วีรกุล",
    title: "หัวหน้าฝ่ายเทคโนโลยี",
    org: "สถานีตำรวจภูธร ภาค 4",
    type: "government",
    initials: "สว",
  },
  {
    quote:
      "ระบบ UAV AI Platform ที่ติดตั้งทำให้ทีมเราเห็นภาพรวมพื้นที่ได้แบบ Real-time ลดเวลาตอบสนองเหตุลงกว่า 60% เมื่อเทียบกับก่อน",
    name: "วิศวกรอาวุโส ปิยะ เจริญสุข",
    title: "ผู้จัดการโครงการ",
    org: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย",
    type: "enterprise",
    initials: "ปจ",
  },
  {
    quote:
      "DaaS Model ที่ 13 STORE เสนอมาตอบโจทย์มากกว่าการซื้อขาด เพราะมีทีม + แพลตฟอร์ม + MA ครบ ทำให้ฝ่ายจัดซื้ออนุมัติง่ายขึ้นด้วย",
    name: "คุณ อรอนงค์ ทองดี",
    title: "ผู้อำนวยการฝ่ายปฏิบัติการ",
    org: "บริษัทก่อสร้างชั้นนำ",
    type: "enterprise",
    initials: "อท",
  },
  {
    quote:
      "ทีม Support ของ 13 STORE ตอบสนองเร็วมาก ปัญหาที่เกิดระหว่างภารกิจได้รับการแก้ไขภายใน 2 ชั่วโมง ทำให้เราไว้วางใจสำหรับงานด่วน",
    name: "นายกมล สุริยา",
    title: "เจ้าหน้าที่ปฏิบัติการ",
    org: "กรมป้องกันและบรรเทาสาธารณภัย",
    type: "government",
    initials: "กส",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            เสียงจากลูกค้า
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            สิ่งที่ลูกค้าพูดถึงเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ผลลัพธ์จริงจากองค์กรที่ใช้งานระบบของเรา
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/60 shadow-sm">
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-primary/20 mb-6" />

            {/* Quote Text */}
            <motion.p
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic"
            >
              "{testimonials[current].quote}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  testimonials[current].type === "government"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                }`}
              >
                {testimonials[current].initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].title}
                </p>
                <p
                  className={`text-xs font-medium mt-0.5 ${
                    testimonials[current].type === "government"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {testimonials[current].org}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === current
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-border hover:bg-accent hover:border-primary/30 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-border hover:bg-accent hover:border-primary/30 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All testimonials preview (desktop grid) */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-3 rounded-xl text-left transition-all duration-200 border ${
                i === current
                  ? "bg-primary/10 border-primary/30"
                  : "bg-card border-border/50 hover:border-primary/20 hover:bg-accent"
              }`}
            >
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {t.org}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
