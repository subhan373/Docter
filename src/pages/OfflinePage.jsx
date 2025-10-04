import React, { useEffect, useState, useRef } from "react";
import { RefreshCcw, Moon, Sun } from "lucide-react";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem("dinoHighScore")) || 0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (isOnline) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth < 650 ? window.innerWidth - 40 : 600;
    canvas.height = 200;

    let dino = { x: 50, y: 150, w: 40, h: 40, dy: 0, jumpPower: -9, gravity: 0.5, isJumping: false };
    let obstacles = [];
    let frame = 0;
    let gameOver = false;
    let animation;
    let speed = 4;

    // Track scores in variables
    let currentScore = 0;
    let currentHighScore = highScore;

    function resetGame() {
      dino.y = 150;
      dino.dy = 0;
      obstacles = [];
      frame = 0;
      gameOver = false;
      currentScore = 0;
      speed = 4;
      setScore(0);
      loop();
    }

    function drawBackground() {
      ctx.fillStyle = darkMode ? "#0f172a" : "#f8fafc";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (darkMode) {
        ctx.fillStyle = "white";
        for (let i = 0; i < 30; i++) {
          ctx.fillRect(Math.random() * canvas.width, Math.random() * 100, 2, 2);
        }
      }
    }

    function drawDino() {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.font = "35px Arial";
      ctx.fillText("🦕", -dino.x - dino.w, dino.y + dino.h);
      ctx.restore();
    }

    function drawObstacles() {
      ctx.font = "30px Arial";
      obstacles.forEach((ob) => ctx.fillText("🌵", ob.x, ob.y + ob.h));
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();

      // Ground
      ctx.fillStyle = darkMode ? "#475569" : "#ddd";
      ctx.fillRect(0, 190, canvas.width, 5);

      // Dino physics
      dino.y += dino.dy;
      dino.dy += dino.gravity;
      if (dino.y > 150) {
        dino.y = 150;
        dino.isJumping = false;
      }
      drawDino();

      // Obstacles
      if (frame % 90 === 0) obstacles.push({ x: canvas.width, y: 160, w: 20, h: 30 });
      obstacles.forEach((ob) => (ob.x -= speed));
      obstacles = obstacles.filter((ob) => ob.x + ob.w > 0);
      drawObstacles();

      // Collision detection
      obstacles.forEach((ob) => {
        if (
          dino.x < ob.x + ob.w &&
          dino.x + dino.w > ob.x &&
          dino.y < ob.y + ob.h &&
          dino.y + dino.h > ob.y
        ) {
          gameOver = true;
        }
      });

      if (!gameOver) {
        frame++;
        if (frame % 10 === 0) {
          currentScore++;
          setScore(currentScore);

          // Night mode
          if (currentScore >= 300 && !darkMode) setDarkMode(true);

          // Increase speed
          if (currentScore % 100 === 0) speed += 0.5;
        }
        animation = requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(animation);

        // Update high score immediately
        if (currentScore > currentHighScore) {
          currentHighScore = currentScore;
          setHighScore(currentHighScore);
          localStorage.setItem("dinoHighScore", currentHighScore);
        }

        ctx.fillStyle = "red";
        ctx.font = "18px Arial";
        ctx.fillText(`💀 Game Over! Score: ${currentScore} | High Score: ${currentHighScore}`, canvas.width / 12, 100);
        ctx.fillText("Tap / Space to Restart", canvas.width / 3, 130);
      }
    }

    function loop() {
      update();
    }

    function jump() {
      if (!dino.isJumping) {
        dino.dy = dino.jumpPower;
        dino.isJumping = true;
      }
    }

    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        if (gameOver) resetGame();
        else jump();
      }
    };

    const handleTap = () => {
      if (gameOver) resetGame();
      else jump();
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleTap);

    resetGame();

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleTap);
    };
  }, [isOnline, darkMode]);

  if (isOnline) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900"
      } text-center px-4 z-50`}
    >
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold">📡 No Internet</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-110 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <p className="mb-4 text-sm sm:text-base">Oops! You're offline. Play Dino while waiting 🚀</p>

      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded mb-4 bg-white w-full max-w-[600px] h-[200px]"
      ></canvas>

      <div className="flex gap-6 mb-4 text-sm sm:text-base">
        <p>🏆 Score: <span className="font-semibold">{score}</span></p>
        <p>🥇 High Score: <span className="font-semibold">{highScore}</span></p>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 bg-[#5F6FFF] text-white px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-[#3f4ec4] transition text-sm sm:text-base"
      >
        <RefreshCcw size={18} />
        Retry Connection
      </button>
    </div>
  );
}
