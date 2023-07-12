const router = require('express').Router();
const passport = require('passport');

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));


router.get("/github", passport.authenticate("github", { scope: ["profile"] }));


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));



router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/");
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
    });
});

router.get("/login/success", (req, res) => {
    if(req.user) {
    res.status(200).json({
        success: true,
        message: "user sucess to authenticate.",
        user: req.user,
        cookies: req.cookies
    });
}
}); 

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "login/failed"
}));

router.get("/github/callback", passport.authenticate("github", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "login/failed"
}));

router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "login/failed"
}));


module.exports = router;