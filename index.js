const express = require('express');
const app = express();
// app.use((req,res)=>{
//     console.log('We got a new request!');
//     res.send({Name: 'Basim',
//     age: 33,
//     job: 'Software Engineer'});
// })

app.get('/', (req,res) => {
    res.send("Welcomt to the hom page!")
});

app.get('/cats', (req,res) => {
    res.send("Meow!")
});

app.get('/dogs', (req,res)=>{
    res.send("Woof!")

})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})