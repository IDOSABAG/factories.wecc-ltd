
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "למי השירות מתאים?",
      answer: "השירות מתאים ליזמים ומייסדים בכל שלב - מרעיון ראשוני ועד שלב פיילוט, שמחפשים לייצר מוצר פיזי ורוצים למצוא את המפעל הנכון לעשות זאת ביעילות ובחיסכון משמעותי בזמן ובכסף."
    },
    {
      question: "כמה זמן לוקח לאתר מפעל מתאים?",
      answer: "בדרך כלל התהליך לוקח בין חודש לחודשיים מרגע הפגישה הראשונית. זה תלוי במורכבות המוצר ובדרישות הספציפיות שלך. אנחנו עובדים במהירות כדי לחסוך לך זמן יקר, אנחנו משתדלים לעשות את המאמצים להקדים זמנים ובמקרים רבים מסיימים את התהליך לפני. כמובן מבלי לפגוע באיכות התוצר."
    },
    {
      question: "האם השירות כרוך בעלות ראשונית?",
      answer: "הפגישה הראשונית ללא עלות וללא התחייבות. לאחר הפגישה נציג לך הצעה מותאמת אישית בהתאם לצרכים שלך. המטרה שלנו היא לחסוך לך כסף בטווח הארוך, ולכן נעבוד בשקיפות מלאה."
    },
    {
      question: "האם אתם עובדים עם מפעלים בארץ בלבד?",
      answer: "אנחנו עובדים עם רשת מפעלים במזרח. נמצא לך את המפעל המתאים ביותר למוצר שלך, ללא קשר למיקום הגיאוגרפי."
    },
    {
      question: "מה ההבדל בין וויסלרייט לבין יועץ הנדסי רגיל?",
      answer: "יועץ הנדסי רגיל יתמקד בעיצוב ופיתוח המוצר. אנחנו בוויסלרייט מציעים פתרון מקיף יותר - לא רק ייעוץ הנדסי, אלא גם חיבור ישיר למפעלים שכבר יש להם ידע וניסיון בייצור מוצרים דומים. זה חוסך לך זמן, כסף, ומאפשר לך להתחיל את הייצור מהר יותר."
    }
  ];

  return (
    <section className="py-24 bg-[#0d1235]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              שאלות נפוצות
            </h2>
            <p className="text-xl text-gray-300">כל מה שרציתם לדעת על השירות שלנו</p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border-none px-6 overflow-hidden border border-white/10"
                >
                  <AccordionTrigger className="text-right text-xl font-semibold text-white hover:text-[#FDB913] py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-lg text-gray-300 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
