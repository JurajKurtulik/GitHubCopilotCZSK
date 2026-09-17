import type { ReactNode, CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DataPulse, keynoteEase } from './motion';
export const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
export function Reveal({children, delay=0, className=''}:{children:ReactNode;delay?:number;className?:string}) {
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.55,delay:reduced?0:delay,ease:keynoteEase}}>{children}</motion.div>;
}
export function Heading({children}:{children:ReactNode}) {return <h1>{children}</h1>}
export function Takeaway({children}:{children:ReactNode}) {return <p className="takeaway">{children}</p>}
export function Flow({items,active, className='',pulse=false,period=7.5}:{items:string[];active?:number[];className?:string;pulse?:boolean;period?:number}) {
 const reduced=useReducedMotion();
 return <div className={`flow-wrap ${className}`} style={{'--count':items.length} as CSSProperties}><ol className={`flow ${pulse?'flow-animated':''}`}>{items.map((item,i)=><motion.li key={item} className={active&&!active.includes(i)?'dim':''} initial={false} animate={{opacity:active&&!active.includes(i)?.28:1}} transition={{duration:reduced?0:.55}} style={{'--node-delay':`${i*.16+.3}s`,'--node-idle-delay':`${i*.3+.7}s`,'--pulse-period':`${period}s`} as CSSProperties}><Reveal delay={i*.16}><span className="step-no">{String(i+1).padStart(2,'0')}</span><span className="flow-node"/><h3>{item}</h3></Reveal></motion.li>)}</ol>{pulse&&<DataPulse className="flow-signal" period={period} delay={.55}/>}</div>
}
export function Copilot({className=''}:{className?:string}) {return <img className={`copilot ${className}`} src={asset('copilot.png')} alt="GitHub Copilot"/>}
