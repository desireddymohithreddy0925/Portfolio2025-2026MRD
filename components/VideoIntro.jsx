'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

const VIDEO_SRC = '/videos/portfolioMRD.mp4';

export default function VideoIntro({ scrollTargetId = 'next-section' }) {
  const rootRef = useRef(null);
  const bgVideoRef = useRef(null);
  const fgVideoRef = useRef(null);
  const fgWrapRef = useRef(null);
  const taglineRef = useRef(null);
  const nameLine1Ref = useRef(null);
  const nameLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const controlsRef = useRef(null);
  const scrollRef = useRef(null);
  const soundHintRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showHint, setShowHint] = useState(true);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(fgWrapRef.current, { opacity: 1, duration: 1.6, ease: 'power2.out' }, 0)
        .to(taglineRef.current, { opacity: 1, duration: 0.9 }, 0.5)
        .to(
          [nameLine1Ref.current, nameLine2Ref.current],
          {
            y: '0%',
            duration: 1.3,
            stagger: 0.12,
          },
          0.65
        )
        .to(subtitleRef.current, { opacity: 1, duration: 1 }, 1.3)
        .to(controlsRef.current, { opacity: 1, duration: 0.8 }, 1.5)
        .to(scrollRef.current, { opacity: 1, duration: 0.8 }, 1.7);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Auto-hide sound hint after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  function togglePlay() {
    const fg = fgVideoRef.current;
    const bg = bgVideoRef.current;
    if (!fg) return;
    if (isPlaying) {
      fg.pause();
      bg?.pause();
    } else {
      fg.play();
      bg?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function toggleMute() {
    const fg = fgVideoRef.current;
    if (!fg) return;
    fg.muted = !fg.muted;
    setIsMuted(fg.muted);
    setShowHint(false);
  }

  function handleScrollClick() {
    const target = document.getElementById(scrollTargetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className={styles.hero} ref={rootRef}>
      {/* Blurred ambient background layer */}
      <div className={styles.bgVideoWrap}>
        <video
          ref={bgVideoRef}
          className={styles.bgVideo}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Foreground talking-head video */}
      <div className={styles.fgVideoWrap} ref={fgWrapRef}>
        <video
          ref={fgVideoRef}
          className={styles.fgVideo}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        />
      </div>

      {/* Cinematic dark gradients for legibility */}
      <div className={styles.vignette} />
      <div className={styles.gradientBottom} />
      <div className={styles.grain} />

      {/* Three.js bokeh particle atmosphere */}
      <div className={styles.particleLayer}>
        <CinematicLayer />
      </div>

      {/* Content overlay */}
      <div className={styles.content}>
        <span className={styles.tagline} ref={taglineRef}>
          Product Engineer &amp; Builder
        </span>

        <div className={styles.nameBlock}>
          <span className={styles.nameLine}>
            <span className={styles.nameLineInner} ref={nameLine1Ref}>MOHITH REDDY</span>
          </span>
          <span className={styles.nameLine}>
            <span className={styles.nameLineInner} ref={nameLine2Ref}>DESIREDDY</span>
          </span>
        </div>

        <p className={styles.subtitle} ref={subtitleRef}>
          <strong>CS &amp; Product Engineering student</strong> at SRM University AP,
          shipping full-stack products with React, Node and a growing fluency in
          AI-native development — one line, one system at a time.
        </p>
      </div>

      {/* Sound hint badge */}
      <div
        ref={soundHintRef}
        className={`${styles.soundHint} ${showHint ? styles.visible : ''}`}
        aria-hidden="true"
      >
        <span className={styles.pulseDot} />
        Tap for sound
      </div>

      {/* Glass controls */}
      <div className={styles.controls} ref={controlsRef}>
        <button
          type="button"
          className={styles.glassBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className={styles.glassBtn}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 10v4h4l5 5V5L7 10H3z" />
              <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="2" />
              <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 10v4h4l5 5V5L7 10H3z" />
              <path
                d="M16.5 8.5a5 5 0 010 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M19 6a9 9 0 010 12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className={styles.scrollIndicator}
        ref={scrollRef}
        onClick={handleScrollClick}
        aria-label="Scroll to next section"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </button>
    </section>
  );
}
