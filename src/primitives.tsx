import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
export const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
export function Reveal({children, delay=0, className=''}:{children:ReactNode;delay?:number;className?:string}) {
 return <motion.div className={className} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.55,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function Heading({children}:{children:ReactNode}) {return <h1>{children}</h1>}
export function Takeaway({children}:{children:ReactNode}) {return <p className="takeaway">{children}</p>}
export function Flow({items,active, className=''}:{items:string[];active?:number[];className?:string}) {
 return <ol className={`flow ${className}`} style={{'--count':items.length} as CSSProperties}>{items.map((item,i)=><li key={item} className={active&&!active.includes(i)?'dim':''}><Reveal delay={i*.13}><span className="step-no">{String(i+1).padStart(2,'0')}</span><span className="flow-node"/><h3>{item}</h3></Reveal></li>)}</ol>
}
export function Copilot({className=''}:{className?:string}) {return <img className={`copilot ${className}`} src={asset('copilot.png')} alt="GitHub Copilot"/>}
