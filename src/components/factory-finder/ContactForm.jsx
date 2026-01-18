import React, { useState } from "react";
import { factoryLeads } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    product_description: "",
    stage: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase database (if configured)
      try {
        await factoryLeads.create(formData);
      } catch (dbError) {
        console.error("Database save error:", dbError);
        // Continue even if database save fails
      }

      // Send to Make.com webhook
      await fetch("https://hook.eu2.make.com/w5x1tau9x3tki1t18jxu8j9yaj6cjy4q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          phone: formData.phone,
          email: formData.email,
          product_description: formData.product_description,
          stage: formData.stage,
          consent: formData.consent
        })
      });

      setIsSuccess(true);
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        product_description: "",
        stage: "",
        consent: false
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("אירעה שגיאה בשליחת הטופס. אנא נסה שוב.");
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-[#FDB913] to-[#f5a623] p-12 rounded-3xl shadow-2xl text-center border border-[#FDB913]"
            >
              <div className="w-20 h-20 bg-[#0a0e27] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#FDB913]" />
              </div>
              <h3 className="text-3xl font-bold text-[#0a0e27] mb-4">תודה רבה!</h3>
              <p className="text-xl text-[#0a0e27] mb-8 opacity-90">
                הפרטים התקבלו בהצלחה
                <br />
                נחזור אליך תוך 24 שעות
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                variant="outline"
                size="lg"
                className="rounded-xl bg-[#0a0e27] text-[#FDB913] hover:bg-[#0d1235] border-[#0a0e27]"
              >
                שלח פנייה נוספת
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              בואו נתחיל
            </h2>
            <p className="text-xl text-gray-300">השאירו פרטים ונחזור אליכם בהקדם</p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/10">
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-right block text-lg text-white">
                    שם מלא <span className="text-[#FDB913]">*</span>
                  </Label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    className="text-right text-lg py-6 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>

                {/* Phone and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-right block text-lg text-white">
                      טלפון <span className="text-[#FDB913]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="text-right text-lg py-6 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="050-1234567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right block text-lg text-white">
                      אימייל <span className="text-[#FDB913]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-right text-lg py-6 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Product Description */}
                <div className="space-y-2">
                  <Label htmlFor="product_description" className="text-right block text-lg text-white">
                    תיאור קצר של המוצר <span className="text-[#FDB913]">*</span>
                  </Label>
                  <Textarea
                    id="product_description"
                    required
                    value={formData.product_description}
                    onChange={(e) => handleInputChange("product_description", e.target.value)}
                    className="text-right text-lg min-h-32 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="ספר לנו על המוצר שלך..."
                  />
                </div>

                {/* Stage */}
                <div className="space-y-2">
                  <Label htmlFor="stage" className="text-right block text-lg text-white">
                    באיזה שלב אתה נמצא? <span className="text-[#FDB913]">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.stage}
                    onValueChange={(value) => handleInputChange("stage", value)}
                  >
                    <SelectTrigger className="text-right text-lg py-6 rounded-xl bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="בחר שלב" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d1235] border-white/20">
                      <SelectItem value="idea" className="text-white">רעיון</SelectItem>
                      <SelectItem value="prototype" className="text-white">אב-טיפוס</SelectItem>
                      <SelectItem value="pilot" className="text-white">שלב פיילוט</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked)}
                    required
                    className="border-white/20 data-[state=checked]:bg-[#FDB913] data-[state=checked]:border-[#FDB913]"
                  />
                  <Label htmlFor="consent" className="text-right cursor-pointer leading-relaxed text-gray-300">
                    אני מאשר/ת קבלת מידע מוויסלרייט בהתאם למדיניות הפרטיות
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-l from-[#FDB913] to-[#f5a623] hover:from-[#f5a623] hover:to-[#FDB913] text-[#0a0e27] py-7 text-xl rounded-xl shadow-lg font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                      שולח...
                    </>
                  ) : (
                    "שלח פנייה"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}