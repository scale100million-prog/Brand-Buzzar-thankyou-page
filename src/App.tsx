import { motion } from 'motion/react';
import { Clock, Mail, SearchCheck, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const instructions = [
    {
      title: 'Stay Available',
      description: 'Please be ready for our scheduled session, as punctuality is key to maximizing our time together.',
      icon: <Clock />,
    },
    {
      title: 'Check Your Inbox',
      description: 'The meeting link will be shared via your registered Email and WhatsApp.',
      icon: <Mail />,
    },
    {
      title: 'Pre-Call Audit',
      description: 'A member of our team will reach out for a quick pre-call discovery. This helps us understand your business better so we can provide a proper audit during our main call.',
      icon: <SearchCheck />,
    },
  ];

  return (
    <div className="bg-brand-black min-h-screen relative overflow-x-hidden">
      <div className="flex flex-col items-center justify-center px-6 py-16 md:py-24 max-w-6xl mx-auto pb-48 md:pb-56">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-1.5 bg-brand-orange mb-8 rounded-full" />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] max-w-4xl">
              Thank you for booking a <span className="text-brand-orange">call with us!</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              We value your time as much as ours. Here's what you need to know before our session starts.
            </p>
          </motion.div>

          {/* Instructions Section */}
          <motion.div 
            variants={itemVariants}
            className="grid gap-8 md:grid-cols-3 w-full"
          >
            {instructions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/[0.05] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center gap-6 hover:border-brand-orange/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center p-3.5 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(255,140,0,0.2)]">
                  <div className="text-black w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {item.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-[15px] font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Persistent Sticky Footer CTA (Mobile & Desktop) */}
      <div className="fixed bottom-0 inset-x-0 p-6 md:p-10 bg-gradient-to-t from-black via-black/90 to-transparent z-[100] flex justify-center pointer-events-none">
        <motion.a
          href="https://chat.whatsapp.com/JWUsj12v1mXFdeZY941nBa?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full max-w-xl bg-brand-orange hover:bg-orange-400 text-black font-extrabold py-5 px-8 md:px-12 rounded-full flex items-center justify-center gap-4 text-base md:text-xl uppercase tracking-wider shadow-[0_10px_40px_rgba(255,140,0,0.3)] transition-all duration-300 no-underline cursor-pointer pointer-events-auto"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current" />
          <span>Join Community on WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
}
