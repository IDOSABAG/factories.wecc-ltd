
import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function ProductsInProgress() {
  const products = [
    {
      image: "/images/product1.jpg",
      category: "טכנולוגיה",
      showBadge: true
    },
    {
      image: "/images/product2.png",
      category: "אלקטרוניקה",
      showBadge: true
    },
    {
      image: "/images/product3.png",
      category: "אגרוטק",
      showBadge: true
    },
    {
      image: "/images/product4.jpg",
      category: "ניקיון והיגיינה",
      showBadge: true
    },
    {
      image: "/images/product5.jpg",
      category: "מכשור מדעי",
      showBadge: true
    },
    {
      image: "/images/product6.jpg",
      category: "ציוד תעשייתי",
      showBadge: true
    },
    {
      image: "/images/product7.jpg",
      category: "ציוד רפואי",
      showBadge: true
    },
    {
      image: "/images/product8.jpeg",
      category: "פתרונות לוגיסטיקה",
      showBadge: true
    },
    {
      image: "/images/product9.jpg",
      category: "ציוד תעשייתי",
      showBadge: true
    },
    {
      image: "/images/product10.jpeg",
      category: "מוצרים ירוקים",
      showBadge: true
    },
    {
      image: "/images/product11.jpg",
      category: "מוצר משקאות חכם",
      showBadge: true
    },
    {
      image: "/images/product12.jpg",
      category: "תאורה חכמה",
      showBadge: true
    },
    {
      image: "/images/product13.jpg",
      category: "מכונות ייצור",
      showBadge: false
    },
    {
      image: "/images/product14.jpg",
      category: "אוטומציה",
      showBadge: false
    },
    {
      image: "/images/product15.jpg",
      category: "רכיבים מכניים",
      showBadge: true
    },
    {
      image: "/images/product16.jpg",
      category: "אלקטרוניקה",
      showBadge: true
    },
    {
      image: "/images/product17.jpg",
      category: "מערכות מים",
      showBadge: true
    },
    {
      image: "/images/product18.jpg",
      category: "רכיבי פלסטיק",
      showBadge: true
    },
    {
      image: "/images/product19.jpg",
      category: "מכשירי חשמל",
      showBadge: true
    },
    {
      image: "/images/product20.jpg",
      category: "רכיבי מתכת",
      showBadge: false
    },
    {
      image: "/images/product21.jpg",
      category: "מוצרי צריכה",
      showBadge: false
    },
    {
      image: "/images/product22.jpg",
      category: "ציוד משרדי",
      showBadge: false
    },
    {
      image: "/images/product23.jpg",
      category: "מערכות בקרה",
      showBadge: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Wrench className="w-12 h-12 text-[#FDB913]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              מוצרים נוספים בתהליך פיתוח
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              לאחר איתור מפעלים - מוצרים חדשניים בדרך לשוק
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-[#FDB913]/20 transition-all duration-300 aspect-square">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay with category */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-[#FDB913] text-[#0a0e27] px-4 py-2 rounded-lg inline-block font-bold text-sm">
                        {product.category}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  {product.showBadge && (
                    <div className="absolute top-3 right-3 bg-[#FDB913]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-[#0a0e27] font-bold text-xs">בפיתוח</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              אלו רק חלק מהמוצרים שאנחנו מלווים כרגע במסע שלהם מרעיון למוצר מוגמר.
              <br />
              <span className="text-[#FDB913] font-semibold">המוצר שלך יכול להיות הבא!</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
