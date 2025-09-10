import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { questions as allQuestions } from '../../data/questions'; // adjust path

interface TechnicalQuizProps {
  onComplete: () => void;
  onSkip: () => void;
}

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export function TechnicalQuiz({ onComplete, onSkip }: TechnicalQuizProps) {
  const [questions, setQuestions] = useState(allQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // shuffle once at component mount
    setQuestions(shuffleArray(allQuestions).slice(0, 10)); 
    // slice(0, 10) → optional: limit to 10 random questions per quiz
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentQ = questions[currentQuestion];
    const userAnswer = inputValue.trim().toLowerCase();
    const correctAnswer = currentQ.correctAnswer.toLowerCase();

    if (userAnswer === correctAnswer || userAnswer === correctAnswer.replace(/\s+/g, '')) {
      setAnswers([...answers, inputValue]);
      setScore(score + 1);

      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setInputValue('');
          setShowHint(false);
          setAttempts(0);
        }, 800);
      } else {
        setTimeout(() => {
          setShowResults(true);
        }, 800);
      }
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setShowHint(true);
      }
      setInputValue('');
    }
  };

  const handleCompleteQuiz = () => {
    setTimeout(onComplete, 2000);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center bg-gray-900 border border-green-500 rounded-2xl p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl mb-6"
          >
            {score === questions.length ? '🎉' : score >= questions.length / 2 ? '👏' : '💪'}
          </motion.div>

          <h2 className="text-3xl font-bold text-white mb-4">
            {score === questions.length ? 'Perfect Score!' : 
             score >= questions.length / 2 ? 'Well Done!' : 'Good Effort!'}
          </h2>

          <div className="text-green-400 text-xl mb-6">
            You scored {score} out of {questions.length}
          </div>

          <div className="bg-black border border-green-500/30 rounded-lg p-6 mb-8">
            <div className="text-gray-300 text-left space-y-3">
              {questions.map((q, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    idx < score ? 'bg-green-500 text-black' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">{q.question}</div>
                    <div className="text-green-400 text-xs mt-1">✓ {q.correctAnswer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={handleCompleteQuiz}
            className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Technical Portfolio
          </motion.button>

          <div className="mt-6 text-gray-400 text-sm">
            Welcome to the technical experience! 🚀
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-mono text-sm mb-2"
              >
                Technical Challenge #{currentQuestion + 1}
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Quick Tech Check
              </h1>
              <div className="text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div
                className="bg-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Question */}
            <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
              <h3 className="text-xl text-white mb-4 font-mono">
                {currentQ.question}
              </h3>

              {/* Hint */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4"
                  >
                    <div className="text-yellow-400 text-sm flex items-start space-x-2">
                      <span>💡</span>
                      <span>{currentQ.hint}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your answer..."
                  className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-3 text-green-400 font-mono focus:border-green-500 focus:outline-none"
                  autoFocus
                />
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Submit Answer
                  </button>
                  
                  {!showHint && attempts === 0 && (
                    <button
                      type="button"
                      onClick={() => setShowHint(true)}
                      className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-3 rounded-lg hover:bg-yellow-500/30 transition-colors"
                    >
                      💡 Hint
                    </button>
                  )}
                </div>
              </form>

              {/* Attempts */}
              {attempts > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-red-400 text-sm flex items-center space-x-2"
                >
                  <span>❌</span>
                  <span>Try again! ({attempts} attempt{attempts > 1 ? 's' : ''})</span>
                </motion.div>
              )}
            </div>

            {/* Skip Option */}
            <div className="text-center">
              <button
                onClick={onSkip}
                className="text-gray-500 hover:text-gray-300 text-sm font-mono transition-colors border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg"
              >
                Skip Quiz & Enter Portfolio →
              </button>
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Code Block Visualization */}
            <div className="bg-gray-900 border border-green-500 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">technical-quiz.js</span>
              </div>

              <div className="space-y-2 text-green-400">
                <div><span className="text-blue-400">const</span> developer = <span className="text-yellow-300">'Tanitoluwa'</span>;</div>
                <div><span className="text-blue-400">const</span> challenge = <span className="text-yellow-300">'technical-assessment'</span>;</div>
                <div className="text-gray-500">// Question {currentQuestion + 1} of {questions.length}</div>
                <div><span className="text-blue-400">if</span> (answer.correct) &#123;</div>
                <div className="ml-4">progress.next();</div>
                <div>&#125; <span className="text-blue-400">else</span> &#123;</div>
                <div className="ml-4">showHint();</div>
                <div>&#125;</div>
              </div>

              {/* Animated cursor */}
              <motion.div
                className="mt-2 flex items-center"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-green-500 mr-2">&gt;</span>
                <span className="bg-green-500 text-black px-1">█</span>
              </motion.div>
            </div>

          
          </motion.div>
        </div>
      </div>
    </div>
  );
}