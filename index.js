import express from 'express';
const app = express();
const port = process.env.PORT || 2000;
app.get('/api', (req, res) => {
    const hex = "0123456789ABCDEF";
    const color = `#${hex[Math.floor(Math.random()*15)]}${hex[Math.floor(Math.random()*15)]}${hex[Math.floor(Math.random()*15)]}${hex[Math.floor(Math.random()*15)]}${hex[Math.floor(Math.random()*15)]}${hex[Math.floor(Math.random()*15)]}`;
    res.send(color);
});
app.listen(port, () => {
    console.log("Your personal random color generator is running !!");
});