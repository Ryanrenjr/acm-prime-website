"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 关于我们页面的专属多语言字典 ---
const dictionary = {
  zh: {
    nav: { services: "核心服务", insights: "洞察与案例", about: "关于我们", careers: "加入我们", contact: "联系专家" },
    hero: {
      title: "关于 ACM Prime",
      subtitle: "连接两个世界的战略桥梁。",
      desc: "我们是一家总部位于伦敦的精品商业咨询机构。自 2019 年成立以来，我们始终致力于为中英两地的成长期企业提供最务实、最落地的跨国商业增长方案。",
    },
    story: {
      title: "我们的定位",
      heading: "拒绝空谈理论，专注落地执行。",
      paragraphs: [
        "在复杂的跨国商业环境中，成长型企业需要的不是长达百页、却难以执行的宏大战略报告，而是能在陌生的市场环境中迅速破局的“尖刀”。",
        "ACM Prime 诞生于 2019 年。作为一家深谙中英两地商业生态的精品咨询机构（Boutique Consultancy），我们拥有比传统大机构更敏锐的市场嗅觉和更灵活的执行力。我们从不将客户的工作交给缺乏经验的初级顾问，每一个项目都由深具实战经验的资深专家直接操刀。",
        "从伦敦大波特兰街的总部出发，我们的触角延伸至中英两大核心经济圈。无论是协助中国科技企业合规出海英国，还是帮助英国创新品牌匹配中国供应链，我们始终是您最忠实、最可靠的在地合伙人。"
      ],
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop" // 伦敦城市意象
    },
    values: {
      title: "核心价值观",
      items: [
        { id: "01", title: "绝对务实", desc: "我们以“商业结果”为唯一导向。所有的战略框架都必须能转化为可落地的行动步骤与可衡量的财务回报。" },
        { id: "02", title: "深度人脉", desc: "商业的本质是建立信任。我们利用在本地深耕多年的政商资源网络，为客户精准匹配真正高价值的稀缺资源。" },
        { id: "03", title: "极致敏捷", desc: "精品咨询机构的优势在于高效。我们摒弃繁文缛节，以极快的响应速度适应瞬息万变的全球市场与突发挑战。" },
        { id: "04", title: "文化协同", desc: "跨国并购与扩张最大的失败往往源于文化冲突。我们充当“文化翻译官”，在谈判与合作中抹平商业思维的隐形壁垒。" }
      ]
    },
    cta: {
      title: "寻找可靠的跨国商业推手？",
      btn: "与我们的资深专家聊聊"
    },
    footer: {
      desc: "将愿景转化为务实的商业成果。作为连接中英商业走廊的精品咨询机构，我们为您提供精准的战略落地与高价值商业协同。",
      linksTitle: "快速链接",
      links: ["核心服务", "洞察与案例", "关于我们", "加入我们", "联系方式"],
      officeTitle: "伦敦总部",
      officeAddress: "英国伦敦 大波特兰街167-169号 5楼",
      officePostcode: "邮编: W1W 5PF",
      contactTitle: "联系我们",
      email: "hello@acmprime.com", 
      social: ["领英 (LinkedIn)", "微信公众号 (WeChat)"],
      copyright: "© 2026 ACM Prime Limited. 保留所有权利。",
      legal: ["隐私政策", "使用条款", "Cookie 政策"]
    }
  },
  en: {
    nav: { services: "Services", insights: "Insights", about: "About Us", careers: "Careers", contact: "Contact Experts" },
    hero: {
      title: "About ACM Prime",
      subtitle: "The Strategic Bridge Between Two Worlds.",
      desc: "We are a London-based boutique business consultancy. Since 2019, we have been dedicated to providing the most pragmatic and actionable cross-border growth solutions for scaling enterprises in the UK and China.",
    },
    story: {
      title: "Our Identity",
      heading: "Zero Fluff. Pure Execution.",
      paragraphs: [
        "In complex cross-border environments, growing enterprises don't need hundred-page theoretical reports. They need a sharp operational blade to break through unfamiliar markets.",
        "Established in 2019, ACM Prime is a boutique consultancy deeply rooted in both the UK and Chinese business ecosystems. We possess the agility and local sensitivity that traditional giant agencies often lack. We never pass client work to inexperienced juniors; every project is hands-on directed by senior experts with proven track records.",
        "Operating from our headquarters on Great Portland Street, London, our reach extends across two of the world's most vital economic hubs. Whether guiding a Chinese tech firm's compliant entry into the UK, or matching a British innovator with Chinese supply chains, we act as your most reliable local partner."
      ],
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
    },
    values: {
      title: "Core Values",
      items: [
        { id: "01", title: "Absolute Pragmatism", desc: "Driven solely by commercial outcomes. Every strategic framework we design must translate into actionable steps and measurable financial returns." },
        { id: "02", title: "Deep Local Networks", desc: "Business is built on trust. We leverage our deeply cultivated local networks to precisely match clients with scarce, high-value resources." },
        { id: "03", title: "Extreme Agility", desc: "Our boutique nature is our strength. We bypass corporate red tape, adapting to rapid market shifts and challenges with unmatched speed." },
        { id: "04", title: "Cultural Synergy", desc: "Most cross-border failures stem from cultural clashes. We act as 'cultural translators', smoothing out invisible barriers in negotiations and partnerships." }
      ]
    },
    cta: {
      title: "Looking for a reliable cross-border catalyst?",
      btn: "Speak with our Senior Experts"
    },
    footer: {
      desc: "Turning long-term visions into measurable commercial success. As the solid bridge in the UK-China business corridor, we provide top-tier strategic frameworks and high-value synergies.",
      linksTitle: "Quick Links",
      links: ["Services", "Insights & Case Studies", "About Us", "Careers", "Contact"],
      officeTitle: "London HQ",
      officeAddress: "5th Floor 167-169, Great Portland Street, London, England",
      officePostcode: "W1W 5PF",
      contactTitle: "Get in Touch",
      email: "hello@acmprime.com", 
      social: ["LinkedIn", "WeChat"],
      copyright: "© 2026 ACM Prime Limited. All rights reserved.",
      legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"]
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function AboutPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = dictionary[lang];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-acm-gold selection:text-white flex flex-col">
      
      {/* --- 1. 统一导航栏 --- */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-16 bg-[#05101E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={300} height={200} priority className="w-auto h-8 md:h-11 object-contain" />
          </Link>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 text-[13px] font-semibold text-white/80 uppercase tracking-widest">
            <Link href="/services" className="hover:text-acm-gold transition-colors">{t.nav.services}</Link>
            <Link href="/insights" className="hover:text-acm-gold transition-colors">{t.nav.insights}</Link>
            {/* 当前页面：关于我们，文字高亮为金色 */}
            <Link href="/about" className="text-acm-gold transition-colors">{t.nav.about}</Link>
            <Link href="/careers" className="hover:text-acm-gold transition-colors">{t.nav.careers}</Link>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="text-[13px] font-bold text-white hover:text-acm-gold transition-colors flex items-center gap-1">
              <span className={lang === 'en' ? 'text-acm-gold' : ''}>EN</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'zh' ? 'text-acm-gold' : ''}>中</span>
            </button>
            <button className="hidden md:block bg-acm-gold text-[#05101E] px-6 py-2.5 text-sm font-bold hover:bg-white transition-colors rounded-sm shadow-md">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </nav>

      {/* --- 2. 品牌宣言首屏 --- */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-16 bg-[#05101E] overflow-hidden">
        {/* 背景装饰：左侧金色微光 */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-acm-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-acm-gold font-bold tracking-widest uppercase text-sm mb-6 block">
            {t.hero.title}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8">
            {t.hero.subtitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.desc}
          </motion.p>
        </div>
      </section>

      {/* --- 3. 我们的定位与故事 (图文错落) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-acm-gold font-bold tracking-widest uppercase text-sm mb-4 block">{t.story.title}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E] mb-8 leading-tight">
              {t.story.heading}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed font-light md:text-lg">
              {t.story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            {/* 强调大波特兰街属性的标志 */}
            <div className="mt-10 border-l-2 border-acm-gold pl-6">
               <p className="text-[#05101E] font-serif font-bold text-xl">Est. 2019</p>
               <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Great Portland Street, London</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] lg:h-[650px] w-full rounded-sm overflow-hidden shadow-2xl"
          >
            <img src={t.story.img} alt="London Strategy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#05101E]/10"></div>
          </motion.div>

        </div>
      </section>

      {/* --- 4. 核心价值观卡片 (深色网格) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E]">{t.values.title}</h2>
            <div className="w-16 h-1 bg-acm-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {t.values.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 md:p-12 rounded-sm border border-gray-100 hover:border-acm-gold/30 hover:shadow-2xl hover:shadow-acm-navy/5 transition-all duration-300 group"
              >
                <div className="text-4xl font-serif text-gray-200 mb-6 group-hover:text-acm-gold transition-colors">{item.id}</div>
                <h3 className="text-2xl font-serif font-bold text-[#05101E] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. 简约 CTA --- */}
      <section className="bg-acm-gold py-24 px-6 text-center">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#05101E] mb-10 leading-tight">
               {t.cta.title}
            </h2>
            <button className="bg-[#05101E] text-white px-10 py-5 text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 rounded-sm shadow-2xl hover:-translate-y-1">
               {t.cta.btn}
            </button>
         </motion.div>
      </section>

      {/* --- 6. 统一页脚 --- */}
      <footer className="bg-[#05101E] text-white pt-10 pb-10 px-6 md:px-16 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 mt-8">
            <div className="lg:pr-8">
              <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={200} height={80} className="w-auto h-11 object-contain mb-8 opacity-90" />
              <p className="text-white/60 text-sm leading-relaxed font-light">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-acm-gold font-bold tracking-widest uppercase text-xs mb-6">{t.footer.linksTitle}</h4>
              <ul className="space-y-4">
                {t.footer.links.map((link, index) => (
                  <li key={index}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-acm-gold font-bold tracking-widest uppercase text-xs mb-6">{t.footer.officeTitle}</h4>
              <div className="text-white/70 text-sm leading-relaxed font-light space-y-2">
                <p>{t.footer.officeAddress}</p>
                <p>{t.footer.officePostcode}</p>
              </div>
            </div>
            <div>
              <h4 className="text-acm-gold font-bold tracking-widest uppercase text-xs mb-6">{t.footer.contactTitle}</h4>
              <a href={`mailto:${t.footer.email}`} className="block text-white/70 hover:text-white text-sm transition-colors mb-6">{t.footer.email}</a>
              <ul className="space-y-4">
                {t.footer.social.map((social, index) => (
                  <li key={index}><a href="#" className="text-white/70 hover:text-acm-gold text-sm transition-colors">{social}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
            <p>{t.footer.copyright}</p>
            <div className="flex space-x-6">
              {t.footer.legal.map((item, index) => (
                <a key={index} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}