
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FooterCTA({ onCTAClick }) {
  return (
    <footer className="bg-gradient-to-b from-[#0a0e27] to-black text-white">
      {/* Final CTA Section */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                מהרעיון למוצר -
                <br />
                <span className="text-[#FDB913]">הדרך שלך לייצור המוני מתחילה כאן</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                צוות וויסלרייט מחכה לך לפגישת ייעוץ ללא עלות
              </p>
              <Button
                size="lg"
                onClick={onCTAClick}
                className="bg-gradient-to-l from-[#FDB913] to-[#f5a623] hover:from-[#f5a623] hover:to-[#FDB913] text-[#0a0e27] px-12 py-7 text-xl rounded-2xl shadow-2xl font-bold"
              >
                השאירו פרטים לפגישת ייעוץ חינם
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Brand */}
              <div className="text-right">
                <div className="flex items-center justify-end mb-6">
                  <img
                    src="/images/logo.png"
                    alt="WeCcelerate - וויסלרייט"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-lg">
                  ליווי יזמים מפיתוח ועד ייצור
                </p>
              </div>

              {/* Contact */}
              <div className="text-right md:text-left">
                <h3 className="font-bold text-xl mb-4 text-[#FDB913]">צרו קשר</h3>
                <div className="space-y-2 text-gray-400">
                  <p className="text-lg" dir="ltr">טלפון: 055-564-7538</p>
                  <p className="text-lg">מייל: lioz@weccelerate.co.il</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
              <p className="text-center md:text-right">
                © 2025 WeCcelerate (וויסלרייט). כל הזכויות שמורות.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-[#FDB913] transition-colors">מדיניות פרטיות</a>
                <a href="#" className="hover:text-[#FDB913] transition-colors">תנאי שימוש</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
