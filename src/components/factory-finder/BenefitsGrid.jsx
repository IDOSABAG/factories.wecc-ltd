import React from "react";
import { Clock, DollarSign, Building2, Users, Presentation, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: Clock,
      title: "לא מתחילים מאפס",
      description: "חוסכים זמן יקר באמצעות ידע וניסיון קיים במפעלים",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: DollarSign,
      title: "חיסכון אדיר בעלויות",
      description: "חיסכון של עשרות אלפי שקלים בפיתוח מוקדם",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Building2,
      title: "גישה ישירה למפעלים",
      description: "גישה ישירה למפעלים אמיתיים שכבר ייצרו מוצרים דומים",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "מעטפת 360 מלאה",
      description: "וויסלרייט מלווה יזמים במעטפת 360 משלב הרעיון ועד השוק",
      color: "from-[#FDB913] to-[#f5a623]",
      bgColor: "bg-[#FDB913]/10"
    },
    {
      icon: Presentation,
      title: "כנסים וחיבורים",
      description: "מייצרת כנסים לחיבור בין יזמים למשקיעים ושותפים עסקיים",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Trophy,
      title: "הצלחות רבות",
      description: "עם רשימת הצלחות מוכחת ומגוון רחב של מוצרים שהושקו בהצלחה",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500/10"
    }
  ];

  const events = [
    {
      title: "כנס Vesting 2024",
      subtitle: "בשיתוף FireFly ומגדלי מייקרוסופט תל אביב",
      videoId: "MRd7x79blE4"
    },
    {
      title: "כנס יזמים בתחילת דרכם",
      subtitle: "בשיתוף Microsoft for Startups וקרן ההשקעות של אוניברסיטת ת\"א",
      videoId: "nionjAdg3r4"
    }
  ];

  return (
    <section className="py-24 bg-[#0d1235]">
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
              למה לבחור ב-WeCcelerate?
            </h2>
            <p className="text-xl text-gray-300">היתרונות שלנו הם ההצלחה שלך</p>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className={`${benefit.bgColor} backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-all duration-300 border border-white/10 h-full`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 text-right">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed text-right">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                הכנסים שלנו
              </h3>
              <p className="text-lg text-gray-300">חיבור בין יזמים למשקיעים ושותפים עסקיים</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-all duration-300"
                >
                  {/* Video */}
                  <div className="relative pb-[56.25%] bg-gray-900">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${event.videoId}`}
                      title={event.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 text-right">
                      {event.title}
                    </h4>
                    <p className="text-gray-300 text-right">
                      {event.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}