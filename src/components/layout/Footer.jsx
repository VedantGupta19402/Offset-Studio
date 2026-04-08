import { Link } from 'react-router-dom'
import CycleWords from '../ui/CycleWords'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>

      {/* CTA Strip */}
      <div style={{ padding: '7rem 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginBottom: '1.5rem' }}>
          <span style={{ color: '#d4ff00' }}>/</span> Ready to Make it Official?
        </p>
        
        {/* "let's" */}
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 1, color: '#f5f2ee', margin: 0 }}>
          let's
        </h2>
        
        {/* Cycling word — its own full line, accent color */}
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 1, margin: 0, overflow: 'hidden', height: '1.05em' }}>
          <CycleWords />
        </h2>

        {/* CTA circular button — NOT a text link */}
        <div style={{ marginTop: '3rem' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '80px', height: '80px', borderRadius: '50%',
              border: '2px solid #d4ff00', color: '#d4ff00', fontSize: '1.5rem',
              textDecoration: 'none', transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4ff00'; e.currentTarget.style.color = '#0a0a0a' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d4ff00' }}
            aria-label="Contact us"
          >
            →
          </Link>
        </div>
      </div>

      {/* Footer Details */}
      <div style={{ padding: '4rem 5vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginBottom: '1rem' }}>
            <span style={{ color: '#d4ff00' }}>/</span> write to us
          </p>
          <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Telephone</p>
          <a href="tel:+919876543210" style={{ color: '#f5f2ee', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
            +91 98765 43210
          </a>
          <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Email</p>
          <a href="mailto:hello@offsetstudio.in" style={{ color: '#f5f2ee', textDecoration: 'none', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            General: hello@offsetstudio.in
          </a>
          <a href="mailto:partner@offsetstudio.in" style={{ color: '#f5f2ee', textDecoration: 'none', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            New Biz: partner@offsetstudio.in
          </a>
          <a href="mailto:join@offsetstudio.in" style={{ color: '#f5f2ee', textDecoration: 'none', display: 'block', fontSize: '0.9rem' }}>
            Careers: join@offsetstudio.in
          </a>
        </div>
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', marginBottom: '1rem' }}>
            <span style={{ color: '#d4ff00' }}>/</span> find us
          </p>
          <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Address</p>
          <address style={{ color: '#f5f2ee', fontStyle: 'normal', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Offset Studio<br />
            42 Linking Road, Bandra West<br />
            Mumbai, 400050
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '1.5rem 5vw', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          ↑ back to top
        </button>
        <p style={{ fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>
          2025 © OFFSET STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '10px', color: '#555' }}>
          <Link to="/privacy" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#f5f2ee'} onMouseLeave={e => e.target.style.color = '#555'}>Privacy</Link>
          <span>/</span>
          <Link to="/terms" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#f5f2ee'} onMouseLeave={e => e.target.style.color = '#555'}>Terms</Link>
          <span style={{ margin: '0 0.5rem' }}>·</span>
          {['IN', 'IG', 'BE', 'X', 'FB'].map(s => (
            <a key={s} href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '10px', letterSpacing: '0.1em', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#d4ff00'} onMouseLeave={e => e.target.style.color = '#555'}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
