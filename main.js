//IMPORTANT: Make sure to use Kaboom version 0.5.0 for this game by adding the correct script tag in the HTML file.

kaboom({
	global: true,
	width: 1100,
	height: 800,
	scale: 1,
	clearColor: [0, 0, 0, 1],
	crisp: true,
	debug: false,
});
const MOVE_SPEED = 500;
loadSprite("bg", "./assets/img/bg.png");
loadSprite("guy", "./assets/img/guy.png");
scene("main", () => {
	add([
		text("Snack On It", 50),
		color(255, 255, 0),
		pos(width() / 2, height() / 2),
		origin("center"),
	]);
	add([
		text("Press Enter to Start", 15),
		color(255, 255, 255),
		pos(width() / 2, height() / 2 + 60),
		origin("center"),
	]);
	keyPress("enter", () => {
		go("level1");
	});
});
scene("level1", () => {
	add([sprite("bg")]); // Background Sprite //]); // programmer sprite
	const player = add([
		sprite("guy"),
		pos(width() / 2, height() - 70),
		origin("center"),
		area(),
		scale(3),
	]);
	keyDown("left", () => {
		player.move(-MOVE_SPEED, 0);
	});

	keyDown("right", () => {
		player.move(MOVE_SPEED, 0);
	});
});

start("main");
