"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 核心服务页面的专属多语言字典 ---
const dictionary = {
  zh: {
    nav: { services: "核心服务", insights: "洞察与案例", about: "关于我们", careers: "加入我们", contact: "联系专家" },
    hero: {
      title: "核心专长",
      subtitle: "为国际卓越表现提供战略框架",
      desc: "跨越国界的商业成功绝非偶然。ACM Prime 通过四大核心业务板块，打破文化与市场的壁垒，为富有远见的中国与英国企业打造坚不可摧的全球化战略底座。",
    },
    services: [
      {
        id: "01",
        title: "跨国扩张与落地",
        desc: "我们为寻求在英国建立及扩大海外业务的中国企业提供端到端的落地支持。同时，协助英国公司在中国复杂的商业生态中识别并获得高价值的合作伙伴关系。从市场准入策略、合规指导到本地化运营，我们确保您的跨国每一步都稳健且精准。",
        features: ["深度市场准入与可行性分析", "本地化高管团队搭建与合规指导", "高价值跨国合作伙伴精准匹配"],
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
      },
      {
        id: "02",
        title: "战略增长咨询",
        desc: "在全球经济剧烈波动的今天，线性增长已成为过去。我们与您的领导团队进行深度共创，打破固有的商业惯性，制定可持续发展的稳健路线图。我们帮助企业提升组织韧性，确保在不可预见的市场周期中依然保持极高的灵活性与核心竞争力。",
        features: ["可持续增长路线图规划与执行", "组织韧性诊断与敏捷性提升", "跨国并购 (M&A) 战略与重组指导"],
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
      },
      {
        id: "03",
        title: "中英商务促进与协同",
        desc: "ACM Prime 是国际贸易走廊中的关键纽带。我们不仅仅是战略顾问，更是高阶资源的整合者。我们致力于打破文化与商业习惯的壁垒，全方位促进中英两大核心经济枢纽之间的高价值商业交流，实现真正意义上的深度文化协同与商业互信。",
        features: ["高规格政府与公共关系 (PR) 对接", "跨文化复杂商业谈判策略支持", "双边贸易走廊稀缺资源闭环整合"],
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
      },
      {
        id: "04",
        title: "战略财务规划与资本部署",
        desc: "稳健的财务底盘是跨国扩张的命脉。我们提供世界顶级的专业资金部署建议，帮助客户在复杂的跨国税制和资本市场中，优化资本结构和投资策略。我们的目标是在确保资金流绝对安全的前提下，实现资本效率的最大化与跨国风险的最小化。",
        features: ["跨国资本结构优化与资产配置", "离岸资金部署与国际税务合规", "高净值企业财务风险对冲策略"],
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop" 
      }
    ],
    cta: {
      title: "准备好迈出您下一步的卓越战略了吗？",
      btn: "联系我们的资深顾问"
    },
    footer: {
      desc: "将长期愿景转化为可衡量的商业成功。作为中英商业走廊的坚实桥梁，我们为您提供顶级的战略框架与高价值商业协同。",
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
      title: "Our Expertise",
      subtitle: "Strategic Frameworks for International Excellence",
      desc: "Cross-border success is never accidental. Through our four core business pillars, ACM Prime builds an unbreakable global strategic foundation for visionary enterprises in the UK and China.",
    },
    services: [
      {
        id: "01",
        title: "Cross-Border Expansion",
        desc: "We provide end-to-end support for Chinese enterprises scaling in the UK, while assisting UK firms in securing high-value partnerships within China's complex ecosystem. From market entry to local operations, we ensure every step is robust and precise.",
        features: ["In-depth Market Entry & Feasibility Analysis", "Local Executive Team Building & Compliance", "Precision Matching for Cross-Border Partners"],
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "02",
        title: "Strategic Growth Consulting",
        desc: "In today's volatile economy, linear growth is obsolete. We co-create with your leadership to break business inertia and forge sustainable roadmaps, ensuring extreme agility and core competitiveness amidst unpredictable market cycles.",
        features: ["Sustainable Roadmap Planning & Execution", "Organizational Resilience & Agility Enhancement", "Cross-Border M&A Strategy & Restructuring"],
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "03",
        title: "UK-China Business Facilitation",
        desc: "ACM Prime is the critical nexus in the international trade corridor. We break down cultural and commercial barriers, fostering deep-tier exchange and genuine commercial trust between two global economic hubs.",
        features: ["High-Level Government & PR Navigation", "Cross-Cultural Complex Negotiation Support", "Bilateral Resource Integration"],
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "04",
        title: "Strategic Financial Planning",
        desc: "A solid financial base is the lifeblood of expansion. We offer premier capital deployment advisory, optimizing structures across complex tax and capital markets to maximize efficiency and minimize cross-border risks.",
        features: ["Cross-Border Capital Structure Optimization", "Offshore Deployment & Tax Compliance", "Corporate Risk Hedging Strategies"],
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    cta: {
      title: "Ready for your next brilliant move?",
      btn: "Speak with our Senior Advisors"
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

export default function ServicesPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = dictionary[lang];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-acm-gold selection:text-white flex flex-col">
      
      {/* --- 1. 统一导航栏 (包含 Link 无刷新跳转) --- */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-16 bg-[#05101E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={300} height={200} priority className="w-auto h-8 md:h-11 object-contain" />
          </Link>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 text-[13px] font-semibold text-white/80 uppercase tracking-widest">
            {/* 当前页面：核心服务，文字高亮为金色 */}
            <Link href="/services" className="text-acm-gold transition-colors">{t.nav.services}</Link>
            <Link href="/insights" className="hover:text-acm-gold transition-colors">{t.nav.insights}</Link>
            <Link href="/about" className="hover:text-acm-gold transition-colors">{t.nav.about}</Link>
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

      {/* --- 2. 紧凑型深色首屏 --- */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-16 bg-[#05101E] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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

      {/* --- 3. 深度详情：Z-Pattern 交替排版 --- */}
      <section className="flex-grow">
        {t.services.map((service, index) => {
          // 判断奇偶行，决定图文位置。偶数行图片在右，奇数行图片在左。
          const isImageRight = index % 2 === 0;

          return (
            <div key={index} className={`py-20 md:py-32 px-6 md:px-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                
                {/* 文本区域 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`w-full md:w-1/2 ${isImageRight ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-4xl lg:text-5xl font-serif text-gray-300">{service.id}</span>
                    <div className="h-[2px] w-16 bg-acm-gold"></div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#05101E] leading-tight mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-10">
                    {service.desc}
                  </p>
                  
                  {/* 服务核心交付物 List */}
                  <ul className="space-y-5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4 text-[#05101E] font-medium md:text-lg">
                        <svg className="w-6 h-6 text-acm-gold shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* 图片区域 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`w-full md:w-1/2 ${isImageRight ? 'md:order-2' : 'md:order-1'}`}
                >
                  <div className="relative h-[450px] lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl group">
                    <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    {/* 高级暗色遮罩，提升质感 */}
                    <div className="absolute inset-0 bg-[#05101E]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </section>

      {/* --- 4. 强引导转化区 (CTA Banner) --- */}
      <section className="bg-acm-gold py-24 px-6 text-center relative overflow-hidden">
         {/* 装饰性背景光晕 */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
         
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#05101E] mb-10 leading-tight">
               {t.cta.title}
            </h2>
            <button className="bg-[#05101E] text-white px-10 py-5 text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 rounded-sm shadow-2xl hover:-translate-y-1">
               {t.cta.btn}
            </button>
         </motion.div>
      </section>

      {/* --- 5. 统一页脚 --- */}
      <footer className="bg-[#05101E] text-white pt-20 pb-10 px-6 md:px-16 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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