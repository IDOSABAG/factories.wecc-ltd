import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialProof() {
  const logos = [
    { name: "Ontopo" },
    { name: "Monday.com" },
    { name: "Microsoft" },
    { name: "AWS" },
    { name: "לאומית" }
  ];

  return (
    <section className="py-20 bg-[#0d1235]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              עשרות יזמים כבר מצאו את המפעל שלהם
            </h2>
            <p className="text-xl text-gray-300">בעזרת וויסלרייט</p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#FDB913] to-[#f5a623] p-10 md:p-14 rounded-3xl shadow-xl mb-16 border border-[#FDB913]"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-[#0a0e27] opacity-20" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-[#0a0e27] mb-8 leading-relaxed text-right italic font-semibold">
                "תוך שבוע מצאו לי את המפעל המתאים והתחלנו ייצור — חסכו לי חודשים של עבודה!"
              </p>
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="font-bold text-[#0a0e27] text-lg">אורן סלע</p>
                  <p className="text-[#0a0e27] opacity-80">יזם ומייסד סטארטאפ בתחום הציוד הרפואי</p>
                </div>
                <div className="w-16 h-16 bg-[#0a0e27] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#FDB913] font-bold text-2xl">א</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partner logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60"
          >
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-bold text-2xl hover:text-[#FDB913] transition-colors duration-300">
                {logo.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}