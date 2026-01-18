
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ onCTAClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#0d1235] to-[#0a0e27]">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FDB913] rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FDB913] rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="mb-12 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="WeCcelerate - וויסלרייט"
                className="h-20 md:h-24 w-auto"
              />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              מרעיון למוצר פיזי
              <span className="block mt-2 bg-gradient-to-l from-[#FDB913] to-[#f5a623] bg-clip-text text-transparent">
                דרך מפעלי ייצור
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              אנחנו מקצרים לך את הדרך למוצר -
              <br />
              מוצאים עבורך את המפעל שיפתח וייצר את המוצר שלך
              <br />
              <strong className="text-white">בלי לבזבז חודשים ועלויות פיתוח מיותרות</strong>
            </p>

            {/* Value propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto"
            >
              {[
                { text: "איתור מדויק של מפעלים בעלי ניסיון בתחום שלך" },
                { text: "חיסכון עשרות עד מאות אלפי שקלים בתהליך הפיתוח" },
                { text: "ליווי עסקי והנדסי מלא עד שלב הייצור" },
                { text: "פיתוח אבי טיפוס דרך המפעלים להצגה בפני שותפים ומשקיעים פוטנציאליים" } // Changed from "יצירת" to "פיתוח"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FDB913]/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#FDB913] flex-shrink-0 mt-1" />
                  <p className="text-right text-gray-200 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <Button
                size="lg"
                onClick={onCTAClick}
                className="bg-gradient-to-l from-[#FDB913] to-[#f5a623] hover:from-[#f5a623] hover:to-[#FDB913] text-[#0a0e27] px-12 py-7 text-xl rounded-2xl shadow-2xl hover:shadow-[#FDB913]/50 transition-all duration-300 transform hover:scale-105 font-bold"
              >
                לתיאום פגישת ייעוץ ללא עלות
              </Button>
              <p className="text-sm text-gray-400">ללא התחייבות – נחזור אליך עד 24 שעות</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#FDB913] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
