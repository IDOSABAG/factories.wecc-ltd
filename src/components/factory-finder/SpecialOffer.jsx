
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SpecialOffer({ onCTAClick }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FDB913] via-[#f5a623] to-[#FDB913] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#0a0e27] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0a0e27] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#0a0e27]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-[#0a0e27]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-6 leading-tight">
              רוצה להבין אם אפשר לייצר את המוצר שלך
              <br />
              <span className="text-[#0a0e27] opacity-80">מהר יותר ובעלות נמוכה יותר?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-[#0a0e27] opacity-90 mb-10 leading-relaxed">
              פגישת ייעוץ ראשונית עם צוות וויסלרייט -
              <br />
              <strong>ללא עלות וללא התחייבות</strong>
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={onCTAClick}
                className="bg-[#0a0e27] text-[#FDB913] hover:bg-[#0d1235] px-12 py-7 text-xl rounded-2xl shadow-2xl font-bold"
              >
                קבע פגישת ייעוץ חינם עכשיו
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
