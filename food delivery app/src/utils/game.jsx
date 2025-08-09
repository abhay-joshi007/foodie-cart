import { useEffect, useRef, useState } from "react";

const DeliveryDash = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return; // Only run game loop if the game is active

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initial positions & sizes
    let scooterX = 50;
    let scooterY = canvas.height - 70; // Place the scooter near the bottom
    const scooterWidth = 40;
    const scooterHeight = 20;

    let obstacleX = canvas.width;
    const obstacleY = canvas.height - 70;
    const obstacleWidth = 20;
    const obstacleHeight = 20;

    let speed = 3;
    let animationFrameId;

    // Game loop function
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move obstacle from right to left
      obstacleX -= speed;
      // If the obstacle moves off-screen, reset it and increase score
      if (obstacleX + obstacleWidth < 0) {
        obstacleX = canvas.width;
        setScore((prev) => prev + 10);
      }

      // Draw scooter (delivery vehicle)
      ctx.fillStyle = 'blue';
      ctx.fillRect(scooterX, scooterY, scooterWidth, scooterHeight);

      // Draw obstacle (a food item, for example)
      ctx.fillStyle = 'red';
      ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

      // Draw the score
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 10, 30);

      // Basic collision detection
      if (
        scooterX < obstacleX + obstacleWidth &&
        scooterX + scooterWidth > obstacleX &&
        scooterY < obstacleY + obstacleHeight &&
        scooterY + scooterHeight > obstacleY
      ) {
        setGameOver(true);
        setIsRunning(false);
        return; // Stop the game loop
      }

      animationFrameId = requestAnimationFrame(update);
    };

    // Start the game loop
    animationFrameId = requestAnimationFrame(update);

    // Clean up the animation frame when the component unmounts or game stops
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, score]);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Delivery Dash: Offline Edition</h1>
      {gameOver && <h2>Game Over! Your Score: {score}</h2>}
      {!isRunning && (
        <button onClick={startGame} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start Game
        </button>
      )}
      <div style={{ margin: '20px auto' }}>
        <canvas
          ref={canvasRef}
          width="500"
          height="300"
          style={{ border: '1px solid #333', background: '#f0f0f0' }}
        />
      </div>
      <p>Use this game as a fun offline distraction while waiting for connectivity!</p>
    </div>
  );
};

export default DeliveryDash;
