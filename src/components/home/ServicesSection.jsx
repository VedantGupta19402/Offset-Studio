import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    label: '/ digital',
    body: 'Starting with user-centered thinking, our team provides a knowledgebase and understanding of how to move people in the digital landscape. No matter the channel we can help define the story, experience, technology and implementation to help our clients succeed and grow.',
  },
  {
    label: '/ growth marketing',
    body: 'Growth marketing got watered down by gurus with slide decks. Our team delivers meaningful revenue by learning your business, your audience, and your margins. No shortcuts. Just sustainable growth that sticks.',
  },
  {
    label: '/ social',
    body: 'Social is the proving ground. Customers use it to validate your brand before they ever convert. We create content ecosystems that pull audiences from Instagram, LinkedIn, or TikTok back to your site — where validation turns into sales.',
  },
  {
    label: '/ production',
    body: 'Production can make or break digital projects. That\'s why we built it in-house: motion, video, 3D, and a fully equipped studio. Few agencies can match the scale and speed we deliver.',
  },
]

export default function ServicesSection() {
  return (
    <>
      {/* ── BRAND NAME HORIZONTAL TICKER ── */}
      <div style={{ overflow: 'hidden', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.2rem 0' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'brandTicker 20s linear infinite' }}>
          {Array(8).fill('OFFSETSTUDIO').map((text, i) => (
            <span key={i} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.1rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.08)', paddingRight: '3rem', whiteSpace: 'nowrap' }}>
              {text}
              <span style={{ color: '#d4ff00', marginLeft: '3rem' }}>·</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes brandTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── SERVICES — TWO COLUMN LAYOUT ── */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '6rem 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          {/* Left column — labels */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ padding: '3rem 3rem 3rem 0', borderBottom: i < services.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f5f2ee', margin: 0, lineHeight: 1 }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column — body text */}
          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.label + '-body'}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                viewport={{ once: true }}
                style={{ padding: '3rem 0 3rem 3rem', borderBottom: i < services.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', display: 'flex', alignItems: 'center' }}
              >
                <p style={{ fontFamily: '"DM Sans", sans-serif', color: '#777', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
