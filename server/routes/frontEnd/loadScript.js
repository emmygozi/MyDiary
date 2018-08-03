import express from 'express';

const router = express.Router();

const root = 'UI';
router.get('/js/mobileview.js', (req, res) => {
  res.sendFile('/js/mobileview.js', { root });
});

router.get('/js/passwordvalidation.js', (req, res) => {
  res.sendFile('/js/passwordvalidation.js', { root });
});

router.get('/js/fetchapi/signup.js', (req, res) => {
  res.sendFile('/js/fetchapi/signup.js', { root });
});


export default router;
