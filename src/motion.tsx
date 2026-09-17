import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const keynoteEase = [.22, 1, .36, 1] as const;

/** Decorative packets use a normalized SVG path. No timers or per-frame React updates. */
export function DataPulse({ path='M 0 5 L 100 5', viewBox='0 0 100 10', period=7.5, delay=0, reverse=false, className='', track=false }:{
 path?:string;viewBox?:string;period?:number;delay?:number;reverse?:boolean;className?:string;track?:boolean;
}) {
 const reduced=useReducedMotion();
 return <svg className={`data-pulse ${className}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true" focusable="false" style={{'--pulse-period':`${period*.65}s`,'--pulse-delay':`${-delay}s`} as CSSProperties}>
  {track&&<path d={path} className="pulse-track"/>}
  {!reduced&&<path d={path} pathLength="100" className={`pulse-packet ${reverse?'reverse':''}`}/>}
 </svg>;
}

/** CSS individual translate keeps idle floating independent of entrance transforms. */
export function FloatingElement({children,className='',period=8,delay=0}:{children:ReactNode;className?:string;period?:number;delay?:number}) {
 return <span className={`floating-element ${className}`} style={{'--float-period':`${period}s`,'--float-delay':`${delay}s`} as CSSProperties}>{children}</span>;
}

export function HeroLayer({src,className,delay,period}:{src:string;className:string;delay:number;period:number}) {
 const reduced=useReducedMotion();
 return <motion.img className={`${className} hero-layer`} src={src} alt="" initial={reduced?false:{opacity:0,y:12,scale:.975,rotateY:-3}} animate={{opacity:1,y:0,scale:1,rotateY:0}} transition={{duration:reduced?0:.85,delay:reduced?0:delay,ease:keynoteEase}} style={{'--float-period':`${period}s`,'--float-delay':`${delay+.9}s`} as CSSProperties}/>;
}

export function HeroConcept(){
 return <div className="art-caption"><b>NÁPAD</b><span>→<DataPulse period={7.5} delay={1.5}/></span><b>ŘEŠENÍ</b><span>→<DataPulse period={7.5} delay={2.05}/></span><b>DEPLOYMENT</b></div>;
}

export function HeroDigital(){return <div className="hero-digital" aria-hidden="true"><div className="digital-ring"/><div className="digital-ring ring-two"/>{['0101','1010','0011','1100'].map((code,i)=><span key={code} style={{'--i':i} as CSSProperties}>{code}</span>)}</div>}
