import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from 'react';

interface GamesSectionProps {
  onBackToSelection: () => void;
}

// Tic Tac Toe Game Component
function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white-500/30">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Tic Tac Toe</h3>
      
      <div className="text-center mb-6">
        {winner ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xl text-green-400 font-bold"
          >
            🎉 Player {winner} Wins!
          </motion.div>
        ) : isDraw ? (
          <div className="text-xl text-yellow-400 font-bold">It's a Draw! 🤝</div>
        ) : (
          <div className="text-xl text-blue-300">
            Player {isXNext ? 'X' : 'O'}'s Turn
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6">
        {board.map((cell, index) => (
          <motion.button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 bg-blue-900/50 border-2 border-blue-400/50 rounded-lg text-3xl font-bold text-white hover:bg-blue-800/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!!cell || !!winner}
          >
            {cell && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className={cell === 'X' ? 'text-red-400' : 'text-blue-400'}
              >
                {cell}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={resetGame}
          className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

// Memory Game Component
function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const emojis = ['🚀', '🎮', '💻', '🎯', '🌟', '🎪', '🎨', '🎭'];

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  React.useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (cards[cardId].flipped || cards[cardId].matched) return;

    const newCards = [...cards];
    newCards[cardId].flipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      setMoves(moves + 1);

      if (cards[first].emoji === cards[second].emoji) {
        // Match found
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[first].matched = true;
          updatedCards[second].matched = true;
          setCards(updatedCards);
          setFlippedCards([]);

          // Check if game is won
          if (updatedCards.every(card => card.matched)) {
            setGameWon(true);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[first].flipped = false;
          updatedCards[second].flipped = false;
          setCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Memory Game</h3>
      
      <div className="text-center mb-6">
        <div className="text-blue-300 mb-2">Moves: {moves}</div>
        {gameWon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xl text-green-400 font-bold"
          >
            🎉 You Won in {moves} moves!
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto mb-6">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className="w-16 h-16 bg-blue-900/50 border-2 border-blue-400/50 rounded-lg text-2xl hover:bg-blue-800/50 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotateY: card.flipped || card.matched ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {card.flipped || card.matched ? card.emoji : '❓'}
            </motion.div>
          </motion.button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={initializeGame}
          className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export function GamesSection({ onBackToSelection }: GamesSectionProps) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      description: 'Classic strategy game for two players',
      icon: '⭕',
      component: TicTacToe
    },
    {
      id: 'memory',
      title: 'Memory Game',
      description: 'Test your memory with emoji matching',
      icon: '🧠',
      component: MemoryGame
    }
  ];

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    const GameComponent = game?.component;

    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => setSelectedGame(null)}
              className="text-blue-300 hover:text-white transition-colors mb-4 flex items-center space-x-2 mx-auto"
            >
              <span>←</span>
              <span>Back to Games</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {GameComponent && <GameComponent />}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Game Zone 🎮
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Welcome to the fun zone! Take a break and enjoy some casual games. 
            No portfolios, no pressure - just pure entertainment.
          </p>

          <button
            onClick={onBackToSelection}
            className="text-white hover:text-white transition-colors border border-white px-6 py-3 rounded-lg font-mono"
          >
            ← Back to Track Selection
          </button>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl border border-white p-8 hover:border-white transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{game.title}</h3>
                <p className="text-white mb-6">{game.description}</p>
                <button className="bg-white border border-white hover:bg-gray-400 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-500/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-400 mb-4">More Games Coming Soon!</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-500">
            <div className="p-4 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🎲</div>
              <div>Dice Game</div>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <div>Target Practice</div>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🧩</div>
              <div>Puzzle Game</div>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🎪</div>
              <div>Carnival Games</div>
            </div>
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-white"
        >
          <p className="font-mono text-sm">
            🎮 Built for fun • No high scores saved • Just enjoy the moment
          </p>
        </motion.div>
      </div>
    </div>
  );
}