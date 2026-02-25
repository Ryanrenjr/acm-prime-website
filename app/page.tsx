"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 精简清晰版字典 ---
const dictionary = {
  zh: {
    nav: { services: "核心服务", insights: "洞察与案例", about: "关于我们", careers: "加入我们", contact: "联系专家" },
    hero: {
      title1: "连接中英市场。",
      title2: "驱动全球增长。",
      desc: "ACM Prime 是一家专注于搭建中英市场桥梁的精品商业咨询机构。我们拒绝空谈理论，只为您提供最务实、可落地的跨国增长战略。",
      btn: "与我们的专家探讨",
    },
    trust: {
      est: "成立于 2019 年",
      hq: "总部位于 英国伦敦",
      reg: "注册编号: 11903226",
      type: "精品跨国咨询机构" // 调整了这里的文案，更一目了然
    },
    services: {
      label: "我们能为您做什么？",
      title: "四大核心专长",
      items: [
        { id: "01", title: "跨国扩张与落地", desc: "为中国企业赴英、英国企业入华提供端到端支持。涵盖市场准入、合规指导及高层团队搭建。" },
        { id: "02", title: "战略增长咨询", desc: "打破商业惯性，与您的领导团队共创可持续的增长路线图，提升跨国组织韧性与敏捷度。" },
        { id: "03", title: "中英商务促进", desc: "充当“文化翻译官”与高阶资源整合者，精准匹配两国核心经济圈的高价值商业合作伙伴。" },
        { id: "04", title: "战略财务规划", desc: "提供跨国资本结构优化、早期资金部署及风险对冲建议，实现资本效率最大化。" }
      ]
    },
    footer: {
      desc: "将长期愿景转化为可衡量的商业成功。作为连接中英商业走廊的精品咨询机构，我们为您提供精准的战略落地与高价值商业协同。",
      linksTitle: "快速链接",
      links: [
        { name: "核心服务", path: "/services" },
        { name: "洞察与案例", path: "/insights" },
        { name: "关于我们", path: "/about" },
        { name: "加入我们", path: "/careers" }
      ],
      officeTitle: "伦敦总部",
      officeAddress: "英国伦敦 大波特兰街167-169号 5楼",
      officePostcode: "邮编: W1W 5PF",
      contactTitle: "直接联系我们",
      email: "hello@acmprime.com", 
      social: ["领英 (LinkedIn)", "微信公众号 (WeChat)"],
      copyright: "© 2026 ACM Prime Limited. 保留所有权利。",
      legal: ["隐私政策", "使用条款", "Cookie 政策"]
    }
  },
  en: {
    nav: { services: "Services", insights: "Insights", about: "About Us", careers: "Careers", contact: "Contact Experts" },
    hero: {
      title1: "Bridging UK & China.",
      title2: "Driving Global Growth.",
      desc: "ACM Prime is a boutique business consultancy dedicated to bridging the UK and Chinese markets. We eschew grand theories to provide pragmatic, actionable cross-border growth strategies.",
      btn: "Speak with our Experts",
    },
    trust: {
      est: "Established in 2019",
      hq: "Headquartered in London",
      reg: "Company No: 11903226",
      type: "Boutique Consultancy"
    },
    services: {
      label: "How We Help You Grow",
      title: "Our Core Expertise",
      items: [
        { id: "01", title: "Cross-Border Expansion", desc: "End-to-end support for UK-China market entry, encompassing compliance, local setup, and executive team building." },
        { id: "02", title: "Strategic Growth", desc: "Co-creating sustainable roadmaps with your leadership to enhance organizational resilience and agility." },
        { id: "03", title: "Business Facilitation", desc: "Acting as cultural translators and resource integrators to match high-value strategic partners across both nations." },
        { id: "04", title: "Financial Planning", desc: "Cross-border capital structure optimization, early-stage deployment, and risk hedging for maximum efficiency." }
      ]
    },
    footer: {
      desc: "Turning long-term visions into measurable commercial success. As the solid bridge in the UK-China business corridor, we provide top-tier strategic frameworks and high-value synergies.",
      linksTitle: "Quick Links",
      links: [
        { name: "Services", path: "/services" },
        { name: "Insights & Case Studies", path: "/insights" },
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" }
      ],
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("en");
  useEffect(() => {
    const nextLang = new URLSearchParams(window.location.search).get("lang");
    if (nextLang === "zh" || nextLang === "en") {
      setLang(nextLang);
    }
  }, []);
  const withLang = (path: string) => `${path}?lang=${lang}`;
  const t = dictionary[lang];

  return (
    // 添加了 scroll-smooth 类，确保点击锚点时是“平滑滑动”到底部，而不是生硬地跳跃
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-acm-gold selection:text-white flex flex-col scroll-smooth">
      
      {/* --- 1. 统一导航栏 --- */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-16 bg-[#05101E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href={withLang("/")} className="flex items-center shrink-0">
            <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={300} height={200} priority className="w-auto h-8 md:h-11 object-contain" />
          </Link>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 text-[13px] font-semibold text-white/80 uppercase tracking-widest">
            <Link href={withLang("/services")} className="hover:text-acm-gold transition-colors">{t.nav.services}</Link>
            <Link href={withLang("/insights")} className="hover:text-acm-gold transition-colors">{t.nav.insights}</Link>
            <Link href={withLang("/about")} className="hover:text-acm-gold transition-colors">{t.nav.about}</Link>
            <Link href={withLang("/careers")} className="hover:text-acm-gold transition-colors">{t.nav.careers}</Link>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="text-[13px] font-bold text-white hover:text-acm-gold transition-colors flex items-center gap-1">
              <span className={lang === 'en' ? 'text-acm-gold' : ''}>EN</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'zh' ? 'text-acm-gold' : ''}>中</span>
            </button>
            
            {/* 关键修改 1：导航栏的“联系专家”变成了跳转到底部的锚点链接 */}
            <a href="#contact" className="hidden md:block bg-acm-gold text-[#05101E] px-6 py-2.5 text-sm font-bold hover:bg-white transition-colors rounded-sm shadow-md">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* --- 2. 极致清晰的 Hero 首屏 --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-16 flex flex-col justify-center min-h-[85vh] bg-[#05101E] overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
           <img src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1920&auto=format&fit=crop" alt="Abstract Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05101E] via-[#05101E]/90 to-transparent"></div>
        
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[1.1] tracking-tight mb-8">
              {t.hero.title1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-acm-gold to-[#E5C985]">{t.hero.title2}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              {t.hero.desc}
            </motion.p>
            <motion.div variants={fadeInUp}>
              {/* 关键修改 2：大图里的按钮也变成了跳转到底部的锚点链接 */}
              <a href="#contact" className="bg-white text-[#05101E] px-8 py-4 text-sm md:text-base font-bold tracking-wide hover:bg-acm-gold hover:text-white transition-all duration-300 rounded-sm inline-flex items-center gap-3 group shadow-lg">
                {t.hero.btn}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- 3. 信任背书栏 --- */}
      <section className="bg-white border-b border-gray-200 py-8 px-6 md:px-16 relative z-20 shadow-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
          <div className="px-4"><p className="text-[#05101E] font-bold text-sm md:text-base">{t.trust.est}</p></div>
          <div className="px-4">
            <p className="text-[#05101E] font-bold text-sm md:text-base">{t.trust.hq}</p>
            <p className="text-gray-500 text-xs mt-1 hidden md:block">Great Portland Street</p>
          </div>
          <div className="px-4"><p className="text-[#05101E] font-bold text-sm md:text-base">{t.trust.reg}</p></div>
          <div className="px-4">
            <p className="text-[#05101E] font-bold text-sm md:text-base">{t.trust.type}</p>
          </div>
        </div>
      </section>

      {/* --- 4. 核心服务概览 (一目了然的网格) --- */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto flex-grow w-full">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-acm-gold font-bold tracking-widest uppercase text-sm mb-4 block">{t.services.label}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#05101E] leading-tight">{t.services.title}</h2>
          </motion.div>
          <div className="hidden md:block w-32 h-[2px] bg-acm-gold mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {t.services.items.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="flex items-center gap-6 mb-6">
                <span className="text-3xl font-serif text-gray-300 group-hover:text-acm-gold transition-colors duration-300">{item.id}</span>
                <div className="h-[1px] flex-grow bg-gray-200 group-hover:bg-acm-gold/50 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#05101E] mb-4 group-hover:text-acm-gold transition-colors duration-300">{item.title}</h3>
              {/* 文案经过压缩，更加直接了当 */}
              <p className="text-gray-600 leading-relaxed font-light md:text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. 页脚 (加上了 id="contact" 以供锚点跳转) --- */}
      <footer id="contact" className="bg-[#05101E] text-white pt-20 pb-10 px-6 md:px-16 border-t border-white/10 mt-auto">
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
                  <li key={index}>
                    {/* 顺手把底部的链接也用 Link 组件打通了！ */}
                    <Link href={link.path} className="text-white/70 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
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
              <a href={`mailto:${t.footer.email}`} className="block text-white/70 hover:text-white text-lg font-serif mb-6 transition-colors">
                {t.footer.email}
              </a>
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
