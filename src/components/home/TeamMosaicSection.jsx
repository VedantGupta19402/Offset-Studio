import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ROW 1: Auto-scrolling photo conveyor belt
const photoStrip = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop',
]

// ROW 2: Mosaic grid photos
const mosaicPhotos = [
  { src: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&q=80&auto=format&fit=crop', cols: 1, rows: 2 },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop', cols: 2, rows: 1 },
  { src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80&auto=format&fit=crop', cols: 1, rows: 1 },
  { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&auto=format&fit=crop', cols: 1, rows: 1 },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop', cols: 2, rows: 2 },
  { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&auto=format&fit=crop', cols: 1, rows: 1 },
]

export default function TeamMosaicSection() {
  // Double the strip photos for seamless infinite scroll
  const doubledStrip = [...photoStrip, ...photoStrip]

  return (
    <section style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* ── PART A: AUTO-SCROLLING PHOTO STRIP ── */}
      <div style={{ overflow: 'hidden', padding: '4rem 0' }}>
        <div style={{ display: 'flex', gap: '12px', width: 'max-content', animation: 'photoScroll 30s linear infinite' }}>
          {doubledStrip.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: '280px', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'filter 0.5s' }}
                onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'}
                onMouseLeave={e => e.target.style.filter = 'grayscale(20%)'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Photo strip CSS animation — inject into page */}
      <style>{`
        @keyframes photoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── WHO WE ARE text between the two rows ── */}
      <div style={{ padding: '3rem 5vw 4rem' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#d4ff00', marginBottom: '1.5rem', fontFamily: '"DM Sans", sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#d4ff00' }}>/</span> who we are
        </p>
        <p style={{ color: '#777', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, maxWidth: '600px', fontFamily: '"DM Sans", sans-serif', marginBottom: '2rem' }}>
          We are a motley crew of creative nerds. We have each other's backs.
          We cover our clients' flanks. We push the limits of strategy and design
          while keeping code clean and scalable.
        </p>
        <Link to="/team" style={{ color: '#f5f2ee', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif', textDecoration: 'none', borderBottom: '1px solid #555', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#d4ff00'; e.currentTarget.style.borderColor = '#d4ff00' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#f5f2ee'; e.currentTarget.style.borderColor = '#555' }}>
          explore our team →
        </Link>
      </div>

      {/* ── PART B: MOSAIC GRID WITH WATERMARK + CTA ── */}
      <div style={{ position: 'relative', padding: '0 5vw 6rem' }}>

        {/* Faded watermark text behind the grid */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'rgba(255,255,255,0.03)', letterSpacing: '0.1em', whiteSpace: 'nowrap', userSelect: 'none' }}>
            OFFSETSTUDIO
          </span>
        </div>

        {/* Mosaic grid */}
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 180px)', gap: '8px' }}>
          {mosaicPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{ gridColumn: `span ${photo.cols}`, gridRow: `span ${photo.rows}`, overflow: 'hidden', borderRadius: '6px' }}
            >
              <img src={photo.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(25%)', transition: 'filter 0.5s, transform 0.5s' }}
                onMouseEnter={e => { e.target.style.filter = 'grayscale(0%)'; e.target.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.target.style.filter = 'grayscale(25%)'; e.target.style.transform = 'scale(1)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CLICK TO EXPLORE overlay button — center of mosaic */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, pointerEvents: 'none' }}>
          <Link to="/team"
            style={{ pointerEvents: 'all', backgroundColor: 'rgba(10,10,10,0.85)', border: '1px solid #d4ff00', color: '#d4ff00', fontFamily: '"DM Sans", sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none', backdropFilter: 'blur(8px)', transition: 'background-color 0.3s, color 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4ff00'; e.currentTarget.style.color = '#0a0a0a' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.85)'; e.currentTarget.style.color = '#d4ff00' }}
          >
            CLICK TO EXPLORE
          </Link>
        </div>
      </div>
    </section>
  )
}
