import express from 'express';

const router = express.Router();

const root = 'UI';
router.get('/css/mobileview.css', (req, res) => {
  res.sendFile('/css/mobileview.css', { root });
});

router.get('/css/style.css', (req, res) => {
  res.sendFile('/css/style.css', { root });
});

router.get('/css/switch.css', (req, res) => {
  res.sendFile('/css/switch.css', { root });
});

export default router;
