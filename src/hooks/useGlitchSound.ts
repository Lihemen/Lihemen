export function useGlitchSound(src = "/sounds/glitch.mp3") {
	const glitchAudio = new Audio(src);

	const playAudio = () => {
		glitchAudio.currentTime = 0;
		glitchAudio.play().catch(() => {});
	};

	const stopAudio = () => {
		glitchAudio.pause();
		glitchAudio.currentTime = 0;
	};

	return { playAudio, stopAudio };
}
