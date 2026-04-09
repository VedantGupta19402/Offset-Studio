import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SlashLabel from '../ui/SlashLabel'
import { workItems } from '../../data/work'

export default function WorkSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Use clientX/Y for viewport-relative positioning (FIXED position)
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      className="py-20 px-8 md:px-20 border-b border-os-border relative"
      onMouseMove={handleMouseMove}
    >
      <SlashLabel className="mb-12">selected work</SlashLabel>

      {/* Floating image — follows cursor using FIXED positioning */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            key="thumb"
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[9999] pointer-events-none overflow-hidden rounded shadow-2xl"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 80,
              width: '280px',
              height: '190px',
            }}
          >
            <img
              src={workItems[hoveredIdx]?.image}
              alt={workItems[hoveredIdx]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-os-accent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Work list */}
      <div className="divide-y divide-os-border">
        {workItems.map((item, i) => (
          <Link
            key={item.slug}
            to={`/work/${item.slug}`}
            className="flex items-center justify-between py-8 group"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="flex items-start gap-8">
              {/* Split stacked number: 0 on top, digit on bottom */}
              <div
                className="flex flex-col items-center leading-none text-os-muted group-hover:text-os-accent transition-colors duration-300 mt-1"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1rem',
                  color: '#555',
                  minWidth: '24px',
                }}
              >
                <span>0</span>
                <span>{(i + 1).toString()}</span>
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-6xl text-os-white group-hover:text-os-accent transition-colors duration-300 leading-none">
                  {item.title}
                </h3>
                <p className="text-os-muted text-xs tracking-wider mt-2 group-hover:text-os-white transition-colors duration-300">
                  {item.tags}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 hidden md:flex">
              <span className="text-os-muted text-sm group-hover:text-os-white transition-colors">{item.year}</span>
              <span className="text-os-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">→</span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-os-white hover:text-os-accent transition-all duration-300 group mt-14"
      >
        discover more
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
    </section>
  )
}
