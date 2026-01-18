import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function CTABanner({ onCTAClick, text = "מוכן להתחיל? השאר פרטים ונחזור אליך", buttonText = "לתיאום פגישת ייעוץ חינם" }) {
  return (
    <div className="bg-gradient-to-l from-[#FDB913] to-[#f5a623] py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-right"
        >
          <p className="text-[#0a0e27] text-xl md:text-2xl font-bold">
            {text}
          </p>
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-[#0a0e27] hover:bg-[#0d1235] text-white px-8 py-6 text-lg rounded-xl shadow-lg font-bold whitespace-nowrap"
          >
            {buttonText}
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
