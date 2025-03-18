import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = document.body.scrollWidth; // Full page width
      canvas.height = document.body.scrollHeight; // Full page height
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let stars = Array.from({ length: 200 }, () => createStar(canvas));

    function createStar(canvas) {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * .7 + 1, // Increased min size for better visibility
        speedX: (Math.random() - 0.5) * 0.1, // Slightly faster movement
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.5, // Varying opacity for depth effect
      };
    }

    function updateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 3);
        ctx.fillStyle = `rgba(255, 152, 162, ${star.opacity})`; // Soft glowing effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgb(231, 236, 237)";
        ctx.fill();
      });
      requestAnimationFrame(updateStars);
    }

    updateStars();


    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor:"#100A0B",
        // backgroundImage: "linear-gradient( #100A0B, #100A0B, #100A0B, #100A0B,#100A0B,rgb(250, 189, 195))",
        // backgroundImage: "linear-gradient( white, white, white,rgb(250, 189, 195))",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    ></canvas>
  );
};

export default StarryBackground;
