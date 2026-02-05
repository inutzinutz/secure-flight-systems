import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { FlyingDrone } from "@/components/icons/DroneIcon";

const provinces = [
  "กรุงเทพมหานคร", "นนทบุรี", "ปทุมธานี", "สมุทรปราการ", "เชียงใหม่", "ขอนแก่น", 
  "นครราชสีมา", "ภูเก็ต", "สงขลา", "ชลบุรี", "อื่นๆ"
];

const urgencyLevels = [
  { value: "asap", label: "เร่งด่วน (ภายใน 1 สัปดาห์)" },
  { value: "1month", label: "ภายใน 1 เดือน" },
  { value: "3months", label: "ภายใน 3 เดือน" },
  { value: "exploring", label: "กำลังศึกษาข้อมูล" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pillars, setPillars] = useState<string[]>([]);

  const handlePillarChange = (pillar: string, checked: boolean) => {
    if (checked) {
      setPillars([...pillars, pillar]);
    } else {
      setPillars(pillars.filter((p) => p !== pillar));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("ส่งข้อมูลเรียบร้อยแล้ว", {
      description: "ทีมงานจะติดต่อกลับภายใน 1 วันทำการ",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Drones */}
      <FlyingDrone
        className="w-10 h-10"
        pathX={[80, 250, 420, 300, 120, 80]}
        pathY={[100, 140, 90, 160, 120, 100]}
        rotation={[0, 8, -6, 10, -4, 0]}
        duration={18}
        color="text-primary/20"
      />
      <FlyingDrone
        className="w-8 h-8"
        pathX={[380, 200, 50, 180, 350, 380]}
        pathY={[200, 160, 190, 240, 180, 200]}
        rotation={[0, -8, 10, -8, 6, 0]}
        duration={15}
        delay={5}
        color="text-blue-500/20"
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                นัดคุยกับทีมผู้เชี่ยวชาญ
              </h1>
              <p className="text-xl text-muted-foreground">
                Workshop / Site Survey / Demo / ขอใบเสนอราคา
                <br />
                กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 1 วันทำการ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">ติดต่อเรา</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-foreground font-medium">สำนักงาน</p>
                        <p className="text-sm text-muted-foreground">กรุงเทพมหานคร, ประเทศไทย</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-foreground font-medium">โทรศัพท์</p>
                        <p className="text-sm text-muted-foreground">02-XXX-XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-foreground font-medium">อีเมล</p>
                        <p className="text-sm text-muted-foreground">contact@dji13store.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h4 className="font-semibold text-foreground mb-3">เราทำอะไรได้บ้าง?</h4>
                  <ul className="space-y-2">
                    {["จัด Workshop กับทีมของคุณ", "Survey พื้นที่และออกแบบ Solution", "Demo ระบบและอุปกรณ์จริง", "จัดทำใบเสนอราคา TOR-ready"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-card border border-border/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                      <Input id="name" required placeholder="ชื่อของคุณ" />
                    </div>

                    {/* Position */}
                    <div className="space-y-2">
                      <Label htmlFor="position">ตำแหน่ง</Label>
                      <Input id="position" placeholder="ตำแหน่งของคุณ" />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <Label htmlFor="organization">หน่วยงาน/องค์กร *</Label>
                      <Input id="organization" required placeholder="ชื่อหน่วยงาน" />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">โทรศัพท์ *</Label>
                      <Input id="phone" type="tel" required placeholder="08X-XXX-XXXX" />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">อีเมล *</Label>
                      <Input id="email" type="email" required placeholder="email@organization.go.th" />
                    </div>

                    {/* Province */}
                    <div className="space-y-2">
                      <Label htmlFor="province">จังหวัด/พื้นที่</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกจังหวัด" />
                        </SelectTrigger>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province} value={province}>
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pillars */}
                    <div className="md:col-span-2 space-y-2">
                      <Label>สนใจด้านใด (เลือกได้หลายข้อ)</Label>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {[
                          { id: "enterprise", label: "Enterprise (ทีม+กระบวนการ)" },
                          { id: "platform", label: "LM Platform (C2+AI+GIS)" },
                          { id: "altura", label: "Altura VTOL Dock (24/7)" },
                        ].map((pillar) => (
                          <div key={pillar.id} className="flex items-center gap-2">
                            <Checkbox
                              id={pillar.id}
                              checked={pillars.includes(pillar.id)}
                              onCheckedChange={(checked) => handlePillarChange(pillar.id, checked as boolean)}
                            />
                            <label htmlFor={pillar.id} className="text-sm text-foreground cursor-pointer">
                              {pillar.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-2">
                      <Label htmlFor="urgency">ความเร่งด่วน</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกระดับความเร่งด่วน" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label htmlFor="budget">งบประมาณโดยประมาณ</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกช่วงงบประมาณ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under1m">น้อยกว่า 1 ล้านบาท</SelectItem>
                          <SelectItem value="1-5m">1-5 ล้านบาท</SelectItem>
                          <SelectItem value="5-10m">5-10 ล้านบาท</SelectItem>
                          <SelectItem value="over10m">มากกว่า 10 ล้านบาท</SelectItem>
                          <SelectItem value="unknown">ยังไม่ระบุ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Use Case */}
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="usecase">Use Case / ปัญหาที่ต้องการแก้</Label>
                      <Textarea
                        id="usecase"
                        placeholder="อธิบายภารกิจ ปัญหา หรือความต้องการของคุณ..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "กำลังส่ง..."
                    ) : (
                      <>
                        <Send size={18} />
                        ส่งข้อมูล
                      </>
                    )}
                  </Button>
                </motion.form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
