export function speechRecognition(
	onResult: (val: string) => void,
	onError: (err: SpeechRecognitionErrorEvent) => void
) {
	const recognition = new webkitSpeechRecognition();
	recognition.onstart = () => {
		onResult('Listening...');
	};
	recognition.onerror = onError;
	recognition.onresult = (res) => {
		onResult(res.results[0][0].transcript);
	};
	function start() {
		recognition.start();
	}
	function stop() {
		recognition.stop();
	}
	return { start, stop };
}
