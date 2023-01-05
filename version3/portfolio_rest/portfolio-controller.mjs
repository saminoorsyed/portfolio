import 'dotenv/config';
import express from 'express';
import * as tech from './portfolio-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post ('/tech', (req,res) => { 
    tech.createTech(
        req.body.name,
        req.body.imageLoc,
        req.body.genre,
        )
        .then(tech => {
            res.status(201).json(tech);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of a document failed due to invalid syntax.' });
        });
});


// RETRIEVE controller ****************************************************

// Get tech by ID
app.get('/tech/:_id', (req, res) => {
    const techId = req.params._id;
    tech.findTechById(techId)
        .then(tech => { 
            if (tech !== null) {
                res.json(tech);
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }         
         });
});


// GET tech filtered by name, imageLoc, or genre
app.get('/tech', (req, res) => {
    let filter = {};
    // filter by name
    if(req.query.name !== undefined){
        filter = { name: req.query.name };
    }
    // filter by imageLoc
    if(req.query.imageLoc !== undefined){
        filter = { imageLoc: req.query.imageLoc };
    }
    // filter by genre
    if(req.query.genre !== undefined){
        filter = { genre: req.query.genre};
    }
    tech.findTech(filter, '', 0)
        .then(tech => {
            res.send(tech);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed' });
        });

});

// DELETE Controller ******************************
app.delete('/tech/:_id', (req, res) => {
    tech.deleteTechById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed' });
        });
});

// UPDATE controller ************************************
app.put('/tech/:_id', (req, res) => {
    tech.replaceTech(
        req.body.name,
        req.body.imageLoc,
        req.body.genre,
    )

    .then(numUpdated => {
        if (numUpdated === 1) {
            res.json({ 
                name: req.body.name, 
                imageLoc: req.body.imageLoc,
                genre: req.body.genre 
            })
        } else {
            res.status(404).json({ Error: 'Document not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Request to update a document failed' });
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});