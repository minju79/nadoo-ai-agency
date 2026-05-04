'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, FileText } from "lucide-react";

// High-quality Infinite Scrolling Column (Brightened for Agency)
const MediaColumn = ({ images, speed, direction = 1 }: { images: string[], speed: number, direction?: number }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      <motion.div 
        animate={{ 
          y: direction > 0 ? [0, -1800] : [-1800, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: speed, 
          ease: "linear" 
        }}
        style={{ display: "flex", flexDirection: "column", gap: "4rem" }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} style={{ 
            position: "relative", 
            width: "420px", 
            height: "580px", 
            borderRadius: "32px", 
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            backgroundColor: "#111",
            border: "1px solid rgba(212,175,55,0.2)", 
            opacity: 0.55, 
            filter: "saturate(1.1) brightness(1.1)" 
          }}>
            <Image src={src} alt="Agency Solution" fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const agencyImages = [
    "/work/agency1.jpg",
    "/work/agency2.jpg",
    "/work/agency3.jpg",
    "/work/agency4.jpg",
    "/work/agency5.jpg",
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#050505", color: "#ffffff", overflow: "hidden" }}>
      
      {/* 1. Enhanced Agency Wall Background */}
      <div style={{ 
        position: "fixed", 
        top: "-15%", 
        left: "-10%", 
        width: "120%", 
        height: "130%", 
        display: "flex", 
        justifyContent: "center", 
        gap: "6rem", 
        zIndex: 0,
        pointerEvents: "none",
        transform: "rotate(-8deg) scale(1.15)"
      }}>
        <MediaColumn images={agencyImages} speed={65} direction={1} />
        <MediaColumn images={agencyImages} speed={90} direction={-1} />
        <MediaColumn images={agencyImages} speed={55} direction={1} />
        <MediaColumn images={agencyImages} speed={80} direction={-1} />
      </div>

      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        background: "radial-gradient(circle at center, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.85) 100%)",
        zIndex: 1 
      }} />

      {/* 2. Agency Content Layer */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Navigation */}
        <nav style={{ 
          padding: "3.5rem 4rem", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}>
          <div style={{ fontSize: "2rem", fontWeight: "900", fontFamily: "var(--font-serif)", letterSpacing: "0.25em" }}>
            NADOO <span style={{ color: "#d4af37" }}>AGENCY</span>
          </div>
          <div style={{ display: "flex", gap: "4rem", fontSize: "0.95rem", fontWeight: "700", letterSpacing: "0.15em", color: "#d4af37" }}>
            <a>SERVICES</a>
            <a>PROCESS</a>
            <a>CONTACT</a>
            <button className="btn-primary" style={{ padding: "0.8rem 2.5rem" }}>CONSULTING</button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container" style={{ paddingTop: "12rem", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              fontFamily: "var(--font-handwriting)", 
              fontSize: "3.2rem", 
              color: "#d4af37", 
              marginBottom: "2.5rem", 
              display: "block",
              transform: "rotate(-2deg)"
            }}>
              아이디어는 말로, 결과는 완성으로!
            </span>
            
            <h1 style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "8.5rem", 
              fontWeight: "400", 
              lineHeight: 0.95, 
              marginBottom: "4.5rem",
              letterSpacing: "-0.03em",
              textShadow: "0 0 40px rgba(0,0,0,0.8)"
            }}>
              말로 일시키는 시대 <br />
              <span style={{ fontStyle: "italic", color: "#d4af37" }}>AI 비즈니스 파트너</span>
            </h1>
            
            <p style={{ 
              fontSize: "1.6rem", 
              color: "#e0e0e0", 
              maxWidth: "900px", 
              margin: "2rem auto 7rem", 
              lineHeight: "1.8",
              fontWeight: "400",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
            }}>
              당신의 목소리가 곧 완벽한 결과물로 이어집니다. <br />
              시간은 절약하고, 가치는 더 높이세요. 나도 AI가 당신의 비즈니스를 빛냅니다.
            </p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
              <button className="btn-primary" style={{ padding: "1.5rem 4.5rem", fontSize: "1.2rem" }}>
                프로젝트 시작하기
              </button>
              <button style={{ 
                background: "rgba(255,255,255,0.05)", 
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212,175,55,0.6)", 
                color: "#d4af37",
                padding: "1.5rem 4rem", 
                borderRadius: "999px", 
                fontWeight: "700",
                fontSize: "1.2rem" 
              }}>
                포트폴리오 보기
              </button>
            </div>
          </motion.div>

          {/* Core Solutions */}
          <section style={{ marginTop: "25rem", paddingBottom: "15rem" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "4.5rem", marginBottom: "7rem", textAlign: "center" }}>
              Premium AI Solutions
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: "3.5rem" 
            }}>
              {[
                { title: "3D 홈페이지 제작", desc: "강렬한 첫인상과 압도적인 몰입감의 3D 웹사이트를 제작합니다." },
                { title: "맞춤형 AI 개발", desc: "비즈니스 특성에 최적화된 지능형 AI 솔루션을 구축합니다." },
                { title: "올인원 마케팅", desc: "기획부터 디자인, 자동화까지 말 한마디로 완성합니다." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  className="glass-card"
                  whileHover={{ y: -15, borderColor: "rgba(212,175,55,0.5)" }}
                  style={{ background: "rgba(10,10,10,0.6)" }}
                >
                  <div style={{ fontFamily: "var(--font-handwriting)", fontSize: "2.2rem", color: "#d4af37", marginBottom: "1.5rem" }}>
                    Solution 0{i+1}
                  </div>
                  <h3 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "2rem", color: "#fff" }}>{service.title}</h3>
                  <p style={{ color: "#c0c0c0", fontSize: "1.25rem", lineHeight: "1.8" }}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Business Info Footer */}
          <footer style={{ marginTop: "15rem", paddingBottom: "10rem", borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: "8rem" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "left" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "3rem", fontFamily: "var(--font-serif)", color: "#d4af37" }}>
                NADOO_AI
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem", color: "#888", fontSize: "1.1rem", lineHeight: "2" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <MapPin size={18} color="#d4af37" />
                    <span style={{ color: "#fff", fontWeight: "700" }}>LOCATION</span>
                  </div>
                  광주광역시 서구 상무중앙로 7, 5층 (치평동, 상무타워)
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <Phone size={18} color="#d4af37" />
                    <span style={{ color: "#fff", fontWeight: "700" }}>CONTACT</span>
                  </div>
                  대표번호: 010-4892-3376<br />
                  이메일: nadoo_ai@naver.com
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <FileText size={18} color="#d4af37" />
                    <span style={{ color: "#fff", fontWeight: "700" }}>BUSINESS INFO</span>
                  </div>
                  상호: 나두에이아이 | 대표자: 오민주<br />
                  사업자등록번호: 434-40-01488
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-handwriting)", fontSize: "2.5rem", color: "#d4af37", marginBottom: "1rem" }}>
                      "비즈니스의 가치를 AI로 완성합니다."
                    </p>
                    <div style={{ fontSize: "0.9rem", letterSpacing: "0.5em", color: "#444" }}>
                      © 2026 NADOO AI AGENCY. ALL RIGHTS RESERVED.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
