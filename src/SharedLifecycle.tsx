import { motion, useReducedMotion } from 'framer-motion';
import { Flow } from './primitives';
import { keynoteEase } from './motion';
const stages=['Nápad','PoC','Produkční příprava','Validace','Produkce'];

/** The parent scene keeps the same React key for slides 13–14, preserving this DOM. */
export function SharedLifecycle({production}:{production:boolean}){
 const reduced=useReducedMotion();
 return <div className={`lifecycle ${production?'production':''}`} data-shared-lifecycle="true"><Flow items={stages} active={production?[0,1,2]:[0,1]}/><motion.div aria-hidden="true" className="lifecycle-progress" initial={false} animate={{width:production?'40%':'20%'}} transition={{duration:reduced?0:.75,ease:keynoteEase}}/><motion.span aria-hidden="true" className="lifecycle-focus" initial={false} animate={{left:production?'40%':'20%'}} transition={{duration:reduced?0:.65,ease:keynoteEase}}/></div>;
}
