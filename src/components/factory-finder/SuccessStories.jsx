
import React from "react";
import { ExternalLink, TrendingUp, Award, Newspaper, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const stories = [
    {
      name: "KNOTIX",
      title: "גגון מתקפל אוניברסלי לרכב",
      description: "גגון חדשני ומתקפל שמתאים לכל סוגי הרכבים, מושלם לספורט, טיולים והרפתקאות",
      process: "ליווינו את היזמים משלב הרעיון הראשוני, דרך בניית תוכנית עסקית מקיפה ופיתוח המוצר, ועד להצלחה מרשימה בשתי פלטפורמות גיוס המונים מובילות",
      achievements: [
        { platform: "Indiegogo", amount: "$93,536", backers: "258 תומכים" },
        { platform: "Kickstarter", amount: "$88,125", backers: "245 תומכים" }
      ],
      totalRaised: "$181,661",
      additionalNote: "חלק מסך הסכומים שגייסו - בפועל גייסו עוד כספים נוספים",
      exitNote: "אקזיט מוצלח במיליוני דולרים! החברה נמכרה לחברה גדולה ומוכרת בתחום הרכב",
      videoId: "PTAJmcPl0Tw", // Added videoId
      images: [
        "/images/success1a.png",
        "/images/success1b.png"
      ],
      links: {
        kickstarter: "https://www.kickstarter.com/projects/gilad91/knotix-the-universal-adventure-roof-rack",
        indiegogo: "https://www.indiegogo.com/projects/knotix-the-universal-adventure-roof-rack",
        website: "https://comingsoon.co/products/knotix/"
        // Removed video link
      }
    },
    {
      name: "BUBL",
      title: "אבקת הפלא לשירותים",
      description: "מוצר חדשני בתחום הניקיון וההיגיינה הביתית, המבוסס על אבקה היוצרת במגע עם מים שכבת קצף קשיחה ורב-תכליתית. הקצף מבטל השפרצות מים, מנטרל ריחות רעים, מחטא את דפנות האסלה ומותיר ריח נעים לאורך זמן",
      process: "וויסלרייט ליוותה את BUBL מהשלב הרעיוני, דרך תכנון המוצר ובדיקות הפיתוח בישראל, הקמת פס ייצור בסין, ועד להשקת המוצר בשוק האמריקאי ובפלטפורמות מכירה כמו Amazon. הדוגמה של BUBL מדגישה את מומחיות וויסלרייט בהובלת מוצרים המשלבים חדשנות כימית-חומרית עם תכנון ייצור גלובלי, והפיכתם למוצרים מסחריים בעלי ביקוש בינלאומי",
      highlight: "השקה מוצלחת בשווקים בינלאומיים",
      videoId: "HJwI2ppyanY", // Added videoId
      images: [
        "/images/success2a.jpg",
        "/images/success2b.jpg"
      ],
      links: {
        website_il: "https://ububl.co.il/",
        ynet: "https://www.ynet.co.il/economy/article/rkcqz63dkg",
        website_us: "https://ububl.com/"
      }
    },
    {
      name: "PayTag",
      title: "עמדת תשלום עצמאית לחנויות אופנה",
      description: "מערכת תשלום חכמה ועצמאית המאפשרת ללקוחות לשלם עבור רכישות בחנויות אופנה בצורה מהירה ונוחה, ללא צורך בתור לקופה. המערכת משלבת טכנולוגיית NFC מתקדמת עם אפליקציה ידידותית למשתמש",
      process: "ליווינו את PayTag משלב הרעיון, תוך בניית תוכנית עסקית, עזרה בכתיבת פטנט, פיתוח האפליקציה והתאמת פיתוח המוצר, גיוסי כספים ועוד. לפייטג ישנן לקוחות מובילות בישראל כגון רנואר ואדידס. ניתן לראות את המערכות פרוסות בחלק מהסניפים",
      highlight: "פריסה מוצלחת אצל רשתות מובילות - רנואר, אדידס ועוד",
      videoId: "odJV5IFjQiY",
      images: [
        "/images/success3a.png",
        "/images/success3b.png"
      ],
      links: {
        mako: "https://www.mako.co.il/nexter-news/Article-9da4c9b80da5681027.htm",
        website: "https://www.smplct.co.il/projects/branding/paytag/"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0d1235] to-[#0a0e27]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              סיפורי הצלחה
            </h2>
            <p className="text-xl text-gray-300 mb-4">מוצרים שהבאנו לשוק עם השירות שלנו</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              אנחנו מלווים יזמים משלב הרעיון, דרך בניית תוכנית עסקית, פיתוח המוצר ועד להצלחה מלאה
            </p>
          </motion.div>

          {/* Success stories */}
          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Images/Video Gallery */}
                  <div className="relative bg-gray-900 p-8">
                    {story.videoId ? (
                      // Video and additional images layout
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <div className="relative pb-[56.25%] bg-gray-900 rounded-2xl overflow-hidden">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${story.videoId}`}
                              title={story.name}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        {story.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${story.name} ${idx + 1}`}
                            className="w-full h-40 object-cover rounded-2xl"
                          />
                        ))}
                      </div>
                    ) : (
                      // Only images layout for stories without videoId
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <img
                            src={story.images[0]}
                            alt={story.name}
                            className="w-full h-64 object-cover rounded-2xl"
                          />
                        </div>
                        {story.images.slice(1).map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${story.name} ${idx + 2}`}
                            className="w-full h-40 object-cover rounded-2xl"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-[#FDB913]" />
                        <h3 className="text-3xl font-bold text-white">{story.name}</h3>
                      </div>
                      
                      <h4 className="text-xl text-[#FDB913] mb-4 font-semibold">
                        {story.title}
                      </h4>
                      
                      <p className="text-gray-300 text-lg mb-4 leading-relaxed text-right">
                        {story.description}
                      </p>

                      {/* Process description */}
                      <div className="bg-white/5 border border-[#FDB913]/20 rounded-xl p-5 mb-6">
                        <p className="text-gray-300 leading-relaxed text-right italic">
                          <span className="text-[#FDB913] font-semibold">הדרך להצלחה: </span>
                          {story.process}
                        </p>
                      </div>

                      {/* Exit note for KNOTIX */}
                      {story.exitNote && (
                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 mb-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                            <div>
                              <p className="text-white font-bold text-xl text-right">אקזיט מוצלח במיליוני דולרים! 🎉</p>
                              <p className="text-white/90 text-right mt-1">החברה נמכרה לחברה גדולה ומוכרת בתחום הרכב</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Achievements for KNOTIX */}
                      {story.totalRaised && (
                        <>
                          <div className="bg-gradient-to-br from-[#FDB913] to-[#f5a623] rounded-2xl p-6 mb-4">
                            <div className="flex items-center gap-3 mb-2">
                              <TrendingUp className="w-6 h-6 text-[#0a0e27]" />
                              <span className="text-3xl font-bold text-[#0a0e27]">{story.totalRaised}</span>
                            </div>
                            <p className="text-[#0a0e27] font-semibold text-right">גיוס בקמפיינים - חלק מסך הסכומים</p>
                            {story.additionalNote && (
                              <p className="text-[#0a0e27] text-sm text-right mt-1 opacity-80">{story.additionalNote}</p>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {story.achievements.map((achievement, idx) => (
                              <div key={idx} className="bg-[#FDB913]/10 border border-[#FDB913]/30 rounded-xl p-4">
                                <p className="text-[#FDB913] font-bold text-sm mb-1">{achievement.platform}</p>
                                <p className="text-white font-bold text-lg">{achievement.amount}</p>
                                <p className="text-gray-400 text-sm">{achievement.backers}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Highlight for BUBL & PayTag */}
                      {story.highlight && (
                        <div className="bg-gradient-to-br from-[#FDB913] to-[#f5a623] rounded-2xl p-6 mb-6">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-[#0a0e27]" />
                            <span className="text-2xl font-bold text-[#0a0e27]">{story.highlight}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Links for KNOTIX */}
                    {story.links.kickstarter && (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          className="bg-[#05CE78] text-white hover:bg-[#04b569] font-bold"
                        >
                          <a href={story.links.kickstarter} target="_blank" rel="noopener noreferrer">
                            Kickstarter
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-[#e51075] text-white hover:bg-[#c90e64] font-bold"
                        >
                          <a href={story.links.indiegogo} target="_blank" rel="noopener noreferrer">
                            Indiegogo
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        >
                          <a href={story.links.website} target="_blank" rel="noopener noreferrer">
                            אתר המוצר
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                      </div>
                    )}

                    {/* Links for BUBL */}
                    {story.links.website_il && !story.links.kickstarter && ( // Add condition to prevent rendering for KNOTIX
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          className="bg-[#FDB913] text-[#0a0e27] hover:bg-[#f5a623] font-bold"
                        >
                          <a href={story.links.website_il} target="_blank" rel="noopener noreferrer">
                            אתר ישראל
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-red-600 text-white hover:bg-red-700 font-bold"
                        >
                          <a href={story.links.ynet} target="_blank" rel="noopener noreferrer">
                            <Newspaper className="w-4 h-4 ml-2" />
                            כתבה ב-ynet
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        >
                          <a href={story.links.website_us} target="_blank" rel="noopener noreferrer">
                            אתר ארה״ב
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                      </div>
                    )}

                    {/* Links for PayTag */}
                    {story.links.mako && (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          className="bg-red-600 text-white hover:bg-red-700 font-bold"
                        >
                          <a href={story.links.mako} target="_blank" rel="noopener noreferrer">
                            <Newspaper className="w-4 h-4 ml-2" />
                            כתבה ב-mako
                          </a>
                        </Button>
                        <Button
                          asChild
                          className="bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        >
                          <a href={story.links.website} target="_blank" rel="noopener noreferrer">
                            אתר המוצר
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-300 mb-6">
              רוצה שהמוצר שלך יהיה הבא? בוא נתחיל לעבוד
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
