import { motion } from "framer-motion";
export default function BouncingText() {
  return (
    <>
      
        <motion.div 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 0 }} 
          transition={{ delay: 1.5, duration: 0.5 }} // Espera 1s después del rebote y desaparece en 0.5s
          style={{color:"whitesmoke",fontSize:'2rem'}}
        >
          <h1 className="text-5xl font-bold flex text-effect">
            {["¡","H", "O", "L", "A","!"].map((letter, index) => (
              <motion.span 
                key={index}
                initial={{ y: 50, opacity: 0 }} // Empieza desde abajo y oculto
                animate={{ y: [50, -10, 0], opacity: 1 }} // Rebota hacia arriba y se estabiliza
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.2 
                }} // Delay progresivo por letra
                style={{ display: "inline-block", margin: "0 5px" }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      
    </>
  );
}
