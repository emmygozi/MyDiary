import express from 'express';

const router = express.Router();

const root = 'UI';

router.get('/images/boy.png', (req, res) => {
  res.sendFile('/images/boy.png', { root });
});

router.get('/images/bulb.png', (req, res) => {
  res.sendFile('/images/bulb.png', { root });
});

router.get('/images/coffea.jpg', (req, res) => {
  res.sendFile('/images/coffea.jpg', { root });
});

router.get('/images/girl.png', (req, res) => {
  res.sendFile('/images/girl.png', { root });
});

router.get('/images/hamburger.png', (req, res) => {
  res.sendFile('/images/hamburger.png', { root });
});

router.get('/images/idea.png', (req, res) => {
  res.sendFile('/images/idea.png', { root });
});

router.get('/images/lamp.jpg', (req, res) => {
  res.sendFile('/images/lamp.jpg', { root });
});

router.get('/images/narrative.jpg', (req, res) => {
  res.sendFile('/images/narrative.jpg', { root });
});

router.get('/images/pen.png', (req, res) => {
  res.sendFile('/images/pen.png', { root });
});

router.get('/images/piano.jpg', (req, res) => {
  res.sendFile('/images/piano.jpg', { root });
});

router.get('/images/storybook.jpg', (req, res) => {
  res.sendFile('/images/storybook.jpg', { root });
});

export default router;
