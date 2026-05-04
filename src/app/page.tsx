'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MapPin, Phone, FileText, Bot, Sparkles, User, Loader2, Menu, Building2, Layers } from "lucide-react";

// Responsive Image Column (Agency Background)
const ImageColumn = ({ images, speed, direction = 1, mobileHidden = false }: { images: string[], speed: number, direction?: number, mobileHidden?: boolean }) => {
  return (
    <div className={`video-column ${mobileHidden ? 'mobile-hidden' : ''}`} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <motion.div 
        animate={{ y: direction > 0 ? [0, -1800] : [-1800, 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem", willChange: "transform" }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="video-item" style={{ 
            position: "relative", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 15px 30px rgba(0,0,0,0.5)", backgroundColor: "#000",
            border: "1px solid rgba(255,255,255,0.05)", opacity: 0.4, transform: "translateZ(0)"
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
    <div style={{ position: "relative", minHeight: "100vh", background: "#050505", color: "#fff", overflowX: "hidden" }}>
      
      {/* 1. Background */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", gap: "1rem", zIndex: 0, pointerEvents: "none" }}>
        <ImageColumn images={images} speed={60} direction={1} />
        <ImageColumn images={images} speed={90} direction={-1} mobileHidden />
      </div>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(5,5,5,0.95) 100%)", zIndex: 1 }} />

      {/* 2. Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Navigation */}
        <nav style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "950", fontFamily: "var(--font-serif)", letterSpacing: "0.15em" }}>
            NADOO <span style={{ color: "var(--primary)" }}>AGENCY</span>
          </div>
          <div className="desktop-only" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <a style={{ fontWeight: "700" }}>SERVICES</a>
            <a style={{ fontWeight: "700" }}>PORTFOLIO</a>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: "0.7rem 1.8rem" }}>CONTACT US</button>
          </div>
          <button className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", color: "var(--primary)" }}>
            <Menu size={28} />
          </button>
        </nav>

        {/* Hero */}
        <main className="container" style={{ paddingTop: "6rem", paddingBottom: "8rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ 
              fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 8vw, 7.5rem)", 
              fontWeight: "900", lineHeight: 1.1, marginBottom: "3rem", wordBreak: "keep-all" 
            }}>
              AI로 완성하는 <br /> <span style={{ color: "var(--primary)" }}>비즈니스 자동화</span>
            </h1>
            <p style={{ 
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#aaa", maxWidth: "750px", 
              margin: "0 auto 4rem", lineHeight: "1.6", wordBreak: "keep-all", padding: "0 1.5rem" 
            }}>
              단순한 도구를 넘어, 비즈니스의 성장 엔진이 됩니다. <br /> 나두 AI 에이전시의 전담 팀이 귀하의 비즈니스를 24시간 가동시켜 드립니다.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: "1.4rem 3.5rem" }}>전략 컨설팅 신청</button>
          </motion.div>

          {/* Solutions */}
          <section style={{ marginTop: "10rem" }}>
            <div className="feature-grid">
              {[
                { title: "전담 AI 팀 구축", desc: "고객님의 비즈니스에 최적화된 AI 팀원을 배치합니다." },
                { title: "워크플로우 최적화", desc: "불필요한 반복 업무를 AI가 대신 처리하도록 설계합니다." },
                { title: "디지털 마케팅 자동화", desc: "콘텐츠 생성부터 배포까지 AI가 스스로 관리합니다." }
              ].map((feature, i) => (
                <div key={i} className="video-card" style={{ padding: "3.5rem 2rem", textAlign: "left", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "var(--primary)", fontWeight: "900", fontSize: "1rem", marginBottom: "1rem" }}>SOLUTION 0{i+1}</div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "1.2rem", wordBreak: "keep-all" }}>{feature.title}</h3>
                  <p style={{ color: "#888", fontSize: "1.1rem", lineHeight: "1.7", wordBreak: "keep-all" }}>{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Slogan */}
            <div style={{ marginTop: "12rem", marginBottom: "10rem", textAlign: "center" }}>
              <div style={{ 
                fontFamily: "var(--font-handwriting)", fontSize: "clamp(2.5rem, 7vw, 6.5rem)", 
                color: "var(--primary)", marginBottom: "1.5rem", wordBreak: "keep-all", padding: "0 1.5rem", lineHeight: "1.3"
              }}>
                "당신의 시간은 더 <br className="mobile-only" /> 가치 있는 곳에 쓰여야 합니다."
              </div>
              <p style={{ color: "#444", letterSpacing: "0.5em", fontSize: "0.9rem" }}>AI-DRIVEN BUSINESS GROWTH</p>
            </div>
          </section>

          {/* Chatbot */}
          <section style={{ marginTop: "5rem", marginBottom: "8rem" }}>
            <div style={{ background: "rgba(204, 255, 0, 0.02)", padding: "4rem 1.5rem", borderRadius: "32px", border: "1px solid rgba(204, 255, 0, 0.15)", textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
                <div style={{ padding: "0.8rem", background: "var(--primary)", borderRadius: "14px" }}><Bot size={32} color="#000" /></div>
                <div><h3 style={{ fontSize: "1.6rem", fontWeight: "950" }}>에이전시 상담봇</h3><p style={{ color: "var(--primary)", fontWeight: "800", fontSize: "0.9rem" }}>비즈니스 프로세스 자동화 문의</p></div>
              </div>
              {!isChatActive && !isSuccess ? (
                <button onClick={() => setIsChatActive(true)} className="btn-primary" style={{ width: "100%" }}>상담 신청서 작성</button>
              ) : isSuccess ? (
                <div style={{ background: "rgba(204, 255, 0, 0.05)", padding: "2rem", borderRadius: "20px", textAlign: "center" }}><h4>감사합니다! 곧 연락드릴게요. ✨</h4></div>
              ) : (
                <form onSubmit={handleChatSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input name="name" type="text" placeholder="성함/기업명" required className="mobile-input-fix" />
                  <input name="phone" type="tel" placeholder="연락처" required className="mobile-input-fix" />
                  <textarea name="message" placeholder="자동화가 필요한 업무를 적어주세요." rows={3} required className="mobile-input-fix" style={{ resize: "none" }} />
                  <button type="submit" disabled={isSubmitting} className="btn-primary">{isSubmitting ? "전송 중..." : "프로젝트 의뢰 전송"}</button>
                </form>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer style={{ marginTop: "8rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "6rem", textAlign: "left" }}>
            <div className="neon-text" style={{ fontSize: "2.5rem", fontWeight: "950", marginBottom: "3rem", fontFamily: "var(--font-serif)" }}>NADOO_AI</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div><span style={{ fontWeight: "900", color: "var(--primary)" }}>LOCATION</span><p style={{ color: "#666", marginTop: "0.5rem" }}>광주광역시 서구 상무중앙로 7, 5층 (치평동, 상무타워)</p></div>
              <div><span style={{ fontWeight: "900", color: "var(--primary)" }}>CONTACT</span><p style={{ color: "#666", marginTop: "0.5rem" }}>010-4892-3376 | nadoo_ai@naver.com</p></div>
              <p style={{ color: "#444", fontSize: "0.9rem" }}>
                상호: 나두에이아이 | 대표자: 오민주 | 사업자번호: 434-40-01488<br />
                © 2026 NADOO AI AGENCY. ALL RIGHTS RESERVED.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
