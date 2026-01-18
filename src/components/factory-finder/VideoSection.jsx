
import React from "react";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      id: "5wF-bdvQO38",
      title: "עידו מסביר על תהליך הפיתוח"
    },
    {
      id: "gPqBX7b4b0c",
      title: "עידו מדבר על ליווי המוצר"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0d1235] to-[#0a0e27]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <UserCheck className="w-10 h-10 text-[#FDB913]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              פגוש את עידו - סמנכ"ל הפיתוח שלנו
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              עידו מסביר על תהליך הפיתוח והליווי שאנחנו מספקים
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex justify-center"
              >
                <div className="bg-gradient-to-br from-[#FDB913] to-[#f5a623] p-1 rounded-2xl shadow-2xl w-full max-w-[280px]">
                  <div className="bg-[#0a0e27] rounded-[0.9rem] overflow-hidden">
                    {/* Video embed - 9:16 ratio for YouTube Shorts */}
                    <div className="relative w-full aspect-[9/16]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Video title */}
                <p className="absolute -bottom-8 left-0 right-0 text-center text-gray-300 font-medium">
                  {video.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              צוות מקצועי עם ניסיון עשיר בפיתוח ייצור מוצרים פיזיים
              <br />
              <span className="text-[#FDB913] font-semibold">מלווה אותך בכל שלב של הדרך</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
