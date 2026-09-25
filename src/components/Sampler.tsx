"use client";
import { useEffect, useRef, useState } from "react";
import { projectPeriod, projects } from "@/data/portfolio";
import { projectNotes } from "@/data/liner-notes";
import { Arrow } from "./Marks";

const tracks = [projects[0], projects[1], projects[2], projects[4]];
const trackNames = ["Trust Me Bro", "OpenHealth", "Patent Analyzer", "RLoRA"];
const outcomes = [
  "10 models tested · 1,950 runs",
  "NVIDIA track winner · BeaverHacks",
  "Patent research · A2A orchestration",
  "57% pass@1 · Half the compute",
];
const labelNames = [
  <>
    TRUST
    <br />
    ME BRO.
  </>,
  <>
    OPEN
    <br />
    HEALTH.
  </>,
  <>
    PATENT
    <br />
    RESEARCH.
  </>,
  <>
    LESS.
    <br />
    BUT BETTER.
  </>,
];
const frequencies = [261.63, 329.63, 392, 523.25];

export default function Sampler() {
  const [selected, setSelected] = useState(0);
  const [sound, setSound] = useState(false);
  const [turn, setTurn] = useState(0);
  const audio = useRef<AudioContext | null>(null);
  const project = tracks[selected];
  const note = projectNotes[project.name];
  useEffect(
    () => () => {
      void audio.current?.close();
    },
    [],
  );
  async function playNote(index: number) {
    try {
      const context = audio.current ?? new AudioContext();
      audio.current = context;
      await context.resume();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequencies[index];
      gain.gain.setValueAtTime(0, context.currentTime);
      gain.gain.linearRampToValueAtTime(0.055, context.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.45);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.5);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
    } catch {
      setSound(false);
    }
  }
  function choose(index: number) {
    setSelected(index);
    setTurn((value) => value + 75);
    if (sound) void playNote(index);
  }
  return (
    <div className="sampler-scene">
      <div
        className="sampler"
        role="group"
        aria-label="Interactive project sampler"
      >
        <i className="screw screw-tl" aria-hidden="true" />
        <i className="screw screw-tr" aria-hidden="true" />
        <i className="screw screw-bl" aria-hidden="true" />
        <i className="screw screw-br" aria-hidden="true" />
        <div className="sampler-header">
          <span className="sampler-brand">
            ag<span> / </span>01
          </span>
          <span>
            PROJECT SAMPLER
            <br />
            SELECTED WORK, {projectPeriod}
          </span>
          <span className="speaker-holes" aria-hidden="true" />
        </div>
        <div className="sampler-body">
          <div className={`record-well track-${selected}`}>
            <div
              className="record"
              style={{ transform: `rotate(${turn}deg)` }}
              aria-hidden="true"
            >
              <div className="record-glint" />
            </div>
            <div className="record-label" aria-hidden="true">
              <span className="record-label-top">AJINKYA GOKULE</span>
              <strong>{labelNames[selected]}</strong>
              <span className="record-label-bottom">
                SIDE A · EXPERIMENT 0{selected + 1}
              </span>
              <i />
            </div>
          </div>
          <div className="sampler-right">
            <div
              className="project-display"
              id="sampler-display"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="display-header">
                <span>
                  <i /> SELECTED WORK
                </span>
                <span>0{selected + 1} / 04</span>
              </div>
              <span className="display-category">
                {note.category} / {project.year}
              </span>
              <h2>{project.name}</h2>
              <p>{note.summary}</p>
              <div className="display-outcome">{outcomes[selected]}</div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${project.name}, opens in a new tab`}
              >
                Explore project <Arrow diagonal />
              </a>
            </div>
            <div className="transport-controls">
              <div className="transport-buttons">
                <button
                  onClick={() => choose((selected + 3) % 4)}
                  aria-label="Previous project"
                >
                  <Arrow className="arrow-back" />
                </button>
                <button
                  onClick={() => choose((selected + 1) % 4)}
                  aria-label="Next project"
                >
                  <Arrow />
                </button>
              </div>
              <button
                className="sound-switch"
                aria-pressed={sound}
                onClick={() => {
                  const next = !sound;
                  setSound(next);
                  if (next) void playNote(selected);
                }}
              >
                <span className={`sound-led ${sound ? "is-on" : ""}`} /> SOUND{" "}
                {sound ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>
        <div className="pad-label">
          <span>PRESS A PROJECT KEY</span>
          <span>01–04</span>
        </div>
        <div
          className="project-pads"
          role="group"
          aria-label="Choose a featured project"
        >
          {tracks.map((track, index) => (
            <button
              key={track.name}
              className={`project-pad pad-${index} ${selected === index ? "is-selected" : ""}`}
              onClick={() => choose(index)}
              aria-pressed={selected === index}
              aria-controls="sampler-display"
            >
              <span className="pad-top">
                <b>0{index + 1}</b>
                <i />
              </span>
              <span className="pad-name">{trackNames[index]}</span>
            </button>
          ))}
        </div>
      </div>
      <span className="sampler-caption">
        <svg viewBox="0 0 80 34" fill="none" aria-hidden="true">
          <path
            d="M77 28C40 34 16 20 9 5m0 0 1 15M9 5l15 4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        A few things I put into the world.
      </span>
    </div>
  );
}
