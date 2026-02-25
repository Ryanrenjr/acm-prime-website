"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 专为 ACM Prime (精品咨询/初创) 定制的务实且专业的字典 ---
const dictionary = {
  zh: {
    nav: { services: "核心服务", insights: "洞察与案例", about: "关于我们", careers: "加入我们", contact: "联系专家" },
    hero: {
      title: "洞察与案例",
      subtitle: "立足务实，交付精准战略。",
      desc: "作为一家深谙中英两地商业生态的精品咨询机构，我们不空谈宏大理论，而是聚焦于企业跨国落地中的真实痛点。在这里，了解我们如何帮助成长型企业实现从 0 到 1 的跨国跨越。",
    },
    tabs: { insights: "实战洞察", cases: "落地案例" },
    insights: [
      {
        tag: "出海指南",
        readTime: "6 分钟阅读",
        title: "中国科技企业出海英国：从 0 到 1 的合规与落地避坑指南",
        desc: "抛开宏大叙事，针对初创与成长期企业，详细拆解在英国设立实体、开立银行账户及初步税务合规的实操步骤。",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
      },
      {
        tag: "文化与谈判",
        readTime: "5 分钟阅读",
        title: "隐形的商业壁垒：中英跨文化谈判中如何建立真实的互信",
        desc: "合同往往只是开始。探讨在与英国本地经销商或合作伙伴沟通时，如何跨越思维差异，促成长期、深度的绑定。",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
      },
      {
        tag: "财务规划",
        readTime: "8 分钟阅读",
        title: "轻资产出海：初创企业在英的早期资金部署策略",
        desc: "资源有限的情况下，如何通过合理的早期架构设计，最大化利用资金，同时为未来的本地化融资做好准备。",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    cases: [
      {
        industry: "智能硬件 (Consumer Tech)",
        title: "协助中国成长期智能品牌完成英国市场首发与渠道破冰",
        challenge: "该品牌在国内已有一定知名度，但首次进入英国市场，面临品牌认知度为零、缺乏本地化运营团队、且难以获取核心分销商信任的窘境。",
        solution: "ACM Prime 介入后，为其重新梳理了符合英国本土语境的商业 BP。我们利用独家网络，直接为其引荐了 3 家匹配度极高的本土中型分销商，并全程协助完成了第一轮入驻谈判与合规审查。",
        impact: "帮助客户在极短时间内以“轻模式”完成市场初步验证，避免了盲目建厂或组建庞大团队的沉没成本。",
        metrics: ["4 个月", "实现从尽调到产品上架"],
        img: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1200&auto=format&fit=crop"
      },
      {
        industry: "专门制造业 (Niche Manufacturing)",
        title: "为英国创新科技公司精准匹配中国高品质供应链",
        challenge: "一家英国的初创科技硬件公司急需寻找高性价比且能满足小批量、高定制化要求的中国代工厂。由于跨国沟通成本极高且缺乏信任基础，项目进展缓慢。",
        solution: "我们基于对中国长三角、珠三角供应链的深度了解，为其进行了严格的尽职调查，筛选出 5 家候选工厂。并作为“文化翻译官”和商务代表，协助敲定了质量控制标准与首批打样协议。",
        impact: "客户无需在疫情/高昂差旅成本下频繁飞往中国，即获得了可靠的产能支持，极大缩短了产品的研发到量产周期。",
        metrics: ["降低 30%", "前期跨国沟通与试错成本"],
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    cta: {
      title: "想了解我们如何协助您的业务？",
      btn: "预约初步咨询"
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
      title: "Insights & Cases",
      subtitle: "Pragmatic Strategies. Precision Execution.",
      desc: "As a boutique consultancy deeply rooted in the UK-China ecosystem, we eschew grand theories to focus on the real pain points of cross-border expansion. Discover how we help growing enterprises achieve zero-to-one success.",
    },
    tabs: { insights: "Actionable Insights", cases: "Proven Impact" },
    insights: [
      {
        tag: "EXPANSION GUIDE",
        readTime: "6 MIN READ",
        title: "From 0 to 1: A Practical Compliance Guide for Chinese Tech in the UK",
        desc: "Skipping the jargon: a step-by-step breakdown of entity registration, banking, and early-stage tax compliance for growing tech firms landing in the UK.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
      },
      {
        tag: "CULTURAL SYNERGY",
        readTime: "5 MIN READ",
        title: "The Invisible Barrier: Building Genuine Trust in UK-China Negotiations",
        desc: "A contract is just the beginning. How to navigate mindset differences and foster deep, long-term partnerships with local distributors.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
      },
      {
        tag: "FINANCIAL PLANNING",
        readTime: "8 MIN READ",
        title: "Asset-Light Expansion: Early-Stage Capital Deployment in the UK",
        desc: "How startups can maximize limited resources through smart early-stage architectural design while preparing for future localized fundraising.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      }
    ],
    cases: [
      {
        industry: "Consumer Tech",
        title: "Facilitating UK Market Launch & Channel Breakthrough for a Growing Smart Device Brand",
        challenge: "Established domestically, the brand faced zero recognition in the UK, lacked a local ops team, and struggled to gain the trust of core regional distributors.",
        solution: "ACM Prime reframed their commercial pitch for the UK context. Leveraging our boutique network, we directly introduced them to 3 highly matched mid-market distributors and guided them through the initial compliance reviews.",
        impact: "Enabled the client to achieve rapid, asset-light market validation, avoiding the massive sunk costs of blind expansion or premature team building.",
        metrics: ["4 Months", "From Due Diligence to Shelves"],
        img: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1200&auto=format&fit=crop"
      },
      {
        industry: "Niche Manufacturing",
        title: "Precision Sourcing: Connecting a UK Tech Innovator with High-Quality Chinese Supply Chains",
        challenge: "A UK hardware startup urgently needed a cost-effective Chinese manufacturer capable of handling low-volume, high-customization orders. Progress was stalled by communication barriers and lack of trust.",
        solution: "Drawing on our deep understanding of the PRD/YRD manufacturing hubs, we conducted strict due diligence to shortlist 5 vetted factories. Acting as cultural and commercial liaisons, we helped finalize QC standards and initial prototyping agreements.",
        impact: "The client secured reliable production support without the need for expensive, frequent travel during uncertain times, drastically shortening their R&D-to-production cycle.",
        metrics: ["30% Reduced", "Initial Trial & Error Costs"],
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    cta: {
      title: "Want to explore how we can support your growth?",
      btn: "Book an Initial Consultation"
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

export default function InsightsPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  useEffect(() => {
    const nextLang = new URLSearchParams(window.location.search).get("lang");
    if (nextLang === "zh" || nextLang === "en") {
      setLang(nextLang);
    }
  }, []);
  const withLang = (path: string) => `${path}?lang=${lang}`;
  const t = dictionary[lang];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-acm-gold selection:text-white flex flex-col">
      
      {/* --- 1. 统一导航栏 --- */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-16 bg-[#05101E]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href={withLang("/")} className="flex items-center shrink-0">
            <Image src="/logo-transparent.png" alt="ACM Prime Logo" width={300} height={200} priority className="w-auto h-8 md:h-11 object-contain" />
          </Link>
          <div className="hidden lg:flex space-x-10 xl:space-x-12 text-[13px] font-semibold text-white/80 uppercase tracking-widest">
            <Link href={withLang("/services")} className="hover:text-acm-gold transition-colors">{t.nav.services}</Link>
            <Link href={withLang("/insights")} className="text-acm-gold transition-colors">{t.nav.insights}</Link>
            <Link href={withLang("/about")} className="hover:text-acm-gold transition-colors">{t.nav.about}</Link>
            <Link href={withLang("/careers")} className="hover:text-acm-gold transition-colors">{t.nav.careers}</Link>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="text-[13px] font-bold text-white hover:text-acm-gold transition-colors flex items-center gap-1">
              <span className={lang === 'en' ? 'text-acm-gold' : ''}>EN</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'zh' ? 'text-acm-gold' : ''}>中</span>
            </button>
            <a href="#contact" className="hidden md:block bg-acm-gold text-[#05101E] px-6 py-2.5 text-sm font-bold hover:bg-white transition-colors rounded-sm shadow-md">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* --- 2. 知识型深色首屏 --- */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-16 bg-[#05101E] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
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

      {/* --- 3. 深度洞察瀑布流 (务实路线) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E]">{t.tabs.insights}</h2>
            <div className="hidden md:block w-full max-w-[60%] h-[1px] bg-gray-200 mb-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.insights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 rounded-sm hover:shadow-xl hover:shadow-[#05101E]/5 transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-acm-gold">{item.tag}</span>
                    <span className="text-[11px] text-gray-400 font-medium uppercase">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#05101E] mb-4 leading-snug group-hover:text-acm-gold transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <div className="text-[#05101E] font-bold text-sm flex items-center gap-2 group-hover:text-acm-gold transition-colors">
                    阅读全文 <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. 实战精选案例 (真实初创/成长期案例) --- */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#05101E]">{t.tabs.cases}</h2>
            <div className="hidden md:block w-full max-w-[60%] h-[1px] bg-gray-200 mb-2"></div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {t.cases.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* 案例图片 */}
                <div className={`lg:col-span-5 relative h-[300px] lg:h-[450px] w-full rounded-sm overflow-hidden shadow-lg ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                   <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute top-4 left-4 bg-[#05101E] text-acm-gold text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm">
                     {item.industry}
                   </div>
                </div>

                {/* 案例内容 (挑战->方案->结果) */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#05101E] mb-8 leading-tight">
                     {item.title}
                   </h3>
                   
                   <div className="space-y-6 mb-10">
                     <div>
                       <h4 className="text-sm font-bold text-acm-gold uppercase tracking-wider mb-2">Challenge (面临挑战)</h4>
                       <p className="text-gray-600 font-light leading-relaxed">{item.challenge}</p>
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-acm-gold uppercase tracking-wider mb-2">Solution (战略架构)</h4>
                       <p className="text-gray-600 font-light leading-relaxed">{item.solution}</p>
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-acm-gold uppercase tracking-wider mb-2">Impact (商业影响)</h4>
                       <p className="text-gray-600 font-light leading-relaxed">{item.impact}</p>
                     </div>
                   </div>

                   {/* 核心数据展示块 */}
                   <div className="inline-flex flex-col bg-[#F8FAFC] border-l-4 border-acm-gold p-6">
                      <span className="text-3xl md:text-4xl font-serif font-bold text-[#05101E] mb-1">{item.metrics[0]}</span>
                      <span className="text-sm text-gray-500 uppercase tracking-widest">{item.metrics[1]}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. 简约 CTA --- */}
      <section className="bg-[#05101E] py-16 px-6 text-center border-t border-white/10">
         <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-xl md:text-2xl font-serif font-medium text-white">
               {t.cta.title}
            </h2>
            <a href="#contact" className="inline-block border border-acm-gold text-acm-gold px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-acm-gold hover:text-[#05101E] transition-all duration-300 rounded-sm">
               {t.cta.btn}
            </a>
         </div>
      </section>

      {/* --- 6. 统一页脚 --- */}
      <footer id="contact" className="bg-[#05101E] text-white pt-10 pb-10 px-6 md:px-16 border-t border-white/10 mt-auto">
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
