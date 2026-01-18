import React from "react";
import { Phone, Users, Factory, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessSteps() {
  const steps = [
    {
      icon: Phone,
      title: "השארת פרטים ראשוניים",
      description: "מלא טופס קצר עם פרטים בסיסיים על המוצר שלך",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "פגישת ייעוץ ללא עלות",
      description: "נפגש עם צוות WeCcelerate להבנת הצרכים והיכולות שלך",
      color: "from-[#FDB913] to-[#f5a623]"
    },
    {
      icon: Factory,
      title: "איתור מפעלים רלוונטיים",
      description: "נאתר עבורך מפעלים בארץ ובעולם שמתאימים בדיוק למוצר שלך",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "התאמות והעברת מידע",
      description: "ליווי הנדסי מלא והעברת המידע למפעל לתחילת ייצור",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              איך זה עובד?
            </h2>
            <p className="text-xl text-gray-300">ארבעה שלבים פשוטים להגשמת המוצר שלך</p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-all duration-300 border border-white/10 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#FDB913] to-[#f5a623] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[#0a0e27] font-bold text-xl">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-right">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed text-right">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item in each column) */}
                {index < steps.length - 2 && (
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#FDB913]/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}