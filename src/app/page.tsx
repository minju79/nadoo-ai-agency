'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, Loader2, Menu } from "lucide-react";

// Mirrorly-inspired Diagonal Column
const ImageColumn = ({ images, speed, direction = 1, delay = 0 }: { images: string[], speed: number, direction?: number, delay?: number }) => {
  return (
    <div className="video-column" style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "2.5rem",
      flex: "0 0 380px",
      transform: "translateZ(0)"
    }}>
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: direction > 0 ? [0, -2000] : [-2000, 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear", delay: delay }}
        style={{ display: "flex", flexDirection: "column", gap: "2.5rem", willChange: "transform" }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} style={{ 
            position: "relative", borderRadius: "30px", overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5)", backgroundColor: "#111",
            border: "1px solid rgba(255,255,255,0.05)", opacity: 0.6,
            height: "550px"
          }}>
            <img src={src} alt="agency work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const FORMSPREE_URL = "https://formspree.io/f/xzdoearv";
  const images = ["/work/agency1.jpg", "/work/agency2.jpg", "/work/agency3.jpg", "/work/agency4.jpg"];

  const handleChatSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => { setIsSuccess(false); setIsChatActive(false); }, 5000);
      }
    } catch (error) { alert("오류 발생"); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#050505", color: "#fff", overflow: "hidden" }}>
      
      {/* 1. DIAGONAL BACKGROUND (Mirrorly Inspired) */}
      <div style={{ 
        position: "fixed", 
        top: "-20%", 
        left: "-20%", 
        width: "140%", 
        height: "140%", 
        zIndex: 0,
        transform: "rotate(-10deg)", // THE CRITICAL TILT
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        pointerEvents: "none"
      }}>
        <ImageColumn images={images} speed={70} direction={1} delay={0} />
        <ImageColumn images={images} speed={95} direction={-1} delay={1} />
        <ImageColumn images={images} speed={65} direction={1} delay={0.5} />
        <ImageColumn images={images} speed={110} direction={-1} delay={2} />
        <ImageColumn images={images} speed={80} direction={1} delay={1.5} />
      </div>

      {/* Cinematic Overlay */}
      <div style={{ 
        position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
        background: "radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(5,5,5,0.95) 100%)", 
        zIndex: 1 
      }} />

      {/* 2. Content Layer */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Navigation */}
        <nav style={{ padding: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ fontSize: "1.8rem", fontWeight: "950", fontFamily: "var(--font-serif)", letterSpacing: "0.2em" }}>
            NADOO <span className="neon-text">AGENCY</span>
          </div>
          <div className="desktop-only" style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#portfolio" className="nav-link">PORTFOLIO</a>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: "0.8rem 2.5rem" }}>CONTACT</button>
          </div>
          <button className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", color: "var(--primary)" }}>
            <Menu size={32} />
          </button>
        </nav>

        {/* Hero Section */}
        <main className="container" style={{ paddingTop: "10rem", paddingBottom: "15rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <span style={{ 
              fontFamily: "var(--font-aesthetic)", fontSize: "clamp(1.2rem, 3vw, 2.2rem)", 
              marginBottom: "2rem", display: "block", color: "var(--primary)", fontWeight: "400", letterSpacing: "0.1em"
            }}>
              비즈니스의 가치를 높이는 AI 솔루션
            </span>
            
            <h1 style={{ 
              fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 8vw, 6.5rem)", 
              fontWeight: "900", lineHeight: 1.1, marginBottom: "3rem", wordBreak: "keep-all"
            }}>
              AI로 완성하는 <br />
              <span className="neon-text" style={{ fontStyle: "italic" }}>비즈니스 자동화</span>
            </h1>
            
            <p style={{ 
              fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)", color: "#aaa", maxWidth: "750px", 
              margin: "0 auto 5rem", lineHeight: "1.8", wordBreak: "keep-all", fontWeight: "300", fontFamily: "var(--font-aesthetic)"
            }}>
              단순한 도구를 넘어, 비즈니스의 성장 엔진이 됩니다. <br />
              나두 AI 에이전시의 전담 팀이 귀하의 비즈니스를 24시간 가동시켜 드립니다.
            </p>
            
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: "1.5rem 4rem", fontSize: "1.1rem" }}>
              전략 컨설팅 신청하기
            </button>
          </motion.div>

          {/* Solutions Grid */}
          <section id="services" style={{ marginTop: "15rem" }}>
            <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
              {[
                { title: "전담 AI 팀 구축", desc: "고객님의 비즈니스에 최적화된 AI 팀원을 배치하여 업무 효율을 극대화합니다." },
                { title: "워크플로우 최적화", desc: "불필요한 반복 업무를 AI가 대신 처리하도록 설계하여 핵심 가치에 집중하게 합니다." },
                { title: "디지털 마케팅 자동화", desc: "콘텐츠 생성부터 배포, 분석까지 AI가 스스로 관리하여 성과를 창출합니다." }
              ].map((feature, i) => (
                <div key={i} className="video-card" style={{ padding: "4rem 2.5rem", textAlign: "left", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(20px)" }}>
                  <div style={{ color: "var(--primary)", fontWeight: "900", fontSize: "1rem", marginBottom: "1.2rem", letterSpacing: "0.2em" }}>SOLUTION 0{i+1}</div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "1.2rem", wordBreak: "keep-all", fontFamily: "var(--font-serif)" }}>{feature.title}</h3>
                  <p style={{ color: "#888", fontSize: "1.1rem", lineHeight: "1.7", wordBreak: "keep-all", fontWeight: "300" }}>{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Premium Slogan */}
            <div style={{ marginTop: "15rem", marginBottom: "10rem" }}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                <h2 style={{ 
                  fontFamily: "var(--font-handwriting)", fontSize: "clamp(3rem, 7vw, 5rem)", 
                  lineHeight: "1.4", marginBottom: "1.5rem", wordBreak: "keep-all", color: "#ffffff", fontWeight: "400",
                  textShadow: "0 0 20px rgba(255,255,255,0.2)"
                }}>
                  "당신의 시간은 더 <br /> 가치 있는 곳에 쓰여야 합니다."
                </h2>
                <div style={{ width: "60px", height: "2px", background: "var(--primary)", margin: "2.5rem auto" }} />
                <p style={{ color: "#888", letterSpacing: "0.6em", fontSize: "1rem", fontWeight: "800", fontFamily: "var(--font-serif)" }}>AI-DRIVEN BUSINESS GROWTH</p>
              </motion.div>
            </div>
          </section>

          {/* Floating Consultation Box */}
          <section style={{ maxWidth: "950px", margin: "0 auto", background: "rgba(255, 255, 255, 0.03)", padding: "6rem 3rem", borderRadius: "60px", border: "1px solid rgba(204, 255, 0, 0.3)", textAlign: "left", backdropFilter: "blur(30px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2.5rem", marginBottom: "4rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--primary)", borderRadius: "24px", boxShadow: "0 10px 30px rgba(204, 255, 0, 0.3)" }}><Bot size={50} color="#000" /></div>
              <div>
                <h3 style={{ fontSize: "2.8rem", fontWeight: "950", color: "#fff" }}>나두 AI 상담봇</h3>
                <p style={{ color: "var(--primary)", fontWeight: "800", fontSize: "1.3rem", letterSpacing: "0.1em" }}>Business Automation Expert</p>
              </div>
            </div>
            
            <form onSubmit={handleChatSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <input name="name" type="text" placeholder="성함/기업명" required className="mobile-input-fix" style={{ fontSize: "1.2rem", padding: "1.8rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                <input name="phone" type="tel" placeholder="연락처" required className="mobile-input-fix" style={{ fontSize: "1.2rem", padding: "1.8rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
              <textarea name="message" placeholder="자동화가 필요한 업무나 궁금하신 내용을 적어주세요." rows={4} required className="mobile-input-fix" style={{ fontSize: "1.2rem", padding: "1.8rem", resize: "none", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
              <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ padding: "2rem", fontSize: "1.4rem" }}>
                {isSubmitting ? <Loader2 className="animate-spin" style={{ margin: "0 auto" }} /> : "프로젝트 의뢰 전송하기"}
              </button>
            </form>
          </section>

          {/* Footer */}
          <footer style={{ 
            marginTop: "20rem", 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            paddingTop: "8rem", 
            textAlign: "left",
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))"
          }}>
            <div className="neon-text" style={{ fontSize: "3.5rem", fontWeight: "950", marginBottom: "4rem", fontFamily: "var(--font-serif)", letterSpacing: "0.1em" }}>NADOO_AI</div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6rem", marginBottom: "6rem" }}>
              <div style={{ minWidth: "280px" }}>
                <span style={{ fontWeight: "900", color: "var(--primary)", fontSize: "1.2rem", letterSpacing: "0.2em", display: "block", marginBottom: "1.5rem" }}>LOCATION</span>
                <p style={{ color: "#ddd", fontSize: "1.1rem", lineHeight: "1.8" }}>광주광역시 서구 상무중앙로 7, 5층 <br />(치평동, 상무타워)</p>
              </div>
              <div style={{ minWidth: "280px" }}>
                <span style={{ fontWeight: "900", color: "var(--primary)", fontSize: "1.2rem", letterSpacing: "0.2em", display: "block", marginBottom: "1.5rem" }}>CONTACT</span>
                <p style={{ color: "#ddd", fontSize: "1.1rem", lineHeight: "1.8" }}>010-4892-3376 <br /> nadoo_ai@naver.com</p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "3rem", paddingBottom: "6rem" }}>
              <div>
                <p style={{ color: "#888", fontSize: "1rem", lineHeight: "1.8" }}>
                  상호: 나두에이아이 | 대표자: 오민주 | 사업자번호: 434-40-01488
                </p>
                <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  © 2026 NADOO AI AGENCY. ALL RIGHTS RESERVED.
                </p>
              </div>
              <div style={{ display: "flex", gap: "3rem" }}>
                <a className="nav-link" style={{ fontSize: "0.9rem" }}>INSTAGRAM</a>
                <a className="nav-link" style={{ fontSize: "0.9rem" }}>BLOG</a>
                <a className="nav-link" style={{ fontSize: "0.9rem" }}>YOUTUBE</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} style={{ position: "absolute", width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(20px)" }} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} style={{ position: "relative", background: "#0a0a0a", padding: "4rem 3rem", borderRadius: "40px", width: "100%", maxWidth: "550px", color: "#fff", textAlign: "center", border: "1px solid rgba(204, 255, 0, 0.2)", boxShadow: "0 50px 100px rgba(0,0,0,0.8)" }}>
              <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", cursor: "pointer", color: "#666" }}><X size={32} /></button>
              
              {isSuccess ? (
                <div style={{ padding: "4rem 2rem" }}>
                  <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>✨</div>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--primary)", marginBottom: "1rem" }}>신청 완료!</h2>
                  <p style={{ color: "#aaa", fontSize: "1.2rem" }}>전문가가 내용을 확인 후 <br /> 빠른 시일 내에 연락드리겠습니다.</p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: "3rem" }}>
                    <div style={{ display: "inline-block", padding: "1.5rem", background: "rgba(204, 255, 0, 0.1)", borderRadius: "24px", color: "var(--primary)", marginBottom: "2rem" }}><Bot size={40} /></div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "1rem" }}>무료 전략 컨설팅</h2>
                    <p style={{ color: "#888", fontSize: "1.1rem" }}>비즈니스 자동화의 첫 걸음, <br /> 나두 AI와 함께 설계하세요.</p>
                  </div>
                  
                  <form onSubmit={handleChatSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    <input name="name" type="text" placeholder="성함/기업명" required className="mobile-input-fix" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #222" }} />
                    <input name="phone" type="tel" placeholder="연락처" required className="mobile-input-fix" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #222" }} />
                    <textarea name="message" placeholder="상담 희망 내용 (자동화 목표 등)" rows={3} required className="mobile-input-fix" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #222", resize: "none" }} />
                    <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: "100%", padding: "1.5rem", fontSize: "1.3rem", marginTop: "1rem" }}>
                      {isSubmitting ? <Loader2 className="animate-spin" style={{ margin: "0 auto" }} /> : "컨설팅 신청하기"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
