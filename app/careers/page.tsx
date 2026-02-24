"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 加入我们页面的专属多语言字典 ---
const dictionary = {
  zh: {
    nav: { services: "核心服务", insights: "洞察与案例", about: "关于我们", careers: "加入我们", contact: "联系专家" },
    hero: {
      title: "加入 ACM Prime",
      subtitle: "告别枯燥空谈，塑造真实商业影响力。",
      desc: "在 ACM Prime，我们不招募“流水线上的螺丝钉”。我们寻找具有敏锐商业直觉、极强执行力且充满野心的破局者。在这里，你将直接参与跨国企业核心战略的制定与落地。",
    },
    culture: {
      title: "为什么选择精品咨询？",
      items: [
        { 
          id: "01", title: "告别层级，直面核心", 
          desc: "没有冗长的汇报线。从入职第一天起，你不仅会得到资深合伙人的亲自指导，更将直接参与到与跨国企业高管（C-Level）的高维商业对话中。" 
        },
        { 
          id: "02", title: "拒绝纸上谈兵", 
          desc: "你的工作成果不会变成积灰的报告。从战略构想到最终落地，你将亲眼见证你的洞察如何转化为客户千万级的营收增长与市场扩张。" 
        },
        { 
          id: "03", title: "真正的全球化视野", 
          desc: "扎根伦敦，辐射中英。每天处理极其复杂的跨文化商业博弈，迅速积累无可替代的跨国在地操作经验与稀缺人脉网络。" 
        }
      ]
    },
    positions: {
      title: "开放职位",
      desc: "我们目前在伦敦总部开放以下核心岗位。如果你渴望快速成长，欢迎加入。",
      items: [
        {
          title: "跨国战略分析师 (Cross-Border Strategy Analyst)",
          location: "英国, 伦敦 (混合办公)",
          type: "全职",
          reqs: ["主导中英市场的行业研究与准入可行性分析", "协助资深顾问搭建财务模型与商业计划书 (BP)", "中英双语精通，具备极强的逻辑拆解与抗压能力"]
        },
        {
          title: "中英商务拓展经理 (BD Manager, UK-China)",
          location: "英国, 伦敦",
          type: "全职",
          reqs: ["负责开拓并维护中英双边贸易走廊的高价值客户资源", "主导跨文化商务谈判，促成战略合作伙伴关系的落地", "拥有 3 年以上 B2B 销售或咨询背景，自带行业人脉者优先"]
        }
      ]
    },
    cta: {
      title: "没有找到完全匹配的职位？",
      desc: "优秀的头脑永远是稀缺资源。如果你坚信自己能为 ACM Prime 带来独特的价值，请直接将简历与自荐信发送给我们。",
      btn: "投递开放申请 (Open Application)"
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
      title: "Careers at ACM Prime",
      subtitle: "Stop Theorizing. Start Shaping Real Business Impact.",
      desc: "At ACM Prime, we don't hire cogs for a corporate machine. We seek ambitious disruptors with sharp commercial intuition and bias for action. Here, you will directly drive the core strategies of cross-border enterprises.",
    },
    culture: {
      title: "The Boutique Advantage",
      items: [
        { 
          id: "01", title: "Flat Structure, Direct Impact", 
          desc: "No bureaucratic red tape. From day one, you'll be mentored directly by senior partners and engage in high-stakes conversations with C-Level executives." 
        },
        { 
          id: "02", title: "Zero Fluff", 
          desc: "Your work won't end up as a dusty report. From concept to execution, you'll witness firsthand how your insights translate into multi-million pound revenue growth for our clients." 
        },
        { 
          id: "03", title: "True Global Exposure", 
          desc: "Rooted in London, bridging the UK and China. Navigate complex cross-cultural commercial dynamics daily, rapidly building an irreplaceable global skill set and network." 
        }
      ]
    },
    positions: {
      title: "Open Positions",
      desc: "We are currently hiring for the following core roles at our London HQ. If you crave rapid growth, join us.",
      items: [
        {
          title: "Cross-Border Strategy Analyst",
          location: "London, UK (Hybrid)",
          type: "Full-time",
          reqs: ["Lead industry research and market entry feasibility studies.", "Assist senior advisors in building financial models and business plans.", "Bilingual (English/Mandarin) with exceptional analytical skills."]
        },
        {
          title: "Business Development Manager (UK-China)",
          location: "London, UK",
          type: "Full-time",
          reqs: ["Develop and maintain high-value client relationships in the UK-China corridor.", "Lead cross-cultural negotiations and close strategic partnerships.", "3+ years in B2B sales or consulting, existing network is a strong plus."]
        }
      ]
    },
    cta: {
      title: "Don't see a perfect fit?",
      desc: "Brilliant minds are always a scarce resource. If you believe you can bring unique value to ACM Prime, send us your CV and a pitch.",
      btn: "Submit Open Application"
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function CareersPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = dictionary[lang];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-acm-gold selection:text-white flex flex-col">
      
      {/* --- 1. 统一导航栏 --- */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-16 bg-[#05101E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={300} height={200} priority className="w-auto h-8 md:h-11 object-contain" />
          </Link>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 text-[13px] font-semibold text-white/80 uppercase tracking-widest">
            <Link href="/services" className="hover:text-acm-gold transition-colors">{t.nav.services}</Link>
            <Link href="/insights" className="hover:text-acm-gold transition-colors">{t.nav.insights}</Link>
            <Link href="/about" className="hover:text-acm-gold transition-colors">{t.nav.about}</Link>
            {/* 当前页面：加入我们，高亮为金色 */}
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

      {/* --- 2. 招聘专属首屏 (深邃且具有感召力) --- */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-16 bg-[#05101E] overflow-hidden">
        {/* 背景图：团队协作/商务高级抽象图 */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
           <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop" alt="Team Work" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05101E] via-transparent to-[#05101E]/80"></div>

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

      {/* --- 3. 为什么选择我们 (精品咨询的独特优势) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E]">{t.culture.title}</h2>
            <div className="w-16 h-1 bg-acm-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {t.culture.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 bg-[#F8FAFC] border border-gray-100 flex items-center justify-center rounded-sm mb-8 group-hover:bg-acm-gold transition-colors duration-500">
                    <span className="text-2xl font-serif font-bold text-gray-300 group-hover:text-[#05101E] transition-colors duration-500">{item.id}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#05101E] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. 开放职位 (Job Listings) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E] mb-4">{t.positions.title}</h2>
            <p className="text-gray-600 text-lg font-light">{t.positions.desc}</p>
          </div>

          <div className="space-y-6">
            {t.positions.items.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-sm border border-gray-200 hover:border-acm-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-8"
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-[#05101E] mb-3">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-[#05101E]/5 text-[#05101E] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">{job.location}</span>
                    <span className="bg-acm-gold/10 text-acm-gold text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">{job.type}</span>
                  </div>
                  <ul className="space-y-3">
                    {job.reqs.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-gray-600 font-light text-sm md:text-base">
                        <span className="text-acm-gold mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="shrink-0 mt-4 md:mt-0">
                  <a href={`mailto:careers@acmprime.com?subject=Application: ${job.title}`} className="inline-block border border-[#05101E] text-[#05101E] px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#05101E] hover:text-white transition-all duration-300 rounded-sm w-full md:w-auto text-center">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. 开放申请 (Open Application CTA) --- */}
      <section className="bg-acm-gold py-24 px-6 text-center">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E] mb-6 leading-tight">
               {t.cta.title}
            </h2>
            <p className="text-[#05101E]/80 text-lg font-light mb-10 max-w-2xl mx-auto">
               {t.cta.desc}
            </p>
            <a href="mailto:careers@acmprime.com?subject=Open Application: ACM Prime" className="inline-block bg-[#05101E] text-white px-10 py-5 text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 rounded-sm shadow-2xl hover:-translate-y-1">
               {t.cta.btn}
            </a>
         </motion.div>
      </section>

      {/* --- 6. 统一页脚 --- */}
      <footer className="bg-[#05101E] text-white pt-10 pb-10 px-6 md:px-16 border-t border-white/10 mt-auto">
        {/* ... (此处省略与之前完全一致的 footer 代码，以免太长，你可以直接复制上面的 footer 放进来，或者就用我写好的这一段) ... */}
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